const form = document.getElementById("todo");
const data = document.getElementById("data");
const showData = document.getElementById("showData");
// const data2 = localStorage.getItem("todo");

let allData = [];
// console.log(data2);

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
		span.innerHTML = 'x';
		li.appendChild(span)
	}
	todo.value ='';

	// allData.push(todo.value);

	// let result = "";
	// allData.forEach((element) => {
	//   result += element + '\n';
	// });

	showData.addEventListener("click" ,(e) => {
		if(e.target.tagName === "LI"){
			e.target.classList.toggle("checked")
		}
		else(e.target.tagName === "SPAN");{
			e.target.parentElement.remove(span);
		}
	});



	console.log(todo.value)
}  );
