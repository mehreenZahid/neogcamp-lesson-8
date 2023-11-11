const input = document.querySelectorAll(".each-side")
const areaBtn = document.querySelector("#area-btn")
const outputElm = document.querySelector("#output")

function calculateHalfOfBredthIntoHeight(a, b, c){
    const semiperimeter = a + b + c
    //console.log(semiperimeter)
    return semiperimeter
}

function calculateArea(){
    const simplify = calculateHalfOfBredthIntoHeight(Number(input[0].value), Number(input[1].value), Number(input[2].value))
    console.log(simplify)
}

areaBtn.addEventListener("click", calculateArea)