
$('.dropdown-menu>li').hover(function(){
    $(this).find('ul.dropdown-item').slideDown(1000); // show, hide, toggle, slideDown,slideUp,fadeIn,fadeOut,fadeTo,slideToggle
},function(){
    $(this).find('ul.dropdown-item').slideUp(100); // show, hide, toggle
})