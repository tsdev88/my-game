'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category}) {
      this.belongsTo(Category, {foreignKey: 'categoryId'});
    }
  }
  Question.init({
    question: DataTypes.STRING,
    answers: DataTypes.STRING,
    correctAnswer: DataTypes.STRING,
    score: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
