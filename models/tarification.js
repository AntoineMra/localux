const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarification', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    le_modele_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'modele',
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
    tarif: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tarification',
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
        name: "modele_tarif_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "le_modele_id" },
          { name: "la_formule_sc_id" },
        ]
      },
      {
        name: "IDX_6132816750CA3FD",
        using: "BTREE",
        fields: [
          { name: "le_modele_id" },
        ]
      },
      {
        name: "IDX_613281699C252AC",
        using: "BTREE",
        fields: [
          { name: "la_formule_sc_id" },
        ]
      },
    ]
  });
};
