$(document).ready(function() {
	var grid = function() {
	var r = prompt("How many squares per side do you want in your grid?", "Please enter a number.");
		if (isNaN(r) || r > 128) {
			r = prompt("Please enter a number between 10 and 64");
		}
	var sq = parseInt(r);
	var hw = 900/sq;
	var divsToAppend = "";
		for (i=1; i<((sq*sq)+1); i++) {
			
	    	divsToAppend += '<div class="sketch" style="height:'+hw+'px; width:'+hw+'px;"></div>';
	    }
	$('.container').append(divsToAppend);

	$('.sketch').hover(function() {
		$(this).css("opacity", "-=0.1");
	});
};

	grid();	

	$('button').on('click', function() {
		$(document).find('.container').empty();
		grid();
	});
});