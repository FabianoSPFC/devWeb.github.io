if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('shop-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('card-read-more')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('shop-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-title')[0].innerText
    var price = shopItem.getElementsByClassName('card-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('imgProduto')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('shop-row')
    var cartItems = document.getElementsByClassName('shop-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('shop-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Produto já consta no carrinho')
            return
        }
    }
    var cartRowContents = `
        <div class="shop-item shop-column">
            <img class="shop-item-image" src="${imageSrc}" width="100" height="100">
            <span class="shop-item-title">${title}</span>
        </div>
        <span class="card-price shop-column">${price}</span>
        <div class="shop-quantity shop-column">
            <input class="shop-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVER</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('shop-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('shop-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('shop-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('card-price')[0]
        var quantityElement = cartRow.getElementsByClassName('shop-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('R$', ''))
        var quantity = quantityElement.value
        var total = total + (price * quantity)        
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('shop-total-price')[0].innerText = 'R$' + total
}