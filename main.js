

// function callback(){
//   console.log("payment is compelted")
// }
// function payment(a,b,callback){
//   var pay = a+b;
//   console.log("your paid amount:"+pay)
//   callback();
//  }
// var res=payment(10,10,callback)
// console.log(res)
// function add(a,b){
//   return a+b;
// }
// var res=add(2,3);
// console.log(res);
// var fs = require('fs')
// var os =require('os')
//  var user =os.userInfo();
//  console.log(user);
//  console.log(user.username)

//  fs.appendFile('greting.txt','hi your got vochures prime watch enjoy your weekend ' +user.username+ '!',()=>{
//   console.log('fileis creted')
//  })
 const notes=require('./notes.js')
 var age = notes.age;
 var name =notes.name;
console.log(age)
console.log(name)
 console.log('server is good ')