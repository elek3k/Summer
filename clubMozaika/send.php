<?php

$userName = $_POST['name'];
$userPhone = $_POST['tel'];
$clubAddress = $_POST['choise-club__address'];
$seasonTicket = $_POST['seasonTicket'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.yandex.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'ivan1vanoff01@yandex.ru';                     // SMTP username
    $mail->Password   = 'cti_FcY4!a_D_7b';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('ivan1vanoff01@yandex.ru');
    $mail->addAddress('elek3k2008@yandex.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта на бронирование карты';
    $mail->Body    = "Клиет <b>забронировал карту</b>.<hr><br>
    Имя клиента: <b>${userName}</b>.<br> 
    Его телефон: <b>${userPhone}</b>.<br>
    Выбрана карта: <b>${seasonTicket} месяц(ев)</b>.<br>
    Адресс клуба: <b>${clubAddress}</b>.<br>";

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}