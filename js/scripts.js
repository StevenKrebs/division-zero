window.$ = require('jquery');

/* Loading animation handler */
$(document).ready(function() {
    setTimeout(function () {
        $('.loader').fadeOut('slow');
        $('main').fadeIn('slow').addClass('table');
        $('footer').fadeIn('slow').addClass('table');
    }, 2000);

    $('.forward i').click(function () {
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1000);
    });

    $('.backward i').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

/* Form management */
$('#submit').click(function() {
    $('.form-error').each(function() {
        $(this).remove();
    });
    var err = false;
    $('input:not(#submit)').each(function() {
        var thiz = document.getElementById($(this).attr('id'));
        if(thiz.checkValidity() == false) {
            $(this).after('<span class="form-error">' + $(this).data('error') + '</span>');
            err = true;
            return;
        }
    });
    if (err == false) {
        var form = $('#application');
        var returnMessage = $('#form-result');
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(returnMessage).removeClass('error');
                $(returnMessage).addClass('success');

                // Set the message text.
                $(returnMessage).text(response);

                // Clear the form.
                $('#application input:not([type="checkbox"])').each(function(){
                    $(this).val('');
                });
                $('#application input[type="checkbox"]').each(function(){
                    $(this).attr('checked',false);
                });
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(returnMessage).removeClass('success');
                $(returnMessage).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(returnMessage).text(data.responseText);
                } else {
                    $(returnMessage).text('Oops! An error occured and your message could not be sent.');
                }
            });
    }
});


/* Get Discord Data */
function setupDiscord() {
    var serverID = $('#discord-serverlink').data('server-id');
    $('#discord-userlist').fadeOut('slow');
    if($('#discord-userlist ul').length > 0) {
        $('#discord-userlist ul').remove();
    } else {
        $('#discord-userlist h3').after('<ul></ul>');
    }
    $.getJSON("https://discordapp.com/api/servers/" + serverID + "/widget.json", function(data) {
        var membersOnline = data.members.length;
        if (membersOnline > 0) {
            if (membersOnline == 1) {
                $('#discord-userlist h3').text(membersOnline + ' agent online:');
            } else {
                $('#discord-userlist h3').text(membersOnline + ' agents online:');
            }
            $.each(data.members, function() {
                $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar" /><span class="user_name">' + this.username + "</span></li>");
            });
        } else {
            $('#discord-userlist h3').text('No agent active!');
        }
    },$('#discord-userlist').fadeIn('slow'));
};
setInterval(setupDiscord(), 60000);


