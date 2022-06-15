var min=1000000; 
var max=1;  
var random = Math.floor(Math.random() * (max - min)) + min; 
const order = document.getElementById("orderId");
order.innerHTML = "<br>" + random;
