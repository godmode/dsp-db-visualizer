const Sequelize = require('sequelize');

/*
+-----------+----------------------+------+-----+---------+-------+
| Field     | Type                 | Null | Key | Default | Extra |
+-----------+----------------------+------+-----+---------+-------+
| itemid    | smallint(5) unsigned | NO   | PRI | NULL    |       |
| subid     | smallint(4) unsigned | NO   |     | 0       |       |
| name      | tinytext             | NO   |     | NULL    |       |
| sortname  | tinytext             | NO   |     | NULL    |       |
| stackSize | tinyint(2) unsigned  | NO   |     | 1       |       |
| flags     | smallint(5) unsigned | NO   |     | 0       |       |
| aH        | tinyint(2) unsigned  | NO   |     | 99      |       |
| NoSale    | tinyint(1) unsigned  | NO   |     | 0       |       |
| BaseSell  | int(10) unsigned     | NO   |     | 0       |       |
+-----------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('item_basic', {
        itemid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, defaultValue: null },
        name: { type: Sequelize.STRING, allowNull: false, defaultValue: null },
        sortname: { type: Sequelize.STRING, allowNull: false, defaultValue: null }
    }, { timestamps: false, freezeTableName: true });
}