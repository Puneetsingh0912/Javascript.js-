const name = 'puneet'
const repoCount = 50

//console.log(name+repoCount);

console.log(`Hello my name is ${name} and my repo count
    is ${repoCount}`);

const gameName = new String('puneet')

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

// trim 
const newStringOne = "  puneet  "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://name.com/name%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('puneet'));
console.log(gameName.split());










