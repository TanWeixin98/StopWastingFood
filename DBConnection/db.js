
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
var mysql_pool  = mysql.createPool({
                                 host: "localhost",
                                 user: "root",
                                 password: "password",
                                 database : "database_name"
                                 });

// check userName loging
function login(userName,password,isShelter){
    try{
    con.connect(function(err){
                if(isShelter){
                //query from shelter
                }else{
                //query from restaurant
                }
                });
    }catch(err){
        //invalid login
    }
}
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        });
app.post('/check_login',function(req,res){
         var userName = req.body.userName;
         var password =req.body.password;
         try{
         mysql_pool.getConnection(function(err,connection){
                //check foodshelter
                mysql_pool.query("Insert into FoodShelter(userName, userPass,organizationName,address) values('"+userName+"','"+password+"','"+organizationName+"','"+address+"')",function(err2, rows, fields){
                if(err2) console.log(err2);
                console.log("successFood");
                });
                
                //check restaurant
                mysql_pool.query("Insert into Resaturant(userName,userPass,restaurantName,address, earnedPoint) values('"+userName+"','"+password+"','"+organizationName+"','"+address+"',0)",function(err2, rows, fields){
                if(err2) console.log(err2);
                console.log("successREs");
                });
                });
         connection.release();
         
         }catch(err){
         //invalid login input
         console.log("fail");
         connection.release();
         throw err;
         }
        });
app.post('/sign_up',function(req,res){
         var userName =req.body.userName;
         var password =req.body.password;
         var organizationName=req.body.organizationName;
         var address =req.body.address;
         var place = req.body.place;
         var isShelter;
        if(place=="Shelter"){
            isShelter=true;
        }else{
            isShelter=false
        }
         try{
            SignUp(userName,password.organizationName,address,isShelter);
            res.send(true);
            console.log("passed")
            console.log(res)
         }catch(err){
         res.send(false);
         console.log("no passed")
         console.log(res);
         }
         });

app.listen(8080,function(){
           console.log('app listening on port 8080');
           });

//sign up
function SignUp(userName,password,organizationName,address,isShelter){
    try{
    mysql_pool.getConnection(function(err,connection){
                
                if(isShelter){
                //insert into shelter
                mysql_pool.query("Insert into FoodShelter(userName, userPass,organizationName,address) values('"+userName+"','"+password+"','"+organizationName+"','"+address+"')",function(err2, rows, fields){
                        if(err2){
                                 connection.release();
                                 throw err2;
                                 
                                 }
                          console.log("successFood");
                          });
                }else{
                //insert into restaurant
                
                mysql_pool.query("Insert into Resaturant(userName,userPass,restaurantName,address, earnedPoint) values('"+userName+"','"+password+"','"+organizationName+"','"+address+"',0)",function(err2, rows, fields){
                        if(err2){
                                 connection.release();
                                 throw err2;
                        }
                          console.log("successREs");
                          });
                }

                });
    }catch(err){
        //invalid login input
        console.log(err);
        throw err;
    }}


