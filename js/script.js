let UserFname = prompt("What's your name ?").trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '');
let UserLname = prompt("What's your last name ?").trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '');
let UserColor = prompt("What is your favorite color ?").trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '');
let UserAge = prompt("How old are you ?").trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '');
let UserPassword = UserFname + UserLname + UserColor + UserAge;
document.getElementById("password").innerHTML = UserPassword;
