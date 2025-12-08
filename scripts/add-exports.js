const fs = require('fs')
const path = require('path')

// This script adds module.exports to quiz files
// Run: node scripts/add-exports.js

function findQuizFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== '__tests__') {
      findQuizFiles(filePath, fileList)
    } else if (file.includes('quiz') && file.endsWith('.js') && !file.includes('answer')) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

function addExports() {
  const baseDir = path.join(__dirname, '..')
  const quizFiles = findQuizFiles(baseDir)

  for (const filePath of quizFiles) {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // Skip if already has exports
    if (content.includes('module.exports')) {
      console.log(`⏭  Skipping ${path.relative(baseDir, filePath)} - already has exports`)
      continue
    }
    
    // Extract all variable declarations (let/const) that are likely quiz answers
    const variablePattern = /^(let|const)\s+(\w+)\s*[=;]/gm
    const exports = new Set()
    let match
    
    while ((match = variablePattern.exec(content)) !== null) {
      const varName = match[2]
      // Skip helper functions and common variables
      if (!['console', 'require', 'module', 'exports', 'path', 'fs'].includes(varName)) {
        exports.add(varName)
      }
    }

    // Extract function declarations
    const functionPattern = /^(const|let)\s+(\w+)\s*=\s*(async\s+)?\(/gm
    while ((match = functionPattern.exec(content)) !== null) {
      exports.add(match[2])
    }

    // Add module.exports
    if (exports.size > 0) {
      const exportList = Array.from(exports).join(',\n  ')
      const exportStatement = `\n\nmodule.exports = {\n  ${exportList}\n}`
      content += exportStatement
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✓ Added exports to ${path.relative(baseDir, filePath)}: ${exports.size} items`)
    } else {
      console.log(`⚠ No exports found in ${path.relative(baseDir, filePath)}`)
    }
  }
  
  console.log('\nDone! Quiz files now export their variables/functions for testing.')
}

addExports()
