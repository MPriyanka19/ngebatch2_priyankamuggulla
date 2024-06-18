import { addToArray } from './animal-array'
/*
Run with
> npm install
> npm test animal-array
*/

//Tasks
// - Make every test in the first describe have the item 'Early Bird' at the start of the array
// - Make sure the array is empty after each test

//This is a test that shows you how the function works and can be tested
it('I can add an item to an existing array', () => {
  //ARRANGE}
  const animalArray: string[] = []
  const itemToAdd = 'Timely Hippo'
  const expectedResult = ['Timely Hippo']

  //ACT
  const result = addToArray(animalArray, itemToAdd)

  //ASSERT
  expect(result).toEqual(expectedResult)
}) 

describe('Every test has early bird at the start of the array', () => {

  let animalArray:string[] = []

  beforeEach(() => {
    addToArray(animalArray,'Early Bird')
  });
  afterEach(()=>{
    animalArray=[]
  })
    
  
  it('Adds the item Timely Hippo to an existing array that has Early Bird in it', () => {
    
    const itemToAdd = 'Timely Hippo'
    const expected= ['Early Bird','Timely Hippo']
    const result = addToArray(animalArray, itemToAdd)
    expect(result).toEqual(expected)
    
   
  })
  
console.log(animalArray)
  it('Adds Timely Hippo and Regular Rat to an existing array that has Early Bird in it', () => {
    const expected1 = ["Early Bird","Timely Hippo", "Regular Rat"]
    const res = addToArray(addToArray(animalArray,'Timely Hippo'),'Regular Rat')
    expect(res).toEqual(expected1)
  })
  
})