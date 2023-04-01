<?php

    
$conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','dbname');


if(isset($_POST['value'])){
    $myName = $_POST['value'];
    //echo "You Entered ".$myName;
    $query = "INSERT INTO list(names) Values('$myName')";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".mysqli_error($conn));
    } else{
        echo "You Entered ".$myName;
    }
   
}
  
if(isset($_POST['fetchdata'])){
    //echo "<h3>Connected</h3>";
    $query = "SELECT * FROM list";
    $run_query = mysqli_query($conn, $query);
    $array = array();
    $array['list'] = array();
    while($row = mysqli_fetch_array($run_query)){
        $fetcharray = array(
            "name" => $row["names"]
        );
        array_push($array['list'], $fetcharray);
    }
    echo json_encode($array);
}



?>