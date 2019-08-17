$(document).ready(function() {
  var images = [
    "images/designer2/dii.jpg",
    "images/designer2/dii2.jpg",
    "images/designer2/dii3.jpg",
    "images/designer2/dii4.jpg",
    "images/designer2/dii5.jpg",
    "images/designer2/dii6.jpg",
    "images/designer2/dii7.jpg",
    "images/designer2/dii8.jpg",
    "images/designer2/dii9.jpg",
    "images/designer2/dii10.jpg",
    "images/designer2/dii11.jpg",
    "images/designer2/dii12.jpg",
  ];

  var currentIndex = 0;

  $("#back").click(function () {
    if (currentIndex == 0) {
      currentIndex = 11
      $("#diiImage").attr("src",images[currentIndex]);
    } else {
      currentIndex -= 1
      $("#diiImage").attr("src",images[currentIndex]);
    }
  });

  $("#next").click(function () {
    if (currentIndex == 11) {
      currentIndex = 0
      $("#diiImage").attr("src",images[currentIndex]);
    } else {
      currentIndex += 1
      $("#diiImage").attr("src",images[currentIndex]);
    }
  });
});
