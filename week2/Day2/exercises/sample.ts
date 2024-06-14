const Dev=[
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
    { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Javascript' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
];
// For the list above it would return 1.
export function countFromEurope (developers:any[]) {
    const DevfromEurope= developers.filter((c)=> c.continent == 'Europe');
    return DevfromEurope.length;
  }
  console.log(countFromEurope(Dev));
function getGreetings (developers: any[]) {
    const Greet = developers.map((c)=> `Hello ${c.firstName} what do you like the most about ${c.language}`);
    return Greet;
  }
  console.log(getGreetings(Dev));
  // isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: any[]) {
 const JsDev = developers.filter((dev)=> dev.language == 'Javascript');
 if(JsDev.length>0){
    return true;
 }
 return false;
}
console.log(isJSComing(Dev));
export function getFirstPythonDeveloper (developers: any[]) {
    const firstPython = developers.find((lan)=>lan.language === 'Python');
    if(firstPython){
      return `${firstPython.firstName},${firstPython.country}` ;
    }
    
    }


console.log(getFirstPythonDeveloper(Dev));

export function getAverageAge(developers: any[]) {
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
  console.log(getAverageAge(Dev));

  export function getOldest (developers: any[]) {
    const ages= developers.map((a)=> a.age);
      const maxAge=ages.reduce((a,b)=> Math.max(a,b));
      const oldestDevelopers = developers.filter((dev) => dev.age === maxAge); 
      const oldestNames = oldestDevelopers.map((dev) => dev.firstName);
        return oldestNames
  }
  console.log(getOldest(Dev));
  export function getLanguageCounts (developers: any[]) {
    const langCount :{[language:string]:number} ={};
    for(const developer of developers)
    {
      const language = developer.language;
      if(langCount[language]){
        langCount[language]++;
       }else{
        langCount[language]=1;
       }
    }
    return langCount;
  }
  console.log(getLanguageCounts(Dev))