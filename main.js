let calc = prompt('Welcome to the calculator app, hit B for the basic fucntions. A for advanced calculator. C for BMI functions');

if (calc ==='b'){
    let number1 = prompt ('what is your first number?');
    let operator = prompt ('please select the operator you require, + - / *')
    let number2 = prompt ('what is your second number?')
      if(operator === "+"){
         alert('your number is ' + add(number1,number2)); //why do the parameters have to be here if the fucntion already has them?
      }else if (operator === '*'){
        alert('your number is ' + multiply(number1,number2));
      }else if (operator === '/'){
        alert('your number is ' + divide(number1,number2));
      }else if(operator === '-'){
        alert('your number is ' + minus(number1,number2));
      }else{
        alert('Please enter a valid operator')
      }

}
function add(number1, number2){
  return parseInt((number1)) + parseInt((number2))
}

 function multiply(number1, number2){
   return parseInt(number1) * parseInt(number2)
}

function divide(number1, number2){
  return parseInt(number1) / parseInt(number2)
}
function minus(number1,number2){
  return parseInt(number1) - parseInt(number2)
}

if (calc === 'a'){
  let advanced = prompt('Would you like to calculate a square root or power of?. A for power of or B for square root')
    if (advanced === "a"){
      let pow1 = prompt('What is your first number?')
      let pow2 = prompt ('what is your second number?')
    alert(power(pow1,pow2));
    }
    if (advanced === 'b'){
      let square = prompt("What number would you like the square root of?");
      alert(sqrt(square));
    }else{
      alert('Please enter a valid option')
    }
  }


function power(pow1, pow2){
  return Math.pow(pow1, pow2);
}

function sqrt(square){
  return Math.sqrt(square)
}

if(calc === 'c'){
  let metric = prompt("A for metric calculation or B for imperial.")
    if(metric === 'a'){
      let height = prompt('Please enter your height in Centremeters');
      let weight = prompt('Please enter your weight in kilograms');
      prompt(bmiMetric(height, weight));
 }
}


// function bmiMetric(height, weight){
//   return height / weight
// }
