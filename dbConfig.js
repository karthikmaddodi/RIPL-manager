// dbConfig.js
const sql = require('mssql');

const dbConfig = {
    user: 'admin',
    password: 'pass123',
    server: 'localhost',
    database: 'ProjectManagementDB',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = { sql, poolPromise };
