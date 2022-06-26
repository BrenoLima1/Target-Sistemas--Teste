/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const outros = 19849.53;

const total = SP + RJ + MG + ES + outros; //180759.98 == 100%

//Calculando o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora (arrendondando para 2 casas decimais).
function percentual(faturamentoEstado) {
  return `${((faturamentoEstado * 100) / total).toFixed(2)}%`;
}

//Exibindo para o usuário
console.log(`Percentual de representação de cada estado:
                    SP: ${percentual(SP)} 
                    RJ: ${percentual(RJ)}
                    MG: ${percentual(MG)}
                    ES: ${percentual(ES)}
                    outros: ${percentual(outros)}
                    `);

/* 
SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
outros: 10.98% */