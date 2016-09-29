/**
 * Created by zhu on 2016/9/28.
 */
//判断大鱼和果实的距离
function momFruitCollision(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){
                fruit.dead(i);
            }
        }
    }
}

//大鱼小鱼距离
function momBabyCollision(){
    var l=calLength2(mom.x,mom.y,baby.x,baby.y);
    if(l<900){
        //baby复活
        baby.babyBodyCount=0;
    }
}