const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    le_vehicule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicule',
        key: 'id'
      }
    },
    date_location: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    montant_regle: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    date_hre_depart_prevu: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_hre_depart_reel: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_hre_retour_prevu: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_hre_retour_reel: {
      type: DataTypes.DATE,
      allowNull: true
    },
    location_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    le_client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'location',
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
      {
        name: "IDX_5E9E89CBB6D4F0E",
        using: "BTREE",
        fields: [
          { name: "le_vehicule_id" },
        ]
      },
      {
        name: "IDX_5E9E89CBC0F37DD6",
        using: "BTREE",
        fields: [
          { name: "le_client_id" },
        ]
      },
    ]
  });
};
