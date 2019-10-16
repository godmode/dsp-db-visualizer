'use strict';
module.exports = (sequelize, DataTypes) => {
  var Char = sequelize.define('Char', {
    charid: DataTypes.INTEGER,
    accid: DataTypes.INTEGER,
    charname: DataTypes.STRING,
    nation: DataTypes.INTEGER,
    pos_zone: DataTypes.INTEGER,
    pos_prevzone: DataTypes.INTEGER,
    pos_rot: DataTypes.INTEGER,
    pos_x: DataTypes.FLOAT,
    pos_y: DataTypes.FLOAT,
    boundary: DataTypes.INTEGER,
    home_zone: DataTypes.INTEGER,
    home_rot: DataTypes.INTEGER,
    home_x: DataTypes.FLOAT,
    home_y: DataTypes.FLOAT,
    home_z: DataTypes.FLOAT,
    missions: DataTypes.BLOB,
    assault: DataTypes.BLOB,
    campain: DataTypes.BLOB,
    quests: DataTypes.BLOB,
    keyitems: DataTypes.BLOB,
    set_blue_spells: DataTypes.BLOB,
    abilities: DataTypes.BLOB,
    weaponskills: DataTypes.BLOB,
    titles: DataTypes.BLOB,
    zones: DataTypes.BLOB,
    playtime: DataTypes.INTEGER,
    unlocked_weapons: DataTypes.BLOB,
    gmlevel: DataTypes.INTEGER,
    isnewplayer: DataTypes.INTEGER,
    mentor: DataTypes.INTEGER,
    campaign_allegiance: DataTypes.INTEGER,
    isstylelocked: DataTypes.INTEGER
  }, {});
  Char.associate = function(models) {
    // associations can be defined here
  };
  return Char;
};