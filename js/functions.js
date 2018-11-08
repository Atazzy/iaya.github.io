$(window).scroll(function(){

 var wScroll = $(this).scrollTop();
 
 $('.header img').css({
 	'transform' : 'translate(0px, '+ wScroll /10 +'% )'
 });

});
