// delete-css.js — ES Module version
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Needed to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Adjust path to match your folder structure
const componentsDir = path.join(__dirname, 'client/src', 'components')

function deleteCssFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      deleteCssFiles(fullPath)
    } else if (file.endsWith('.css')) {
      console.log(`🗑️ Deleting: ${fullPath}`)
      fs.unlinkSync(fullPath)
    }
  })
}

deleteCssFiles(componentsDir)
console.log('✅ Done!')
