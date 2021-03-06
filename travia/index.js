const JSONdb = require("simple-json-db");
var req = require('./requests.js');
const {authenticate} = require("./auth");
module.exports = function () {

    authenticate()
            var db = new JSONdb('./db.json');
            db.JSON([])

            req.getTravelAgentList().then(travelagents => {
                for (var i = 0; i < travelagents.length; i++) {
                    req.getTravelAgent(travelagents[i].id).then(ta =>{
                        req.getListOfPropertiesForTravelAgentById(
                            ta.id
                        ).then(taprops => {
                            console.log(taprops)
                            for (var j = 0; j < taprops.length; j++) {
                                req.getPropertyInfo(taprops[j].id).then(prop => {

                                    req.getRooms(prop.id).then(proprooms => {
                                        for (var k = 0; k < proprooms.length; k++) {
                                            var room = proprooms[k];
                                            var output = db.JSON();
                                            output.push({

                                                property:prop,
                                                room:room
                                            })

                                            db.JSON(output);
                                            db.sync()
                                        }
                                    });

                                });

                            }
                        });

                    })

                }
            }).catch(error => {
                console.log(error)
            }).finally(final => {

            })





}