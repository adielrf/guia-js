const calcularDescuento = () => {
            const carroSeleccionado = document.getElementById('carro').value;
            const precioOriginal = parseFloat(document.getElementById('precio').value);
            let porcentajeDescuento = 0;

            switch (carroSeleccionado) {
                case 'FORD FIESTA':
                    porcentajeDescuento = 5;
                    break;
                case 'FORD FOCUS':
                    porcentajeDescuento = 10;
                    break;
                case 'FORD ESCAPE':
                    porcentajeDescuento = 20;
                    break;
                default:
                    porcentajeDescuento = 0; 
            }

            const descuentoAplicado = (precioOriginal * porcentajeDescuento) / 100;
            const precioFinal = precioOriginal - descuentoAplicado;

            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <p>carro seleccionado: <span class="bold-text">${carroSeleccionado}</span></p>
                <p>Precio original: <span class="bold-text">$${precioOriginal.toFixed(2)}</span></p>
                <p>Descuento aplicado: <span class="bold-text">${porcentajeDescuento}%</span></p>
                <p>Monto del descuento: <span class="bold-text">$${descuentoAplicado.toFixed(2)}</span></p>
                <p>Precio final con descuento: <span class="bold-text">$${precioFinal.toFixed(2)}</span></p>
            `;
        };