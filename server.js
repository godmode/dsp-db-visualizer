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
        const where = {};
        if (req.query.id) where.mobid = req.query.id;
        else where["polutils_name"] = { [db.Sequelize.Op.like]: `%${search}%` };
        await db.sequelize.authenticate();
        const mobs = await db.MobSpawnPoint.findAll({ where, limit: parseInt(limit), include: [
            {
                model: db.MobGroup,
                include: [
                    db.ZoneSetting,
                    { model: db.MobPool, include: [db.MobFamily]},
                    { model: db.MobDroplist, include: [db.ItemBasic]}
                ]
            }
        ] });
        // const mobs = await db.MobDroplist.findAll({ where: {groupId: 6848}});
        res.send({ mobs });
    }
    catch(err) {
        res.send({ "error": err });
    }
});

app.get('/monsters', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        const mobs = await db.MobSpawnPoint.find({ attributes: ['mobname', 'groupid'], where: { mobid: 17297441}, include: [
            {
                model: db.MobGroup,
                include: [
                    {model: db.ZoneSetting, attributes: ['name']},
                    { model: db.MobPool, include: [{model: db.MobFamily, attributes: ['family']}], attributes: ['poolid', 'familyid']},
                    { model: db.MobDroplist, include: [db.ItemBasic]}
                ],
                attributes: ['poolid', 'dropid', 'groupid'],
            }
        ] });
        // const mobs = await db.MobDroplist.findAll({ where: {groupId: 6848}});
        res.send({ mobs });
    }
    catch(err) {
        res.send({ "error": err });
    }
});

app.get('/zones', async (req, res) => {
    try {
        let limit = req.query.limit || 10;
        let search = req.query.search || '';
        const where = {};
        if (req.query.id) where.mobid = req.query.id;
        else where["polutils_name"] = { [db.Sequelize.Op.like]: `%${search}%` };
        await db.sequelize.authenticate();
        const zones = await db.ZoneSetting.findAll({ attributes: ['name'], include: [
            {model: db.MobGroup, attributes: ['groupid']}
        ]});
        res.send({ zones });
    }
    catch(err) {
        res.send({ "error": err });
    }
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) });


