const Sequelize = require('sequelize');

/*
+-----------+----------------------+------+-----+---------+-------+
| Field     | Type                 | Null | Key | Default | Extra |
+-----------+----------------------+------+-----+---------+-------+
| dropId    | smallint(5) unsigned | NO   | MUL | NULL    |       |
| dropType  | tinyint(3) unsigned  | NO   |     | 0       |       |
| groupId   | tinyint(3) unsigned  | NO   |     | 0       |       |
| groupRate | smallint(4) unsigned | NO   |     | 1000    |       |
| itemId    | smallint(5) unsigned | NO   |     | 0       |       |
| itemRate  | smallint(4) unsigned | NO   |     | 0       |       |
+-----------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('mob_droplist', {
        dropId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, defaultValue: null },
        dropType: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        groupId: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        groupRate: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1000 },
        itemId: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        itemRate: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    }, { timestamps: false, freezeTableName: true });
}