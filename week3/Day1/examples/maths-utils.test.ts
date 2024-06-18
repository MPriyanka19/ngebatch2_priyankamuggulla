/*
Don't change this file - change the one in ./exercises instead!

Run this with
> npm install
> npm test maths-utils
*/

import { add } from './maths-utils'

describe('When calling the Add function', () => {
  it('should add two integers', () => {
    expect(add(2,3)).toBe(5)
  
  })
})
