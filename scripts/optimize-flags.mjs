// Postbuild: recompresses the intl-tel-input flag sprites (same pixel
// dimensions, so sprite offsets stay valid) - the library ships them at
// a high quality level and they cost ~130 KB combined.
import { readdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

const assetsDir = join('dist', 'assets')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Windows can briefly lock freshly written build files (Defender scans,
// sharp input handles) - write to a temp file and rename over the target.
async function replaceSafely(path, tmpPath) {
  for (let attempt = 0; ; attempt++) {
    try {
      renameSync(tmpPath, path)
      return
    } catch {
      if (attempt >= 3) throw new Error(`Could not replace ${path}`)
      await sleep(400 * (attempt + 1))
    }
  }
}

for (const file of readdirSync(assetsDir)) {
  if (!/^flags.*\.webp$/.test(file)) continue
  const path = join(assetsDir, file)
  const tmpPath = `${path}.tmp`
  const before = statSync(path).size
  // Recompress at reduced quality; dimensions untouched so sprite
  // offsets in the CSS stay valid. Reading via a buffer first keeps
  // sharp from holding an open handle on the input file (Windows).
  const input = readFileSync(path)
  const data = await sharp(input).webp({ quality: 62, effort: 6 }).toBuffer()
  writeFileSync(tmpPath, data)
  const after = data.length
  await replaceSafely(path, tmpPath)
  console.log(`${file}  ${(before / 1024).toFixed(1)} KB -> ${(after / 1024).toFixed(1)} KB`)
}
