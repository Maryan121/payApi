const closeIcon = document.querySelector('#closeIcon')
const menuDisplayer = document.querySelector('#menuDisplayer')
const nav = document.querySelector('#nav')


menuDisplayer.addEventListener('click',function(){
    nav.style.display = 'block';
})

closeIcon.addEventListener('click',()=>{
    nav.style.display = 'none';
})


