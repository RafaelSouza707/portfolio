const dataset = [
    {
        titulo:"Jogo da Cobrinha.",
        descricao:"Jogo da cobrinha feito em HTML, CSS e JavaScript.",
        imagem:"img/imagem-card/gameSnake.png",
        link:"https://github.com/RafaelSouza707/Jogo-Snake/tree/main/Game_Snake"
    },
    {
        titulo:"Jogo Papel, Pedra e Tesoura.",
        descricao:"Jogo Papel, Pedra e Tesoura feito em HTML, CSS, JavaScript.",
        imagem:"img/imagem-card/gamePPT.png",
        link:"https://github.com/RafaelSouza707/Pedra-Papel-e-Tesoura/tree/main/Projeto%20Jogo%20JS"
    },
]

const cardDeck = document.querySelector('.card-deck');

for (const item of dataset) {
    const card = criarCard(item)

    cardDeck.insertAdjacentHTML('beforeend', card);
}

function criarCard(item) {
    return `<div class="item-card">
                <div class="img-card">
                    <a target="blank_" href="${item.link}"><img src="${item.imagem}" alt=""></a>
                </div>
                <div class="header-card">
                    <span>
                        <h2>${item.titulo}</h2>
                    </span>
                </div>
                <div class="descricao-card">
                        <p>${item.descricao}</p>
                </div>
            </div>`
}