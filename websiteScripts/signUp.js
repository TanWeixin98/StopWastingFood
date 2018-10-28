
function sendSignUp(){
    var http = new XMLHttpRequest();
    var url ="http://127.0.0.1:8080/sign_up";
    var params = "userName=jack&password=Tandolphin98&organizationName=kicker&address=skdjksjd&place=Shelter";
    http.open("POST",url,true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    console.log(http.status);

    http.send(params);
    
}
