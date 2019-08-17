$(document).ready(function() {
  var images = [
    "images/home/designii2.jpg",
    "images/home/AllanMezhibovsky_Portfolio3.jpg",
    "images/home/AllanMezhibovsky_Portfolio2.jpg",
    "images/home/circles.jpg",
  ];

  var counter = 0;

  setInterval (function() {
    if (counter > images.length) {
      counter = 0;
    }
    $("#homeSlideshow").attr("src",images[counter]);
    counter++;
  }, 3000);
});
