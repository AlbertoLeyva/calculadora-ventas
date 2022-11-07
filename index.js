/* 
========================================================================================
    script.js
    Archivo principal para la calculdora de ventas económicas
    Hecho por Alberto Leyva
    Sendas Caminos al Señor 
    Ultima modificación: 06/11/22
========================================================================================
 */

var valorPrecio;

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#producto').value.length == 0){
        document.querySelector('#producto').style.borderColor = "red";
    }

    else if(document.querySelector('#precio').value.length == 0 && document.querySelector('#donacion').checked == false){
        document.querySelector('#precio').style.borderColor = "red";
    }

    else if(document.querySelector('#precio').value.length != 0 && document.querySelector('#donacion').checked == true){
        document.querySelector('#precio').style.borderColor = "red";
        document.querySelector('#labelDon').style.color = "red";
    }

    else{

        document.querySelector('#producto').style.borderColor = "black";
        document.querySelector('#precio').style.borderColor = "black";
        document.querySelector('#labelDon').style.color = "black";

        if(document.querySelector('#precio').value){
            document.querySelector('#productos').innerHTML += `
            <div class="producto">
                <span id="nombre-producto">
                    ${document.querySelector('#producto').value}
                </span>
                <span id="precio-producto"> $
                    ${document.querySelector('#precio').value}
                </span>
                <button class="delete">Borrar</button>
            </div>
        `;
        }

        else {
            document.querySelector('#productos').innerHTML += `
            <div class="producto">
                <span id="nombre-producto">
                    ${document.querySelector('#producto').value}
                </span>
                <span id="precio-producto">
                    Donación
                </span>
                <button class="delete">Borrar</button>
            </div>
        `;
        }
        

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        
    }

}