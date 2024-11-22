// let fav = "Baki Hanma";
// let guess = prompt("Guess Movie Name");
// while(guess!=fav && guess!='quit'){
//     console.log("Wrong");
//     guess = prompt("Enter again");
// }
// if(guess == fav){
//     console.log("Good job ! You guessed the right Movie");
// }else[
//     console.log("You brat!! Quited")
// ]

// To-Do List
/*let todo =[];
let req = prompt("Enter Your request");
while(true){
    if(req == "quit"){
        console.log("Quiting.....Please wait !");
        break;
    }
    if(req == "List"){
        console.log("------------------------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------------");
    }else if(req == "add"){
        let x = prompt("What Do you want to add");
        todo.push(x);
        console.log("Task Added")
    }
    else if(req== "delete"){
        let idx = prompt("Which Index you want to delete");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
    else{
        console.log("wrong request");
    }
    req = prompt("Enter Your request");
}*/

//Object Literals
// let student={
//     name:"Ram",
//     class:45,
//     roll: 2,
//     city: "Delhi"
// 

// let num = Math.floor(Math.random()*100) + 1;
// console.log(num);.
// guessing game 

// let num = prompt("enter the max number");
// let n = Math.floor(Math.random()*num) + 1;
// console.log(n);
// let guess = prompt("guess the number");
// while(true){
//     if(guess == "quit"){
//         console.log("Quiting");
//         break;
//     }
//     if(guess==n){
//         console.log("Congrats !! You guessed it right");
//         break;
//     }
//     else if(guess<n){
//         guess = prompt("your number is smaller , please try agin!!");
//     }
//     else if(guess>n){
//         guess = prompt("your number is larger , please try agin!!");
//     }
// }

// Concatination of sting in an array
// function str(arr){
//     let ans = "";
//     for(let i=0;i<arr.length;i++){
//         ans = ans +arr[i];
//     }
//     return ans;
// }

// // Second way to define function 
// let sum = function(a,b){
//     return a+b;
// }

// // High order function
// function greet(func,n){
//     for(let i=0;i<n;i++){
//         func();
//     }
// }
// function hello{
//     console.log("Pradyumna is best among all coders");
// }
// // Hing order function that return some function

// function oddEvenTest(req){
//     if(req == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(req == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong request");
//     }
// }

// Method
// const calculator = {
//     add: function(a,b){
//         return a+b
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }

// This Keyword
// const data = {
//     name:"Pradyumna",
//     age:22,
//     math : 90,
//     phy : 95,
//     che: 99,
//     getAvg(){
//         let avg = (this.che + this.math+ this.phy)/3;
//         console.log(avg);
//     }
// }

//Arrow Function
// const arr = (a , b) =>{
//     console.log(a+b);
// }

// const hello = () =>{
//     console.log("Hello Wordl i'm here");
// }
// Implicit function in Arrow Function
// const cube = (n) =>(
//     n*n*n
// );
//Set TimeOut Function
// console.log("Hi there");
// setTimeout(() =>{
//     console.log("Java Script");
// },4000);
// console.log("Welcome to our Channel of ");

// SetInterval Function
// let id = setInterval(()=>{
//     console.log("Muzan Kubutsuji")
// },3000);
// use of this in Arrow function and Normal function

/*const student = {
    name:"Prads",
    marks : 95,
    prop : this,
    getName: function(){
        console.log(this); // student
        return this.name;
    },

    getMarks: () =>{
        console.log(this); // parent's scope -> window object
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(())
    }
};*/

//for each for Array Method
// let arr = [1,2,3,4];
// function print(el){
//     console.log(el*2);
// }
// arr.forEach(print);

let students = [
    {
        name : "Sam",
        roll: 45,
        marks : 96,
    },
    {
        name : "Sak",
        roll: 25,
        marks : 98,
    },
    {
        name : "prads",
        roll: 35,
        marks : 99,
    },

];
// arr.forEach (function(el){
//     console.log(el.roll);
// });
// arr.forEach((student) =>{
//     console.log(student.roll);
// });

// arr.forEach(function print(el){
//     console.log(el);
// });

// let gpa = students.map((el) =>{
//     return el.marks/10;
// });

// let nums = [1,2,4,6,10,13,12,14,15,16,20];
// let even = nums.filter((el) => {
//     return el%2==0;
// });
//Practice question 
// Check all the element in the array is multiple of 10 or not 
// let arr = [20,10,30];
// let ans = arr.every((el) => (el%10 ==0));

//spread
let arr = [1,2,3,4,5,10,25,36,63,56,98,65,-10];
// console.log(...arr);

/*function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("You gave us : ",args[i]);
    }
};*/

// function sum(...args){
//     return args.reduce((sum,el) => sum+el);
// };

// Destruction concept
// let uarr = ["peter","Tony","Stark","Steve","Roger","Natasha"];
// let [winner,runnerup,second_runnerup] = uarr;

// let uarr = ["peter","Tony","Stark","Steve","Roger","Natasha"];
// let [winner,runnerup,...second_runnerup] = uarr;

//Destructuring of Object 
// const obj = {
//     name : "Prads",
//     roll : 45,
//     userId : 781,
//     userName : "Pra7io77",
//     subject : ["Hindi", "English","Math","Science"],
//     password : 123456789,
// };

// let {userName:user, password} = obj;

// console.dir(document.querySelector("h1"));