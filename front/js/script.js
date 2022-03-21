//Récupérer les produits de la API
const url =`http://localhost:3000/api/products`;
// Sélection la section pare son id
const dom = { items: document.querySelector("#items"),};

fetch(url).then((Response) => // récupérer les données
Response.json().then((product) => {
//La méthode forEach()permet d'exécuter une fonction donnée sur chaque élément du tableau.
// j'aurais pu tout aussi bien utiliser une boucle for
product.forEach((product) => {
  console.log(product)
  
    // Sélection des éléments du DOM
    let html = `
    <a href="./product.html?id=${product._id}">
      <article>
        <img src="${product.imageUrl}" alt="${product.altTxt}">
        <h3 class="productName">${product.name}</h3>
        <p class="productDescription">${product.description}</p>
      </article>
    </a>`;
    dom.items.innerHTML += html;
  });
})
).catch(err => console.log('erreur : ' + err));