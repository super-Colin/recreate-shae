
let slidingBoxes = document.querySelectorAll('.slidingBox');
console.log(slidingBoxes);

for(let box of slidingBoxes){
    // console.log(box);
    box.addEventListener('mouseover', slidingBox_mouseOver);
}


function slidingBox_mouseOver(){
    for (let box of slidingBoxes) {
        box.classList.remove('activeBox');
    }
    this.classList.add('activeBox');
}