$(document).ready(function() {

  //review function
  (function() {
    setInterval(function() {
      $('.review-carousel .quote.active, .dot.active').each(function() {
        if ($(this).hasClass('last')) {
          $(this).parent('.review-carousel').find('.first').addClass('active');
          $(this).toggleClass('active');
        } else {
          var next = $(this).next();
          next.addClass('active');
          $(this).toggleClass('active');
        }
      });

    }, 2000);
  }());

  /*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });
  $(document).ready(function() {
    $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    });

  });

  //navbar link animation 2
  $('.nav.navbar-nav a').mouseover(function() {
    $(this).css({
      "border-bottom": "2px solid #5d5dbb",
      "background-color": "#ffffff"
    });
  });
  $('.nav.navbar-nav a').mouseout(function() {
    $(this).css({
      "border-bottom": "2px solid #ffffff"
    });
  });

  //quote button
  $('nav.navbar #quote-button a').mouseover(function() {
    $(this).css({
      "color": "#ffffff",
      "background-color": "#5d5dbb"
    });
  });
  $('nav.navbar #quote-button a').mouseout(function() {
    $(this).css({
      "color": "#5d5dbb",
      "background-color": "#ffffff"
    });
  });

  //start button
  $('button.start').mouseover(function() {
    $(this).css({
      "background-color": "#ffffff",
      "color": "#5d5dbb"
    });
  });
  $('button.start').mouseout(function() {
    $(this).css({
      "background-color": "#5d5dbb",
      "color": "#ffffff"
    });
  });

  //message me button
  $('#message-me').mouseover(function() {
    $(this).css({
      "background-color": "#5d5dbb",
      "color": "#ffffff",
    });
  });
  $('#message-me').mouseout(function() {
    $(this).css({
      "background-color": "#ffffff",
      "color": "#000000",
    });
  });

});