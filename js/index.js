$(function(){
   var angle=0;//保存旋转的角度
   var oUl=$(".content ul").get(0);//获取旋转js对象
   $("#next").bind("click",next);
   $("#prev").bind("click",prev);
   function next(){
      angle-=60;
      turn(oUl,angle);
   }
   function prev(){
   	 angle+=60;
   	 turn(oUl,angle);
   }
   
});
function turn(obj,angle){
   	  obj.style.WebkitTransform="translateZ(-433px) rotateY("+angle+"deg)";
   	  obj.style.MozTransform="translateZ(-433px) rotateY("+angle+"deg)";
   	  obj.style.Transform="translateZ(-433px) rotateY("+angle+"deg)";
}

