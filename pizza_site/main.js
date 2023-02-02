const size2 = 7.50;
const size4 = 10.50;
const size6 = 12.50;
const size8 = 15.50;

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

// function totalSum(toppingCost, basePrice){

//     for (i = 0; i < addedToppings.length; i++){
//         toppingCost+=addedToppings[i];
    
//     }
    
//     total = toppingCost + basePrice;
//     return total;
// }


function toppingsSum(){

    if (addedToppings.length > 2 ){
    
        toppingCost = .50 * addedToppings.length - 2;
    
    }
    else{
        toppingCost = 0;
    }
    return toppingCost;
}
function finalSum(){

    if (addedToppings.length > 2 ){
    
        toppingCost = .50 * addedToppings.length - 2;
    
    }
    else{
        toppingCost = 0;
    }

    if (delivery.value == "home delivery") {
        theDelivery.textContent = "Home delivery";
        deliveryCost = 5.0;
        bill = +toppingCost + +pizzaBase + +deliveryCost;

        thePrice.textContent = bill;
    }

    else{
        deliveryCost = 0;
        bill = +toppingCost + +pizzaBase + +deliveryCost;

        thePrice.textContent = bill;
    }



    bill = +toppingCost + +pizzaBase + +deliveryCost;
    console.log(bill)
    return bill;
}




const cname = document.querySelector("#cname");

const check2 = document.querySelector('#size2');
const check4 = document.querySelector('#size4');
const check6 = document.querySelector('#size6');
const check8 = document.querySelector('#size8');






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




// check2.addEventListener("change", newChecking);
// check4.addEventListener("change", newChecking);
// check6.addEventListener("change", newChecking);
// check8.addEventListener("change", newChecking);

check2.addEventListener("change", checkRadio);
check4.addEventListener("change", checkRadio);
check6.addEventListener("change", checkRadio);
check8.addEventListener("change", checkRadio);

const orderName = document.querySelector('.customer');
const theSize = document.querySelector('.pizza-size');
const theToppings = document.querySelector('.pizza-toppings');
const theDelivery = document.querySelector('.delivery-method');
const thePrice = document.querySelector('#total-price');

delivery.addEventListener('change', finalSum)



const toppings = [jalapeno, mushroom, chicken, beef, mozzarela, prawn, feta, ham, pepperoni, blueCheese];




const checks = [check2, check4, check6, check8]

// function newChecking (basePrice) {

//     for (let i = 0; i < checks.length; i++) {
//         // console.log(`checks[${i}]=${checks[i]}`);
//         if(checks[i].checked === true){

//             theSize.textContent = `You selected size ${+checks[i].size} pizza: €${checks[i].value}`;

//             basePrice = checks[i].value;


//             pizzaBase.push(checks[i].value);


            

//             // console.log(basePrice);

//             console.log(pizzaBase)

//             thePrice.textContent = +basePrice + +toppingCost;
            
//             toppingCost = .50 * addedToppings.length;
            


//         } 
//         else if(checks[i].checked === false) {

//             // basePrice = 0;
//             pizzaBase.pop(0);


//             // total = total - basePrice;
//             // thePrice.textContent = total;

//         }
//     }


    

    
//     // for (i = 0; i < toppings.length; i++) {
//     //     // console.log(`toppings[${i}]=${toppings[i].name}`);
//     //     if (toppings[i].checked == true > 4) {
//     //         console.log('4 toppings checked');
//     //     }
    
//     // }
// }

// const toppings = [jalapeno, mushroom, chicken, beef, mozzarela, prawn, feta, ham, pepperoni, blueCheese];


// for (i = 0; i < toppings.length; i++) {
//     // console.log(`toppings[${i}]=${toppings[i].name}`);
//     if (toppings[i].checked == true > 4) {
//         console.log('4 toppings checked');
//     }

// }


function jalapenoCheck(){


    switch (jalapeno.checked) {
        case true:  
            addedToppings.push(jalapeno.name);
            
            theToppings.textContent = addedToppings;

            toppingsSum();

            console.log(toppingCost)

                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(jalapeno.name);
            theToppings.textContent = addedToppings;

            toppingsSum();


            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}
function mushroomCheck(){


    switch (mushroom.checked) {
        case true:  
            addedToppings.push(mushroom.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();

                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(mushroom.name);
            theToppings.textContent = addedToppings;

            toppingsSum();


            thePrice.textContent = +basePrice + toppingCost;
            
            console.log(addedToppings, total);
            break;
           
        }
       
}
function chickenCheck(){


    switch (chicken.checked) {
        case true:  
            addedToppings.push(chicken.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(chicken.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function beefCheck(){

    
    
    
    switch (beef.checked) {
        case true:  
            addedToppings.push(beef.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(beef.name);
            theToppings.textContent = addedToppings;

            toppingsSum();

            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function prawnCheck(){


    switch (prawn.checked) {
        case true:  
            addedToppings.push(prawn.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(prawn.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function mozzarelaCheck(){


    switch (mozzarela.checked) {
        case true:  
            addedToppings.push(mozzarela.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(mozzarela.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function hamCheck(){


    switch (ham.checked) {
        case true:  
            addedToppings.push(ham.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(ham.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function pepperoniCheck(){


    switch (pepperoni.checked) {
        case true:  
            addedToppings.push(pepperoni.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(pepperoni.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function fetaCheck(){


    switch (feta.checked) {
        case true:  
            addedToppings.push(feta.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(feta.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}

function blueCheeseCheck(){


    switch (blueCheese.checked) {
        case true:  
            addedToppings.push(blueCheese.name);
            
            theToppings.textContent = addedToppings;

            // newChecking();

            toppingsSum();
                            
            thePrice.textContent = +basePrice + toppingCost;

            break;
    
    
        
        case false: 
            
            addedToppings.pop(blueCheese.name);
            theToppings.textContent = addedToppings;

            toppingsSum();



            thePrice.textContent = +basePrice + toppingCost;            
            console.log(addedToppings, total);
            break;
           
        }
       
}





function orderPizza() {

    // if (jalapeno.checked === true) {
    //     addedToppings.push(jalapeno.name);
        
    //     theToppings.textContent = addedToppings;
        
    //     console.log(addedToppings);
        
    // }
    // else if (jalapeno.checked === false) {
        
    //     addedToppings.pop(jalapeno.name);
    //     theToppings.textContent = addedToppings;
        
    //     console.log(addedToppings);
    // }
    if (mushroom.checked == true) {
        addedToppings.push(mushroom.name);
        
        theToppings.textContent = addedToppings;
        
        console.log(addedToppings);
        
    }
    else if (mushroom.checked == false) {
        
        addedToppings.pop(mushroom.name);
        theToppings.textContent = addedToppings;
        
        console.log(addedToppings);
    }
    // if (chicken.checked == true) {
    //     addedToppings.push(chicken.name);
        
    //     theToppings.textContent = addedToppings;
        
    //     console.log(addedToppings);
        
    // }
    // else if (chicken.checked == false) {
        
    //     addedToppings.pop(chicken.name);
    //     theToppings.textContent = addedToppings;
        
    //     console.log(addedToppings);
    // }
    // if (beef.checked == true) {
    //     addedToppings.push(beef.name);
        
    //     theToppings.textContent = addedToppings;
        
    //     console.log(addedToppings);
        
    // }
    // else if (beef.checked == false) {
        
    //     addedToppings.pop(beef.name);
    //     theToppings.textContent = addedToppings;
        
    //     console.log(addedToppings);
    // }
}






// cname.addEventListener("input", pizzaOrder);





function checkRadio (){

    finalSum();

        if(check2.checked == true){

            theSize.textContent = `You selected size ${check2.value} pizza`;

            basePrice = size2;

            
            pizzaBase.pop();
            
            pizzaBase.push(check2.value);
            
            console.log(pizzaBase);

            finalSum();

            total = bill;
            
            thePrice.textContent = bill;



        } 
        else if(check4.checked == true) {

            theSize.textContent = `You selected size ${check4.value} pizza`;
            basePrice = size4;

            thePrice.textContent = total;

            pizzaBase.pop();

            pizzaBase.push(check4.value);
            console.log(pizzaBase);

            finalSum();

            total = bill;
            
            thePrice.textContent = bill;




        }
        else if(check6.checked == true) {

            theSize.textContent = `You selected size ${check6.value} pizza`;
            basePrice = size6;

            pizzaBase.pop();

            pizzaBase.push(check6.value);
            console.log(pizzaBase);
            
            finalSum();

            total = bill;
            
            thePrice.textContent = total;




        }
        else if(check8.checked == true) {

            theSize.textContent = `You selected size ${check8.value} pizza`;
            basePrice = size8;

            pizzaBase.pop();

            pizzaBase.push(check8.value);
            console.log(pizzaBase)
            
            finalSum();

            total = bill;
            
            thePrice.textContent = bill;




        } 
        else {
            theSize.textContent = '';

        }

        theDelivery.textContent = `Delivery type: ${delivery.value}`;

        thePrice.textContent = bill;



}




               