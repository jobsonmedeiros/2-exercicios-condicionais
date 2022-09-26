//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300_000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1_000_000;


if(mesesDecorridos <= 60 && rendaMensalEmCentavos > 200_000){
    const valorDaParcela = ((18/100 * rendaMensalEmCentavos)/100);
    console.log(`O valor da parcela desse mês é R$ ${valorDaParcela.toFixed(2)} reais.`);
} else {
    valorDaParcela = 0.0;
    console.log(`O valor da parcela desse mês é R$ ${valorDaParcela.toFixed(2)} reais.`);
}

