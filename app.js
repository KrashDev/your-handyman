$(document).ready(function() {

  //google maps code
  // Initialize and add the map
  // function initMap() {
  // The location of Uluru
  // var uluru = {
  //   lat: -84.308454,
  //   lng: 33.860634
  // };
  // The map, centered at Uluru
  // var map = new google.maps.Map(
  //   document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });

  // var APIKey = AIzaSyAJWV - SK85OFpSdJ9IkJewTyL_Ius8czFw;
  // The marker, positioned at Uluru
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }
  // <!--Load the API from the specified URL
  // *
  // The async attribute allows the browser to render the page
  // while the API loads
  //   *
  //   The key parameter will contain your own API key(which is not needed
  //     for this tutorial) *
  //   The callback parameter executes the initMap()
  //
  // function
  // -->
  // <
  // script async defer
  // src = "https://maps.googleapis.com/maps/api/js?key=APIKey&callback=initMap" >

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
  $('nav.navbar a').mouseover(function() {
    $(this).css({
      "border-bottom": "2px solid #5d5dbb",
      "background-color": "#ffffff"
    });
  });
  $('nav.navbar a').mouseout(function() {
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