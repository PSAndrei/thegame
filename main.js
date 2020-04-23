let time = 60;
let timer = document.getElementById('timeID');
timer.innerHTML = time;
let gamefield = document.getElementById('gamefield');
let iojik_number = 0;
let iojiks = [];
let footer_b = document.getElementById('big')
let numb = 5;
let sqw = 'vasiliy0';

gamefield.addEventListener('click', deleteIojik);
window.addEventListener ('keypress', rebulet);

initbullets();

createIojik('50%','50%');
createIojik('20%','50%');
createIojik('50%','10%');
createIojik('70%','20%');

function initbullets() {
    for (i = 0; i < numb; i++ ) {
        let b = "<div class='bulet'></div>";
        footer_b.innerHTML = footer_b.innerHTML + b;
    }
} 

let timerId = setInterval(function() {
    setTimer();
    if (time < 1) {
        clearInterval(timerId);
    }
  }, 1000);
   
function setTimer() {
    time = time - 1;
    timer.innerHTML = time;
}

function createIojik(x,y) {
    let iojik = "<div class='iojik' id='iojik-"+ iojik_number +"'></div>";
    gamefield.innerHTML = gamefield.innerHTML + iojik;
    let iojik_object = document.getElementById('iojik-' + iojik_number);
    iojik_object.style.left = x;
    iojik_object.style.top = y;
    iojiks[iojik_number] = iojik_object;

    iojik_number = iojik_number + 1;
}

function deleteIojik (e) {
    console.log(e.path[0]);
    if (e.path[0].classList.contains('iojik') && numb > 0 ) {
        let currentIojik =e.path[0];
        gamefield.removeChild(currentIojik);
    }

    

    if (numb >= 0) {
        
        numb = numb - 1;
        footer_b.innerHTML = "";

        for (i = 0; i < numb; i++ ) {
            let b = "<div class='bulet'></div>";
            footer_b.innerHTML = footer_b.innerHTML + b;
        }
    }
}



function rebulet (e) {
    if (e.code == "Space") {
        console.log(e);

        numb = 5;
        footer_b.innerHTML = "";

        for (i = 0; i < numb; i++ ) {
            let b = "<div class='bulet'></div>";
            footer_b.innerHTML = footer_b.innerHTML + b;
        }
    }
    
}

function start() {
    console.log('start');
    let maintimerId = setInterval(function() {
        setTimer();
      }, 10);
}

function move(dx,dy) {
    let iojik_all = document.documentElement.getElementsByClassName('iojik')
}
