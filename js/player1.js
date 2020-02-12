var atkP1 = 0;
var defP1 = 0;
var traP1 = 0;
var speP1 = 0;
var movP1 = 0;
var lifeP1 = 3;
var deckP1Show = false;
var pickedCardP1 = 0;

var da1 = document.getElementById("aP1");
var dd1 = document.getElementById("dP1");
var dt1 = document.getElementById("tP1");
var ds1 = document.getElementById("sP1");
var dm1 = document.getElementById("mP1");

var deckP1 = document.getElementById("deckP1");

var deckListP1 = document.getElementsByClassName("cp1");

var deckSetP1 = ["0000", "0001", "0002", "0003", "0004", "0005", "0001", "0002", "0003", "0004", "0000", "0001", "0002", "0003", "0004"];

for(var i = 0; i < deckListP1.length; i++){
    var img = document.createElement("img");
    img.src = cardIds[deckSetP1[i]].image;
    deckListP1[i].appendChild(img);
}