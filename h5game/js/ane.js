/**
 * Created by zhu on 2016/9/24.
 */
var aneObj=function(){
    this.x=[];
    this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        //海葵的位置，高度赋值
        this.x[i]=i*16+Math.random()*20;//[0.1)
        this.len[i]=200+Math.random()*50;
    }
    //console.log("a");

}
aneObj.prototype.draw=function(){
    //save 和 restore 定义他们中间的代码只在他们中间有效
    ctx2.save();
    ctx2.globalAlpha=0.6;//透明度
    ctx2.lineWidth=20;//线的宽度
    ctx2.lineCap="round";//线顶端的样式
    ctx2.strokeStyle="#3b154e";
    for(var i=0;i<this.num;i++){
        //每个海葵从下往上画
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canH);
        ctx2.lineTo(this.x[i],canH-this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}