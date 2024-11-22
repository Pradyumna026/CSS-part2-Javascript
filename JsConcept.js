// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("Button Clicked");
// });

// let int = document.querySelector("input");
// int.addEventListener("keydown", function(){
//     console.log("Hey how are you");
// }); 
// int.addEventListener("keydown", function(e){
    // console.log(e.key);
    // console.log(e.code);
    // console.log("Key Was pressed");
    /*console.log("Code=",e.code)// Arrrow up,Arrow down, Arrow left, Arrow down
    if(e.code=="ArrowUp"){
        console.log("Character moves up");
    }else if(e.code=="ArrowDown"){
        console.log("Character moves down");
    }else if(e.code=="ArrowLeft"){
        console.log("Character moves Left");
    }
    else if(e.code=="ArrowRight"){
        console.log("Character moves Right");
    }
}); */

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){

//     event.preventDefault();
    // alert("Form Submitted");
    // let inp = this.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);
    // let user = document.querySelector("#user");
    // let password = document.querySelector("#password");
    // console.dir(form);
    // console.log(user.value);
    // console.log(password.value);
// });

// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("Input is = ",user.value);
// });
// user.addEventListener("input",function(){
//     console.log("Input changed");
//     console.log("final value =",this.value);
// });
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");
// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("Div was Clicked");
});

ul.addEventListener("click", function(){
    console.log("ul was Clicked");
});

for(li of lis){
    li.addEventListener("click", function(){
        console.log("li was Clicked");
    });
}
