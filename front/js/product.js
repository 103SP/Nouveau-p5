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
//Utilisation de la méthode forEach pour afficher mais color
product.colors.forEach((color) => {
dom.colors.innerHTML += `<option value="${color}">${color}</option>`;
});
});
///////////ajouter produit////////
//let panier =[]

const addProduct = (event) => {
  let produitEnregistre = JSON.parse(localStorage.getItem("item"));
  //console.log(id,colors.value,quantiter.value);
  let item = {
    id: id, 
    quantity: parseInt (quantity.value), 
    color: colors.value,
  }
  
  //console.log(panier);
  
  if(produitEnregistre){
    //alert("produitEnregistre");
    let index = produitEnregistre.findIndex(elem => elem.id ===item.id && elem.color === item.color);
    if(index === -1){
      //alert("produitEnregistre element non trover");
      produitEnregistre.push (item); 
    }
    else {
      produitEnregistre[index].quantity = produitEnregistre[index].quantity + item.quantity;
    }
    localStorage.setItem("item",JSON.stringify(produitEnregistre));
    console.log(produitEnregistre);
  }
  else{
    produitEnregistre = [];
    produitEnregistre.push(item);
    localStorage.setItem("item",JSON.stringify(produitEnregistre));
    console.log(produitEnregistre);
  }
  }
  addToCart.addEventListener('click',addProduct)
  
  