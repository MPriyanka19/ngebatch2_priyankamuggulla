export let num=1;
//console.log(num[0]);
let arr=["Type Script", "Java Script","Java"];
//let arr: Array<string> =["Type Script", "Java Script","Java"];
console.log(arr[2]);

export let emp1 = {
    empno : 1111,
    empname : "Accenture",
    age:44,
    salary : 34567.77,
    DisplayEmployee : function ()
    {
        console.log("Hellooooo");
    },
    hobbies : ["Singing","Jogging","Swimming"],
    reportee : {empno : 2222, empname : "Bangalore" , State: "Telangana"}
}
 

console.log("Employee Name = ",emp1.empname);
emp1.DisplayEmployee();
console.log("Second Hobby of Emp2 = ",emp1.hobbies[1]);
console.log("Emp2's reportee's name = ",emp1.reportee.empname);
