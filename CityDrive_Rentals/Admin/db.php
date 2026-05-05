<?php
try {
    $db = new PDO("sqlite:CityDrive_DB.db");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "✅ Connected successfully";
} catch (PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}
?>