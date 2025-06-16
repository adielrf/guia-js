const generarInputs = (containerId, cantidad) => {
    const container = document.getElementById(containerId);
    for (let i = 1; i <= cantidad; i++) {
        const label = document.createElement('label');
        label.textContent = `Edad estudiante ${i}: `;
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '1';
        input.id = `${containerId}Edad${i}`;
        input.value = '18'; 
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
};

const procesarEdades = () => {
    const obtenerEdades = (containerId, cantidad) => {
        const edades = [];
        for (let i = 1; i <= cantidad; i++) {
            const inputId = `${containerId}Edad${i}`;
            const edad = parseInt(document.getElementById(inputId).value) || 0;
            edades.push(edad);
        }
        return edades;
    };

    const calcularPromedio = (edades) => {
        if (edades.length === 0) return 0;
        const suma = edades.reduce((total, edad) => total + edad, 0);
        return suma / edades.length;
    };

    const edadesManana = obtenerEdades('mananaInputs', 5);
    const edadesTarde = obtenerEdades('tardeInputs', 6);
    const edadesNoche = obtenerEdades('nocheInputs', 11);

    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    let turnoMayorPromedio = '';
    let mayorPromedio = 0;

    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        turnoMayorPromedio = 'Mañana';
        mayorPromedio = promedioManana;
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        turnoMayorPromedio = 'Tarde';
        mayorPromedio = promedioTarde;
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
        turnoMayorPromedio = 'Noche';
        mayorPromedio = promedioNoche;
    } else {
        turnoMayorPromedio = 'Hay un empate en el promedio más alto o todos son iguales.';
        mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    }

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Promedios de Edades por Turno:</h2>
        <p>Promedio Turno Mañana: ${promedioManana.toFixed(2)}</p>
        <p>Promedio Turno Tarde: ${promedioTarde.toFixed(2)}</p>
        <p>Promedio Turno Noche: ${promedioNoche.toFixed(2)}</p>
        <p>El turno con el promedio de edades mayor es: <strong>${turnoMayorPromedio}</strong> (Promedio: ${mayorPromedio.toFixed(2)})</p>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    generarInputs('mananaInputs', 5);
    generarInputs('tardeInputs', 6);
    generarInputs('nocheInputs', 11);
});