'use strict'

var paragraph = "For effectively utilizing the time we must consider some points which will help us in our whole life. This utilization includes setting goals, prepare work lists, prioritize task, and take adequate sleep and various others. For effectively utilizing time set long and short term goals these goals will help you in remaining productive. Moreover, they will prove as a driving force that will keep you motivated. Also, this will give the willingness to achieve something in life. In the beginning, it will feel like a boring task but when you do it regularly then you will realize that that it only helps you to increase your productivity. Ultimately, this will force you to achieve more in life. Prioritizing task is a very effective way of managing time. Also, because of it, you will know the importance of various task and jobs. Apart from that, if your club and perform a similar activity in a go then it also increases your productivity. Hence, it will help you to achieve more in life. Being productive does not mean that you engage yourself in different tasks every time. Taking proper sleep and exercising is also part of being productive. Besides, proper exercise and sleep maintain a balance between body and mind which is very important for being productive and efficient."
paragraph = paragraph.toLowerCase();
var wlist = [];
var hook = 0;

for (var i = 0; i < paragraph.length; i ++) {
    if (paragraph[i] == " ") {
        if (paragraph[i-1] != "." && paragraph[i-1] != ",") {
            var sub = paragraph.substring(hook, i);
            hook = i + 1;
            wlist.push(sub);
        }
        else {
            var sub = paragraph.substring(hook, i-1);
            hook = i + 1;
            wlist.push(sub);
        }
    }
}

