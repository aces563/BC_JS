function oddOrEven(){
    const number = Number(prompt('Enter a number ...'));
    if (number > 0 && number%2===0){
        console.log (`Number ${number} is even`);
    } else {
        console.log (`Number ${number} is odd`);

    }
}

oddOrEven()