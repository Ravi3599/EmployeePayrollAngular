//Model class with different fields
export class Employee{
    firstName:string;
    lastName:string;
    profilePic:string;
    gender:string;
    department:string;
    salary:number;
    date:any;
    notes:string;

    constructor(firstName:string,lastName:string,profilePic:string,gender:string,department:string,salary:number,date:any,
            notes:string){
                this.firstName=firstName;
                this.lastName=lastName;
                this.profilePic=profilePic;
                this.gender=gender;
                this.department=department;
                this.salary=salary;
                this.date=date;
                this.notes=notes;
            }
}