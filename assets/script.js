const flows = document.querySelector(".flow")
let moausdown = false;
let divMouse = {}

document.addEventListener("mousemove", function(e){

    if(!moausdown || !e.target.hasAttribute("data-flow") || !divMouse) return

    const react = e
    
    flows.style.left =  react.x - divMouse.x + "px"
    flows.style.top =  react.y - divMouse.y + "px"

})



document.addEventListener("mousedown", (e) => {

    if(!e.target.hasAttribute("data-flow")) return

    moausdown = true 

    const react = e
    const target = e.target.getClientRects()[0]
    
    divMouse["x"] = (react.x - target.x) 
    divMouse["y"] = (react.y - target.y) 


})
document.addEventListener("mouseup", ()=> {
    moausdown = false
})


document.addEventListener("mouseouter", ()=> {
    moausdown = false
})
