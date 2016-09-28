/**
 * Created by zhu on 2016/9/24.
 */
var fruitObj=function(){
    this.alive=[];
    this.x=[];
    this.y=[];
    this.spd=[];//每个果实成长速度，上浮的速度
    this.l=[];//果实的大小
    this.fruitType=[];
    this.orange=new Image();
    this.blue=new Image();
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;
        this.x[i]=0;
        this.y[i]=0;
        this.spd[i]=Math.random()*0.017+0.003;//[0.005,0.01)
        this.fruitType[i]="";
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
       if(this.alive[i]){
           if(this.fruitType[i]=="b"){
               var pic=this.blue;
           }else{
               var pic=this.orange;
           }
           if(this.l[i]<=14){
               this.l[i]+=this.spd[i]*deltaTime;
           }else{
               this.y[i]-=this.spd[i]*7*deltaTime;
           }
           //因为绘制从0,0开始，果实和海葵位置有偏差，要改变起始位置
           ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
           if(this.y[i]<10){
               this.alive[i]=false;
           }
       }
    }
}
fruitObj.prototype.born=function(i){
    //果实要长在海葵上面，记录这个海葵的位置和高度，就是果实的位置和高度
    var aneID=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneID];
    this.y[i]=canH-ane.len[aneID];
    this.l[i]=0;
    this.alive[i]=true;
    var ran=Math.random();
    if(ran<0.2){
        this.fruitType[i]="b";
    }else{
        this.fruitType[i]="o";
    }
}
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
}
function fruitMonitor(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) num++;
    }
    if(num<15){
        sentFruit();
        return;
    }
}
function sentFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}
//fruitObj.prototype.update=function(){
//    var num=0;
//    for(var i=0;i<this.num;i++){
//        if(this.alive[i])num++;
//    }
//}