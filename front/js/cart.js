import api from "./Storage_API/api.js";

let produitEnregistre = JSON.parse(localStorage.getItem("item"));
console.log(produitEnregistre);

const dom = {
    items: document.getElementById("cart__items"),
  };
 
 