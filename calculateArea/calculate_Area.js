let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let amount1;
let amount2;
let amount3;

function calculateGrocery(){
 amount1 = parseFloat(document.getElementById('amount-1').value); 
 amount2 = parseFloat(document.getElementById('amount-2').value);
 amount3 = parseFloat(document.getElementById('amount-3').value);

 let totalAmount = amount1 + amount2 + amount3; 
 document.getElementById('groceryTotal').innerText = `The Total Amount is : ${totalAmount}`;
}