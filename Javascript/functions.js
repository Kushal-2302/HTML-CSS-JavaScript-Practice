///// without parameters and return value
function fun() {
    console.log("hello");
}
// fun();
// fun();
// console.log(typeof fun); //function



///// with parameters
function add(x, y) {
    let res = x + y;
    console.log(`${x} + ${y} = ${res}`);
}
// add(100,200); //100 + 200 = 300


/////even program
function even(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) console.log(i)
    }
}
// even(20,30); //20 22 24 26 28 30


/////
function myname() {
    let user = 'kushal';
    console.log(user);
}
// myname(); //kushal
// console.log(user); //error - user is not defined


///// with return statment
function myname() {
    let user = 'kushal';
    return user;
}
let d = myname();
// console.log(d); // kushal


///// sum of 2 numbers
function sum(a, b) {
    let res = a + b;
    return `${a} + ${b} = ${res}`;
    // return res;
}
// console.log(res); //not possible
//? collecting return statment in a variable while invoking 
let y = sum(100, 200);
// console.log(y); //100 + 200 = 300
// console.log(sum(20,30)); //20 + 30 = 50
// console.log(sum(30,40)); //30 + 40 = 70


///// check even or odd number with parameters and return
function evenOdd(num) {
    return (num % 2 == 0 ? `${num} is even` : `${num} is odd`);
}
// console.log(evenOdd(15)); //15 is odd
// console.log(evenOdd(10)); //10 is even


/////! change the default value of the parameters
function num(a = 0) {
    console.log(a);
}
// num(); //0
// num(120); //120

//
function demo(a, b, c = 420) {
    b = 'is';
    console.log(a, b, c);
}
// demo('ranga'); //ranga is 420


// date - 06/03/2026
/////---------- Anonymous function
// let fun1 = function(){
//     console.log("hello");
// }
// fun1();

////! Anonymous function
let printname = (fnm, dob) => {
    console.log(`Hello ${fnm}`);

    let age = 2026 - dob;
    return (`${fnm} age is ${age}`);
}
// let p1 = printname("kushal", 2002);
// console.log(p1);

// console.log(printname("kumar",2001));


// Even - odd using ananymous function with parameter and return stmt
let evenOdds = (num) => {
    if (num % 2 == 0) {
        return ` ${num} is even`
    } else {
        return ` ${num} is odd`;
    }
}
// console.log(evenOdds(15));
// console.log(evenOdds(10));

// ! - --------
// let checkEvenOdd = function(num) {
//     if (typeof num === 'number') {
//         if (num % 2 == 0) {
//             return ` ${num} is even`;
//         } else {
//             return ` ${num} is odd`;
//         }
//     } else {
//         return `${num} is not a number`;
//     }
// }
// console.log(checkEvenOdd(56));


//!------------
let checkEvenOdd1 = function(num) {
    let res='';
    if (typeof num === 'number') {
        if (num % 2 == 0) {
            res = ` ${num} is even`;
        } else {
            res = ` ${num} is odd`;
        }
    } else {
        res = `${num} is not a number`;
    }
    return res;
}
// console.log(checkEvenOdd1(56));
// console.log(checkEvenOdd1('a'));


/////-----------------Arrow function
let arrow =()=>{
    console.log('hi');
}
arrow();
console.log(typeof arrow);

//--even odd program
let evenOddNum = (num) =>{
    return num%2 == 0 ? `${num} is Even` : `${num} is Odd`
}
console.log(evenOddNum(15));
console.log(evenOddNum(10));