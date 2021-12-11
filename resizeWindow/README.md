# resize windows

Demo: [link](https://playcode.io/843459/)

```javascript
const windowTop = document.querySelector(".windowTop")
const resize = document.querySelector(".resize")
const windowBottom = document.querySelector(".windowBottom")

const resizeHeight = resize.getClientRects()[0].height
const vh = window.innerHeight - resizeHeight
let mode = false

document.addEventListener("mousemove", function(e){

  if(!mode) return

  windowTop.style.height = e.y + "px"
  windowBottom.style.height = vh - e.y + "px"
  
})

document.addEventListener("mousedown",() => mode = true)
document.addEventListener("mouseup", () => mode = false)
```