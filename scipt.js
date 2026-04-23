 var str = "Привет";
var num = 10;
var empty;


console.log(empty);        
console.log(false);        
console.log(true);         
console.log("text" * 2);   
console.log(typeof num);   
console.log(typeof str);  

var input = prompt("сума покупки ($):");
var amount = Number(input);
if (isNaN(amount) || amount <= 0);
   else {
    var discount = 0;
    if (amount < 100) {
        discount = 0;
    } else if (amount >= 100 && amount < 500) {
        discount = 0.05;
    } else if (amount >= 500 && amount < 1000) {
        discount = 0.10;
    } else {
        discount = 0.15;
    }
    var finalPrice = amount - (amount * discount);
    finalPrice = finalPrice.toFixed(2);
    console.log("Сумма:", amount + "$");
    console.log("Скидка:", discount * 100 + "%");
    console.log("Итог:", finalPrice + "$");
}