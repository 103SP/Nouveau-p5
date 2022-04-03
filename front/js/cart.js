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
          <p class="deleteItem" id="${item.id}">Supprimer</p>
      </div>
      </div>
  </div>
</article>`;

      dom.items.innerHTML += html;
      total.quantity += item.quantity;
      total.price += product.price;
      //console.log(total.price);
      dom.totalQuantity.innerHTML = total.quantity
      dom.totalPrice.innerHTML = total.price


let deleteItem = document.querySelectorAll('.deleteItem');

      for (let i = 0; i < deleteItem.length; i++) {

        deleteItem[i].addEventListener('click', (event) => {
        event.preventDefault();
         event.target.closest('article.cart__item').remove(item);
         console.log(deleteItem[i]);         

       
    
        cartItems.filter(
              (elem) => elem.id !== item.id || elem.color !== item.color
          );
          alert("cartItems.filter passer");
  //        console.log(cartItems);
localStorage.removeItem(item);
localStorage.setItem('cartItems', JSON.stringify(item));

//localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         return cartItems;
//          localStorage.setItem("item", JSON.stringify(cartItems));
      
       
        });
      }

    });
});

///////////////////////////////////////////////////////////////
function getForm() {
  let form = document.querySelector('.cart__order__form');
  //https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/JavaScript_Examples.html
  //Validation selon une expression régulière Regex
  let emailRegExp = /.+@.+\..+/;
  let charRegExp = /^[a-zA-Z ,.'-]+$/;
  let addressRegExp = /[0-9]+[a-zA-Z ,.'-]/;

  form.firstName.addEventListener('change', function () {
    validFirstName(this);
  });

  form.lastName.addEventListener('change', function () {
    validLastName(this);
  });

  form.address.addEventListener('change', function () {
    validAddress(this);
  });

  form.city.addEventListener('change', function () {
    validCity(this);
  });

  form.email.addEventListener('change', function () {
    validEmail(this);
  });

  const validFirstName = function (inputFirstName) {
    let firstNameErrorMsg = inputFirstName.nextElementSibling;

    if (charRegExp.test(inputFirstName.value)) {
      firstNameErrorMsg.innerHTML = '';
    } else {
      firstNameErrorMsg.innerHTML = 'Prénon non valide.';
    }
  };

  const validLastName = function (inputLastName) {
    let lastNameErrorMsg = inputLastName.nextElementSibling;

    if (charRegExp.test(inputLastName.value)) {
      lastNameErrorMsg.innerHTML = '';
    } else {
      lastNameErrorMsg.innerHTML = 'Non non valide.';
    }
  };

  const validAddress = function (inputAddress) {
    let addressErrorMsg = inputAddress.nextElementSibling;

    if (addressRegExp.test(inputAddress.value)) {
      addressErrorMsg.innerHTML = '';
    } else {
      addressErrorMsg.innerHTML = 'Adresse non valide.';
    }
  };

  const validCity = function (inputCity) {
    let cityErrorMsg = inputCity.nextElementSibling;

    if (charRegExp.test(inputCity.value)) {
      cityErrorMsg.innerHTML = '';
    } else {
      cityErrorMsg.innerHTML = 'Ville non valide.';
    }
  };

  const validEmail = function (inputEmail) {
    let emailErrorMsg = inputEmail.nextElementSibling;

    if (emailRegExp.test(inputEmail.value)) {
      emailErrorMsg.innerHTML = '';
    } else {
      emailErrorMsg.innerHTML = 'email non valide.';
    }
  };
}
getForm();
