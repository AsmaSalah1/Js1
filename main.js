
var registerForm =document.querySelector(".registerForm");
registerForm.onsubmit= function(e){
e.preventDefault();
var element=e.target.elements;
// document.querySelector(".amount")
 console.log(e.target.elements);
 var inputOne =element['amount'].value;
var selector=element['exchange'].value;
//dollar
if(selector=='dollar')
document.querySelector(".result").textContent=inputOne/3.5;
else if (selector=='dinar')
document.querySelector(".result").textContent=inputOne/5;
else
document.querySelector(".result").textContent=inputOne;


}






// var showPass = document.querySelector(".show");
// var pass= document.querySelector(".password")
// showPass.onclick = showpas;
// function showpas(){
// pass.type="text";
// }
// var k=document.querySelector(".show");
// k.onclick=data;
// function data(){
// document.querySelector(".password").type="text";
// document.querySelector(".ww").href="#";
// }
// document.querySelector(".bottm").onclick=fun1;
// function fun1(){
//     document.querySelector(".par").textContent="hihihihihihhi";
// }
// console.log(document.querySelector("a"));


// var productsName = ['product1','product2','product3','product4'];
// var result="";
// for (var i=0;i<productsName.length;i++)
// // result+=`<li> ${productsName[i]}</li>`;
// result+="<li> productsName[i] </li>";

// document.querySelector("ul").innerHTML=result;



// var showpass = document.querySelector(".password");
// var show =document.querySelector(".show");
//  show .onclick =showpas;

//  function showpas(){
//  showpass.type = "text" ;
//  }