//sets scrolled class on scrollables when they reach the right height
function reveal() {
	//get all scrollables
  var reveals = document.querySelectorAll(".scrollable");

	//console.log("scrolled");
	//set scrolled on each scrollable
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
		//the height the element needs to reach
    var elementVisible = 300;

		//if it has reached the height...
		var style = window.getComputedStyle(reveals[i]);
		var scrollPercent = parseFloat(style.getPropertyValue('--scrollPercent'));
		console.log(scrollPercent + ": height");
    if (elementTop < windowHeight * scrollPercent) {
			//...have it be revealed...
      reveals[i].classList.add("scrolled");
			//console.log(reveals[i].classList);
			//...otherwise, remove scrolled so it hides again
    } else {
      reveals[i].classList.remove("scrolled");
    }
  }
}

//event listener
window.addEventListener("scroll", reveal);