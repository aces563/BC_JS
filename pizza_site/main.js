const pizzaform = document.querySelector("#submit");

const fname = document.querySelector("#fname");

const orderName = document.querySelector('.customer')

pizzaform.addEventListener("submit", pizzaOrder);
fname.addEventListener("input", pizzaOrder);

function pizzaOrder (e){
    e.preventDefault();
    orderName.textContent = fname.value
}