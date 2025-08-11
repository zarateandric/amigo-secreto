// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombreAmigo;
var lista=[];


function agregarAmigo(){
    nombreAmigo = (document.getElementById("amigo").value);
    console.log(nombreAmigo);

    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
    } else{
        amigos.push(nombreAmigo);
        console.log(amigos);
        // imprimir nombres de amigos (pendiente)
        limpiarCaja();
        actualizarListaAmigos();
    }

}

function limpiarCaja(){
    document.getElementById("amigo").value ="";
}

function sortearAmigo(){
    let indiceAmigo = Math.floor((Math.random()*amigos.length)+1);
    console.log(amigoSorteado);
    if(indiceAmigo === amigos[i]){

    }
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}
function actualizarListaAmigos(){
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(i=0;i<amigos.length;i++){
        const li = document.createElement("li");
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}
