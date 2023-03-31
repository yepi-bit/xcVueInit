// const baseSize = 37.5
const baseSize = 16
function setRem() {
    const scale = document.documentElement.clientWidth / 750
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px'
    console.log(document.documentElement.style.fontSize)
}

setRem()
window.onresize = function () {
    setRem()
}
export default baseSize