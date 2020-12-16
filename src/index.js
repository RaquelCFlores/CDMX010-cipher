import cipher from './cipher.js';  //Aquí ingresaremos todo lo relacionado a manipulación del DOM (eventos del DOM)

console.log(cipher.encode(1, 'hola')) // IPMB
document.getElementById("buttonCifrar").addEventListener('click', cifrar) //Aquí invocamos el botón cifrar con el evento click y la función cifrar
document.getElementById("buttonDescifrar").addEventListener('click', descifrar) //Aquí invocamos el botón descifrar con el evento click y la función descifrar

function cifrar () {
    console.log('running cifrar() start')
    let text = document.getElementById("texto").value;//guardo el valor del input en la variable text
    let offset = parseInt(document.getElementById("offset").value);//guardo el valor del desplazamiento en la variable offset
    let resultado = cipher.encode(offset, text) //mandamos llamar al objeto (módulo) cipher con el objeto (método) encode con sus respectivos parametros y los guardamos en na variable para mostrarlos en la app web
    document.getElementById("cifrar").value = resultado; //Imprimo el resultado del for en la caja de texto con id = "cifrar"
    console.log('running cifrar() end')
}

function descifrar(){
    console.log("running descifrar() start")
    let text = document.getElementById("texto").value; //Guardo el valor que entra en input en la variable letra
    console.log(text);
    let offset = document.getElementById("offset").value; //Guardo el valor del desplazamiento en la variable offset
    console.log(offset);
    let resultado = cipher.decode(offset,text); //mando llamar al módulo cipher con el objeto decode con sus parametros correspondientes y lo guardo en una variable resultado
    document.getElementById("cifrar").value = resultado; //muestro en la caja de texto con id "cifrar" el resultado del descifrado
    console.log("running descifrar () end")
}
    
    







