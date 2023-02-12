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
console.log(para);


for(const p of para){

    if (p[1] == "donacion"){
        document.querySelector('#productos').innerHTML += `
                    <div class="producto">
                        <span id="nombre-producto">
                            ${p[0]}
                        </span>
                        <span id="precio-producto">
                            Donación
                        </span>
                        <button class="menos">-</button>
                        <span id="cantidad">1</span>
                        <button class="mas">+</button>
                    </div>
                `;
    }
    else{
        document.querySelector('#productos').innerHTML += `
                    <div class="producto">
                        <span id="nombre-producto">
                            ${p[0]}
                        </span>
                        <span id="precio-producto">
                            ${p[1]}
                        </span>
                        <button class="menos">-</button>
                        <span id="cantidad">1</span>
                        <button class="mas">+</button>
                    </div>
                `;
    }
}

document.querySelector('#menos').onclick = function(){


}

document.querySelector('#mas').onclick = function(){


}