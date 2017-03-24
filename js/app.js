var menu = document.getElementById("ejecutar");
var bars = document.getElementById("bars");
var bars2 = document.getElementById("bars2")
var bars4 = document.getElementById("fa-bars4")
var bars5 = document.getElementById("fa-bars5")

bars.addEventListener("click",cambiar);
bars2.addEventListener("click",regresar)


function cambiar() {
	
	menu.style="display:none";
	bars4.style="display:block";
	bars5.style="display:none";

	
}
function regresar(){
    menu.style="display:block";
    bars5.style="display:block";
    bars4.style="display:none";
}