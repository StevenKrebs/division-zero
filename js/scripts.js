window.$ = require('jquery');

/* Loading animation handler */
$(document).ready(function() {
    $('.imgChecker1').attr('src','img/backdrop2.jpg').load(function() {
        $('.imgChecker2').attr('src','img/backdrop1.jpg').load(function() {
            setTimeout(function() {
                $('header').fadeIn('slow').css('display','table');
                $('.loader').fadeOut('slow');
                $('main').fadeIn('slow').css('display','table');
                $('footer').fadeIn('slow').css('display','table');
            }, 200);
        });
    });

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
            if($(this).attr('type') == 'checkbox') {
                $(this).find('label').after('<span class="form-input-error">' + $(this).data('error') + '</span>');
            } else {
                $(this).after('<span class="form-input-error">' + $(this).data('error') + '</span>');
            }
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
                    $(returnMessage).text("Es gab einen Ausfall im Netzwerk, versuche es nochmal!");
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
                $('#discord-userlist h3').text(membersOnline + ' Agent online:');
            } else {
                $('#discord-userlist h3').text(membersOnline + ' Agenten online:');
            }
            $.each(data.members, function() {
                $('#discord-userlist ul').append('<li><img src="' + this.avatar_url + '" class="user_avatar" /><span class="user_name role-' + this.discriminator + '">' + this.username + "</span></li>");
            });
        } else {
            $('#discord-userlist h3').text('Kein Agent aktiv!').addClass('center');
        }
    },$('#discord-userlist').fadeIn('slow'));
};
setInterval(setupDiscord(), 60000);


