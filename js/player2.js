var atkP2 = 0;
var defP2 = 0;
var traP2 = 0;
var speP2 = 0;
var movP2 = 0;
var lifeP2 = 3;
var deckP2Show = false;
var pickedCardP2 = 0;

var da2 = document.getElementById("aP2");
var dd2 = document.getElementById("dP2");
var dt2 = document.getElementById("tP2");
var ds2 = document.getElementById("sP2");
var dm2 = document.getElementById("mP2");

var deckP2 = document.getElementById("deckP2");

var deckListP2 = document.getElementsByClassName("cp2");

var deckSetP2 = ["0004", "0003", "0002", "0001", "0000", "0005", "0001", "0002", "0003", "0004", "0000", "0001", "0002", "0003", "0004"];

for(var i = 0; i < deckListP2.length; i++){
    var img = document.createElement("img");
    img.src = cardIds[deckSetP2[i]].image;
    deckListP2[i].appendChild(img);
}