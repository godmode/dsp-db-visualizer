const Sequelize = require('sequelize');

/*
+-------------+----------------------+------+-----+---------+-------+
| Field       | Type                 | Null | Key | Default | Extra |
+-------------+----------------------+------+-----+---------+-------+
| groupid     | int(10) unsigned     | NO   | PRI | NULL    |       |
| poolid      | int(10) unsigned     | NO   |     | 0       |       |
| zoneid      | smallint(3) unsigned | NO   |     | 0       |       |
| respawntime | int(10) unsigned     | NO   |     | 0       |       |
| spawntype   | tinyint(3) unsigned  | NO   |     | 0       |       |
| dropid      | int(10) unsigned     | NO   |     | 0       |       |
| HP          | mediumint(8)         | NO   |     | 0       |       |
| MP          | mediumint(8)         | NO   |     | 0       |       |
| minLevel    | tinyint(2) unsigned  | NO   |     | 0       |       |
| maxLevel    | tinyint(2) unsigned  | NO   |     | 0       |       |
| allegiance  | tinyint(2) unsigned  | NO   |     | 0       |       |
+-------------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('mob_groups', {
        groupid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        poolid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        zoneid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        respawntime: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        spawntype: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        dropid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        HP: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        MP: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        minLevel: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        maxLevel: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        allegiance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    }, { timestamps: false });
}