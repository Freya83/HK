function slideshowStart() {   
    slideshow = document.getElementById('slides').children;
    totalSlides = slideshow.length;
    for (var i=0; i < slideshow.length; i++) {
        slideshow[i].id = 'img-'+(i+1);       
        if (i > 0) {
            slideshow[i].style.display = "none";
        }
    }
    slideStep = 0;
    animateTimeout  = 0;
    activeSlide = 1;
    showSlide(2);
}
function showSlide(slideActive) {
    clearTimeout(animateTimeout);
    nextSlideIndex = slideActive;
    currentSlide = document.getElementById('img-' + activeSlide);
    nextSlide = document.getElementById('img-' + nextSlideIndex);
    slideStep = 0;
    animateTimeout = setTimeout("slideAnimate()", 3000);
}
 
function slideAnimate() {
    nextSlide.style.display = "block";
    var opacity = slideStep / 40;
    currentSlide.style.opacity = "" + (1 - opacity);
    nextSlide.style.opacity = "" + opacity;

    if (++slideStep <= 40) {
        animateTimeout = setTimeout("slideAnimate()", 40);
    }
    else {
        currentSlide.style.display = "none";
        slideStep = 0;
        activeSlide = nextSlideIndex;
        showSlide((activeSlide >= totalSlides) ? 1 : activeSlide + 1);
    }
}
window.onload = function(){
  slideshowStart();
}