<?php
    

    include_once("config.php");
    defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);


    if(isset($_POST['getlogin'])){
        if(isset($_SESSION['user'])){
            echo $_SESSION['user'];
            
        } else {
            echo "Not Logged In";
        }


    }

    if(isset($_POST['getuserdetails'])){
        if(isset($_SESSION['user'])){

            $profile_arr = array(
                "user" => $_SESSION['user'],
                "person" => $_SESSION['person'],
                "systemaccounttype" => $_SESSION['systemaccounttype'],
                "department" => $_SESSION['department'],
                "personid" => $_SESSION['personid']
            );
             // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($profile_arr);
            
        } else {
            echo "Not Logged In";
        }


    }

    if(isset($_POST['logoutapp'])){
         //update the status
         $personid = $_SESSION['personid'];
        //  $query = "Update systemaccount Set status = 'Logged In' Where personid='$personid'";
        //  $run_query = mysqli_query($conn, $query);
         $query = "Update systemaccount Set status = 'Logged Out', systemstatus='OFFLINE' Where personid='$personid'";
         $run_query = mysqli_query($conn, $query);
         session_destroy();
        echo "logout";
    }

    if(isset($_POST["updatePassword"])){
        $personid = $_POST["personid"];
        $password = $_POST["password"];
        $query = "UPDATE systemaccount SET password = '$password' WHERE personid=$personid";
        $run_query = mysqli_query($conn, $query);
        if(!$run_query){
            die("Error: ".mysqli_error($conn));
        }
        echo "Password changed successfully";
    }


?>