function randomNumbers(){
    const number1 = Number(prompt('Enter first number: '));
    const number2 = Number(prompt('Enter second number: '));
    const number3 = Number(prompt('Enter third number: '));
    const addUp = number1+number2+number3
    const multiply = number1*number2*number3

    if (number1 >= 0  || number2 >=0  || number3 >=0 ){
        console.log(addUp);
        console.log(multiply);

    } else if (number1 < 0 && number2 < 0 && number3 < 0 ){
        console.log('only negatives')
    }


}
randomNumbers()