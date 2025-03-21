// Seleciona todos os checkboxes na página
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Função para iniciar o cronômetro
function iniciarCronometro() {
    // Verifica se já existe um cronômetro na página
    let cronometroExistente = document.querySelector('.cronometro');
    if (cronometroExistente) {
        cronometroExistente.remove(); // Remove o cronômetro anterior
    }

    // Cria um elemento para exibir o cronômetro
    const cronometro = document.createElement('div');
    cronometro.className = 'cronometro';
    document.body.appendChild(cronometro);

    let tempoRestante = 90; // 1 minuto e 30 segundos em segundos

    // Atualiza o cronômetro a cada segundo
    const intervalo = setInterval(() => {
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;

        // Exibe o tempo formatado
        cronometro.textContent = `Tempo restante: ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

        // Reduz o tempo restante
        tempoRestante--;

        // Para o cronômetro quando o tempo acabar
        if (tempoRestante < 0) {
            clearInterval(intervalo);
            cronometro.textContent = 'Tempo esgotado!';
            setTimeout(() => cronometro.remove(), 2000); // Remove o cronômetro após 2 segundos
        }
    }, 1000);
}

// Adiciona o evento de clique a todos os checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            // Adiciona a classe dark-mode ao body para a animação
            document.body.classList.add('dark-mode');
            iniciarCronometro();

            // Remove a classe dark-mode após 1.5 segundos
            setTimeout(() => {
                document.body.classList.remove('dark-mode');
            }, 1500);
        }
    });
});
// Remove a mensagem de boas-vindas após a animação
setTimeout(() => {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
}, 4000); // Tempo da animação (4 segundos)