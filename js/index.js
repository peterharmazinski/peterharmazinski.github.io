
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

underlineNavItemOnScroll("#hero", "#intro-nav");
underlineNavItemOnScroll("#skills", "#skills-nav");
underlineNavItemOnScroll("#timeline", "#timeline-nav");
underlineNavItemOnScroll("#portfolio", "#portfolio-nav");

function underlineNavItemOnScroll(sectionID, navID) {
  var element = document.querySelector(sectionID);
  window.addEventListener('scroll', function (event) {
    if (isInViewport(element)) {
      document.querySelector(navID).style.borderBottom = "solid 2px"
    } else {
      document.querySelector(navID).style.borderBottom = "none";
    }
  }, false);
}

function isInViewport(element) {
  // source: https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var width = element.offsetWidth;
  var height = element.offsetHeight;

  while (element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
    left += element.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}