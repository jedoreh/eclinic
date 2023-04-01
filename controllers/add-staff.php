<?php

include_once("config.php");
defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);

if(isset($_POST["getaccounttype"])){

    $query = "Select * From systemaccounttype";
    $runquery = mysqli_query($conn, $query);
    // products array
    $countries_arr=array();
    $countries_arr["records"]=array();
    while($row = mysqli_fetch_array($runquery)){
        $country_item=array(
            "id" => $row['id'],
            "systemaccounttype" => $row['systemaccounttype']
        );

        array_push($countries_arr["records"], $country_item);
    }
    http_response_code(200);

    // show products data in json format
    echo json_encode($countries_arr);
}

if(isset($_POST['getpersontype'])){
    $query = "Select * From persontype";
    $runquery = mysqli_query($conn, $query);
    // products array
    $countries_arr=array();
    $countries_arr["records"]=array();
    while($row = mysqli_fetch_array($runquery)){
        $country_item=array(
            "id" => $row['id'],
            "persontype" => $row['persontype']
        );

        array_push($countries_arr["records"], $country_item);
    }
    http_response_code(200);

    // show products data in json format
    echo json_encode($countries_arr);
}

if(isset($_POST['getdepartment'])){
    $query = "Select * From department";
    $runquery = mysqli_query($conn, $query);
    // products array
    $countries_arr=array();
    $countries_arr["records"]=array();
    while($row = mysqli_fetch_array($runquery)){
        $country_item=array(
            "id" => $row['id'],
            "department" => $row['department']
        );

        array_push($countries_arr["records"], $country_item);
    }
    http_response_code(200);

    // show products data in json format
    echo json_encode($countries_arr);
}

if(isset($_POST['getStaff'])){
    $query = "Select * From staff";
    $runquery = mysqli_query($conn, $query);
    // products array
    $countries_arr=array();
    $countries_arr["records"]=array();
    while($row = mysqli_fetch_array($runquery)){
        $country_item=array(
            "id" => $row['id'],
            "personid" => $row['personid'],
            "person" => $row['person'],
            "stafftype" => $row['stafftype']
        );

        array_push($countries_arr["records"], $country_item);
    }
    http_response_code(200);

    // show products data in json format
    echo json_encode($countries_arr);
}

if(isset($_POST['assignstaffrole'])){

    $persontype = $_POST['persontype'];
    $accountype = $_POST['accountype'];
    $department = $_POST["department"];

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $personid = $_POST["personid"];
    $person = $_POST["person"];

    $entereddate = date('Y-m-d H:i:s');
    $entrydate = date('Y-m-d H:i:s');
    $enteredby = $_SESSION['person'];
    // $person = $_SESSION['person'];
    $updateddate = $enteredby." created ".$firstname." ".$lastname." at ".$entereddate."; ";


     //check if username already exists
     $username = $firstname.$lastname;
     $query = "SELECT * FROM systemaccount WHERE username LIKE '%$username%'";
     $runquery = mysqli_query($conn, $query);
     $count = mysqli_num_rows($runquery);
     if($count>0){
         $username.=$count;
     }
     $pass = '';
     $str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.'abcdefghijklmnopqrstuvwxyz0123456789';
         
     for ($i = 1; $i <= 8; $i++) {
         $char = rand(0, strlen($str)-1);
         $pass .= $str[$char];
     }

     $query = "INSERT INTO systemaccount(username,password,person,personid,status,
                                         systemstatus,systemaccounttype,department,
                                         enteredby,entereddate,updateddate) Values(
                                         '$username','$pass','$firstname, $lastname',$personid,'','OFFLINE','$accountype','$department',
                                         '$enteredby','$entereddate','$updateddate');";
     $runquery = mysqli_query($conn, $query);
     if(!$runquery){
         die("Error: ".mysqli_error($conn));
     } else {

        
        $query = "UPDATE staff SET department = '$department',accounttype = '$accountype',stafftype = '$persontype' WHERE personid = $personid";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
        die("Error: ".mysqli_error($conn));
        }

         echo "  <div id='info' class='alert alert-success alert-dismissible fade show' role='alert'>
         <strong>System Account Created </strong><br>Username: " . $username." <br>Password: ".$pass."
         <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
             <span aria-hidden='true'>&times;</span>
         </button>
     </div>";}


}

if(isset($_POST['updatestaffrole'])){

    $persontype = $_POST['persontype'];
    $accountype = $_POST['accountype'];
    $department = $_POST["department"];

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $personid = $_POST["personid"];
    $person = $_POST["person"];
    $username = $_POST["username"];

    $entereddate = date('Y-m-d H:i:s');
    $entrydate = date('Y-m-d H:i:s');
    $enteredby = $_SESSION['person'];
    // $person = $_SESSION['person'];
    $updateddate = $enteredby." created ".$firstname." ".$lastname." at ".$entereddate."; ";


     //check if username already exists
    //  $username = $firstname.$lastname;
     $query = "SELECT * FROM systemaccount WHERE username LIKE '%$username%'";
     
    
     $runquery = mysqli_query($conn, $query);
     if(!$runquery){
        die("Error: ".mysqli_error($conn)."<br>".$query);
    }
     $row = mysqli_fetch_assoc($runquery);
     $systemaccountid = $row["id"];
     $pass = $row["password"];
     $query = "UPDATE systemaccount SET systemaccounttype='$accountype',department='$department',
                                         updateddate='$updateddate' WHERE id=$systemaccountid";
     $runquery = mysqli_query($conn, $query);
     if(!$runquery){
         die("Error: ".mysqli_error($conn));
     } else {

        
        $query = "UPDATE staff SET department = '$department',accounttype = '$accountype',stafftype = '$persontype' WHERE personid = $personid";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
        die("Error: ".mysqli_error($conn));
        }

         echo "  <div id='info' class='alert alert-success alert-dismissible fade show' role='alert'>
         <strong>System Account Update </strong><br>Username: " . $username." <br>Password: ".$pass."
         <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
             <span aria-hidden='true'>&times;</span>
         </button>
     </div>";}

}

if(isset($_POST['addstaff'])){
    
    $firstname = $_POST['firstname'];
    $gender = $_POST['sex'];

    $nationality = $_POST['nationality'];
    $stateoforigin = $_POST['stateoforigin'];
    $lgaoforigin = $_POST['lgaoforigin'];
    $dateofbirth = $_POST['dateofbirth'];
    $age = $_POST['age'];
    $agevalue = $_POST['agevalue'];
    $phonenumberwhatsap = $_POST['phonenumberwhatsap'];
    $profession = $_POST['profession'];
    $address = $_POST['address'];
    $maritalstatus = $_POST['maritalstatus'];

    $nk2email = $_POST['nk2email'];
    $nk2phonenumberwhatsap = $_POST['nk2phonenumberwhatsap'];
    $nk2phonenumber = $_POST['nk2phonenumber'];
    $nk2age = $_POST['nk2age'];
    $nk2town = $_POST['nk2town'];
    $nk2lgaoforigin = $_POST['nk2lgaoforigin'];
    $nk2stateoforigin = $_POST['nk2stateoforigin'];
    $nk2nationality = $_POST['nk2nationality'];
    $nextofkinrelationship2 = $_POST['nextofkinrelationship2'];
    $nk2address = $_POST['nk2address'];


    $nk2sex = $_POST['nk2sex'];
    $nk2lastname = $_POST['nk2lastname'];
    $nk2firstname = $_POST['nk2firstname'];
    $nk1email = $_POST['nk1email'];
    $nk1phonenumberwhatsap = $_POST['nk1phonenumberwhatsap'];
    $nk1phonenumber = $_POST['nk1phonenumber'];
    $nk1age = $_POST['nk1age'];
    $nk1town = $_POST['nk1town'];
    $nk1lgaoforigin = $_POST['nk1lgaoforigin'];
    $nk1stateoforigin = $_POST['nk1stateoforigin'];

    $nk1nationality = $_POST['nk1nationality'];
    $nextofkinrelationship = $_POST['nextofkinrelationship'];
    $nk1address = $_POST['nk1address'];
    $nk1sex = $_POST['nk1sex'];
    $nk1lastname = $_POST['nk1lastname'];
    $nk1firstname = $_POST['nk1firstname'];
    

    $lastname = $_POST['lastname'];
    $phonenumber = $_POST['phonenumber'];
    $email = $_POST['email'];
    
    $academic_qualifications = $_POST["academic_qualifications"];
    $schools = $_POST["employment_records"];
    $personcategory = "STAFF";
    $entereddate = date('Y-m-d H:i:s');
    $entrydate = date('Y-m-d H:i:s');
    $enteredby = $_SESSION['person'];
    $person = $_SESSION['person'];
    $updateddate = $enteredby." created ".$firstname." ".$lastname." at ".$entereddate."; ";

    $query = "INSERT INTO person(firstname,lastname,phonenumber,email,personcategory,persontype,
                                enteredby,entereddate,updateddate,contactaddress,
                                nationality,stateoforigin,lgaoforigin,dateofbirth,gender,
                                age,agevalue,phonenumberwhatsap,maritalstatus) VALUES('$firstname',
                                '$lastname','$phonenumber','$email','$personcategory','STAFF','$enteredby','$entereddate',
                                '$updateddate','$address',
                                '$nationality','$stateoforigin','$lgaoforigin','$dateofbirth','$gender',
                                $age,'$agevalue','$phonenumberwhatsap','$maritalstatus');";
    $runquery = mysqli_query($conn, $query);
    
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    } 

       
    $personid = mysqli_insert_id($conn);

$query = "INSERT INTO staff(personid,person,schools,qualification,department,
                                        accounttype,stafftype,status,
                                        enteredby,entereddate) Values(
                                        $personid,'$firstname, $lastname','$schools','$academic_qualifications','NONE',
                                        'NONE','STAFF','ACTIVE',
                                        '$enteredby','$entereddate');";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }


    
    

    echo "Staff Registered Successfully";
    //Register Next of Kin
    $nextofkin = $nk1firstname." ".$nk1lastname;
    $personcategory = "Single Individual";
    $persontype = "STAFF NEXT OF KIN";
    $query = "INSERT INTO person(firstname,lastname,personcategory,persontype,
                            age,gender,agevalue,email,contactaddress,
                            phonenumber,phonenumberwhatsap,nationality,
                            stateoforigin,lgaoforigin,
                            enteredby,entereddate) 
                    VALUES('$nk1firstname','$nk1lastname','$personcategory','$persontype',
                    '$nk1age','$nk1sex','year(s)','$nk1email','$nk1address, $nk1town',
                    '$nk1phonenumber','$nk1phonenumberwhatsap','$nk1nationality',
                    '$nk1stateoforigin','$nk1lgaoforigin',
                    '$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $nexofkinpersonid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

        //Register Next of Kin
        $query = "INSERT INTO nextofkin(personid,person,nextofkinpersonid,nextofkinperson,relationship,phonenumber,status,enteredby,entereddate) 
        VALUES($personid,'$firstname $lastname',$nexofkinpersonid,'$nextofkin','$nextofkinrelationship','$nk1phonenumber, $nk1phonenumberwhatsap','STAFF','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
    die("Error: Test".mysqli_error($conn));
    }

    //Register Next of Kin 2
    $nextofkin = $nk2firstname." ".$nk2lastname;
    
    $query = "INSERT INTO person(firstname,lastname,personcategory,persontype,
                            age,gender,agevalue,email,contactaddress,
                            phonenumber,phonenumberwhatsap,nationality,
                            stateoforigin,lgaoforigin,
                            enteredby,entereddate) 
                    VALUES('$nk2firstname','$nk2lastname','$personcategory','$persontype',
                    '$nk2age','$nk2sex','year(s)','$nk2email','$nk2address, $nk2town',
                    '$nk2phonenumber','$nk2phonenumberwhatsap','$nk2nationality',
                    '$nk2stateoforigin','$nk2lgaoforigin',
                    '$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $nexofkinpersonid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

        //Register Next of Kin
        $query = "INSERT INTO nextofkin(personid,person,nextofkinpersonid,nextofkinperson,relationship,phonenumber,status,enteredby,entereddate) 
        VALUES($personid,'$firstname $lastname',$nexofkinpersonid,'$nextofkin','$nextofkinrelationship2','$nk2phonenumber, $nk2phonenumberwhatsap','STAFF','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
    die("Error: Test".mysqli_error($conn));
    }

    
}



if(isset($_POST["getStaffInfo"])){
    $personid = $_POST['personid'];
    $query = "SELECT staff.stafftype,systemaccount.systemaccounttype,systemaccount.username,systemaccount.department FROM staff,systemaccount WHERE systemaccount.personid=staff.personid AND staff.personid=$personid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Test".mysqli_error($conn));
    }
    $countries_arr=array();
    $countries_arr["records"]=array();
    if(mysqli_num_rows($runquery)>0){
        while($row = mysqli_fetch_array($runquery)){
            $country_item=array(
                "department" => $row['department'],
                "systemaccounttype" => $row['systemaccounttype'],
                "stafftype" => $row['stafftype'],
                "username" => $row['username']
            );

            array_push($countries_arr["records"], $country_item);
        }
        http_response_code(200);

        // show products data in json format
        echo json_encode($countries_arr);
    } else{
        echo "No Record Found";
         // set response code - 404 Not found
            // http_response_code(404);
        
            // // tell the user products does not exist
            // echo json_encode(
            //     array("message" => "No Record found")
            // );
    }
}

?>