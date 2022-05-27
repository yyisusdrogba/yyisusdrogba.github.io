 const headerBtn = document.querySelector("#btn-activate");
const headerMenu = document.querySelector('#menu-mobile');
const sliders = [...document.querySelectorAll('.slider-body')];
const arrowNext = document.querySelector('#after');
const arrowbefore = document.querySelector('#before');
let value;

//------Header---------//
headerBtn.addEventListener('click',() =>{
    if(headerMenu.style.display != 'block'){
       headerMenu.style.display = 'block'
    }else{
        headerMenu.style.display = 'none'
    }
})

//------Slider Raquetas Left-----------//
arrowNext.addEventListener('click',() => changePosition(1));
arrowbefore.addEventListener('click',()=> changePosition(-1));

function changePosition(change){
    const currentElement = Number(document.querySelector('.slider-body-show').dataset.id);
    
    value = currentElement;
    value += change;

    if(value === 0 || value == sliders.length+1){
        value = value === 0 ? sliders.length : 1;
    }

    sliders[currentElement-1].classList.toggle('slider-body-show')
    sliders[value-1].classList.toggle('slider-body-show')
}

//------Slider Raquetas Rigth-----------//
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
