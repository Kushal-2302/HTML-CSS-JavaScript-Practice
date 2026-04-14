//! statment block
// if(true){
//     var a = 100; //Global Scope
//     let b = 200; //Local scope
//     const c = 300; //local scope
// }
// console.log(a); //100
// console.log(b,c); // error : b,c is not defined

//-----------------------------------------------

//! function scope
// let func = () => {
//     // here all variables are local scope
//     var a = 100;
//     let b = 200;
//     const c = 300;
// }
// console.log(a); //error : a is not defined
// console.log(b,c); //error :b,c is not defined

//-----------------------------------------------

//! lexical scope
let a = 100;
function first(){
    let b = 200;
    function second() {
        let c = 300;
        console.log(a,b,c);
    }
    // console.log(c) //error
    // console.log(a,b)
    second();
}
first();