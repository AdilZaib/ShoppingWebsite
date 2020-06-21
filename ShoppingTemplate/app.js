function show() 
{
   document.querySelector(".dropdown.hide").classList.toggle("show");
}
function showNav()
{
   var x= document.querySelector(".hide-c");
   x.classList.toggle("show-c");
   var y= document.querySelector(".right-c");
  y.classList.toggle("show-r");
}

function showInput() 
{
    var z=document.querySelector(".icon input.hide").classList.toggle("showInput");
}


/* SLIDER CODE */
   

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
} 