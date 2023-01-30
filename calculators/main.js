
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
        fahrenheit.value = Math.round(c2f * 100) / 100;
        kelvin.value = Math.round (c2k * 100) / 100;
    }

    else if (id == fahrenheit.id){
        celcius.value = Math.round(f2c * 100) / 100;
        kelvin.value = Math.round(f2k * 100) / 100;
    }

    else {
        celcius.value = Math.round(k2c * 100) / 100;
        fahrenheit.value = Math.round(k2f * 100) / 100;
    }

    
    
}
