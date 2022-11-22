// Interface
interface Named {
    readonly name: string;
    // Optional Property
    outputName?: string;
}

// Extending Interface
interface Greetable extends Named {
    greet(phrase: string): void;
}

// Function Interface
interface AddFn {
    (n1: number, n2: number):number;
}

// Using Interface
class Person implements Greetable {
    name:string;
    age?: number;
    // Optional Param In Constructor
    constructor(name:string, age?:number) {
        this.name = name;
        if(age){
            this.age = age;
        }
    }
    greet(phrase: string): void {
        if(this.age){
            console.log(`${phrase} ${this.name} you are ${this.age}`); 
        }else{
            console.log(`${phrase} ${this.name}`); 
        }
    }
}

let user1 = new Person("Tony", 45);
user1.greet("Hi");
let user2 = new Person("Jen");
user2.greet("Hi");

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
console.log(add(2,5));
