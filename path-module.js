const path = require('path')
console.log(path.sep);

const filePath =path.join('/subfolder','path.txt')

console.log(filePath);

const basePath = path.basename(filePath)
console.log(basePath);

const absolute =path.resolve(__dirname,'subfolder','path.txt')
console.log(absolute);