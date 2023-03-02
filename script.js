for (var i = 0; i < 100; i++) {
  document.querySelector("#grid").innerHTML += `<div class='bulb off'></div>`;
}
var round = 0;

function playRound() {
  var bulbs = document.querySelectorAll(".bulb");
  for (var i = 0; i < bulbs.length; i++) {
    if ((i + 1) % round == 0) {
      if (bulbs[i].classList.contains("off")) {
        bulbs[i].classList.remove("off");
        bulbs[i].classList.add("on");
      } else {
        bulbs[i].classList.remove("on");
        bulbs[i].classList.add("off");
      }
    }
    document.querySelector("#number").innerHTML = round;
    document.querySelector(
      ".circle-wrap"
    ).style.background = `conic-gradient(#fff ${
      (360 * round) / 100
    }deg, transparent ${(360 * round) / 100}deg)`;
  }
}

// click event listener on #up

document.querySelector("#up").addEventListener("click", function () {
  if (round < 100) {
    round++;
    playRound();
  }
});
document.querySelector("#down").addEventListener("click", function () {
  if (round > 0) {
    playRound();
    round--;
    document.querySelector("#number").innerHTML = round;
    document.querySelector(
      ".circle-wrap"
    ).style.background = `conic-gradient(#fff ${
      (360 * round) / 100
    }deg, transparent ${(360 * round) / 100}deg)`;
  }
});
document.querySelector("#play").addEventListener("click", function () {
  if (round < 100) {
    var c1 = setInterval(function () {
      round++;
      if (round > 100) {
        clearInterval(c1);
      } else {
        playRound();
      }
    }, 100);
  }
});
document.querySelector("#replay").addEventListener("click", function () {
  round = 0;
  var bulbs = document.querySelectorAll(".bulb");
  for (var i = 0; i < bulbs.length; i++) {
    bulbs[i].classList.remove("on");
    bulbs[i].classList.add("off");
  }
  document.querySelector("#number").innerHTML = 0;
  document.querySelector(
    ".circle-wrap"
  ).style.background = `conic-gradient(#fff 
    0deg, transparent 0deg)`;
});
document.querySelector("#end").addEventListener("click", function () {
  if (round < 100) {
    var c2 = setInterval(function () {
      round++;
      if (round > 100) {
        clearInterval(c2);
      } else {
        playRound();
      }
    }, 1);
  }
});

document.querySelector("#pause").addEventListener("click", function () {
  var id = window.setInterval(function () {}, 0);
  while (id--) {
    window.clearInterval(id);
  }
});
