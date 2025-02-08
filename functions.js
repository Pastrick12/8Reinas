var contador = 0;

function cellClick(celda){
    if (window.getComputedStyle(celda).backgroundImage =="none") {
        if(contador<8){
        celda.style = `background-image:url(./img/reina.png);
                    background-size:50px;
                    background-repeat:no-repeat;   
                    background-position:center;`;
        contador++;}           
    } else {
        celda.style = `background-image:none;`;
        contador--;
    }
    
}

function cambiarCelda(r, c) {
    var celda = document.getElementById("tablero");
    var r1 = r, c1 = c; // Diagonal derecha inferior
    var r2 = r, c2 = c; // Diagonal derecha superior
    var r3 = r, c3 = c; // Diagonal izquierda inferior
    var r4 = r, c4 = c; // Diagonal izquierda superior
    
    for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor = "RED"; // Línea horizontal
        celda.rows[i].cells[c].style.backgroundColor = "RED"; // Línea vertical 
        
        // Diagonal derecha inferior
        if (r1 < 8 && c1 < 8) {
            celda.rows[r1++].cells[c1++].style.backgroundColor = "RED";
        }

        // Diagonal derecha superior
        if (r2 > -1 && c2 < 8) {
            celda.rows[r2--].cells[c2++].style.backgroundColor = "RED";
        }

        // Diagonal izquierda inferior
        if (r3 < 8 && c3 > -1) {
            celda.rows[r3++].cells[c3--].style.backgroundColor = "RED";
        }

        // Diagonal izquierda superior
        if (r4 > -1 && c4 > -1) {
            celda.rows[r4--].cells[c4--].style.backgroundColor = "RED";
        }
    }
}

function limpiarCelda(){
    var celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) celdas[i].style.backgroundColor = "";
}

function solucionUno(){
    limpiarTablero();
    var estilo =  `background-image:url(./img/reina.png);
    background-size:50px;
    background-repeat:no-repeat;   
    background-position:center;`;
    
    var celdas = document.getElementById("tablero");
    celdas.rows[0].cells[4].style=estilo;
    celdas.rows[1].cells[1].style=estilo;
    celdas.rows[2].cells[3].style=estilo;
    celdas.rows[3].cells[6].style=estilo;
    celdas.rows[4].cells[2].style=estilo;
    celdas.rows[5].cells[7].style=estilo;
    celdas.rows[6].cells[5].style=estilo;
    celdas.rows[7].cells[0].style=estilo;
    contador = 8;


}

function solucionDos(){
    limpiarTablero();
    var estilo =  `background-image:url(./img/reina.png);
    background-size:50px;
    background-repeat:no-repeat;   
    background-position:center;`;
    
    var celdas = document.getElementById("tablero");
    celdas.rows[3].cells[0].style=estilo;
    celdas.rows[1].cells[1].style=estilo;
    celdas.rows[7].cells[2].style=estilo;
    celdas.rows[4].cells[3].style=estilo;
    celdas.rows[6].cells[4].style=estilo;
    celdas.rows[0].cells[5].style=estilo;
    celdas.rows[2].cells[6].style=estilo;
    celdas.rows[5].cells[7].style=estilo;
    contador = 8;
}

function solucionTres(){
    limpiarTablero();
var estilo =  `background-image:url(./img/reina.png);
    background-size:50px;
    background-repeat:no-repeat;   
    background-position:center;`;
    
    var celdas = document.getElementById("tablero");
    celdas.rows[3].cells[0].style=estilo;
    celdas.rows[5].cells[1].style=estilo;
    celdas.rows[7].cells[2].style=estilo;
    celdas.rows[1].cells[3].style=estilo;
    celdas.rows[6].cells[4].style=estilo;
    celdas.rows[0].cells[5].style=estilo;
    celdas.rows[2].cells[6].style=estilo;
    celdas.rows[4].cells[7].style=estilo;
    contador = 8;
}

function escogerSolucion(){

    switch (document.getElementById("ComboBox").value) {
        case "1": solucionUno();break;
        case "2": solucionDos();break;
        case "3": solucionTres();break;
            
        
    }
}

function limpiarTablero(){
    var celdas = document.getElementsByTagName("td");
    for(let i = 0; i < celdas.length; i++){
        celdas[i].style.background = "";
    }
}
