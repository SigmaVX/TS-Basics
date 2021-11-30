const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
	if (showResult) {
		console.log(phrase, n1 + n2);
	}
	return n1 + n2;
};

const number1 = 1;
const number2 = 5;
let printResult = true;
let phrase = "Result Is: ";

add(number1, number2, printResult, phrase);
