
function calculateGasoline(){
   
    const price  = document.querySelector('#price').value;
    const money = document.querySelector('#money').value;
    
    const result = document.querySelector('#result');

    const tenLitres =  Number(money) / Number(price);

    const answer = Math.floor( Number(money) / Number(price));

    console.log(price);
    console.log(money);



    if (tenLitres >= 10){
        result.textContent = `You get ${answer} litres of gasoline. (Good, you can escape)`;
    }
    else {
        result.textContent = `You get ${answer} litres of gasoline. (OOps! You have to stay here.)`;
    }

}

function temperatureConverter(id){
    const celcius  = document.querySelector('#celcius');
    const fahrenheit = document.querySelector('#fahrenheit');
    const kelvin = document.querySelector('#kelvin');


    const c2f = +celcius.value * 1.8 + 32;
    const c2k = +celcius.value + 273.15;

    const k2c = +kelvin.value - 273.15;
    const k2f = 9 / 5 * (+kelvin.value - 273.15) + 32;

    const f2c = 5 / 9 * (+fahrenheit.value - 32);
    const f2k = (+fahrenheit.value - 32) * 5 / 9 + 273.15;

    if (id == celcius.id){
        fahrenheit.value = c2f;
        kelvin.value = c2k;
    }

    else if (id == fahrenheit.id){
        celcius.value = f2c;
        kelvin.value = f2k;
    }

    else {
        celcius.value = k2c;
        fahrenheit.value = k2f;
    }

    
    
}
