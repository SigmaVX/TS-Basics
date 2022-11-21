let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Slytherin";

// Unknown Type Check
if (typeof userInput === "string") {
	userName = userInput;
}

// Never Type
const generateError = (message: string, code: number): never => {
	throw { message: message, errorCode: code };
};

generateError("Boop Bee Doo", 500);
