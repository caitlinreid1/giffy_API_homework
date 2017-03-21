$(document).ready(function() {

var animalArray = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", 
"ferret", "turtle", "sugarglider", "chinchilla", "hedgehog", "hermit crab", "gerbil", 
"pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

var userinput = $('#animal-input').val();



for (var i = 0; i < animalArray.length; i++) {

$('#buttonsGoHere').append("<button>" + animalArray[i]+ "</button>")

// console.log(animalArray[i]);




}







}







// $.ajax({
//       url: queryURL,
//       method: 'GET'
//     }).done(function(response) {
//       console.log(response);
//     });