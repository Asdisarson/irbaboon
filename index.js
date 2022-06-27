const express = require('express')
const app = express()
const port = 3000
var JSONdb = require('simple-json-db');


var winston = require('winston'),
    expressWinston = require('express-winston');
var travia = require('./travia/index.js');

app.get('/auth', (req, res) => {
    res.send(travia())
})
app.get('/', (req, res) => {
    var db = new JSONdb('./db.json');
    res.send(db.JSON())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})