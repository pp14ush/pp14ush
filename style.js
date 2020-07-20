function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function(){ 
var s = skrollr.init()

	$(window).scroll(function(){
		if ($(this).scrollTop() > 900){
			$(".w3-top").css({"background-color" : "rgba(0,0,0,0.9)"})
		}
		else {
			$(".w3-top").css({"background-color" : "rgba(0,0,0,0)"})
		}
	})
});
