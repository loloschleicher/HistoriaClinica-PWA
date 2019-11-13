//include the model (aka DB connection)
var db = require("./dbConnection");

const drogasNoEntregadas = "CALL DrogasNoEntregadas";

//create class
var Drogas = {
    //function to query all items
    GetDrogas: (dni) => {
      return new Promise((resolve, reject) => {
        db.query(`${drogasNoEntregadas}(${dni})`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  };
  module.exports = Drogas;