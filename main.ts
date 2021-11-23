const fs = require('fs');
const zlib = require('zlib');



const unzip = zlib.createUnzip();
const readStream1 = fs.createReadStream('book.txt.gz');
const writeStream1 = fs.createWriteStream('book.txt');
readStream1.pipe(unzip).pipe(writeStream1);
