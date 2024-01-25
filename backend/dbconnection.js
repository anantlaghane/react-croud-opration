// const sqlconnection= require("mysql");

// const sqldbconnection= sqlconnection.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"node",
//   multipleStatements:true
// });
// sqldbconnection.connect((err)=>{
//     if(!err)
//     {
//     console.log("Database Connected");
//     } else{
//         console.log("Database Not Connected");    
//     }

// });

// module.exports= sqldbconnection;


const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "node",
  multipleStatements: true,
});

dbConnection.connect((err) => {
  if (!err) {
    console.log("Database Connected");
  } else {
    console.log("Database Not Connected");
  }
});

module.exports = dbConnection;



