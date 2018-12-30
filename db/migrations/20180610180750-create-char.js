'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Chars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      charid: {
        type: Sequelize.INTEGER
      },
      accid: {
        type: Sequelize.INTEGER
      },
      charname: {
        type: Sequelize.STRING
      },
      nation: {
        type: Sequelize.INTEGER
      },
      pos_zone: {
        type: Sequelize.INTEGER
      },
      pos_prevzone: {
        type: Sequelize.INTEGER
      },
      pos_rot: {
        type: Sequelize.INTEGER
      },
      pos_x: {
        type: Sequelize.FLOAT
      },
      pos_y: {
        type: Sequelize.FLOAT
      },
      boundary: {
        type: Sequelize.INTEGER
      },
      home_zone: {
        type: Sequelize.INTEGER
      },
      home_rot: {
        type: Sequelize.INTEGER
      },
      home_x: {
        type: Sequelize.FLOAT
      },
      home_y: {
        type: Sequelize.FLOAT
      },
      home_z: {
        type: Sequelize.FLOAT
      },
      missions: {
        type: Sequelize.BLOB
      },
      assault: {
        type: Sequelize.BLOB
      },
      campain: {
        type: Sequelize.BLOB
      },
      quests: {
        type: Sequelize.BLOB
      },
      keyitems: {
        type: Sequelize.BLOB
      },
      set_blue_spells: {
        type: Sequelize.BLOB
      },
      abilities: {
        type: Sequelize.BLOB
      },
      weaponskills: {
        type: Sequelize.BLOB
      },
      titles: {
        type: Sequelize.BLOB
      },
      zones: {
        type: Sequelize.BLOB
      },
      playtime: {
        type: Sequelize.INTEGER
      },
      unlocked_weapons: {
        type: Sequelize.BLOB
      },
      gmlevel: {
        type: Sequelize.INTEGER
      },
      isnewplayer: {
        type: Sequelize.INTEGER
      },
      mentor: {
        type: Sequelize.INTEGER
      },
      campaign_allegiance: {
        type: Sequelize.INTEGER
      },
      isstylelocked: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Chars');
  }
};