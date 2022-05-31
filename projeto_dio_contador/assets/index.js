var display =  document.getElementById("display")
var inicio = 0;
    

function adicionar(){

    inicio += 1
    display.innerHTML = inicio
}

function tirar (){

    inicio -= 1
    display.innerHTML = inicio
}



// length