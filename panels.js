//Experiment - adding clicked class to side scrolling panels to make them pulse - works - was not implemented in final version
panels = document.getElementsByClassName("panel")
for (let i =0; i< panels.length; i++){
	panels[i].addEventListener('click', e=> { 
		panels[i].classList.add("clicked");
		setTimeout(() => {panels[i].classList.remove("clicked")},1000);
	})
}
