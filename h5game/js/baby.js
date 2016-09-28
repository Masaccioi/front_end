/**
 * Created by zhu on 2016/9/28.
 */
var babyObj=function(){
    this.x;
    this.y;
    this.angl;
    this.babyEye=new Image();
    this.babyBody=new Image();
    this.babyTail=new Image();
}
babyObj.prototype.init=function(){
    this.x=canW*0.5-50;
    this.y=canH*0.5+50;
    this.angl=0;
    this.babyEye.src="./src/babyEye0.png";
    this.babyBody.src="./src/babyFade0.png";
    this.babyTail.src="./src/babyTail0.png";
}
babyObj.prototype.draw=function(){

   this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);
    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;

    //lerp()角度
    this.angl=lerpAngle(beta,this.angl,0.9);
    //改变初始原点
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angl);
    ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5+23,-this.babyTail.height*0.5);
    ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
    ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
    ctx1.restore();
}