const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location_sans_chauffeur', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'location',
        key: 'id'
      }
    },
    la_formule_sc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formule_sans_chauffeur',
        key: 'id'
      }
    },
    nb_kms_depart: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nb_km_retour: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'location_sans_chauffeur',
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
        name: "IDX_50D7BFCF99C252AC",
        using: "BTREE",
        fields: [
          { name: "la_formule_sc_id" },
        ]
      },
    ]
  });
};
