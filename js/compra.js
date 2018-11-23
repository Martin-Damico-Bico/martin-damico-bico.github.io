document.addEventListener("DOMContentLoaded", function(){
    var precio =640;
    var subtotal =0;
    var precioEnvio =0;

    var num;

    var cant= document.getElementById("cant");
    var presEnvio = document.getElementById("pre-envio");
    var subTtotal = document.getElementById("subtotal");
    var precioTotal = document.getElementById("total");

    var envioComun = document.getElementById("comun");
    var envioEspecial = document.getElementById("Especial");
    var envioPremium = document.getElementById("Premium");

    var formato = document.getElementById("form-fisico");
    var radioDigital = document.getElementById("digital");
    var radioFisico = document.getElementById("fisico");
    
    cant.addEventListener("change", function(){
        var cantidad= cant.value;
        cantidad = parseInt(cantidad);

        subtotal = cantidad * precio;
        subTtotal.innerHTML= subtotal;

        num = subtotal * 1.22;        
        precioTotal.innerHTML = num.toFixed(2);
    });


    radioDigital.addEventListener("change", function(){
        formato.style.display = "none";
    });

    radioFisico.addEventListener("change", function(){
        formato.style.display = "block";
    });

    envioComun.addEventListener("change", function(){
        precioEnvio = subtotal * 0.005;
        presEnvio.innerHTML = precioEnvio;

        subTtotal.innerHTML = subtotal + precioEnvio;
        num = (subtotal + precioEnvio) * 1.22;        
        precioTotal.innerHTML = num.toFixed(2);
    });

    envioEspecial.addEventListener("change", function(){
        precioEnvio = subtotal * 0.02;
        presEnvio.innerHTML = precioEnvio;

        subTtotal.innerHTML = subtotal + precioEnvio;
        num = (subtotal + precioEnvio) * 1.22;        
        precioTotal.innerHTML = num.toFixed(2);
    });

    envioPremium.addEventListener("change", function(){
        precioEnvio = subtotal * 0.05;
        presEnvio.innerHTML = precioEnvio;

        subTtotal.innerHTML = subtotal + precioEnvio;
        num = (subtotal + precioEnvio) * 1.22;        
        precioTotal.innerHTML = num.toFixed(2);
    });
    
});

/*
var check = document.getElementById('id'):
from Sala 5 to everyone:
check.addEventListener("change", function(){});
*/
// var num =;
// num= num.toFixed(2);