let nombre = "Franklin Rivas";
let salario = 800;
let categoria = "B";
let aumento = 0;

if (categoria === "A") {
  aumento = 0.15;
} else if (categoria === "B") {
  aumento = 0.30;
} else if (categoria === "C") {
  aumento = 0.10;
} else if (categoria === "D") {
  aumento = 0.20;
} else {
  console.log("Categoría no válida");
}

if (aumento > 0) {
  let incremento = salario * aumento;
  let nuevoSalario = salario + incremento;

  console.log("Nombre del empleado:", nombre);
  console.log("Salario actual: $" + salario);
  console.log("Categoría:", categoria);
  console.log("Porcentaje de aumento:", (aumento * 100) + "%");
  console.log("Monto de aumento: $" + incremento);
  console.log("Nuevo salario: $" + nuevoSalario);
}