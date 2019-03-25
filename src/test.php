<?php
require './jwt.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
use \Firebase\JWT\JWT;

$token_payload = [
  'pass' => '12345632',
  'email' => 'ysndlklc1234@gmail.com'
];

// This is your client secret --- 
$key = 'userid:1';

$jwt = JWT::encode($token_payload, base64_decode(strtr($key, '-_', '+/')), 'HS256');
$result=array("token"=>$jwt,
"id"=>"1",
"name"=>"yasin",
"mail"=>"ysndlklc1234@gmail.com"
);
echo json_encode($result);
$decoded = JWT::decode($jwt, base64_decode(strtr($key, '-_', '+/')), ['HS256']);



?>
