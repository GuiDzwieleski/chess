// Função para criar o tabuleiro
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Limpa o tabuleiro existente, caso já tenha algo

    // Criando as 64 casas
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div'); // Criando a casa dinamicamente
        square.classList.add('square');

        // Definindo a cor das casas (Alternando entre preto e branco)
        const row = Math.floor(i / 8); // Para encontrar a linha
        const col = i % 8; // Para encontrar a coluna

        if ((row + col) % 2 === 0) {
            square.classList.add('white');
        } else {
            square.classList.add('black');
        }

        board.appendChild(square);
    }
}

// Chamar a função para criar o tabuleiro
createBoard();
