var rows =5;
var columns =5;

var currTile;
var otherTile;

var turns =0;

window.onload = function(){
    //initial %X% board
    for(let r = 0;r<rows;r++){
        for (let c=0;c<columns;c++){
            //img
            let tile = document.createElement('img');
            tile.src = './images/blank.jpg';
            //Drag and drop function
            tile.addEventListener('dragstart',dragStart);
            tile.addEventListener("dragover",dragOver);
            tile.addEventListener('dragenter',dragEnter);
            tile.addEventListener('dragleave',dragLeave);
            tile.addEventListener('drop',dragDrop);
            tile.addEventListener('dragend',dragEnd);
            tile.addEventListener('touchstart', touchStart);
            tile.addEventListener('touchmove', touchMove);
            tile.addEventListener('touchend', touchEnd);

        

            document.getElementById('board').append(tile);

        }
    }
    //pieces
    let pieces =[];
    for(let i=1;i<rows*columns;i++){
        pieces.push(i.toString()); //put 1 to 25 into the array
    }
    pieces.reverse()
    for(let i=0;i<pieces.length;i++){
        let j = Math.floor(Math.random()*pieces.length);

        let tmp = pieces[i];
        pieces[i]=pieces[j];
        pieces[j]=tmp;
    }

    for(let i=0;i<pieces.length;i++){
        let tile = document.createElement('img');
        tile.src='./images/'+pieces[i]+".jpg";

        //Drag and drop function
        tile.addEventListener('dragstart',dragStart);
        tile.addEventListener("dragover",dragOver);
        tile.addEventListener('dragenter',dragEnter);
        tile.addEventListener('dragleave',dragLeave);
        tile.addEventListener('drop',dragDrop);
        tile.addEventListener('dragend',dragEnd);
        tile.addEventListener('touchstart', touchStart);
        tile.addEventListener('touchmove', touchMove);
        tile.addEventListener('touchend', touchEnd);


        document.getElementById('pieces').append(tile);
    }
}

//drag tile
function dragStart(){
    currTile = this;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){

}

function dragDrop(){
    otherTile = this;
}

function dragEnd(){
    if(currTile.src ===""){
        return ;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns+=1;
    document.getElementById('turns').innerText = turns;

}
function touchStart() {
    // Get the initial touch position and perform any necessary setup
    
    currTile = this;
    // Your code here
  }
  
  function touchMove(e) {
    // Get the updated touch position and update the element's position
    const touch = e.touches[0];
    // Your code here
    e.preventDefault();
  }
  
  function touchEnd(event) {
    // Perform any necessary cleanup or final actions
    // Your code here
    if(currTile.src ===""){
        return ;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns+=1;
    document.getElementById('turns').innerText = turns;
  }