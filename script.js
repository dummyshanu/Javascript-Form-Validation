const errorList = document.querySelector(".errors-list");
const error = document.querySelector(".errors");
const form = document.querySelector("#form");
const formGroup = document.querySelectorAll(".form-group");
// console.log(form, error, formGroup)

const checkFormOnSubmit = () => {
  const userName = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const passwordConfirmation = document.querySelector(
    "#password-confirmation"
  ).value;
  const terms = document.querySelector(
    "#terms"
  ).checked;

  const isUserCorrect = userName.length>5
  const isPasswordValid = password.length>5
  const isPasswordCorrect =  password == passwordConfirmation
  const isAgreed = terms==true 

    clearErrors()

  // Ok Form
  if(isPasswordCorrect && isUserCorrect && isAgreed &&isPasswordValid){
    return true
  }
  // Error
  else{
    if(!isUserCorrect){ 
      if(userName.length == 0) addError("Enter Username!")
      else addError("Username is too small")
    } 
    if(!isPasswordValid){
      if(password.length == 0) addError("Enter Password!")
      else addError("Password is too small")
    }
    if(!isPasswordCorrect) addError("Password does not match!")
    if(!isAgreed) addError("Agree all the terms!")
    error.classList.add("show")
  }
  return false

};

form.addEventListener("submit", (event) => {

  if(!checkFormOnSubmit()){
    event.preventDefault();
  }
  
});

function clearErrors() {
  while (errorList.firstChild) { 
    errorList.removeChild(errorList.firstChild); 
  }
  error.classList.remove("show")
  
}


function addError(message){
    const li = document.createElement("li")
    li.innerHTML = message
    errorList.appendChild(li)
}
