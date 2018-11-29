const factorial = number => {
	if (number === 0 || number === 1) {
		return 1;
	}
	return number * factorial(number - 1);
};

console.log(factorial(5));