// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO
let ages = someAcademitesWithAges.map((n) => n.age);
let sum = (tot:number,age:number) => tot+age;
let total=0;
let sumofAges = ages.reduce(sum,total);
console.log("total age in moths of all the doggie Academites is "+sumofAges);

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
// TODO
const sortByName = someAcademitesWithAges.map((n)=> n.name);
const sortAsc =sortByName.sort();
console.log("Sorted doggie Academites by name (alphabetically):" +sortAsc);
// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges  = (a:number, b:number) => b - a 
console.log(ages.sort(sortByAges))



// EOF
