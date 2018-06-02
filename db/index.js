const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', dialect: 'mysql', operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
});

const MobSpellList = require('./models/MobSpellList')(sequelize);
const MobSpawnPoint = require('./models/MobSpawnPoint')(sequelize);
const MobGroup = require('./models/MobGroup')(sequelize);
const MobPool = require('./models/MobPool')(sequelize);
const MobFamily = require('./models/MobFamily')(sequelize);
const ZoneSetting = require('./models/ZoneSetting')(sequelize);

MobSpawnPoint.belongsTo(MobGroup, { foreignKey: 'groupid' });
MobGroup.hasOne(MobSpawnPoint, { foreignKey: 'groupid' });

MobGroup.belongsTo(MobPool, { foreignKey: 'poolid' });
MobPool.hasOne(MobGroup, { foreignKey: 'poolid' });

MobPool.belongsTo(MobFamily, { foreignKey: 'familyid' });
MobFamily.hasOne(MobPool, { foreignKey: 'familyid' });

MobGroup.belongsTo(ZoneSetting, { foreignKey: 'zoneid' });
ZoneSetting.hasOne(MobGroup, { foreignKey: 'zoneid' });


module.exports = { sequelize, MobSpellList, MobSpawnPoint, MobGroup, MobPool, MobFamily, ZoneSetting, Sequelize };
