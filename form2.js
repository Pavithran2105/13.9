var userName = document.getElementById("userName");
var gmail = document.getElementById("gmail");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var form = document.getElementById("form");

function showError(input){
    const formControl = input;
    // formControl.classList.add("failure");
    formControl.className = "failure"; 

}
function showSuccess(input){
    const formControl = input;
    formControl.className = "success"

}


form.addEventListener( 'submit', function (e){
    e.preventDefault();
    if (userName.value === ''){
        
        showError(userName)
    }
    else{
        
        showSuccess(userName)
    }
    if (gmail.value === ''){
        
        showError(gmail)
    }
    else{
        
        showSuccess(gmail)
    }
    if (password.value === ''){
        
        showError(password)
    }
    else{
        
        showSuccess(password)
    }   

    if (password2.value === ''){
        
        showError(password2)
    }
    else{
        
        showSuccess(password2)
    }
})

    



