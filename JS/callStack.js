// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     return two() + one();
// }

// three();

// setTimeout(function(){
//     console.log("Hey how are you");
// },2000);
// setTimeout(function(){
//     console.log("Pradyumna Singh chauhan");
// },2000);
// console.log("Helloo Buddy");

/*let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColor){
    setTimeout(() =>{
        h1.style.color = color;
        if(nextColor)   nextColor();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("orange",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
}); */

// CallBack Hell

//------------------------------
// Without using Promise
/*function saveToDb(data, success, faliure){
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed > 4){
        success();
    }else{
        faliure();
    }
};

saveToDb("pradyumna", ()=>{
    console.log("Data Added Successfully");
    saveToDb("Raj Aryan", ()=>{
        console.log("Data 2 Added SuccessFully");
        saveToDb("Sonam",()=>{
            console.log("Data3 added Successfully");
        },()=>{
            console.log("Failure3 : weak internet connection");
        });
    },()=>{
        console.log("Failure 2 : Network is weak");
    });
},()=>{
    console.log("Failure : Network is weak");
});*/

// With using promise

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Data added Successfully");
        }else{
            reject("Failure : weak connection");
        }
    });
}

// saveToDb("pradyumna");
// Improved Version of Callback HEll

saveToDb("pradyumna")
    .then((result)=>{
        console.log("dta added");
        console.log("result of the data :",result);
        return saveToDb("Singh");
    })
    .then((result)=>{
        console.log("data2 was added");
        console.log("result of the data :",result);
        return saveToDb("Chauhan");
    })
    .then((result)=>{
        console.log("Data3 was attached");
        console.log("result of the data :",result);
    })
    .catch((error)=>{
        console.log("Promise was rejected");
        console.log("result of the data :",error);
    });

// Result and error in Promises
// Promises are rejected and resolved with some data (valid result or error)

let h1 = document.querySelector("h1");

function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Changed");
        },delay);
    });
}

colorChange("red",1000)
.then(()=>{
    console.log("Color changed to red");
    return colorChange("green",1000);
})
.then(()=>{
    console.log("Color changed to green");
    return colorChange("blue",1000);
})
.then(()=>{
    console.log("Color changed to blue");
    return colorChange("pink",1000);
})
.then(()=>{
    console.log("Color changed to pink");
    return colorChange("yellow",1000);
})
.then(()=>{
    console.log("Color changed to yellow");
});
