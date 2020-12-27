/*------------------------------------------------------------------------------*/
/*------------- This Code Reloads And Refreshes The Webpage On Window Resize ---*/
/*------------------------------------------------------------------------------*/

window.onresize = function() { 
    if(typeof window.orientation === "undefined" || navigator.userAgent.indexOf('IEMobile') === -1) {
        location.reload(); 
        window.location.href = window.location.href;    
    }
}

/*------------------------------------------------------------------------------*/
/*------------- This Code Reloads And Refreshes The Webpage On Window Resize ---*/
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/*------------- Code Common To Both Functionality ------------------------------*/
/*------------------------------------------------------------------------------*/

var callToActionSection = document.getElementById('callToActionSection');

var benefitsSection = document.getElementById('benefitsSection');

var servicesSection = document.getElementById('servicesSection');

var testimonialsSection = document.getElementById('testimonialsSection');

var contactSection = document.getElementById('contactSection');

var aboutSection = document.getElementById('aboutSection');




var openContact = document.getElementById('openContact');

var hideContact = document.getElementsByClassName('hideContact');

var openAbout = document.getElementById('openAbout');

var hideAbout = document.getElementsByClassName('hideAbout');

/*------------------------------------------------------------------------------*/
/*------------- Code Common To Both Functionality ------------------------------*/
/*------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------*/
/*------------- Code for Showing & Hiding 'Contact Section' --------------------*/
/*------------------------------------------------------------------------------*/

function revealContactSection() {
    for (var i = 0; i < hideAbout.length; i ++) {
        hideAbout[i].removeEventListener('click', hideAboutSection);
    }
	contactSection.style.display = 'block';
	aboutSection.style.display = 'none';	
	callToActionSection.style.display = 'none';	
    benefitsSection.style.display = 'none';
	servicesSection.style.display = 'none';
	testimonialsSection.style.display = 'none';
}

openContact.addEventListener('click', revealContactSection);



function concealContactSection() {
	contactSection.style.display = 'none';
	aboutSection.style.display = 'none';	
	callToActionSection.style.display = 'block';	
    benefitsSection.style.display = 'block';
	servicesSection.style.display = 'block';
	testimonialsSection.style.display = 'flex';
}

for (var i = 0; i < hideContact.length; i ++) {
    hideContact[i].addEventListener('click', concealContactSection);
}

/*------------------------------------------------------------------------------*/
/*------------- Code for Showing & Hiding 'Contact Section' --------------------*/
/*------------------------------------------------------------------------------*/



/*------------------------------------------------------------------------------*/
/*------------- Code for Showing & Hiding 'About Section' ----------------------*/
/*------------------------------------------------------------------------------*/

openAbout.addEventListener('click', showAboutSection);

function showAboutSection() {
    for (var i = 0; i < hideContact.length; i ++) {
        hideContact[i].removeEventListener('click', hideAboutSection);
    }
	aboutSection.style.display = 'block';	
    contactSection.style.display = 'none';
	callToActionSection.style.display = 'none';	
    benefitsSection.style.display = 'none';
	servicesSection.style.display = 'none';
	testimonialsSection.style.display = 'none';
}



function hideAboutSection() {
	aboutSection.style.display = 'none';
	contactSection.style.display = 'none';
	callToActionSection.style.display = 'block';	
    benefitsSection.style.display = 'block';
	servicesSection.style.display = 'block';
	testimonialsSection.style.display = 'flex';
}

for (var i = 0; i < hideAbout.length; i ++) {
    hideAbout[i].addEventListener('click', hideAboutSection);
}

/*------------------------------------------------------------------------------*/
/*------------- Code for Showing & Hiding 'About Section' ----------------------*/
/*------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------*/
/*------------- Code for Smooth Page Scroll Effect -----------------------------*/
/*------------------------------------------------------------------------------*/

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

/*------------------------------------------------------------------------------*/
/*------------- Code for Smooth Page Scroll Effect -----------------------------*/
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/*------------- Code for Toggling Mobile Navigation Menu -----------------------*/
/*------------------------------------------------------------------------------*/

var logoAndNavWrapper = document.getElementById('logoAndNavWrapper');

var navigation = document.getElementById('navigation');

var navigationToggler = document.getElementById('navigationToggler');

var unorderedList = navigation.getElementsByTagName('ul')[0];

navigationToggler.addEventListener('click', toggleMobileNavigationMenu);

function toggleMobileNavigationMenu() {
    if(unorderedList.style.display === 'none') {
        unorderedList.style.display = 'block';
        navigationToggler.style.margin = "-32px 0 0 0"; 
        logoAndNavWrapper.style.padding = "30px 0 0 0";
    }  else {
        unorderedList.style.display = 'none';  
        navigationToggler.style.margin = "-8px 0 0 0"; 
        logoAndNavWrapper.style.padding = "30px 0 27px 0";
    } 
}

/*------------------------------------------------------------------------------*/
/*------------- Code for Toggling Mobile Navigation Menu -----------------------*/
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/*------------- Code for Redirection To Custom Thank You Page ------------------*/
/*------------------------------------------------------------------------------*/

var submitted = false;

var appointmentForm = document.getElementById('appointmentForm');

appointmentForm.addEventListener('submit', setSubmittedToTrue);

function setSubmittedToTrue() {
    submitted = true; 
}

var hiddenIframe = document.getElementById('hiddenIframe');

hiddenIframe.addEventListener('load', redirectToCustomPage);

function redirectToCustomPage() {
    if(submitted) {
        window.location='https://lgzqpnywnptgzptx97r4wa-on.drv.tw/Thrivana_Homeopathic_Centre/thank-you.html';
    }
}

/*------------------------------------------------------------------------------*/
/*------------- Code for Redirection To Custom Thank You Page ------------------*/
/*------------------------------------------------------------------------------*/
