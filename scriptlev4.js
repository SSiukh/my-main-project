const mazeData = [
    [1,1,1,3,1,1,1,1,1,1,1],
    [1,0,1,2,1,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,1],
    [1,3,1,1,1,1,1,0,1,0,1],
    [1,2,3,0,0,1,0,2,3,0,1],
    [1,0,1,1,0,0,0,1,1,1,1],
    [1,0,1,1,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,0,1,1,1]
];
let playerPosition = {x: 9, y: 7};
let TaskComplete = [0,0,0];

function RenderMaze(){
    for(let row = 0; row < mazeData.length; row++){
        for(let col = 0; col < mazeData[row].length; col++){
            if(mazeData[row][col] === 1){
                document.getElementById(`maze-${row}-${col}`).classList.add('maze-wall');
            } else if(mazeData[row][col] === 2){
                document.getElementById(`maze-${row}-${col}`).classList.add('maze-gold');
            } else if(mazeData[row][col] === 0){
                document.getElementById(`maze-${row}-${col}`).classList.add('maze-road');
            } else {
                document.getElementById(`maze-${row}-${col}`).classList.add('maze-door');
            }
            if(playerPosition.x === row && playerPosition.y === col){
                document.getElementById(`maze-${row}-${col}`).classList.add('maze-player');
            } else {
                document.getElementById(`maze-${row}-${col}`).classList.remove('maze-player');
            }
        }
    }
}



function MovePlayer(event) {
    const {x, y} = playerPosition;
    let newX = x;
    let newY = y;

    switch(event.key) {
        case 'ArrowUp':
            newX -= 1;
            break;
        case 'ArrowDown':
            newX += 1;
            break;
        case 'ArrowLeft':
            newY -= 1;
            break;
        case 'ArrowRight':
            newY += 1;
            break;
    }
    if (newX >= 0 && newX < mazeData.length && newY >= 0 && newY < mazeData[0].length && mazeData[newX][newY] === 0 || mazeData[newX][newY] === 2) {
        playerPosition = { x: newX, y: newY };
        RenderMaze();
        GoldenBlock();
        console.log(playerPosition);
    }
    
}

function GoldenBlock(){
    if(playerPosition.x === 5 && playerPosition.y === 1 && TaskComplete[0] === 0){
        setTimeout(function(){
            document.getElementById('maze-task1').style.display = 'flex';
        }, 1000)
    } else if(playerPosition.x === 5 && playerPosition.y === 7 && TaskComplete[1] === 0){
        setTimeout(function(){
            document.getElementById('maze-task2').style.display = 'flex';
        }, 1000)
    } else if(playerPosition.x === 1 && playerPosition.y === 3 && TaskComplete[2] === 0){
        setTimeout(function(){
            document.getElementById('maze-task3').style.display = 'flex';
        }, 1000)
    } else {
        document.getElementById('maze-task1').style.display = 'none';
        document.getElementById('maze-task2').style.display = 'none';
        document.getElementById('maze-task3').style.display = 'none';
    }
}

function FirstMazeTask(){
    TaskComplete[0] = 1;
    mazeData[5][1] = 0;
    document.getElementById('maze-5-1').style.backgroundColor = 'gray';
    mazeData[4][1] = 0;
    document.getElementById('maze-4-1').style.backgroundColor = '#595959';
    mazeData[5][2] = 0;
    document.getElementById('maze-5-2').style.backgroundColor = '#595959';
    document.getElementById('maze-task1').style.display = 'none';
    RenderMaze();
}
function SecondMazeTask(){
    TaskComplete[1] = 1;
    mazeData[5][7] = 0;
    document.getElementById('maze-5-7').style.backgroundColor = 'gray';
    mazeData[5][8] = 0;
    document.getElementById('maze-5-8').style.backgroundColor = '#595959';
    document.getElementById('maze-task2').style.display = 'none';
    RenderMaze();
}
function ThirdMazeTask(){
    TaskComplete[2] = 1;
    mazeData[1][3] = 0;
    document.getElementById('maze-1-3').style.backgroundColor = 'gray';
    mazeData[0][3] = 0;
    document.getElementById('maze-0-3').style.backgroundColor = '#595959';
    document.getElementById('maze-task3').style.display = 'none';
    RenderMaze();
}

document.addEventListener('keydown', MovePlayer);
RenderMaze();