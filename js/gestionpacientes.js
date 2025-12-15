function calcularpromediopeso(pacientes){
let sumapeso = 0;
for (let i=0; i < pacientes.length; i++) {
sumapeso += pacientes[i].peso;

}
return sumapeso / pacientes.length;
}



function conteopacientes() {
let cantidadpacientes = parseInt(prompt("Pacientes atendidos el día de hoy:"));
if (isNaN(cantidadpacientes) || cantidadpacientes <=0){
    window.alert ("Ingrese número válido");
    return;    
}
let pacientes = [];
for (i= 0; i < cantidadpacientes; i++) {
    let nombrepaciente = prompt(`Ingrese nombre del paciente ${i + 1}:`);
    let edadpaciente = prompt(`Ingrese edad de ${nombrepaciente}`);
    let sexopaciente = prompt(`Ingrese sexo (F/M/NB) de ${nombrepaciente}`);
    let pesopaciente = prompt(`Ingrese peso (kg) de ${nombrepaciente}`);

    pacientes.push({
        nombre: nombrepaciente,
        edad: edadpaciente,
        sexo: sexopaciente,
        peso: pesopaciente

    });
}
let promediopesototal = calcularpromediopeso(pacientes);
console.log("Información de pacientes ingresados:");
pacientes.forEach((paciente, i) => {
    console.log (`Paciente ${i + 1}: ${paciente.nombre}, Edad: ${paciente.edad}, Sexo: ${paciente.sexo}, Peso: ${paciente.peso} kg.`)
    
});
console.log(`El peso promedio es: ${promediopesototal} Kg`)

};

conteopacientes(); 