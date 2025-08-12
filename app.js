// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombreAmigo;
let lista = document.getElementById("listaAmigos");


function agregarAmigo(){
    nombreAmigo = (document.getElementById("amigo").value);
    console.log(nombreAmigo);

    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
    } else{
        amigos.push(nombreAmigo);
        console.log(amigos);
        limpiarCaja();
        actualizarListaAmigos();
    }

}

function limpiarCaja(){
    document.getElementById("amigo").value ="";
}

function limpiarCajaResultado(){
    document.getElementById("resultado").value ="";
}

function actualizarListaAmigos(){
    lista.innerHTML = "";
    for(i=0;i<amigos.length;i++){
        let li = document.createElement("li");
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

function sortearAmigo(){
   if(amigos == ""){
    alert("Por favor inserte un nombre")
   } else{
    let indiceAmigo = Math.floor((Math.random()*amigos.length) );
    console.log(indiceAmigo);
    let ganador = amigos[indiceAmigo];
    console.log(ganador);
    resultado.innerHTML = `El amigo sorteado es: ${ganador}`;
    lista.innerHTML = "";
    amigos = []
   }
   
}

limpiarCajaResultado();
