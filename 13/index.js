//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let percentualDeDesconto = 0.0;
/*
credito	5%
cheque	3%
debito ou dinheiro	10%
*/

if (tipoDePagamento == "credito"){
    percentualDeDesconto = 0.05}
    else if (tipoDePagamento == "cheque"){
        percentualDeDesconto = 0.03}
        else if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro"){
            percentualDeDesconto = 0.1
        }

const valorTotal = (valorDoProduto - (valorDoProduto * percentualDeDesconto)) / 100

console.log(`Valor a ser pago: R$${valorTotal.toFixed(2)}`)