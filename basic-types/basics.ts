const addNumbers = (n1: number, n2: number, showResult: boolean, phrase: string) => {
	if (showResult) {
		console.log(phrase, n1 + n2);
	}
	return n1 + n2;
};

// Adding Explicity Types Variables
// Not Recommended Becasue of TS Type Inference 
const number1 : number = 1;
const number2 : number= 5;
const printResult : boolean = true;
let phrase : string = "Result Is: ";

addNumbers(number1, number2, printResult, phrase);
