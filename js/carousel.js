var carousel = document.getElementById('carousel');
carousel.style.marginLeft = 0;

//Have to add a var margin_left to manipulate the existing img value
var margin_left = 0;

window.onload = function () {

// Buttons
  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  var marginToLeft = function () {
    margin_left -= 1224;
    // protection from over-adjustment (612 x 3)
    margin_left = margin_left % 1836;
    carousel.style.marginLeft = margin_left + "px";
  };

  var marginToRight = function () {
    margin_left -= 612;
    // protection from over-adjustment (612 x 3)
    margin_left = margin_left % 1836;
    carousel.style.marginLeft = margin_left + "px";
  };

// Create onclick events to advance the images
  next.onclick = function (event) {
    marginToRight();
  };

  previous.onclick = function (event) {
    marginToLeft();
  };

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

  //next
  next.onmouseover = function () {
    this.style.opacity = '0.75';
  };
  next.onmouseout = function () {
    this.style.opacity = '0.5';
  };
  //previous
  previous.onmouseover = function () {
    this.style.opacity = '0.75';
  };
  previous.onmouseout = function () {
    this.style.opacity = '0.5';
  };
};
