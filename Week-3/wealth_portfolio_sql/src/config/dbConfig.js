const dbConfig = {
    host: "localhost",
    user: 'root',
    password: 'root@1root',
    database: "wealth_portfolio",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = { dbConfig };