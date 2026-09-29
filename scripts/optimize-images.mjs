// One-off: converts the decorative coin PNGs to compact WebP.
// The coins render at 100-300px, sit behind content at ~45% opacity and
// are purely decorative, so 256px @ q62 is plenty of detail.
// Run: node scripts/optimize-images.mjs
import { chmodSync, readFileSync, readdirSync, renameSync, statSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

const coinsDir = 'public/assets/img/coins'
let totalBefore = 0
let totalAfter = 0

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Windows can briefly lock freshly written files (OneDrive/Defender
// scans); clear flags and retry with a patient backoff.
async function replaceFile(tmpPath, outPath) {
  for (let attempt = 0; ; attempt++) {
    try {
      try {
        chmodSync(outPath, 0o666)
      } catch (e) {
        if (e.code !== 'ENOENT') throw e
      }
      try {
        unlinkSync(outPath)
      } catch (e) {
        if (e.code !== 'EBUSY') throw e
      }
      renameSync(tmpPath, outPath)
      return
    } catch (e) {
      if (attempt >= 10) throw e
      await sleep(800 * (attempt + 1))
    }
  }
}

for (const file of readdirSync(coinsDir)) {
  if (!/\.(png|webp)$/.test(file)) continue
  const inPath = join(coinsDir, file)
  const outPath = inPath.replace(/\.(png|webp)$/, '.webp')
  const tmpPath = `${outPath}.tmp`
  const before = statSync(inPath).size
  // Buffer input keeps sharp from holding an open handle on the input
  // file, which would block replacing it on Windows.
  const input = readFileSync(inPath)
  const data = await sharp(input, { failOn: 'none' })
    .resize({ width: 256, withoutEnlargement: true })
    .webp({ quality: 62, effort: 5 })
    .toBuffer()
  writeFileSync(tmpPath, data)
  await replaceFile(tmpPath, outPath)
  if (inPath !== outPath) unlinkSync(inPath)
  const after = statSync(outPath).size
  totalBefore += before
  totalAfter += after
  console.log(`${file}  ${(before / 1024).toFixed(1)} KB -> ${(after / 1024).toFixed(1)} KB`)
}

console.log(`Total: ${(totalBefore / 1024).toFixed(1)} KB -> ${(totalAfter / 1024).toFixed(1)} KB (saved ${((totalBefore - totalAfter) / 1024).toFixed(1)} KB)`)
