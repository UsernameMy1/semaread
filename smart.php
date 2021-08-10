<?php

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


require_once 'phpmailer/PHPMailerAutoload.php';
//require ('mailer/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer(true);

$mail->CharSet = 'utf-8';
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sema.productioninfo@gmail.com';                 // Наш логин
$mail->Password = '123sema123';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('sema.productioninfo@gmail.com', 'SEMA');   // От кого письмо 
$mail->addAddress('sema.productioninfo@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Кто то оставил заявку SEMA';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $fullname . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
	Сообщение:' . $message; 

	if(!$mail->send()) {
		return false;
	} else {
		return true;
	}

?>

