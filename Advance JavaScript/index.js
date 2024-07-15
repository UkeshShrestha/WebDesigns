//CALCULATOR//
// function add(num1, num2){
//     return num1+num2;
// }

// function subtract(num1, num2){
//     return num1-num2;
// }

// function multiply(num1, num2){
//     return num1*num2;
// }

// function divide(num1, num2){
//     return num1/num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1,num2);
// }

// *****************************************************************************************8

//CREATING OBJECTS

// var houseKeeper1 = {
//     name: "Priya",
//     age: 24,
//     hasWorkPermit: true,
//     languages: ["Nepali", "Hindi", "English"]
// }

// alert("My name is " + houseKeeper1.name)

//*********************************************************************************************** */

//CONSTRUCTOR FUNCTION

// function HouseKeeper(name, age, hasWorkPermit, languages){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// var houseKeeper1 = new HouseKeeper("Ukesh" , 24 , true, ["English", "Hindi", "Nepali"]);
// console.log("Here is my information:" + "\n" + houseKeeper1.name);

//*******************************************************************************************************8 */

//DRUM - KIT

for(var i=0; i<document.querySelectorAll(".drum").length; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener( "click", function(){
        var buttonInnerHTML = this.innerHTML;
        // switch (buttonInnerHTML) {
        //     case "w":
        //     var tom1 = new Audio("./sounds/tom-1.mp3");
        //     tom1.play();
        //         break;

        //         case "a":
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;

        //         case "s":
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;

        //         case "d":
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;

        //         case "j":
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;

        //         case "k":
        //         var crash = new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;

        //         case "l":
        //         var kickBass = new Audio("sounds/kick-bass.mp3");
        //         kickBass.play();
        //         break;

        //     default: console.log(buttonInnerHTML)
        // }
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    } );
}

////DETECTING KEYBOARD PRESS////

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
            break;

            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default: console.log(key);
}
}

//BUTTON ANIMATION//

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}

//********************************************************************************************* */

//METHOD//
// function HouseKeeper(name, age, hasWorkPermit, languages,cleaning){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.cleaning = cleaning;
// }

// var houseKeeper2 = new HouseKeeper("Yuki", 22, true, ["Japanese", "Chinese"], "Cleaning in progress");

// alert(houseKeeper2.cleaning);

/***************************************************************************************************************** */

