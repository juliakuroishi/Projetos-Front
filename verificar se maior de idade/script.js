function maiorIdade() {
    let anoNascimento = document.getElementById("input-ano").value;
    let resposta = document.getElementById("resposta");
    let resposta2 = document.getElementById("resposta2");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - anoNascimento

    if (idade >= 18) {
        resposta.innerText = "Voce é maior de idade";
        resposta2.innerText = `Sua idade é: ${idade}`;
    }
    else {
        resposta.innerText = "Você é menor de idade"
        resposta2.innerText = idade;
        resposta2.innerText = `Sua idade é: ${idade}`
    }
    
}