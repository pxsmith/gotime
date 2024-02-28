// https://codepen.io/camipeludero/pen/WNjgjje

document.addEventListener("DOMContentLoaded", function(event) { 

  let menu = document.querySelector('.btn--open-nav'),
      close_button = document.querySelector('.btn--close-nav');
      nav = document.querySelector('.navigation'),

  menu.addEventListener('click', openNav);
  close_button.addEventListener('click', closeNav)

  function openNav(){
    nav.classList.toggle("mobile-nav-open");
  }

  function closeNav(){
    nav.classList.toggle("mobile-nav-open");
  }

});



