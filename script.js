const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputElm = document.querySelector("#output")

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3
    //console.log(sumOfAngles)
    return sumOfAngles
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if(sumOfAngles === 180){
        outputElm.innerText = "Yay, The angles form a triangle"
    }
    else{
        outputElm.innerText = "Oh Oh! The angles don't form a triangle"
    }
}

isTriangleBtn.addEventListener("click", isTriangle)
