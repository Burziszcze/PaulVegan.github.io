<?php

	$name = @trim(stripslashes($_POST['name'])); 
	$email = @trim(stripslashes($_POST['email']));
	$message = @trim(stripslashes($_POST['message'])); 

	$email_from = $email;
	$email_to = 'buurzuum@gmail.com';//replace with your email

	$body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n"  . 'Message: ' . $message;

	$success = @mail($email_to, $body, 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n"  . 'Message: ' . $message);
	
?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
	<script>alert("Dziękuję za kontakt, odezwę się najszybciej jak to możliwe!.");</script>
	<meta HTTP-EQUIV="REFRESH" content="0; url=../index.html"> 
</head>


