const lista = [];
const random = Math.ceil(Math.random()*50);
let obj = document.getElementById("mensaje");

function codificar(){
    let txt = obj.value;
    let fraseCodigo="";
    for(let i = 0; i<txt.length; i++){
        let asci = parseInt(txt[i].charCodeAt());
        let letra = asci-random;
  
        fraseCodigo+=letra+" , ";
        lista.push(letra);
    }
    let mostrarCodigo = document.createElement("h2");
    mostrarCodigo.innerText= fraseCodigo;
    document.body.appendChild(mostrarCodigo);
}


function descodificar(){
    let frase= "";
    for(let i = 0; i<lista.length; i++){
        let temp1 = lista[i]+random;
        let temp = String.fromCharCode(temp1);
        frase+=temp;
    }
    let mostrarDescodificado = document.createElement("h2");
        mostrarDescodificado.innerText= frase.toUpperCase();
        document.body.appendChild(mostrarDescodificado);
}
