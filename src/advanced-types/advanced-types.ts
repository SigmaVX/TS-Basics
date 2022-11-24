type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// Intersection Type Objects - Combining Multiple Types
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

type Combinable = string | number;
type Numeric = number | boolean;
// Intersection Type Other Types - Combining Multiple Types
type Universal = Combinable & Numeric;

const addStuff = (a: Combinable, b: Combinable) : Combinable => {
    // Type Guard - Type Check
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();
    }else{
        return a + b;
    }
}


// Function Overload
function addMoreStuff(n1: string, n2: string) : string;
function addMoreStuff(n1: number, n2: number) : number;
function addMoreStuff(n1: string, n2: number) : string;
function addMoreStuff(n1: number, n2: string) : string;
function addMoreStuff(a: Combinable, b: Combinable) : Combinable {
    // Type Guard - Type Check
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();
    }else{
        return a + b;
    }
}

// Wont Run BC of Function Overload
// let result = addMoreStuff(1,2);
// result.split(" ")
let result = addMoreStuff("hi", "what").split(" ");

const printEmployeeInfo = (emp: UnknownEmployee): void =>{
    console.log("Name: ", emp.name);
    // Type Cuard - Object Property
    if("privileges" in emp){
        console.log("Privileges: ", emp.privileges);
    }
    if("startDate" in emp){
        console.log("Start Date: ", emp.startDate);
    }
}

const e1: ElevatedEmployee = {
    name: "Tony",
    privileges: ["create-server"],
    startDate: new Date()
};

printEmployeeInfo(e1);

class Car {
    drive(){
        console.log("Driving a Car")
    }
}

class Truck {
    drive(){
        console.log("Driving a Truck")
    }
    loadCargo(amount: number){
        console.log("Loading Cargo: ", amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle): void =>{
    vehicle.drive();
    // Type Check - Instance Of Class Check
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    // Type Literal
    type: "bird";
    flyingSpeed: string;
}

interface Horse {
    // Type Literal
    type: "horse";
    runningSpeed: string;
}

type Animal = Bird | Horse;

const animalSpeed = (animal: Animal): void =>{
    let  speed: string;
    // Type Guard - Discriminate Union With Literal
    switch(animal.type){
        case"bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            speed = "Unknown"
    }
    console.log("Animal Moving At: ", speed);
}

animalSpeed({type: "bird", flyingSpeed: "30"});
animalSpeed({type: "horse", runningSpeed: "20"});

// Type Casting - For Unkonw HTML Elements
// const userInputElement = <HTMLInputElement> document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
userInputElement.value = "Hi"

// Index Propoperty - Set Type on Uknown Key
interface ErrorContainer {
    id: string;
    [key: string]: string;
}

const errorBag: ErrorContainer ={
    // "1": "This is a string number but would conflict with the 1 below",
    1: "A number can compile to a string in teh index property",
    id: "123",
};

// Optional Chaining
const fetchUserData = {
    id: "u1",
    name: "Tony",
    job: {title: "CEO", description: "My Super Co."}
}

// Checks in JS
console.log(fetchUserData.job && fetchUserData.job.title);
// Checks in TS Using Option Chaining
console.log(fetchUserData?.job?.title)

// Null Coalescing
const userText = null;
const storedData = userText ?? "Default";
