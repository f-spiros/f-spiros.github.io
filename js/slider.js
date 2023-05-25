// js/slider.js

var slider_img = document.querySelector('.slider-img1');
var images1 = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg'];
var i=0; 

function prev1(){
    if(i <= 0 ) i = images1.length;
    i--;
    return setImg();
}

function next1(){
    if(i >= images1.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images1/' + images1[i]);
}


var slider_img2 = document.querySelector('.slider-img2');
var images2 = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
var i=0; 

function prev2(){
    if(i <= 0 ) i = images2.length;
    i--;
    return setImg2();
}

function next2(){
    if(i >= images2.length -1) i = -1;
    i++;
    return setImg2();
}

function setImg2(){
    return slider_img2.setAttribute('src', 'images2/' + images2[i]);
}


var slider_img3 = document.querySelector('.slider-img3');
var images3 = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
var i=0; 

function prev3(){
    if(i <= 0 ) i = images3.length;
    i--;
    return setImg3();
}

function next3(){
    if(i >= images3.length -1) i = -1;
    i++;
    return setImg3();
}

function setImg3(){
    return slider_img3.setAttribute('src', 'images3/' + images3[i]);
}


var slider_img5 = document.querySelector('.slider-img5');
var images5 = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'];
var i=0; 

function prev5(){
    if(i <= 0 ) i = images5.length;
    i--;
    return setImg5();
}

function next5(){
    if(i >= images5.length -1) i = -1;
    i++;
    return setImg5();
}

function setImg5(){
    return slider_img5.setAttribute('src', 'images5/' + images5[i]);
}


var slider_img6 = document.querySelector('.slider-img6');
var images6 = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
var i=0; 

function prev6(){
    if(i <= 0 ) i = images6.length;
    i--;
    return setImg6();
}

function next6(){
    if(i >= images6.length -1) i = -1;
    i++;
    return setImg6();
}

function setImg6(){
    return slider_img6.setAttribute('src', 'images6/' + images6[i]);
}


var slider_img7 = document.querySelector('.slider-img7');
var images7 = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 
                'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 
                'img12.jpg', 'img13.jpg','img14.jpg', 'img15.jpg', 'img16.jpg'];
var i=0; 

function prev7(){
    if(i <= 0 ) i = images7.length;
    i--;
    return setImg7();
}

function next7(){
    if(i >= images7.length -1) i = -1;
    i++;
    return setImg7();
}

function setImg7(){
    return slider_img7.setAttribute('src', 'images7/' + images7[i]);
}


var slider_img8 = document.querySelector('.slider-img8');
var images8 = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];
var i=0; 

function prev8(){
    if(i <= 0 ) i = images8.length;
    i--;
    return setImg8();
}

function next8(){
    if(i >= images8.length -1) i = -1;
    i++;
    return setImg8();
}

function setImg8(){
    return slider_img8.setAttribute('src', 'images8/' + images8[i]);
}



/*const buttons = document.querySelector("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click" , () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closet("[data-carousel]")
    .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset 
    if (newIndex < 0) newIndex = slides.children.length -1 
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})*/


/*
const slides = document.querySelectorAll(".slide")
var counter = 0;
//console.log(slides)
slides.forEach(
    (slide, index)=> {
        slide.style.left = '${index * 100}%'
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = 'translateX(-${counter * 100}%)'
        }
    )
}*/