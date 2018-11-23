document.addEventListener("DOMContentLoaded", function(){
	MOBA = JSON.parse(MOBA);
	RPG = JSON.parse(RPG);
	ESTRATEGIA = JSON.parse(ESTRATEGIA);
	var mo = document.getElementById("juegos");
	var rp = document.getElementById("juegos1");
	var est = document.getElementById("juegos2");

	for(var i = 0; i < MOBA.length; i++){
		mo.innerHTML = mo.innerHTML + "<li><a href='" + MOBA[i].link + "'><img width=200px src='" + MOBA[i].imagen + "'><p>" + MOBA[i].nombre + "</p></a></li>";
	}
	for(var j = 0; j < RPG.length; j++){
		rp.innerHTML = rp.innerHTML + "<li><a href='" + RPG[j].link + "'><img width=200px src='" + RPG[j].imagen + "'><p>" + RPG[j].nombre + "</p></a></li>";
	}
	for(var h = 0; h < ESTRATEGIA.length; h++){
		est.innerHTML = est.innerHTML + "<li><img width=200px src='" + ESTRATEGIA[h].imagen + "'><p>" + ESTRATEGIA[h].nombre + "</p></a></li>";
	}

});