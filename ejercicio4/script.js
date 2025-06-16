const encontrarMayor = (num1, num2) => {
  if (num1 > num2) {
    console.log(`El número mayor es: ${num1}`);
    return num1;
  } else if (num2 > num1) {
    console.log(`El número mayor es: ${num2}`);
    return num2;
  } else {
    console.log("Ambos números son iguales.");
    return num1; 
  }
};

encontrarMayor(10, 5); 
encontrarMayor(3, 8); 
encontrarMayor(7, 7); 