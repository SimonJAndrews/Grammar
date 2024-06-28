const paragraphOne = document.querySelector(".para1");
 const paragraphTwo = document.querySelector(".para2");
 let value;
 

const trigger = document.querySelector('.button-29').addEventListener("click" , myFunction);

function random(min, max){
   return Math.floor(Math.random() * (max - min) + min)
}

function question(min, max){
   return Math.floor(Math.random() * (max - min) + min)
}

 value = question();
 

function getValue(value){
   if (value === 0){
   paragraphTwo.textContent = "+"
} else if (value === 1){
   paragraphTwo.textContent = "-"
}else{
   paragraphTwo.textContent = "?"
}}



function myFunction(){
   paragraphOne.textContent = random(1,7);
   getValue(question(0,3));
}
