'use strict';

const galleryView = document.querySelector('.gallery-view');
const galleryNav = document.querySelector('.gallery-nav');
const linksSkat = galleryNav.getElementsByTagName('a');

Array.from(linksSkat).forEach(clickingLink);

function clickingLink(link) {
    let previouslySelected = galleryNav.querySelector('.gallery-current');
    link.addEventListener('click', function(event) {
        event.target.classList.add('gallery-current');        
        previouslySelected.classList.remove('gallery-current');       
        event.preventDefault(); 
        galleryView.src = this.href;
    });
}