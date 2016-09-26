// Let's build a really simple calculator using what we know so far about JavaScript functions. We'll start with a program that prompts for the first number, then the second number, then alerts the sum.

function calculator(){
  var firstNum = prompt("#1");
  var secondNum = prompt("#2");
  var sum = parseInt(firstNum) + parseInt(secondNum);
  alert(sum);
}

calculator()
