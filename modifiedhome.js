const menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "600px";
    menuList.style.display = "block";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.display = "none";
  }
}
function universalToggle(inputBox, image) {
  if (inputBox.type == "password") {
    inputBox.type = "text";
    image.src = "images/eye close icon.png";
  } else {
    inputBox.type = "password";
    image.src = "images/eye open icon.png";
  }
}
let input1 = document.querySelector(".password1");
const eye1 = document.getElementById("eye1");
function togglePassword1() {
  universalToggle(input1, eye1);
}
let input2 = document.querySelector(".password2");
const eye2 = document.getElementById("eye2");
function togglePassword2() {
  universalToggle(input2, eye2);
}
let input3 = document.querySelector(".password3");
const eye3 = document.getElementById("eye3");
function togglePassword3() {
  universalToggle(input3, eye3);
}
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let city = document.querySelector("#city");
let signUp = document.querySelector("#submit");
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
});
let userInfo = [];
signUp.addEventListener("click", () => {
  if (
    userName.value == "" &&
    userEmail.value == "" &&
    city.value == "" &&
    input1.value == "" &&
    input2.value == ""
  ) {
    alert("You have to input something");
  } else if (input1.value == input2.value) {
    input1.style.borderBottom = "2px solid green";
    input2.style.borderBottom = "2px solid green";
  } else {
    input1.style.borderBottom = "2px solid red";
    input2.style.borderBottom = "2px solid red";
  }
  let users = {
    name: userName.value,
    emailAddress: userEmail.value,
    password: input1.value,
    passwordConfirmation: input2.value,
  };
  userInfo.push(users);
  console.log(userInfo);
});
const login = document.querySelector("#login");
const loginEmail = document.querySelector("#email-login");
login.addEventListener("click", () => {
  if (loginEmail.value == "" && input3.value == "") {
    alert("You need to input something");
  }
});

const body = document.body;
let toggleColor = document.querySelector("#toggleColor");
const heading = document.querySelector(".heading");
let heading1 = document.querySelector(".heading1");
let secondPage = document.querySelector(".secondpage");
let footer = document.querySelector(".footer");
body.style.background = "white";
toggleColor.addEventListener("click", () => {
  if (body.style.background == "white") {
    toggleColor.innerHTML = "Light mode";
    toggleColor.style.background = "white";
    toggleColor.style.color = "#03045e";
    body.style.background = "#03045e";
    heading.style.color = "white";
    heading1.style.color = "white";
    secondPage.style.background = "#023e5a";
    footer.style.background = "#023e5a";
  } else {
    toggleColor.innerHTML = "Dark mode";
    toggleColor.style.background = "#03045e";
    toggleColor.style.color = "white";
    body.style.background = "white";
    heading.style.color = "#03045e";
    heading1.style.color = "black";
    secondPage.style.background = "#29c5fc";
    footer.style.background = "#03045e";
  }
});
