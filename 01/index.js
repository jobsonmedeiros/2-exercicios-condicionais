// Duas pessoas estão jogando pedra, papel ou tesoura. 
// Você deve imprimir o nome da jogada vencedora,
// ou "empate", em caso de empate.

const jogador1 = "PEDRA"
const jogador2 = "papel"

jogada1 = jogador1.toLowerCase();
jogada2 = jogador2.toLowerCase();

if(jogada1 == "pedra" || jogada1 == "Pedra" || jogada1 == "PEDRA"){
    if (jogada2 == "pedra"){console.log("Empate. Pedra/Pedra")}
    else if (jogada2 == "papel"){ console.log("Papel. Pedra é embrulhada pelo papel.")}
    else if(jogada2 == "tesoura"){ console.log("Pedra. Pedra esmaga tesoura.")}

}
else if (jogada1 == "papel"){
    if (jogada2 == "papel"){console.log("Empate. Papel/Papel")}
    else if (jogada2 == "pedra"){ console.log("Papel ganha. Papel embrulhada pedra.")}
    else if(jogada2 == "tesoura"){ console.log("Tesoura. Tesoura corta papel. ")}

}
else if (jogada1 == "tesoura"){
    if (jogada2 == "pedra"){console.log("Pedra. Pedra esmaga tesoura.")}
    else if (jogada2 == "papel"){ console.log("Tesoura. Tesoura corta papel.")}
    else if(jogada2 == "tesoura"){ console.log("Empate. Tesoura/tesoura. ")}

}

