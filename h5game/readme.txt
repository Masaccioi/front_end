1.html结构和样式
第一个canvas放置小鱼等
第二个canvas画背景
js
window.requestAnimFrame(gameloop);
记录上一帧时间，两帧之间的时间

2.画背景
ctx2.drawImage(bgPic,locx,locy,w,h);

3.绘制海葵
    H5 API
    ctx.beginPath();//开始一条线路
    ctx.closePath();//结束
    ctx.stroke();//绘制已定义路线
    lineCap  线条端的样式
 3.1海葵class属性：x（位置） len（高度） num数量
 3.2init 给海葵 x len 赋值
 3.3draw 画海葵 从下往上


4.画果实
  4.1画果实ctx2.drawImage(pic,x,y);
  4.2果实的大小和速度  设置上限大小15，速度[0.005,0.01)
  4.3果实上浮 改变y,   y<10 状态设置死亡
  4.4屏幕中只有15个果实，监听函数，num
  4.5果实有蓝色和橙色，随机数小于0.2为蓝


5.画鱼
    Math.atan2(y,x)+Math.PI;//计算反正切值【-pi,pi】
    lerpDistance   坐标趋向目标值
    lerpAngle      角度趋向目标值
    translate  从画布的中间开始画鱼
    5.1画鱼，眼睛身体尾巴在同一个点（this.x,this,y）,一开始是画布中间，尾巴向后30
    5.2omMouseMove 获得鼠标位置mx my,让鱼的中心点（this.x,this.y）逼近mx,my，以及角度

6.画小鱼
    5.1把小鱼画在画布中间
    5.2让小鱼跟着大鱼，方法同上，


二
1.小鱼尾巴摆动
    原理：8张图片存在一个数组中，然后设置一个定时器，每隔一段时间绘制下一张图片
    1.1小鱼尾巴 【匀速的序列帧，需要timer和count两个参数】
       timer每帧时间都不断增加，
       大于50时，（count【图片的下标】+1）%8   timer%50
       画鱼的地方用新的小鱼尾巴数组
    1.2小鱼眼睛 同上
       internal
    1.3大鱼喂小鱼
       和大鱼吃果实相同


