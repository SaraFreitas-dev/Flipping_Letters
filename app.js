let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow(){
    let stt = 0;
        items[active].style.transform = "none";
        items[active].style.zIndex = 1;
        items[active].style.filter = "none" 
        items[active].style.opacity = 1;

    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) 
                                    scale(${1 - 0.2*stt})
                                    perspective(16px)
                                    rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)" 
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) 
                                    scale(${1 - 0.2*stt})
                                    perspective(16px)
                                    rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)" 
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function() {
    active = (active + 1 >= items.length) ? 0 : active + 1;
    loadShow();
}

prev.onclick = function() {
    active = (active - 1 < 0) ? items.length - 1 : active - 1;
    loadShow();
}


function flipCard(item) {
    item.classList.toggle('flipped');
}

function moveCarousel(direction, totalCards, cardWidth) {
    const carousel = document.querySelector('.carousel');
    currentIndex += direction;
    carousel.style.transform = `translateX(-${(currentIndex + totalCards) * cardWidth}px)`;
}

/* 
CHECK FLIP FUNCTION
function flipCard(item) {
    console.log("Clicked!");
    item.classList.toggle('flipped');
    console.log("Flipped class toggled:", item.classList.contains('flipped'));
}
*/