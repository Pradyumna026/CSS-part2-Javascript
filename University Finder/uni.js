// Activity using query String 

let url1 = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value; 
    console.log(country);
    let colleges = await getCollege(country);
    
    show(colleges);
});

function show(college){
    let list = document.querySelector("#result");
    list.innerText = "";
    for(coll of college){
        console.log(coll.name);

        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
}
// let country = "nepal" 

async function getCollege(country){
    try{
        let res = await axios.get(url1+country);
        return res.data;
    }catch(e){
        console.log("Error is:",e);
        return [];
    }
}