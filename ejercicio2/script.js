function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
  const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

  console.log("Nombre del alumno: " + nombre);
  console.log("Carnet: " + carnet);
  console.log("Nota final: " + notaFinal.toFixed(2)); // Redondeado a 2 decimales
}

calcularNotaFinal("Franklin Rivas", "12345678", 8, 9 , 10, 8.5);