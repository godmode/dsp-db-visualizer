const Sequelize = require('sequelize');

/*
+-------------+----------------------+------+-----+---------+-------+
| Field       | Type                 | Null | Key | Default | Extra |
+-------------+----------------------+------+-----+---------+-------+
| zoneid      | smallint(3) unsigned | NO   | PRI | 0       |       |
| zonetype    | smallint(5) unsigned | NO   |     | 0       |       |
| zoneip      | tinytext             | NO   |     | NULL    |       |
| zoneport    | smallint(5) unsigned | NO   |     | 0       |       |
| name        | tinytext             | NO   |     | NULL    |       |
| music_day   | tinyint(3) unsigned  | NO   |     | 0       |       |
| music_night | tinyint(3) unsigned  | NO   |     | 0       |       |
| battlesolo  | tinyint(3) unsigned  | NO   |     | 0       |       |
| battlemulti | tinyint(3) unsigned  | NO   |     | 0       |       |
| restriction | tinyint(2) unsigned  | NO   |     | 0       |       |
| tax         | float(5,2) unsigned  | NO   |     | 0.00    |       |
| misc        | smallint(5) unsigned | NO   |     | 0       |       |
+-------------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('zone_settings', {
        zoneid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        zonetype: { type: Sequelize.INTEGER, allowNull: false },
        zoneip: { type: Sequelize.TEXT('tiny'), allowNull: false },
        zoneport: { type: Sequelize.INTEGER, allowNull: false },
        name: { type: Sequelize.TEXT('tiny'), allowNull: false },
        music_day: { type: Sequelize.INTEGER, allowNull: false },
        music_night: { type: Sequelize.INTEGER, allowNull: false },
        battlesolo: { type: Sequelize.INTEGER, allowNull: false },
        battlemulti: { type: Sequelize.INTEGER, allowNull: false },
        restriction: { type: Sequelize.INTEGER, allowNull: false },
        tax: { type: Sequelize.FLOAT(5, 2), allowNull: false },
        misc: { type: Sequelize.INTEGER, allowNull: false },
        
    }, { timestamps: false });
}