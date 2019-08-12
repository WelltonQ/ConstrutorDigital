$('.navmenu').on('click', 'li', function(){
    $('.navmenu li.active').removeClass('active');
    $(this).addClass('active');
})