class Department {
    // Public - Allow Field To Be Accessed
    public name: string = "Default";
    // Read Only - No Modifications
    readonly id: string = "N/A";
    // Protected - Make Available With Inheritence
    protected employees: string[] = [];
    // Private - To Lock Down Field
    // private employees: string[] = [];
    constructor (id: string, n: string) {
        this.name = n;
        this.id = id;
    }
    // "This" Type- Matches Class Scrucutre
    describe(this: Department){
       console.log("Department: ", this.id, this.name);
    }
    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployeeInfo(){
        console.log("Employee Count: ", this.employees.length);
        console.log("Employees: ", this.employees);
    }
}

// Abstract Class - Forces Classes To Have Abstract Methods
abstract class DepartmentAlt {
    static fiscalYear = 2020;
    private employees: string[] = [];
    // Constructor Shorcut For Properties
    constructor (readonly id: string, public name: string) {}
    // Abstract Method - Require Each Class To Have This Function
    abstract describe(this: DepartmentAlt): void;
    // Static Method
    static createEmployee(name:string){
        return {name:name}
    }
    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployeeInfo(){
        console.log("Employee Count: ", this.employees.length);
        console.log("Employees: ", this.employees);
    }
}

// Inheritence - Extending Class
class ItDepartment extends DepartmentAlt {
    admins: string[];
    constructor(id: string, admins: string[]){
        // Super  To Run Base Class Constructor
        super(id, "Tech Dept");
        this.admins = admins;
    }
    // Used To Comply With Abstract Method
    describe() {
        console.log("Tech Dept ID: ", this.id);
    }
}

class AccountingDepartment extends Department {
    // Singleton - Assure Only One Instance
    // private static instance: AccountingDepartment; 
    private lastReport: string;
    // Getter
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error("No Report Found");
    }
    // Setter
    set mostRecentReport(value:string){
        if(!value){
            throw new Error("No Report Provided");
        }
        this.addReport(value);
    }
    // Singleton - Assure Only One Instance
    // private constructor(id: string, private reports: string[]){
    constructor(id: string, private reports: string[]){
        super(id, "Accounting Alt");
        this.lastReport = reports[0];
    }
    // Singleton - Assure Only One Instance
    // static getInstance(){
    //     if(this.instance){
    //         return this.instance;
    //     }
    //     this.instance = new AccountingDepartment("d2", []);
    //     return this.instance;
    // }
    // Used For Abstract Method
    describe(): void {
        console.log("Accounting Dept Empolyees: ", this.employees);
    }
    addReport(text:string): void{
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports(): void{
        console.log("Reports: ", this.reports);
    }
    addEmployee(name: string): void {
        if(name === "Max"){
            return;
        }
        this.employees.push(name);
    }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Tony");
accounting.addEmployee("Jen");
console.log(accounting);
accounting.describe();
accounting.printEmployeeInfo();

// Will Not Work On Abstract Class - Remove Abstact To Run
// const accountingAlt = new DepartmentAlt("d2", "Accounting Alt");
// accountingAlt.addEmployee("Joe");
// accountingAlt.addEmployee("Mike");
// console.log(accountingAlt);
// accountingAlt.describe();
// accountingAlt.printEmployeeInfo();

const employeeOne = DepartmentAlt.createEmployee("KK");
console.log("New Employee: ", employeeOne);
console.log("Fiscal Year: ", DepartmentAlt.fiscalYear);

const iTDept = new ItDepartment("d3", ["Tony"]);
console.log(iTDept);

const accountDept = new AccountingDepartment("d4", ["Balance Sheet"]); 
accountDept.addReport("Income Statement");
accountDept.getReports();
// Max Should Be Blocked
accountDept.addEmployee("Max");
accountDept.addEmployee("Elle");
accountDept.printEmployeeInfo();
accountDept.getReports();
// Overwritting Class Method
accountDept.describe();
// Using Setter
accountDept.mostRecentReport = "Cash Flow";
// Using Getter
console.log(accountDept.mostRecentReport);

// Object Literal Trying To Directly Manipulate
// const accountingCopy = {name: "Accounting Alt", describe: accounting.describe}
// accountingCopy.describe();
