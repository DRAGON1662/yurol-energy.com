<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']); 
$email = trim($_POST['email']); 
$fromMail = 'info@yurol-energy.com'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка з сайту'; //Заголовок письма
$emailTo = 'jura.fostyak@gmail.com'; //Ваша почта
$subject = 'Форма зворотнього звязку yurol-energy.com'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Отримано лист з сайту \n Імя: $name\n Телефон: $phone\n Пошта: $email"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>