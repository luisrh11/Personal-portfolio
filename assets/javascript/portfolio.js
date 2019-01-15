 $("#button1").click(function () {
  //  event.preventdefault();
  // get the element on the page related to the button
  //   // var scrollToId = $(this).data("scroll");
  //   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  // make the page scroll down to where you want
  //   console.log(scrollToId);
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#footer").offset().top
}, 1000);
    });
    
  $("#button2").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#footer").offset().top
    }, 1000);
        });