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
	// this function change the operation elements from string to numbers, so the calculation can be made
	for (let i = 0; i < operation.length; i++) {  
		if (operation[i] !== '+' && operation[i] !== '-' && operation[i] !== '/' && operation[i] !== '*') {
			operation[i] = Number(operation[i])
		}
	}
}

function populateDisplay() {
	// clear display first if there is an operator on it
		for (let i = 0; i < arrayOfOperators.length; i++) {
			if (display.textContent.includes(arrayOfOperators[i])) {  
				operation.push(arrayOfOperators[i])
				clearDisplay()
			}
		}
		//clear display first if result is on it
		if(displayValue[0] === result) {           
			clearDisplay();
		}
		// add clicked button text to display text + push the display text content to the display value
		display.textContent += this.textContent;		
		displayValue[0] = display.textContent;			
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
const decimal = document.querySelector('#decimal')
let displayValue = []
let operation = []
let result




clearButton.addEventListener('click', resetAll);

digits.forEach((digit) => {
	digit.addEventListener('click', populateDisplay) 			
})

decimal.addEventListener('click', () => {
	if (display.textContent.includes('.')) return;
	populateDisplay.call(decimal);
	
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
	operation.push(displayValue[0]);  
	operationToNumber();
	if(operation[2] === 0 && operation[1] === "/") {
		result = 'L0L';
		display.textContent = result;
		displayValue[0] = result;
		operation = []
		return result;
	}
	 result = operate(operation[1], operation[0], operation[2])
	 display.textContent = result;  //SHOW THE RESULT ON THE DISPLAY
	 displayValue = [];		// RESET THE DISPLAY VALUE
	 displayValue.push(result);  
	 operation = []
})


// Problems to fix:
// * show the result of the previous calculation in a separate div
// * add keyboard support
// * add power on/off button
