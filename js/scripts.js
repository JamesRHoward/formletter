
$(document).ready(function(){
  $("#letterform").submit(function(event) {
    var name = $("input#namefield").val();
    $("#letter").show();
    $("#yourname").text(name);
    event.preventDefault();
  });
});
