// unit-4-game -- Star Wars Game by WBM, 10/23/18, javascript file 

// Variables



// // Struct-like creater function
// function Role(name, power, player) {
//     this.name = name;
//     this.power = power;
//     this.player = player;
// };

// // Array of roles that can be played 
// var characters = [
//     new Role("Luke Skywalker", 10, true),
//     new Role("Yoda"          , 11, false),
//     new Role("Boba Fett"     , 12, false),
//     new Role("Darth Vader"   , 13, false)
// ];

var characters = [
    {name: "Luke Skywalker", power: 10, player: true},
    {name: "Yoda"          , power: 11, player: false},
    {name: "Boba Fett"     , power: 10, player: false},
    {name: "Darth Vader"   , power: 10, player: false}
    
];

// var testArray = [
//     {name: "Dave", power: 20, player: true},
//     {name: "Bill", power: 21, player: false},
//     {name: "Hash", power: 22, player: false},
//     {name: "Bobb", power: 23, player: false}
// ];

// On page load, show the roles available
for (let i = 0; i < characters.length; i++) {
    // Testing
    console.log(characters[i].name + " " + characters[i].power + " " + characters[i].player);

}

// Testing literal version of array
// for (let i = 0; i < testArray.length; i++) {
//     // Testing
//     console.log(testArray[i].name + " " + testArray[i].power + " " + testArray[i].player);

// }






