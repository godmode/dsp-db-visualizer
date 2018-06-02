const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3010;

app.get('/', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        const mobs = await db.MobSpawnPoint.findAll({ where: {mobname: "Aspidochelone"}, limit: 20, include: [
            {
                model: db.MobGroup,
                include: [db.ZoneSetting, { model: db.MobPool, include: [db.MobFamily]}]
            }
        ] });
        res.send({ mobs });
    }
    catch(err) {
        res.send({ "error": err });
    }
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) });


