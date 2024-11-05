//obj singleton creating obj by constructor
const tinder=new Object()

tinder.email="arkajit123"
tinder.name="Arkaji"
//console.log(tinder)
//creating nested object
const fbuser={
    email1: "arkaijt02@google.com",
    fullname: {
        username:{
            user:"arkajit_03",
            firstname: "arkajit",
            lastname : "ghosh" 
        }
    }
}
console.log(fbuser.fullname.username.lastname)