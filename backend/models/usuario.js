'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    schema: 'tarefas',
    freezeTableName: true
  });
  return Usuario;
};