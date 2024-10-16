const score= 400
console.log(score);
//when we declear as number this output will be [Number: 100]
const balance = new Number(100)
console.log(balance)
//usefull function on number.....
//int to string
console.log(balance.toString().length);
// how much value we want after decimal 10.00
console.log(balance.toFixed(2))//int will take only 2 value after decimal
const j=1234.8965
console.log(j.toPrecision(5));// atar mane kota number ar por amar precision chai mane round off dorkar
//in price we see too much zero after value, to separete by ","
const bignumber=100000000
//"," in indian formate
console.log(bignumber.toLocaleString('en-IN'));

//===========Maths=============

console.log(Math)
//making absolute value mean negative to posative 
console.log(Math.abs(-4));
//roundoff number
console.log(Math.round(4.6));
//now if we want upper value 
console.log(Math.ceil(4.4));
//lower value
console.log(Math.floor(4.6));
//how we can make  random number under a range
// random only make value  between  0 to 1
console.log((Math.random()*10)+1);
//it can be 0.041 so we add 1 also
const min=10
const max=20

console.log(Math.floor(((Math.random()*(max-min+1))+min)))




