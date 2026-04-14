let images = [
"../images/img1.jfif",
"../images/img2.jfif",
"../images/img3.jfif",
"../images/img4.jfif",
"../images/img5.jfif",
"../images/img6.jfif"
];
let currentIndex = 0;
let sliderImage = document.getElementById("sliderImage");

let nextBtn = document.getElementById("next");

let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", function(){

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

sliderImage.src = images[currentIndex];

});

prevBtn.addEventListener("click", function(){

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

sliderImage.src = images[currentIndex];

});