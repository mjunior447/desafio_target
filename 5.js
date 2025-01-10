const inverteString = (str) => {
  let stringNova = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringNova += str[i];
  }
  return stringNova;
};

// teste
const stringTeste = "teste";
console.log(inverteString(stringTeste));
