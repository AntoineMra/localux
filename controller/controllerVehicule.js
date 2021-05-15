const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const { QueryTypes } = require('sequelize');
const Vehicule = require("../models/vehicule")(sequelize,DataTypes);

exports.getVehiculeChauff = (req, res) => {
    Vehicule.sequelize.query(
      `SELECT modele.nom,vehicule.id,vehicule.immatriculation FROM vehicule
      LEFT JOIN location ON vehicule.id= location.le_vehicule_id
      INNER JOIN modele ON vehicule.le_modele_id= modele.id
      WHERE location.date_location != :date OR le_vehicule_id is null
      ORDER BY vehicule.id`,
    {
      replacements: {date: req.params.date},
      type: QueryTypes.SELECT
    }
      ).then(data => { res.send(data);})
          
    }