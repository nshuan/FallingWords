'use strict'

var blocklist = [];
var count = 0;
var rcount = 0;
var revive = [true, true, true, true, true, true, true, true];
var n = 8;
var started = false, created = false, firstwave = false;
var subcount = 0;

function play() {
    var plbtn = document.getElementById("playButton");
    var plgrd = document.getElementById("playground");
    var inpb = document.getElementById("inputbox");
    plbtn.style.display = "none";
    plgrd.style.display = "block";
    inpb.style.display = "block";
    inpb.style.animation = "boxout 1s linear 0s";
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
    var cr = setInterval(function() {
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
            bl[0].remove();
            blocklist.shift();
            subcount --;
        }
        subtimer ++;
        console.log(blocklist);
    }, 10);
}

var inputupdate = setInterval(function() {
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
                break;
            }
        }
        text.value = "";
    }
}, 1)

