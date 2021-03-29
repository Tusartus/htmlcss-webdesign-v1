const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

// testiamonial

const slides=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider-indicator").children;

 for(let i=0; i<indicatorImages.length; i++){
   indicatorImages[i].addEventListener("click",function(){
      
        for(let j=0; j<indicatorImages.length; j++){
          indicatorImages[j].classList.remove("active");
        }
         this.classList.add("active");
         //change the slider content
         const id=this.getAttribute("data-id"); // 1 2 3 of image
       
        for(let j=0; j<slides.length; j++){
          slides[j].classList.remove("active");
        }

         slides[id].classList.add("active");

   })
 }