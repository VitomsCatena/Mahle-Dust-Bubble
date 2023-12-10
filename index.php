<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Basic form validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required.";
    } else {
        $to = 'your-email@example.com';
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";

        $email_body = "Name: $name<br>";
        $email_body .= "Email: $email<br>";
        $email_body .= "Subject: $subject<br>";
        $email_body .= "Message:<br>$message";

        // Send email
        if (mail($to, $subject, $email_body, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Error sending email. Please try again later.";
        }
    }
}

?>
