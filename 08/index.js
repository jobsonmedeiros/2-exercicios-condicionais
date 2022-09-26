const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

/*
Menores de 12 anos
Maiores de 65 anos
Que possuam qualquer patologia cardíaca
Menores de 150cm de altura
Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:

10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
20 reias, caso contrário
Seu papel é imprimir na tela:

ACESSO NEGADO caso a pessoa não possa brincar
10 reais caso esse seja o valor que a pessoa deve pagar para brincar
20 reais caso esse seja o valor que a pessoa deve pagar para brincar
*/
const podeBrincar = ((idade >= 12 && idade <= 65) && !possuiPatologia && altura >= 150)
const valorEntrada = (ehEstudante || idade < 18 ? 10.00 : 20.00)

if (!podeBrincar){
    console.log("ACESSO NEGADO");
} else {
    console.log(`${valorEntrada}`)
}