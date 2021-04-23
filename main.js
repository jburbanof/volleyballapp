var player = document.getElementsByClassName('player');

for (var i=0; i<piezas.length; i++) {
    piezas[i].setAttribute("onmousedown","seleccionarElemento")
}