// récupération de la chaîne de requête dans l'url
const queryString = window.location.search;
//console.log(queryString);
// extraire juste l'id du produits sélectionnés
let searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");
console.log(queryString);

//Construction du DOM
let url = `http://localhost:3000/api/products/${id}`;
const dom = {
  title: document.getElementById("title"),
  price: document.getElementById("price"),
  description: document.getElementById("description"),
  image: document.querySelector(".item__img"),
  colors: document.getElementById("colors"),
  quantity: document.getElementById("quantity"),
  addToCart: document.getElementById("addToCart"),
};
