// slide
$(document).ready(function () {
  var num = 1;

  setInterval(function () {
    if (num < 3) {
      num++;
      $(".slide ul").animate(
        {
          top: "-=300",
        },
        "slow"
      );
    } else {
      num = 1;
      $(".slide ul").animate(
        {
          top: 0,
        },
        "slow"
      );
    }
  }, 3000);
});
