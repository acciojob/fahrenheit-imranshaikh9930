function toFahrenheit(celsius) {
 // Write your code here
	let num = (celsius * 9/5) + 32;

	num = num.toFixed(2);

	return num;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
