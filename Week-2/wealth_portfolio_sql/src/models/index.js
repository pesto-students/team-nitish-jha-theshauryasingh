const { dbConfig } = require("../config/dbConfig.js")
const { Sequelize, DataTypes } = require("sequelize")

//data base connection using dbConfig
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        define: {
            timestamps: false
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    },
)

// call to a promise-based authenticate method to instantiate a database connection to the application
sequelize.authenticate()
    .then(() => {
        console.log("autenticated")
    })
    .catch((err) => {
        console.log("error", err)
    })

const db = {}
db.Sequelize = Sequelize // db.sequelize = sequelize

db.assets = require("./assetModel.js")(sequelize, DataTypes)
db.users = require("./userModel.js")(sequelize, DataTypes)

db.assets.belongsTo(db.users, { foreignKey: 'user_id' });
db.users.hasMany(db.assets, { foreignKey: 'user_id' });

// db.transactions = require("./transactionsModel.js")(sequelize, DataTypes)
// db.users = require("./userModel.js")(sequelize, DataTypes)

// db.sequelize.sync({ force: false })
//     .then(() => {
//         console.log("yes re-sync done")
//     })

// // 1 to many relation
// db.assets.hasMany(db.transactions, {
//     foreignKey: "txn_id",
//     as: "transactions"
// })

// db.transactions.belongsTo(db.assets, {
//     foreignKey: "txn_id",
//     as: "assets"
// })

// // db.transactions.belongsTo(db.users, {
// //     foreignKey: "user",
// //     as: "user"
// // })

module.exports = db