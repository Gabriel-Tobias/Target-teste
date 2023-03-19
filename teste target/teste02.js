function verificaSequencia(num) {
  let a = 0;
  let b = 1;
  let fibonacci = [];

  while (b <= num) {
    fibonacci.push(b);
    let temp = b;
    b = a + b;
    a = temp;
  }

  if (fibonacci.includes(num)) {
    console.log(`${num} Faz parte da sequência de Fibonacci: ${fibonacci.join(", ")}`);
  } else {
    console.log(`${num} não faz parte da sequência de Fibonacci`);
  }
}

verificaSequencia(8); // retorna "8 pertence à sequência de Fibonacci: 1, 1, 2, 3, 5, 8"
verificaSequencia(10); // retorna "10 não pertence à sequência de Fibonacci"
