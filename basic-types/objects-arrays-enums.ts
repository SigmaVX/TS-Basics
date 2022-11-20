// Enum Examples
enum Role {
	ADMIN = "Admin",
	SUPPORT = 100,
	AUTHOR = 500
};

enum RoleAltOne {ADMIN,SUPPORT,AUTHOR};
enum RoleAltTwo {ADMIN = 1,SUPPORT,AUTHOR};

//  Object With Inference
const personTypeInference = {
	name: "Tony",
	age: 40,
	stuff: ["SCUBA", 10, true],
	role: Role.ADMIN
};

// Object Explicit Type With Tuple
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