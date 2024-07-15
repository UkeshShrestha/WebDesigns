function bmiCalculator(weight,height){
    var bmiResult = Math.round(weight/Math.pow(height,2));
    console.log(bmiResult);
}

bmiCalculator(72,1.8);