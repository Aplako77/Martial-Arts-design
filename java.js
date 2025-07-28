
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let IntervalId = null;

initializeSlider();

function initializeSlider(){

    slides[slideIndex].classList.add("displayslide")
   IntervalId = setInterval(rightslide, 5000);
     console.log(IntervalId);   
}
function showSlide(index){

if(index >= slides.length){
    slideIndex = o;
}
else if(index < 0){
    slideIndex = slides.length - 1;
}

slides.forEach(slide => {
    slide.classList.remove("displayslide")
});
slides[slideIndex].classList.add("displayslide");
}
function leftslide(){
    clearInterval(IntervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function rightslide(){
 slideIndex++;
 showSlide(slideIndex);
}


const swiper = new Swiper('.swiper', {
  // Optional parameters
  sliderPerView:1,
  SpaceBetween:30,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});