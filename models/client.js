const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cp: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ville: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
