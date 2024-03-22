$(function () {

})


window.addEventListener('DOMContentLoaded', () => {
    //btn
const novelties = document.querySelector('.footer');
const btn = document.querySelector('.btnUp');

if(document && novelties){
    document.addEventListener('scroll', () => {
        if(scrollY > novelties.offsetHeight){
            btn.classList.add('btnUp-visible');
        }else{
            btn.classList.remove('btnUp-visible');
        }
        
    });
}



if(btn){
    btn.addEventListener('click', ()=>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth' 
      
        });
      });
}
})