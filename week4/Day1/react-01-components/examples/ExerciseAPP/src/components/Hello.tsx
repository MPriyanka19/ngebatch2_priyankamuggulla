export default function MsgWrite() {
    return <p>Welcome to the React App</p>
}
export const HelloFun = () => {
    const msg = "Happy to see you here"
    const WelcomeUser = (user:string):JSX.Element => {
        if (user) return <div>Great Learning {user}</div>
        return <div>Great learning user</div>
    }
    const student = {
        id: 75,
        name: "Priya",
        age: 24,
        subject: ["Java", "Python", "React"],
        isPass:true
    }
    return (
      <>
        <p>{msg}</p>
        <p>{WelcomeUser("Priya")}</p>
        <p>{`Age of ${student.name} is ${student.age}`}</p>
        <p>{`Favourite subject of ${student.name} is ${student.subject[1]}`}</p>
      </>
    );
    
}