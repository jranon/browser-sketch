var grid = function() { //generate the sketch pad grid
	var r = prompt("How many pixels do you want in your grid?", "Please enter a number."); //ask user for the number of pixels.
		if (isNaN(r) || r > 128) {
			r = prompt("Please enter a number between 10 and 64");
		}
	var sq = parseInt(r);
	var hw = 900/sq; //calculate pixel size against un-changing container div size.
	var divsToAppend = "";
		for (i=1; i<((sq*sq)+1); i++) { //puts divs in a giant variable.
	    	divsToAppend += '<div class="sketch" style="height:'+hw+'px; width:'+hw+'px;"></div>';
	    }
	$('.container').append(divsToAppend); //vomits divs into container.

	$('.sketch').hover(function() { //how the user draws. multiple passes = darker div.
		$(this).css("opacity", "-=0.1");
	});
};

$(document).ready(function() {
	grid();	//prompt user for pixel density and create sketch pad.
	$('button').on('click', function() { //clear the sketch pad and start over with a new pad.
		$(document).find('.container').empty();
		grid();
	});
});
