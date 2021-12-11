const flows = document.querySelector(".flow")
let moausdown = false;
let divMouse = {}

document.addEventListener("mousemove", function(e){

    if(!moausdown || !divMouse) return
    const {x, y} = e
    
    flows.style.left =  x - divMouse.x + "px"
    flows.style.top =  y - divMouse.y + "px"

})

document.addEventListener("mousedown", (e) => {

    if(!e.target.hasAttribute("data-flow")) return

    moausdown = true 
    const {x, y} = e
    const target = e.target.getClientRects()[0]
    divMouse["x"] = (x - target.x) 
    divMouse["y"] = (y - target.y) 


})

document.addEventListener("mouseup", ()=> moausdown = false )
document.addEventListener("mouseouter", ()=> moausdown = false )