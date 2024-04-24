function myFunction(){
    var x = document.getElementById("myInput");
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
