const input = document.querySelectorAll(".each-side")
const areaBtn = document.querySelector("#area-btn")
const outputElm = document.querySelector("#output")

function calculateHalfOfBredthIntoHeight(a, b){
    const area = 1/2*(a*b)
    //console.log(area)
    return area
}

function calculateArea(){
    const simplify = calculateHalfOfBredthIntoHeight(Number(input[0].value), Number(input[1].value))
    outputElm.innerText = "The area of triangle is "+ simplify
}

areaBtn.addEventListener("click", calculateArea)