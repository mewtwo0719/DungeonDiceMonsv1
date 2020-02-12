var turn = "player1";
var selectField = false;

document.getElementById("dicesP1").classList.remove("hide");

function rollDice(pl, level){
    document.getElementById("dicesP1").classList.add("hide");
    document.getElementById("dicesP2").classList.add("hide");
    if(turn == pl){
        
    var result1 = dice(level);
    var result2 = dice(level);
    var result3 = dice(level);

    showResults(pl, result1, result2, result3);
    

    var canSummon = checkSummon(result1, result2, result3);
    
    if(canSummon){
        if(turn == "player1")
        deckP1Show = true;
        if(turn == "player2")
        deckP2Show = true;
        showDeck(turn);
        deckP1Show = false;
        deckP2Show = false;
        selectField = true;

    }

    countCrests(pl, result1);
    countCrests(pl, result2);
    countCrests(pl, result3);


    } else{console.log("it's not your turn")}
}


function lifeCounter(pl, lf){

        if(pl == "player1"){
            lifeP1 += lf;
            document.getElementById("lifeP1").innerHTML = "Life: ".concat(lifeP1);
        }

        if(pl == "player2"){
            lifeP2 += lf;
            document.getElementById("lifeP2").innerHTML = "Life: ".concat(lifeP2);
        }

}
