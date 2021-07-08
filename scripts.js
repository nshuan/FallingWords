'use strict'

var blocklist = [];
var count = 0;
var revive = [true, true, true, true, true, true, true, true];

function play() {
    var plbtn = document.getElementById("playButton");
    plbtn.style.display = "none";
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

function createblock(x) {
    var cr = setInterval(function() {
        var caw = randomCaW();
        var block = document.createElement("div");
        var blocktext = document.createElement("p");
        block.className = "block";
        block.setAttribute('id', 'block' + String(count+1));
        block.style.backgroundColor = caw[0];
        blocktext.className = "blocktext";
        blocktext.innerText = caw[1];
        block.appendChild(blocktext);
        var block_x = Math.floor(Math.random() * 7.9);
        block.style.left = String(6.25 + 12.5*block_x) + "%";
        var plg = document.getElementById("playground");
        plg.appendChild(block);
        count ++;
        if (count == x) clearInterval(cr);
    }, 1000);
}

var reviveupdate = setInterval(function() {
    var bl = document.getElementsByClassName("block");
    for (var i = 0; i < bl.length; i ++) {
        if (bl[i].offsetTop < 0 && revive[i] == false) {
            var x = Math.floor(Math.random() * 7.9);
            bl[i].style.left = String(6.25 + 12.5*x) + "%";
            var newcaw = randomCaW();
            bl[i].style.backgroundColor = newcaw[0];
            bl[i].getElementsByClassName("blocktext")[0].innerText = newcaw[1];
            revive[i] = true;
        }
        if (bl[i].offsetTop >= 0 && revive[i] == true) revive[i] = false;
    } 
}, 1);


