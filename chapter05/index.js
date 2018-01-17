const pg = require('pg')
const express = require('express')
const bodyParser = require('body-parser')

const conString = 'postgres://libicraft:admin@localhost/node_hero'
const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/users', (req, res, next) => {
    const user = req.body

    pg.connect(conString, (err, client, done) => {
        if (err) {
            console.log('error fetching client from pool', err)
        }
        client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], (err, result) => {
            done()
            if (err) {
                return next(err)
            }
            res.send(200)
        })
    })
})

app.get('/users', (req, res, next) => {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return next(err)
        }
        client.query('SELECT name, age FROM users;', [], function (err, result) {
            done()
            if (err) {
                return next(err)
            }
            res.json(result.rows)
        })
    })
})

app.listen(port, err => {
    if (err) {
        return console.log('something bad happed', err)
    }

    console.log(`server is listening on ${port}`)
})