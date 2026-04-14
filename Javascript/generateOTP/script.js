// let generateOTP = () => {
//     let display = document.getElementById('display')
//     // let randomNum = Math.random() * 10000
//     let otp = Math.floor(1000 + Math.random() * 9000)
//     display.innerText = otp
//     // console.log(otp);
//     // (otp >= 1000) ? display.innerText = randomNum : generateOTP();
// }
// generateOTP();



// second method
let generateOTP = () => {
    let display = document.getElementById('display');
    let randomNum = Math.random() * 10000;
    let otp = Math.floor(randomNum);
    (otp >= 1000) ? display.innerText = otp : generateOTP();
}