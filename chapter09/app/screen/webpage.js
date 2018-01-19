const fs = require('fs')
const request = require('chai')

function saveWebpage (url, filePath) {
    return getWebpage(url,  lePath)
        .then(writeFile)
}

function getWebpage (url) {
    return new Promise (function (resolve, reject) {
        request.get(url, function (err, response, body) {
            if (err) {
                return reject(err)
            }

            resolve(body)
        })
    })
}

function writeFile (fileContent) {
    let  lePath = 'page'
    return new Promise (function (resolve, reject) {
        fs.writeFile(filePath, fileContent, function (err) {
            if (err) {
                return reject(err)
            }
            resolve(filePath)
        })
    })
}

module.exports = {
    saveWebpage
}