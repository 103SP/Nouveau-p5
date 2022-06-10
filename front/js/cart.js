import saveCart from './Storage_API/SaveCart.js';
import api from './Storage_API/api.js';
const dom = {
  items: document.getElementById('cart__items'),
  totalQuantity: document.getElementById('totalQuantity'),
  totalPrice: document.getElementById('totalPrice'),
};

const total = {
  quantity: 0,
  price: 0,
};

for (let item of saveCart.get()) {

  const product = await api.getOneProductById(item.id);
  

  const div = document.createElement('div');
  div.innerHTML = `
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
  </article>`.trim();
  total.quantity += item.quantity;
  total.price += (product.price * item.quantity);


  /* 5-Éffacer un produit du panier au click */
  div.querySelector('.deleteItem').addEventListener('click', (event) => {
    saveCart.remove(item);
    event.target.closest('article.cart__item').remove();
    location.reload(true);
  });
  div.querySelector('.itemQuantity').addEventListener('change', (event) => {
    saveCart.setQuantity(item, parseInt(event.target.value));
  });
  dom.items.appendChild(div.firstChild);
  dom.totalQuantity.innerHTML = total.quantity
  dom.totalPrice.innerHTML = total.price 
  console.log(item.quantity);
};
