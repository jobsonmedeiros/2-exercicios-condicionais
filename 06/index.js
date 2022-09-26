const alturaEmCm = 206;

// Imprima na tela APROVADO caso o jogador tenha 
// 180cm de altura ou mais Imprima na tela REPROVADO 
// caso o jogador tenha menos de 180cm

const statusJogador = (alturaEmCm >= 180 ? "Aprovado" : "Reprovado");
console.log(statusJogador);

/*
Caso o jogador tenha menos de 180cm, o programa deve imprimir REPROVADO
Caso tenha entre 180cm e 185cm, o programa deve imprimir LÍBERO
Caso tenha entre 186cm e 195cm, o programa deve imprimir PONTEIRO
Caso tenha entre 196cm e 205cm, o programa deve imprimir OPOSTO
Caso tenha mais de 205cm, o programa deve imprimir CENTRAL
*/

if (alturaEmCm >= 180 && alturaEmCm <= 185){
    console.log("Líbero");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195){
    console.log("Ponteiro");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205){
    console.log("Oposto");
} else if (alturaEmCm > 205){
    console.log("Central");
}