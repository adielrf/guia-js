const mostrarTabla = () => {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');
    
    const numero = parseInt(numeroInput.value) || 0; 

    let tablaHTML = `<h2>Tabla del ${numero}:</h2>`;

    for (let i = 1; i <= 10; i++) {
        const producto = numero * i;
        tablaHTML += `<p>${numero} x ${i} = ${producto}</p>`;
    }

    resultadoDiv.innerHTML = tablaHTML;
};