// Cursor Park

// For examples of running this see zoo-animals.test.js

type AnimalInfo = {
  name: string,
  swimSpeedKph?: number,
  flippers: number,
  hungry?: boolean,
  mammal: boolean
}

export const addDolphinToPool = (speedInKph: number): AnimalInfo => {
  return {
    name: speedInKph > 30 ? 'Speedy Alice' : 'Slow Bob',
    swimSpeedKph: speedInKph,
    flippers: 2,
    mammal: true
  }
}
//console.log(addDolphinToPool(50))

export const petThePenguins = (numberOfPenguins: number, numberOfFish: number) => {
  const penguins = new Array<AnimalInfo>()
  for (let i = 1; i <= numberOfPenguins; i++) {
    penguins.push({
      name: String.fromCharCode(i + 64), // First penguin is called 'A'
      hungry: i > numberOfFish,
      flippers: 2,
      mammal: false
    })
  }
  return penguins
}
console.log(petThePenguins(2,1))

// EOF
