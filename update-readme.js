const fs = require('fs')
const path = require('path')

// TODO, join the paths to give relative to initial dir
async function getMarkdownFiles (dirPath = '.') {
  const dir = await fs.promises.opendir(dirPath)
  let fileEnts = []

  for await (const dirent of dir) {
    if (dirent.isDirectory() && !dirent.name.startsWith('.')) {
      getMarkdownFiles(dirent.name)
    } else if (dirent.isFile() && path.extname(dirent.name) === '.md') {
      fileEnts.push(dirent.name)
    }
  }

  return fileEnts
}

async function main () {
  const markdownFiles = await getMarkdownFiles('.')

  // TODO: update the README with links to files
  console.log(`markdownFiles: ${JSON.stringify(markdownFiles, null, 2)}`)
}

main()