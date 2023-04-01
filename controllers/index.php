<?php
    

    include_once("config.php");
    defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);


    if(isset($_POST['username'])){
       
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "select * from systemaccount Where username='$username' And password='$password'";
        $run_query = mysqli_query($conn, $query);
        if(!$run_query){
            die(mysqli_error($conn));
        }
        if(mysqli_num_rows($run_query)>0){
            //echo "Record Found";
            // get the personname, personid, systemaccounttype, department
            $row = mysqli_fetch_assoc($run_query);
            $_SESSION['personid'] = $row['personid'];
            $_SESSION['person'] = $row['person'];
            $_SESSION['systemaccountid'] = $row['id'];
            $_SESSION['systemaccounttype'] = $row['systemaccounttype'];
            $_SESSION['department'] = $row['department'];
            $_SESSION['user'] = $username;

            //update the status
            $personid = $_SESSION['personid'];
            $query = "Update systemaccount Set status = 'Logged In', systemstatus='ONLINE' Where personid='$personid'";
            $run_query = mysqli_query($conn, $query);
            echo "Record Found";

            $entrydate = date('Y-m-d H:i:s');
            $query = "Insert Into loginhistory(person, persontype,entrydate) Values('".$row['person']."','".$row['systemaccounttype']." (".$row['department'].")','".$entrydate."')";
            $run_query = mysqli_query($conn, $query);
            if(!$run_query){
                die("Error: ".mysqli_error($conn));
            }

        } else{
            echo "Record Not Found";
        }


    }

    if(isset($_POST["getServerDateTime"])){
        $day = date("d");
        $month = date("m");
        $year = date("Y");
        $hours = date("h");
        $minutes = date("i");
        $seconds = date("sa");

        $product_arr = array(
            "day" =>  $day,
            "month" => $month,
            "year" => $year,
            "hours" => $hours,
            "minutes" => $minutes,
            "seconds" =>  $seconds
        );
      
        // set response code - 200 OK
        http_response_code(200);
        // echo "Test";
        // make it json format
        echo json_encode($product_arr);
    }



?>