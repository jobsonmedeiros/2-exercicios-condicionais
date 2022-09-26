//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;
let matriculaRealizada = false;

if (idadeDoAluno >= 18) {
    matriculaRealizada = true
} else if (idadeDoAluno < 18 && possuiResponsavel){
    matriculaRealizada = true
}

if (matriculaRealizada) {
    console.log("Matrícula realizada com sucesso!")
} else {
    console.log("Não é possível fazer a rematrícula.")
}