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

function clearDisplay() {
	display.textContent = ''
}


const display = document.querySelector('.display')
const digits = document.querySelectorAll('.button.digit')
const operators = document.querySelectorAll('.button.operator')
const equalButton = document.querySelector('#equal')
const arrayOfOperators = []
let displayValue = []
let operation = []






digits.forEach((digit) => {
	digit.addEventListener('click', () => { 			//	ADD AN EVENT LISTENET FUNCTION TO THE DIGITS	
		for (let i = 0; i < arrayOfOperators.length; i++) {
			if (display.textContent.includes(arrayOfOperators[i]) === true) {  //CHECKS FOR OPERATOR ON DISPLAY AND RESET DISPLAY
				operation.push(arrayOfOperators[i])
				display.textContent = ''
			}
		}
		display.textContent += digit.textContent;		//  ADD THE NUMBERS ON BUTTONS TO THE DISPLAY
		displayValue[0] = display.textContent;			//  PUSH THE ACTUAL CONTENT TO A DISPLAY VALUE ARRAY
		console.log(`display Value is ${displayValue}`)
	})
})

operators.forEach((operator) => {
	arrayOfOperators.push(operator.textContent)
})

console.log(arrayOfOperators)

operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		operation.push(displayValue[0]);							 		//PUSH THE ACTUAL VALUE TO OPERATION
		console.log(`operation Value is ${operation}`);	 		
		displayValue[0] = ''	 		//RESET THE DISPLAY VALUE
		display.textContent = ''	 		//RESET THE TEXT CONTENT OF DISPLAY
		display.textContent += operator.textContent			// ADD OPERATOR TO DISPLAY CONTENT
		
	})
})