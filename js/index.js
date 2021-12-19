const snowBox = document.querySelector(".snow__box");
const snow = document.querySelectorAll(".snow__box i");
let interval = setInterval(()=>{
    generateSnow()
},100)
function generateSnow(){
    let randomR =  Math.random()*255+10;
    let randomG = Math.random()*255+0;
    let randomB = Math.random()*255+0;
    const arr =[randomR,randomG,randomB].map(r => Math.ceil(r));
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
    // color: rgb( ${arr[0]} , ${arr[1]} , ${arr[2]} );
    `
    snowBox.appendChild(newSnow)
    setTimeout(() => {
        snowBox.removeChild(newSnow)
    }, 2500)
}


