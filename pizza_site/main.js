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


// function toppingsSum(){

//     if (addedToppings.length > 2 ){
    
//         toppingCost = .50 * addedToppings.length - 2;
    
//     }
//     else{
//         toppingCost = 0;
//     }
//     return toppingCost;
// }

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
    return bill.toFixed(2);
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


jalapeno.addEventListener('change', jalapenoCheck);
mushroom.addEventListener('change', mushroomCheck);
chicken.addEventListener('change', chickenCheck);
blueCheese.addEventListener('change', blueCheeseCheck);
beef.addEventListener('change', beefCheck);
mozzarela.addEventListener('change', mozzarelaCheck);
feta.addEventListener('change', fetaCheck);
ham.addEventListener('change', hamCheck);
pepperoni.addEventListener('change', pepperoniCheck);
prawn.addEventListener('change', prawnCheck);

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

            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            console.log(bill.toFixed(2))
            console.log('size value is', size.value)
           
        } 
    }

}

function jalapenoCheck(){

    switch (jalapeno.checked) {
        case true:  
        
        addedToppings.push(jalapeno.name);
        finalSum();
        
        if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }
            

            // finalSum();

            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        case false: 
            
            addedToppings.pop(jalapeno.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }

            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}
function mushroomCheck(){

    switch (mushroom.checked) {
        case true:  
            addedToppings.push(mushroom.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
         
        case false: 
            
            addedToppings.pop(mushroom.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}
function chickenCheck(){

    switch (chicken.checked) {
        case true:  
            addedToppings.push(chicken.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
          
        case false: 
            
            addedToppings.pop(chicken.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function beefCheck(){
 
    switch (beef.checked) {
        case true:  
            addedToppings.push(beef.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
         
        case false: 
            
            addedToppings.pop(beef.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }

            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function prawnCheck(){

    switch (prawn.checked) {
        case true:  
            addedToppings.push(prawn.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
           
        case false: 
            
            addedToppings.pop(prawn.name);
            theToppings.textContent = addedToppings;

            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }

            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function mozzarelaCheck(){

    switch (mozzarela.checked) {
        case true:  
            addedToppings.push(mozzarela.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
         
        case false: 
            
            addedToppings.pop(mozzarela.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function hamCheck(){

    switch (ham.checked) {
        case true:  
            addedToppings.push(ham.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
       
        case false: 
            
            addedToppings.pop(ham.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function pepperoniCheck(){

    switch (pepperoni.checked) {
        case true:  
            addedToppings.push(pepperoni.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
         
        case false: 
            
            addedToppings.pop(pepperoni.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function fetaCheck(){

    switch (feta.checked) {
        case true:  
            addedToppings.push(feta.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
         
        case false: 
            
            addedToppings.pop(feta.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}

function blueCheeseCheck(){

    switch (blueCheese.checked) {
        case true:  
            addedToppings.push(blueCheese.name);
            
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;

            break;
          
        case false: 
            
            addedToppings.pop(blueCheese.name);
            finalSum();
        
            if(addedToppings.length > 4){
                theToppings.textContent = `${addedToppings.length} toppings:
                €${toppingCost.toFixed(2)}`;

            } else{
                theToppings.textContent = `${addedToppings.length} toppings: free`;

            }


            total = bill;
            
            thePrice.textContent = `The total sum of your order is: €${bill.toFixed(2)}`;
            break;
           
        }
       
}




               