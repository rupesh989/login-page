console.log("Login page for practice");

const registerBtn = document.getElementById('register');

const container = document.getElementById('container');

const loginBtn =document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});