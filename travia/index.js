const JSONdb = require("simple-json-db");
var req = require('./requests.js');
const {authenticate} = require("./auth");
module.exports = function () {

   authenticate().then(result=>{
      if(result) {
          var db = new JSONdb('./db.json')
          req.getTravelAgentList().then(taList => {
             for (var i = 0; i < taList.length; i++) {
                var ta = req.getTravelAgent(taList[i].id).then(taresult => {
                    return taresult;
                });

              req.getListOfPropertiesForTravelAgentById(taList[i].id).then(pList => {
                   for (var j = 0; j < pList.length; j++) {
                       var prop = req.getPropertyInfo(pList[j].id).then(presult => {
                          return presult;
                       });
                       req.getRooms(pList[j].id).then(rList =>{

                        for (var k = 0; k < rList.length; k++) {

                        }
                      });

                   }

                })



             }
          }).finally(result => {

          });
      }

   });
}