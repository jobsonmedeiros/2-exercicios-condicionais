const alturaEmCm = 185;

// Imprima na tela APROVADO caso o jogador tenha 
// 180cm de altura ou mais Imprima na tela REPROVADO 
// caso o jogador tenha menos de 180cm

const statusJogador = (alturaEmCm >= 185 ? "Aprovado" : "Reprovado");
console.log(statusJogador);