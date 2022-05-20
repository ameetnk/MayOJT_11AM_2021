
import { Department } from './department';
import {Employee} from './employee';

export class EmployeeDetails implements Employee{
    fname: string;
    lname: string;
    salary:number;
    dept:Department;

    constructor(f:string,l:string,salary:number,role:string){
        this.fname=f;
        this.lname=l;
        this.salary=salary;
        this.dept=new Department(role);
    }
  
    Display() {
        console.log(`
            First Name  :: ${this.fname}
            Last Name   :: ${this.lname}
            Salary      :: ${this.salary}
            Role        :: ${this.dept.getRole()}
        `);
    }
    
}