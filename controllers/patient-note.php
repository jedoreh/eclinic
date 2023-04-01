<?php



include_once("config.php");
defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);

if(isset($_POST["getPresentingComplaint"])){
    $searchitem = $_POST["searchitem"];
    $query = "SELECT * FROM presentingcomplaint WHERE presentingcomplaint LIKE '%$searchitem%'";
    $runquery = mysqli_query($conn,$query);

    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "presentingcomplaint" => $row["presentingcomplaint"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "presentingcomplaint" => "No Record Found"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

}

if(isset($_POST["getHistory"])){
    $searchitem = $_POST["searchitem"];
    $historytype = $_POST["historytype"];
    $query = "SELECT * FROM otherhistory WHERE history LIKE '%$searchitem%' AND historytype = '$historytype' ORDER BY id DESC";
    $runquery = mysqli_query($conn,$query);

    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "history" => $row["history"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "history" => "No History Found"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

}

if(isset($_POST["getHistoryComplaint"])){
    $searchitem = $_POST["complain"];
    $query = "SELECT * FROM presentingcomplainthistory WHERE complain = '$searchitem'";
    $runquery = mysqli_query($conn,$query);

    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "history" => $row["history"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "history" => "No Record Found"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

}

if(isset($_POST["postComplainHistory"])){
    $complain = $_POST["complain"];
    $history = $_POST["history"];

    //check if complain exist
    $query = "SELECT * FROM presentingcomplainthistory WHERE complain = '$complain'";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        $entrydate = date('Y-m-d H:i:s');
        $person = $_SESSION['person'];
        $query = "UPDATE presentingcomplainthistory SET history='$history',updateddate='$person, $entrydate' WHERE complain = '$complain'";
        $runquery = mysqli_query($conn, $query);
        echo "Updated";
    } else {
        // $query = "INSERT INTO presentingcomplainthistory"
        $entrydate = date('Y-m-d H:i:s');
        $person = $_SESSION['person'];

        $query = "INSERT INTO presentingcomplainthistory(complain,history,enteredby,entrydate) VALUES('$complain','$history','$person','$entrydate')";
        
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        echo "Inserted";
    }
}

if(isset($_POST["deletePresentingComplain"])){
    $complain = $_POST["complain"];
    $query = "DELETE FROM presentingcomplaint WHERE presentingcomplaint = '$complain'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

}

if(isset($_POST["deletePresentingComplainRoutine"])){
    $id = $_POST["id"];
    $query = "DELETE FROM regimentlist WHERE id = $id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

}

if(isset($_POST["updatePresentingComplainRoutine1"])){
    $complains = $_POST["complains"];
    $id = $_POST["id"];
    $query = "UPDATE regimentlist SET description='$complains' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Updated";

}



if(isset($_POST["getPresentingComplainRoutine"])){
    $routinetype = $_POST["routinetype"];
    $query = "SELECT * FROM regimentlist WHERE routinetype = '$routinetype' ORDER BY id DESC";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "regimentname" => $row["regimentname"],
                "routinetype" => $row["routinetype"],
                "description" => $row["description"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "regimentname" => "None",
                "routinetype" => "None",
                "description" => "[]"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

}

if(isset($_POST["addRoutine"])){
    $routine = $_POST["routine"];
    $routinetype = $_POST["routinetype"];
    
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO regimentlist(regimentname,routinetype,enteredby,entereddate) VALUES('$routine','$routinetype','$person','$entrydate')";
    
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
}

if(isset($_POST["addPresentingComplain"])){
    $presentingcomplain = $_POST["presentingcomplain"];
    // $routinetype = $_POST["routinetype"];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO presentingcomplaint(presentingcomplaint,enteredby,entrydate) VALUES('$presentingcomplain','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
}

if(isset($_POST["addHistory"])){
    $historytype = $_POST["historytype"];
    $history = $_POST["history"];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO otherhistory(history,historytype,enteredby,entrydate) VALUES('$history','$historytype','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
}

if(isset($_POST["updatePresentingComplainRoutine"])){
    $id = $_POST["id"];
    $complaints = $_POST["complaints"];
    $query = "UPDATE regimentlist SET description = '$complaints' WHERE id = $id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Updated";
}


//Systemic Review

if(isset($_POST["getReview"])){
    $searchitem = $_POST["searchitem"];
    $reviewtype = $_POST["reviewtype"];
    $query = "SELECT * FROM systemicreview WHERE review LIKE '%$searchitem%' AND reviewtype = '$reviewtype' ORDER BY id DESC";
    $runquery = mysqli_query($conn,$query);

    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "review" => $row["review"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "review" => "No Review Found"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

}

if(isset($_POST["addReview"])){
    $reviewtype = $_POST["reviewtype"];
    $review = $_POST["review"];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO systemicreview(review,reviewtype,enteredby,entrydate) VALUES('$review','$reviewtype','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
}


//Medical Exam

if(isset($_POST["getExam"])){
    $searchitem = $_POST["searchitem"];
    $examtype = $_POST["examtype"];
    $query = "SELECT * FROM medicalexam WHERE exam LIKE '%$searchitem%' AND examtype = '$examtype' ORDER BY id DESC";
    $runquery = mysqli_query($conn,$query);

    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "exam" => $row["exam"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "exam" => "No Exam Found"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

}

if(isset($_POST["addExam"])){
    $examtype = $_POST["examtype"];
    $exam = $_POST["exam"];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO medicalexam(exam,examtype,enteredby,entrydate) VALUES('$exam','$examtype','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
}






?>