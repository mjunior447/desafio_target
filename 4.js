const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calculaFaturamentoTotal(faturamentoPorEstado) {
  let total = 0;
  for (const estado in faturamentoPorEstado) {
    total += faturamentoPorEstado[estado];
  }
  return total;
}

function calculaPercentualPorEstado(faturamentoPorEstado) {
  const total = calculaFaturamentoTotal(faturamentoPorEstado);
  const percentuais = {};

  for (const estado in faturamentoPorEstado) {
    percentuais[estado] = (
      (faturamentoPorEstado[estado] / total) *
      100
    ).toFixed(2);
  }

  return percentuais;
}

// teste
const percentuaisPorEstado = calculaPercentualPorEstado(faturamentoPorEstado);
console.log(percentuaisPorEstado);
