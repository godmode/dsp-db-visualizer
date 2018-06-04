const Sequelize = require('sequelize');

/*
+------------+----------------------+------+-----+---------+-------+
| Field      | Type                 | Null | Key | Default | Extra |
+------------+----------------------+------+-----+---------+-------+
| familyid   | smallint(5) unsigned | NO   | PRI | NULL    |       |
| modid      | smallint(5) unsigned | NO   | PRI | NULL    |       |
| value      | smallint(5)          | NO   |     | 0       |       |
| is_mob_mod | tinyint(1)           | NO   |     | 0       |       |
+------------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('mob_family_mods', {
        familyid: { type: Sequelize.STRING(30), allowNull: false, primaryKey: true }, 
        modid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        value: { type: Sequelize.INTEGER, allowNull: false },
        is_mob_mod: { type: Sequelize.INTEGER, allowNull: false }
    }, { timestamps: false });
}