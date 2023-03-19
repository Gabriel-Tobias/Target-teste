function calcularFaturamento(vetorFaturamento) {
    let menorValor = vetorFaturamento[0];
    let maiorValor = vetorFaturamento[0];
    let somaFaturamento = 0;
    let mediaFaturamento = 0;
    let countDiasAcimaDaMedia = 0;
  
    for (let i = 0; i < vetorFaturamento.length; i++) {
      let valorFaturamento = vetorFaturamento[i];
      
      if (valorFaturamento < menorValor) {
        menorValor = valorFaturamento;
      }
  
      if (valorFaturamento > maiorValor) {
        maiorValor = valorFaturamento;
      }
  
      somaFaturamento += valorFaturamento;
    }
  
    mediaFaturamento = somaFaturamento / vetorFaturamento.length;
  
    for (let i = 0; i < vetorFaturamento.length; i++) {
      let valorFaturamento = vetorFaturamento[i];
  
      if (valorFaturamento > mediaFaturamento) {
        countDiasAcimaDaMedia++;
      }
    }
  
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média: ${countDiasAcimaDaMedia}`);
  }
  
// não conseguir elaborar uma forma de fazer o faturamento mensal