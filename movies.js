$('button').on('click',function(event){
    event.preventDefault();
    
    $input1 = $('input').eq(0).val();
    $input2 = $('input').eq(1).val();

    $('body').append('<div></div>')
    $('div').append(`<p>${$input1}</p>`);
    $('div').append(`<p>${$input2}</p>`);
    $('div').append('<button class="remove">Remove!</button>');
    
})

$('body').on('click','div',function(){
    $(this).remove();
})