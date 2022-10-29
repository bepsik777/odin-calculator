function add(a, b) {
	return a + b;
};

function substract(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, num1, num2) {
	if(operator == '+') {
		return add(num1, num2);
	} else if(operator == '-') {
		return substract(num1, num2);
	} else if(operator == '*') {
		return multiply(num1, num2)
	} else if(operator == '/') {
		return divide(num1, num2)
	}
}
function operationToNumber() {
	for (let i = 0; i < operation.length; i++) {  //THIS LOOP CHANGE THE OPERATION ITEMS FROM STRING TO NUMBERS
		if (operation[i] !== '+' && operation[i] !== '-' && operation[i] !== '/' && operation[i] !== '*') {
			operation[i] = Number(operation[i])
		}
	}
}

function clearDisplay() {
	display.textContent = ''
}

function resetAll() {
	display.textContent = ''
	displayValue = [];
	operation = [];
	result = '';
}

function logAll() {
	console.log(`displayValue is ${displayValue}`)
	console.log(`operation is ${operation}`)
	console.log(`result is ${result}`)
}


const display = document.querySelector('.display')
const digits = document.querySelectorAll('.button.digit')
const operators = document.querySelectorAll('.button.operator')
const equalButton = document.querySelector('#equal')
const clearButton = document.querySelector('#clear')
const arrayOfOperators = ['+', '-', '*', '/']
let displayValue = []
let operation = []
let result




clearButton.addEventListener('click', resetAll);

digits.forEach((digit) => {
	digit.addEventListener('click', () => { 			//	ADD AN EVENT LISTENET FUNCTION TO THE DIGITS	
		for (let i = 0; i < arrayOfOperators.length; i++) {
			if (display.textContent.includes(arrayOfOperators[i])) {  //CHECKS FOR OPERATOR ON DISPLAY AND RESET DISPLAY
				operation.push(arrayOfOperators[i])
				display.textContent = ''
			}
		}
		display.textContent += digit.textContent;		//  ADD THE NUMBERS ON BUTTONS TO THE DISPLAY
		displayValue[0] = display.textContent;			//  PUSH THE DISPLAY CONTENT TO A DISPLAY VALUE ARRAY
	})
})


operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		if (display.textContent === '') {
			return;
		}
		operation.push(displayValue[0]);			//PUSH THE ACTUAL VALUE TO OPERATION
		display.textContent = operator.textContent			// ADD OPERATOR TO DISPLAY CONTENT
		logAll();
		//
		if(operation.length === 3) {
			operationToNumber()
			result = operate(operation[1], operation[0], operation[2]);
			displayValue = [];		// RESET THE DISPLAY VALUE
			displayValue.push(result);  
			operation = [];
			operation.push(result)
		}
		//
	})
})


equalButton.addEventListener('click', () => {
	// if(operation[2] === 0 && operation[1] === "/") {
	// 	display.textContent = 'you kidding me?'
	// }
	operation.push(displayValue[0]);  
	operationToNumber();
	 result = operate(operation[1], operation[0], operation[2])
	 display.textContent = result;  //SHOW THE RESULT ON THE DISPLAY
	 displayValue = [];		// RESET THE DISPLAY VALUE
	 displayValue.push(result);  
	 operation = []
})