(function () {
    let timerID=null;
    function easeAnimation(obj,whole,fn) {
        clearInterval(timerID);
        timerID=setInterval(function () {
            let flag=true;
            for (let key in whole){
                if (!whole.hasOwnProperty(key)){continue;}
                let attr=key;
                let endPosition=whole[key];
                let style=getComputedStyle(obj);
                let initialPosition=parseInt(style[attr]) || 0;
                //判断步长正负取值
                let step=(endPosition-initialPosition)*0.3;
                console.log(step);
                initialPosition += step;
                if (Math.abs(Math.floor(step))>1){
                    flag=false;
                }else {
                    initialPosition=endPosition;
                }
                obj.style[attr]=initialPosition+"px";
            }
            if (flag){
                clearInterval(timerID);
                fn && fn();
            }
        },100);
    }
    function linearAnimation(obj,whole,fn) {
        clearInterval(timerID);
        timerID=setInterval(function () {
            //用于标记所有的属性是否完成动画
            let flag=true;
            for (let key in whole){
                if (!whole.hasOwnProperty(key)){continue;}
                let attr=key;
                let endPosition=whole[key];
                let style=getComputedStyle(obj);
                let initialPosition=parseInt(style[attr]) || 0;
                //判断步长正负取值
                let step=(initialPosition-endPosition)>0? -10:10;
                initialPosition += step;
                if (Math.abs(endPosition-initialPosition)>Math.abs(step)){
                    flag=false;
                }else {
                    initialPosition=endPosition;
                }
                obj.style[attr]=initialPosition+"px";
            }
            if (flag){
                clearInterval(timerID);
                fn && fn();
            }
        },50);
    }
    window.easeAnimation=easeAnimation;
    window.linearAnimation=linearAnimation;
})();