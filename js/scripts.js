$(document).ready(function()  {
  $('form').submit(function(event){
    event.preventDefault();
    var countTo = parseInt($('#countTo').val()) ;
    var countBy = parseInt($('#countBy').val()) ;

    if ( Math.abs(countBy) > Math.abs(countTo)) {
      console.log("invalid input");

    } else {
      if (countTo > 0 && countBy > 0){
        for (var i= countBy; i <= countTo; i += countBy) {
          $('#output').append(i+ " ");
        }

      } else if (countTo < 0 && countBy <0){

        countTo *= -1;
        countBy *= -1;

        for (var i= countBy; i <= countTo; i += countBy) {
          $('#output').append("-" + i + " ");

        }
      } else {
        console.log("invalid input");
      }

    }



    });

});
