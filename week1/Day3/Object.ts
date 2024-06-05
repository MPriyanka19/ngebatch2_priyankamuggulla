export let emp1={
    eno:175,
    ename:"Priyanka",
    sal:4300,
    age:24,
    DisplayEmployee :function() {
        return "This is Displayfunction";
    },
    work : ():string => "Im working",
    reportsTo:{
        empno:123,
        ename:"Myself"
    }

};
let empno=emp1.eno;
let {eno,ename,sal,age,DisplayEmployee,work}=emp1;
console.log("In Object file unsing destructing:",emp1.eno);
console.log("without destructuring",empno);
let g = function(){
    return "HELLO"
}
console.log(g());


