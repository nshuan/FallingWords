'use strict'

var paragraph1 = "For effectively utilizing the time we must consider some points which will help us in our whole life. This utilization includes setting goals, prepare work lists, prioritize task, and take adequate sleep and various others. For effectively utilizing time set long and short term goals these goals will help you in remaining productive. Moreover, they will prove as a driving force that will keep you motivated. Also, this will give the willingness to achieve something in life. In the beginning, it will feel like a boring task but when you do it regularly then you will realize that that it only helps you to increase your productivity. Ultimately, this will force you to achieve more in life. Prioritizing task is a very effective way of managing time. Also, because of it, you will know the importance of various task and jobs. Apart from that, if your club and perform a similar activity in a go then it also increases your productivity. Hence, it will help you to achieve more in life. Being productive does not mean that you engage yourself in different tasks every time. Taking proper sleep and exercising is also part of being productive. Besides, proper exercise and sleep maintain a balance between body and mind which is very important for being productive and efficient."
var paragraph2 = "đây là một đoạn văn bằng tiếng Việt. Bánh mì thanh long là một loại mỳ làm từ quả thanh long, do Kao Siêu Lực sáng tạo nhằm giải cứu nông sản trong đại dịch. Loại bánh này sử dụng hỗn hợp bột bằng sinh tố thanh long thay cho nước để cho ra lớp vỏ màu hồng tươi. Khi mới ra mắt, món ăn đã thu hút được sự quan tâm lớn từ người tiêu dùng, khiến chuỗi cửa hàng của Cao Siêu Lực phải nâng mức sản xuất lên ổ bánh mỳ thanh long mỗi ngày chỉ trong thời gian ngắn. Ngoài ra, nhiều công thức chế biến thực phẩm làm từ thanh long còn bắt nguồn từ loại bánh này, nổi bật trong số đó là món bánh kẹp của hãng";
paragraph1 = paragraph1.toLowerCase();
paragraph2 = paragraph2.toLowerCase();
var paragraph = paragraph1;
var wlist = [];
var hook = 0;

function language(x) {
    wlist = [];
    if (x == 0) paragraph = paragraph1;
    else paragraph = paragraph2;
    splitwords();
}

function splitwords() {
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
}
