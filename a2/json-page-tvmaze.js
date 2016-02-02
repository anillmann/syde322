$(document).ready(function(){

	var tv_ids = [67,161,84,169,194];
	var j = 0;
	for(j; j < tv_ids.length; j++){
		(function (j){//window.alert(tv_ids[j]);
		var row = j+1;
		$.getJSON('http://api.tvmaze.com/shows/'+tv_ids[j], function(data){
			$('#main_table tr:eq('+ row +') td:eq(0)').html(data.name);
			$('#main_table tr:eq('+ row +') td:eq(1)').html(data.url);
			$('#main_table tr:eq('+ row +') td:eq(2)').html(data.summary);
		})
		$.getJSON('http://api.tvmaze.com/shows/'+tv_ids[j]+'/cast', function(cast_data) {
	    	var i = 0, dataSize = cast_data.length, castString = '';
	    	for(i; i < dataSize; i++){
	       		castString += cast_data[i].person.name + ', ';
	     		}
			$('#main_table tr:eq('+ row +') td:eq(3)').html(castString);
		})
	})(j)
	}

	});


