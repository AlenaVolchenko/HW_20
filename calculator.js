///var buttonPlus = document.getElementById('buttonPlus');
///var buttonMinus = document.getElementById('buttonMinus');
///var buttonMultip = document.getElementById('buttonMultip');
///var buttonDelen = document.getElementById('buttonDelen');

var operetionButton = document.getElementsByClassName('operationsButon');

var input1= document.getElementById('number1');
var input2= document.getElementById('number2');

function makeOperation ( operation) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

if (operation === '+') {
	var result = number1 + number2;
} else if (operation === '-') {
	var result = number1 - number2;
} else if (operation === '*') {
	var result = number1 * number2;
} else if (operation === '/') {
	var result = number1 / number2;
} else {
window.alert('operation in not');
}
window.alert(result);

}

function onOperation(evenObject) {
	var clickEvent = evenObject.currentTarget;
	var operationBce = clickEvent.innerHTML;
	makeOperation(operationBce);
}

///var operetionButton = [buttonPlus, buttonMinus, buttonMultip,buttonDelen];
for (var i = 0; i < operetionButton.length; i++) {
	var  button = operetionButton[i];
	button.addEventListener('click',onOperation)
}