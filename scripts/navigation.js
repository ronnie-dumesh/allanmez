//Header dropdown//
$(document).ready(function() {

  var DropdownisOpen = false;

  // When the architectural design nav item is clicked //
  $("#architecturedropdownstart").click(function () {

    var ArchisHidden = $("#architecturenavexpand").hasClass("hidden")
    if (ArchisHidden) {
      // Activate dropdown //
      $("#architecturenavexpand").removeClass("hidden");
      $(".archdownarrow").addClass("hidden");
      $(".archuparrow").removeClass("hidden");
      var DropdownisOpen = true;
    } else {
      // Hide dropdown //
      $("#architecturenavexpand").addClass("hidden");
      $(".archdownarrow").removeClass("hidden");
      $(".archuparrow").addClass("hidden");
      var DropdownisOpen = false;
    }

  });

  // When the art nav item is clicked //
  $("#artdropdownstart").click(function () {

    var ArtisHidden = $("#artnavexpand").hasClass("hidden")
    if (ArtisHidden) {
      // Activate dropdown //
      $("#artnavexpand").removeClass("hidden");
      $(".artdownarrow").addClass("hidden");
      $(".artuparrow").removeClass("hidden");
      var DropdownisOpen = true;
    } else {
      // Hide dropdown //
      $("#artnavexpand").addClass("hidden");
      $(".artdownarrow").removeClass("hidden");
      $(".artuparrow").addClass("hidden");
      var DropdownisOpen = false;
    }

  });

  // When the mobile header is clicked //
  $("#mobiledropdownstart").click(function () {

    var MobileisHidden = $("#allnavlinks").hasClass("mobilehidden")
    // As long as we are in mobile version //
    if (MobileisHidden && $(window).width() <= 600) {
      // Show all dropdowns and push main content down //
      $("#allnavlinks").removeClass("mobilehidden");
      $("#artnavexpand").removeClass("hidden");
      $("#architecturenavexpand").removeClass("hidden");
      $(".getspushed").addClass("mainpush");
      var DropdownisOpen = true;
    } else {
      // Hide all dropdowns and move main content back up //
      $("#allnavlinks").addClass("mobilehidden");
      $(".getspushed").removeClass("mainpush");
      var DropdownisOpen = false;
    }

  });

  return DropdownisOpen;

});
