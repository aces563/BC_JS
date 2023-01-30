
function dailySalary(){
    // const hours = document.getElementById('hours').value;
    // const hourlyFee = document.getElementById('hourlyFee').value;
    // const bonus = (50/100)*(Number(hours) * Number(hourlyFee));
    // const theRest = (100/100)*(Number(hours) * Number(hourlyFee));

    const price  = document.querySelector('#price').value;
    const money = document.querySelector('#money').value;
    
    const result = document.querySelector('#result');

    const tenLitres =  Number(money) / Number(price)

    console.log(price)
    console.log(money)


    if (tenLitres >= 10){
        result.textContent = `Good, you can escape, €${Number(price) * Number(price)} (You got over 10 litres)`;
    }
    else if (tenLitres < 10){
        result.textContent = `You have to stay here because you've got less than €${Number(price) * Number(money)} litres`;
    }

}


        
    
    

