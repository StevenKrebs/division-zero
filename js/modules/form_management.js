/* Form management */
$('#submit').click(function() {
    $('.form-input-error').each(function() {
        $(this).remove();
    });
    var err = false;
    $('input:not(#submit)').each(function() {
        var thiz = document.getElementById($(this).attr('id'));
        if(thiz.checkValidity() == false) {
            if($(this).attr('type') == 'checkbox') {
                console.log($(this).find('label'))
                $(this).next('label').after('<br /><span class="form-input-error">' + $(this).data('error') + '</span>');
            } else {
                $(this).after('<span class="form-input-error">' + $(this).data('error') + '</span>');
            }
            err = true;
            return;
        }
    });
    if (err == false) {
        $('#form').hide();
        var form = $('#application');
        var returnMessage = $('#form-result');
        var retryButton = $('#form-result button');
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Set the message text.
                $(returnMessage).show();
                $(returnMessage).find('span').text(response);

                // Clear the form.
                $('#application input:not([type="checkbox"])').each(function(){
                    $(this).val('');
                });
                $('#application input[type="checkbox"]').each(function(){
                    $(this).attr('checked',false);
                });
            })
            .fail(function(data) {
                $(retryButton).show().css('display', 'block');
                $(returnMessage).show();

                // Set the message text.
                $(returnMessage).find('span').text("There was a network outage. Please try again!");
            });
    }
});
