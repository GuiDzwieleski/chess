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

// Função para adicionar as peças
function addPieces() {
    const board = document.getElementById('board');
    const squares = board.getElementsByClassName('square'); // Usando plural "squares"

    // Inicializando as peças no tabuleiro
    const initialPositions = [
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'], // Linha 1 (peças brancas)
        ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'], // Linha 2 (peões brancos)
        [], [], [], [], [], // Linha 3 a 6 (vazia)
        ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'], // Linha 7 (peões pretos)
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'], // Linha 8 (peças pretas)
    ];

    // Adicionando as peças brancas e pretas
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const squareIndex = row * 8 + col;
            const piece = initialPositions[row][col];

            if (piece) {
                const pieceElement = document.createElement('div');
                pieceElement.classList.add(piece);
                pieceElement.classList.add(row < 2 ? 'white' : 'black');
                squares[squareIndex].appendChild(pieceElement);
            }
        }
    }
}

// Chamar a função para criar o tabuleiro
createBoard();

// Adicionar as peças ao tabuleiro
addPieces();
