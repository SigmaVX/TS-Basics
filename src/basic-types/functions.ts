// Explicit Define Return Value
const addExplicit = (n1: number, n2: number): number => {
	return +n1 + +n2;
};

// No Return - Void Return Type 
const addResult = (num: number): void => {
	console.log("Result: ", num);
};
addResult(addExplicit(10, 2));


// Function Type
let combineValues: (a: number, b: number) => number;

// Will Verify Add Eplicity Matches Function Type
combineValues = addExplicit;
console.log(combineValues(8, 2));

// Callback Type
const addAndHandle = (n1: number, n2: number, cb: (a: number) => void) => {
	const result = n1 + n2;
	cb(result);
};
addAndHandle(10, 20, (result) => {
	console.log(result);
});