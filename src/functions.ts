const add = (n1: number, n2: number): number => {
	return +n1 + +n2;
};

const printResult = (num: number): void => {
	console.log("Result: ", num);
};

const addAndHandle = (n1: number, n2: number, cb: (a: number) => void) => {
	const result = n1 + n2;
	cb(result);
};

printResult(add(10, 2));

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 2));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
