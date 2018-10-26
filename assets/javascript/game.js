// unit-4-game -- Star Wars Game by WBM, 10/23/18, javascript file 

$(document).ready(function() {

    // Variables
    let gameStateRoleSelection     = true;
    let gameStateOpponentSelection = false;

    // Array of (literal) roles that can be played -- see what I did there?
    var characters = [
        {name: "Luke Skywalker", hp: 10, player: true , imgURL: "assets/images/luke-skywalker.jpg"},
        {name: "Yoda"          , hp: 11, player: false, imgURL: "assets/images/yoda.jpg"},
        {name: "Boba Fett"     , hp: 10, player: false, imgURL: "assets/images/boba-fett.jpg"},
        {name: "Darth Vader"   , hp: 10, player: false, imgURL: "assets/images/darth-vader.jpg"}
        
    ];



    if (gameStateRoleSelection) {

        // On page load, show the roles available
        for (let i = 0; i < characters.length; i++) {
            // Testing
            console.log(characters[i].name + " " + characters[i].hp + " " + characters[i].player);

            // // Create a variable named "imgShow" equal to $("<div>");
            // var imgShow = $("<div>");

            // // Give each "imgShow" these classes
            // imgShow.addClass("d-inline img-container");

            // // Give each "imgShow" a data-attribute called "data-character".
            // imgShow.attr("data-character", i);

            // // 5. Then give each "letterBtns" a text equal to "letters[i]".
            // imgShow.text(characters[i].name);

            // //<div id="your-character"></div>
            // // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
            // $("#your-character").append(imgShow);

            // $("div.img-container").html("<img src=\"assets/images/luke-skywalker.jpg\" alt=\"Luke Skywalker\"><div class=\"char-name\">Luke Skywalker</div><div class=\"health-points\">Health Points: XXX</div>");

            // WORKING HERE... PUT IN THE IMAGE LOCATION URL VARIABLE! ----- use the ' instead of the escape\"", man!!!
            // $(".img-container").html( 
            //     '<img src=' + '"'  + characters[i].imgURL + '"' + '  alt=' + '"' + characters[i].name + '>' + 
            //     '<div class=' + '"char-name">' + characters[i].name + '</div>' + 
            //     '<div class=' + '"health-points">' + 'Health Points: ' + characters[i].hp + '</div>');

                // $("#laps").append(stopwatch.time + "<br>");

            // // Build a character container div for grouped role data display tile
            // var characterContainer = $("<div>");
            // characterContainer.addClass("d-inline img-container");





            //     $("#your-character").append('<img src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">');
            //     $("#your-character").append('<div class="char-name">Luke Skywalker</div>');
            //     $("#your-character").append('<div class="health-points">Health Points: XXX</div>');

                // REFERENCE
                // var audioElement = document.createElement("audio");
                // audioElement.setAttribute("src", "assets/captainplanet24.mp3");

            // <div class="d-inline img-container">
            //     <img src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker">
            //     <div class="char-name">Luke Skywalker</div>
            //     <div class="health-points">Health Points: XXX</div>
            // </div>

            // The content of <div class="demo-container"> can be set like this:
            // $( "div.demo-container" )
            // .html( "<p>All new content. <em>You bet!</em></p>" );


            }

    }


    






}); // End document.ready