/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/
export type Developer = {
  firstName: string, 
  lastName: string, 
  country: string, 
  continent: string, 
  age: number, 
  language: string
}


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope (developers: Developer[]) {
  const DevfromEurope= developers.filter((c)=> c.continent === 'Europe');
  return DevfromEurope.length;
}


// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings (developers: Developer[]) {
  const Greet = developers.map((c)=>`Hello ${c.firstName} what do you like the most about ${c.language}`)
  return Greet;
}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: Developer[]) {

    const JsDev = developers.filter((dev)=> dev.language == 'Javascript');
    if(JsDev.length>0){
       return true;
    }
    return false;
}

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper (developers: Developer[]) {
  const firstPython = developers.find((lan)=>lan.language== 'Python');
    if(firstPython){
      return `${firstPython.firstName},${firstPython.country}` ;
    }
    return false;
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
export function getAverageAge(developers: Developer[]) {

  const ages = developers.map((a)=>a.age);
  const sum =(tot:number,age:number)=>tot+age;
  const total=0;
  const SumAge= ages.reduce(sum,total);
  const Avgage = Math.floor(SumAge/ages.length);
  if (ages.length === 0) {
    return -1; 
  }
  return Avgage;
  

}

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts (developers: Developer[]) {

}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest (developers: Developer[]) {
  const ages= developers.map((a)=> a.age);
    const maxAge=ages.reduce((a,b)=> Math.max(a,b));
    const maxAgeDev = developers.filter((dev) => dev.age === maxAge); 
    const maxAgeDevName = maxAgeDev.map((dev) => dev.firstName);
      return maxAgeDevName;
}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup (developers: Developer[]) {

    let GlobalContinents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    let developersContinents = developers.map((d: any) => d.continent);
    return GlobalContinents.every((el) => developersContinents.includes(el));
}

