const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicule', {
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
    immatriculation: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    date_achat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vehicule',
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
        name: "IDX_292FFF1D750CA3FD",
        using: "BTREE",
        fields: [
          { name: "le_modele_id" },
        ]
      },
    ]
  });
};
