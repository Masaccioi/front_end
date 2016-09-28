/**
 * Created by zhu on 2016/9/26.
 */
var momObj=function(){
    this.x;
    this.y;
    this.angl;
    this.bigEye=new Image();
    this.bigBody=new Image();
    this.bigTail=new Image();
}
momObj.prototype.init=function(){
    this.x=canW*0.5;
    this.y=canH*0.5;
    this.angl=0;
    this.bigEye.src="./src/bigEye0.png";
    this.bigBody.src="./src/bigSwim0.png";
    this.bigTail.src="./src/bigTail0.png";
}
momObj.prototype.draw=function(){
    //lerp() 坐标趋向目标值
    this.x=lerpDistance(mx,this.x,0.98);
    this.y=lerpDistance(my,this.y,0.99);
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;

    //lerp()角度
    this.angl=lerpAngle(beta,this.angl,0.9);
    ctx1.save();
    //重置画面，从画布中间开始画
    ctx1.translate(this.x,this.y);
    //旋转的量，用弧度表示。正值表示顺时针方向旋转，负值表示逆时针方向旋转。
    ctx1.rotate(this.angl);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
    ctx1.restore();
}

//获取鼠标移动的位置
function omMouseMove(e){
    if(e.offsetX|| e.layerX){
        mx= e.offsetX==undefined? e.layerX: e.offsetX;
        my= e.offsetY==undefined? e.layerY: e.offsetY;
    }
}