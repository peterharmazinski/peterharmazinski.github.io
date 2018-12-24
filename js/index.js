
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var hero = document.querySelector('#hero');
window.addEventListener('scroll', function (event) {
	if (isInViewport(hero)) {
		document.querySelector('#intro-nav').style.borderBottom = "solid 2px"
	}
}, false);

var skills = document.querySelector('#skills');
window.addEventListener('scroll', function (event) {
	if (isInViewport(skills)) {
    document.querySelector('#skills-nav').style.borderBottom = "solid 2px"	}
}, false);

var timeline = document.querySelector('#timeline');
window.addEventListener('scroll', function (event) {
	if (isInViewport(timeline)) {
    document.querySelector('#timeline-nav').style.borderBottom = "solid 2px"	}
}, false);

var portfolio = document.querySelector('#portfolio');
window.addEventListener('scroll', function (event) {
	if (isInViewport(portfolio)) {
    document.querySelector('#portfolio-nav').style.borderBottom = "solid 2px"	}
}, false);

function isInViewport (el) {

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}