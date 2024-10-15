console.log(null>0)
console.log(null==0)
console.log(null>=0)
//in this comparision we will  see out put as false false true 
//true because in js An Equality chake == and comparisons work diffrently.
//comparision convert null in a number treating it as 0;
// that's why null>=0 is true and null>0 is false  

//=== 
//strict chake it cheke the value even it compair  the data type also
console.log("2"===2);
