let inp = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerHTML = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(e){
    if(e.target.nodeName == "BUTTON"){
        let par = e.target.parentElement;
        par.remove();
        console.log("deleted");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }