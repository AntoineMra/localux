var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _client = require("./client");
var _formule = require("./formule");
var _formule_avec_chauffeur = require("./formule_avec_chauffeur");
var _formule_sans_chauffeur = require("./formule_sans_chauffeur");
var _location = require("./location");
var _location_avec_chauffeur = require("./location_avec_chauffeur");
var _location_sans_chauffeur = require("./location_sans_chauffeur");
var _modele = require("./modele");
var _tarification = require("./tarification");
var _vehicule = require("./vehicule");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var formule = _formule(sequelize, DataTypes);
  var formule_avec_chauffeur = _formule_avec_chauffeur(sequelize, DataTypes);
  var formule_sans_chauffeur = _formule_sans_chauffeur(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var location_avec_chauffeur = _location_avec_chauffeur(sequelize, DataTypes);
  var location_sans_chauffeur = _location_sans_chauffeur(sequelize, DataTypes);
  var modele = _modele(sequelize, DataTypes);
  var tarification = _tarification(sequelize, DataTypes);
  var vehicule = _vehicule(sequelize, DataTypes);

  location.belongsTo(client, { as: "le_client", foreignKey: "le_client_id"});
  client.hasMany(location, { as: "locations", foreignKey: "le_client_id"});
  formule_avec_chauffeur.belongsTo(formule, { as: "id_formule", foreignKey: "id"});
  formule.hasOne(formule_avec_chauffeur, { as: "formule_avec_chauffeur", foreignKey: "id"});
  formule_sans_chauffeur.belongsTo(formule, { as: "id_formule", foreignKey: "id"});
  formule.hasOne(formule_sans_chauffeur, { as: "formule_sans_chauffeur", foreignKey: "id"});
  location_avec_chauffeur.belongsTo(formule_avec_chauffeur, { as: "la_formule_ac", foreignKey: "la_formule_ac_id"});
  formule_avec_chauffeur.hasMany(location_avec_chauffeur, { as: "location_avec_chauffeurs", foreignKey: "la_formule_ac_id"});
  location_sans_chauffeur.belongsTo(formule_sans_chauffeur, { as: "la_formule_sc", foreignKey: "la_formule_sc_id"});
  formule_sans_chauffeur.hasMany(location_sans_chauffeur, { as: "location_sans_chauffeurs", foreignKey: "la_formule_sc_id"});
  tarification.belongsTo(formule_sans_chauffeur, { as: "la_formule_sc", foreignKey: "la_formule_sc_id"});
  formule_sans_chauffeur.hasMany(tarification, { as: "tarifications", foreignKey: "la_formule_sc_id"});
  location_avec_chauffeur.belongsTo(location, { as: "id_location", foreignKey: "id"});
  location.hasOne(location_avec_chauffeur, { as: "location_avec_chauffeur", foreignKey: "id"});
  location_sans_chauffeur.belongsTo(location, { as: "id_location", foreignKey: "id"});
  location.hasOne(location_sans_chauffeur, { as: "location_sans_chauffeur", foreignKey: "id"});
  tarification.belongsTo(modele, { as: "le_modele", foreignKey: "le_modele_id"});
  modele.hasMany(tarification, { as: "tarifications", foreignKey: "le_modele_id"});
  vehicule.belongsTo(modele, { as: "le_modele", foreignKey: "le_modele_id"});
  modele.hasMany(vehicule, { as: "vehicules", foreignKey: "le_modele_id"});
  location.belongsTo(vehicule, { as: "le_vehicule", foreignKey: "le_vehicule_id"});
  vehicule.hasMany(location, { as: "locations", foreignKey: "le_vehicule_id"});

  return {
    SequelizeMeta,
    client,
    formule,
    formule_avec_chauffeur,
    formule_sans_chauffeur,
    location,
    location_avec_chauffeur,
    location_sans_chauffeur,
    modele,
    tarification,
    vehicule,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
