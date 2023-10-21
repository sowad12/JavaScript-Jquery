//solve method 1-easy way

// const decreaseBtn=document.querySelector("#decreaseBtn");
// const resetBtn=document.querySelector("#resetBtn");
// const increaseBtn=document.querySelector("#increaseBtn");
// const value=document.querySelector("#value");
// let counter=0;
// decreaseBtn.addEventListener("click",function(){
//     console.log("decrease");
//     counter=counter===0?0:counter-1;
//     value.textContent=counter;
// })
// increaseBtn.addEventListener("click",function(){
    
//     counter++;
//     value.textContent=counter;
// })
// resetBtn.addEventListener("click",function(){
   
//     counter=0;
//     value.textContent=counter;
// })


//solve way 2
let counter=0;
const Btns=document.querySelectorAll(".btn");
//console.log(Btns)
Btns.forEach(function(item){
    item.addEventListener("click",function(e){
      
      let className= e.target.classList;
     // console.log("className",className)
      if(className.contains("decrease")){
        counter=counter===0?0:counter-1;
         value.textContent=counter;
         value.style.color = "red";
      }
      else if(className.contains("increase")){
        counter++;
         value.textContent=counter;
         value.style.color = "green";
      }
      else{
        counter=0;
        value.textContent=counter; 
        value.style.color = "#222";
      }
    })

})


