<?php 
	
	$result = mail("bravohotel.msk@gmail.com", "Форма с сайта", "С сайта была получена анкета с такими данными: \nИмя: $_POST[name] \nНомер телефона: $_POST[tel] \nСообщение: $_POST[textarea]");
	if ($result) {
		echo "<p>Сообщение отправлено успешно!</p>";
	}

	else {
		echo "<p>Сообщение  НЕ отправлено!</p>";
	}
?>