const windowTop = document.querySelector(".windowTop")
const middle = document.querySelector(".middle")
const windowBottom = document.querySelector(".windowBottom")


const middleHeight = middle.getClientRects()[0].height
const vh = window.innerHeight - middleHeight
let mode = false

document.addEventListener("mousemove", function(e){

  if(!mode) return

  windowTop.style.height = e.y + "px"
  windowBottom.style.height = vh - e.y + "px"
  
})



document.addEventListener("mousedown", function(e){
  if(!e.target.dataset.hasOwnProperty("resize")) return
  mode = true
})

document.addEventListener("mouseup", function(e){
  mode = false
})
