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


const display = document.querySelector('.display')
const digits = document.querySelectorAll('.button.digit')
const operators = document.querySelectorAll('.button.operator')
let displayValue;




digits.forEach((digit) => {
	digit.addEventListener('click', () => {
		display.textContent += digit.textContent;
		displayValue = display.textContent;
		return displayValue;
	})
})

operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		const previousValue = displayValue;
		displayValue = 
	})
})