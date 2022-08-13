console.log("This is all about drag and drop functionality in Javascript");

const whiteBoxes = document.getElementsByClassName('whiteBox');
const imgBox = document.querySelector('.imgBox')


// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e)=>{
    console.log("Dragstart has been triggered");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
        
    }, 0);
});
imgBox.addEventListener('dragend', (e)=>{
    console.log("Dragend has been triggered");
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault()
        console.log("dragover method has been triggered")
    })
    whiteBox.addEventListener('dragenter', ()=>{
        console.log("dragenter has been triggered")
    })
    whiteBox.addEventListener('dragleave', ()=>{
        console.log("dragleave has been triggered") 
    })
    whiteBox.addEventListener('drop', (e)=>{
        e.target.append(imgBox);
        console.log("drop has been triggered")
    })
}

