<?php
 
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$mail = htmlspecialchars($_POST["mail"]);

$tel = htmlspecialchars($_POST["tel"]);
$sellBuy = htmlspecialchars($_POST["sellBuy"]);
$property = htmlspecialchars($_POST["property"]);
$square = htmlspecialchars($_POST["square"]);
$location = htmlspecialchars($_POST["location"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "by.paladin@icloud.com";
$sub = "Сообщение с моего сайта";
 
/* Формат письма */
$mes = "Сообщение с моего сайта.\n
Имя отправителя: $name\n
Телефон отправителя: $tel\n
Email отправителя: $mail\n
Человек хочет: $sellBuy\n
Тип недвижимости: $property\n
Площадь: $square\n
В районе: $location";
 
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$tel> \r\n";
if (mail($address, $sub, $mes, $from)) { 
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body> Я получила Ваше письмо. Спасибо.<br> Оставайтесь на связи. Я Вам обязательно перезвоню.</body>';}
else {
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Что-то пошло не так. Попробуйте ещё раз.</body>';}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>