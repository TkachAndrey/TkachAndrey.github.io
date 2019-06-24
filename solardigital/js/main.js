
let optRu = document.getElementById('ru');
let optEn = document.getElementById('en');
let select = document.getElementById('mySelect');

function Selected() {
    let ruCollect = document.getElementsByClassName("ru");
    let enCollect = document.getElementsByClassName("en");

	if (optRu.hasAttribute("selected")){
    	optRu.removeAttribute("selected");
    	for(i=0; i<enCollect.length; i++){
			enCollect[i].style.display="none";
			ruCollect[i].style.display="initial";
		}
    }

    if (optEn.hasAttribute("selected")){
    	optEn.removeAttribute("selected");
    	for(i=0; i<enCollect.length; i++){
			ruCollect[i].style.display="none";
			enCollect[i].style.display="initial";
		}
    }
}

Selected();


function setAttr(){
	let sel = select.selectedIndex;
	let options = select.options;

	for(k=0; k<options.length; k++){
		options[k].removeAttribute("selected", "selected");
	}

	options[sel].setAttribute("selected", "selected");
	Selected();
}
select.onchange = setAttr;