$(document).ready(function() {
  var images = [
    "images/yorkprize/sketch1.jpg",
    "images/yorkprize/sketch2.jpg",
    "images/yorkprize/sketch3.jpg",
    "images/yorkprize/model1.jpg",
    "images/yorkprize/Exploded-Axon.jpg",
    "images/yorkprize/model2.jpg",
    "images/yorkprize/model3.jpg",
  ];

  var currentIndex = 0;

  $("#back").click(function () {
    if (currentIndex == 0) {
      currentIndex = 7
      $("#yorkImage").attr("src",images[currentIndex]);
    } else {
      currentIndex -= 1
      $("#yorkImage").attr("src",images[currentIndex]);
    }
  });

  $("#next").click(function () {
    if (currentIndex == 7) {
      currentIndex = 0
      $("#yorkImage").attr("src",images[currentIndex]);
    } else {
      currentIndex += 1
      $("#yorkImage").attr("src",images[currentIndex]);
    }
  });
});
