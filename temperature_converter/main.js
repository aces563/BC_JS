
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


        
    
    

