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
const MobDroplist = require('./models/MobDroplist')(sequelize);
const ZoneSetting = require('./models/ZoneSetting')(sequelize);
const ItemBasic = require('./models/ItemBasic')(sequelize);

const MobSpawnMod = require('./models/MobSpawnMod')(sequelize);
const MobPoolMod = require('./models/MobPoolMod')(sequelize);
const MobFamilyMod = require('./models/MobFamilyMod')(sequelize);

MobSpawnPoint.belongsTo(MobGroup, { foreignKey: 'groupid' });
MobGroup.hasOne(MobSpawnPoint, { foreignKey: 'groupid' });

MobGroup.belongsTo(MobPool, { foreignKey: 'poolid' });
MobPool.hasOne(MobGroup, { foreignKey: 'poolid' });

MobPool.belongsTo(MobFamily, { foreignKey: 'familyid' });
MobFamily.hasOne(MobPool, { foreignKey: 'familyid' });

MobGroup.belongsTo(ZoneSetting, { foreignKey: 'zoneid' });
ZoneSetting.hasMany(MobGroup, { foreignKey: 'zoneid' });

MobDroplist.belongsTo(MobGroup, { foreignKey: 'dropId' });
MobGroup.hasMany(MobDroplist, { foreignKey: 'dropId', sourceKey: 'dropid', targetKey: 'dropId' });

MobDroplist.belongsTo(ItemBasic, { foreignKey: 'itemid' });
ItemBasic.hasOne(MobDroplist, { foreignKey: 'itemid' });

MobSpawnMod.belongsTo(MobSpawnPoint, { foreignKey: 'mobid' });
MobSpawnPoint.hasMany(MobSpawnMod, { foreignKey: 'mobid' });

MobPoolMod.belongsTo(MobPool, { foreignKey: 'poolid' });
MobPool.hasMany(MobPoolMod, { foreignKey: 'poolid' });

MobFamilyMod.belongsTo(MobFamily, { foreignKey: 'familyid' });
MobFamily.hasMany(MobFamilyMod, { foreignKey: 'familyid' });

module.exports = { 
    sequelize, MobSpellList, MobSpawnPoint, MobGroup, MobPool,
    MobFamily, MobDroplist, ZoneSetting, Sequelize, ItemBasic,
    MobSpawnMod, MobPoolMod, MobFamilyMod
};
