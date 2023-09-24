function sError(msg){
    let error = document.getElementById("error")
    error.innerHTML = msg
    return false
}

function validate(){
    let username = document.getElementById("username").value
    let email = document.getElementById("Email").value
    let password = document.getElementById("pwd").value
   
    if(username == "") {
        return sError("username must be filled")
    }
    else if(!email.endsWith(".com")){
        return sError("email must ends with .com")
    }

    else if(email.indexOf("@") == -1){
        return sError("email must contain '@'")
    }
}
