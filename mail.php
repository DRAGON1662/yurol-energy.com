<?php 
$name = trim($_POST['user_name']); 
$phone = trim($_POST['user_phone']); 
$email = trim($_POST['user_email']); 
$adress = trim($_POST['user_adress']); 
$nova_poshta = trim($_POST['user_nposhta']);
$message = trim($_POST['user_message']); 
$power = trim($_POST['power']); 
$square = strval((int)trim($_POST['square'])*10);
$automatics = trim($_POST['automatics']); 
$smooth_start = trim($_POST['smooth_start']); 
$boiler_config = trim($_POST['boiler_config']);
$boiler_price = trim($_POST['boiler_price']);

$fromMail = 'info@yurol-energy.com'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Yurol Energy'; //Заголовок письма
$emailTo = 'jura.fostyak@gmail.com'; //Ваша почта
$subject = 'Форма зворотнього звязку yurol-energy.com'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 

if (!empty($name) AND !empty($phone) AND !empty($adress)) {

	$to = "jura.fostyak@gmail.com";

	$theme = 'Yurol Energy';

	// To send HTML mail, the Content-type header must be set
	$headers = 'Content-type: text/html; charset=iso-8859-1';
	$headers .= 'From: Yurol Energy <info@yurol-energy.com>';

	$body = "<html>
				<head>
					<title>Yurol Energy - Order</title>
				</head>
				<body>
				<h2 style='font-family: Arial, sans-serif; margin-bottom: 30px;'>Замовлення з сайту yurol-energy.com</h2>
					<table style='width:100%; font-size: 18px; font-family: Roboto, sans-serif; border-collapse: collapse;'>
					<tr style='background-color: #dddddd;'>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Імя: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $name</td>
					</tr>
					<tr>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Телефон: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $phone</td>
					</tr>
					<tr style='background-color: #dddddd;'>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>E-mail: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $email</td>
					</tr>
					<tr>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Адреса: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $adress</td>
					</tr>
					<tr style='background-color: #dddddd;'>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Відділення Нової Пошти: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $nova_poshta</td>
					</tr>
					<tr>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Запитання/повідомлення: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $message</td>
					</tr>

					<tr style='background-color: #dddddd;'>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Потужність котла: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $power кВт</td>
					</tr>
					<tr>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Площа обігріву: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $square м<sup>2</sup></td>
					</tr>
					<tr style='background-color: #dddddd;'>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Автоматика: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $automatics</td>
					</tr>
					<tr>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Плавний старт: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $smooth_start</td>
					</tr>
					<tr style='background-color: #dddddd;'>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Назва конфігурації: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'>&#171;$boiler_config&#187;</td>
					</tr>
					<tr>
						<th style='width: 36%; border: 1px solid #dddddd; text-align: left; padding: 8px;'>Ціна котла: </th>
						<td style='border: 1px solid #dddddd; text-align: left; padding: 8px;'> $boiler_price грн</td>
					</tr>
				</table>
				</body>
				</html>"
				;

$mail = mail($to, $theme, $body, $headers, '-f'. $fromMail ); 
if ($mail) {
		echo "<script type='text/javascript'>
					alert('Лист надіслано успішно!');
					location='index.html';
			 </script>";			
		// header('Location:/formTest.html');
	} else{
		echo "<script type='text/javascript'>
					alert('Помилка під час відправлення!');
					location='index.html';
			 </script>";
	}
} else{
	echo "<script type='text/javascript'>
				alert('Заповніть всі поля!');
				location='index.html';
		 </script>";
}



// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
// if (strlen($phone) > 0 and strlen($name) > 0 and strlen($adress) > 0) { 
// $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
// return;
// } 
// else{
// 	echo "Поля Ім'я, Телефон та Адреса повинні бути заповненими!"
// }


?>