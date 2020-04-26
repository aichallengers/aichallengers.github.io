<?php


// Taking all values
$name 		= $_POST['name'];
$email 		= $_POST['email'];
$website 	= $_POST['website'];
$msg 		= $_POST['msg'];
$output 	= "Name: ".$name."\n\nWebsite: ".$website."\n\nMessage: ".$msg;
$to 		= 'engrsamim7@gmail.com';
$headers	= 'FROM: "'.$email.'"';
$send = mail($to, $name, $output."\n\n***This message has been sent from Eventdia", $headers);

