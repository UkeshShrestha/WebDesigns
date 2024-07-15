// for(var i = 0; i < 100; i++ ){
//     if(i%2 === 0)
//     document.write(i + "<br>");
// }
/*********************************************************************************8 */


//FIZZBUZZ FOR LOOPS

// var output = [];

// function fizzBuzz(){
//     for(var count = 1; count<100; count++){
//         if(count%3 === 0 && count%5 === 0){
//             output.push("FizzBuzz");
//         }
//         else if(count%3 === 0){
//             output.push("Buzz");
//         }
//         else{
//             output.push(count);
//         }
//     }
//     console.log(output);
// }
// console.log(fizzBuzz());
//*********************************************************************************************** */

// FIBONACCI CHALLANGE

function fibanachiGenerator(n){
    var output = [];
        if(n===1){
            output = [0];
        }
        else if(n===2){
            output = [0, 1];
        }
        else{
            output = [0, 1];
            output.push(output[output.length -2] + output[output.length -1]);
        }
        for(var i = 2; i<n; i++){
            output.push(output[output.length -2] + output[output.length -1]);
        }
        return output;
    }


console.log(fibanachiGenerator(6));