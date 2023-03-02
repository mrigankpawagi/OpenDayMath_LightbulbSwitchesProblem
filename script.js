for(var i = 0; i < 100; i++) {
    document.querySelector("#grid").innerHTML += `<div class='bulb off'></div>`;
}
var round = 1;
var c = setInterval(function() {
    var bulbs = document.querySelectorAll(".bulb");
    for(var i = 0; i < bulbs.length; i++) {
        if((i+1) % round == 0) {
            if(bulbs[i].classList.contains("off")) {
                bulbs[i].classList.remove("off");
                bulbs[i].classList.add("on");
            } else {
                bulbs[i].classList.remove("on");
                bulbs[i].classList.add("off");
            }
        }
        document.querySelector("#number").innerHTML = round;
        document.querySelector(".circle-wrap").style.background = `conic-gradient(#fff ${360 * round/100}deg, transparent ${360 * round/100}deg)`;
    }
    round++;
    if(round > 100) {
        clearInterval(c);
    }
}, 100);