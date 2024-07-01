console.log('Hello from Node.js');

const fs = require('fs')
//this function automatically creates a file on the file system
//and put a text there
fs.writeFileSync('hello.txt', 'Hello from Node.js');
