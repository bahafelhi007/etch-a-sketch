const gridNum = 5 ; 
let rainbowColor = false
let borderState = false
const container = document.querySelector('.container') ; 
const resize = document.querySelector('.resize')
const grids = document.querySelectorAll('.grids')
function createGrids(){
    for(let i = 0 ; i< gridNum*gridNum ; i++){
        const grids = document.createElement('div')
        grids.classList.add('grids')
        grids.style.flex= "0 0 calc(100% / 5)"; 
        grids.style.height= "calc(500px / 5)"; 
        grids.style.border='solid 0.5px black'
        container.appendChild(grids) 
    }

}
function changeColor(event,rainbowColors){
    const grids = document.querySelectorAll(".grids")
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    let color = `rgb(${red},${green},${blue})`
    if (!rainbowColor){    
event.target.style.backgroundColor ='#000000'
}
else {
    event.target.style.backgroundColor =color
}

}
function handleMouseOver(){
    const grids = document.querySelectorAll('.grids')
    console.log("Mouse over handler executed!")
    grids.forEach(grid => {
        grid.addEventListener('mouseover',changeColor)
    })
}
function resizeGrid(){
    resize.addEventListener('click',()=>{
        let newGridNum = prompt ('')
        container.innerHTML=''
        for(let j = 0 ; j< newGridNum*newGridNum; j++){
            const grids = document.createElement('div')
            grids.classList.add('grids')
            grids.style.flex= `0 0 calc(100% / ${newGridNum})`; 
            grids.style.height= `calc(500px / ${newGridNum})`; 
            grids.style.border='solid 0.5px black'
            container.appendChild(grids) 
            
        }
        handleMouseOver()
        borderToggle()

    })
}
function rainbowColors(){
    const rainbow = document.querySelector('.random')
    rainbow.addEventListener('click',()=>{
        console.log('rainbow')
     rainbowColor = !rainbowColor
     console.log(rainbowColor)

    })
}
function borderToggle() {
    const grids = document.querySelectorAll('.grids');

    grids.forEach(grid => {
        if (!borderState) {
            grid.style.border = "none";
        } else {
            grid.style.border = "solid 1px black";
        }
    });
}
function border(){
    const border = document.querySelector('.border')
    border.addEventListener('click',()=> {borderState = !borderState
    console.log(borderState)
    borderToggle()
})
}
function clear(){
    const clear = document.querySelector('.clear')
    const grids = document.querySelectorAll('.grids')
    clear.addEventListener('click',()=>{
        grids.forEach(grid=>{
            grid.style.backgroundColor='white'
        })
    })
}

createGrids()
resizeGrid()
handleMouseOver()
rainbowColors()
border()
clear()