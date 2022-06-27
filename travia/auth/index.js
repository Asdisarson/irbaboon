var axios = require('axios');
var qs = require('qs');
var config = require('./credientials/index.js');
var JSONdb = require('simple-json-db');

module.exports = {
    authenticate: function() {
       return axios(config)
            .then(function (response) {
                var db = new JSONdb('travia/auth/credientials/token.json');

                db.JSON(response.data);
                db.sync();
                return true;
            })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    }
}