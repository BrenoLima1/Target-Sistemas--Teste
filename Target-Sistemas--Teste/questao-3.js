/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

import dados from "./dados.json" assert { type: "json" };

const dadosDiasUteis = [];
const valoresDiasUteis = [];
let menorValor = 0;
let maiorValor = 0;
let faturamentoTotal = 0;
let mediaMensal = 0;
let diasAcimaDaMedia = 0;

//Obtendo apenas os dias úteis do mês
for (const d of dados) {
  if (d.valor > 0) {
    dadosDiasUteis.push(d);
    valoresDiasUteis.push(d.valor);

    //Obtendo o total de faturamento mensal
    faturamentoTotal += d.valor; //438172.77349999995
  }
}

//Obtendo a média de faturamento mensal
mediaMensal = faturamentoTotal / valoresDiasUteis.length; //20865.370166666664

//Obtendo o menor valor de faturamento ocorrido em um dia do mês
for (const i in valoresDiasUteis) {
  if (valoresDiasUteis[i] < valoresDiasUteis[i - 1])
    menorValor = valoresDiasUteis[i];

  //Obtendo o maior valor de faturamento ocorrido em um dia do mês
  if (valoresDiasUteis[i] > maiorValor) maiorValor = valoresDiasUteis[i];

  // Obtendo o número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
  if (valoresDiasUteis[i] > mediaMensal) diasAcimaDaMedia++;
}

//Exibindo as informações para o usuário
console.log('O menor faturamento ocorrido em um dia do mês foi : ' + menorValor); //8414.61
console.log('O maior faturamento ocorrido em um dia do mês foi : ' + maiorValor); //48924.2448
console.log('Este mês apresentou ' + diasAcimaDaMedia +' dias com faturamento acima da média mensal'); //10