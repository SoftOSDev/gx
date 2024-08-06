function chanlan(){
    document.getElementById("myDropdown").classList.toggle("show");}
var url = location.search;
if(url=="?lan=zh"){
    javascript:translate.changeLanguage('chinese_simplified');
}
if(url=="?lan=kr"){
    javascript:translate.changeLanguage('korean');
}
if(url=="?lan=jp"){
    javascript:translate.changeLanguage('japanese');
}
if(url=="?lan=en"){
    javascript:translate.changeLanguage('english');
}
if(url=="?lan=fr"){
    javascript:translate.changeLanguage('french');
}
