<?php
$host = 'localhost'; // Change as necessary
$db = 'medical_website'; // Change to your database name
$user = 'root'; // Change to your database user
$pass = ''; // Change to your database password

// Create a connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $stmt = $conn->prepare("DELETE FROM patients WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}

$conn->close();
header('Location: appointment.php');
exit();