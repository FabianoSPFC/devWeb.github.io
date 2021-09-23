const product = document.querySelector(".row");

function createProduct([img, category, tittle, description, price, choose]){
    let code = `
    <div class="col-xs-12 col-sm-3 teste">
    <div class="card">
    <a class="img-card">
    <img src="${img}" alt="${category}"/>
  </a>
    <div class="card-content">
        <h4 class="card-title">
            <a> ${tittle}
          </a>
        </h4>
        <p class="">
        ${description}
        </p>
        <span class="card-price"> ${price} </span></p>
        <input id="toggle" class="toggle" type="checkbox">Habilitar Produto: 
        <label for="toggle"></label>
    </div>
    <div class="card-read-more">
        <a href="#" class="btn btn-link btn-block">
            Editar Produto
        </a>
    </div>
</div>
</div>
`;

product.innerHTML += code;
}
let = a = ["https://assets.dmagstatic.com/wp-content/uploads/media/3151226/LaComida_guacamole.jpg?cropUpAlias=wide_8-12&width=677",
           "Comida",
           "Salada",
           "Salada de alface, tomate cereja",
           "10.00",
          ]


createProduct(a);