let image;
if(localStorage.getItem("image")===null){
  image=[];
}
else{
   image=JSON.parse(localStorage.getItem("image"));
}


  function storeImage(){
let img=document.querySelector('#url').value;
image.push(img);
localStorage.setItem("image",JSON.stringify(image));
console.log(image);
  }

  function start(){
      let slideShowImgElement=document.querySelector('#img');
     var i=0;
     var x=setInterval(function(){
      if(i>=image.length){
        i=0;
        //  clearInterval(x);
     }
        slideShowImgElement.src=image[i];
        i=i+1;
     },2000);
     
     
      

  }