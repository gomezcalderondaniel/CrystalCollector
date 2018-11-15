
  // set initial variables for wins and losses as 0
  var winCount = 0;
  var lossCount = 0;
  
  // set variables for targetNumber and yourNumber
  var targetNumber;
  var yourNumber;
  
  // function to set targetNumber randomly
  function setTargetNumber() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // start button function to set crystal numbers, start game and empty the message area
  $("#newGame").on("click", function() {
    setCrystalNumbers();
    startGame();
    $("#mesage").empty();
  });
  
  // function to start the game
  function startGame() {
    // set targetNumber using random number function with min and max
    targetNumber = setTargetNumber(20, 50);
    // show targetNumber text to jQuery html
    $("#targetNumber").text(targetNumber);
    // set yourNumber as O to start the game
    yourNumber = 0;
    // show yourNumber text to jQuery html
    $("#yourNumber").text(yourNumber);
  }
  
// excute startGame function
  startGame();
  
  // array of crytal images to display
  var crystalImages = ["http://files.softicons.com/download/object-icons/free-crystal-icons-by-aha-soft/png/256x256/Zircon.png", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];
// empty array for future crystal images randomly chosen
  var crystalOptions = [];
// empty array for future numbers randomly chosen
  var numberOptions = [];

 // create for loop to create crystals to display to the page
  for(var i = 0; i < crystalImages.length; i++) {
    // create a crystal variable to the page (to image tag)
    var crystal = $("<img>");
   // give each crystal a src img given by crystalImages array
    crystal.attr("src", crystalImages[i]);
    // add class to allow CSS to take effect
    crystal.addClass("crystal-image");
    // push each crystal to crystalOptions array
    crystalOptions.push(crystal);
    // add crystalOptionsarray to the page (to #crystalDisplay)
    $("#crystalDisplay").append(crystal);
  }

// function to assign crystal number 
function assignCrystalNumber() {
  // loop through crystalOptions to give number for each crystal
  for(var i = 0; i < crystalOptions.length; i++) {
    var crystal = crystalOptions[i];
    
  }
}