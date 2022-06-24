var axios = require('axios');
var JSONdb = require('simple-json-db');


module.exports = {
       getList: function () {
           var credentials = new JSONdb('inc/travia/auth/credientials/token.json');
           var token = credentials.JSON();
           var auth = 'Bearer '+token.access_token;
           console.log(auth);
           return axios(
                {
                    method: 'get'
                    ,
                    url: 'https://stage-api.travia.is/api/v1/travelAgents/selectList',
                    headers: {
                        'Authorization': auth,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                console.log(JSON.stringify(response.data));
                var db = new JSONdb('inc/travia/travel-agent/db.json');
                db.JSON(response.data);
                db.sync();
                return response.data;
            })
                .catch(function (error) {
                    console.log(error);
                    return false;
                });
       },
    GetInfoFromId: function(id) {
        var credentials = new JSONdb('../../auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
        return axios(
            {
                method: 'get'
                ,
                url: 'https://stage-api.travia.is/api/v1/travelAgents/' + id +'/details',
                headers: {
                    'Authorization': auth.toString(),
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            var db = new JSONdb('inc/travia/travel-agent/db.json');
            db.JSON(response.data);
            db.sync();

            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });

    }
}