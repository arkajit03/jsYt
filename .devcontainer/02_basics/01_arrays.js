const myArr=[0,2,5,9,78,56,3]
//console.log(myArr[3]);

//Array

// myArr.push(9)
// myArr.push(10)// it will add  value in the end of the  array

// myArr.pop()//it will remove  last element ot the array

//to add element in the beganing  of the  array
// myArr.unshift(72)//this is not good because  when we add elemet at the beganing we get lode in memory
// // to remove element from the beganing
// myArr.shift()
// to know the data is present or not
// console.log(myArr.includes(78))
// console.log(myArr.indexOf(3))

// // convert array in string
// const newArr= myArr.join()

// console.log(newArr)
// console.log(typeof newArr)
// console.log(myArr);


//##importent
//slice,splice

console.log("A", myArr)

const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);