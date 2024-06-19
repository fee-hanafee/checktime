import "server-only";

const sql = require('mssql')


const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: "192.168.14.11",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, 
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

// export default { sqlConfig };
await sql.connect(sqlConfig)

export default sql;
