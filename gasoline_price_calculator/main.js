
function dailySalary(){
   
    const price  = document.querySelector('#price').value;
    const money = document.querySelector('#money').value;
    
    const result = document.querySelector('#result');

    const tenLitres =  Number(money) / Number(price)

    console.log(price)
    console.log(money)


    if (tenLitres >= 10){
        result.textContent = `You get ${Number(money) / Number(price)} litres of gasoline. (Good, you can escape)`;
    }
    else if (tenLitres < 10){
        result.textContent = `You get ${Number(money) / Number(price)} litres of gasoline. (OOps! You have to stay here.)`;
    }

}


        
    
    

