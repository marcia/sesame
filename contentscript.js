// Depending on how your environment is set up,
// you may need to change the base variable
function openProblemInNewTab( request, sender, sendResponse ) {
	var exercise = jQuery( ".content-body:first" ).text().match( /.*html.*/ );
	var base = "http://localhost/khan-exercises/exercises/";
	window.open( base + exercise.pop(), "_blank" );
}

// Listen for the request to open the problem in a new tab,
// which comes from the background page
chrome.extension.onRequest.addListener( openProblemInNewTab );

chrome.extension.sendRequest({}, function( response ) {});

jQuery( function() {
	jQuery( document ).keypress( function( event ) {
		if ( event.which === 111 ) {
			openProblemInNewTab();
		}
	});
})