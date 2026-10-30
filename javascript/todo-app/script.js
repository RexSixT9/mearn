function addTask() {
  const taskInput = document.getElementById("taskInput").value.trim();
  if (taskInput === "") {
    alert("Please enter a task.");
    return;
  }
  const taskList = document.getElementById("taskList");
  const task = document.createElement("li");
  task.innerHTML = `
  <li class="flex justify-between rounded-md border border-slate-300 bg-white px-3 py-2.5">
    <span>${taskInput}</span>
    <button class="ml-2 text-sm text-yellow-600" onclick="editTask(this)">Edit</button>
    <button class="ml-2 text-sm text-red-600" onclick="deleteTask(this)">Delete</button>
  </li>
  `;
  taskList.appendChild(task);
  document.getElementById("taskInput").value = "";
}

function deleteTask(button) {
  const li = button.parentNode;
  li.remove();
}

function editTask(button) {
  const li = button.parentNode;
  const span = li.querySelector("span");
  const currentText = span.textContent;
  const newText = prompt("Edit your task:", currentText);
  if (newText !== null) {
    span.textContent = newText;
  }
}
