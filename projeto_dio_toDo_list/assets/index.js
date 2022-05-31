
var input = document.querySelector(".input")
var display = document.querySelector(".display")
var lista = []

function toDo (event) {

    const texto = event.target.value
    lista.push(texto)

   const elemetos =  lista.map(i => `<input type="checkbox" class="ip">  <p>${i}</p>`)
   display.innerHTML = elemetos

};










