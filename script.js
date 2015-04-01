$(document).ready(function(){
    $('body').prepend('<div class="container"></div>')
    
    $('.container').prepend('<button onclick="newPad(); return false">New Pad</button>')
        .append('<ul></ul>')
        .append('<ul></ul>')
        .append('<ul></ul>')
        .append('<ul></ul>')
  
    $('ul').append('<li></li>')
        .append('<li></li>')
        .append('<li></li>')
        .append('<li></li>')

    eleCss();
});





function eleCss() {
    $('li').css({
        display: 'inline-block',
        'list-style-type': 'none',
        height: '25px',
        width: '25px',
        border: '1px black solid',
        margin: '0 1px',
        'box-sizing': 'border-box'
    }).hover(function() {
        $(this).css('background-color','#d9d9d9')
    });

    $('.container').css({
        margin: '0 auto',
        'text-align': 'center'
    });

    $('ul').css({
        padding: '0',
        margin: '0'
    });

    $('button').css({
        margin: '10px 0',
        'margin-left': '4px',
        padding: '10px',
        'font-size': '16px',
        'border-radius': '10px'
    });
};



function newPad() {
    $('.container').remove();

    $('body').prepend('<div class="container"></div>');

    var side = prompt('How many boxes should I generate per side? (90 max)');
    while (side > 90) {
        var side = prompt('90 is the max. Try again.');
    };

    $('.container').prepend('<button onclick="newPad(); return false">New Pad</button>');

    for (var i = 0; i < side; i++) {
        $('.container').append('<ul></ul>');
    }
    for (var i = 0; i < side; i++) {
        $('ul').append('<li></li>');
    }

    eleCss();
};