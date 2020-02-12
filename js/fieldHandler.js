var fields = document.getElementsByClassName("field");
var field = [];
var fieldOcupation = [];

for(var i = 0; i < 19; i++){
    var curArr = [];
    var emptyArr = [];
    for(var j = 0; j < 13; j++){
        curArr.push(fields[j+i*13]);
        emptyArr.push(0);
    }
    field.push(curArr);
    fieldOcupation.push(emptyArr);
}

fieldOcupation[0][6] = 1;
fieldOcupation[18][6] = 2;

var o1 = [  [   [[1, 0], [2, 0], [-1, 0], [0, -1], [0, 1]], 
                [[0, -1], [-1, 0], [1, 0], [0, 1], [0, 2]], 
                [[-2, 0], [-1, 0], [1, 0], [0, -1], [0, 1]], 
                [[0, -2], [0, -1], [0, 1], [-1, 0], [1, 0]],   ],


            [   [[-2, 0], [-1, 0], [1, 0], [1, -1], [1, 1]], 
                [[-1, -1], [0, -1], [1, -1], [0, 1], [0, 2]], 
                [[-1, -1], [-1, 0], [-1, 1], [1, 0], [2, 0]], 
                [[0, -2], [0, -1], [-1, 1], [0, 1], [1, 1]]     ],


            [   [[0, -1], [1, -1], [-1, 0], [0, 1], [0, 2]], 
                [[-2, 0], [-1, 0], [0, -1], [1, 0], [1, 1]], 
                [[-1, 1], [0, -2], [0, -1], [0, 1], [1, 0]], 
                [[-1, -1], [-1, 0], [0, 1], [1, 0], [2, 0]]     ],


            [   [[-1, -2], [0, -2], [0, -1], [0, 1], [1, 1]], 
                [[-1, 0], [-1, 1], [1, 0], [2, 0], [2, -1]], 
                [[1, 2], [0, 2], [0, 1], [0, -1], [-1, -1]], 
                [[1, 0], [1, -1], [-1, 0], [-2, 0], [-2, 1]]     ],


            [   [[1, -1], [1, 0], [-1, 1], [0, 1], [-1, 2]], 
                [[-2, -1], [-1, -1], [-1, 0], [0, 1], [1, 1]], 
                [[-1, 1], [-1, 0], [1, -1], [0, -1], [1, -2]], 
                [[2, 1], [1, 1], [1, 0], [0, -1], [-1, -1]],    ]
        
        ];


var poX, poY;

var orientationF = 0;
var typeBox = 0;
var f = o1[typeBox][orientationF];


document.body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    //alert('success!');
    return false;
}, false);

document.body.addEventListener("keydown", boxOrientation, false);


function fieldOrientation(){
    if(selectField){
    if(turn == "player1") 
    turnP = "field-hoverP1";

    if(turn == "player2") 
     turnP = "field-hoverP2";

    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.remove(turnP);
    }
    orientationF++;
    if (orientationF >= 4) orientationF = 0;
    console.log(poX, poY);

    f = o1[typeBox][orientationF];;
    console.log(f);

    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.add(turnP);
    }

}
}

function boxOrientation(){

    if(selectField){
        if(turn == "player1") 
        turnP = "field-hoverP1";
    
        if(turn == "player2") 
         turnP = "field-hoverP2";

    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.remove(turnP);
    }
    typeBox++;
    if (typeBox >= 5) typeBox = 0;
    console.log(poX, poY);

    f = o1[typeBox][orientationF];;
    console.log(f);

    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.add(turnP);
    }

}
}



function onHover(el){
    if(selectField){
    if(turn == "player1") 
    turnP = "field-hoverP1";

    if(turn == "player2") 
     turnP = "field-hoverP2";

    el.classList.add("field-hover");

    for(var i = 0; i < 19; i++){
        if(field[i].includes(el)) poX = i;
    }
    poY = field[poX].indexOf(el);

    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.add(turnP);
    }
        field[poX][poY].classList.add(turnP);

}
}


function onOut(el){

    if(turn == "player1") 
    turnP = "field-hoverP1";

    if(turn == "player2") 
     turnP = "field-hoverP2";

    el.classList.remove("field-hoverP1", "field-hoverP1");

    for(var i = 0; i < 19; i++){
        if(field[i].includes(el)) poX = i;
    }
    poY = field[poX].indexOf(el);

    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.remove(turnP);
    }

    field[poX][poY].classList.remove(turnP);
    
}


function onClick(el){
    if(selectField){
    if(turn == "player1") 
    turnP = "field-activeP1";

    if(turn == "player2") 
     turnP = "field-activeP2";

    for(var i = 0; i < 19; i++){
        if(field[i].includes(el)) poX = i;
    }
    poY = field[poX].indexOf(el);

    var isLegal = true;

    for(var i = 0; i < 5; i++){
        if(fieldOcupation[poX+f[i][0]][poY+f[i][1]] != 0)
        isLegal = false;
    }

    if(isLegal){

    el.classList.add(turnP);
    for(var i = 0; i < 5; i++){
        field[poX+f[i][0]][poY+f[i][1]].classList.add(turnP);
        fieldOcupation[poX+f[i][0]][poY+f[i][1]] = 1;
    }
    
    var img = document.createElement("img");
    if(turn == "player1")
    img.src = cardIds[deckSetP1[pickedCardP1]].icon;
    if(turn == "player2")
    img.src = cardIds[deckSetP2[pickedCardP2]].icon;
    el.appendChild(img);
    //el.style.backgroundImage = "url(".concat(cardIds[deckSetP1[pickedCardP1]].icon);

    selectField = false;


}
}
}