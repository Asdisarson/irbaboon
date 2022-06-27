
var axios = require('axios');
var JSONdb = require('simple-json-db');


module.exports = {
    getListOfPropertiesForTravelAgentById: function (id) {
        var credentials = new JSONdb('travia/auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
        return axios(
            {
                method: 'get'
                ,
                url: 'https://stage-api.travia.is/api/v1/travelAgents/cooperations/cooperatingPropertiesSelectList?travelAgent=' + id,
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {

            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    },
    getPropertyInfo: function (id) {
        var credentials = new JSONdb('travia/auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
        return axios(
            {
                method: 'get'
                ,
                url: 'https://stage-api.travia.is/api/v1/properties/' + id +'/details/cooperating',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {

            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    },
    getTravelAgent: function (id) {
        var credentials = new JSONdb('travia/auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
        return axios(
            {
                method: 'get'
                ,
                url: 'https://stage-api.travia.is/api/v1/travelAgents/' + id +'/details',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {

            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    },
    getRooms: function (id) {
        var credentials = new JSONdb('travia/auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
        return axios(
            {
                method: 'get'
                ,
                url: 'https://stage-api.travia.is/api/v1/properties/'+id+'/rooms',
                headers: {
                    'Authorization': auth,
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {

            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    },
    getTravelAgentList: function () {
        var credentials = new JSONdb('travia/auth/credientials/token.json');
        var token = credentials.JSON();
        var auth = 'Bearer '+token.access_token;
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

            return response.data;
        })
            .catch(function (error) {
                console.log(error);
                return false;
            });
    },

}