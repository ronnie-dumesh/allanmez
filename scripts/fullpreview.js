$(document).ready(function() {
  $(".rowimage img").click(function () {
    var src = $(this).attr('src');
    $('.fullimage').attr('src', src);
    $(".modal").removeClass("hidden");
    });
    $(".modal").click(function() {
      $(".modal").addClass("hidden");
    });
});
