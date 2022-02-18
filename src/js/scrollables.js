function reveal() {
  var reveals = document.querySelectorAll(".scrollable");

	console.log("scrolled");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 500;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
			console.log(reveals[i].classList);
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);