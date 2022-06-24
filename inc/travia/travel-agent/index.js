var req = require('./requests/index.js');
const JSONdb = require("simple-json-db");

module.exports = function () {
    var isTrue = req.getList();
    if(isTrue) {
        var db = new JSONdb('./db.json');
        var data = db.JSON();
        return data;
    }
    else {return false;}

}