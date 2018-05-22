const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', dialect: 'mysql', operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
});

const MobSpellList = require('./models/MobSpellList')(sequelize);

module.exports = { sequelize, MobSpellList };