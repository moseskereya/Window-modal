const showNow = document.querySelector('.hide')
const hideNow = document.querySelector('.toggle')
const mosesNow = document.querySelector('.dix11')

let hideStatus = 1;
hideNow.onclick = function(){
    if(hideStatus === 1){
       showNow.style.visibility = 'visible';
       hideStatus = 0;
    }else{
        showNow.style.visibility = 'hidden';
        hideStatus = 1; 
    }
}
