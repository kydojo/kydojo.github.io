// Kyle Johnson - Final Project
// CS 290 - Spring 2018


$(document).ready(function() {
	// Carousels
    $('#homeCarousel').carousel({interval: 6000});
    // $('#bottomCarousel').carousel({interval: 1500});

	// Tooltip
	$('[data-toggle="gitTooltip"]').tooltip({title: "Github<br>For private repository access, reach out via the Email icon.", placement: "bottom", animation: true, html: true}); 
	$('[data-toggle="linkedTooltip"]').tooltip({title: "LinkedIn", placement: "bottom", animation: true, html: true}); 
	$('[data-toggle="angelTooltip"]').tooltip({title: "AngelList", placement: "bottom", animation: true, html: true});
	$('[data-toggle="professorTooltip"]').tooltip({title: "Rate My Professor", placement: "bottom", animation: true, html: true});  
	$('[data-toggle="resumeTooltip"]').tooltip({title: "Résumé", placement: "bottom", animation: true, html: true}); 
	$('[data-toggle="emailTooltip"]').tooltip({title: "Email", placement: "bottom", animation: true, html: true}); 

	// Active navbar link highlighting
	// $('to-activate').click(function(){
 	// 		$('to-activate').removeClass("active");
 	// 		$(this).addClass("active");
	// });
 });

