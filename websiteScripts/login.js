function login(){}

function sendPostLogin(userName,password){
    var http= new XMLHttpRequest();
    var url ="http://127.0.0.1:8080/check_login";
    var params ="userName="+userName+"&password="+password;
    http.open("POST",url,true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
        }
    }
    console.log(http.status);
    http.send(params);

}
