var express = require('express'),
    expressRest = require('express-rest');
var winston = require('winston'),
    expressWinston = require('express-winston');
var app = express();
var rest = expressRest(app);
var travia = require('./inc/travia/index.js');
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));

travia();

rest.get('/api/food', function(req, rest) {
    travia();
    rest.ok();
});

rest.get('/api/food/:id', function(req, rest) {
    if (req) rest.ok();
    else rest.notFound();
});

rest.put('/api/food/:id', function(req, rest) {
    return rest.accepted('//' + encodeURI(req.params.id));
});

rest.post('/api/food', function(req, rest) {
    records.push(req.body);
    rest.created('/api/food/' + (records.length - 1));
});

rest.delete('/api/food/:id', function(req, rest) {
    delete records[req.params.id];
    rest.gone();
})

app.listen();
