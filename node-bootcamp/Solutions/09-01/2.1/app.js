const fs = require('fs')
fs.writeFileSync('notes.txt', 'My name is Omri.')
fs.appendFileSync('notes.txt', ' And my last name is Uday')
fs.promises.copyFile('./notes.txt', './fileCopied')
fs.promises.rename('fileCopied', 'newFile')
console.log(fs.readdirSync("./"));