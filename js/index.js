$(function(){
   var angle=0;//保存旋转的角度
   var oUl=$(".content ul").get(0),isRun=false;//获取旋转js对象
   $("#next").bind("click",next);
   $("#prev").bind("click",prev);
   function next(){
      if(!isRun){
         isRun=true;
         angle-=60;
         turn(oUl,angle);
      }
      
   }
   function prev(){
      if(!isRun){
         isRun=true;
         angle+=60;
         turn(oUl,angle);
      }
   	 
   }
   oUl.addEventListener("WebkitTransitionend",function(){
      isRun=false;
   },false);
   oUl.addEventListener("transitionend",function(){
      isRun=false;
   },false);
});
function turn(obj,angle){
   	  obj.style.WebkitTransform="translateZ(-433px) rotateY("+angle+"deg)";
   	  obj.style.MozTransform="translateZ(-433px) rotateY("+angle+"deg)";
   	  obj.style.Transform="translateZ(-433px) rotateY("+angle+"deg)";
}

