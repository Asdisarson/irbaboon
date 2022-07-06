const express = require('express')
const app = express()
const port = 3000
var JSONdb = require('simple-json-db');
var mysql = require('./nicebooking/index.js')
var sql = require('./nicebooking/queries.js')
var winston = require('winston'),
    expressWinston = require('express-winston');
var travia = require('./travia/index.js');
mysql.query(sql.insertLocationRelationship(1,2,3,4,'st_hotel','multi_location'));
app.get('/auth', (req, res) => {
    res.send(travia())
})
app.get('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})