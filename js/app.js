const contarvocales = (palabra) =>{
    const vocales = [ "a", "e", "i", "o", "u" ];
    contadorv = 0;
    for (let letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
            contadorv++;
        }
    }
    return contadorv
};
function iniciarconteo () {
    numeropalabras=parseInt(prompt("¿Cuántas palabras desea ingresar"));

    if  (isNaN(numeropalabras) || numeropalabras <= 0) {
        window.alert ("Por favor, ingresar número válido.")
    }

    let palabrasingresadas = [];
    for (i=0; i<numeropalabras; i++){
        numerador = i + 1;
        palabra = prompt(`Ingresa la palabra número ${numerador}`);
        palabrasingresadas.push(palabra);
    }
    let todaslaspalabras = palabrasingresadas.join("");

    let totalvocales = 0;
    for (let palabra of palabrasingresadas) {
        totalvocales += contarvocales(palabra)
    }

    console.log(`La cantidad de vocales es ${totalvocales}`);
    window.alert(`La cantidad de vocales es ${totalvocales}`);
    document.getElementById("resultado").innerHTML = `La cantidad de vocales es ${totalvocales}`
};
window.alert(" A continuación, debes ingresar las palabras que gustes para poder calcular su cantidad de vocales");
iniciarconteo ()
