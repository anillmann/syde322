$(document).ready(function(){

	// $("#parameter_form").submit(function(event){
	// 	var ingred_string = $("#ingred").val();
	// 	var query_string = $("#query").val();
	// 	var api_string = "http://recipepuppy.com/api/?i="+ ingred_string + "&q=" + query_string;

		$.getJSON("http://recipepuppy.com/api/?i=onions,garlic&q=omelet", function(data) {
			var i = 0, dataSize = data.results.length, opt_string = '';
	    	for(i; i < dataSize; i++){
	    		var row = i+1;
	       		$('#main_table tr:eq('+ row +') td:eq(0)').html(data.results[i].title);
	       		$('#main_table tr:eq('+ row +') td:eq(1)').html(data.results[i].href);
	       		$('#main_table tr:eq('+ row +') td:eq(2)').html(data.results[i].ingredients);
	     		}
		})

		// $.ajax({
		// 	url: api_string, 
		// 	// data: {
		// 	// 	i:ingred_string,
		// 	// 	q:query_string
		// 	// }, 
		// 	// type: 'GET', 
		// 	// dataType: 'jsonp',
		// 	// error: function(data) {
		// 	// 	alert(data);
		// 	// },
		// 	// success: function(data) {
		// 	// 	alert(data);
		// 	// },
		// 	jsonpCallback : 'onApiResponse' 
		// });

		// function onApiResponse(data) {
		// 	var i = 0, dataSize = data.results.length, opt_string = '';
	 //    	for(i; i < dataSize; i++){
	 //    		var row = i+1;
	 //       		$('#main_table tr:eq('+ row +') td:eq(0)').html(data.results[i].title);
	 //       		$('#main_table tr:eq('+ row +') td:eq(1)').html(data.results[i].href);
	 //       		$('#main_table tr:eq('+ row +') td:eq(2)').html(data.results[i].ingredients);
	 //     		}			
		// }



	// });
});
