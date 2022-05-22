


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let elementH2 = document.getElementById("text-resultado");



function somar(){

     

    let numero1 = parseFloat(input1.value);
    let numero2 =  parseFloat(input2.value);
    let resultado = numero1 + numero2; 


    elementH2.innerHTML = "O resultado foi: " + resultado;

    input1.value = "";
    input2.value = "";

}

