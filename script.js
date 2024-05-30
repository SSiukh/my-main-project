
// Theme /////////////////////////////////////////////////
var WhatIsBack = true;

function Theme(){
    var back = document.getElementById('first-full');

    if(WhatIsBack === true){
        back.style.backgroundColor = '#c7d2e8';
    }
    else{
        back.style.backgroundColor = '#091120';
    }

    var text = document.getElementById('first-text');
    if(WhatIsBack === true){
        text.style.color = '#091120';
    }
    else{
        text.style.color = '#FFF';
    }
    
    WhatIsBack = !WhatIsBack;
}

// level 1 ////////////////////////////////////////////////////////////////////////////
// /////dragn`drop

const stetsko = document.querySelector('#img-stetsko');
const documentEl = document.querySelector('#img-document');
const StetDoc = document.querySelector('#img-stetsko-document');
const balcon = document.querySelector('#img-balcon');
const StetBalc = document.querySelector('#img-stetsko-balcon');

documentEl.ondragover = allowDrop;  // коли закінчується перетягування На елемент
stetsko.ondragover = allowDrop;
balcon.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

stetsko.ondragstart = dragStetsko; //коли починається перетягування елемента
documentEl.ondragstart = dragDocument;
StetDoc.ondragstart = dragStetDoc;

function dragStetsko(event){
    event.dataTransfer.setData('stetsko', event.target.id);
}
function dragDocument(event){
    event.dataTransfer.setData('document', event.target.id);
}
function dragStetDoc(event){
    event.dataTransfer.setData('StetDoc', event.target.id);
}

documentEl.ondrop = dropDoc; //коли елемент було перетягнуто в цю зону
stetsko.ondrop = dropStet;
balcon.ondrop = dropBalcon;

function dropDoc(event){
    let selectElementId = event.dataTransfer.getData('stetsko');
    if(selectElementId === 'img-stetsko'){
        documentEl.style.display = 'none';
        stetsko.style.display = 'none';
        StetDoc.style.display = 'flex';
    }   
}
function dropStet(event){
    let selectElementId = event.dataTransfer.getData('document');
    if(selectElementId === 'img-document'){
        documentEl.style.display = 'none';
        stetsko.style.display = 'none';
        StetDoc.style.display = 'flex';
    }   
}
function dropBalcon(event){
    let selectElementId = event.dataTransfer.getData('StetDoc');
    if(selectElementId === 'img-stetsko-document'){
        documentEl.style.display = 'none';
        stetsko.style.display = 'none';
        StetDoc.style.display = 'none';
        balcon.style.display = 'none';
        StetBalc.style.display = 'flex';
        document.querySelector('#img-play').style.display = 'flex';
    }   
}

// /////info /////
function levelInformation(){
    const block = document.querySelector('#level-game-area');
    const elementsHide = block.children;
    for (let i = 0; i < elementsHide.length; i++) {
        elementsHide[i].style.display = 'none'; // Змінюємо стиль кожного дочірнього елемента окремо
    }
    block.style.flexDirection = 'column';
    block.style.justifyContent = 'center';

    const button = document.createElement('button');
    const buttonText = document.createElement('span');
    const text = document.createElement('p');

    text.textContent = 'Одного сонячного дня, коли українці вкотре показали свою снагу до свободи, коли навколо точились бої радянських та німецький військ, один з провідних ОУНівців зачитував текст. Нам пощастило знайти уривок, а звучав він якось так: "Волею українського народу Організація Українських Націоналістів під проводом Степана Бандери проголошує..." - сотні людей аплодувало тоді вусатому дядьку. Тоді український народ точно зробив вибір, що бажає сам керувати своїм життям і що він готовий боронити своє право на вільне життя у своїй власній, самостійній державі. ';
    text.className = 'info-text';
    text.id = 'level1-info-text';

    block.appendChild(text);
    document.querySelector('#exit-info-button').style.display = 'flex';
}

function Continue(){
        
    const block = document.querySelector('#level-game-area');

    const elementsHide = block.children;
    for (let i = 0; i < elementsHide.length; i++) {
        elementsHide[i].style.display = 'flex'; // Змінюємо стиль кожного дочірнього елемента окремо
    }
    const text = document.querySelector('#level1-info-text');
    
    document.querySelector('#exit-info-button').style.display = 'none';
    document.querySelector('#img-stetsko-document').style.display = 'none';
    document.querySelector('#img-stetsko-balcon').style.display = 'none';
    document.querySelector('#img-play').style.display = 'none';
    block.style.flexDirection = 'row';
    block.style.justifyContent = 'space-around';

    block.removeChild(text);
}


