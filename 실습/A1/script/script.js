$(document).ready(function(){
    //**** 마우스오버  ****//
    //서브메뉴 숨기고 시작
    $(".subMenu").hide();
    // 마우스 오버
    $(".mainMenu").mouseover(function(){
      $(".subMenu").stop().slideDown(300);
     }).mouseout(function(){
      $(".subMenu").stop().slideUp(300);
    });
  
 //이미지슬라이드 좌우
 var imgs = 2;
 var now = 0;

 start();

 function start(){
   $(".imgSlide>a").eq(0).siblings().animate({width:"-1200px"});

   setInterval(function(){
     now = now==imgs ? 0 : now+=1;
     $(".imgSlide>a").eq(now-1).animate({width:"-1200px"});
     $(".imgSlide>a").eq(now).animate({width:"1200px"});
   },3000);
 }
    
    
    
    
  
  
    });