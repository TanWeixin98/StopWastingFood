
function sendSignUp(){
    var userName = document.getElementById('username_id').value;
    var password = document.getElementById('psw_id').value;
    var organizationName= document.getElementById('organization_name_id').value;
    var address = document.getElementById('address_id').value;
    var place;
    if(document.getElementById('restaurant_id').checked = true)
        place= "Restaurant";
    else
        place="Shelter";
    var http = new XMLHttpRequest();
    var url ="http://127.0.0.1:8080/sign_up";
    var params = "userName="+userName+"&password="+password+"&organizationName="+organizationName+"&address="+address+"&place="+place;
    http.open("POST",url,true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    console.log(http.status);

    http.send(params);
    if(http.response==true){
        window.location.href = "login.html";
    }
}
