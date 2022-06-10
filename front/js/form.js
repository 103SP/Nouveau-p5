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
function getForm() {
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
      return true;
  
      if (emailRegExp.test(inputEmail.value)) {
        emailErrorMsg.innerHTML = '';
      } else {
        emailErrorMsg.innerHTML = 'email non valide.';
        return false;
      }
    };
  }
  getForm();