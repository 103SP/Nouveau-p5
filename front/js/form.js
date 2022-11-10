 /*
let form = document.querySelector('.cart__order__form');
//Creation de la regexp pour validation
let emailRegExp = /.+@.+\..+/;
let charRegExp = /^[a-zA-Z ,.'-]+$/;
let addressRegExp = /[0-9]+[a-zA-Z ,.'-]/;


//écouter la modification de firstName
form.firstName.addEventListener('change', function(){
    validFirstName(this);
});

const validFirstName = function(inputFirstName){
   
//récuperation de la balise firstNameErrorMsg
    let firstNameErrorMsg = inputFirstName.nextElementSibling;

// test expression reguliere
    if (charRegExp.test(inputFirstName.value)) {
        firstNameErrorMsg.innerHTML = 'adresse valide';
    }else{
        firstNameErrorMsg.innerHTML = 'adresse non valide';
   
    }
};

*/

    let form = document.querySelector('.cart__order__form');
    //https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/JavaScript_Examples.html
    //Validation selon une expression régulière Regex
    let emailRegExp = /.+@.+\..+/;
    let charRegExp = /^[a-zA-Z ,.'-]+$/;
    let addressRegExp = /[0-9]+[a-zA-Z ,.'-]/;
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validEmail(form.email) && validFirstName(form.firstName)){
  form.submit();
      }
    });
  
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
        return true;
      } else {
        firstNameErrorMsg.innerHTML = 'Prénon non valide.';
        return false;
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
        return false;
      }
    };
  


  //Envoi des informations client au localstorage

  const commander = document.getElementById("order");
  
  
  commander.addEventListener("click", (event)=>{
    
      //Récupération des coordonnées du formulaire client
      let contact = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      };

   localStorage.setItem("contact", JSON.stringify(contact));

   const options = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
        'Accept': 'application/json', 
        "Content-Type": "application/json" 
    },
};
fetch("http://localhost:3000/api/products/order", options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            localStorage.setItem("orderId", data.orderId);
            //redirection page confirmation
            document.location.href = "confirmation.html";
        })
        .catch((err) => {
            alert ("Problème avec fetch : " + err.message);
        });

      })