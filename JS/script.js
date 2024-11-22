/*let para = document.querySelector("p");
console.log(para);

let links = document.querySelectorAll(".prads a");
for(let i=0;i<links.length;i++){
    links[i].style.color = "green";
// }

for(link of links){
    link.style.color = "aqua";
}

let heading = document.querySelector("h1");
heading.classList.add("green");

let para = document.createElement("p");
para.innerText = "HEy ! I am red in color"
document.querySelector("body").append(para);
para.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "Hey I am blue text";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a Div";
para2.innerText = "Mee Too";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);*/

// --------------------------------------------------------------------------------------------------------------
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("Hey button was clicked");
//     alert("Pradyumna is going to be a vegitarian from today onwards");
// };
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

let para = document.querySelector("p");
para.addEventListener("click",function () {
    console.log("Para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Mouse aagya h ");
});

let btn2 = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(this);
}) ;


