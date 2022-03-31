const dom = {
  items: document.getElementById('cart__items'),
  totalQuantity: document.getElementById('totalQuantity'),
  totalPrice: document.getElementById('totalPrice'),
};

const total = {
    quantity: 0,
    price: 0,
  };

let cartItems = JSON.parse(localStorage.getItem('item'));
cartItems.forEach((item) => {
  //console.log(1, item.id);
  const url = `http://localhost:3000/api/products/${item.id}`;
  fetch(url)
    .then((Response) => Response.json())
    .then((product) => {
      //console.log(2, product);
      let html = `
  <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
  <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altTxt}">
  </div>
  <div class="cart__item__content">
      <div class="cart__item__content__description">
      <h2>${product.name}</h2>
      <p>${item.color}</p>
      <p>${product.price} €</p>
      </div>
      <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
      </div>
      </div>
  </div>
</article>`;

      dom.items.innerHTML += html;
      total.quantity += item.quantity;
      total.price += product.price;
      console.log(total.price);
      dom.totalQuantity.innerHTML = total.quantity
      dom.totalPrice.innerHTML = total.price


    });
});


