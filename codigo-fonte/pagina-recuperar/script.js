function togglePassword(){
    var x = document.getElementById("password");
    var y = document.getElementById("showPassword");
    var z = document.getElementById("hidePassword");
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function togglePasswordConfirmation(){
    var x = document.getElementById("passwordConfirmation");
    var y = document.getElementById("showPasswordConfirmation");
    var z = document.getElementById("hidePasswordConfirmation");
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}