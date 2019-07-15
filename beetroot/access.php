<?php 
	
	if (htmlspecialchars($_GET["age"]) < 21){
		echo 'Sorry, ' .  htmlspecialchars($_GET["name"]) . ', no entrance until 21.';
	} else{
		echo 'Hello, ' .  htmlspecialchars($_GET["name"]) . '!  access accepted!';
	}
	
	

	

?>

<!-- 
	$_GET
		- The $_GET variable is an array of variable names and values sent by the HTTP GET method.

		The $_GET variable is used to collect values from a form with method="get". Information sent from a form with the GET method is visible to everyone (it will be displayed in the browser's address bar) and it has limits on the amount of information to send (max. 100 characters).

	htmlspecialchars 
		— Преобразует специальные символы в HTML-сущности 
-->