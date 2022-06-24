var axios = require('axios');
var qs = require('qs');
var config = require('./credientials/index.js');
var JSONdb = require('simple-json-db');

module.exports = {
    authenticate: function() {
        axios(config)
            .then(function (response) {
                var db = new JSONdb('inc/travia/auth/credientials/token.json');

                console.log(response.data);
                db.JSON(response.data);
                db.sync();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}