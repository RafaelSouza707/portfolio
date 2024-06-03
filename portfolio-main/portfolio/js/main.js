console.log('10')
var x = 10


const dataset = [
    {
        titulo:"Site",
        descricao:"dafmkkabkhbfa jknbfaj lbfjla kbfljka hbf abfoakhjb ajhfb aj hfbajh fbajf hba jhab fojahb ajhbf jayb fiouyg ouyabf uoyaseb9 8",
        imagem:"img/imagem-card/200px.png",
        link:"#"
    },
    {
        titulo:"Site1",
        descricao:"dafmkkabkhbfa jknbfaj lbfjla kbfljka hbf abfoakhjb ajhfb aj hfbajh fbajf hba jhab fojahb ajhbf jayb fiouyg ouyabf uoyaseb9 8",
        imagem:"img/imagem-card/200px.png",
        link:"#"
    },
    {
        titulo:"Site2",
        descricao:"dafmkkabkhbfa jknbfaj lbfjla kbfljka hbf abfoakhjb ajhfb aj hfbajh fbajf hba jhab fojahb ajhbf jayb fiouyg ouyabf uoyaseb9 8", 
        imagem:"img/imagem-card/200px.png",
        link:"#"
    },
    {
        titulo:"Site3",
        descricao:"dafmkkabkhbfa jknbfaj lbfjla kbfljka hbf abfoakhjb ajhfb aj hfbajh fbajf hba jhab fojahb ajhbf jayb fiouyg ouyabf uoyaseb9 8", 
        imagem:"img/imagem-card/200px.png",
        link:"#"
    }
]

const cardDeck = document.querySelector('.card-deck');

for (const item of dataset) {
    const card = criarCard(item)

    cardDeck.insertAdjacentHTML('beforeend', card);
}

function criarCard(item) {
    return `<div class="item-card">
                <div class="img-card">
                    <a href="#"><img src="${item.imagem}" alt=""></a>
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