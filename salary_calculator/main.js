
function dailySalary(){
    const hours = document.getElementById('hours').value;
    const hourlyFee = document.getElementById('hourlyFee').value;
    const bonus = (50/100)*(Number(hours) * Number(hourlyFee));
    const theRest = (100/100)*(Number(hours) * Number(hourlyFee));
    
    const result = document.getElementById('salary');
    

    if (hours <= 7){
        result.innerText = `Your salary is €${Number(hours) * Number(hourlyFee)} (You did not qualify for a bonus)`;
        console.log(`Your salary is €${Number(hours) * Number(hourlyFee)}`);


    } else if (hours == 9){
        result.innerText = `Your salary including bonus is €${bonus + Number(hours) * Number(hourlyFee)}`;
        console.log(`Your salary including bonus is €${bonus + Number(hours) * Number(hourlyFee)}`);

    } else{
        result.innerText = `Your salary including bonus is €${theRest + Number(hours) * Number(hourlyFee)}`;
        console.log(`Your salary including bonus is €${theRest + Number(hours) * Number(hourlyFee)}`);

    }      

}


        
    
    

