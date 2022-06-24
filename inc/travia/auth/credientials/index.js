const qs = require("qs");
var data ={
    username: 'larus@islandsvefir.is',
    password: 'TAbekind4441!',
    grant_type: 'password'
};
module.exports = {
        method: 'post'
        ,
        url: 'https://stage-api.travia.is/oauth/token',
        headers: {
            'Authorization': 'Basic Z29kby1pczpnb2RvQXBwbGljYXRpb24=',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    data:qs.stringify(data)
}