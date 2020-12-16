const cipher = {   //este es mi (objeto) módulo cipher que tiene un método (objeto) separados por comas
  encode: function (offset, text) {  //objeto encode donde mando llamar los parametros que tienen de desplazamiento y texto ingresado por usuario
    text = text.toUpperCase(); //convierto mi texto del input en mayúsculas
    console.log(text);
    let cadenaCif = " "; //Declaro una variable vacia para guardar el texto ya cifrado 
    console.log(cadenaCif);
        for (let i = 0; i < text.length; i++){   // Utilizo un for para recorrer "n" veces el texto en entra en el input
            let codAs = text.charCodeAt(i); //encontramos código ASCII de cada elemento de cadena y lo guardamos en la variable "codAs"
            console.log(codAs);
            codAs=((codAs - 65 + offset)%26)+65; // Recorriendo la letra según el desplazamiento dado, resultado en código ASCII
            console.log(codAs);
            cadenaCif += String.fromCharCode(codAs); // convertimos el código ASCII deslazado a una letra nuevamente y lo vamos guardando en la cadena vacia "cadenaCif"
            console.log(cadenaCif);            
    }    
    return cadenaCif; //retorno el cifrado de texto ingresado
  },

  decode: function (offset, letra) { // objeto decode donde tenemos una función que manda a llamar al offset y texto que ingres el usuario
    letra = letra.toUpperCase();  //convertimos a mayúsculas lo que se ingresa en la caja de texto input
    console.log(letra);
    let cadenaDes = ""; //Declaramos una variable vacia para poder guardar la cadena descifrada
    console.log(cadenaDes);
    for(let i = 0; i < letra.length; i++){  //iniciamos un for para recorrer el texto ingresado
        let cadAs = letra.charCodeAt(i); //declaramos una variable para asignarle el valor ASCII de una de las letras ingresadas
        console.log(cadAs);
        let desLetra = ((cadAs+65-offset)%26) + 65; //declaramos otra variable para guardar el resultado de plicar la formúla para retroceder en el alfabeto.
        console.log(desLetra);
        cadenaDes += String.fromCharCode(desLetra); //el la variable vacia vamos concatenando el decifrado de cada palabra que recorre el for
        console.log(cadenaDes);
  }
  return cadenaDes; //retornamos la cadena descifrada
},
};
export default cipher;
