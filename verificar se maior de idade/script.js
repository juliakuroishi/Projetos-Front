


function maiorIdade() {
    let anoNascimento = document.getElementById("input-ano").value;
let resposta = document.getElementById("resposta");
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - anoNascimento
    if (idade >= 18) {
        resposta.innerText = "voce é maior de idade";
    }
    else {
        resposta.innerText = "Você é menor de idade"
    }
    
}