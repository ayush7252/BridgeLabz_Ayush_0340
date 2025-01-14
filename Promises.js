const myPromis = new Promise((resolve , reject)=>{
    let sucess = true;
    if(sucess){
        resolve("Operation was successful!");
    }else{
        reject("There was an error.");
    }
});

myPromis.then((result) =>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("the Promise is completed")
})
