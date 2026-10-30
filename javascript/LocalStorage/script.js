function login() {
    const uname = document.getElementById("uname").value;
    console.log(uname);
    localStorage.setItem("uname", uname);
    window.location.href = "home.html";
}

const username = localStorage.getItem("uname");
welcome.innerHTML = `Welcome, ${username}`;

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}