const form = document.getElementById("todo");
const data = document.getElementById("data");
const showData = document.getElementById("showData");

let allData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("todo", allData);

  const todo = data;

  const value = todo.value.trim();
  if (value === "") return;
  else {
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    showData.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  todo.value = "";
  saveData();

  console.log(todo.value);
});

showData.addEventListener("click", (e) => {
  // debugger
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
});

function saveData() {
  localStorage.setItem("data",showData.innerHTML);
}
function showList() {
  showData.innerHTML = localStorage.getItem("data");
}
showList();