$(document).ready(function(){
    function toggleLit1(row) {
      $(".row-"+row).toggleClass("litup");
      window.setTimeout(function() {
        toggleLit2(row);
        }, 1000);
      }
    function toggleLit2(row) {
      $(".row-"+row).toggleClass("litup");
      window.setTimeout(function() {
        toggleLit1((row+1)%6);
        }, 1000);
      }
    toggleLit1(1);
  });