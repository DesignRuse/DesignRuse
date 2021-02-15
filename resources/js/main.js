window.addEventListener("DOMContentLoaded", function () {

	// get the contactForm elements defined in your contactForm HTML above
	var contactForm = document.getElementById("contact-form");
	var successModal = document.getElementById("success-modal");
	var errorModal = document.getElementById("error-modal");

	// Success and Error functions for after the contactForm is submitted
	function success() {
		contactForm.reset();
		successModal.style.opacity = "1";
		successModal.style.display = "block";
		setTimeout(function () {
			successModal.style.opacity = "0";
			successModal.style.display = "none";
		}, 4000);
	}

	function error() {
		errorModal.style.opacity = "1";
		errorModal.style.display = "block";
	}

	// handle the contactForm submission event
	contactForm.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(contactForm);
		ajax(contactForm.method, contactForm.action, data, success, error);
	});
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}

