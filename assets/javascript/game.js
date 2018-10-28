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

        // Set up the random number to be guessed and update UI
        randomNumToGuess = setRandomNumToGuess();
        $(".random-number").text(randomNumToGuess);

        // Display wins, losses, and total score (set to zero) and update UI
        totalScore = 0;
        updateUI();
    };

    // Display wins, losses, and total score
    function updateUI () {
        $(".wins").text(wins);
        $(".losses").text(losses);
        $(".score-report").text(totalScore);
    }

    // Returns a random number between 1 - 12
    function setRandomHiddenValue() {
        let random = Math.floor(Math.random() * 12) + 1;    // Yields a number 1 to 12, inclusive
        return random;
    };

    // Returns a random number between 19 - 120
    function setRandomNumToGuess() {
        let random = Math.floor(Math.random() * 102) + 19;    // Yields a number 19 to 120, inclusive
        return random;
    };

    // On page load
    initializeGame();

    // Events
    $("#gem-orange").on("click", function() {
    totalScore = totalScore + gems[0].randomHiddenValue;
    updateUI();
    checkWinOrLoss();
    });
    $("#gem-pink").on("click", function() {
    totalScore = totalScore + gems[1].randomHiddenValue;
    updateUI();
    checkWinOrLoss();
    });
    $("#gem-purple").on("click", function() {
    totalScore = totalScore + gems[2].randomHiddenValue;
    updateUI();
    checkWinOrLoss();
    });
    $("#gem-yellow").on("click", function() {
    totalScore = totalScore + gems[3].randomHiddenValue;
    updateUI();
    checkWinOrLoss();
    });

    // Check for a win or loss situation, driven by click events
    function checkWinOrLoss() {
        if (totalScore === randomNumToGuess) {        // We have a winner
            wins++;
            initializeGame()
        }
        else if (totalScore > randomNumToGuess) {     // We have a loser
            losses++;
            initializeGame();
        }
        else {
            updateUI;
        }
    };

}); // End document.ready