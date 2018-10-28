
var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
                                 host: "localhost",
                                 user: "root",
                                 password: "Tandolphin98"
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

app.get('/check_login',function(req,res){
        
        });
app.get('/sign_up',function(req,res){
        var isShelter;
        if(req.query.place=="Shelter"){
            isShelter=true;
        }else{
            isShelter=false
        
        }
        try
        SignUp(req.query.userName,req.query,req.query.password,req.query.organizationName,req.query.address,isShelter);
        }catch(err){console.log("fail");}
        });

app.listen(8080,function(){
           console.log('app listening on port 8080');
           });

//sign up
function SignUp(userName,password,organizationName,address,isShelter){
    try{
    con.connect(function(err){
                
                if(isShelter){
                //insert into shelter
                var query="Insert into Resaturant() values('"+userName+"','"+password+"','"+organizationName+"','"+address+"');"
                con.query(query,function(err, result){});
                }else{
                //insert into restaurant
                var query="Insert into Resaturant() values('"+userName+"','"+password+"','"+organizationName+"','"+address+"',0);"
                con.query(query,function(err, result){});
                }
                });
        console.log("success");
    }catch(err){
        //invalid login input
        console.log("fail");
        throw err;
    }
}


