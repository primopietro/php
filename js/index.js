
function beginAnimation(){
  
 $(".slide").addClass("animated");  
  
  setTimeout(function(){
      $(".slide").addClass("withShadow");
   }, 800);
   setTimeout(function(){
      $("#maintext").hide().fadeIn(1000);
   }, 2300);
  
}

$(function() {
    beginAnimation();
});