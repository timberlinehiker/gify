// define variables
// populate a beginning array of search words 


// there will need to be a function to populate the buttons to the html
// there will need to be a funtion to use the word from each button to get the gifs from gify and display them when clicked, and that should start by clearing the gifs present and doing the ajax get function again
// start with the animal example
// function to initialize the buttons on page loadup or refresh

// when I add the additional buttons Form, the form should add a button, not perform the gify query.  all it should do is append the array and run the function to populate the buttons again



var names = ["fairy", "unicorn", "bear", "rainbow", "sequoia", "waterfall", "rey", "leia", "labyrinth",];

// add in a selector to the gifs once populated that allows you to switch between stopped and moving links











$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {


      console.log(response);


      var results = response.data


      for (var i = 0; i < results.length; i++) {


      var animalDiv = $("<div>");

      var p = $("<p>").html(results[i].rating);
     
      var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url)
      animalDiv.append(p)
      animalDiv.append(animalImage)
      $("#gif-appear-here").prepend(animalDiv);


      }

    });
  });