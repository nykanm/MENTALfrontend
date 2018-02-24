$(document).ready(function(){
  $("div.emoji").toggle();
  $( "div.emojibtn" ).on( "click", function() {
    $("div.letters").toggle();
    $("div.emoji").toggle();
    });
  var hits = [];
  
  function rowOn(row) {
    $(".row-"+row).toggleClass("litup");
    window.setTimeout(function() {
      rowOff(row);
    }, 500);}
  
  function rowOff(row) {
    $(".row-"+row).toggleClass("litup");
    window.setTimeout(function() {
      if(row >= 6){
        colOn(0);
      } else {
        rowOn(row+1);
      }
    }, 0);}
  
  function colOn(col) {
    $(".col-"+col).toggleClass("litup");
    window.setTimeout(function() {
      colOff(col);
    }, 500);}
  
  function colOff(col) {
    $(".col-"+col).toggleClass("litup");
    window.setTimeout(function() {
      if(col >= 6){
        rowOn(0);
      } else {
        colOn(col+1);
      }
    }, 0);}
  
  function rowCheck(row){
    //This link will execute the callback with non-false if p300 is detected
    //EX: var URL = http://localhost:3000/api/signal-checker
    function callback(chosen){
      var row = row;
      if(chosen){
        hits.push("row-"+row);
        compareHits;
      }
      if(row >= 6){
        colOn(0);
      } else {
        rowOn(row+1);
      }
    }
    //EX: request(URL, callback);
  }
  
  function colCheck(col){
    
  }
  
  rowOn(1);
});

