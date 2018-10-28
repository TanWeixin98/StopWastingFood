

var mysql = require('mysql');

var con = mysql.createConnection({
                                 host: "localhost",
                                 user: "root",
                                 password: "Tandolphin98"
                                 });
window.onload=function(){
var button = document.getElementById("sign_up_id"); // add id="my-button" into html
button.addEventListener('click', SignUp);
}
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



//sign up
function SignUp(){
    var userName =document.getElementById("username_id").value;
    var password =document.getElementById("psw_id").value;
    var organizationName =document.getElementById("organization_name_id").value;
    var address =document.getElementById("address_id").value;
    var phoneNumber=document.getElementById("username_id").value;
    var isShelter;
    if(document.getElementById("restaurant_id").value=="Restaurant"){
        isShelter=false;
    }else if(document.getElementById("shelter_id").value=="Shelter"){
        isShelter=true;
    }
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
        console.log(err);
    }
}


