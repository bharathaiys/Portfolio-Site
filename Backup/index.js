// let topheads = document.getElementsByClassName('toplinks');
var bigcur=false;
// let redbg='color: #FF6069;';
// const logo = document.querySelector('#logo');

// logo.addEventListener('mouseover',function(){
//     this.setAttribute('style',redbg);
//     bigcur=true;
    
//     })
// logo.addEventListener('mouseout',function(){
//     this.setAttribute('style','color : #4A4A4A;');
//     bigcur=false;
//         })


// for(tophead of topheads)
// {   
//     tophead.addEventListener('mouseover',function(){
//         this.setAttribute('style',redbg+' cursor:none;');
//         bigcur=true;

//         })
//     tophead.addEventListener('mouseout',function(){
//         this.setAttribute('style','color : #4A4A4A');
//         bigcur=false;
        
//             })
// }

// let shadow='filter: drop-shadow(0px 2px 4px #9B9B9B)';
// let shadowoff='filter: drop-shadow(none)';

// let bright='filter: brightness(115%)';
// let brightoff='filter: brightness(initial)';

const cursor = document.querySelector('.cursor');
const curfl = document.querySelector('.cursor-follower');


// let subbutton = document.getElementById('sub');
// subbutton.addEventListener('mouseover',function(){
//     this.setAttribute('style',bright);
//    bigcur=true;
// });

// subbutton.addEventListener('mouseout',function(){
//     this.setAttribute('style',brightoff);
//     bigcur=false;
// });

        document.addEventListener('mousemove', e => {
            if(bigcur==false){
                cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;");
                curfl.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
            }

            else{
                cursor.setAttribute("style", "top: "+(e.pageY - 11)+"px; left: "+(e.pageX - 11)+"px; background-color:#4593ad; height:22px; width:22px; opacity:1;");
                curfl.setAttribute("style", "top: "+(e.pageY - 13)+"px; left: "+(e.pageX - 13)+"px; background-color:#4593ad; opacity:0.6; height:26px; width:26px; transition:0ms;");
            }
           
        })