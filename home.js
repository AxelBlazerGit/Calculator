// greet user
let username;
document.getElementById("submit").onclick=function(){
    username=document.getElementById("username").value
    // console.log(username);
    document.getElementById("p0").textContent=`Hello, ${username}!`;
}
// circle mensuration
let radius;
document.getElementById("circleBtn").onclick=function(){
    radius=parseInt(document.getElementById("radius").value)
    // console.log(username);
    document.getElementById("circArea").textContent=`Area of circle with radius ${radius} = ${radius*radius*3.142} square units!`;
}
// click-unclick
// let count=Number(document.getElementById("count").value)
let count=0
document.getElementById("inc").onclick=function(){
    document.getElementById("count").textContent=`${++count}`;
}
document.getElementById("dec").onclick=function(){
    document.getElementById("count").textContent=`${--count}`;
}
document.getElementById("reset").onclick=function(){
    document.getElementById("count").textContent=`${0}`;
    count=0
}
// random num generator
document.getElementById("generateRandom").onclick = function() {
    let minn=parseInt(document.getElementById("minm").value);
    let maxx=parseInt(document.getElementById("maxm").value);
    if (!isNaN(minn) && !isNaN(maxx) && maxx > minn) {
        document.getElementById("randomNum").textContent=Math.floor(Math.random() * (maxx - minn + 1)) + minn;
    } else {
        document.getElementById("randomNum").textContent="Invalid input";
    }
};
// dice generator
function rollDice(){
    let numDice = parseInt(document.getElementById("numDice").value);
    let diceImages = document.getElementById("diceImages");
    diceImages.innerHTML ="";
    let values=[];
    let images=[];
    for (let i=0; i<numDice; i++) {
        values.push(Math.floor(Math.random()*6)+1);
        images.push(`<img src="dices/dice${values[i]}.svg" alt="dice:${values[i]}" style="width:50px;height:50px;">`);
    }
    diceImages.innerHTML=images.join('');
}
document.querySelector("button").onclick=rollDice;

// clock
function rtClock() {
    var currentdate = new Date(); 
    var day = String(currentdate.getDate()).padStart(2, '0');
    var month = String(currentdate.getMonth() + 1).padStart(2, '0');
    var year = String(currentdate.getFullYear()).padStart(4, '0');
    var date = day + "/" + month + "/" + year;
    var h = String(currentdate.getHours()).padStart(2, '0');
    var m = String(currentdate.getMinutes()).padStart(2, '0');
    var s = String(currentdate.getSeconds()).padStart(2, '0');
    var clock = document.getElementById("Time");
    clock.textContent = date + " " + h + ":" + m + ":" + s
    setTimeout(rtClock, 1000);
}
rtClock();

// stopwatch
flag=false
let m = 0, s = 0, ms = 0, swcount = 0;
let stopW = document.getElementById("sw");
stopW.textContent = "00:00:00";
start=document.getElementById("swstart")
stp=document.getElementById("swstop")
swreset=document.getElementById("swreset")
start.onclick = function() {
    flag = true;
    sw();
}
stp.onclick = function() {
    flag = false;
}
swreset.onclick = function() {
    console.log("reset clicked");
    
    stopW.textContent = "00:00:00";
    flag = false;
    sw()
    m = 0; ms = 0; s = 0; swcount = 0;
}
function sw() {
    if (flag) {
        swcount++;
        if (swcount == 100) {
            s += 1;swcount = 0;
        }
        if (s == 60) {
            s = 0;m += 1;
        }
        stopW.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0") + ":" + String(swcount).padStart(3, "0");
    }
    if (flag) {
        setTimeout(sw, 4);
    }
}




