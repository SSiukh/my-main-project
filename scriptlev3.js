
let firstBlockArr = [0,0,0,0,0,0];
let secondBlockArr = [0,0,0,0,0,0];

for(let i=0; i<6; i++){
    document.getElementById(`lev3-first-block-${i}`).addEventListener('click', function (){
        HandleFirstClick(i);
    })
    document.getElementById(`lev3-second-block-${i}`).addEventListener('click', function (){
        HandleSecondClick(i);
    })
    
}

function HandleFirstClick(index){
    for (let i = 0; i < firstBlockArr.length; i++) {
        firstBlockArr[i] = (i === index) ? 1 : 0;
    }

    // Оновлюємо класи у DOM
    for (let i = 0; i < firstBlockArr.length; i++) {
        let element = document.getElementById(`lev3-first-block-${i}`);
        if (firstBlockArr[i] === 1) {
            element.classList.add('clicked');
        } else {
            element.classList.remove('clicked');
        }
    }
    SelectHero();
}

function HandleSecondClick(index){
    for (let i = 0; i < secondBlockArr.length; i++) {
        secondBlockArr[i] = (i === index) ? 1 : 0;
    }

    // Оновлюємо класи у DOM
    for (let i = 0; i < secondBlockArr.length; i++) {
        let element = document.getElementById(`lev3-second-block-${i}`);
        if (secondBlockArr[i] === 1) {
            element.classList.add('clicked');
        } else {
            element.classList.remove('clicked');
        }
    }
    SelectHero();
}

function SelectHero(){
    if(secondBlockArr[5] === 1 && firstBlockArr[0] === 1){
        document.getElementById('lev3-first-img-0').style.display = 'block';
        document.getElementById('lev3-second-img-5').style.display = 'none';
        document.getElementById('lev3-second-info-5').style.display = 'block';
    } else if(secondBlockArr[4] === 1 && firstBlockArr[1] === 1){
        document.getElementById('lev3-first-img-1').style.display = 'block';
        document.getElementById('lev3-second-img-4').style.display = 'none';
        document.getElementById('lev3-second-info-4').style.display = 'block';
    } else if(secondBlockArr[0] === 1 && firstBlockArr[2] === 1){
        document.getElementById('lev3-first-img-2').style.display = 'block';
        document.getElementById('lev3-second-img-0').style.display = 'none';
        document.getElementById('lev3-second-info-0').style.display = 'block';
    } else if(secondBlockArr[2] === 1 && firstBlockArr[3] === 1){
        document.getElementById('lev3-first-img-3').style.display = 'block';
        document.getElementById('lev3-second-img-2').style.display = 'none';
        document.getElementById('lev3-second-info-2').style.display = 'block';
    } else if(secondBlockArr[3] === 1 && firstBlockArr[4] === 1){
        document.getElementById('lev3-first-img-4').style.display = 'block';
        document.getElementById('lev3-second-img-3').style.display = 'none';
        document.getElementById('lev3-second-info-3').style.display = 'block';
    } else if(secondBlockArr[1] === 1 && firstBlockArr[5] === 1){
        document.getElementById('lev3-first-img-5').style.display = 'block';
        document.getElementById('lev3-second-img-1').style.display = 'none';
        document.getElementById('lev3-second-info-1').style.display = 'block';
    } else {
        for(let i=0;i<firstBlockArr.length;i++){
            if(firstBlockArr[i] === 1){
                document.getElementById(`lev3-first-block-${i}`).style.backgroundColor = '#db45697a';
            }
        }
    }

    setTimeout(function(){
        for(let i=0;i<firstBlockArr.length;i++){
            document.getElementById(`lev3-first-block-${i}`).style.backgroundColor = '#c7d2e85d';
        }
    }, 1000);
}
