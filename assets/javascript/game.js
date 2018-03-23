// **VARIABLES**
var wins = 0;
var losses = 0;
var crystalTotals = 0;
var l = "You Lose!!";
var w = "You Win!!";


// FUNCTIONS (not sure how to reset game/scores) EVERYTHING APPEARS TO GO INSIDE THE DOC.READY FUNCTION
$(document).ready(function() {
  var main = $("body");
  // This for loop will loop the command to create the div below four times and append it to our "parent-container".
  function reset() {
    //YOU CAN UPDATE THE LOSSES AND WINS AFTER EACH WIN/LOSS BY PUTTING THIS STATEMENT HERE
    $("body").find("#gameScore-container").html("Wins: " + wins + "\n\nLosses: " + losses);
    
    //YOU CAN RESET AND UPDATE THE TARGET NUMBER BY PUTTING THESE 2 STATEMENTS HERE IN THE RESET FUNCTION
    //INSTEAD OF THE GLOBAL SCOPE. 
    cpuRandom = cpuGenNumber(19, 120);

    $("#game-container").html(cpuRandom);

    $(".crystal-container").empty();

    for (var i = 0; i < 4; i++) {
      var crystalCollectors = $("<div>");
      crystalCollectors.attr("class", "crystalCollectors");
      $(".crystal-container").append(crystalCollectors);
      randomNumber = Math.floor(Math.random() * 12) + 1;
      //  console.log(randomNumber);
      crystalCollectors.addClass("crystal number");
      crystalCollectors.attr("data-number", randomNumber); //set value of each crystal
      // crystalCollectors.text(randomNumber);

     var img = $(".crystalCollectors").css("background-image", "url('http://www.scienceclarified.com/photos/crystal-3107.jpg')");
      // $(".crystalCollectors").attr("style", "background-image: url('https://i0.wp.com/sociedadejedi.com.br/wp-content/uploads/2017/11/Sem-t%C3%ADtulo-1.jpg?fit=528%2C480')");
    }
  }
  reset();
  //***what happens when you click on the crystals - generates crystal totals ****//
  $(".crystal-container").on("click", ".crystalCollectors", function() {
    var rawNumber = parseInt($(this).attr("data-number")); //get value of each crystal
    crystalTotals += rawNumber;
    //YOU NEED THIS STATEMENT HERE BECAUSE EVERY TIME YOU CHANGE THE VALUE OF
    //CRYSTALTOTAL YOU NEED TO RE-DISPLAY IT TO THE USER
    totalScore.text(crystalTotals);
    console.log(crystalTotals);
    //***If statement to capture what happens when score matches cpu guess and what happens when it does not ****//
    if (cpuRandom === crystalTotals) {
      wins++;
      crystalTotals = 0;
      reset();
      console.log("number of wins: " + wins);
      
      
    } else if (crystalTotals > cpuRandom) {
      losses++;
      crystalTotals = 0;
      reset();
      console.log("you lose");
      console.log("number of Losses: " + losses);
      
    }
  });
  //***generates random number from the computer (number between 19 -120) ****//
  function cpuGenNumber(max, min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
    
  }
  //YOU NO LONGER NEEDS THESE GLOBALLY SINCE I MOVED THEM TO THE RESET FUNCTION 
  // var cpuRandom = cpuGenNumber(19, 120);
  // $("#game-container").html(cpuRandom);
    // console.log(cpuRandom);
  
//THE REASON THIS IS NOT WORKING TO UPDATE YOUR CODE AFTER EACH WIN/LOSS IS THAT THIS CODE ONLY RUNS
//WHEN YOU FIRST LOAD THE PAGE; YOU NEED THIS CODE TO RUN AFTER EACH WIN/LOSS AS WELL.
//I MOVED IT TO THE RESET FUNCTION SINCE YOU CALL RESET() AFTER EACH WIN/LOSS.
// $("body").find("#gameScore-container").html("Wins: " + wins + "\n\nLosses: " + losses); // this is not working, wins and losses are not being tracked/incremented
var totalScore = $("<div>");
totalScore.attr("class", "totalScore");
$("#container").append(totalScore);
totalScore.addClass("Total Score");
totalScore.text(crystalTotals);
$(".score-div").html("<p>"+"Your total Score is:"+"</p>");
  
});