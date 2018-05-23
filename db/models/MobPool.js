const Sequelize = require('sequelize');

/*
+----------------+----------------------+------+-----+---------+-------+
| Field          | Type                 | Null | Key | Default | Extra |
+----------------+----------------------+------+-----+---------+-------+
| poolid         | int(10) unsigned     | NO   | PRI | NULL    |       |
| name           | varchar(24)          | YES  |     | NULL    |       |
| packet_name    | varchar(24)          | YES  |     | NULL    |       |
| familyid       | smallint(4) unsigned | NO   |     | 0       |       |
| modelid        | binary(20)           | NO   |     | NULL    |       |
| mJob           | tinyint(2) unsigned  | NO   |     | 1       |       |
| sJob           | tinyint(2) unsigned  | NO   |     | 1       |       |
| cmbSkill       | tinyint(2) unsigned  | NO   |     | 1       |       |
| cmbDelay       | smallint(3) unsigned | NO   |     | 240     |       |
| cmbDmgMult     | smallint(4) unsigned | NO   |     | 100     |       |
| behavior       | smallint(5) unsigned | NO   |     | 0       |       |
| aggro          | tinyint(1) unsigned  | NO   |     | 0       |       |
| true_detection | tinyint(1) unsigned  | NO   |     | 0       |       |
| links          | tinyint(1) unsigned  | NO   |     | 0       |       |
| mobType        | smallint(5) unsigned | NO   |     | 0       |       |
| immunity       | int(10)              | NO   |     | 0       |       |
| name_prefix    | tinyint(4) unsigned  | NO   |     | 0       |       |
| flag           | int(11) unsigned     | NO   |     | 0       |       |
| entityFlags    | int(11) unsigned     | NO   |     | 0       |       |
| animationsub   | tinyint(1)           | NO   |     | 0       |       |
| hasSpellScript | tinyint(1) unsigned  | NO   |     | 0       |       |
| spellList      | smallint(4)          | NO   |     | 0       |       |
| namevis        | tinyint(4)           | NO   |     | 1       |       |
| roamflag       | smallint(3) unsigned | NO   |     | 0       |       |
| skill_list_id  | smallint(5) unsigned | NO   |     | 0       |       |
+----------------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('mob_pools', {
        poolid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        name: Sequelize.STRING,
        packet_name: Sequelize.STRING,
        familyid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        modelid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: null },
        mJob: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
        sJob: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
        cmbSkill: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
        cmbDelay: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 240 },
        cmbDmgMult: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 100 },
        behavior: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        aggro: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        true_detection: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        links: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        mobType: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        immunity: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        name_prefix: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        flag: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        entityFlags: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        animationsub: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        hasSpellScript: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        spellList: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        namevis: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        roamflag: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        skill_list_id: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    }, { timestamps: false });
}