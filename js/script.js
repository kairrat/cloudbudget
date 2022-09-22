
let navbar = document.querySelector('.main_navbar');
let ul = document.querySelector('main_nav_menu');

document.querySelector('#menu-btn').onclick = () =>{
    show();
}
document.querySelector('.closemenu').onclick = () => {
    close();
}


function show ()   {
    document.querySelector('.main_navbar').style.display = 'flex';
    document.querySelector('.main_nav_menu').style.display = "flex";

    document.querySelector('.video_play').style.display = 'none';
    document.body.style.overflow = 'hidden';
    
    
}

function close(){
    document.querySelector('.main_navbar').style.display = 'none';
    document.querySelector('.main_nav_menu').style.display = "none";

}


window.onscroll = function() {
    let distanceScrolled = document.documentElement.scrollTop;
    
    if (distanceScrolled == 0) {
      document.querySelector('.navbar').style.backgroundColor = 'transperant'
    }
    else {
        document.querySelector('.navbar').style.backgroundColor = '#ED4C5C';

    }

}
