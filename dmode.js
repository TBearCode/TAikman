//implements dark mode with any keydown event by adding dark class to the root html element
const html = document.querySelector("html");
document.addEventListener('keydown', e=> {
	html.classList.toggle("dark");
})
