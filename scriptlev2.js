let Blocks = [];
let Elements = [];
let ElementsF = [];
const Play = document.getElementById('lev2-play-img');

for (i=0;i<8;i++){
    Blocks[i] = document.getElementById(`lev2-block-${i}`);
    Elements[i] = document.getElementById(`lev2-${i}`);
    ElementsF[i] = document.getElementById(`lev2-${i}-${i}`);
}

Blocks[0].onclick = function() {
    Show(0);
};
Blocks[1].onclick = function() {
    Show(1);
};
Blocks[2].onclick = function() {
    Show(2);
};
Blocks[3].onclick = function() {
    Show(3);
};
Blocks[4].onclick = function() {
    Show(4);
};
Blocks[5].onclick = function() {
    Show(5);
};
Blocks[6].onclick = function() {
    Show(6);
};
Blocks[7].onclick = function() {
    Show(7);
};

let BlockNum = [false, false, false, false, false, false, false, false];
let CompleteChek = [false, false, false, false, false, false, false, false];
let SecondPhase = false;

function Show(i){
    document.getElementById(`lev2-${i}`).style.display = 'flex';
    BlockNum[i] = true;
    NumClick();
    SearchCherry(i);
    SearchHouse(i);
    SearchSound(i);
    SearchBug(i);

    if(CompleteChek[0] === true && CompleteChek[1] === true && CompleteChek[2] === true && CompleteChek[3] === true && CompleteChek[4] === true && CompleteChek[5] === true && CompleteChek[6] === true && CompleteChek[7] === true){
        SecondPhase = true;
    }
    if(SecondPhase === true){
        console.log('We go to second phase!');
        Play.style.display = 'flex';
    }
}

let click = 0;
function NumClick(){
    click = 0;
    for(i=0;i<8;i++){
        if(BlockNum[i] === true){
            click+=1;
        }
    }
    console.log(click);
};

let preItems = 0;

function SearchCherry(items) {
    if (items === 0) {
        if (BlockNum[2] === true) {
            console.log('Cherry with 2 first');
        }
        if (click >= 2 && BlockNum[2] === false) {
            BlockNum[0] = false;
            setTimeout(function(preItems) {
                return function() {
                    Elements[0].style.display = 'none';
                    Elements[preItems].style.display = 'none';
                    BlockNum[preItems] = false;
                };
            }(preItems), 500);
        }
    } else if (items === 2) {
        if (BlockNum[0] === true) {
            console.log('Cherry with 1 first');
        }
        if (click >= 2 && BlockNum[0] === false) {
            BlockNum[2] = false;
            setTimeout(function(preItems) {
                return function() {
                    Elements[2].style.display = 'none';
                    Elements[preItems].style.display = 'none';
                    BlockNum[preItems] = false;
                };
            }(preItems), 500);
        }
    }

    preItems = items;

    if(BlockNum[0] === true && BlockNum[2] === true){
        BlockNum[0] = false;
        BlockNum[2] = false;
        CompleteChek[0] = true;
        CompleteChek[2] = true;
    }
}

let preItemsH = 0;

function SearchHouse(items) {
    if (items === 4) {
        if (BlockNum[6] === true) {
            console.log('House with 2 first');
        }
        if (click >= 2 && BlockNum[6] === false) {
            BlockNum[4] = false;
            setTimeout(function(preItemsH) {
                return function() {
                    Elements[4].style.display = 'none';
                    Elements[preItemsH].style.display = 'none';
                    BlockNum[preItemsH] = false;
                };
            }(preItemsH), 500);
        }
    } else if (items === 6) {
        if (BlockNum[4] === true) {
            console.log('House with 1 first');
        }
        if (click >= 2 && BlockNum[4] === false) {
            BlockNum[6] = false;
            setTimeout(function(preItemsH) {
                return function() {
                    Elements[6].style.display = 'none';
                    Elements[preItemsH].style.display = 'none';
                    BlockNum[preItemsH] = false;
                };
            }(preItemsH), 500);
        }
    }

    preItemsH = items;

    if(BlockNum[4] === true && BlockNum[6] === true){
        BlockNum[4] = false;
        BlockNum[6] = false;
        CompleteChek[4] = true;
        CompleteChek[6] = true;
    }
}

let preItemsS = 0;

function SearchSound(items) {
    if (items === 3) {
        if (BlockNum[7] === true) {
            console.log('Cherry with 2 first');
        }
        if (click >= 2 && BlockNum[7] === false) {
            BlockNum[3] = false;
            setTimeout(function(preItemsS) {
                return function() {
                    Elements[3].style.display = 'none';
                    Elements[preItemsS].style.display = 'none';
                    BlockNum[preItemsS] = false;
                };
            }(preItemsS), 500);
        }
    } else if (items === 7) {
        if (BlockNum[3] === true) {
            console.log('Cherry with 1 first');
        }
        if (click >= 2 && BlockNum[3] === false) {
            BlockNum[7] = false;
            setTimeout(function(preItemsS) {
                return function() {
                    Elements[7].style.display = 'none';
                    Elements[preItemsS].style.display = 'none';
                    BlockNum[preItemsS] = false;
                };
            }(preItemsS), 500);
        }
    }

    preItemsS = items;

    if(BlockNum[3] === true && BlockNum[7] === true){
        BlockNum[3] = false;
        BlockNum[7] = false;
        CompleteChek[3] = true;
        CompleteChek[7] = true;
    }
}

let preItemsB = 0;

function SearchBug(items) {
    if (items === 1) {
        if (BlockNum[5] === true) {
            console.log('Cherry with 2 first');
        }
        if (click >= 2 && BlockNum[5] === false) {
            BlockNum[1] = false;
            setTimeout(function(preItemsB) {
                return function() {
                    Elements[1].style.display = 'none';
                    Elements[preItemsB].style.display = 'none';
                    BlockNum[preItemsB] = false;
                };
            }(preItemsB), 500);
        }
    } else if (items === 5) {
        if (BlockNum[1] === true) {
            console.log('Cherry with 1 first');
        }
        if (click >= 2 && BlockNum[1] === false) {
            BlockNum[5] = false;
            setTimeout(function(preItemsB) {
                return function() {
                    Elements[5].style.display = 'none';
                    Elements[preItemsB].style.display = 'none';
                    BlockNum[preItemsB] = false;
                };
            }(preItemsB), 500);
        }
    }

    preItemsB = items;

    if(BlockNum[1] === true && BlockNum[5] === true){
        BlockNum[1] = false;
        BlockNum[5] = false;
        CompleteChek[1] = true;
        CompleteChek[5] = true;
    }
}


// Second Phase ///////////////////////////////////

Play.onclick = function() {
    document.getElementById('lev2-main-block').remove();
    document.getElementById('level2-phase-2-main-block').style.display = 'flex';
}


const imgCherry = document.querySelector('#lev2-img-phase2-cherry');
const imgBug = document.querySelector('#lev2-img-phase2-bug');
const imgHouse = document.querySelector('#lev2-img-phase2-house');
const imgSound = document.querySelector('#lev2-img-phase2-sound');
const divCherry = document.querySelector('#phase2-cherry');
const divBug = document.querySelector('#phase2-bug');
const divHouse = document.querySelector('#phase2-house');
const divSound = document.querySelector('#phase2-sound');

divBug.ondragover = allowDrop;
divCherry.ondragover = allowDrop;
divHouse.ondragover = allowDrop;
divSound.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

imgCherry.ondragstart = DragCherry;
imgBug.ondragstart = DragBug;
imgHouse.ondragstart = DragHouse;
imgSound.ondragstart = DragSound;

function DragCherry(event){
    event.dataTransfer.setData('cherry', event.target.id);
}
function DragBug(event){
    event.dataTransfer.setData('bug', event.target.id);
}
function DragHouse(event){
    event.dataTransfer.setData('house', event.target.id);
}
function DragSound(event){
    event.dataTransfer.setData('sound', event.target.id);
}

divBug.ondrop = DropBug;
divCherry.ondrop = DropCherry;
divHouse.ondrop = DropHouse;
divSound.ondrop = DropSound;

let CheckDrop = [false, false, false, false];

function DropBug(event){
    const selectElementId = event.dataTransfer.getData('bug');
    if(selectElementId === 'lev2-img-phase2-bug'){
        imgBug.style.display = 'none';
        document.getElementById('text-div-imgs-bug').style.display = 'flex';
        CheckDrop[0] = true;
    }
    AfterTextPh2();
}

function DropCherry(event){
    const selectElementId = event.dataTransfer.getData('cherry');
    if(selectElementId === 'lev2-img-phase2-cherry'){
        imgCherry.style.display = 'none';
        document.getElementById('text-div-imgs-cherry').style.display = 'flex';
        CheckDrop[1] = true;
    }
    AfterTextPh2();
}

function DropHouse(event){
    const selectElementId = event.dataTransfer.getData('house');
    if(selectElementId === 'lev2-img-phase2-house'){
        imgHouse.style.display = 'none';
        document.getElementById('text-div-imgs-house').style.display = 'flex';
        CheckDrop[2] = true;
    }
    AfterTextPh2();
}

function DropSound(event){
    const selectElementId = event.dataTransfer.getData('sound');
    if(selectElementId === 'lev2-img-phase2-sound'){
        imgSound.style.display = 'none';
        document.getElementById('text-div-imgs-sound').style.display = 'flex';
        CheckDrop[3] = true;
    }
    AfterTextPh2();
}

function AfterTextPh2(){
    if(CheckDrop[0] === true && CheckDrop[1] === true && CheckDrop[2] === true && CheckDrop[3] === true){
        document.getElementById('level2-phase2-main').style.display = 'none';
        document.getElementById('img-play-lev2').style.display = 'flex';
    }
}

function levelInformation(){
    const block = document.querySelector('#level-game-area');
    document.getElementById('lev2-main-block').style.display = 'none';
    document.getElementById('level2-phase-2-main-block').style.display = 'none';

    block.style.flexDirection = 'column';
    block.style.justifyContent = 'center';

    const text = document.createElement('p');

    text.textContent = 'Тарас, той що 9 березня народився, той що на сотці надрукований. Писав багато віршів, а тут згадане і тогочасне село, і тогочасна праця та звісно ж природа, така, знаєте - Українська!';
    text.className = 'info-text';
    text.id = 'level1-info-text';

    block.appendChild(text);
    document.querySelector('#exit-info-button').style.display = 'flex';
}

function Continue(){
        
    const block = document.querySelector('#level-game-area');
    document.getElementById('lev2-main-block').style.display = 'flex';
    
    const text = document.querySelector('#level1-info-text');
    document.querySelector('#exit-info-button').style.display = 'none';
    
    block.style.flexDirection = 'row';
    block.style.justifyContent = 'center';

    block.removeChild(text);
}