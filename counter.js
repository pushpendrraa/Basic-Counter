let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decrease");
let countLabel=document.getElementById("countLabel");

let count=0;
increase.onclick=function(){
    count++;
    countLabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countLabel.textContent=count;
}