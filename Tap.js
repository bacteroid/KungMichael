var curmap = "";
var step = 0;
var bufstep = 0;
var onetep = 2;
var totalen = 20;
var stage = 1;
var score = 0;
var time = 60;
var wind = 1;
var windtim = 3;
var curtemp = 28;
var rescreen;
var gobtn = "<input type='button' value=' ٩><)٩``｡｡ ' onclick='go();'>"

function init(){
	document.getElementById("tap").innerHTML="<input type='button' value='  ➤  ' onclick='startg()'>";
}

function startg(){
	step = 0;
	score = 0;
	time = 60;
	wind = 1;
	stage = 1;
	curtemp = 28;
	document.getElementById("tap").innerHTML="<div id ='time'>🌞"+curtemp+"℃ ⌛"+time+" 🥤"+score+"</div><br><div id ='screen'></div><br>"+gobtn;
	drawm(0);
	rescreen = setTimeout("refresh()",1000);
}

function drawm(blow){
	var floor;
	if(curtemp>50){
		floor="🔥";
	}
	else if(curtemp>40){
		floor="♨"
	}
	else{
		floor="🌲";
	}
	curmap="";
	alllen = 10;
	tot = parseInt((step/(totalen*stage))*100);
	stp = parseInt(tot/alllen);
	curmap+="🥤";
	for(var i=0; i<alllen-stp; i++){
		curmap+=floor;
	}
	if(blow==1){
		curmap+="🌫";
		curmap+="😖";
		for(var i=0; i<stp-2; i++){
			curmap+=floor;
		}
		document.getElementById("screen").innerHTML=curmap;
		setTimeout("drawm(0)",100);
	}
	else{
		if(curtemp>40){
			curmap+="😶💦";
			for(var i=0; i<stp-2; i++){
				curmap+=floor;
			}
		}
		else{
			curmap+="😶";
			for(var i=0; i<stp-1; i++){
				curmap+=floor;
			}
		}
		document.getElementById("screen").innerHTML=curmap;
	}
}

function refresh(){
	if(wind == 3){
		wind=1;
		if(step>0 && step==bufstep){
			step-=onetep*stage;
			score-=onetep*stage;
			drawm(1);
		}
		bufstep = step;
	}
	else{
		wind+=1;
	}
	if(time > 0){
		time-=1;
		document.getElementById("time").innerHTML="🌞"+curtemp+"℃ ⌛"+time+" 🥤"+score;
		rescreen = setTimeout("refresh()",1000);
	}
	else{
		document.getElementById("tap").innerHTML="<input type='button' value='  ↻  ' onclick='init();'><br><br>🥤❤️😶<br><br>"+score;
		clearTimeout(rescreen);
	}
}

function go(){
	wind=1;
	if(step<totalen*stage){
		step+=onetep;
		score+=onetep;
		drawm(0);
	}
	else{
		stage+=1;
		time+=5;
		curtemp+=stage;
		score+=100;
		step=0;
		drawm(0);
	}
}

