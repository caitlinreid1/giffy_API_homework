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

		event.preventDefault();

		var userInput = $('#animal-input').val().trim();

		animalArray.push(userInput);

		renderButtons();
	})

renderButtons();	







// }







// $.ajax({
//       url: queryURL,
//       method: 'GET'
//     }).done(function(response) {
//       console.log(response);
//     });