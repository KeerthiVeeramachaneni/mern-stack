// to comment-ctrl+k+c
// to remove comments-ctrl+k+u

// console.log(754);
// console.log(true);
// console.log("Welcome to JS");

// console.warn("warning msg");
// console.error("error msg");

//identifiers
/**
 * 1. start with either a - z, A - Z, _, $
 * 2. from the second character you can also use 0 - 9, a - z, A - Z, _, $
 * 3. no spaces are allowed
 * 4. except _, $, no other symbols are allowed
 * 5. can use a combination of lowercase & uppercase 
 * 
 * eg., age, num1, first_name, my_full_name, $name, _name, name, Name, fullName, myFullName
 * 
 */

// Keywords:
/**
 * async, try, assert, let, var, const etc., 
 */

// Values and Variables
// console.log("Jonas");
// console.log(23);

/**
 * 1. var
 * 2. let
 * 3. const
 */


// // using keyword 'var' declaring the variable
// var myName;
// console.log(myName);
// console.log("myName is : " + myName);

// var fullName = "Jonas";
// console.log(fullName);
// console.log("Full Name is : " + fullName);

// var age = 25;
// console.log(age);
// console.log("My Age is : " + age);

// var fullName = "Jonas Schedtmann";
// console.log(fullName);
// console.log("Full Name is : " + fullName);


// var num1 = 57.654;
// console.log(num1);
// console.log("The Num1 is : " + num1);

// var activeStatus = true;
// console.log(activeStatus);
// console.log("The ActiveStatus is : " + activeStatus);
// console.log(`The ActiveStatus is : ${activeStatus}`);


// // using keyword 'let' declaring the variable
// let myName;
// console.log(myName);
// console.log("myName is : " + myName);

// let fullName = "Jonas";
// console.log(fullName);
// console.log("Full Name is : " + fullName);

// let age = 25;
// console.log(age);
// console.log("My Age is : " + age);

// fullName = "Jonas Schedtmann";
// console.log(fullName);
// console.log("Full Name is : " + fullName);


// let num1 = 57.654;
// console.log(num1);
// console.log("The Num1 is : " + num1);

// let activeStatus = true;
// console.log(activeStatus);
// console.log("The ActiveStatus is : " + activeStatus);
// console.log(`The ActiveStatus is : ${activeStatus}`);


// using keyword 'const' declaring the variable
// const myName = "";
// console.log(myName);
// console.log("myName is : " + myName);

// const fullName = "Jonas";
// console.log(fullName);
// console.log("Full Name is : " + fullName);

// const age = 25;
// console.log(age);
// console.log("My Age is : " + age);

// fullName = "Jonas Schedtmann";
// console.log(fullName);
// console.log("Full Name is : " + fullName);


// const num1 = 57.654;
// console.log(num1);
// console.log("The Num1 is : " + num1);

// const activeStatus = true;
// console.log(activeStatus);
// console.log("The ActiveStatus is : " + activeStatus);
// console.log(`The ActiveStatus is : ${activeStatus}`);

//aug-20 class

//operators
//Math operators:+,-,*,/,%
// const now=2037;
// console.log(`the value of now:${now}`);
// console.log(`datatype of now :${typeof now}`);

// const ageJonas=now-1991;
// const ageSarah=now-2018;
// console.log(`the age of jonas:${ageJonas},the age of sarah:${ageSarah}`);

// console.log(ageJonas*2,ageJonas/10,2**3);

// const firstName="Jonas";
// const lastName="Schmedtmann";

// console.log(firstName+" "+lastName);

//Assignment operator
//=,+=,-=,*=,/=
// let z=10+5;
// console.log(z);
// x+=10;//25
// x*=4;//100

//increment and decrement
x++;//x=x+1//x=100+1//101
++x;//x=1+x//x=1+101//102

x--;//x=x-1//x=102-1//101
--x;//x=1-x//x=1-101//-100

//comparision operator
//==,!=,===,!==,>,<,>=,<=
//const now=2037;

//const ageJonas=now-1991;
//const ageSarah=now-2018;
// console.log(ageJonas>ageSarah);
// console.log(ageSarah>=18);

// const isFullAge=ageSarah>=18;
// console.log(now-1991>now-2018);

// const x=5;
// const y="5";
// const z=5.0;

// console.log(x==y);//checks only value
// console.log(x===y);//checks datatypes also


// //operator precedence
// const now=2037;

// const ageJonas=now-1991;
// const ageSarah=now-2018;

// console.log(now-1991>now-2018);

// let x,y;
// x=y=25-10-5;//10
// console.log(x,y);

//const averageAge=ageJonas+ageSarah/2;//place brackets for crct caluclation
// const averageAge=(ageJonas+ageSarah)/2;
// console.log(averageAge);

//coding exercise
//caluclate bmi
//formula=mass/height**2=> mass/(height*height)
//mass-kg heigth-meters

// const massMark=95;
// const massJohn=85;
// const heightMark=1.88;
// const heightJohn=1.76;

//const BMIMark=massMark/heightMark**2;
//const BMIJohn=massJohn/heightJohn**2;

// const BMIMark=massMark/(heightMark*heightMark);
// const BMIJohn=massJohn/(heightJohn*heightJohn);
// console.log(BMIJohn,BMIMark);

//aug-20 class end

//aug 21
//string and template literals
// const firstName="Jonas";
// const job="teacher";
// const birthYear=1991;
// const year=2037;

// const jonas="I\'m "+firstName+",a"+(year-birthYear)+"years old,working as a"+job;
// console.log(jonas);

//instead of these many ""
// const jonasNew=`I'm ${firstName}, a ${year-birthYear} years old,working as a${job}`;
// console.log(jonasNew);

// console.log(`just a regular string`);

// //multi line statement in output
// console.log(`String with\n
//     multiple\n 
//     lines
//     `);



//decision making statment
//if statement
// const age=15;
// if(age>=18){
//     console.log("you are an adult");
// }else{
//     console.log("you are a minor");
// }

// const massMark=78;
// const massJohn=92;
// const heightMark=1.69;
// const heightJohn=1.95;
// const BMIMark=massMark/heightMark**2;
// const BMIJohn=massJohn/heightJohn**2;

// if(BMIMark>BMIJohn){
//     console.log(`${BMIMark} is higher than ${BMIJohn}`);
// }
// else{
//     console.assertlog(`${BMIJohn} is higher than ${BMIMark}`);
// }

//type conversion and coercion
//type conversion
// const inputYear="1991";
// console.log(`inputYear:${inputYear},datatype of inputYear:${typeof inputYear}`);
// console.log(Number(inputYear),inputYear);
// // console.log(inputYear+18);
// console.log(Number(inputYear)+18);
// console.log(Number("Jonas"));

//type coercion
// console.log("3"+"3");
// console.log('I am'+23+'years old');
// console.log('23'-'10'+'3');
// console.log(`23`/2);

//let n=

//truthy or falsy
//0,None Null,undefined,' ',false-false
// console.log(Boolean(0));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean("Jonas"));//true
// console.log(Boolean({}));//true
// console.log(Boolean(""));//false
// console.log(Boolean([]));//true

// //aug-22
// const money=0;
// if(money){
//     console.log("I have money!");
// }
// else{
//     console.log("I don't have money!");
// }

// let height=0;
// if(height){
//     console.log("I have height!");
//     }else{
//         console.log("I don't have height!");
//         }

//equality operators
//==,!=,===,!==
// const age="18";
// if(age==18) console.log("You can vote");
// if(age === 18) console.log("You can vote");

// const favourite=Number(prompt("enter your favourite number"));
// console.log(typeof favourite);

// //nested if else
// if(favourite === 23){ 
//     console.log("cool,23 is a cool number");
//     }else if(favourite === 7){
//         console.log("7 is also cool");
//         }else if(favourite===9){
//             console.log("9 is cool");
//             }else{
//                 console.log("your number is not cool");
//                 }


//logical operator:&&,||,!
// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(!(hasDriverLicense && hasGoodVision));
// console.log(hasDriverLicense || hasGoodVision);
// console.log(hasDriverLicense && hasGoodVision);

// if(hasDriverLicense && hasGoodVision)
// {
//     console.log("You are good to drive");
// }
// else
// {
//     console.log("You are not good to drive");
// }

// const isTired=false;
// console.log(hasDriverLicense && hasGoodVision && isTired);
// if(hasDriverLicense && hasGoodVision && isTired)
//     {
//         console.log("You are good to drive");
//     }
//     else
//     {
//         console.log("You are not good to drive");
//     }

//coding exercise
// const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(88+91+94)/3;
// console.log(scoreDolphins,scoreKoalas);

// if(scoreDolphins>scoreKoalas)
// {
//     console.log("Dolphins win the game");
// }
// else if(scoreDolphins<scoreKoalas)
// {
//     console.log("Koalas win the game");
// }
// else
// {
//     console.log("It's a tie");
// }


// //the switch statement
// const day="friday";
// switch(day){
//     case "monday":
//         console.log("Today is Monday");
//         break;
//     case "tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "friday":
//         console.log("Today is Friday");
//         break;
//     default:
//         console.log("not valid day");
//         }

//aug-23        
//the conditional or ternary operator


