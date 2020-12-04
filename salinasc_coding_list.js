var string = [];

const list = document.querySelector("#list");
const listTodo = document.querySelector("#listTodo");

document.querySelector('#label').addEventListener("submit", function(event) {
	event.preventDefault();	

	let listValue = list.value;
	string.push(listValue);
	const listItems = string.map(alist =>`
	<li>${alist}</li>`
	);
	
	// Add the mapped output to the html
	listTodo.innerHTML = listItems.join("");
});


