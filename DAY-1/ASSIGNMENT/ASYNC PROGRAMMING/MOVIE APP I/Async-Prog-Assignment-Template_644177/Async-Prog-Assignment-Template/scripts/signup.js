document.querySelector('form').addEventListener('submit', signup);

var info;
if(localStorage.getItem('info')===null){
 info=[];
}
else{
 info=JSON.parse(localStorage.getItem('info'));
}
function signup(){
    event.preventDefault();
    var email = document.querySelector('#emailAddress').value;
    var password = document.querySelector('#password').value;
     var infoOBJ={
         mail: email,
         pass:password,
     }
     info.push(infoOBJ);
     localStorage.setItem('info',JSON.stringify(info));

     alert("successfully signup!! please login");
     window.location.href="../login.html";

}