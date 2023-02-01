const size2 = 7.50;
const size4 = 10.50;
const size6 = 12.50;
const size8 = 15.50;

let toppingCost = 0;

let total = 0;




const cname = document.querySelector("#cname");

const check2 = document.querySelector('#size2');
const check4 = document.querySelector('#size4');
const check6 = document.querySelector('#size6');
const check8 = document.querySelector('#size8');

const delivery = document.querySelector('#delivery')

const toppings = document.getElementsByClassName('topping-checkboxes');




for (let i = 0; i < toppings.length; i++) {
    toppings[i].addEventListener('change', function(){
        if (toppings[i].checked == true){
            console.log(toppings[i].name);
   
            theToppings.textContent = `${theToppings.textContent} ${toppings[i].name}`;


           let kawon = theToppings.textContent.split(' ').length;

                toppingCost = toppingCost + .50;
                console.log(toppingCost)
                console.log(kawon-1)
            

        }

       

    });

}











const orderName = document.querySelector('.customer');
const theSize = document.querySelector('.pizza-size');
const theToppings = document.querySelector('.pizza-toppings');
const theDelivery = document.querySelector('.delivery-method');
const thePrice = document.querySelector('.total-price');


// cname.addEventListener("input", pizzaOrder);
delivery.addEventListener('change', checkRadio)

check2.addEventListener("change", checkRadio)
check4.addEventListener("change", checkRadio)
check6.addEventListener("change", checkRadio)
check8.addEventListener("change", checkRadio)



function checkRadio (){
 
   
        if(check2.checked == true){

            theSize.textContent = `You selected size ${check2.value} pizza`;

            total = total + size2;


        }
        else if(check4.checked == true) {

            console.log(check4.value);
            theSize.textContent = `You selected size ${check4.value} pizza`;
        }
        else if(check6.checked == true) {

            console.log(check6.value);
            theSize.textContent = `You selected size ${check6.value} pizza`;
        }
        else if(check8.checked == true) {

            console.log(check8.value);
            theSize.textContent = `You selected size ${check8.value} pizza`;
        } else {
            theSize.textContent = '';

        }

        theDelivery.textContent = `Delivery type: ${delivery.value}`;

        thePrice.textContent = total;


        



}
