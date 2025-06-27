let amigo= [];

function agregarAmigo(){
    //Captura el valor del input
    const teclado=document.getElementById("amigo");
    const nombre=teclado.value.trim();// eliminamos espacios innecesarios

    if(nombre== ""){
        alert("Por favor, inserte un nombre");
        return
    }

    amigo.push(nombre)

    const lista=document.getElementById("listaAmigos");

    const item= document.createElement("li");

    item.textContent = nombre;

    lista.appendChild(item);


    teclado.value="";

    

}

function sortearAmigo(){

      const resultado = document.getElementById("resultado");

      if (amigo.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * amigo.length);
      const amigoSorteado = amigo[indiceAleatorio];

      resultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
    

}
