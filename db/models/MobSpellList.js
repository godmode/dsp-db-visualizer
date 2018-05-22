const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('mob_spell_lists', {
        spell_list_name: { type: Sequelize.STRING(30), allowNull: false }, 
        spell_list_id: { type: Sequelize.INTEGER, primaryKey: true },
        spell_id: { type: Sequelize.INTEGER, primaryKey: true },
        min_level: Sequelize.INTEGER,
        max_level: Sequelize.INTEGER
    }, { timestamps: false });
}