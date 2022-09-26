const ladoA = 10;
const ladoB = 4;

const ehBucha = (ladoA == ladoB ? true : false);

if(ehBucha) console.log("Sim") 
else {console.log("Não")}

/*
0	Branco
1	Ás
2	Duque
3	Terno
4	Quadra
5	Quina
6	Sena
*/

if (ladoA == 0) {console.log("Branco")}
else if (ladoA == 1) {console.log("Ás")}
else if (ladoA == 2) {console.log("Duque")}
else if (ladoA == 3) {console.log("Terno")}
else if (ladoA == 4) {console.log("Quadra")}
else if (ladoA == 5) {console.log("Quina")}
else if (ladoA == 6) {console.log("Sena")}
else console.log("Indefinido")

if (ladoB == 0) {console.log("Branco")}
else if (ladoB == 1) {console.log("Ás")}
else if (ladoB == 2) {console.log("Duque")}
else if (ladoB == 3) {console.log("Terno")}
else if (ladoB == 4) {console.log("Quadra")}
else if (ladoB == 5) {console.log("Quina")}
else if (ladoB == 6) {console.log("Sena")}
else console.log("Indefinido")