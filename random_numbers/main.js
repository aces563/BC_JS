function randomNumbers(){
    const number1 = Number(prompt('Enter first number: '));
    const number2 = Number(prompt('Enter second number: '));
    const number3 = Number(prompt('Enter third number: '));

    if (number1 >= 0  || number2 >=0  || number3 >=0 ){
        console.log(number1+number2+number3);
        console.log(number1*number2*number3);

    } else if (number1 < 0 && number2 < 0 && number3 < 0 ){
        console.log('only negatives')
    }


}
randomNumbers()