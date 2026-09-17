// let myName = document.querySelector('[name = "name"]');
// let myAge = document.querySelector('[name = "age"]');
// document.forms[0].onsubmit = function (e){
//     let userValid = false;
//     let ageValid = false;
//     if( myName.value !== "" && myName.value.length <= 10){
//         userValid = true;
//     }
//     if( myAge.value !== ""){
//         ageValid = true;
//     }
//     if( userValid === false || ageValid === false){
//         e.preventDefault();
//     }
// }
// let image = document.images;
// for(let i = 0; i < image.length; i++){

//    image[i].setAttribute("src", "pic_bulbon.gif")

// }
// let divOne = document.querySelector(".one");
// let divTwo = document.querySelector(".two");
// divOne.setAttribute("title", "one");
// divTwo.setAttribute("title", "two")
// divOne.textContent = "one";
// divTwo.textContent = "two 2";

// let images = document.images;
// for(let i = 0 ; i < images.length; i++){
//     if(images[i].hasAttribute("alt")){
//         images[i].setAttribute("alt", "Old")
//     }
//     else{
//         images[i].setAttribute("alt", "Elzero New")
//     }
// }
// let numInput = document.querySelector("[name ='elements']");
// let textInput = document.querySelector("[name ='texts']");
// let selectInput = document.querySelector("[name ='type']");
// let submitInput = document.querySelector("[name = 'create']")

// let result = document.querySelector(".results");

// document.forms[0].onsubmit = function(e){
// e.preventDefault();
// }

// submitInput.onclick= function(){

//     result.innerHTML = "";

//     for(let i = 0 ; i < numInput.value; i++){
//             if( selectInput.value === "Div"){
//             let div = document.createElement("div");
//             div.className = "box";
//             div.id = `id-${[i]}`;
//             div.textContent = textInput.value;
//             result.appendChild(div);
//             }
//             if( selectInput.value === "Section"){
//             let Section = document.createElement("Section");
//             Section.className = "box";
//             Section.id = `id-${[i]}`;
//             Section.textContent = textInput.value;
//             result.appendChild(Section);
//             }
//     }

// }

// <==================================================W2============================================================>
//           let myLink = document.querySelector("a")
//   window.onload = function(){
//     if(myLink.classList.contains("open")){
//       myLink.className= "elz";
//       elz.click();

//     }

//   }

// let addInput = document.getElementById("classes-to-add");
// let removeInput = document.getElementById("classes-to-remove");
// let myDiv = document.getElementById("id-div");
// let spaceNum =addInput.value.includes();
// console.log(spaceNum);


// addInput.onblur = function () {
//   if(addInput.value.includes(" ")){

//   }

// else{
// let firstChild = document.createElement("div")
// let fdivText = document.createTextNode("hjgh");
// fdivText.textContent = addInput.value;
// firstChild.appendChild(fdivText);
// myDiv.appendChild(firstChild);

// }
// }
// ```js

// let addInput = document.querySelector(".classes-to-add"); // بنجيب input الخاص بإضافة الـ Classes
// let removeInput = document.querySelector(".classes-to-remove"); // بنجيب input الخاص بحذف الـ Classes
// let currentElement = document.querySelector(".current"); // بنجيب العنصر اللي هنضيف ونحذف منه الـ Classes
// let classesList = document.querySelector(".classes-list div"); // بنجيب الـ div اللي هنعرض فيه الـ Classes


// // Function To Show Classes
// function showClasses() { // Function مسؤولة عن عرض الـ Classes الموجودة على العنصر

//   classesList.innerHTML = ""; // بنفضي المكان قبل ما نعرض الـ Classes من جديد

//   let classes = Array.from(currentElement.classList); // بنحول الـ classList إلى Array عادية

//   classes.sort(); // بنرتب أسماء الـ Classes ترتيب أبجدي

  // if (classes.length === 0) { // لو مفيش أي Classes على العنصر
  //   classesList.textContent = "No Classes To Show"; // نظهر الرسالة دي
  // } else { // لو فيه Classes


  // }



// Function To Handle Blur
// function handleBlur(input, action) { // Function بتشتغل مع أي Input لما يحصل له Blur

//   if (input.value.trim() !== "") { // بنتأكد إن الـ Input مش فاضي

//     let classes = input.value // بناخد القيمة اللي المستخدم كتبها
//       .trim() // بنشيل المسافات من البداية والنهاية
//       .toLowerCase() // بنحول كل الحروف إلى lowercase
//       .split(/\s+/); // بنقسم الكلام عند المسافات إلى Classes منفصلة

//     if (action === "add") { // لو العملية المطلوبة هي الإضافة
//       currentElement.classList.add(...classes); // بنضيف كل الـ Classes للعنصر
//     } else { // لو العملية مش إضافة فهي حذف
//       currentElement.classList.remove(...classes); // بنحذف كل الـ Classes من العنصر
//     }

//     input.value = ""; // بعد العملية بنفضي الـ Input
//   }

//   showClasses(); // بعد كل Blur بنعرض الـ Classes الموجودة حاليا
// }


// addInput.addEventListener("blur", function () { // بنراقب حدث Blur الخاص بـ Input الإضافة
//   handleBlur(addInput, "add"); // بنشغل الـ Function ونقول لها إن العملية إضافة
// });

// removeInput.addEventListener("blur", function () { // بنراقب حدث Blur الخاص بـ Input الحذف
//   handleBlur(removeInput, "remove"); // بنشغل الـ Function ونقول لها إن العملية حذف
// });


// // Show Classes At The Beginning
// showClasses(); // بنعرض الـ Classes الموجودة عند بداية تشغيل الصفحة

// function showClasses() {

//   classesList.innerHTML = "";

//   let classes = Array.from(currentElement.classList);

//   classes.sort();

//   if (classes.length === 0) {

//     classesList.textContent = "No Classes To Show";

//   } else {

    // classes.forEach(function (className) {

    //   let span = document.createElement("span");

    //   span.textContent = className;

    //   classesList.appendChild(span);

    // });

//   }

// }


// function handleBlur(input, action) {

//   if (input.value !== "") {

//     let classes = input.value
//       .trim()
//       .toLowerCase()
//       .split(/\s+/);

//     if (action === "add") {

//       currentElement.classList.add(...classes);

//     } else {

//       currentElement.classList.remove(...classes);

//     }

//     input.value = "";

//   }

//   showClasses();

// }


// addInput.addEventListener("blur", function () {

//   handleBlur(addInput, "add");

// });


// removeInput.addEventListener("blur", function () {

//   handleBlur(removeInput, "remove");

// });


// // showClasses();
// let addInput = document.querySelector(".classes-to-add");
// let removeInput = document.querySelector(".classes-to-remove");
// let currentElement = document.querySelector(".current");
// let classesList = document.querySelector(".classes-list div");

// function showClasses() {
//   classesList.innerHTML = "";
//   let classes = Array.from(currentElement.classList);
//   classes.sort();
//   if(classes.length === 0){
//     classesList.textContent ="there is no classes";
//   }
//   else{
//         classes.forEach(function (className) { // بنلف على كل Class موجود

//       let span = document.createElement("span"); // بنعمل عنصر span جديد

//       span.textContent = className; // بنحط اسم الـ Class داخل الـ span

//       classesList.appendChild(span); // بنضيف الـ span داخل مكان عرض الـ Classes
//     })
//   }
// }
// function bluring(input , action) {
//   if(input.value !== ""){
//     let classes= input.value
//     .trim()
//     .toLowerCase()
//     .split(/\s+/);
//     if(action === "add"){
//       currentElement.classList.add(...classes)
     
//     }
//     else{
//       currentElement.classList.remove(...classes)
//     }
//     input.value ="";

//   }
//   showClasses()
  
// }

// addInput.addEventListener("blur", function(){
//   bluring(addInput, "add")
// })
// removeInput.addEventListener("blur", function(){
//   bluring(removeInput, "remove")
  
// })
// showClasses();

// ================================dom challange================================

// let myHeader = document.createElement("header");
// let logo = document.createElement("h2");
// let logText = document.createTextNode("Elzero");

// let ulDiv = document.createElement("div");

// let myUl = document.createElement("ul");

// let myLi1 = document.createElement("li");
// let text1 = document.createTextNode("Home");


// let myLi2= document.createElement("li");
// let text2 = document.createTextNode("service");

// let myLi3 = document.createElement("li");
// let text3 = document.createTextNode("port");

// let myLi4 = document.createElement("li");
// let text4 = document.createTextNode("setting");



// logo.appendChild(logText);
// myLi4.appendChild(text4);
// myLi3.appendChild(text3);
// myLi2.appendChild(text2);
// myLi1.appendChild(text1);
// myUl.appendChild(myLi1);
// myUl.appendChild(myLi2);
// myUl.appendChild(myLi3);
// myUl.appendChild(myLi4);
// ulDiv.appendChild(myUl);
// myHeader.appendChild(logo);
// myHeader.appendChild(ulDiv);
// document.body.appendChild(myHeader);


// myHeader.style.display ="flex";
// myHeader.style.backgroundColor ="green";
// myHeader.style.justifyContent ="space-between";
// myUl.style.display = "flex";



// logo.style.marginLeft = "15px";
// // =============

// let myDiv = document.createElement("div")
// for(let i =1; i < 16 ; i++){
//   let childDiv = document.createElement("div")
//   let fSpan = document.createElement("span");
//   let sSpan = document.createElement("span");
//   let numT =document.createTextNode([i]);
//   let text =document.createTextNode("product");
//   fSpan.appendChild(numT);
//   sSpan.appendChild(text);
//   childDiv.appendChild(fSpan);
//   childDiv.appendChild(sSpan);
//   myDiv.appendChild(childDiv)
//   childDiv.style.display ="flex";
//   childDiv.style.flexDirection = "column";
//   childDiv.style.flexGrow = "1";
//   childDiv.style.justifyContent = "center";
//   childDiv.style.alignItems = "center";

//   childDiv.style.backgroundColor = "white";
//   childDiv.style.width = "220px";
//   childDiv.style.height = "150px";
//   childDiv.style.margin = "20px";


  
  
// }
// myDiv.style.display = "flex";
// myDiv.style.flexWrap = "wrap";
// myDiv.style.backgroundColor = "rgb(169, 159, 159)";

// document.body.appendChild(myDiv);

// // =================================footer===============

// let footer = document.createElement("footer");
// let h3 = document.createElement("h3");
// let Th3 = document.createTextNode("fuck you everybody");

// h3.appendChild(Th3);
// footer.appendChild(h3);
// document.body.appendChild(footer);

// footer.style.backgroundColor ="red";




// =======================================w3=================================



// function sum(num1 , num2){
//   let nums = window.prompt(`${num1}-${num2}`, "enter two nums ")
//   console.log(num1);
  
//   let txt = document.createTextNode(nums);
//   let myDiv = document.createElement("div");
  
//   console.log(nums);
//   myDiv.appendChild(txt);
  
//   document.body.appendChild(myDiv);



// }
// // sum(10 , 20);
// let prom = prompt("enter two nums from - to","from 10 -20");
// let nums = prom.split("-");
// let num1 = Number(nums[0]);
// let num2 = Number(nums[1]);

// let start = Math.min(num1, num2);
// let end = Math.max(num1, num2);
// for( let i = start; i < end ; i++ ){
//   let myDiv = document.createElement("div");
//   let text = document.createTextNode(i);
//   myDiv.appendChild(text);
//   document.body.appendChild(myDiv);
  
  
// }
// function popup(){

//   let popup = document.createElement("div");
//   let h3 = document.createElement("h3");
//   let p = document.createElement("p")
//   let button = document.createElement("button");
//   let textb = document.createTextNode("close");
//   let texth = document.createTextNode("welcome");
//   let textp = document.createTextNode("welcome to  elzero web school");
//   h3.appendChild(texth);
//   p.appendChild(textp);
//   button.appendChild(textb);
//   popup.appendChild(p);
//   popup.appendChild(h3);
//   popup.appendChild(button);
//   document.body.appendChild(popup);
//   button.onclick = function(){
//     popup.style.display = "none";
//   }

// }

// setTimeout(popup, 5000);


// setTimeout(closepopup, 5000)  
// function closepopup(){
//     popup.style.display ="none";
//   }
//   Close.onclick = closepopup;
// let div = document.createElement("div");
// let i = document.createTextNode("10");
// let x = Number(i);
// document.body.appendChild(div);
// div.appendChild(i);
// function countdown(){
// x--;
// }
// setInterval(countdown, 1000);
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
 



/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });


// ====================================== to-do-list================================


let input = document.querySelector("[name = 'task']")
let button = document.querySelector(".but");
let tasksDiv = document.querySelector(".tasks");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let locCom = JSON.parse(localStorage.getItem("completed")) || [];
let completed = document.querySelector(".completed");
let combTasks = document.querySelector(".combTasks");
let notCom = JSON.parse(localStorage.getItem("notCom")) || [];
let uncompleted = document.querySelector(".uncompleted");
let notcombTasks = document.querySelector(".notcombTasks");



function showCompleted(){
locCom.forEach( function (task, index){
  let completed = document.querySelector(".completed");
        let newDiv = document.createElement("div");
  let divText = document.createTextNode("");
  let butDiv = document.createElement("div");
  let delButton = document.createElement("button");
  let delTxt = document.createTextNode("Redo")
    let trashButton = document.createElement("button");
  let trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");


  trashButton.appendChild(trashIcon);
  // newDiv.appendChild(trashButton);
  butDiv.appendChild(delButton);
  butDiv.appendChild(trashButton);
  newDiv.appendChild(butDiv);
  delButton.appendChild(delTxt);
  // newDiv.appendChild(delButton);
  divText.textContent = `${index +1}-${task}`;
  newDiv.appendChild(divText);
  combTasks.appendChild(newDiv);
  newDiv.classList.add("newdiv")
  newDiv.classList.add("com")
  delButton.addEventListener("click",() => {
      locCom.splice(index, 1);
  localStorage.setItem("completed", JSON.stringify(locCom));
  combTasks.innerHTML = "";
  comTasks();
  showCompleted();
   tasks.push(task);
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  tasksDiv.innerHTML = "";
  combTasks.innerHTML ="";
  comTasks();
  showCompleted();
  myName();
  showTasks();
  })
  trashButton.addEventListener("click",()=>{
          locCom.splice(index, 1);
  localStorage.setItem("completed", JSON.stringify(locCom));
  combTasks.innerHTML = "";
  comTasks();
  showCompleted();

  })
  
}

)

}
function shownotCompleted(){
notCom.forEach( function (task, index){
  let uncompleted = document.querySelector(".uncompleted");
        let newDiv = document.createElement("div");
  let divText = document.createTextNode("");
  let butDiv = document.createElement("div");
  let delButton = document.createElement("button");
  let delTxt = document.createTextNode("Redo")
  let trashButton = document.createElement("button");
  let trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");

  butDiv.appendChild(delButton);
  butDiv.appendChild(trashButton);
  trashButton.appendChild(trashIcon);
  delButton.appendChild(delTxt);
   newDiv.appendChild(butDiv);
  divText.textContent = `${index +1}-${task}`;
  newDiv.appendChild(divText);
  notcombTasks.appendChild(newDiv);
  newDiv.classList.add("newdiv")
  newDiv.classList.add("com")
  delButton.addEventListener("click",() => {
      notCom.splice(index, 1);
  localStorage.setItem("notCom", JSON.stringify(notCom));
  notcombTasks.innerHTML = "";
  notcomTasks();
  shownotCompleted();
   tasks.push(task);
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  tasksDiv.innerHTML = "";
  notcombTasks.innerHTML ="";
  notcomTasks();
  shownotCompleted();
  myName();
  showTasks();
  })
    trashButton.addEventListener("click",()=>{
      notCom.splice(index, 1);
  localStorage.setItem("notCom", JSON.stringify(notCom));
  notcombTasks.innerHTML = "";
  notcomTasks();
  shownotCompleted();

  })
  
}

)

}

function myName(){
  let myH = document.createElement("h3");
 let hTxt = document.createTextNode("Current Tasks :");
  myH.appendChild(hTxt);
tasksDiv.appendChild(myH);
myH.style.color = "rgb(28, 27, 31)";


}
function comTasks(){
  let myH = document.createElement("h1");
 let hTxt = document.createTextNode("Completed Tasks:");
  myH.appendChild(hTxt);
combTasks.appendChild(myH);
myH.style.color = "rgb(28, 27, 31)";
myH.style.margin = "5px 10px";


}
function notcomTasks(){
  let myH = document.createElement("h1");
 let hTxt = document.createTextNode("Neglected Tasks:");
  myH.appendChild(hTxt);
notcombTasks.appendChild(myH);
myH.style.color = "rgb(28, 27, 31)";
myH.style.margin = "5px 10px";


}

function showTasks(){
  tasks.forEach( function (task, index) {
      let newDiv = document.createElement("div");
  let divText = document.createTextNode("");
  let buttons = document.createElement("div");
  let butText = document.createTextNode("Falied");
  let doneBut = document.createElement("button");
  let doneTxt = document.createTextNode("done");
  doneBut.className ="don-btn";
  let neglect = document.createElement("button");
  neglect.className = "dlt-btn";
divText.textContent = `${index +1}- ${task}`;
neglect.appendChild(butText);
doneBut.appendChild(doneTxt);
buttons.appendChild(neglect)
buttons.appendChild(doneBut)
newDiv.appendChild(buttons);
newDiv.appendChild(divText);

tasksDiv.appendChild(newDiv);
newDiv.classList.add("newdiv")
neglect.addEventListener("click", () => {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  tasksDiv.innerHTML = "";
  myName();
  showTasks();
    notCom.push(task);
  localStorage.setItem("notCom", JSON.stringify(notCom))
  notcombTasks.innerHTML = "";
  notcomTasks();
    shownotCompleted();



})

doneBut.addEventListener("click", (e)=>{
      const audio = new Audio("mixkit-modern-technology-select-3124.wav");
    audio.play();
      tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  tasksDiv.innerHTML = "";
  myName();
  showTasks();
  locCom.push(task);
  localStorage.setItem("completed", JSON.stringify(locCom) )
  combTasks.innerHTML = "";
  comTasks();
    showCompleted();

});

})
}
button.addEventListener("click", () => {
  tasks.push(input.value);
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  tasksDiv.innerHTML = "";
  myName();
  showTasks();
})
  myName();
  comTasks();
  notcomTasks();
showTasks();
showCompleted();
shownotCompleted();



