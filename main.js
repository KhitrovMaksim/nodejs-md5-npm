'use strict'

const getMD5OfFile = require('./md5File')
const cliArgFilePath = process.argv[2]

console.log(getMD5OfFile(cliArgFilePath))