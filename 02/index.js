const jogador1 = 5;
const jogador2 = 3;

const soma = jogador1 + jogador2;
const paridade = (soma % 2 == 0 ? "par" : "ímpar");

const palpiteJogador1 = "par";
const palpiteJogador2 = "ímpar";

if (palpiteJogador1 == paridade){
    console.log(`Jogador1 venceu, pois ${soma} é ${paridade}`);
} 
else {console.log(`Jogador2 venceu, pois ${soma} é ${paridade}`);}

