const hamMenu = document.querySelector('.hamMenu');
const offScreen = document.querySelector('.offScreen');

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})