        const analizarNumeros = () => {
            const valores = [];

            for (let i = 1; i <= 10; i++) {
                const inputElement = document.getElementById(`valor${i}`);

                const valor = parseInt(inputElement.value) || 0; 
                valores.push(valor);
            }

            let cantidadNegativos = 0;
            let cantidadPositivos = 0;
            let cantidadMultiplos15 = 0;
            let acumuladoPares = 0;

            const esNegativo = (num) => num < 0;
            const esPositivo = (num) => num > 0;
            const esMultiploDe15 = (num) => num % 15 === 0;
            const esPar = (num) => num % 2 === 0;

            valores.forEach(valor => {
                if (esNegativo(valor)) {
                    cantidadNegativos++;
                }
                if (esPositivo(valor)) {
                    cantidadPositivos++;
                }
                if (esMultiploDe15(valor)) {
                    cantidadMultiplos15++;
                }
                if (esPar(valor)) {
                    acumuladoPares += valor;
                }
            });

            const resultadosDiv = document.getElementById('resultados');
            const negativosSpan = document.getElementById('negativos');
            const positivosSpan = document.getElementById('positivos');
            const multiplos15Span = document.getElementById('multiplos15');
            const paresAcumuladoSpan = document.getElementById('paresAcumulado');

            negativosSpan.textContent = cantidadNegativos;
            positivosSpan.textContent = cantidadPositivos;
            multiplos15Span.textContent = cantidadMultiplos15;
            paresAcumuladoSpan.textContent = acumuladoPares;

            resultadosDiv.style.display = 'block';
        };