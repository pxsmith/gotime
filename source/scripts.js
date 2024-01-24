// document.addEventListener('scroll', function() {
//   var element = document.querySelector('.fade-in');
//   var position = element.getBoundingClientRect();

//   // If the top of the element is in the viewport, add the 'active' class
//   if (position.top < window.innerHeight && position.bottom >= 0) {
//     element.classList.add('active');
//   }
// });

document.addEventListener('scroll', function() {
  $('.fade-in').each(function() {
    var element = $(this);
    var position = element.offset().top;

    // If the top of the element is in the viewport, add the 'active' class
    if (position < window.innerHeight + window.scrollY) {
      element.addClass('active');
    }
  });
});



// Perplexity written code

// window.addEventListener('scroll', function() {
//   if (window.pageYOffset > 100) {
//     const box = document.querySelector('.box');
//     box.style.animation = 'move 2s linear both';
//   }
// });

// const box = document.querySelector('.box');
// const observer = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting) {
//     box.style.animation = 'move 2s linear both';
//     observer.unobserve(box);
// }
// });

// observer.observe(box);