// ========================= FIRST PROJECT =========================================

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");
// let four = document.querySelector(".four");
// let five = document.querySelector(".five");
// let count = document.querySelector(".count");
// count.innerHTML = "0";
// let num = Number(count.innerHTML);



// if(localStorage.getItem("num")){
//     count.innerHTML = localStorage.getItem("num");
// }



// one.addEventListener("click", () => {
//     num++;
//     count.innerHTML = num;
//     console.log(num);
    
//     console.log("hi");
    
// })
// two.addEventListener("click", () => {
//     num--;
//     count.innerHTML = num;
//     console.log(num);
    
//     console.log("hi");
    
// })
// three.addEventListener("click", () => {
//    count.innerHTML = 0;
//    localStorage.removeItem("num");
    
// })
// four.addEventListener("click", () => {
//    window.localStorage.setItem("num", count.innerHTML);
    
// })
// five.addEventListener("click", () => {
//    count.innerHTML = localStorage.getItem("num");
    
// })
// ================================================================================



// ================================ secend project =================================
// const modal = document.getElementById("modal");
// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");

// function showmodel(){
//     modal.classList.add("show");
//     document.body.style.backgroundColor = "gray";
// }
// function closemodal(){
//     modal.classList.remove("show");
//     document.body.style.backgroundColor = "white";
// }

// openBtn.addEventListener("click", showmodel)
// closeBtn.addEventListener("click", closemodal)

// modal.addEventListener("click", function(e){
//     if(e.target === modal){
//         closemodal();
//     }
// })
// document.addEventListener("keydown",function(event){
//     if(event.key === "Escape"){
//         closemodal();
//     }
// })
// ======================================================================================



// ========================================= THIRD PROJECTS ==================================


const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const confirmError = document.getElementById("confirmError");
const result = document.getElementById("result");
const button = document.querySelector("button");


function showError(el, messege){
    el.innerHTML = messege;
}
function clearError(el){
    el.innerHTML ="";

}
function nameValidation(){
    let value = nameInput.value.trim();
    if(value.length < 6){
        showError(nameError, "plz enter a valid name");
        return false;
    }
    else{
        clearError(nameError);
        return true;
    }
}
function emailValidation(){

  let value = emailInput.value.trim();
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
    showError(emailError, "Enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}
function passValidation(){
    let value = passInput.value.trim();
    if(value.length < 8){
        showError(passError,"enter a valid password");
        return false;
    }
    else{
        clearError(passError);
        return true;
        
    }
}
function confirmValidation(){
    let value = confirmInput.value.trim();
    if(value !== passInput.value){
        showError(passError,"enter a valid password");
        return false;
    }
    else{
        clearError(confirmError);
        return true;

    }
}
function formValid(){
    let nameOk = nameValidation();
    let emailOK = emailValidation();
    let passOk = passValidation();
    let confirmOk = confirmValidation();
    return nameOk && emailOK && passOk && confirmOk;
}


form.addEventListener("submit",(e) => {
    e.preventDefault()
    result.innerHTML ="";
    if (formValid()){
        result.innerHTML ="form is valid";
        result.className ="ok";
        window.location.href ="TODO.html"
    }
    else{
         result.innerHTML ="form is wrong";
        result.className ="error";

    }

})

// =========================================== finish ===============================



