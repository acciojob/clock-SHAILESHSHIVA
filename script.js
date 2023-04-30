//your JS code here. If required.
const p = document.getElementById("clock");
let timer = new Date().toLocaleString();


function timer(){
	p.innerText = timer;
}

setInterval(timer,1000);


