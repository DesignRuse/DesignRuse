window.addEventListener("DOMContentLoaded", function () {

	// get the contactForm elements defined in your contactForm HTML above
	var contactForm = document.getElementById("contact-form");
	var memoModal = document.getElementById("memo-modal");
    var memo = document.getElementById("memo");
    var memoText = document.getElementById("memo-text");
	var errorModal = document.getElementById("error-modal");

	// Success and Error functions for after the contactForm is submitted
	function success() {
		contactForm.reset();
        memo.classList.add("success");
        memoText.innerHTML = "Thanks! Your message has been sent.";
		memoModal.style.opacity = "1";
		memoModal.style.display = "block";
		setTimeout(function () {
			memoModal.style.opacity = "0";
			memoModal.style.display = "none";
            memo.classList.remove("success");
            memoText.innerHTML = "";
		}, 4000);
	}

	function error() {
        memo.classList.add("error");
        memoText.innerHTML = "Oops! There was a problem.";
		memoModal.style.opacity = "1";
		memoModal.style.display = "block";
		setTimeout(function () {
			memoModal.style.opacity = "0";
			memoModal.style.display = "none";
            memo.classList.remove("error");
            memoText.innerHTML = "";
		}, 4000);
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

