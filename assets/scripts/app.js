'use strict';
// BEGINNING: Sticky Nav 
let mainNav = document.querySelector('.nav-header');

window.onscroll = function () {
    if (window.pageYOffset > 34.545) {
        mainNav.classList.add('sticky-nav');
        // mainNav.style.top = 0;
    } 
    else {
        mainNav.classList.remove('sticky-nav');
    }       
};
// END: Sticky nav

// BEGINNING: Nav Toggle Button
let responsiveNav, nav;
responsiveNav = document.querySelector('.nav-toggle-btn');
nav = document.querySelector('.nav-modifier');
let navIsOpen = false;

responsiveNav.addEventListener('click', _ => {
    if(!navIsOpen  ) {
        responsiveNav.classList.add('open'); //helps to style the toggle lines
        nav.style.display = 'block'; //reviews the nav
        navIsOpen = true;
    } else {
        responsiveNav.classList.remove('open'); //toggle button returns to normal
        nav.style.display = 'none';
        navIsOpen = false;
    }
});

// END: Nav Toggle Button
