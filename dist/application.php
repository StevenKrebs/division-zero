<?php
    $formData   = file_get_contents( 'php://input' );
    $data       = json_decode( $formData );

    $name       = $data->Name;
    $mail       = $data->EMail;
    $uplay      = $data->Uplay;
    $recipient  = $data->recipient;
    $subject    = $data->subject;
    $lang       = $data->lang;

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Uplay-Account: $uplay";
    $email_content .= "Sprache: $lang";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
    }
?>