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