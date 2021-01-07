let sides = document.getElementsByClassName('side');
let toplinks = document.getElementsByClassName('toplinks');
let lgs = document.getElementsByClassName('lgdiv');
let prjs = document.getElementsByClassName('prjdiv');
let sls = document.getElementsByClassName('sl');
let pnames = document.getElementsByClassName('PName');




var bigcur=false;
// let redbg='color: #FF6069;';
// const logo = document.querySelector('#logo');
// // const  = document.querySelector('#MNav');
// const logof = document.querySelector('#logof');
// logo.addEventListener('mouseover',function(){
//     // this.setAttribute('style',redbg);
//     bigcur=true;
    
//     })
// logo.addEventListener('mouseout',function(){
//     // this.setAttribute('style','color : #4A4A4A;');
//     bigcur=false;
//         })
// logof.addEventListener('mouseover',function(){
//     // this.setAttribute('style',redbg);
//     bigcur=true;
    
//     })
// logof.addEventListener('mouseout',function(){
//     // this.setAttribute('style','color : #4A4A4A;');
//     bigcur=false;
//         })
// MNav.addEventListener('mouseover',function(){
//     // this.setAttribute('style',redbg);
//     bigcur=true;
    
//     })
// MNav.addEventListener('mouseout',function(){
//     // this.setAttribute('style','color : #4A4A4A;');
//     bigcur=false;
//         })


for(side of sides)
{   
    side.addEventListener('mouseover',function(){
        // this.setAttribute('style',redbg+' cursor:none;');
        bigcur=true;

        })
    side.addEventListener('mouseout',function(){
        // this.setAttribute('style','color : #4A4A4A');
        bigcur=false;
        
            })
}
for(pname of pnames)
{   
    pname.addEventListener('mouseover',function(){
        if(this.classList.contains('blink-font1')){
            this.setAttribute("style","color:  #f51b58e5; transition: .8s;");
        }
        else if(this.classList.contains('blink-font2')){
            this.setAttribute("style","color:  #1b1c26b0; transition: .8s;");
        }
        else if(this.classList.contains('blink-font3')){
            this.setAttribute("style","color:   #F17E2E; transition: .8s;");
        }
        else if(this.classList.contains('blink-font4')){
            this.setAttribute("style","color:  #DAB10A; transition: .8s;");
        }
        bigcur=true;
        

        })
    pname.addEventListener('mouseout',function(){
        if(this.classList.contains('blink-font1')){
            this.setAttribute("style","animation: blinkFont1 2s infinite;");
        }
         else if(this.classList.contains('blink-font2')){
            this.setAttribute("style","animation: blinkFont2 2s infinite;");
        }
        else if(this.classList.contains('blink-font3')){
             this.setAttribute("style","animation: blinkFont3 2s infinite;");
        }
        else if(this.classList.contains('blink-font4')){
            this.setAttribute("style","animation: blinkFont4 2s infinite;");
        }
       
        bigcur=false;
        
            })
}
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
for(sl of sls)
{   
    sl.addEventListener('mouseover',function(){
        // this.setAttribute('style',redbg+' cursor:none;');
        bigcur=true;

        })
   sl.addEventListener('mouseout',function(){
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


let readbutton = document.getElementById('read');
readbutton.addEventListener('mouseover',function(){
    this.setAttribute("style","height:29%; width:29%;  ");
   bigcur=true;
});

readbutton.addEventListener('mouseout',function(){
    this.setAttribute("style","height:44px; width:181px;");
    bigcur=false;
});

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