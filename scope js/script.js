// var person={
//     firstName: "John",
//     lastName: "Doe",
//     id:"5566",
//     getinfo:function(){return this.firstName+""+this.lastName;}
// };
// document.getElementById("demo").innerHTML=person.getinfo();

// var person={
//     name: "Ramesh",
//     age: "30",
//     isMarried: "true",
//     address: {
//         street:"Vijay Nagar",
//         flatNO:201,
//     },
//     getInfo: function(){}
// }

// console.log(person)
// console.log(person.name)
// console.log(person["age"])

// var person2=new Object();
// person2.name="Krishnkant"
// person2.age="32"
// person2.isMarried="true"
// person2.address={}
// person2.address.street="Nagar Road"
// person2["address"]["flatNO"]=33
// console.log(person2)
// document.write(person2.name)
// document.write("<br>")
// document.write(person2["age"])

// function myFunction(){
//     var carName="Volvo"
//     document.getElementById("demo1").innerHTML=typeof carName+""+carName
// }

// myFunction()
//  document.getElementById("demo2").innerHTML=typeof carName

// var locales={
//     europe:function(){
//         var myFriend="Monique" 
//         var france=function(){
//             var paris=function(){
//             console.log(myFriend)
//     }
//         paris()
//     }
//     france()
// }
// }
// locales.europe()

// function show(){
//     var a="a is a local outer variable."
//     document.write(a+"<br>")
//     function disk(){
//         var b="b is a local inner variable."
//         document.write(b+"<br>")
//     }
//     disk()
// }
// show()

// var myVar="Global"
// function check(){
//     var myVar="Local"
//     document.write(myVar)
// }
// check()

// var name="John"
// function first(){
//     var a="Hello!"
//     second()
//     var x=a+name
//     console.log(x)
// }
// function second(){
//     var b="Hi!"
//     third()
//     var z=b+name
//     console.log(z)
// }
// function third(){
//     var c="Hey!"
//     var z=c+name
//     console.log(z)
// }
// first()

// var age=20
// if(age>18){
//     document.write("<b> You are eligible to vote.</b>")
// } else{
//     document.write("<b> You are not eligible to vote.</b>")
// }

// var grade="A"
// document.write("Entering switch block<br/>")
// switch(grade){
//     case "A": document.write("Good Job<br/>")
//     break
//     case "B": document.write("Pretty good<br/>")
//     break
//     case "C": document.write("Passed<br/>")
//     break
//     case "D": document.write("Not so good<br/>")
//     break
//     case "F": document.write("Failed <br/>")
//     break
//     default: document.write("Unknown grade<br/>")
// }
// document.write("Exitting switch block")

// var count
// for(count=0;count<10;count++){
//     document.write("Current Count: "+count)
//     document.write("<br/>")
// }
// document.write("Loop Executed")

// for(var i=0;i<=100;i++){
//     if(i%2==0)
//         console.log(i+" is an even number")
//     else
//         console.log(i+" is an odd number")
// }

// var MyArr=["A","B","C"]
// for(var i=0;i<MyArr.length;i++){
//     console.log("The member of MyArr at index "+i+" is "+MyArr[i])
// }

// var count=0
// document.write("Stating Loop<br/>")
// while(count<10){
//     document.write("Current Count: "+count+"<br/>")
//     count++
// }
// document.write("Loop Stopped!")

// function myFunction(){
//     alert("Hello World")
// }

// function sayHello(name,age){
//     document.write(name+" is "+age+" years old.")
// }

// function add(a,b){
//     console.log(a+b)
//     document.write(a+b)
// }
// add(10,20)

// var res=mul(20,30)
// function mul(x,y){
//     return x*y
// }
// document.write(res)

// const square=function(number){
//     return number*number
// }
// const x=square(4)
// console.log(x)

// function myFunction(g1,g2){
//     return g1/g2
// }
// const value=myFunction(8,2)
// console.log(value)

// var add2=(a,b)=>{
//     console.log(a+b)
// }
// add2(30,20)

// var add3=(a,b)=>console.log(a+b)
// add3(102,20)

// var a=10
// var b=20
// var c=30
// var linebreak="<br/>"

// document.write("a+b+c=")
// var result=a+b+c
// document.write(result)
// document.write(linebreak)

// document.write("a+b=")
// var result=a+b
// document.write(result)
// document.write(linebreak)

// document.write("a/b=")
// var result=a/b
// document.write(result)
// document.write(linebreak)

// function myFunc(){
//     var x=5+5
//     console.log(x)
//     var y="5"+5
//     console.log(y)
//     var z="Hello"+5
//     console.log(z)
//     var demoP=document.getElementById("demo1")
//     demoP.innerHTML=x+"<br/>"+y+"<br/>"+z
// }
// myFunc()

// if ("5"==5){
//     console.log("== done")
// } else{
//     console.log("== not done")
// }

// if ("5"===5){
//     console.log("=== done")
// } else{
//     console.log("=== not done")
// }