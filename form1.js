var userName = document.getElementById("userName");
var gmail = document.getElementById("gmail");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var form = document.getElementById("form")

form.addEventListener( 'submit', function (e){
    e.preventDefault();
    if (userName.value === ''){
        
        const formControl = userName;
        // formControl.classList.add("failure");
        formControl.className = "failure";
    }
    else{
        const formControl = userName;
        formControl.className = "success"
    }
    if (gmail.value === ''){
        
        const formControl = gmail;
        formControl.className = "failure"
        

    }
    else{
        const formControl = gmail;
        formControl.className = "success"
    }
    if (password.value === ''){
        
        const formControl = password;
        formControl.className = "failure"
        

    }
    else{
        const formControl = password;
        formControl.className = "success"
    }
    if (password2.value === ''){
        
        const formControl = password2;
        formControl.className = "failure"
        

    }
    else{
        const formControl = password2;
        formControl.className = "success"
    }
})

