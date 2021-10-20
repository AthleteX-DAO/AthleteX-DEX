$('#toggle > span').click(function() {
    var ix = $(this).index();

    $('#center').toggle( ix === 0 );
    $('#left').toggle( ix === 1 );
    $('#right').toggle( ix === 2 );
});