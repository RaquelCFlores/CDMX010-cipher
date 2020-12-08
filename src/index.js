import cipher from './cipher.js';

document.getElementById("buttonCifrar").addEventListener('click', cifrar)

function cifrar () {
    console.log('running cifrar() start')
    let letra = document.getElementById("texto").value;//guardo el valor del input en la variable letra
    let offset = parseInt(document.getElementById("offset").value);//guardo el valor del input en la variable offset
    //console.log(letra);
    //console.log(offset);
    //let offset = 1;
    letra = letra.charCodeAt(letra); //encontramos código ASCII
   // console.log(letra);
    let convertir =((letra - 65 + offset)%26)+65; //recorriendo la letra según el desplazamiento dado, resultado en código ASCII
    //console.log(convertir);
    convertir = String.fromCharCode(convertir);
    //console.log(convertir);
    document.getElementById("cifrado").innerHTML = convertir;
    document.getElementById("cifrar").value = convertir;
    console.log('running cifrar() end')
}
