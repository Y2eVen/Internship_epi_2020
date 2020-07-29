var total_id = "total_1";

function newGame() {
    document.getElementById(total_id).innerHTML = 0;
    document.getElementById("score_1").innerHTML = 0;
    document.getElementById("score_2").innerHTML = 0;
    if(total_id == "total_1") {
        total_id = "total_2";
        swTurn("turn_1", "turn_2", "div_1", "div_2", "name_1", "name_2");
    } else {
        total_id = "total_1";
        swTurn("turn_2", "turn_1", "div_2", "div_1", "name_2", "name_1");
    
    }
}

function rollDice() {
    var num = Math.floor(Math.random() * 6) + 1;
    setDots(num);
    console.log(num);
    if(num != 1) {

        var total = parseInt(document.getElementById(total_id).textContent);
        total += num;
        document.getElementById(total_id).innerHTML = total;

    } else {
        document.getElementById(total_id).innerHTML = 0;
        if(total_id == "total_1") {
            total_id = "total_2";
            swTurn("turn_1", "turn_2", "div_1", "div_2", "name_1", "name_2");
        } else {
            total_id = "total_1";
            swTurn("turn_2", "turn_1", "div_2", "div_1", "name_2", "name_1");
    
        }
        
    }
    
    
}

function setDots(num) {
    setVisibility("dot_dice", "hidden");
    if (num == 1) {
        
        document.getElementById("dot_dice_4").style.visibility = "visible";
        
    } else if (num == 2) {
        
        setVisibility("dot_dice_2_6", "visible");
        
    } else if (num == 3) {
        
        document.getElementById("dot_dice_4").style.visibility = "visible";
        setVisibility("dot_dice_2_6", "visible");

    } else if (num == 4) {
        
        setVisibility("dot_dice_2_6", "visible");
        setVisibility("dot_dice_1_7", "visible");

    } else if (num == 5) {

        setVisibility("dot_dice_2_6", "visible");
        setVisibility("dot_dice_1_7", "visible");
        document.getElementById("dot_dice_4").style.visibility = "visible";

    } else if (num == 6) {
        
        setVisibility("dot_dice_3_5", "visible");
        setVisibility("dot_dice_2_6", "visible");
        setVisibility("dot_dice_1_7", "visible");

    }
}

function hold() {
    var total = parseInt(document.getElementById(total_id).textContent);
    document.getElementById(total_id).innerHTML = 0;
    if(total_id == "total_1") {
        setScore("score_1", total);
        total_id = "total_2";
        swTurn("turn_1", "turn_2", "div_1", "div_2", "name_1", "name_2");
    } else {
        setScore("score_2", total);
        total_id = "total_1";
        swTurn("turn_2", "turn_1", "div_2", "div_1", "name_2", "name_1");
    }
    
}

function setVisibility(class_name, state) {
    var dots = document.getElementsByClassName(class_name)
    
    for(var i = 0; i < dots.length; i++) {
        dots[i].style.visibility = state;
        
    }
}

function setScore(score_id, total) {
    var score = parseInt(document.getElementById(score_id).textContent);
    score += total;
    document.getElementById(score_id).innerHTML = score;
    if(score >= 100) {
        console.log(score_id + " win")
    }
}

function swTurn(hidden, visible, none, gradient, lighter, darker) {
    document.getElementById(hidden).style.visibility = "hidden";
    document.getElementById(visible).style.visibility = "visible";
    document.getElementById(none).style.backgroundImage = "none";
    if(gradient == "div_1") {
        document.getElementById(gradient).style.backgroundImage = "linear-gradient(to right, #FFFFFF , #F7F7F7)";
    } else {
        document.getElementById(gradient).style.backgroundImage = "linear-gradient(to left, #FFFFFF , #F7F7F7)";
    }
    document.getElementById(lighter).style.color = "#A1A1A1";
    document.getElementById(darker).style.color = "#696969";
}