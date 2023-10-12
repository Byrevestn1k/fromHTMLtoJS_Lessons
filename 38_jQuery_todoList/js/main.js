$('#input').change(function(){
    $('ul').append(`<li>${$(this).val()}<i class="fa-solid fa-exclamation"></i> <i class="fa-solid fa-check"></i>  <i class="fa-solid fa-trash"></i></li>`)
    $(this).val('');
})

$('ul').on('click','.fa-check',function(){
    $(this).parent('li').toggleClass('checked');
})
$('ul').on('click','.fa-exclamation',function(){
    $(this).parent('li').toggleClass('important');
})
$('ul').on('click','.fa-trash',function(){
    $(this).parent('li').fadeOut(200);
})