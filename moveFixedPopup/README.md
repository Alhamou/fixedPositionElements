
# set Pop-up fixed position

  

Demo: [link](https://playcode.io/843362/)

    const  flows  =  document.querySelector(".flow")
    
    let  mousedown  =  false;
    
    let  initPosition  = {}
    
      
    
    document.addEventListener("mousemove", function(e){
    
      
    
    if(!mousedown  ||  !initPosition) return
    
    const {x, y} =  e
    
    flows.style.left  =  x  -  initPosition.x  +  "px"
    
    flows.style.top  =  y  -  initPosition.y  +  "px"
    
      
    
    })
    
      
    
    document.addEventListener("mousedown", (e) => {
    
      
    
    if(!e.target.hasAttribute("data-flow")) return
    
      
    
    mousedown  =  true
    
    const {x, y} =  e
    
    const  target  =  e.target.getClientRects()[0]
    
    initPosition["x"] = (x  -  target.x)
    
    initPosition["y"] = (y  -  target.y)
    
      
      
    
    })
    
      
    
    document.addEventListener("mouseup", ()=>  mousedown  =  false )
    
    document.addEventListener("mouseouter", ()=>  mousedown  =  false )
