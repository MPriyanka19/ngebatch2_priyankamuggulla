/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
  it('should add two integers', () => {
    // Arrange: Setup variables here(a=2,b=3)
    // Act: Call function here
    // Assert: Check results here
    expect(add(2,3)).toBe(5)

  })

  it('will add strings and numbers', () => {
    // Arrange: Setup variables here
    // Act: Call function here
    // Assert: Check results here
    expect(add('NGE',2)).toBe('NGE2')
  })
})

 describe('When calling the safeMultiply function', () => {

  it('should multiply two integers', () => {
    // Arrange: Setup variables here
    // Hint: happy case
    // Act: Call function here
    // Assert: Check results here
    expect(safeMultiply(2,3)).toBe(6)

  })

  it('will throw an error when parameter a is bad', () => {
    // Arrange: Setup variables here

    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
    // Assert
    // Hint: use "toThrow()"
    const fun=()=>safeMultiply('M',9)
    expect(fun).toThrow(new Error(`Parameters a and b must be numeric but got a='M' and b='9'`))
  })
  
    
  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
        
    // Act: Call function here
        
    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
    try{
      safeMultiply(6,'P')
    }
    catch(b:any){
      expect(b.message).toBe(`Parameters a and b must be numeric but got a='6' and b='P'`)
    }
  })

})
 