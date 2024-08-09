function alternar() {
    let lampada = document.getElementById('lampada');
    let estado = document.getElementById('estado');

    // Verifica qual a URL atual e alternar
    if (lampada.src.includes('lampada-apagada.jpg')) {
        lampada.src = "./lampada-on.jpg";
        estado.innerHTML = "Acesa para iluminar!"

    } else {
        lampada.src = "./lampada-apagada.jpg";
        estado.innerHTML = "Apagada para economizar energia!"
    }
}