const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000; //emCentavos = 3.000.000/100 = R$30.000
const totalDeRendimentosRS = totalDeRendimentos / 100;

if(aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (totalDeRendimentosRS <= 28559.70){
    console.log("ISENTA");
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO")}