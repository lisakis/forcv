<?php
/**
 * Created by PhpStorm.
 * User: Nadaap
 * Date: 11.10.2019
 * Time: 6:15
 */


require 'connect.php';
header('Access-Control-Request-Headers: *');
header('Access-Control-Allow-Origin: *');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name = mysqli_real_escape_string($con, (int)$request->data->name);

$sql = "SELECT * FROM members WHERE (name LIKE '%$name')";

$arr = [];
if($result = mysqli_query($con,$sql))
{
  $num = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $arr[$num]['id']    = $row['user_id'];
    $arr[$num]['name']    = $row['name'];
    $arr[$num]['email'] = $row['email'];
    $arr[$num]['created_at'] = $row['created_at'];
    $arr[$num]['role'] = $row['role'];
    $num++;
  }

  echo json_encode(['data'=>$arr]);
}
else
{
  http_response_code(404);
}
