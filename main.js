$(document).ready(function(){
 
    for (var i = 1 ; i < 7; i++){
        var row = ".row-"+i;
        $(row).addClass("litup");
      
      (function(i){setTimeout(function(){
         var row = ".row-"+i
         $(row).removeClass("litup");
      }, 1000)});
    }
 })