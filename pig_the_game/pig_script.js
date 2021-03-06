var total_id = "total_1";
var sec = 5;

function newGame() {
    document.getElementById("score_1").innerHTML = 0;
    document.getElementById("score_2").innerHTML = 0;
    document.getElementById(total_id).innerHTML = 0;
    total_id = "total_2";
    swTurn();
}

function rollDice() {
    var num = Math.floor(Math.random() * 6) + 1;
    setDots(num);
    console.log(num);
    if (num != 1) {

        var total = parseInt(document.getElementById(total_id).textContent);
        total += num;
        document.getElementById(total_id).innerHTML = total;

    } else {
        document.getElementById(total_id).innerHTML = 0;
        swTurn();
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
    setScore(total);
    swTurn();
}

function setVisibility(class_name, state) {
    var dots = document.getElementsByClassName(class_name)
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.visibility = state;
    }
}

function setScore(total) {
    var score_id;
    if (total_id == "total_1") {
        score_id = "score_1"
    } else {
        score_id = "score_2"
    }
    var score = parseInt(document.getElementById(score_id).textContent);
    score += total;
    document.getElementById(score_id).innerHTML = score;
    if (score >= 100) {
        win();
        
    }
}

function swTurn() {
    if (total_id == "total_1") {
        total_id = "total_2";
        setTurn("turn_1", "turn_2");
        setImg("div_1", "div_2");
        setColor("name_1", "name_2");

    } else {
        total_id = "total_1";
        setTurn("turn_2", "turn_1");
        setImg("div_2", "div_1");
        setColor("name_2", "name_1");
    }

}

function setTurn(hidden, visible) {
    document.getElementById(hidden).style.visibility = "hidden";
    document.getElementById(visible).style.visibility = "visible";
}

function setImg(none, gradient) {
    document.getElementById(none).style.backgroundImage = "none";
    var img_1 = "linear-gradient(to right, #FFFFFF , #F7F7F7)";
    var img_2 = "linear-gradient(to left, #FFFFFF , #F7F7F7)";
    if (gradient == "div_1") {
        document.getElementById(gradient).style.backgroundImage = img_1;
    } else {
        document.getElementById(gradient).style.backgroundImage = img_2;
    }
    
}

function setColor(lighter, darker) {
    document.getElementById(lighter).style.color = "#A1A1A1";
    document.getElementById(darker).style.color = "#696969";
}

function win() {
    
    var overlay = document.getElementById("overlay");
    var div_win = document.getElementById("div_win");
    overlay.style.visibility = "visible";
    div_win.style.visibility = "visible";
    var text;
    if (total_id == "total_1") {
        text = "PLAYER 1 WIN!"
    } else {
        text = "PLAYER 2 WIN!"
    }
    document.getElementById("p_win").innerText = text;
    setTimeout(function () {
        overlay.style.visibility = "hidden";
        div_win.style.visibility = "hidden";
        newGame();
    }, 5000)

    var p_time_out = document.getElementById("p_time_out");
    var timeout = 1000;
    while (timeout < 5000) {
        setTimeout(function(){getTime(p_time_out)}, timeout);
        timeout += 1000;
    }
    sec = 6;
    getTime(p_time_out); 
}

function getTime(p) {
    sec--;
    var time = "New game will start in " + sec + "s";
    p.innerText = time;
}
