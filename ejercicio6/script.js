const calcularDescuentoViaje = (origen, destino, precioBase) => {
  let descuentoPorcentaje = 0;
  let mensaje = "";

  if (origen.toLowerCase() === "palma") {
    switch (destino.toLowerCase()) {
      case "la costa del sol":
        descuentoPorcentaje = 5;
        break;
      case "panchimalco":
        descuentoPorcentaje = 10;
        break;
      case "puerto el triunfo":
        descuentoPorcentaje = 15;
        break;
      default:
        mensaje = "No hay descuento especial para este destino desde Palma.";
    }
  } else {
    mensaje = "Actualmente, los descuentos especiales solo aplican para viajes desde Palma.";
  }

  if (descuentoPorcentaje > 0) {
    const montoDescuento = (precioBase * descuentoPorcentaje) / 100;
    const precioFinal = precioBase - montoDescuento;
    console.log(`INFORMACION DEL VIAJE`);
    console.log(`Origen: ${origen}`);
    console.log(`Destino: ${destino}`);
    console.log(`Precio Base: $${precioBase.toFixed(2)}`);
    console.log(`Descuento Aplicado: ${descuentoPorcentaje}%`);
    console.log(`Monto del Descuento: $${montoDescuento.toFixed(2)}`);
    console.log(`Precio Final: $${precioFinal.toFixed(2)}`);
  } else {
    console.log(`INFORMACION DEL VIAJE`);
    console.log(`Origen: ${origen}`);
    console.log(`Destino: ${destino}`);
    console.log(`Precio Base: $${precioBase.toFixed(2)}`);
    console.log(mensaje);
  }
};


calcularDescuentoViaje("Palma", "La Costa del Sol", 75);
