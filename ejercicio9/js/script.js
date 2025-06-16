const convertirTemperatura = () => {
    const celsiusInput = document.getElementById('celsiusInput');
    const resultadoDiv = document.getElementById('resultado');

    const celsius = parseFloat(celsiusInput.value) || 0;

    const fahrenheit = (celsius * 9 / 5) + 32;

    let mensajeClasificacion = '';

    if (fahrenheit >= 14 && fahrenheit <= 32) {
        mensajeClasificacion = 'Temperatura baja';
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
        mensajeClasificacion = 'Temperatura adecuada';
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        mensajeClasificacion = 'Temperatura alta';
    } else {
        mensajeClasificacion = 'Temperatura desconocida';
    }

    resultadoDiv.innerHTML = `
        <p>Temperatura en Celsius: ${celsius}°C</p>
        <p>Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
        <p>Clasificación: <strong>${mensajeClasificacion}</strong></p>
    `;
};