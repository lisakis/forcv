<?php
/**
 * Created by PhpStorm.
 * User: Nadaap
 * Date: 11.10.2019
 * Time: 5:09
 */


require 'connect.php';
header('Access-Control-Allow-Origin: *');

$arr = [];
$sql = "SELECT user_id, name, email, created_at, role FROM members";

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
