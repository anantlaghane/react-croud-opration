// const express= require("express");
// const Router= express.Router();
// const dbconnected= require("./dbconnection");
// Router.get("/",(req, res)=>{
//     const data=[{name:"anant",email:"anantlaghane@gmail.com"}];
//     res.send(data);
// });

// Router.get("/api/user",(req, res)=>{
//     dbconnected.query("select * from tbl_user", (err, rows, fields)=>{
//         if(!err)
//         {
//         res.send(rows);
//         } else {
//             console.log(err);
//         }
//     })
// });

// Router.get("/api/state/:id",(req, res)=>{
//     dbconnected.query("select * from tbl_state where countryid='"+req.params.id +"' ", (err, rows)=>{     
//         if(!err)
//         {
//         res.send(rows);
//         } else{
//             console.log(err);
//         }
//     });
// });

// Router.post("/node/adduser/:id", (req, res)=>{
//     const name= req.body.name;
//     const dob= req.body.dob;
//     const phone= req.body.phone;
//     const JD= req.body.JD;
//     const blood = req.body.blood;
//     const address= req.body.address;
//     const family= req.body.family;
//     const hobbies = req.body.hobbies;
//     const payment= req.body.payment;
//     var sql= `INSERT INTO tbl_adduser(name, dob, phone,JD,blood, address,family, payment) 
//     VALUES("${name}", "${dob}","${phone}","${JD}","${blood}", "${address}", "${family}","${hobbies}",  "${payment}" )`;
//     dbconnected.query(sql, (err, result)=>{
//         if(!err)
//         {
//         res.status(200).json({success:"User Record Inseted Successfully"});
//         } else{
//             console.log(err);
//         }
//     });
// });


const express = require("express");
const Router = express.Router();
const dbConnected = require("./dbconnection");

Router.get("/", (req, res) => {
  const data = [{ name: "anant", email: "anantlaghane@gmail.com" }];
  res.send(data);
});

Router.get("/api/user", (req, res) => {
  dbConnected.query("SELECT * FROM adduser", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

Router.get("/api/state/:id", (req, res) => {
  dbConnected.query(
    "SELECT * FROM adduser WHERE countryid = ?",
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.post("/node/adduser/:id", (req, res) => {
  const {
    name,
    dob,
    phone,
    JD,
    blood,
    address,
    family,
    hobbies,
    payment,
  } = req.body;

  const sql =
    "INSERT INTO tbl_adduser(name, dob, phone, JD, blood, address, family, hobbies, payment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  dbConnected.query(
    sql,
    [name, dob, phone, JD, blood, address, family, hobbies, payment],
    (err, result) => {
      if (!err) {
        res.status(200).json({ success: "User Record Inserted Successfully" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = Router;

