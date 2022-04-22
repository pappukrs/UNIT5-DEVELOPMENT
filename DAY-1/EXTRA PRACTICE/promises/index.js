let passExam=true;

let parentPromise=new Promise((resolve, reject) =>{
    
    setTimeout(() =>{
        if(passExam){
            resolve(`Bike`);
        }
        else{
            reject(`Nothing`)
        }
    },2000);
    
   
})

 parentPromise.then((res)=>{
     console.log(res);
 }).catch((err)=>{
     console.log(err)
 })