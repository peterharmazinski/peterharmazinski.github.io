window.onscroll = function(e) { 
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector('header');

  scrollY <= this.lastScroll 
    ? header.style.visibility = 'visible'
    : header.style.visibility = 'hidden'; 

  this.lastScroll = scrollY ;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});