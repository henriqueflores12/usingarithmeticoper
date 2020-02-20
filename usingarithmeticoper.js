var subtotal = (13 + 1) * 5; //subtotal  is 70
var shipping = 0.5 * (13 + 1); //shipping is 7

var total = subtotal + shipping; //total is 77

var elSub = document.getElementById("Subtotal"); //the remaining six lines of code write the results to the screen
elSub.textContent = "$" + subtotal;

var elShip = document.getElementById("Shipping");
elShip.textContent = "$" + shipping;

var elTotal = document.getElementById("total");
elTotal.textContent = "$" + total;
console.log(subtotal);
console.log(shipping);
console.log(total);
