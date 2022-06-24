
var axios = require('axios');
var JSONdb = require('simple-json-db');


module.exports = {
    getListOfRoomsFromID: function (id) {
        var credentials = new JSONdb('inc/travia/auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
        return axios(
            {
                method: 'get'
                ,
                url: 'https://stage-api.travia.is/api/v1/properties/' + id +'/rooms',
                headers: {
                    'Authorization': auth.toString(),
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            var db = new JSONdb('../db.json');
            db.JSON(response.data);
            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    }
}