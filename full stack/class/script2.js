//aug 23 continuation
//medium level topics

'use strict';

///activating 'use strict'
let hasDriverLicense=false;
let passTest=true;

console.log(hasDriverLicense);
console.log(passTest);

if(passTest) hasDriverLicense=true;
if(hasDriverLicense) console.log("i can drive");

//variables declared within the script are global variables and can be accessed from anywhere in the script


//functions
//function definition
function logger(){
    console.log("logger function");
}

logger();//function call
logger();


function fruitProcessor(){
    let apples=4;//local variables
    let oranges=5;

    const juice=`juice with ${apples} apples and ${oranges} oranges`;
    console.log(juice);

}
fruitProcessor();

//passing parameters with functions
//arguments
function fruitProcessor(apples,oranges){
    console.log(`juice with ${apples} apples and ${oranges} oranges`);
}
fruitProcessor(4,5);
fruitProcessor(2,0);

let apples=10;
let oranges=51;   
fruitProcessor(apples,oranges);

apples=1;
oranges=2;
fruitProcessor(apples,oranges);


//return statement