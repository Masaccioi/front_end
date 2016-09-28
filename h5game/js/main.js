var can1,can2;
var ctx1,ctx2;
var canW,canH;
var ane,fruit,mom,baby;
var mx,my;
var bgPic=new Image();
//lastTime上一帧执行的时间
//deltaTime两帧间隔的时间
var lastTime,deltaTime;
document.body.onload=game;
function game() {
	// body...
	deltaTime=0;
	lastTime=Date.now();
	init();
	gameloop();

}
function init() {
	// body...
	can1=document.getElementById('canvas1');
	ctx1=can1.getContext('2d');
	can2=document.getElementById('canvas2');
	ctx2=can2.getContext('2d');

	can1.addEventListener('mousemove',omMouseMove,false);

	bgPic.src="./src/background.jpg";
	canW=can1.width;
	canH=can1.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	baby=new babyObj();
	baby.init();

	mx=canW*0.5;
	my=canH*0.5;
}
function gameloop() {
	// body...
	//根据单前硬件的性能来决定画下一帧的时间，比setInterval,setTimeout只能
	//fps
	window.requestAnimFrame(gameloop);
	var now =Date.now();
	deltaTime = now - lastTime;	
	lastTime=now;
	if(deltaTime>50)deltaTime=50;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
//清空画板
	ctx1.clearRect(0,0,canW,canH);
	mom.draw();
	momFruitCollision();
	baby.draw();
}

