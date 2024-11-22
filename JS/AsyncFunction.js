// async function greet(){
//     // throw("Unexpected error");
//     return "Hey buddy how are you";
// }
// greet()
// .then((result)=>{
//     console.log("Promise was successful with :",result);
// })
// .catch((err)=>{
//     console.log("weak connection with :",err);
// });

// function greet(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }
// async function demo(){
//     await greet();
//     await greet();
//     await greet();
//      greet();
// }

// From callStack file we have copied a code to implies this async and await function on it 

let h1 = document.querySelector("h1");

function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            // Handeling error------------------------
            let n = Math.floor(Math.random()*5)+1;
            if(n > 3){
            reject("promises are rejected");
            }
            //-----------------------
            h1.style.color = color;
            resolve("Color Changed");
        },delay);
    });
}

async function demo(){
    await colorChange("red",1000);
    await colorChange("green",1000);
    await colorChange("blue",1000);
    await colorChange("yellow",1000);
    await colorChange("pink",1000);
    await colorChange("orange",1000);

    // handeling error 
    let a = 5;
    console.log(a);
}

// colorChange("red",1000)
// .then(()=>{
//     console.log("Color changed to red");
//     return colorChange("green",1000);
// })
// .then(()=>{
//     console.log("Color changed to green");
//     return colorChange("blue",1000);
// })
// .then(()=>{
//     console.log("Color changed to blue");
//     return colorChange("pink",1000);
// })
// .then(()=>{
//     console.log("Color changed to pink");
//     return colorChange("yellow",1000);
// })
// .then(()=>{
//     console.log("Color changed to yellow");
// });

// Await keyword

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let n = Math.floor(Math.random()*10)+1;
            console.log(n);
            resolve();
        },2000);
    });
}
async function demon(){
    await getNum();
    await getNum();
    getNum();
}