function saudar(){
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    document.getElementById('saudacao').innerText = `Prazer em te conhcer, ${nome} ${sobrenome}! :)`;
}