//The below code gets the ids of the figures on the about me page and adds the opened class to them when they are clicked
const personal_menu = document.querySelectorAll("#hobbies, #bkgrnd, #goals, #experience"); 
for (let i =0; i<personal_menu.length;i++){
	personal_menu[i].addEventListener("click", e=> {
	personal_menu[i].classList.toggle("opened")
});
}
