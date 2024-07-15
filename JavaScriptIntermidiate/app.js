// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

//LOVE CALCULATOR

var name1 = prompt("Name: ");
var name2 = prompt("Name: ");
var loveCalculate = Math.random();
loveCalculate = loveCalculate * 100;
loveCalculate = Math.floor(loveCalculate) + 1;

alert(loveCalculate + "%");

if(loveCalculate <= 30){
    alert("You are not compatible");
}
else if(loveCalculate <= 40 && loveCalculate >= 31 ){
    alert("You might be compatible");
}
else if(loveCalculate <= 60 && loveCalculate >= 41 ){
    alert("You are slightly compatible");
}
else if(loveCalculate <= 80 && loveCalculate >= 61 ){
    alert("You are compatible");
}
else if(loveCalculate <= 20 && loveCalculate >= 11 ){
    alert("You are best couple");
}

else{
    alert("You are not compatible");
}