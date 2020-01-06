'use strict';
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


