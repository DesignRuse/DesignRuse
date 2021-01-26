var contactForm = document.getElementById('contact-form');
var status = document.getElementById('status');

function success() {
    contactForm.reset();
    status.classList.add('success');
    status.innerHTML = 'Thanks!';
}

function error() {
    status.classList.add('error');
    status.innerHTML = 'Oops! There was a problem.';
}

function onClickOfSubmitButton(event) {
	var url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-xj5X9OsH4i2XXYMyCEb1artDiNj3TfY_pofwuAhKy2OcHg/formResponse';
	var request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.onload = function () { // request successful
		// we can use server response to our request now
        alert('Success');
        success();
		console.log(request.responseText);
	};
	request.onerror = function () {
		// request failed
        alert('Error');
        error();
	};
	request.send(new FormData(event.contactForm)); // create FormData from form that triggered event
	event.preventDefault();
}

// and you can attach form submit event like this for example
contactForm.addEventListener('submit', onClickOfSubmitButton);

