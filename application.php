<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["Agent-handle"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["Agent-email"]), FILTER_SANITIZE_EMAIL);
        $account = trim($_POST["Agent-account"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($account) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Deine Anfrage ist unvollständig. Programm abgebrochen, Agent.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "application@division-zero.org";

        // Set the email subject.
        $subject = "Neue Bewerbung von $name für Team ZERO";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Uplay-Account: $account";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Anfrage erhalten, Agent";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Es gab einen Ausfall im Netzwerk, versuche es nochmal!";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Ah ah ah, du hast das Zauberwort nicht gesagt!";
    }

?>