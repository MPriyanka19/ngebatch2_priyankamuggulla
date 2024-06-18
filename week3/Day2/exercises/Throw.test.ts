import {drinkFlavor} from './Throw'
test('throws on octopus', () => {
    expect(() => {
      drinkFlavor('octopus');
    }).toThrow();
  });