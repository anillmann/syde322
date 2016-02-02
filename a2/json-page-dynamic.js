$(document).ready(function(){

	$("#parameter_form").submit(function(event){
		var ingred_string = $("#ingred").val();
		var query_string = $("#query").val();
		var api_string = "http://recipepuppy.com/api/?i="+ ingred_string + "&q=" + query_string;

		$.ajax({url: "http://recipepuppy.com/api/", data:{i:"",q:""}, type: 'GET', jsonpCallback : 'onApiResponse' });

		function onApiResponse(data) {
			var i = 0, dataSize = data.results.length, opt_string = '';
	    	for(i; i < dataSize; i++){
	    		var row = i+1;
	       		$('#main_table tr:eq('+ row +') td:eq(0)').html(data.results[i].title);
	       		$('#main_table tr:eq('+ row +') td:eq(1)').html(data.results[i].href);
	       		$('#main_table tr:eq('+ row +') td:eq(2)').html(data.results[i].ingredients);
	     		}			
		}

		// $.getJSON(api_string, function(data) {
		// 	var i = 0, dataSize = data.results.length, opt_string = '';
	 //    	for(i; i < dataSize; i++){
	 //    		var row = i+1;
	 //       		$('#main_table tr:eq('+ row +') td:eq(0)').html(data.results[i].title);
	 //       		$('#main_table tr:eq('+ row +') td:eq(1)').html(data.results[i].href);
	 //       		$('#main_table tr:eq('+ row +') td:eq(2)').html(data.results[i].ingredients);
	 //     		}
		// })

	});
});
