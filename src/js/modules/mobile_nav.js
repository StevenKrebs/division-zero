$('.mobile-nav a').each(function() {
    $(this).click(function(event) {
        var thiz = $(this).attr('href');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(thiz).offset().top
        }, 1000);
    })
});
