// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async ()=>{
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     }catch(e){
//         console.log("Errors are: ",e);
//         return "/";
//     }
// }



//----------------------------------------------------------
 const url = "https://icanhazdadjoke.com/";

 async function getJokes(){
    try{
        const config = {headers:{Accept: "application/json"}};
        let res = await axios.get(url,config);
        console.log(res.data);
    }catch(e){
        console.log(e);
    }

 }

 











