/*
Run this with
> npm install
> npm test zoo-animals
*/

import { add } from './maths-utils'
import { addDolphinToPool, petThePenguins } from './zoo-animals'

describe('When adding a dolphin to the pool', () => {

  test('And speed is over 30 we get Speedy Alice', () => {
    // Arrange   
    // Act 
    // Assert
    // Hint: expect.objectContaining on name only
    const contain = expect.objectContaining({
      name : 'Speedy Alice',
      swimSpeedKph :50,
    })
     expect(addDolphinToPool(50)).toEqual(contain)
    
  })

  test('And speed is under 30 we get Slow Bob', () => {
    // Arrange
    // Act 
    // Assert
    // Hint: expect.objectContaining on name only
    const contain = expect.objectContaining({
      name : 'Slow Bob',
      swimSpeedKph :10,
    })
     expect(addDolphinToPool(10)).toEqual(contain)
  })

  test('Speedy Alice is a fast mammal with two flippers', () => {
    // Arrange
    // Act 
    // Assert
    // Hint: toStrictEqual the whole object
    const contain = expect.objectContaining({
      name : 'Speedy Alice',
      swimSpeedKph :50,
      flippers : 2,
      mammal : true
    })
     expect(addDolphinToPool(50)).toStrictEqual(contain)

  })

  test('Slow Bob is a slow mammal with two flippers', () => {
    // Arrange
    // Act 
    // Assert
    // Hint: toStrictEqual the whole object
    const contain = expect.objectContaining({
      name : 'Slow Bob',
      swimSpeedKph : 20,
      mammal : true
    })
     expect(addDolphinToPool(20)).toStrictEqual(contain)
  })
})

describe('When petting the penguins', () => {

  test('One penguin with one fish will be fed', () => {
    // Arrange
    // Act 
    // Assert
    // Hint: toStrictEqual the whole array
    const pen =[{
       name: 'A', 
       hungry: false, 
       flippers: 2, 
       mammal: false 
      }]
      expect(petThePenguins(1,1)).toStrictEqual(pen)
  })

  test('One penguin with no fish will be hungry', () => {
    // Arrange
    // Act 
    // Assert
    // Hint: toStrictEqual the whole array
    const pen =[{
      name: 'A', 
      hungry: true, 
      flippers: 2, 
      mammal: false 
     }]
     expect(petThePenguins(1,0)).toStrictEqual(pen)

  })

  describe('And there are not enough fish', () => {

    test('At least one penguin will be hungry', () => {
      // Arrange
      // Act 
      // Assert
      // Hint: expect.arrayContaining on one penguin
      const hun = expect.arrayContaining ([{ name: 'B', hungry: false, flippers: 2, mammal: false }])
      expect(petThePenguins(2,2)).toEqual(hun)

    })
  })

})
