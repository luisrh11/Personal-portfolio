 $("#button").click(function () {
      // get the element on the page related to the button
        var scrollToId = $(this).data("scroll");
        var scrollToElement = document.getElementById(scrollToId);
        // make the page scroll down to where you want
        console.log(scrollToId);
        // ...
    });
