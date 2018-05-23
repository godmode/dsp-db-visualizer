const Sequelize = require('sequelize');

/*
+-----------+----------------------+------+-----+---------+-------+
| Field     | Type                 | Null | Key | Default | Extra |
+-----------+----------------------+------+-----+---------+-------+
| familyid  | smallint(4) unsigned | NO   | PRI | NULL    |       |
| family    | tinytext             | YES  |     | NULL    |       |
| systemid  | tinyint(2) unsigned  | NO   |     | 0       |       |
| system    | tinytext             | YES  |     | NULL    |       |
| mobsize   | tinyint(2) unsigned  | NO   |     | 0       |       |
| speed     | tinyint(3) unsigned  | NO   |     | 40      |       |
| HP        | tinyint(3) unsigned  | NO   |     | 100     |       |
| MP        | tinyint(3) unsigned  | NO   |     | 100     |       |
| STR       | smallint(4) unsigned | NO   |     | 3       |       |
| DEX       | smallint(4) unsigned | NO   |     | 3       |       |
| VIT       | smallint(4) unsigned | NO   |     | 3       |       |
| AGI       | smallint(4) unsigned | NO   |     | 3       |       |
| INT       | smallint(4) unsigned | NO   |     | 3       |       |
| MND       | smallint(4) unsigned | NO   |     | 3       |       |
| CHR       | smallint(4) unsigned | NO   |     | 3       |       |
| ATT       | smallint(4) unsigned | NO   |     | 3       |       |
| DEF       | smallint(4) unsigned | NO   |     | 3       |       |
| ACC       | smallint(4) unsigned | NO   |     | 3       |       |
| EVA       | smallint(4) unsigned | NO   |     | 3       |       |
| Slash     | float                | NO   |     | 1       |       |
| Pierce    | float                | NO   |     | 1       |       |
| H2H       | float                | NO   |     | 1       |       |
| Impact    | float                | NO   |     | 1       |       |
| Fire      | float                | NO   |     | 1       |       |
| Ice       | float                | NO   |     | 1       |       |
| Wind      | float                | NO   |     | 1       |       |
| Earth     | float                | NO   |     | 1       |       |
| Lightning | float                | NO   |     | 1       |       |
| Water     | float                | NO   |     | 1       |       |
| Light     | float                | NO   |     | 1       |       |
| Dark      | float                | NO   |     | 1       |       |
| Element   | float                | NO   |     | 0       |       |
| detects   | smallint(5)          | NO   |     | 0       |       |
| charmable | tinyint(2)           | NO   |     | 0       |       |
+-----------+----------------------+------+-----+---------+-------+
*/

module.exports = (sequelize) => {
    return sequelize.define('mob_family_system', {
        familyid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, defaultValue: null },
        family: { type: Sequelize.STRING, defaultValue: null },
        systemid: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        system: { type: Sequelize.STRING, defaultValue: null },
        mobsize: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        speed: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 40 },
        HP: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 100 },
        MP: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 100 },
        STR: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        DEX: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        VIT: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        AGI: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        INT: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        MND: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        CHR: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        ATT: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        DEF: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        ACC: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        EVA: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 3 },
        Slash: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Pierce: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        H2H: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Impact: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Fire: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Ice: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Wind: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Earth: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Lightning: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Water: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Light: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Dark: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
        Element: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 },
        detects: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        charmable: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    }, { timestamps: false, freezeTableName: true });
}