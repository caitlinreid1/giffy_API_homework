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
				placeholder.attr("id", i);
				// placeholder.on("click", alert('hi'));


				gifDiv.prepend(p);
				gifDiv.prepend(placeholder);

				$('#animalGifs').append(gifDiv);
 			$('#animalGifs').append(placeholder); 

 			// function stateChange () {
 			// 	// placeholder.attr("src", results[i].images.fixed_height.url);
 			// // function myFunction() {
 			// // 	placeholder.attr("src", results[i].images.fixed_height.url);
 			// }  	
 		} //ends for-loop
    }) //ends the done function			  	 
}); // ends button click function



