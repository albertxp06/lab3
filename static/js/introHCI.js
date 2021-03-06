'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript has taken control");
		$('#testjs').text("ialusghflawhe");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

//projectClick
function projectClick(e) {
		//	Cancel	the	default	action,	which	prevents	the	page	from	reloading
		e.preventDefault();
		//	In	an	event	listener,	$(this)	is	the	element	that	fired	the	event
		var	projectTitle = $(this).find("p").text();
		var	jumbotronHeader	= $(".jumbotron h1");
		jumbotronHeader.text(projectTitle);	
		var check = 0;

		var	containingProject = $(this).closest(".project");
		var	description = $(containingProject).find(".project-description");	

		$(description).toggle();

}