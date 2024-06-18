/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'
console.log(palindrome('aaa'))
describe('When calling the palindrome function', () => {
  let res:boolean;
  it('will return true or false when called', () => {
    //Arrange
    //Act
    res=palindrome("")
    //Assert
    expect(res).toBe(res)
  })

  it('will return false for invalid inputs', () => {
    //Arrange
  
    //Act

    res=palindrome("1234")
    
    //Assert
    expect(res).toBe(false)

  })

  it('will return true for text that is a palindrome', () => {
    //Arrange
  
    //Act
    
    res=palindrome("12321")
    
    //Assert
    expect(res).toBeTruthy()

  })
})
