

mostrarElementos();

function encriptarTexto(texto) {

    const prohibido = /^[a-z\s]+$/;

    if (!prohibido.test(texto)) {
        return alert("El texto no puede contener caracteres, mayúsculas o acentos");
    }
     
    return texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g,"ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
} 

function encriptar(){

    const textoplano = document.getElementById('textAreaCentral').value;

    if(textoplano==""){

        alert("Debe ingresar un mensaje para encriptar");
    }
    else{

    let textoCifrado = encriptarTexto(textoplano);

    Limpiar("textAreaCentral");

    ocultarElementos();
   
    document.getElementById("textAreaLateral").innerHTML = textoCifrado;

    }  
}




function desencriptarTexto(textoCifrado) {

    const prohibido = /^[a-z\s]+$/;

    if (!prohibido.test(textoCifrado)) {
        return alert("El texto no puede contener caracteres, mayúsculas o acentos");
    }

    return textoCifrado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function desencriptar() {

    const textoEncriptado = document.getElementById("textAreaCentral").value;

    if (textoEncriptado==""){

        alert("Debe ingresar un mensaje");
    }

    else {
 
    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    Limpiar("textAreaCentral");

    document.getElementById("textAreaCentral").value = textoDesencriptado;

    Limpiar("textAreaLateral");

    mostrarElementos();

    }
}




function Limpiar(id){

    const textarea = document.getElementById(id);
    textarea.innerHTML = "";
};

function ocultarElementos(){

document.getElementById("ImgMuñeco").style.display= "none";

document.getElementById("parrafosLaterales").style.display= "none" ;

document.getElementById("btnCopiar").style.display= "block";

}

function mostrarElementos(){

document.getElementById("ImgMuñeco").style.display= "block";

document.getElementById("parrafosLaterales").style.display= "block";

document.getElementById("btnCopiar").style.display = "none" ;
}