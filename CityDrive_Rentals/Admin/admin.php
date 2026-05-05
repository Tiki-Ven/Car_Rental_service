<?php
include "db.php";

$username = "admin";
$password = "Admin123!@#";

$stmt = $db->prepare("INSERT INTO admin (username, password) VALUES (?, ?)");
$stmt->execute([$username, $password]);

echo "Admin added!";
?>