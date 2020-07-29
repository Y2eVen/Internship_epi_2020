function roll_dice(id) {
    var num = Math.floor(Math.random() * 6) + 1;
    dots_on_dice(num);
    var total = parseInt(document.getElementById(id).textContent);
    total += num;
    document.getElementById(id).innerHTML = total;

} 

function dots_on_dice(num) {
    if(num == 1) {
        document.getElementById("dot_dice_1").style.visibility = "hidden";
        document.getElementById("dot_dice_2").style.visibility = "hidden";
        document.getElementById("dot_dice_3").style.visibility = "hidden";
        document.getElementById("dot_dice_4").style.visibility = "visible";
        document.getElementById("dot_dice_5").style.visibility = "hidden";
        document.getElementById("dot_dice_6").style.visibility = "hidden";
        document.getElementById("dot_dice_7").style.visibility = "hidden";
    }
    
    if(num == 2) {
        document.getElementById("dot_dice_1").style.visibility = "hidden";
        document.getElementById("dot_dice_2").style.visibility = "visible";
        document.getElementById("dot_dice_3").style.visibility = "hidden";
        document.getElementById("dot_dice_4").style.visibility = "hidden";
        document.getElementById("dot_dice_5").style.visibility = "hidden";
        document.getElementById("dot_dice_6").style.visibility = "visible";
        document.getElementById("dot_dice_7").style.visibility = "hidden";
    }

    if(num == 3) {
        document.getElementById("dot_dice_1").style.visibility = "hidden";
        document.getElementById("dot_dice_2").style.visibility = "visible";
        document.getElementById("dot_dice_3").style.visibility = "hidden";
        document.getElementById("dot_dice_4").style.visibility = "visible";
        document.getElementById("dot_dice_5").style.visibility = "hidden";
        document.getElementById("dot_dice_6").style.visibility = "visible";
        document.getElementById("dot_dice_7").style.visibility = "hidden";
    }

    
    if(num == 4) {
        document.getElementById("dot_dice_1").style.visibility = "visible";
        document.getElementById("dot_dice_2").style.visibility = "visible";
        document.getElementById("dot_dice_3").style.visibility = "hidden";
        document.getElementById("dot_dice_4").style.visibility = "hidden";
        document.getElementById("dot_dice_5").style.visibility = "hidden";
        document.getElementById("dot_dice_6").style.visibility = "visible";
        document.getElementById("dot_dice_7").style.visibility = "visible";
    }


    if(num == 5) {
        document.getElementById("dot_dice_1").style.visibility = "visible";
        document.getElementById("dot_dice_2").style.visibility = "visible";
        document.getElementById("dot_dice_3").style.visibility = "hidden";
        document.getElementById("dot_dice_4").style.visibility = "visible";
        document.getElementById("dot_dice_5").style.visibility = "hidden";
        document.getElementById("dot_dice_6").style.visibility = "visible";
        document.getElementById("dot_dice_7").style.visibility = "visible";
    }

    
    if(num == 6) {
        document.getElementById("dot_dice_1").style.visibility = "visible";
        document.getElementById("dot_dice_2").style.visibility = "visible";
        document.getElementById("dot_dice_3").style.visibility = "visible";
        document.getElementById("dot_dice_4").style.visibility = "hidden";
        document.getElementById("dot_dice_5").style.visibility = "visible";
        document.getElementById("dot_dice_6").style.visibility = "visible";
        document.getElementById("dot_dice_7").style.visibility = "visible";
    }

}