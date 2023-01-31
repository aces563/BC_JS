//1.  A program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for (let positiveNumbers = 1; positiveNumbers < 100; positiveNumbers+=2){
    console.log(positiveNumbers);
}

//2. a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

for (let positiveNumbers = 2, reverse = 98; positiveNumbers < 100; positiveNumbers+=2, reverse-=2){
    console.log(positiveNumbers);
    console.log(reverse);
}

//3. A program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

function distanceAndTime(){
    let distance = '?';
    while (distance != 0){
    distance = Number(prompt('Enter distance in kilometers: '));
    if (distance == 0){
        console.log('Unable to calculate distance');
        break;
    }
    const time = Number(prompt('Enter time: '));

        console.log(distance/time);
    }

}
distanceAndTime()


//4. A program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let even = 0;
 for (let i = 0; i < 20; i++) {
    let input = Number(prompt('Enter a number ...'));
    if (input%2===0){ // checks if any of the numbers is an even number
        even++;
    }
 }
 console.log('You gave', even, ' even numbers');

//5. A program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let average = 0;
let count = 0;
for (let i = 0; ; i++) {
    let input = Number(prompt('Enter a number ...'));
    if (input===0){
        console.log('Loop terminated');
        break;
    } else {
        average = average + input;
        count++;
    }
 }
 console.log('The average of the numbers you gave is: ', average/count)

 //6. A program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let theAverage = 0;
let theCount = 0;
for (let i = 0; i < 25 ; i++) {
    let input = Number(prompt('Enter a number ...'));
   
    theAverage = theAverage + input;
    theCount++;
    
 }
 console.log('The average of the numbers you gave is: ', theAverage/theCount)

 //7. A program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

 let newAverage = 0;
 let input;
 let counter = 0;
 for (let i = 0; ; i++) {
     input = Number(prompt('Enter a number ...'));
     newAverage = newAverage + input;
     counter++;

     let checking = prompt('Do you want to continue giving numbers?(y/n)');
     if (checking == 'n'){
        break;
     }
     
  }
  console.log(newAverage/counter)

  //8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.
function smallNumber(){

    let limit = Number(prompt('How many numbers would you like to add? '));
    let smallestNumber;
    let input = 0;
    let counter = 1;

    if (limit >= 2){
        input = Number(prompt('Enter a number ...'));
        counter++;
    } else if (limit < 2){
        console.log('You need to add at least two numbers.');
    }
    
    smallestNumber = input;
    while (counter <= limit) {
  
        input = Number(prompt('Enter a number ...'));
        counter++;
        
        if(input < smallestNumber){
          smallestNumber = input;
  
        }
        
     }
     if (smallestNumber > 1){
         console.log('The smallest number you gave was: ', smallestNumber)

     }
}
smallNumber()

