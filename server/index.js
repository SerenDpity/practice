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

app.post('/faculty/education/add',(req,res)=>{

    const EmployeeNumber = req.body.EmployeeNumber;
    const EducationLevel = req.body.EducationLevel;
    const Course = req.body.Course;
    const SchoolName = req.body.SchoolName;
    const YearStart = req.body.YearStart;
    const YearEnd = req.body.YearEnd;

    const sqlInsert = "INSERT INTO tbl_faculty_education (EmployeeNumber,EducationLevel,Course,SchoolName,YearStart,YearEnd) VALUES (?,?,?,?,?,?)"

    db.query(sqlInsert,[EmployeeNumber,EducationLevel,Course,SchoolName,YearStart,YearEnd],(err,result)=>{
        
        if(err) res.send(err);
        else res.send(result);

    });

});

app.put('/faculty/education/update',(req,res)=>{

    const ID = req.body.ID;
    const EmployeeNumber = req.body.EmployeeNumber;
    const EducationLevel = req.body.EducationLevel;
    const Course = req.body.Course;
    const SchoolName = req.body.SchoolName;
    const YearStart = req.body.YearStart;
    const YearEnd = req.body.YearEnd;

    const sqlUpdate = "UPDATE tbl_faculty_education SET EducationLevel=?, Course=?, SchoolName=?, YearStart=?, YearEnd=? WHERE ID=? AND EmployeeNumber=?"

    db.query(sqlUpdate,[EducationLevel,Course,SchoolName,YearStart,YearEnd,ID,EmployeeNumber],(err,result)=>{
        
        if(err) res.send(err);
        else res.send(result);

    });

});

app.delete('/faculty/education/delete/:ID/:EmployeeNumber',(req,res)=>{

    const ID = req.params.ID;
    const EmployeeNumber = req.params.EmployeeNumber; 

    console.log(ID)

    const sqlUpdate = "DELETE FROM tbl_faculty_education WHERE ID=? AND EmployeeNumber=?"

    db.query(sqlUpdate,[ID,EmployeeNumber],(err,result)=>{
        
        if(err) res.send(err);
        else res.send(result);
    });

});

app.get('/faculty/education/:EmployeeNumber',(req,res) =>{ 

    const EmployeeNumber = req.params.EmployeeNumber;

    const sqlSelect = "SELECT * FROM tbl_faculty_education WHERE EmployeeNumber=?";

    db.query(sqlSelect,EmployeeNumber,(err,result)=>{
        if(err) res.send(err);
        else res.send(result);
    })

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

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storage
})

app.post('/faculty/updateprofileimage/:EmployeeNumber',upload.single('profile'), (req,res)=>{

    var path = `https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/profile/${req.file.filename}`;

    var EmployeeNumber = req.params.EmployeeNumber;

    var sqlUpdate = "UPDATE tbl_faculty SET ProfileImageURL=? WHERE EmployeeNumber=?";

    db.query(sqlUpdate,[path,EmployeeNumber],(err,result)=>{
        if(err) res.send(err)
        else res.send(path)
    });

    
})

app.use('/profile',express.static('upload/images'))

app.listen(3001, () =>{
    console.log("Running on Port 3001")
});
