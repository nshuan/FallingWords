'use strict'

var blocklist = [];
var count = 0;
var n = 8;
var started = false, created = false, firstwave = false;
var subcount = 0;
var correctword = 0;
var incorrectword = 0;
var score = 0;
var over = true;
var inputupdate;
var checkstate;
var cr;

function play() {
    blocklist = [];
    var count = 0;
    n = 8;
    started = false; created = false; firstwave = false;
    subcount = 0;
    correctword = 0;
    incorrectword = 0;
    score = 0;
    over = false;
    document.getElementById("gameover").style.display = "none";
    $('#correct').text("Words: 0");
    $('#incorrect').text("Mistakes: 0"); 
    $('#correctnum').text("Words: 0");
    $('#incorrectnum').text("Mistakes: 0");
    $(".block").remove();
    var plbtn = document.getElementById("playButton");
    var plgrd = document.getElementById("playground");
    var scbar = document.getElementById("scorebar");
    plbtn.style.display = "none";
    plgrd.style.display = "block";
    scbar.style.display = "block";
    scbar.style.animation = "boxout 1s linear 0s";
    document.getElementById("typetext").focus();
    start();
}

function randomCaW() {
    var colornum = Math.floor(Math.random() * 7.9);
    var color;
    switch (colornum) {
        case 0: color = "#AEB9D4"; break;
        case 1: color = "#D4ACA3"; break;
        case 2: color = "#D4C5A3"; break;
        case 3: color = "#AED4C6"; break;
        case 4: color = "#688187"; break;
        case 5: color = "#D4A3B6"; break;
        case 6: color = "#D4CFA3"; break;
        case 7: color = "#87856F"; break;
    }
    var wordnum = Math.floor(Math.random()*wlist.length);
    var word = wlist[wordnum];
    var ans = [];
    ans.push(color);
    ans.push(word);
    return ans;
}

function start() {
    createblock(8);
    inputupdate = setInterval(function() {
        var text = document.getElementById("typetext");
        var check;
        if (text.value[text.value.length-1] == " ") {
            check = text.value.slice(0, text.value.length-1);
            var bl = document.getElementsByClassName("block");
            for (var i = 0; i < bl.length; i ++) {
                if (blocklist[i] == check) {
                    bl[i].remove();
                    blocklist.splice(i, 1);
                    subcount --;
                    correctword ++;
                    score += check.length;
                    check = "0";
                    break;
                }
            }
            if (check != "0" && check != "") {
                incorrectword ++; 
                score -= Math.floor(check.length/2);
            }
            $('#correct').text("Words: " + String(correctword));
            $('#incorrect').text("Mistakes: " + String(incorrectword)); 
            $('#correctnum').text("Words: " + String(correctword));
            $('#incorrectnum').text("Mistakes: " + String(incorrectword)); 
            text.value = "";
        }
    }, 1)

    checkstate = setInterval(function() {
        var bl = document.getElementsByClassName("block");
        var gameoverboard = document.getElementById("gameover");
        var scoreshow = document.getElementById("score");
        var correshow = document.getElementById("correctnum");
        var incorshow = document.getElementById("incorrectnum");
        if (bl[0].offsetTop == "-50" && over == false) {
            $('.block').css('animation-play-state', 'paused');
            gameoverboard.style.display = "block";
            $('#scorebar').css({'animation': 'boxin 0.5s linear 0s', 'animation-fill-mode': 'forwards'});
            if (score < 0) score = 0;
            scoreshow.innerText = String(score);
            clearInterval(cr);
            clearInterval(inputupdate);
            over = true;
        }
    }, 1)
}

function createbl() {
    var caw = randomCaW();
    var block = document.createElement("div");
    var blocktext = document.createElement("p");
    block.className = "block";
    block.setAttribute('id', 'block' + String(count+1));
    block.style.backgroundColor = caw[0];
    blocktext.className = "blocktext";
    blocktext.innerText = caw[1];
    blocklist.push(caw[1]);
    block.appendChild(blocktext);
    var block_x = Math.floor(Math.random() * 7.9);
    block.style.left = String(6.25 + 12.5*block_x) + "%";
    var plg = document.getElementById("playground");
    plg.appendChild(block);
}

function createblock(x) {
    var subtimer = 0;
    cr = setInterval(function() {
        if (subcount < x) {
            if (subtimer == 120) {
                createbl();
                count ++;
                subcount ++;
                subtimer = 0;
            }
        }
        else {
            var bl = document.getElementsByClassName('block');
            //$('.block').css('animation-play-state', 'paused');
            bl[0].remove();
            blocklist.shift();
            subcount --;
        }
        subtimer ++;
    }, 10);
}

function mainmenu() {
    document.getElementById("playButton").style.display = "block";
    document.getElementById("playground").style.display = "none";
    document.getElementById("gameover").style.display = "none";
}
