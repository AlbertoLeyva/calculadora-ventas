/* 
========================================================================================
    calcular.js
    Archivo principal para la calculadora de ventas económicas
    Hecho por Alberto Leyva
    Sendas Caminos al Señor 
    Ultima modificación: 20/03/23
========================================================================================
 */

function suma(){

    var suma = 0;
    var donacionCount = 0;

    var productos = document.querySelectorAll(".producto");
    for (var i = 0; i < productos.length; i++){

        if (productos[i].children[1].textContent.replace(/\s/g, '') != "Donación"){
            suma += parseInt(productos[i].children[2].children[1].textContent.replace(/\s/g, '')) * parseInt(productos[i].children[1].textContent.replace(/\s/g, '').substring(1));
        }
        else if (parseInt(productos[i].children[2].children[1].textContent.replace(/\s/g, '')) > 0){
            donacionCount += parseInt(productos[i].children[2].children[1].textContent.replace(/\s/g, ''));
        }
    }

    var sumaS = suma.toString();

    if (donacionCount > 0){

        sumaS = sumaS + " + Donación (" + donacionCount + ")";

    }

    return sumaS
}


var para = new URLSearchParams(window.location.search);

class Producto {

    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

}

var productosArr = new Array();

var cuenta = 0;

for(const p of para){

    if (p[1] == "donacion"){

        var prod = new Producto(p[0], 0, -1);

        document.querySelector('#productos').innerHTML += `
                    <div class="producto" id="${prod.nombre}">
                        <span id="nombre-producto">
                            ${prod.nombre}
                        </span>
                        <span id="precio-producto">
                            Donación
                        </span>
                        <div class="cantidad">
                            <button class="menos">-</button>
                            <span id="cantidad">${prod.cantidad}</span>
                            <button class="mas">+</button>
                        </div>
                    </div>
                `;
        
        productosArr.push(prod);
    }

    else{

        var prod = new Producto(p[0], 0, p[1]);

        document.querySelector('#productos').innerHTML += `
                    <div class="producto" id="${prod.nombre}">
                        <span id="nombre-producto">
                            ${prod.nombre}
                        </span>
                        <span id="precio-producto">
                            $${prod.precio}
                        </span>
                        <div class="cantidad">
                            <button class="menos">-</button>
                            <span id="cantidad">${prod.cantidad}</span>
                            <button class="mas">+</button>
                        </div>
                    </div>
                `;
        
        productosArr.push(prod);
    }
}

var menosButton = document.querySelectorAll(".menos");
for (var i = 0; i < menosButton.length; i++){
 
    menosButton[i].addEventListener('click', function(i) {
        
        var prod = menosButton[i].closest(".producto");
        
        if (productosArr[i].cantidad > 0){

            productosArr[i].cantidad -= 1;

            //console.log(prod.children[2].children[1])

            prod.children[2].children[1].textContent = productosArr[i].cantidad;

            document.querySelector("#cuenta").textContent = "$" + suma();

        }

    }.bind(this, i));
}

var masButton = document.querySelectorAll(".mas");
for (var i = 0; i < masButton.length; i++){

    masButton[i].addEventListener('click', function(i) {
    
        var prod = masButton[i].closest(".producto");
        
        productosArr[i].cantidad += 1;

        prod.children[2].children[1].textContent = productosArr[i].cantidad;

        document.querySelector("#cuenta").textContent = "$" + suma();

    }.bind(this, i));
}

document.querySelector('#reset').onclick = function(){
    var prodUse = document.querySelectorAll(".producto");
    for (var i = 0; i < prodUse.length; i++){
        productosArr[i].cantidad = 0;
        prodUse[i].children[2].children[1].textContent = 0;
    }

    document.querySelector("#cuenta").textContent = "$0";
}
