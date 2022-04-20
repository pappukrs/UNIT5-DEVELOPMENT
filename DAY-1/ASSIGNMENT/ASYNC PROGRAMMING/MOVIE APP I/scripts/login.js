document.querySelector('form').addEventListener('submit', login);
var info=JSON.parse(localStorage.getItem('info')); //
console.log(info);

function login(){
    event.preventDefault();
    var mail=document.querySelector("#email").value;
    var pass= document.querySelector("#pass").value;
  let f=false;
    for(let i=0;i<info.length;i++){
        if(mail===info[i].mail  && pass===info[i].pass){
            f=true;
            break;
        }
        // else{
        //     alert("Enter valid credentials!!");
        // }
    }
    if(f){
        alert("login successfull");
            window.location="index.html";
    }
    else{
        alert("Enter valid credentials!!"); 
    }
}