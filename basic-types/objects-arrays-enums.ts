enum Role {
	ADMIN = "Admin",
	SUPPORT = 100,
	AUTHOR = "5"
};

const personTypeInference = {
	name: "Tony",
	age: 40,
	stuff: ["SCUBA", 10, true],
	role: Role.ADMIN
};

const personExplicit : {
	name: string,
	age: number,
	hobbies: string[],
	role: [number, string]	
} = {
	name: "Jen",
	age: 39,
	hobbies: ["reading", "walking"],
	role: [1, "Tester"]
};

console.log(personTypeInference.role);
console.log(personExplicit.role);