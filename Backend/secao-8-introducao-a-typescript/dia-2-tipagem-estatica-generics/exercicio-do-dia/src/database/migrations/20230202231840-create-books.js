'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      author_id: {
        type: Sequelize.INTEGER,
        field: 'author_id',
        references: {
          model: 'authors',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        field: 'genre_id',
        references: {
          model: 'genres',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('books');
  },
};