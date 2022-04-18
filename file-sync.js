const {readFileSync, writeFileSync } = require('fs')
console.log("Starting...");
const first = readFileSync('./subfolder/first.txt','utf-8')
const second = readFileSync('./subfolder/path.txt','utf-8')

writeFileSync(
    './subfolder/result-sync.txt',
    `HERE IS THE RESULT IS: ${first} , ${second}`,
    {flag:'a'}
)
console.log("File Is Created!!!");
console.log("please Check the given Folder");
