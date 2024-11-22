function multiplication( func, num){
    for(let i=0;i<num;i++){
        func();
    }
}

let greet = function(){
    console.log("I am the best");
}

function oddRequest(request){
    if(request == "Odd"){
        return function (n){
            console.log(!(n%2==0));
        }
    }else if(request == "Even"){
        return function (n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong request");
    }
}
// Arrow function
let sum = (a,b)=>{
    console.log(a+b);
}

// Set timeout
console.log("Set timeout function is calling");
setTimeout(()=>{
    console.log("Hey I am Flash");
}, 4000);
//Set interval
let id = setInterval(()=>{
    console.log("Koi bolti re");
},5000)
console.log(id);