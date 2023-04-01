<?php

include_once("config.php");
defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);

if(isset($_POST['getpersons'])){
    $query = "Select person.id,firstname,middlename,lastname,age,photo,occupation,
    contactaddress,town,systemaccount.* From person, countries, states WHERE 
    person.country=countries.id AND person.state = states.id";
    $runquery = mysqli_query($conn, $query);

     // products array
     $countries_arr=array();
     $countries_arr["records"]=array();
     if(!$runquery){
         die("Error: ".mysqli_error($conn));
     }
    while($row = mysqli_fetch_array($runquery)){
        $country_item=array(
            "id" => $row['id'],
            "firstname" => $row['firstname'],
            "middlename" => $row['middlename'],
            "lastname" => $row['lastname'],
            "age" => $row['age'],
            "contactaddress" => $row['contactaddress'],
            "town" => $row['town'],
            "country" => $row['country'],
            "state" => $row['state'],
            "photo" => $row['photo'],
            "occupation" => $row['occupation'],
            "phonenumber" => $row['phonenumber'],
            "email" => $row['email']
        );

        array_push($countries_arr["records"], $country_item);
    }
    http_response_code(200);

    // show products data in json format
    echo json_encode($countries_arr);
}


if(isset($_POST['getDoctors'])){
    $query = "Select * From systemaccount WHERE 
    systemaccounttype LIKE '%Doctor%' OR systemaccounttype LIKE '%Admin%'";
    $runquery = mysqli_query($conn, $query);

    if(mysqli_num_rows($runquery)>0){
            
        // products array
        $countries_arr=array();
        $countries_arr["records"]=array();
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        while($row = mysqli_fetch_array($runquery)){
            $country_item=array(
                "id" => $row['id'],
                "person" => $row['person'],
                "personid" => $row['personid'],
                "systemstatus" => $row['systemstatus']
            );

            array_push($countries_arr["records"], $country_item);
        }
        http_response_code(200);

        // show products data in json format
        echo json_encode($countries_arr);
    } else {
        $countries_arr=array();
        $countries_arr["records"]=array();
        $country_item=array(
            "id" => 0,
            "person" => "No Doctor Found",
            "personid" => 0,
            "systemstatus" => "No Status"
        );

        array_push($countries_arr["records"], $country_item);

        http_response_code(200);

        // show products data in json format
        echo json_encode($countries_arr);
    }
}


?>