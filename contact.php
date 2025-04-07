<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $description = htmlspecialchars($_POST['description']);

    $to = "z.w.henok@gmail.com";
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nPhone: $phone\nDescription: $description\n";

    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: no-reply@yourdomain.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header('Location: thankyou.html');
    } else {
        echo "There was an error sending your message.";
    }
}
?>
