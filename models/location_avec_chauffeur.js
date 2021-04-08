const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location_avec_chauffeur', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'location',
        key: 'id'
      }
    },
    la_formule_ac_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formule_avec_chauffeur',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'location_avec_chauffeur',
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
        name: "IDX_C11B874983E2964E",
        using: "BTREE",
        fields: [
          { name: "la_formule_ac_id" },
        ]
      },
    ]
  });
};
