// const result=document.getElementById("jk")
// console.log(result);
// result.innerHTML="my self";
// result.title="my name";

// const result2=document.getElementsByClassName("p1")
// console.log(result2);
// result2[0].innerHTML="my self";
// result2[0].innerHTML="my name";

// const result3=document.getElementsByTagName("p")
// console.log(result3);
// document.getElementsByTagName("p")[0].innerHTML="my self";
// document.getElementsByTagName("p")[1].innerHTML="my name";

// document.querySelector("#jk").innerHTML="my self";
// document.querySelector(".p1").innerHTML="my name";
// document.querySelector("p").innerHTML="my self";

// document.querySelectorAll("p")[0].innerHTML="my self";
// document.querySelectorAll("p")[1].innerHTML="my name";

// const result=document.querySelectorAll("ul li")

// const result=document.getElementById("jk").getAttribute("class")
// document.getElementById("p1").innerHTML=result;
// console.log(result); 

// document.createElement

// const heading=document.createElement("h2");
// const bodytag=document.getElementsByTagName("body")[0];
// bodytag[0].append(heading);

// dom close method

// document.open();
// document.write("<h1>my self</h1>");
// document.close();

// function onClick(){
//     console.log("button is clicked");
// }

// function onMouseOut(){
//     console.log("mouse is out");
// }


// function onMouseDown(){
//     console.log("mouse is down");
// }



// function onMouseUp(){
//     console.log("mouse is up");
// }



// function onMouseMove(){
//     console.log("mouse is moving");
// }


// function onDoubleClick(){
//     console.log("button is double clicked");
// }

// function onMouseOver(){
//     console.log("mouse is over");
// }   
// function myFunction(){
//     alert("windows is loaded");
// }
// function onKeyDown(){
//     console.log("key is down");
// }
// function onKeyUp(){
//     console.log("key is up");
// }
// function onKeyPress(){
//     console.log("key is pressed");
// }

// let promise=new promise((resolve,reject)=>(
// let success=true;
// if(success){
//     resolve("promise is resolved");}
//     else{reject("error occured");}
// ));
// promise.then(result=>console.log(result)).catch(error=>console.log(error));

// async function getdata() {
//     let response= await fetch("");
//     let data=await response.json();
//     console.log(data);    
// }
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));
 
// try{
//     var x=y+10;
// }
// catch(error){
//     console.log("error is occured");
// }

localStorage.setItem("name","jeet");
var name=localstorage.getItem("name");
console.log(name1)
localStorage.removeItem("name");
var user={name:"jeet",age:50};
localStorage.setItem("user",JSON.stringify(user));
var data =JSON.parse(localStorage.getItem("user"));
console.log(data.name,data.age);