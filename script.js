console.log("hello script js");

/* var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW SOMETHING HAPPENED";
  return output;
}; */

var name = prompt("What is your name?")

var choice1 = prompt("Hello " +name+ "! You woke up in a dungeon. Which way do you want to go? Door 1 or Door 2");

confirm("You choose to open " +choice1);

// var doorChoice1 = "Door 1"
// var doorChoice2 = "Door 2"

var inputHappened = function(currentInput){
    console.log(currentInput);

// Start Game

if(currentInput === "Door 1") {
var doorChoice = "Door 1";
    return("You entered " + doorChoice + "." + "You see a matchstick and water. Which would you like to pick up?")
}   else if (currentInput === "Matchstick") {
    return("You can now see the dungeon clearer. You see a key and a knife. Which would you pick?")
}   else if (currentInput === "Key"){
    // Outcome of choice 2. Choose key or knife. In this case, person chose Key.
    return("You have opened the secret passage way. You found a hammer and a screw. Pick carefully.")
}


// Choose between Hammer or Screw from Choice 3. User chosed Hammer.
    else if (currentInput === "Hammer"){
    return("You can hit the wooden door to knock it down. You can now see a bit of light. ")
}   else if (currentInput === "Screw"){
    return("Sorry, the screw is too big to open the door or do anything. You are now stuck. Please try again.")
}   else if (currentInput = "Knife"){
    return("You see an unknown creature in front. Do you stab with knife or greet?")
}

// Outcome of Choice7. Stab or Greet. User chooses Greet.
    else if (currentInput === "Greet"){
    return("Let me show you the way. Follow me.")
}
// Outcome of Choice7. Stab or Greet. User chooses Stab.
    else if (currentInput === "Stab"){
    return("You have killed the creature who can save you. Game over.")
}







// Choice 2 of matchstick and water. In this case, person chose Water.
    if (currentInput = "Water"){
    return("Do you want to drink the water or keep for later use?")
}

//Outcome of choice 2. In this case, person chose water.

            // var choice_D_K = currentInput;
            if (currentInput === "Drink") {
                return ("Your health is restored. You may carry on your journey to escape the dungeon.")
            }

// Outcome of choice 2. This case, person keeps water. Keeping it would result in game end.

                  // var choice_D_K = currentInput;
                  else if (currentInput === "Keep") {
                    return ("Sorry. You have fainted due to dehydration.")
            }


 else if(currentInput === "Door 2") {

var doorChoice2 = "Door 2";
return("You entered " + doorChoice2 + "." + "You see a broom and a skull. Which would you like to pick up?")

} else {
    return("Please try again")
}


};




// else if(currentInput ==== choice21) {
// var choice21 = "Water";

// return("Do you want to drink or keep it?")

// } else {
//     return("Please try again")
// }