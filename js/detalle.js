document.addEventListener("DOMContentLoaded", function(){

	h1 = JSON.parse(h1);

	h2 = JSON.parse(h2);

	p = JSON.parse(p);

	h3 = JSON.parse(h3); 

	img = JSON.parse(img);

	var titulo = document.getElementById("titulo-diablo");
	titulo.innerHTML = h1[0].titulo;

	var titulo2 = document.getElementById("h2-diablo");
	titulo2.innerHTML = h2[0].subtitulo;

	var parrafo = document.getElementById("p-diablo");
	parrafo.innerHTML = p[0].parrafo;

	var titulo2 = document.getElementById("h2-diablo1");
	titulo2.innerHTML = h2[1].subtitulo;
	
	var parrafo = document.getElementById("p-diablo1");
	parrafo.innerHTML = p[1].parrafo;

	var titulo2 = document.getElementById("h2-diablo2");
	titulo2.innerHTML = h2[2].subtitulo;
	
	var parrafo = document.getElementById("p-diablo2");
	parrafo.innerHTML = p[2].parrafo;

	var titulo2 = document.getElementById("h2-diablo3");
	titulo2.innerHTML = h2[3].subtitulo;
	
	var parrafo = document.getElementById("p-diablo3");
	parrafo.innerHTML = p[3].parrafo;

	var titulo2 = document.getElementById("h2-diablo4");
	titulo2.innerHTML = h2[4].subtitulo;
	
	var parrafo = document.getElementById("p-diablo4");
	parrafo.innerHTML = p[4].parrafo;

	var titulo3 = document.getElementById("h3-diablo");
	titulo3.innerHTML = h3[0].titulo3;

	var titulo3 = document.getElementById("h3-diablo1");
	titulo3.innerHTML = h3[1].titulo3;

	var parrafo = document.getElementById("p-diablo5");
	parrafo.innerHTML = p[5].parrafo;

	var titulo2 = document.getElementById("h2-diablo5");
	titulo2.innerHTML = h2[5].subtitulo;
	
	var titulo3 = document.getElementById("h3-diablo2");
	titulo3.innerHTML = h3[2].titulo3;

	var imagen = document.getElementById("img0");
	imagen.setAttribute("src", img[0].img);

	var titulo3 = document.getElementById("h3-diablo3");
	titulo3.innerHTML = h3[3].titulo3;

	var imagen = document.getElementById("img1");
	imagen.setAttribute("src", img[1].img);

	var titulo3 = document.getElementById("h3-diablo4");
	titulo3.innerHTML = h3[4].titulo3;

	var imagen = document.getElementById("img2");
	imagen.setAttribute("src", img[2].img);

	var imagen = document.getElementById("img3");
	imagen.setAttribute("src", img[3].img);

	var imagen = document.getElementById("img4");
	imagen.setAttribute("src", img[4].img);

	var imagen = document.getElementById("img5");
	imagen.setAttribute("src", img[5].img);

	var imagen = document.getElementById("img6");
	imagen.setAttribute("src", img[6].img);

	var imagen = document.getElementById("img7");
	imagen.setAttribute("src", img[7].img);


});



// 	var titulo2 = document.getElementById("h2-diablo");
// 	titulo2.innerHTML = h2[3].subtitulo;

// 	var titulo2 = document.getElementById("h2-diablo");
// 	titulo2.innerHTML = h2[4].subtitulo;

// 	var titulo2 = document.getElementById("h2-diablo");
// 	titulo2.innerHTML = h2[5].subtitulo;