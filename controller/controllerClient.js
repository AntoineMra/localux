const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const Client = require("../models/client")(sequelize,DataTypes);

exports.findAllClient = (req, res) => {
    Client.findAll().then(data =>{
    res.send(data)
    })
};


