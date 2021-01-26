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
	var url = 'https://formsubmit.co/932a3e3ae7e8c98832893be9bd2ed12e';
	var request = new XMLHttpRequest();
	request.open('POST', url, true);
    var response = new XMLHttResponse();
	request.onload = function () { // request successful
		// we can use server response to our request now
        success();
		console.log(request.responseText);
	};
	request.onerror = function () {
		// request failed
        error();
	};
	request.send(new FormData(event.target)); // create FormData from form that triggered event
	event.preventDefault();
}

// and you can attach form submit event like this for example
contactForm.addEventListener('submit', onClickOfSubmitButton);

