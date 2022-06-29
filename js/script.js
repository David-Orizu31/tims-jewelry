$(function () {
    //  alert(window.innerWidth);
    if(window.innerWidth <= 992) {
      $(".navbar").addClass('fixed-top');
    }
    else {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
    });
}

  });