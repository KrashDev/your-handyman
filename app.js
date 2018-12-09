$(document).ready(function() {

  //navbar link animation 1
  /*
  $('nav.navbar a').mouseover(function(){
    $(this).css({"background-color":"#ff0000", "color":"#ffffff", "border-radius":"30px"});
  });
  $('nav.navbar a').mouseout(function(){
    $(this).css({"background-color":"#ffffff", "color":"#595959"});
  });
  */
  //navbar link animation 2
  $('nav.navbar a').mouseover(function() {
    $(this).css({
      "border-bottom": "2px solid #ff0000",
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
      "background-color": "#ff0000"
    });
  });
  $('nav.navbar #quote-button a').mouseout(function() {
    $(this).css({
      "color": "#ff0000",
      "background-color": "#ffffff"
    });
  });

  //landing buttons
  /*
  $('.landing-buttons a').mouseover(function() {
    $(this).css({
      "height": "98%"
    });
  });
  $('.landing-buttons a').mouseout(function() {
    $(this).css({
      "height": "100%"
    });
  });
*/

  //services button
  $('#services-button a').click(function() {
    var services = $('.work-widgets');
    services.toggle('show');
  });

  //center buttons


  //social icon buttons
  $('.social-icons img').mouseover(function() {
    $(this).animate({
      "height": "50px",
      "top": "-2px",
      "left": "-2px"
    });
  });
  $('.social-icons img').mouseout(function() {
    $(this).animate({
      "height": "60px",
      "top": "2px",
      "left": " 2px"
    });
  });

  //services buttons
  $('.work-widgets a').mouseover(function() {
    $(this).css({
      "border-bottom": "2px solid #ff0000",
      "background-color": "#ffffff"
    });
  });
  $('.work-widgets a').mouseout(function() {
    $(this).css({
      "border-bottom": "2px solid #ffffff"
    });
  });


  //gallery arrow buttons
  $('.gallery .arrow-right').click(function() {
    var galImage = $('.gallery-images');
    if ($('.gallery-images:nth-child(n+3)')) {
      galImage.hide();
    }
  });

  //message me button
  $('#message-me').mouseover(function() {
    $(this).css({
      "background-color": "#ff0000",
      "color": "#ffffff",
    });
  });
  $('#message-me').mouseout(function() {
    $(this).css({
      "background-color": "#ffffff",
      "color": "#000000",
    });
  });

  scaleVideoContainer();
  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });

});

function scaleVideoContainer() {

  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

  $(element).each(function() {
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

  var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

  // console.log(windowHeight);

  $(element).each(function() {
    var videoAspectRatio = $(this).data('height') / $(this).data('width');

    $(this).width(windowWidth)

    if (windowWidth < 1000) {
      videoHeight = windowHeight;
      videoWidth = videoHeight / videoAspectRatio;
      $(this).css({
        'margin-top': 0,
        'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
      });

      $(this).width(videoWidth).height(videoHeight);
    }

    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

  });
}