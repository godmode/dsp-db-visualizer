const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser());

const PORT = process.env.PORT || 3010;

app.get('/', async (req, res) => {
    try {
        let limit = req.query.limit || 10;
        let search = req.query.search || '';
        await db.sequelize.authenticate();
        const mobs = await db.MobSpawnPoint.findAll({ where: {polutils_name: { [db.Sequelize.Op.like]: `%${search}%` } }, limit: parseInt(limit), include: [
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


