// primitive 

// 7 type : string,number,Boolean,null,undefined,symbol,Bigint
//this all are call by value 


// Non primitive
//Array, Objects, Functions
//JavaScript is a dynamic language its mean we don't have to define  variable data type

//**********************************Memory******************************

// two type of memory are there  Stack (Primitive), Heap (NonPrimitive)
let myYtname="ArkajitYt"
let anothername= myYtname

console.log(anothername)
anothername= "AG"
console.log(myYtname)
console.log(anothername)

//heap

let userOne={
    email:"user@google.com",
    upi: "@ptsbi"
}
let usertwo=userOne;
usertwo.email="usertwo@google.com"
console.log(userOne)
console.log(usertwo)