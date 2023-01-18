'use strict'

const md5File = require('md5-file')

function getMD5OfFile (fileToHash) {
    return md5File.sync(fileToHash)
}

module.exports = getMD5OfFile