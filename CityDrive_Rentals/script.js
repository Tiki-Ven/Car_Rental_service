// Welcome message in console

console.log("CityDrive Rentals Website Loaded");


// Example interactive feature

document.addEventListener("DOMContentLoaded", function(){

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseenter", function(){

card.style.transform = "scale(1.05)";
card.style.transition = "0.3s";

});

card.addEventListener("mouseleave", function(){

card.style.transform = "scale(1)";

});

});

});

function validateBooking(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let start = document.getElementById("start").value;
let end = document.getElementById("end").value;

if(name === "" || email === "" || start === "" || end === ""){
alert("Please fill all required fields");
return false;
}

if(start > end){
alert("End date must be after start date");
return false;
}

alert("Booking submitted successfully!");
return true;
}


function loginCheck(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "123"){
window.location.href = "booking-management.html";
return false;
}

else{
alert("Invalid login");
return false;
}

}

// USER SIGNUP

function userSignup(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;

if(name === "" || email === "" || pass === ""){
alert("Please fill all fields");
return false;
}

if(pass !== confirm){
alert("Passwords do not match");
return false;
}

alert("Account created successfully!");

// redirect to login
window.location.href = "login.html";

return false;
}


// USER LOGIN

function userLogin(){

let email = document.getElementById("loginEmail").value;
let pass = document.getElementById("loginPassword").value;

if(email === "" || pass === ""){
alert("Please enter email and password");
return false;
}

// demo login (frontend only)
alert("Login successful!");
window.location.href = "index.html";

return false;
}