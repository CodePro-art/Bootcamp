(function($, window){
  var arrowWidth = 30;

  $.fn.resizeselect = function(settings) {  
    return this.each(function() { 

      $(this).change(function(){
        var $this = $(this);

        // create test element
        var text = $this.find("option:selected").text();
        
        var $test = $("<option>").html(text).css({
        	"font-size": $this.css("font-size"), // ensures same size text
          "visibility": "hidden" 							 // prevents FOUC
        });
        

        // add to body, get width, and get out
        $test.appendTo($this.parent());
        var width = $test.width();
        $test.remove();

        // set select width
        $this.width(width + arrowWidth);

        // run on start
      }).change();

    });
  };

  // run by default
  $("select.resizeselect").resizeselect();                       

})(jQuery, window);

// focus on search bar after choosing an option
$('[name=form-control]').on('change', function(){
    $("[type=text]").focus();
});

// humburger menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Back to top button
