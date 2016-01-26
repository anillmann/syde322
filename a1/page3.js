// January 25, 2016
// by: Andrew Illmann, 2041037; Melissa Lynette, 20410774

$(document).ready(function(){
    
    var numdisp = 0;
    var opclicks = 0;
    var operator = 0;
    var clicks = 0;
    var num1 = 0;
    var rset = 0;

    function reset() {
    	location.reload(true);
    } 

    function resetdisplay() {
    	$("#display").text("Enter first number ...");
    } 

    function freezedisp() {
    	$("#enter").text("Reset");
    	$(".number").css("color", "#808080");
    	$(".operator").css("color", "#663399");
    }

    window.setTimeout(resetdisplay,750);

    $("#enter").click(function(){
	    if (rset == 1) {
	    	reset();
	    	$("#enter").text("=");
	    	window.setTimeout(resetdisplay,750);
	    } else {
	        if (opclicks == 0 ) {
	        	$("#display").text("Select an operator ...");
	        } else {
	        	if (operator == "plus") {
	        		numdisp = num1 + numdisp;
	        		$("#display").text(numdisp);
	        		freezedisp();
	        		rset = 1;
	        	} else if (operator == "sub") {
	        		numdisp = num1 - numdisp;
	        		$("#display").text(numdisp);
	        		freezedisp();
	        		rset = 1;
	        	} else if (operator == "multi") {
	        		numdisp = num1 * numdisp;
	        		$("#display").text(numdisp);
	        		freezedisp();
	        		rset = 1;
	        	} else if (operator == "divide") {
		        	if (numdisp == 0) {
		        		$("#display").text("Error. Divide by 0.");
		        		freezedisp();
		        		rset = 1;
		        	} else {
		        		numdisp = num1 / numdisp;
		        		$("#display").text(numdisp);
		        		freezedisp();
		        		rset = 1;
		        	}
	        	}
	        }
	    }
        
    });

    $("#one").click(function(){
	    if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 1;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 1;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#two").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 2;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 2;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
    	}
    });

    $("#three").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 3;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 3;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#four").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 4;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 4;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#five").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 5;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 5;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#six").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 6;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 6;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#seven").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 7;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 7;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#eight").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 8;
	    		clicks = clicks +1;
	    	} else {
	    		numdisp = numdisp*10 + 8;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#nine").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 9;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 9;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#zero").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 0;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*10 + 0;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $("#neg").click(function(){
    	if (rset != 1) {
	    	if (clicks == 0) {
	    		numdisp = 0;
	    		clicks = clicks + 1;
	    	} else {
	    		numdisp = numdisp*-1;
	    		clicks = clicks + 1;
	    	}
	    	console.log(numdisp)
	    	$("#display").text(numdisp);
	    }
    });

    $('#plus').click(function(){
    	if (rset != 1) {
	    	if (opclicks == 0) {
	    		num1 = numdisp;
	    		numdisp = 0;
	    		clicks = 0;
	    		opclicks = opclicks + 1;
	    		operator = "plus";
	    		$("#display").text("Enter second number ...");
	    	} else {
	    		$("#display").text("Multiple operations not supported ...")
	    		freezedisp();
	    		rset = 1;
	    	}
	    }
    });

    $('#sub').click(function(){
    	if (rset != 1) {
	    	if (opclicks == 0) {
	    		num1 = numdisp;
	    		numdisp = 0;
	    		clicks = 0;
	    		opclicks = opclicks + 1;
	    		operator = "sub";
	    		$("#display").text("Enter second number ...");
	    	} else {
	    		$("#display").text("Multiple operations not supported ...")
	    		freezedisp();
	    		rset = 1;
	    	}
	    }
    });

    $('#multi').click(function(){
    	if (rset != 1) {
	    	if (opclicks == 0) {
	    		num1 = numdisp;
	    		numdisp = 0;
	    		clicks = 0;
	    		opclicks = opclicks + 1;
	    		operator = "multi";
	    		$("#display").text("Enter second number ...");
	    	} else {
	    		$("#display").text("Multiple operations not supported ...")
	    		freezedisp();
	    		rset = 1;
	    	}
	    }
    });

    $('#divide').click(function(){
    	if (rset != 1) {
	    	if (opclicks == 0) {
	    		num1 = numdisp;
	    		numdisp = 0;
	    		clicks = 0;
	    		opclicks = opclicks + 1;
	    		operator = "divide";
	    		$("#display").text("Enter second number ...");
	    	} else {
	    		$("#display").text("Multiple operations not supported ...");
	    		freezedisp();
	    		rset = 1;
	    	}
	    }
    });
});