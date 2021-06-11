const select = document.querySelector("#select");
const options = document.querySelector("#options");
const optionSelect = document.querySelector("#select .contenidoSelect");
const hiddenInput = document.querySelector("#inputSelect");
const court = document.querySelector(".court");
const player = document.querySelector(".player");
const space = document.querySelectorAll(".space");
const players = document.querySelector(".players");
const colors = document.querySelectorAll(".colors");
const text = document.querySelectorAll(".text");

/*Select box config*/
document.querySelectorAll("#options > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    optionSelect.innerHTML = e.currentTarget.innerHTML;
    select.classList.toggle("active");
    options.classList.toggle("active");
    hiddenInput.value = e.currentTarget.querySelector(".title").innerText;
    switch (hiddenInput.value) {
      case "W":
        document.getElementById("s1").classList.remove("m");
        document.getElementById("s3").classList.remove("m");
        document.getElementById("s5").classList.remove("m");
        document.getElementById("s7").classList.remove("m");
        document.getElementById("s9").classList.remove("m");
        document.getElementById("s1").classList.add("w");
        document.getElementById("s3").classList.add("w");
        document.getElementById("s5").classList.add("w");
        document.getElementById("s7").classList.add("w");
        document.getElementById("s9").classList.add("w");
        break;

      case "Media Luna":
        document.getElementById("s1").classList.remove("w");
        document.getElementById("s3").classList.remove("w");
        document.getElementById("s5").classList.remove("w");
        document.getElementById("s7").classList.remove("w");
        document.getElementById("s9").classList.remove("w");
        document.getElementById("s1").classList.add("m");
        document.getElementById("s5").classList.add("m");
        document.getElementById("s7").classList.add("m");
        document.getElementById("s9").classList.add("m");
        break;
      case "Línea":
        document.getElementById("s1").classList.remove("w");
        document.getElementById("s3").classList.remove("w");
        document.getElementById("s5").classList.remove("w");
        document.getElementById("s7").classList.remove("w");
        document.getElementById("s9").classList.remove("w");
        document.getElementById("s1").classList.remove("m");
        document.getElementById("s3").classList.remove("m");
        document.getElementById("s5").classList.remove("m");
        document.getElementById("s7").classList.remove("m");
        document.getElementById("s9").classList.remove("m");
        break;
    }
  });
});

select.addEventListener("click", () => {
  select.classList.toggle("active");
  options.classList.toggle("active");
});

/*Drag and drop */

document.querySelectorAll(".players > .bench > .player").forEach((player) => {
  player.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id", e.target.id);
    window.numero = e.target.id;
  });
  player.addEventListener("drag", (e) => {
  });
  player.addEventListener("dragend", (e) => {
  });
});

court.addEventListener("dragover", (e) => {
  e.preventDefault();
});
players.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.querySelectorAll(".space").forEach((space) => {
  space.addEventListener("drop", (e) => {
    space.appendChild(document.getElementById(numero));
  });
});

document.querySelectorAll(".bench").forEach((bench) => {
  bench.addEventListener("drop", (e) => {
    bench.appendChild(document.getElementById(numero));
  });
});

/**Players attributes */

function colorChange() {
  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function () {
      var colorId = this.id;
      var playerId = "p " + colorId.split(" ")[1];
      var color = document.getElementById(colorId).value;
      document.getElementById(playerId).style.backgroundColor = color;
    });
  };
}


text.forEach((text) => {
  text.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) { 
      e.preventDefault();
      textChange();
    }
  });
});

function textChange() {
  
    for (var i = 0; i < text.length; i++) {
          
          var textId = text[i].id;
          var playerId = "p " + textId.split(" ")[1];
          var newText = document.getElementById(textId).value;
          document.getElementById(playerId).innerHTML = newText;
        
    };
}
