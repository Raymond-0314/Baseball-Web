var pageWidth  = window.innerHeight;

var contentRule = document.getElementById("content-rule");
var contentCpbl = document.getElementById("content-cpbl");
var contentData = document.getElementById("content-data");
var contentPitch = document.getElementById("content-pitch");

var t = 10;



function start(){
    contentRule.style.height = (pageWidth - 46 - 60 - 40 + t) + "px";
    contentCpbl.style.height = (pageWidth - 46 - 60 - 40 + t) + "px";
    contentPitch.style.height = (pageWidth - 46 - 60 - 40 + t) + "px";
    contentData.style.height = (pageWidth - 46 - 60 - 40 + t) + "px";
}
start();
window.addEventListener('resize', start);