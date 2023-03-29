/*
let button = document.getElementsByClassName("click-me")[0];
button.addEventListener("mouseleave", function () {
  console.log("click!!!!!!");
});
*/

let enterBtn = document.getElementById("enter");
let userInput = document.getElementById("user-input");
let ul = document.querySelector("ul");

enterBtn.addEventListener("click", function() {
  console.log("clickis working");
    if(userInput.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);
        userInput.value = ""

    } else {
        alert("invalid")
    }
});

userInput.addEventListener("keypress", function(event) {
      if(userInput.value.length > 0 && event.keyCode === 13) {
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(userInput.value));
          ul.appendChild(li);
          userInput.value = ""
      } 
  });



//refactored the code above to shorten it
  /*
let enterBtn = document.getElementById("enter");
let userInput = document.getElementById("user-input");
let ul = document.querySelector("ul");

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
  */


