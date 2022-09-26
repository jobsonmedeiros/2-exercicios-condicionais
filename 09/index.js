const nota = 5;
let conceito = "";
/*
9 a 10	A
8 a 8,9	B
6 a 7,9	C
4 a 5,9	D
menos que 4	E
*/

if (nota >= 9 && nota <= 10) {conceito = "A"}
else if (nota >= 8.0 && nota <= 8.9) {conceito = "B"}
else if (nota >= 6.0 && nota <= 7.9) {conceito = "C"}
else if (nota >= 4.0 && nota <= 5.9) {conceito = "D"}
else if (nota < 4.0) {conceito = "E"}

console.log(`O estudante obteve conceito ${conceito}`)