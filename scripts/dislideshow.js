$(document).ready(function() {
  var images = [
    "images/designer1/AllanMezhibovsky_Portfolio1.jpg",
    "images/designer1/AllanMezhibovsky_Portfolio2.jpg",
    "images/designer1/AllanMezhibovsky_Portfolio3.jpg",
    "images/designer1/AllanMezhibovsky_Portfolio4.jpg",
    "images/designer1/circles.jpg",
  ];

  var currentIndex = 0;

  $("#back").click(function () {
    if (currentIndex == 0) {
      currentIndex =
      $("#diImage").attr("src",images[currentIndex]);
    } else {
      currentIndex -= 1
      $("#diImage").attr("src",images[currentIndex]);
    }
  });

  $("#next").click(function () {
    if (currentIndex == 4) {
      currentIndex = 0
      $("#diImage").attr("src",images[currentIndex]);
    } else {
      currentIndex += 1
      $("#diImage").attr("src",images[currentIndex]);
    }
  });
});
