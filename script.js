const triangle = document.querySelector('.triangle');
const header = document.querySelector('header');
const Hamburger = document.querySelector('#btnHamburger');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const hidden = document.querySelectorAll('.hidden');

Hamburger.addEventListener('click', function() {
    
    // If Header Contains The Class Open 
    if(header.classList.contains('open')) {

        // Close The Menu 
        header.classList.remove('open');

        // Prevent User From Scrolling
        body.classList.remove('noscroll');

        // Fade Animation
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });   

        hidden.forEach(function(element){
            element.classList.remove('open');
        });

        triangle.classList.remove('open');

    }
    else {
        // Open The Menu
        header.classList.add('open');

        // Fade Animation 
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          });

        // Prevent User From Scrolling
        body.classList.add('noscroll');

          triangle.classList.add('open');

          hidden.forEach(function(element){
            element.classList.add('open');
        });

    }
});

