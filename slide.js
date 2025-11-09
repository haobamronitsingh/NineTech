




// for carosel, laptop 

const carosels = document.querySelectorAll(".carosels img");
let caroselIndex = 0;
let interval = 0;

initialization();

function initialization(){
    if(carosels.length > 0){
        carosels[caroselIndex].classList.add("display")
        interval = setInterval(next, 5000);
    }
}

function showCarosel(index){
    
    if(index >= carosels.length){
        caroselIndex = 0;
    }else if(index < 0 ){
        caroselIndex =carosels.length - 1;
    }
    
    carosels.forEach(carosel =>{
        carosel.classList.remove("display");   
    });
    carosels[caroselIndex].classList.add("display")
}   

function next(){
    caroselIndex++;
    showCarosel(caroselIndex); 
}




// for carosel phone
const slides = document.querySelectorAll(".slides img ");
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000)
    }
    
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slides =>{
        slides.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide")
}
function prevSlide(){
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}




