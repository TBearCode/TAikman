const qdot = document.querySelector("#dot");
const html = document.querySelector("html");
const div = document.querySelector("#qmark");
qdot.addEventListener("click", e=> {
	qdot.classList.add("clicked")
	div.classList.add("changed");
	html.classList.add("dark");
	
});

