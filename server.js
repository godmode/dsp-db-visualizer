const express = require('express');
const app = express();
const db = require('./db');

const PORT = process.env.PORT || 3010;

app.get('/', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        const spells = await db.MobSpellList.findAll({ limit: 10 });
        res.send({ spells });
    }
    catch(err) {
        res.send({ "error": err });
    }
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) });


