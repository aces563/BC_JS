
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
        result.textContent = `You get €${Number(price) * Number(price)} of gasoline. (Good, you can escape)`;
    }
    else if (tenLitres < 10){
        result.textContent = `You get €${Number(price) * Number(money)} of gasoline. (OOps! You have to stay here.)`;
    }

}


        
    
    

