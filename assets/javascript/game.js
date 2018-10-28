// unit-4-game -- CrystalsCollector Game by WBM, 10/26/18, javascript file 

$(document).ready(function() {

    // Variables
    let randomNumToGuess = 0;
    let wins = 0;
    let losses = 0;
    let totalScore = 0;

    // Array of (literal) gems that can be played -- see what I did there?
    var gems = [
        {name: "orange",  randomHiddenValue: 0},    // BETWEEN 1 - 12
        {name: "pink",    randomHiddenValue: 0},
        {name: "purple",  randomHiddenValue: 0},
        {name: "yellow" , randomHiddenValue: 0}
    ];

    // Set up a fresh game to play
    function initializeGame () {
        // Set random hidden values of all gems
        for (let i = 0; i < gems.length; i++) {
            gems[i].randomHiddenValue = setRandomHiddenValue();
        }

        // Set up the random number to be guessed
        randomNumToGuess = setRandomNumToGuess();
        
        // Update variable
        totalScore = 0;


        // Update UI...
    };

    // Returns a random number between 1 - 12
    function setRandomHiddenValue() {
        let random = 5;     // CHANGE TO MATH.FLOOR/MATH.RANDOM GENERATOR FOR 1 - 12 RESULT
        return random;
    };

    // Returns a random number between 19 - 120
    function setRandomNumToGuess() {
        let random = 40;    // CHANGE TO MATH.FLOOR/MATH.RANDOM GENERATOR FOR 19 - 120 RESULT
        return random;
    };


    // On page load
    randomNumToGuess = setRandomNumToGuess();
    initializeGame();

    // Events




}); // End document.ready