$(".woodfish .click").click(function (e) {
    run()
});

$(".list").click(function (e) { 
    var data = $(this).attr("data");
    if (data == "reset") {
        Merit = 0;
        $(".text .text_1").text("当前功德：" + Merit);
    } else if (data == "about") {
        alert("敲电子木鱼，积虚拟功德，见赛博佛祖")
    } else if (data == "hide") {
        
    }
});

//主函数
function run() {
    audio_play()            //播放木鱼敲击声
    Data_control("click")   //加功德
    animation()             //显示木鱼动画
    animation_text()        //显示“功德+1”
}

//从11种木鱼声音中随机选择一种播放
function audio_play() {
    var audio = new Audio("audio/" + randomNum(1,11) + ".mp3");
    audio.play();
}

//木鱼动画
function animation() {
    $(".woodfish .click img").css("width", "150px");
    setTimeout(() => {
        $(".woodfish .click img").css("width", "200px");
    }, 100);
}

//显示“功德+1”
function animation_text() {
    var randomNum_1 = randomNum(0,100000)
    $(".woodfish").append("<div id=\"text_tips_" +randomNum_1+ "\" class=\"text_tips\">功德+1</div>");
    setTimeout(() => {
        $(".woodfish .text_tips").css("margin-bottom", "300px");
    }, 5);
    setTimeout(() => {
        $("#text_tips_" + randomNum_1).css("opacity", "0");
    }, 15);
    setTimeout(() => {
        $("#text_tips_" + randomNum_1).remove();
    }, 500);
}

//设置cookie以保存功德数
if ($.cookie("Merit") == undefined) $.cookie("Merit", "0", { expires: 30 })
var Merit = 0;
Merit = $.cookie("Merit")
Data_control("null")

//增加功德
function Data_control(Merit_data) {
    if(Merit_data == "click") {
        Merit++;
        $.cookie("Merit", Merit, { expires: 30 })
        $(".text .text_1").text("当前功德：" + Merit);
    } else {
        $(".text .text_1").text("当前功德：" + Merit);
    }
}


//自动敲木鱼，暂时未实现
var auto_run_data = false;
var auto_run_speed = 150;
function auto_run() {
    setTimeout(() => {
        if(auto_run_data != false) {
            auto_run()
        }
        run()
    }, auto_run_speed);
}

//生成区间[minNum,maxNum]内的随机整数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 


