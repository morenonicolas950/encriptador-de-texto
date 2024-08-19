

mostrarElementos();

function encriptarTexto(texto) {

    const prohibido = /^[a-z\s]+$/;

    if (!prohibido.test(texto)) {
        return alert("El texto no puede contener caracteres, mayúsculas o acentos");
    }
    else{
    return texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g,"ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    }
} 

function encriptar(){

    const textoplano = document.getElementById('textAreaCentral').value;

    if(textoplano.length === 0){

        alert("Debe ingresar un mensaje para encriptar");
    }
   
    else{ 

        let textoCifrado = encriptarTexto(textoplano);

        if(textoCifrado.length > 0){

        Limpiar("textAreaCentral");

        ocultarElementos();

        document.getElementById("textAreaLateral").style.height = "400px";
    
        document.getElementById("textAreaLateral").value = textoCifrado;

         }
      }  

    }


function desencriptarTexto(textoCifrado) {

    const prohibido = /^[a-z\s]+$/;

    if (!prohibido.test(textoCifrado) ) {
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

        alert("Debe ingresar un mensaje para desencriptar");

    }

    else {
        
    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    if(textoDesencriptado.length > 0){

    Limpiar("textAreaCentral");

    document.getElementById("textAreaCentral").value = textoDesencriptado;

    Limpiar("textAreaLateral");

    mostrarElementos();
        
         }
    }

}




function Limpiar(id){

    const textarea = document.getElementById(id);

    textarea.value = "";
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

async function copiarContenido() {

    let texto = document.getElementById("textAreaLateral").value;

    try {

      await navigator.clipboard.writeText(texto);

      alert('Contenido copiado al portapapeles');

      /* Resuelto - texto copiado al portapapeles con éxito */

    } catch (error) {

      alert('Error al copiar: ', error);

      /* Rechazado - fallo al copiar el texto al portapapeles */

    }
  }