const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function getRandomNumber() {    
    return Math.floor(Math.random() * hexArr.length);
  }
const btn=document.querySelector("#btn");
btn.addEventListener("click",function(){     
    let colors="#"; 
    for(let i=0;i<6;i++){
        colors+=hexArr[getRandomNumber()];
    }
    document.body.style.backgroundColor = colors;
    document.querySelector(".color").textContent= colors;     
})

//already define similar jquery code previous app.js file