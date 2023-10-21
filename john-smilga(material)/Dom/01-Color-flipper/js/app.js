    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    function getRandomNumber() {    
        return Math.floor(Math.random() * colors.length);
      }
    const btn=document.querySelector("#btn");
    btn.addEventListener("click",function(){      
        document.body.style.backgroundColor = colors[getRandomNumber()];
        document.querySelector(".color").textContent= colors[getRandomNumber()];     
    })
    

