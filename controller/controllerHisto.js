const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const { QueryTypes } = require('sequelize');
const historique = require("../models/historique")(sequelize,DataTypes);

exports.addHistorique = (req, res) => {
   const id = 102;
  const hist = {
    date_location: req.param("date"),
    nb_places: req.param("nbplace"),
    client_id: id,
  };

  historique.create(hist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Il y a eu une erreur."
      });
    });
};

exports.getHistorique = (req, res) => {
   
  historique.sequelize.query(
      `SELECT * FROM historique 
      WHERE client_id = :id`,
    {
      replacements: {id: req.params.id},
      type: QueryTypes.SELECT
    }
      ).then(data => { res.send(data);})
};