let paragraphOne = document.querySelector(".para1");
 const paragraphTwo = document.querySelector(".para2");

 function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

 let returnValue = randomNumber(1,6);

 console.log(returnValue)

 if(returnValue >= 1 && returnValue <= 6){
    document.querySelector(".para1").textContent = returnValue; 
 }
 

