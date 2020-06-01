'use strict';
// BEGINNING: Sticky Nav 

window.onscroll = function () {
    let mainNav = document.querySelector('.nav-header');
    (window.pageYOffset > 34.545) ?
    mainNav.classList.add('sticky-nav'):
    mainNav.classList.remove('sticky-nav');       
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
