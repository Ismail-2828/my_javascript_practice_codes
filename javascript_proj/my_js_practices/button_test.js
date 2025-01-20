// This function is called when the "Place Order" button is clicked
function placeOrder() {
    window.location.href = "button_test1.html";
}
const buttonHTML = document.querySelector('.button_1');
console.log(buttonHTML)
document.querySelector('.button_1').addEventListener('click', placeOrder);
