const snowBox = document.querySelector(".snow__box");
const snow = document.querySelectorAll(".snow__box i");
let interval = setInterval(()=>{
    generateSnow()
},80)
function generateSnow(){
    let size = Math.random() * 2.5 + 1.4;
    if(window.innerWidth <= 576){
        size = Math.random() * 1.8 + 1.2
    }
    let newSnow = document.createElement("i");
    newSnow.classList.add("fas","fa-snowflake")
    newSnow.style.cssText = `
    left: ${Math.random() * window.innerWidth-20 + "px"};
    animation:snow ${Math.random()*1.4 + 1.3}s linear forwards;
    font-size: ${size}rem;
    opacity: ${(Math.random() * 1 + 0.3)};
    `
    snowBox.appendChild(newSnow)
    setTimeout(() => {
        snowBox.removeChild(newSnow)
    }, 2500)
}


