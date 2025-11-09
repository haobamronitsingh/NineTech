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
