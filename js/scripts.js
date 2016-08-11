$(document).ready(function() {
  $("form").submit(function(event) {
    var musicInput = parseInt($("select#music").val());
    var movieInput = parseInt($("select#movie").val());
    var drinkInput = parseInt($("select#drink").val());
    var answer = ($("input#question").val());
    event.preventDefault();

    var total = (musicInput + movieInput + drinkInput);

    if (total <= 12) {
      $(".andy").show();
      $(".riff").hide();
    }
      else {
      $(".riff").show();
      $(".andy").hide();
    }
  });
});
