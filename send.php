<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "Adentech.it@gmail.com"; // Hier die Empfänger-E-Mail-Adresse eintragen
  $subject = "Kontaktformular von $name";
  $headers = "From: $email";
  
  mail($to, $subject, $message, $headers);
  echo "Vielen Dank! Ihre Nachricht wurde gesendet.";
}
?>
