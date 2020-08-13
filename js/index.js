const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open')
	})
});


mybutton = document.getElementById("btn_up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}