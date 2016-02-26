/* Form management */
$('#submit').click(function() {
    $('.form-input-error').each(function() {
        $(this).remove();
    });
    var err = false;
    $('input:not(#submit)').each(function() {
        if(document.getElementById($(this).attr('id')).checkValidity() == false) {
            $(this).after('<span class="form-input-error">' + $(this).data('error') + '</span>');
            err = true;
            return;
        }
    });
    if (err == false) {
        $('#form').hide();
        var form = $('#application');
        var returnMessage = $('#form-result');
        var retryButton = $('#form-result #retry');
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
        .done(function(response) {
            // Set the message text.
            $(returnMessage).show();
            $(returnMessage).find('#form-result-text').text(response);

            // Clear the form.
            $('#application input').each(function(){
                $(this).val('');
            });
        })
        .fail(function(data) {
            $(retryButton).show().css('display', 'block');
            $(returnMessage).show();

            // Set the message text.
            $(returnMessage).find('#form-result-text').text("Error, please try again!");
        });
    }
});
