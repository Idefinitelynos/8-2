canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouse_event = "empty"
var last_x,last_y
color="green"
width=6
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){
    mouse_event="mousedown"
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e){
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
currentx = e.clientX-canvas.offsetLeft
currenty = e.clientY-canvas.offsetTop
if (mouse_event=="mousedown") {
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=width
ctx.moveTo(last_x, last_y)  
ctx.lineTo(currentx, currenty) 
ctx.stroke()
}
last_x=currentx
last_y=currenty
}