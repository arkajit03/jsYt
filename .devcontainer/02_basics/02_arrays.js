const marvel_heros=["Thor","Spiderman","IronMan"]
const Dc_heros=["Superman","Flash","Batman"]

// const All_heros=marvel_heros.concat(Dc_heros)
// console.log(All_heros)
const All_heros=[...marvel_heros, ...Dc_heros]
console.log(All_heros)