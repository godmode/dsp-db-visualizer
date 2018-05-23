const Sequelize = require('sequelize');

/*
+---------------+---------------------+------+-----+---------+-------+
| Field         | Type                | Null | Key | Default | Extra |
+---------------+---------------------+------+-----+---------+-------+
| mobid         | int(10)             | NO   | PRI | NULL    |       |
| mobname       | varchar(24)         | YES  |     | NULL    |       |
| polutils_name | varchar(50)         | YES  |     | NULL    |       |
| groupid       | int(10) unsigned    | NO   |     | 0       |       |
| pos_x         | float(7,3)          | NO   |     | 0.000   |       |
| pos_y         | float(7,3)          | NO   |     | 0.000   |       |
| pos_z         | float(7,3)          | NO   |     | 0.000   |       |
| pos_rot       | tinyint(3) unsigned | NO   |     | 0       |       |
+---------------+---------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('mob_spawn_points', {
        mobid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        mobname: Sequelize.STRING(24), 
        polutils_name: Sequelize.STRING(50),
        groupid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        pos_x: { type: Sequelize.FLOAT(7, 3), allowNull: false, defaultValue: 0.000 },
        pos_y: { type: Sequelize.FLOAT(7, 3), allowNull: false, defaultValue: 0.000 },
        pos_z: { type: Sequelize.FLOAT(7, 3), allowNull: false, defaultValue: 0.000 },
        pos_rot: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    }, { timestamps: false });
}