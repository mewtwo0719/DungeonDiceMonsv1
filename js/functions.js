function dice(lvl){
    var randomNum = Math.floor(Math.random()*6) + 1;
    var output = "";


    switch(lvl){
        case 1: output = rollDice1(randomNum); break;
        case 2: output = rollDice2(randomNum); break;
        case 3: output = rollDice3(randomNum); break;
        case 4: output = rollDice4(randomNum); break;
    }

    return(output);
}


function rollDice1(rn){
    switch(rn){
        case 1: ;
        case 2: ;
        case 3: ;
        case 4: return ("summon"); break;
        case 5: return ("move"); break;
        case 6: return ("defense*2"); break;
        default: return (null);
    }
}


function rollDice2(rn){
    switch(rn){
        case 1: ;
        case 2: ;
        case 3: return ("summon"); break;
        case 4: return ("move*2"); break;
        case 5: return ("attack*2"); break;
        case 6: return ("spell"); break;
        default: return (null);
    }
}


function rollDice3(rn){
    switch(rn){
        case 1: ;
        case 2: return ("summon"); break;
        case 3: return ("move"); break;
        case 4: return ("move"); break;
        case 5: return ("attack"); break;
        case 6: return ("trap*2"); break;
        default: return (null);
    }
}


function rollDice4(rn){
    switch(rn){
        case 1: return ("summon"); break;
        case 2: return ("move*2"); break;
        case 3: return ("attack"); break;
        case 4: return ("defense"); break;
        case 5: return ("spell*2"); break;
        case 6: return ("trap"); break;
        default: return (null);
    }
}

function checkSummon(r1, r2, r3){
    var sC = 0;
    if (r1 == "summon") sC++;
    if (r2 == "summon") sC++;
    if (r3 == "summon") sC++;

    if(sC > 1) return true;
    else return false;
}

function countCrests(pl,r){
    if(pl == "player1"){
        switch(r){
            case "attack": atkP1++; break;
            case "attack*2": atkP1+=2; break;
            case "defense": defP1++; break;
            case "defense*2": defP1+=2; break;
            case "trap": traP1++; break;
            case "trap*2": traP1+=2; break;
            case "spell": speP1++; break;
            case "spell*2": speP1+=2; break;
            case "move": movP1++; break;
            case "move*2": movP1+=2; break;
        }

        da1.innerHTML = atkP1;
        dd1.innerHTML = defP1;
        dt1.innerHTML = traP1;
        ds1.innerHTML = speP1;
        dm1.innerHTML = movP1;
    }

    if(pl == "player2"){
        switch(r){
            case "attack": atkP2++; break;
            case "attack*2": atkP2+=2; break;
            case "defense": defP2++; break;
            case "defense*2": defP2+=2; break;
            case "trap": traP2++; break;
            case "trap*2": traP2+=2; break;
            case "spell": speP2++; break;
            case "spell*2": speP2+=2; break;
            case "move": movP2++; break;
            case "move*2": movP2+=2; break;
        }

        da2.innerHTML = atkP2;
        dd2.innerHTML = defP2;
        dt2.innerHTML = traP2;
        ds2.innerHTML = speP2;
        dm2.innerHTML = movP2;
    }
}

function showDeck(pl){
    if(pl == "player1") {
        if(deckP1Show){      
        deckP1.classList.remove("hide");
        }else{
        deckP1.classList.add("hide");
        }
        deckP1Show = !deckP1Show;
    }


    if(pl == "player2") {
        if(deckP2Show){      
        deckP2.classList.remove("hide");
        }else{
        deckP2.classList.add("hide");
        }
        deckP2Show = !deckP2Show;
    }
}

function pickedCard(pl, ind){
    if(pl == "player1"){
        pickedCardP1 = ind;
        showDeck(pl);
    }
    if(pl == "player2"){
        pickedCardP2 = ind;
        showDeck(pl);
    }
}


function endTurn(pl){
    if     (pl == "player2" && turn == "player2"){
        turn = "player1";
        document.getElementById("dicesP1").classList.remove("hide");
        document.getElementById("p1ui").classList.remove("playerInactive");
        document.getElementById("p2ui").classList.add("playerInactive");
    }  

    else if(pl == "player1" && turn == "player1"){
        turn = "player2";
        document.getElementById("dicesP2").classList.remove("hide");
        document.getElementById("p2ui").classList.remove("playerInactive");
        document.getElementById("p1ui").classList.add("playerInactive");
    }  


    console.log("ITS TURN ", turn);

}


function showResults(pl, r1, r2, r3){
    if(pl == "player1"){
    document.getElementById("resultP1").classList.remove("hide");
    resImg("p1d1", r1);
    resImg("p1d2", r2);
    resImg("p1d3", r3);
}

    if(pl == "player2"){
    document.getElementById("resultP2").classList.remove("hide");
        resImg("p2d1", r1);
        resImg("p2d2", r2);
        resImg("p2d3", r3);

}
}

function resImg(id, r){
    if(r == "attack" || r == "attack*2")
    document.getElementById(id).src = "dice/attack.png";
    if(r == "defense" || r == "defense*2")
    document.getElementById(id).src = "dice/defense.png";
    if(r == "trap" || r == "trap*2")
    document.getElementById(id).src = "dice/trap.png";
    if(r == "spell" || r == "spell*2")
    document.getElementById(id).src = "dice/spell.png";
    if(r == "movement" || r == "movement*2")
    document.getElementById(id).src = "dice/movement.png";
    if(r == "summon")
    document.getElementById(id).src = "dice/summon.png";

}


function hideResults(pl){
    if(pl == "player1")
    document.getElementById("resultP1").classList.add("hide");
    if(pl == "player2")
    document.getElementById("resultP2").classList.add("hide");
}




