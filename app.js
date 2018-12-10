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