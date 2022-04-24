

var scopeOBJ={
    scopeINFO1:"Scope determines the accessibility (visibility) of variables.",
    scopeINFO2:`JavaScript has 3 types of scope:

    Block scope
    Function scope
    Global scope`,
    scopeINFO3:`Block Scope:let and const are block scoped and Variables declared inside a { } block cannot be accessed from outside the block,although variabble declared with var keyword inside {}  can be accessible from outside`,
    scopeINFO4:`Local Scope:Variables declared within a JavaScript function, become LOCAL to the function.can be accessed only inside function`,
    scopeINFO5:`Function Scope:Variables defined inside a function are not accessible (visible) from outside the function.

    Variables declared with var, let and const are quite similar when declared inside a function.`,
};

localStorage.setItem("scope",JSON.stringify(scopeOBJ));







var scope=document.querySelector("#scope");
var hoisting=document.querySelector("#hoisting");
var constructor_functions=document.querySelector("#constructor-functions");
var prototype=document.querySelector("#protype");

document.querySelector("#scope").addEventListener("click",scopeFN);
document.querySelector("#hoisting").addEventListener("click",hoistingFN);
document.querySelector("#constructor-functions").addEventListener("click",constructor_functionsFN);
document.querySelector("#prototype").addEventListener("click",prototypeFN);



function scopeFN(){
    document.querySelector("#container").innerHTML="";
    var scopeDATA=JSON.parse(localStorage.getItem("scope"));
     console.log(scopeDATA);
    var div=document.createElement("div");

    var btn1=document.createElement("button");
    btn1.innerText=`VEDIO EXPLANATION`;
    btn1.setAttribute("class","btn1");
    btn1.onclick=function(){
        alert("hi");
        document.querySelector("#container").innerHTML="";

        var iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/pBXr1ka6OLM`;
        document.querySelector("#container").append(iframe);

    }

    let p1=document.createElement("p");
    p1.innerText=`SCOPE:${scopeDATA.scopeINFO1}`;
    let p2=document.createElement("p");
    p2.innerText=`${scopeDATA.scopeINFO2}`;

    let p3=document.createElement("p");
    p3.innerText=`${scopeDATA.scopeINFO3}`;

    let p4=document.createElement("p");
    p4.innerText=`${scopeDATA.scopeINFO4}`;

    let p5=document.createElement("p");
    p5.innerText=`${scopeDATA.scopeINFO5}`;



    div.append(btn1,p1,p2,p3,p4,p5);
    document.querySelector("#container").append(div);

}


function hoistingFN(){
    document.querySelector("#container").innerHTML="";
    var scopeDATA=JSON.parse(localStorage.getItem("scope"));
     console.log(scopeDATA);
    var div=document.createElement("div");

    let p1=document.createElement("p");
    p1.innerText=`SCOPE:${scopeDATA.scopeINFO1}`;
    let p2=document.createElement("p");
    p2.innerText=`${scopeDATA.scopeINFO2}`;

    let p3=document.createElement("p");
    p3.innerText=`${scopeDATA.scopeINFO3}`;

    let p4=document.createElement("p");
    p4.innerText=`${scopeDATA.scopeINFO4}`;

    let p5=document.createElement("p");
    p5.innerText=`${scopeDATA.scopeINFO5}`;



    div.append(p1,p2,p3,p4);
    document.querySelector("#container").append(div);

}


function constructor_functionsFN(){
    document.querySelector("#container").innerHTML="";
    var scopeDATA=JSON.parse(localStorage.getItem("scope"));
     console.log(scopeDATA);
    var div=document.createElement("div");

    let p1=document.createElement("p");
    p1.innerText=`SCOPE:${scopeDATA.scopeINFO1}`;
    let p2=document.createElement("p");
    p2.innerText=`${scopeDATA.scopeINFO2}`;

    let p3=document.createElement("p");
    p3.innerText=`${scopeDATA.scopeINFO3}`;

    let p4=document.createElement("p");
    p4.innerText=`${scopeDATA.scopeINFO4}`;

    let p5=document.createElement("p");
    p5.innerText=`${scopeDATA.scopeINFO5}`;



    div.append(p1,p2,p3);
    document.querySelector("#container").append(div);

}


function prototypeFN(){
    document.querySelector("#container").innerHTML="";
    var scopeDATA=JSON.parse(localStorage.getItem("scope"));
     console.log(scopeDATA);
    var div=document.createElement("div");

    let p1=document.createElement("p");
    p1.innerText=`SCOPE:${scopeDATA.scopeINFO1}`;
    let p2=document.createElement("p");
    p2.innerText=`${scopeDATA.scopeINFO2}`;

    let p3=document.createElement("p");
    p3.innerText=`${scopeDATA.scopeINFO3}`;

    let p4=document.createElement("p");
    p4.innerText=`${scopeDATA.scopeINFO4}`;

    let p5=document.createElement("p");
    p5.innerText=`${scopeDATA.scopeINFO5}`;



    div.append(p1,p2);
    document.querySelector("#container").append(div);

}





  