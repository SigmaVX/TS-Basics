// Aliase - Union Type
type NumString = number | string;

// Aliase - Literal Type
type comboTypes = "as-number" | "as-text";

const combine = (input1: NumString, input2: NumString, resultType: comboTypes) => {
	let result: NumString;
	if ((typeof input1 === "number" && typeof input2 === "number") || resultType === "as-number") {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
};

const comboAges = combine(30, 60, "as-number");
console.log(comboAges);
const comboStringAges = combine("30", "60", "as-number");
console.log(comboStringAges);
const comboNames = combine("Tony", "Baloney", "as-text");
console.log(comboNames);
