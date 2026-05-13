const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropmenu = document.querySelector('.dropdown')
const head = document.querySelector('.sidebar')

toggleBtn.onclick = function () {
    dropmenu.classList.toggle('open')
    const isopen = dropmenu.classList.contains('open') 

    toggleBtnIcon.classList = isopen
    '<i class="fa-solid fa-bars"></i>'
    '<i class="fa-solid fa-x"></i>'
}

// const head = document.querySelector('.sidebar')
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    dropmenu.classList.toggle('open')
}  

document.getElementById("form").addEventListener("submit",function(e) {
    e.preventdefault();

let name = document.getElementById("name").ariaValueMax.trim();
let phone = document.getElementById("phone").ariaValueMax.trim();
let email = document.getElementById("email").ariaValueMax.trim();

let message = document.getElementById("message").ariaValueMax.trim();

if (name ===""|| phone ===""|| email ==="") {
    message.textcontent = "All fields are required";
    message.style.color = "red";
    return;
}

let phonepattern = /^[0-9]{10,15}$/;
if (!phonepattern.test(phone)) {
    message.textcontent = "Enter a valid phone no.";
    message.style.color = "red";
    return;
}

let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!emailpattern.test(email)) {
   message.textcontent = "Enter a valid email";
   message.style.color = "red";
    return;
}

message.textcontent = "Form submitted successfully!";
message.style.color = "green";

});