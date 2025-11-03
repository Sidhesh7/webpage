<?php
$servername = "localhost";
$username   = "root";
$password   = "Welcomenigga7!";
$dbname     = "ecommerce_db";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . mysqli_connect_error()]));
}
?>

