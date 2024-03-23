$(function () {
//product
$('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    dots: true,
    
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    // responsive: [
    //   {
    //     breakpoint: 650,
    //     settings: {
    //         dots: true,
    //     }
    //   },
     
    // ]
  
  });

})


window.addEventListener('DOMContentLoaded', () => {

    const tabsItem = document.querySelector('.tabs__item');
    const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
    const tabsContent = document.querySelectorAll('.tabs__content');
    
    function tabsHide(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
    
        tabsItemBtn.forEach(btn =>{
            btn.classList.remove('tabs-active');
        })
    }
    function tabsShow(i){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabsItemBtn[i].classList.add('tabs-active');
    }
    
    if(tabsItem && tabsContent && tabsItem){
      tabsItem.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('tabs__item-btn')){
            tabsItemBtn.forEach((item, i)=>{
                if(target == item){
                    tabsHide();
                    tabsShow(i);
                }
               
            })
           
        }
    })
    
    tabsHide();
    tabsShow(0);
    }




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


//MENU
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');

});


const filter = document.querySelector('.search__wrapper-filter');
const sidebar = document.querySelector('.recommend-sidebar');

    filter.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-mobile');
    })

})