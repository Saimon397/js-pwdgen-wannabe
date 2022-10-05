let UserFname = prompt("What's your name ?");
let UserLname = prompt("What's your last name ?");
let UserColor = prompt("What is your favorite color ?");
let UserAge = prompt("How old are you ?");
let UserPassword = UserFname + UserLname + UserColor + UserAge;
document.getElementById("password").innerHTML = UserPassword;
