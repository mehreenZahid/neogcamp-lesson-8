const sides = document.querySelector(".each-sides")
const areaBtn = document.querySelector("#area-btn")
const outputElm = document.querySelector("#output")

function calculateHalfOfBredthIntoHeight(a, b, c){
    const semiperimeter = Math.floor((a+b+c)/2)
    //console.log(semiperimeter)
    return semiperimeter
}

function calculateArea(){
    const simplify = calculateHalfOfBredthIntoHeight(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value))
    console.log(simplify)
}

areaBtn.addEventListener("click", calculateArea)