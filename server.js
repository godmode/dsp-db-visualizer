const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const PORT = process.env.PORT || 3010;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', dialect: 'mysql', operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
});

const MobSpellList = sequelize.define('mob_spell_lists', {
    spell_list_name: { type: Sequelize.STRING(30), allowNull: false }, 
    spell_list_id: { type: Sequelize.INTEGER, primaryKey: true },
    spell_id: { type: Sequelize.INTEGER, primaryKey: true },
    min_level: Sequelize.INTEGER,
    max_level: Sequelize.INTEGER
}, { timestamps: false });

app.get('/', async (req, res) => {
    try {
        await sequelize.authenticate();
        const spells = await MobSpellList.findAll({ limit: 10 });
        res.send({ spells });
    }
    catch(err) {
        res.send({ "error": err });
    }
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) });


