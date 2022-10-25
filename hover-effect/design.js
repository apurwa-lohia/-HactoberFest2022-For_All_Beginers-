$(document).ready(function(){
  $(".color").mouseenter(function(){
    $(this).addClass("color-on");
    $(this).removeClass("color-off");
  });
  $(".color").mouseleave(function(){
    $(this).removeClass("color-on");
    $(this).addClass("color-off");
  });
});