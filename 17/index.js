//valor do produto comprado em centavos.
const valorDoProduto = 100000;
const valorDoProdutoRS = valorDoProduto /100
//quantidade de parcelas
const quantidadeDeParcelas = 10;
const valorDaParcela = valorDoProdutoRS / quantidadeDeParcelas
//valor pago
const valorPago = 300;
const parcelasQueFaltam = (valorDoProdutoRS - valorPago) / valorDaParcela

console.log(`Restam ${parcelasQueFaltam} parcelas de R$${valorDaParcela}`)