// $(document).ready(function() {

var animalArray = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", 
"ferret", "turtle", "sugarglider", "chinchilla", "hedgehog", "hermit crab", "gerbil", 
"pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];



	function renderButtons () {

		$('#buttonsGoHere').empty();
		//loop through the array to add a new button each time
		for (var i = 0; i < animalArray.length; i++) {
			var newButton = $('<button>');

			newButton.addClass("animal")
			newButton.attr("data-name", animalArray[i])
			newButton.text(animalArray[i])

			$('#buttonsGoHere').append(newButton);
		}
	}
	

	//when the submit button is clicked...
	$('#addAnimal').on("click", function(event) {

		// event.preventDefault();

		var userInput = $('#animal-input').val().trim();

		animalArray.push(userInput);

		renderButtons();

	})

	renderButtons();	


	//when ANY button is clicked...
	$('button').on("click", function(event){
		$('#animalGifs').empty();

		var animalType = this.getAttribute("data-name").split(' ').join('+');

		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animalType+"&limit=10&api_key=dc6zaTOxFJmzC";

		$.ajax({
      		url: queryURL,
      		method: 'GET'
    	})

    	.done(function(response) {
     		var results = response.data

	     		for (var i = 0; i < results.length; i++) {
	    			

	     			var gifDiv = $("<div class='item'>");

	            	var rating = results[i].rating;

	            	var p = $("<p>").text("Rating: " + rating);

	   				var placeholder = $('<img>');
	   				placeholder.attr("src", results[i].images.fixed_height_still.url);
	   				placeholder.attr("data-state", "static");

	   				gifDiv.prepend(p);
	   				gifDiv.prepend(placeholder);

	   				$('#animalGifs').append(gifDiv);

	     			$('#animalGifs').append(placeholder); 

	     			// if ($('#animalGifs')).on("click", function(){
	     			// 	alert("hi");
	     			// })  				

	     		} //ends for-loop
    	}); //ends the done function
	});


 	// deals with the clicking on/off
	$('#animalGifs').on("click", function() {
		if ($(this).find("img").attr("data-state") == "static") {
		
		function myFunction (){

			console.log("hi");

			var animalType = $('#animalGifs').getAttribute("data-name").split(' ').join('+');

			var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animalType+"&limit=10&api_key=dc6zaTOxFJmzC";

			$.ajax({
	      		url: queryURL,
	      		method: 'GET'
	    	})
	    	.done(function(response) {
	     		var movingImage = response.data.images.fixed_height.url;

	     		$(this).find("img").attr("src", response.data.images.fixed_height.url);

	     	});


		}
		
     	}; //ends done function
    })






		

	    // else {
	    // 	$(this).find("img").attr("src", "staticgif.jpg");
	    // }
	
    //   




		// var animalType = this.getAttribute("data-name").split(' ').join('+');

		// var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animalType+"&limit=10&api_key=dc6zaTOxFJmzC";

		// $.ajax({
  //     		url: queryURL,
  //     		method: 'GET'
  //   	})
  //   	.done(function(response) {

  //    		var results = response.data
            	
  //  			var placeholder = $('<img>');

  //  			placeholder.attr("src", results[i].images.fixed_height_still.url);

  //  				gifDiv.prepend(p);
  //  				gifDiv.prepend(placeholder);

  //  				$('#animalGifs').append(gifDiv);

  //    			$('#animalGifs').append(placeholder); 

	 //     			// if ($('#animalGifs')).on("click", function(){
	 //     			// 	alert("hi");
	 //     			// })  				
  //   	}); //ends the done function
   // }













