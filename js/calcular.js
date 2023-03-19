/* 
========================================================================================
    calcular.js
    Archivo principal para la calculadora de ventas económicas
    Hecho por Alberto Leyva
    Sendas Caminos al Señor 
    Ultima modificación: 12/02/23
========================================================================================
 */

var para = new URLSearchParams(window.location.search);

class Producto {

    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

}

var productosArr = new Array();

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
                        <button class="menos">-</button>
                        <span id="cantidad">${prod.cantidad}</span>
                        <button class="mas">+</button>
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
                            ${prod.precio}
                        </span>
                        <button class="menos">-</button>
                        <span id="cantidad">${prod.cantidad}</span>
                        <button class="mas">+</button>
                    </div>
                `;
        
        productosArr.push(prod);
    }
}

var menosButton = document.querySelectorAll(".menos");
for (var i = 0; i < menosButton.length; i++){
 
    menosButton[i].addEventListener('click', function(i) {
        
        var prodID = menosButton[i].closest(".producto").getAttribute("id");
        
        if (productosArr[i].cantidad > 0){
            productosArr[i].cantidad -= 1;
        }

        console.log(prodID + ": " + productosArr[i].cantidad);

    }.bind(this, i));
}

var masButton = document.querySelectorAll(".mas");
for (var i = 0; i < masButton.length; i++){

    masButton[i].addEventListener('click', function(i) {
    
        var prodID = masButton[i].closest(".producto").getAttribute("id");
        
        productosArr[i].cantidad += 1;

        console.log(prodID + ": " + productosArr[i].cantidad);

    }.bind(this, i));
}