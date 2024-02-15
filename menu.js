const personal_menu = document.querySelectorAll("#hobbies, #bkgrnd, #goals, #experience"); 
for (let i =0; i<personal_menu.length;i++){
	personal_menu[i].addEventListener("click", e=> {
	personal_menu[i].classList.toggle("opened")
});
}
