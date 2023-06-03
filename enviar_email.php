<?php
// Obtener los valores del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Configurar el correo electrónico
$to = 'javierolivieric@gmail.com'; // Cambia esto con tu dirección de correo electrónico
$subject = 'Nuevo mensaje de contacto';
$body = "Nombre: $name\nEmail: $email\nMensaje: $message";
$headers = "From: $email";

// Enviar el correo electrónico
if (mail($to, $subject, $body, $headers)) {
  echo 'Correo electrónico enviado correctamente';
} else {
  echo 'Error al enviar el correo electrónico';
}
?>