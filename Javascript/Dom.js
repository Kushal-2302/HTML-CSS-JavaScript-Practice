let applyColor = () => {
    let title = document.getElementById('title');
    // title.style.color = 'red';
    // title.style.background = 'yellow';
    title.style.cssText = `color : red; background : yellow`;
}

let textDesign = () => {
    let text = document.getElementsByClassName('text');
    text[0].style.cssText = `color : white ; background : orange`;
    text[1].style.color = 'blue';
    text[2].style.cssText = `color : white ; background : green`;
}


// toggle color
let box = document.querySelector('#box');
let applyRed = () => {
    box.classList.add('red');
    box.classList.remove('yellow');
}
let applyYellow = () => {
    box.classList.add('yellow');
    box.classList.remove('red');
}

// onOff button
let btn = document.getElementsByClassName('on')
let onOff = () => {
    let text = btn[0].innerText;
    if (text === 'ON') {
        btn[0].innerText = 'OFF';
        btn[0].style.background = 'red'
    } else {
        btn[0].innerText = 'ON';
        btn[0].style.background = 'green'
    }

}

// change image
let changeImage = () =>{
    let image = document.querySelector('img');
    image.src = './Image/img2.jpg'
}

let toggleImage = () => {
    let image_box = document.getElementById('image_box')
    // let bool = image_box.classList.contains('bg1');
    // if(bool){
    //     image_box.classList.remove('bg1');
    //     image_box.classList.add('bg2');
    // }else{
    //     image_box.classList.remove('bg2');
    //     image_box.classList.add('bg1');
    // }

    image_box.classList.toggle('bg1');
    image_box.classList.toggle('bg2');
}


// Digital clock

let digitalClock = () => {
    let display = document.getElementsByClassName('display');
    let dateObj = new Date();

    display[0].innerText = dateObj.toLocaleDateString();
    display[1].innerText = dateObj.toLocaleTimeString();
}