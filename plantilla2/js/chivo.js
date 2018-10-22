$('.toggle, #regi').click(function(){
    $('.tuma').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
    
    $('input:text').click(
    function(){
        $(this).val('');
    });
});