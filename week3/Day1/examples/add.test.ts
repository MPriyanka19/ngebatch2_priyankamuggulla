import {add} from './add'
describe("to test the add module",()=>{
    
        let res:number
        //Arrange
        console.log("setup the data")
        
        //Act
        console.log("call the function");
        beforeEach(()=>{
            res=add(34,45)
        })
        it('add two numbers is expected to be 79',()=>{
        //Assert
        //console.log("compare the actual and expected ")
            expect(res).toBe(79)
        
    })
})

describe("to test the add module for one postive and negative number",()=>{
    
    let res:number
    //Arrange
    console.log("setup the data")
    
    //Act
    console.log("call the function");
    beforeEach(()=>{
        res=add(34,-45)
    })
    it('add two numbers is expected to be -11',()=>{
    //Assert
    //console.log("compare the actual and expected ")
        expect(res).toBe(-11)
    
    })
})

describe("to test the add module for two negative numbers",()=>{
    
    let res:number
    //Arrange
    console.log("setup the data")
    
    //Act
    console.log("call the function");
    beforeEach(()=>{
        res=add(-4,-45)
    })
    it('add two numbers is expected to be 41',()=>{
    //Assert
    //console.log("compare the actual and expected ")
        expect(res).toBe(-4)
    
})
})