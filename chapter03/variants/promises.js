function stat (file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        })
    })
}

Promise.all([
    stat('file1'),
    stat('file2'),
    stat('file3')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))