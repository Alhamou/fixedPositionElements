const flow = document.querySelector(".flow")
let mousedown = false;
let pos = {}

document.addEventListener("mouseup", ()=> {
    mousedown = false

    flow.style.boxShadow = "none"
    flow.style.border = "1px solid transparent"
    flow.style.transition = ".5s"

})
document.addEventListener("mouseouter", ()=> mousedown = false )
document.addEventListener("mousemove", function(e){

    if(!mousedown) return

    flow.style.left =  e.x - pos.x + "px"
    flow.style.top =  e.y - pos.y + "px"

})

document.addEventListener("mousedown", (e) => {

    if(!e.target.hasAttribute("data-flow")) return
    mousedown = true 

    const {x, y} = e.target.getBoundingClientRect()
    pos["x"] = (e.x - x) 
    pos["y"] = (e.y - y) 

    flow.style.boxShadow = "2px 2px 2px 0px #00000014"
    flow.style.border = "1px solid #0000001f"
    flow.style.transition = "0s"

})