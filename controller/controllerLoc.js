const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const Location = require("../models/location")(sequelize,DataTypes);



exports.addLocation = (req, res) => {
  const montant = 20;
  const locaType = 'avec chauffeur';
  console.log(req.param("dateLoc") + ":00 " + req.param("HeureDep"));

  const location = {
    le_vehicule_id: req.param("vehiculeID"),
    date_location: req.param("dateLoc"),
    montant_regle: montant,
    date_hre_depart_prevu: req.param("dateLoc") + " " + req.param("HeureDep"),
    date_hre_retour_prevu: req.param("dateLoc") + " " + req.param("HeureRet"),
    location_type: locaType,
    le_client_id: req.param("clientID"),
  };

  Location.create(location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Il y a eu une erreur pendant la réservation de la location."
      });
    });
};
