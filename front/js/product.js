// récupération de la chaîne de requête dans l'url
const queryString = window.location.search;
//console.log(queryString);
// extraire juste l'id du produits sélectionnés
let searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");

let url = `http://localhost:3000/api/products/${id}`;
//Construction du DOM
const dom = {
  title: document.getElementById("title"),
  price: document.getElementById("price"),
  description: document.getElementById("description"),
  image: document.querySelector(".item__img"),
  colors: document.getElementById("colors"),
  quantity: document.getElementById("quantity"),
  addToCart: document.getElementById("addToCart"),
};
//Utilisation de la méthode fetch pour récupérer mes données sur l'api
fetch(url)
.then((Response) => Response.json())
.then((product) => {
//console.log(product);
//Relier les éléments du DOM au products API
dom.title.innerHTML = product.name;
dom.price.innerHTML = product.price;
dom.description.innerHTML = product.description;
dom.image.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

});