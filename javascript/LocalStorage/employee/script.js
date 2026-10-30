function login() {
    const uname = document.getElementById("uname").value;
    console.log(uname);
    localStorage.setItem("uname", uname);
    window.location.href = "emp.html";
}

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}