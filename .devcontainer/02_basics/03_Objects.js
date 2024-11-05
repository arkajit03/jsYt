// singleton 
const myHight=Symbol("five") 
const myObj={
    Name: "Arkajit",
    email:"e22cseu00@google.com",
    // we can use array as keyvalue also
    toDay: ["monday","sunday"],
    [myHight]: "5.85"
}
// console.log(myObj[myHight])
// console.log(myObj["email"])
// console.log(myObj)
//change value of  key object

// myObj.email= "ak2003@google.com"//by this we can over write value 
// // we can lock keyvalue by freeze
// Object.freeze(myObj)
// myObj.email= "Ak@google.com"
// console.log(myObj)

//function you can treat like variab
myObj.cool= function(){
    console.log("hello my name is Arkajit");

}
myObj.greetingTwo= function(){
    console.log(`hello my name is only  ${this.Name}`);

}
myObj.cool();
myObj.greetingTwo();
