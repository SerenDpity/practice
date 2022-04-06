const express = require('express')
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser')
const CryptoJS = require("crypto-js");
const SECRET_KEY = 'IRCITE2022'
const multer = require('multer')
const path = require('path')
const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'db_faculty_mis'
});

app.use(cors({credentials: true, origin: true}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/faculty/login',(req,res)=>{

    const EmailAddress = req.body.EmailAddress;
    const Password = req.body.Password;

    console.log(req.body)

    const sqlSelect = "SELECT EmployeeNumber,FirstName,MiddleInitial,LastName,Birthdate,Age,Sex,EmailAddress,ProfileImageURL FROM tbl_faculty WHERE EmailAddress=? AND BINARY Password=?";

    db.query(sqlSelect,[EmailAddress,Password],(err,result)=>{

        if(err)res.send(err);
        else{
            if(result[0]){
                res.send(result[0])
            }else{
                res.send({
                    message:"Invalid Credentials.",
                    error:1
                });
            }
        }

    });

});

app.post('/faculty/register',(req,res)=>{ 

    const FirstName = req.body.FirstName;
    const MiddleInitial = req.body.MiddleInitial;
    const LastName = req.body.LastName;
    const Birthdate = req.body.Birthdate;
    const Age = req.body.Age;
    const Sex = req.body.Sex;
    const EmailAddress = req.body.EmailAddress;
    const Password = req.body.Password;
    
    const sqlInsert = "INSERT INTO tbl_faculty (FirstName,MiddleInitial,LastName,Birthdate,Age,Sex,EmailAddress,Password) VALUES(?,?,?,?,?,?,?,?)";

    db.query(sqlInsert,[FirstName,MiddleInitial,LastName,Birthdate,Age,Sex,EmailAddress,Password],(err,result)=>{

        if(err) res.send(err);
        else res.send(result);

    });

});

app.listen(3001, () =>{
    console.log("Running on Port 3001")
});
