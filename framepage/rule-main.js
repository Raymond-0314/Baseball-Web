var btn = document.getElementsByClassName("btn");
var btnState = [1, 0, 0, 0, 0];

var content = document.getElementsByClassName("content-in");

function start(){
    btn[0].style.backgroundColor = "#333";
    btn[0].style.color = "rgb(245, 245, 245)";
    content[0].style.display = "block";
}
start();
//--------------------------------------------------------------------
btn[0].addEventListener("click", function(){mouseClick(0)});
btn[1].addEventListener("click", function(){mouseClick(1)});
btn[2].addEventListener("click", function(){mouseClick(2)});
btn[3].addEventListener("click", function(){mouseClick(3)});
btn[4].addEventListener("click", function(){mouseClick(4)});
function mouseClick(n){
    if(btnState[n] == 0){
        clearAll();
        btnState[n] = 1;
        content[n].style.display = "block";
        btn[n].style.backgroundColor = "#333";
        btn[n].style.color = "rgb(245, 245, 245)";
    }
    
}
function clearAll(){
    for(var i = 0; i < 5; i++){
        btn[i].style.backgroundColor = "rgb(245, 245, 245)";
        btn[i].style.color = "#333";
        btnState[i] = 0;
        content[i].style.display = "none";
    }
}