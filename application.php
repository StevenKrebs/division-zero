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
            echo "Your application data is incomplete. Program aborted.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "application@division-zero.org";

        // Set the email subject.
        $subject = "New application from $name for Team ZERO";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Uplay-Account: $account\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Application received, agent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "The network experienced an outage, please try again.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Nice try, rogue. Nice try.";
    }

?>