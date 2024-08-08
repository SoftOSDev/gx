//people:人员 money:数额 changes:变动 reason:原因
//以数组的形式储存
var people=new Array("Q2K_", "xiaoqian_233", "NoCodeRockStar","FILLYLIN_light","Undefined（）","syx1233456");
var money=new Array("114514", "10", "10","0","0","60");
var changes=new Array("无", "无", "无","无","无","无");
var reason=new Array("开服", "摸鱼，管理服务器", "设计世界纪录村交所","此前因考试暂未上线","因学业未上线","修建大量红石机器；研发；赞助500");

//运行
var line;
function runtab(line){
    //由于数组是从0开始计算的，所以必须减一
    document.write("<tr><td width=\"50\">"+people[line-1]+"<\/td><td width=\"50\">"+money[line-1]+"<\/td><td width=\"150\">"+changes[line-1]+"<\/td><td width=\"150\">"+reason[line-1]+"<\/td><\/tr>");
}