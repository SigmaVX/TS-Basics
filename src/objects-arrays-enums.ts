enum Role {
	ADMIN = "Admin",
	SUPPORT = 100,
	AUTHOR = "5"
}

const person = {
	name: "Tony",
	age: 40,
	hobbies: ["gaming", "reading"],
	role: Role.ADMIN
};

console.log(person.role);
