function carregar() {
    fetch('itens.json') // Puxa o conteudo json.
        .then(response => response.json()) // transforma o conteudo de string para json.
        .then(cards => { // A partir daqui o card é montado seguindo o padao estabelecido.
            const container = document.querySelector("#cards-default")

            cards.map(rcard => {
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img");
                img.scr = rcard.imagem
                img.alt = rcard.titulo

                const nome = document.createElement("h3")
                nome.textContent = card.titulo

                card.appendChild(img)
                card.appendChild(nome)
                container.appendChild(card)
            })
        })
}


carregar()