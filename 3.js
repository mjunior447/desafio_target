// exemplo em json
const faturamentoDiario = [
  { dia: 1, valor: 200.0 },
  { dia: 2, valor: 0.0 },
  { dia: 3, valor: 300.0 },
  { dia: 4, valor: 400.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 150.0 },
  { dia: 7, valor: 0.0 },
];

const calcularFaturamento = (dados) => {
  const diasComFaturamento = dados.filter((dia) => dia.valor > 0);

  if (diasComFaturamento.length === 0) {
    return {
      menorValor: 0,
      maiorValor: 0,
      diasAcimaDaMedia: 0,
      media: 0,
    };
  }

  const valores = diasComFaturamento.map((dia) => dia.valor);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);

  const soma = valores.reduce((acc, valor) => acc + valor, 0);
  const media = soma / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.valor > media
  ).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
    media,
  };
};

// testes
const resultado = calcularFaturamento(faturamentoDiario);
