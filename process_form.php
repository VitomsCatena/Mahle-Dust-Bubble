<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Create the email message
    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Subject: $subject\n";
    $emailMessage .= "Message:\n$message";

    // Set the recipient email address
    $to = "vitomscatenathe1@email.com";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $emailMessage, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Email could not be sent.";
    }
}
?>
