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


function checkAll(allInput){

    for (let index = 0; index < allInput.length; index++) {
        const element = allInput[index];
        if (element.value === ""){
            showError(element)
        }
        else{
            showSuccess(element)
        }
        
    }

}

form.addEventListener( 'submit', function (e){
    e.preventDefault();
    checkAll([userName,gmail,password,password2]);
})

    



