var min=1000000000000; 
var max=1;  
var random = Math.floor(Math.random() * (max - min)) + min; 
const order = document.getElementById("orderId");
order.innerHTML = "<br>" + random;
localStorage.setItem("", JSON.stringify(random));


setTimeout(() => {
    localStorage.clear();
  }, "5000");
