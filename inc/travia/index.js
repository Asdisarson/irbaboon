var ta = require('./travel-agent/index.js');
const JSONdb = require("simple-json-db");
const {authenticate} = require("./auth");
module.exports = function () {
   authenticate();

   ta();
}