(function checkWhichNavItemInViewPort() {
  underlineNavItem('#hero', '#intro-nav');
  underlineNavItem('#skills', '#skills-nav');
  underlineNavItem('#timeline', '#timeline-nav');
  underlineNavItem('#portfolio', '#portfolio-nav');
})();

function underlineNavItem(sectionID, navID) {
  var element = document.querySelector(sectionID);
  underlineNavItemIfInView(element, navID);
  underlineNavItemOnScroll(element, navID);
}

function underlineNavItemOnScroll(element, navID) {
  window.addEventListener('scroll', function (event) {
    underlineNavItemIfInView(element, navID);
  }, false);
}

function underlineNavItemIfInView(element, navID) {
  if (isInViewport(element)) {
    document.querySelector(navID).style.borderBottom = 'solid 2px';
  } else {
    document.querySelector(navID).style.borderBottom = "none";
  }
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