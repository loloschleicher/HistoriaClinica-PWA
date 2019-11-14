const historialRepository = require("../repositories/historialRepository");
// const historialTurnos = require("../models/historialTurnosModel");

module.exports = {
  historialDrogas: function(req, res) {
    historialRepository
      .historialDrogaObtener(req.params.dni)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  },
  historialTurnosObtener: function(req, res) {
    //let dni = req.params.dni;
    return historialRepository
      .historialTurnosObtener(req.params.dni)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  },
  obtenerHistoriaClinica: function(req, res) {
    historialRepository
      .historialClinicoObtener(req.params.dni)
      .then(historiaClinica => {
        res.send(historiaClinica[0]);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
