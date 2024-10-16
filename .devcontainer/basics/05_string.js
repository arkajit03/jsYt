// this is a  type to make a  string 
const name='Arkajit'
const repoacount=50
// This is the modern style of string concatenation
console.log(`hello my name is ${name} and my repo accounts number is ${repoacount}`);

// anather type to write a syntax
// using the object of javascript
const gameName= new String("Arkajit")
//access key value pair
console.log(gameName[1])
/*we will learn [[Prototype]]*/
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("t"))

 // slice substring trim: it use to  remove unnecessary space

 //replace
 const url="https://google.com/google%20chrome"
 console.log(url.replace("%20", "_"))
 //first we write what we have to replace , and 2nd with what
 