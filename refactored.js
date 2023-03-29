/*
let button = document.getElementsByClassName("click-me")[0];
button.addEventListener("mouseleave", function () {
  console.log("click!!!!!!");
});
*/

let enterBtn = document.getElementById("enter");
let userInput = document.getElementById("user-input");
let ul = document.querySelector("ul");

  //reFactoring the code 

  function inputLength() {
    return userInput.value.length
  }

  function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = ""

  }

  function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement()
     }
  }

  function addListAfterKeypress() {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement()
     }
  }



enterBtn.addEventListener("click", addListAfterClick) 

userInput.addEventListener("keypress", addListAfterKeypress)
