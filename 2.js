const isNumberFibonacci = (num) => {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `O numero ${num} pertence a sequencia fibonacci.`;
  }

  while (b < num) {
    let next = a + b;
    a = b;
    b = next;
  }

  if (b === num) {
    return `O numero ${num} pertence a sequencia fibonacci.`;
  } else {
    return `O numero ${num} nao pertence a sequencia fibonacci.`;
  }
};

// Teste
const numero = 6;
console.log(isNumberFibonacci(numero));
