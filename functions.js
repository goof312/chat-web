
document.getElementById("login").addEventListener("click",alertlogin);
const profile = document.getElementById("profile");
const inputUser = document.getElementById("inputUser");
profile.addEventListener("mouseover",turntoRed);
profile.addEventListener("mouseleave",turntoNormal);
inputUser.addEventListener("mouseover",turntoblue);

function alertlogin(){
    alert("Username or password is incorrect");
}

function turntoRed(){
    profile.style.color = "red";
}

function turntoNormal(){
    profile.style.color = "white"
}

function turntoblue(){
    inputUser.placeholder.style.color = "blue";
}
