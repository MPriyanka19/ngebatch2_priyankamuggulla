class Employee
{
    empno:number;
    empname:string;
    age:number;
    salary:number;
    constructor(eno:any ,en:any , a:any , s:any)
    {
        this.empno=eno;
        this.empname = en;
        this.age=a;
        this.salary=s;
    }
    DisplayEmployee()
    {
        console.log("::::::::::::Employee Details:::::::::::::")
        console.log("Employee No : ",this.empno);
        console.log("Employee Name : ",this.empname);
        console.log("Employee Age : ",this.age);
        console.log("Employee Salary : ",this.salary);
    }
}
 

let emp2 = new Employee(2222,"Bangalore",48, 342312.22);
emp2.DisplayEmployee();

let emp:Employee = new Employee(23,"Apple",44, 342312.22);
emp.DisplayEmployee();