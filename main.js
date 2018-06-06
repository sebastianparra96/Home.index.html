$(document).ready(function(){
$('.icono').hide(); 
    
    $(window).scroll(function(){
     if($(this).scrollTop() > 100){
         $('.icono').fadeIn('1000');
     } else{
         $('.icono').fadeOut('1000');
     }             
    });
    $('.icono').click(function(){
        $('body,html').animate({
            scrollTop: 0
        },150);
    });
 });
