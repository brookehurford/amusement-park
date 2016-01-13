$(document).ready(function(){
  var question = parseInt(prompt("How tall are you in inches?"));

  if(question >= 43) {
    $('#rides').show();
} else {
    $('#under-43').show();
  }
  if(question > 72) {
    $(".tall").addClass("highlight-tall")
  }
});
