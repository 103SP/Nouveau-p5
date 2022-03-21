//Récupérer les produits de la API
const url =`http://localhost:3000/api/products`;

fetch(url).then((Response) =>
Response.json().then((data) => {
    console.log(data);
})
).catch(err => console.log('erreur : ' + err));