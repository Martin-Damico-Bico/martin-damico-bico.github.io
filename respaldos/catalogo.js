document.addEventListener("DOMContentLoaded", function(){
    MOBA = JSON.parse(MOBA);
    RPG = JSON.parse(RPG);
    ESTRATEGIA = JSON.parse(ESTRATEGIA);
    var r = document.getElementById("juegos");
    var m = document.getElementById("juegos");
    var a = document.getElementById("juegos");

    for(var i = 0; i < MOBA.length; i++){
        r.innerHTML = MOBA.innerHTML + "<li><a href='" + MOBA[i].link + "'><img src='" + MOBA[i].imagen + "'><h1>" + MOBA[i].nombre + "</h1></a></li>";
    }

     for(var i = 0; i < RPG.length; i++){
        m.innerHTML = RPG.innerHTML + "<li><a href='" + RPG[i].link + "'><img src='" + RPG[i].imagen + "'><h1>" + RPG[i].nombre + "</h1></a></li>";
    }

     for(var i = 0; i < ESTRATEGIA.length; i++){
        a.innerHTML = ESTRATEGIA.innerHTML + "<li><a href='" + ESTRATEGIA[i].link + "'><img src='" + ESTRATEGIA[i].imagen + "'><h1>" + ESTRATEGIA[i].nombre + "</h1></a></li>";
    }
});