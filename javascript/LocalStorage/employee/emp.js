const welcome = document.getElementById("welcome");
const welcomeMsg = localStorage.getItem("uname");
welcome.textContent = `Welcome ${welcomeMsg || "User"}`;

function logout() {
  localStorage.removeItem("uname");
  window.location.href = "login.html";
}

function addEmployee() {
  const employee = {
    id: document.getElementById("empId").value.trim(),
    name: document.getElementById("empName").value.trim(),
    email: document.getElementById("empEmail").value.trim(),
    designation: document.getElementById("empDesig").value.trim(),
    exp: document.getElementById("empExp").value.trim(),
    salary: document.getElementById("empSalary").value.trim(),
  };

  if (!employee.id || !employee.name) {
    alert("Employee ID and name are required.");
  } else if (localStorage.getItem(employee.id)) {
    alert("Employee already exists.");
  } else {
    localStorage.setItem(employee.id, JSON.stringify(employee));
    alert("Employee added successfully.");
    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empEmail").value = "";
    document.getElementById("empDesig").value = "";
    document.getElementById("empExp").value = "";
    document.getElementById("empSalary").value = "";
  }
}

function search() {
  const key = document.getElementById("searchId").value.trim();
  const employee = JSON.parse(localStorage.getItem(key));
  const result = document.getElementById("result");

  if (!key) {
    result.textContent = "Enter an employee ID to search.";
  } else if (!employee || !employee.id) {
    result.textContent = "Employee not found.";
  } else {
    result.innerHTML = `
      <div class="rounded border border-blue-100 bg-white p-4 text-black">
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Email:</strong> ${employee.email}</p>
        <p><strong>Designation:</strong> ${employee.designation}</p>
        <p><strong>Experience:</strong> ${employee.exp}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
      </div>`;
  }
}
