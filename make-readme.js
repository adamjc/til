const fs = require('fs')
const path = require('path')

async function getMarkdownFiles (dirPath = '.') {
  const dir = await fs.promises.opendir(dirPath)
  let fileEnts = []

  for await (const dirent of dir) {
    if (dirent.isDirectory() && !dirent.name.startsWith('.')) {
      const filePaths = await getMarkdownFiles(path.join(dir.path, dirent.name))
      fileEnts.push(filePaths)
    } else if (dirent.isFile() && path.extname(dirent.name) === '.md' && dirent.name !== 'README.md') {
      fileEnts.push(path.join(dir.path, dirent.name))
    }
  }

  return fileEnts
}

// path = some/slash/delimited/path
function genSubHeadings (path) {
  return path.split('/').map((heading, i) => `#${'#'.repeat(i + 1)} ${heading}`)
}

async function getTitle (path) {
  const title = (await fs.promises.readFile(path)).toString().split('\n')[0]
  return title.slice(2, title.length)
}

async function makeReadme () {
  const markdownFiles = (await getMarkdownFiles('.')).flat(Infinity)

  let readme = ['# TIL']
  for (const dirent of markdownFiles) {
    const headings = genSubHeadings(path.parse(dirent).dir)

    for (const heading of headings) {
      if (!readme.includes(heading)) {
        readme.push(heading)
      }
    }

    const title = await getTitle(dirent)
    const link = `[${title}](${dirent})`
    readme.push(link)
  }

  await fs.promises.writeFile('README.md', readme.join('\n\n'))
}

makeReadme()