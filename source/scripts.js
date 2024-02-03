const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('animation--show');
    } 
    // else {
    //   entry.target.classList.remove('animation--show');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.animate--on-scroll');
hiddenElements.forEach((el) => observer.observe(el));
