const API_URL = "http://localhost:3000/api";
//Récupération API_URL des products
function getAllProducts() {
  return fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
}
//Récupération des id
function getOneProductById(id) {
  return fetch(`${API_URL}/products/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
}

export default { getAllProducts, getOneProductById };
// ne pas oublier l’attribut <script type="module" si non off>.