
let toplinks = document.getElementsByClassName('toplinks');
let lgs = document.getElementsByClassName('lgdiv');
let prjs = document.getElementsByClassName('prjdiv');
let pnames = document.getElementsByClassName('PName');
let bigs = document.getElementsByClassName('big');



var bigcur=false;

for(toplink of toplinks)
{   
    toplink.addEventListener('mouseover',function(){
        // this.setAttribute('style',redbg+' cursor:none;');
        bigcur=true;

        })
    toplink.addEventListener('mouseout',function(){
        // this.setAttribute('style','color : #4A4A4A');
        bigcur=false;
        
            })
}
for(lg of lgs)
{   
    lg.addEventListener('mouseover',function(){
        // this.setAttribute('style',redbg+' cursor:none;');
        bigcur=true;

        })
   lg.addEventListener('mouseout',function(){
        // this.setAttribute('style','color : #4A4A4A');
        bigcur=false;
        
            })
}
for(prj of prjs)
{   
    prj.addEventListener('mouseover',function(){
        // this.setAttribute('style',redbg+' cursor:none;');
        bigcur=true;

        })
   prj.addEventListener('mouseout',function(){
        // this.setAttribute('style','color : #4A4A4A');
        bigcur=false;
        
            })
}

for(big of bigs)
{   
    big.addEventListener('mouseover',function(){
        // this.setAttribute('style',redbg+' cursor:none;');
        bigcur=true;

        })
    big.addEventListener('mouseout',function(){
        // this.setAttribute('style','color : #4A4A4A');
        bigcur=false;
        
            })
}
// let shadow='filter: drop-shadow(0px 2px 4px #9B9B9B)';
// let shadowoff='filter: drop-shadow(none)';

// let bright='filter: brightness(115%)';
// let brightoff='filter: brightness(initial)';

const cursor = document.querySelector('.cursor');
const curfl = document.querySelector('.cursor-follower');


        document.addEventListener('mousemove', e => {
            if(bigcur==false){
                cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;");
                curfl.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
            }

            else{
                cursor.setAttribute("style", "top: "+(e.pageY - 9)+"px; left: "+(e.pageX - 9)+"px; background-color:#00F3FF; height:18px; width:18px; opacity:1;");
                curfl.setAttribute("style", "top: "+(e.pageY - 13)+"px; left: "+(e.pageX - 13)+"px; background-color:#00F3FF; opacity:0.6; height:26px; width:26px; transition:0ms;");
            }
           
        })