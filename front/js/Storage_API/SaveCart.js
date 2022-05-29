function set(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function get() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart === null) {
    return clear();
  }
  return cart;
}

function add(item) {
  let cart = get();
  let index = cart.findIndex(
    (elem) => elem.id === item.id && elem.color === item.color
  );
  if (index === -1) {
    cart.push(item);
  } else {
    cart[index].quantity = cart[index].quantity + item.quantity;
  }
  set(cart);
}

function remove(item) {
  let cart = get();
  cart = cart.filter((elem) => elem.id != item.id || elem.color != item.color);
  set(cart);
  return cart;
}

function setQuantity(item, quantity) {
  let cart = get();
  let index = cart.findIndex(
    (elem) => elem.id == item.id && elem.color == item.color
  );
  if (index != -1) {
    cart[index].quantity = quantity;
  }
  set(cart);
}


function clear() {
  set([]);
  return [];
}

const SaveCart = {
  add: add,
  get: get,
  setQuantity: setQuantity,
  remove: remove,
  clear: clear,

};

export default SaveCart;



