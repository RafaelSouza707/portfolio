import dataset from "./model/dataset";
itens = dataset;

projetoModel.load(itens)
let coteudo = foodsmodel.readAll();

function mostraCard() {
  for(let item of itens){
    const view = createProjeto(item);

    let itemProjeto = document.getElementById("cards-default");
    itemProjeto.insertAdjacentHTML("beforeend", view);
  }
}

function createProjeto(item) {
  const descricao = truncate(item.descricao, 30, "...");
  const view = `<div">
                    <img src="${item.imagem}" class="card-img-top" alt="...">

                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;

  return view;
}

function truncate(str, max, sep) {
  // Default to 10 characters
  max = max || 10;

  var len = str.length;
  if (len > max) {
    // Default to elipsis
    sep = sep || "...";

    var seplen = sep.length;

    // If seperator is larger than character limit,
    // well then we don't want to just show the seperator,
    // so just show right hand side of the string.
    if (seplen > max) {
      return str.substr(len - max);
    }

    // Half the difference between max and string length.
    // Multiply negative because small minus big.
    // Must account for length of separator too.
    var n = -0.5 * (max - len - seplen);

    // This gives us the centerline.
    var center = len / 2;

    var front = str.substr(0, center - n);
    var back = str.substr(len - center + n); // without second arg, will automatically go to end of line.

    return front + sep + back;
  }

  return str;
}


function carregar() {
    
}

mostraCard()
