// const size2 = 7.50;
// const size4 = 10.50;
// const size6 = 12.50;
// const size8 = 15.50;

let toppingCost = 0;

let basePrice = 0;

let total = 0;

let reversed;

let deliveryCost = 0;

let bill = 0;

const delivery = document.querySelector('#delivery');

const addedToppings = [];

const pizzaBase = [];

let kawon = addedToppings.length;


function finalSum(){

    if (addedToppings.length > 4 ){
    
        toppingCost = .50 * addedToppings.length - 2;
    
    }
    else{
        toppingCost = 0;
    }

    if (delivery.value == "home delivery" && +toppingCost + +pizzaBase !== 0) {
        theDelivery.textContent = "Home delivery: €5";
        deliveryCost = 5.0;
        bill = +toppingCost + +pizzaBase + +deliveryCost;

        thePrice.textContent = bill.toFixed(2);
    }

    else{
        deliveryCost = 0;
        theDelivery.textContent = "Delivery cost: Not applicable";
        bill = +toppingCost + +pizzaBase + +deliveryCost;

        thePrice.textContent = bill.toFixed(2);
    }

    bill = +toppingCost + +pizzaBase + +deliveryCost;
    console.log(bill.toFixed(2))
    // return bill.toFixed(2);
    return thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

}

const cname = document.querySelector("#cname");

const check2 = document.querySelector('#size2');
const check4 = document.querySelector('#size4');
const check6 = document.querySelector('#size6');
const check8 = document.querySelector('#size8');

check2.addEventListener("change", pizzaSize);
check4.addEventListener("change", pizzaSize);
check6.addEventListener("change", pizzaSize);
check8.addEventListener("change", pizzaSize);

const jalapeno = document.querySelector('#jalapeno');
const mushroom = document.querySelector('#mushroom');
const chicken = document.querySelector('#chicken');
const blueCheese = document.querySelector('#blue-cheese');
const beef = document.querySelector('#beef');
const mozzarela = document.querySelector('#mozzarela');
const feta = document.querySelector('#feta');
const ham = document.querySelector('#ham');
const pepperoni = document.querySelector('#pepperoni');
const prawn = document.querySelector('#prawn');

jalapeno.addEventListener('change', toppingsChecker);
mushroom.addEventListener('change', toppingsChecker);
chicken.addEventListener('change', toppingsChecker);
blueCheese.addEventListener('change', toppingsChecker);
beef.addEventListener('change', toppingsChecker);
mozzarela.addEventListener('change', toppingsChecker);
feta.addEventListener('change', toppingsChecker);
ham.addEventListener('change', toppingsChecker);
pepperoni.addEventListener('change', toppingsChecker);
prawn.addEventListener('change', toppingsChecker);

const orderName = document.querySelector('.customer');
const theSize = document.querySelector('.pizza-size');
const theToppings = document.querySelector('.pizza-toppings');
const theDelivery = document.querySelector('.delivery-method');
const thePrice = document.querySelector('#total-price');

delivery.addEventListener('change', finalSum);

cname.addEventListener("input", customerName);

// const customerName = () => {
//     orderName.value = cname.value;
// }

function customerName (){
    orderName.textContent = `Name: ${cname.value}`;
}

const toppings = [jalapeno, mushroom, chicken, beef, mozzarela, prawn, feta, ham, pepperoni, blueCheese];

const checks = [check2, check4, check6, check8]

function pizzaSize () {

    for (const size of checks) {

        if(size.checked === true){

            theSize.textContent = `Size ${+size.size} pizza: €${size.value}`;

            pizzaBase.pop();


            pizzaBase.push(size.value);

            console.log(pizzaBase)

            finalSum();

           
        } 
    }

}

function toppingsChecker(){

    switch (this.checked) {
        case true:  
        
        addedToppings.push(this.name);
        finalSum();
        
        if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }
            
            finalSum();

            break;
           
        case false: 
            
            addedToppings.pop(this.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }

            finalSum();

            break;
           
        }
       
}




               