<?php
/**
 * Created by PhpStorm.
 * User: Nadaap
 * Date: 11.10.2019
 * Time: 6:15
 */


require 'connect.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name = mysqli_real_escape_string($con, (int)$request->data->name);
$email = mysqli_real_escape_string($con, (int)$request->data->email);

$sql = "INSERT INTO members (name, email) VALUES ('{$name}','{$email}')";

if(mysqli_query($con,$sql))
{
  http_response_code(201);
  $post = [
    'name' => $name,
    'email' => $email
  ];
  echo json_encode(['data'=>$post]);
}
else
{
  http_response_code(404);
}


?>
