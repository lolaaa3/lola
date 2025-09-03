console.log("ayuda");
const titulo = document.getElementById("tituloprinicipal");
let estadoOriginal = true;
titulo.innerText = "hola";
titulo.style.color ="green";

titulo.addEventListener("click", () => {
if (estadoOriginal == true){
    titulo.innerText ="¿cómo vas?"
    titulo.style.color ="pink";
}

else {
    titulo.innerText ="hola";
    titulo.style.color ="yellow";
}
estadoOriginal =!estadoOriginal;
});