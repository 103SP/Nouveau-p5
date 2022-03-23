// récupération de la chaîne de requête dans l'url
const queryString = window.location.search;
//console.log(queryString);
// extraire juste l'id du produits sélectionnés
let searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");
console.log(id);