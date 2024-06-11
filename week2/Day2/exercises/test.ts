let academyUsers:Object = {empno:1234,empname:"Thangaraj",age:11,salary:34567.77
                            };


const updateUsers = (users:Object) => {
  const copy:any = { ...users}
  for (const key in copy) {
    copy[key].age = 21
  }
  return copy
}

const updatedUsers = updateUsers(academyUsers)
console.log(updatedUsers);