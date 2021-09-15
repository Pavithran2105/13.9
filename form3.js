var userName = document.getElementById("userName");
var gmail = document.getElementById("gmail");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var form = document.getElementById("form");

function showError(input){
    const form_Control = input.parentElement;
    form_Control.className = "formContainer failure";
    const message=input.id+" is required";
    const errorElem=form_Control.querySelector("small");
    errorElem.innerText=message;

}
function showSuccess(input){
    const form_Control = input.parentElement;
    form_Control.className = "formContainer success"
    const errorElem=form_Control.querySelector("small");
    errorElem.innerText="";

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

    


