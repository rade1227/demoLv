// MENU DROPDOWN

let nav = document.querySelector('nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
	if (dropdown.classList.contains('show')) {
		dropdown.classList.remove('show');
	} else {
		dropdown.classList.add('show');
	}
})

navToggle.addEventListener('click', () => {
	if (nav.classList.contains('opened')) {
		nav.classList.remove('opened');
	} else {
		nav.classList.add('opened');
	}
});


(document).ready(function() {

	(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
	  $(this).parent().children(".overlay").show();
  
	});
  
  
	(`[unique-script-id="w-w-dm-id"] .closegal`).click(function() {
	  $(`[unique-script-id="w-w-dm-id"] .overlay`).hide();
	});
  });

  