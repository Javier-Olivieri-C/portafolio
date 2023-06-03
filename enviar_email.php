<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Aquí puedes implementar la lógica para enviar el correo electrónico usando la información recibida
  // Puedes utilizar la función mail() de PHP o utilizar una biblioteca externa como PHPMailer

  // Ejemplo con la función mail() de PHP
  $to = 'javierolivieric@gmail.com';
  $subject = 'Nuevo mensaje de contacto';
  $body = "Nombre: $name\nEmail: $email\nMensaje: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo 'Mensaje enviado con éxito';
  } else {
    echo 'Error al enviar el mensaje';
  }
}
?>