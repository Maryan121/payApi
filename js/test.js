window.onresize = screen;
window.onload = screen;

function screen(){
    myWindth = window.innerWidth;
    document.getElementById('size').innerHTML = `width: ${myWindth} px`;
}