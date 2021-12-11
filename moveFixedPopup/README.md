
# set Pop-up fixed position

Demo: [link](https://playcode.io/843362/)

```javascript
const flow = document.querySelector(".flow")
let mousedown = false;
let pos = {}

document.addEventListener("mouseup", ()=> mousedown = false )
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

})
```