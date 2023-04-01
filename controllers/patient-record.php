<?php



include_once("config.php");
defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);



//getStockItemList
if(isset($_POST["getStockItemList"])){
    $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.tradename,stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$searchItem%' AND stockitem.genericname LIKE '%fee%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stockitemid" => $row["stockitemid"],
                "itemgenericname" => $row["itemgenericname"],
                "itemstate" => $row["itemstate"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "itemform" => $row["itemform"],
                "package" => $row["package"],
                "tradename" => $row["tradename"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getStockItemCorpseList"])){
    $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$searchItem%' AND stockitem.genericname LIKE '%corpse%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stockitemid" => $row["stockitemid"],
                "itemgenericname" => $row["itemgenericname"],
                "itemstate" => $row["itemstate"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "itemform" => $row["itemform"],
                "package" => $row["package"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getStockItemCorpseAccomodationList"])){
    $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$searchItem%' AND stockitem.genericname LIKE '%fee%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stockitemid" => $row["stockitemid"],
                "itemgenericname" => $row["itemgenericname"],
                "itemstate" => $row["itemstate"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "itemform" => $row["itemform"],
                "package" => $row["package"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getStockItemPostMortem"])){
    $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$searchItem%' AND stockitem.genericname LIKE '%mortem%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stockitemid" => $row["stockitemid"],
                "itemgenericname" => $row["itemgenericname"],
                "itemstate" => $row["itemstate"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "itemform" => $row["itemform"],
                "package" => $row["package"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

//Get Embalmment Fee
if(isset($_POST["getStockItemCorpseEmbalmmentFee"])){
    $searchItem = $_POST['searchItem'];
    $emablment = $_POST['embalment'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$searchItem%' AND stockitem.genericname LIKE '%$emablment%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stockitemid" => $row["stockitemid"],
                "itemgenericname" => $row["itemgenericname"],
                "itemstate" => $row["itemstate"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "itemform" => $row["itemform"],
                "package" => $row["package"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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



//getStockItemList
if(isset($_POST["getNextofKinRelationship"])){
    // $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT * From relationship";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "relationship" => $row["relationship"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getQuarters"])){
    // $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT * From quarters";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "quarters" => $row["quarters"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getTown"])){
    // $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT * From town";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "town" => $row["town"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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


if(isset($_POST["getPatient"])){
    $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') And patientcard.comments='PAID AND REGISTERED' Order By patientcard.id DESC";
    // $query = "Select * From patientcard Where person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber Like '%$searchformItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();
        $exam_arr["revenueorders"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["person"],
                "personid" => $row["personid"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["patientnumber"],
                "gender" => $row["gender"],
                "weight" => $row["weight"],
                "phonenumber" => $row["phonenumber"],
                "age" => $row["age"]." ".$row["agevalue"]." (".$row["agegroup"].")",
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);

            $cardnumber = $row["cardnumber"];
            $query = "SELECT * FROM revenueorder WHERE comments LIKE '%$cardnumber%' AND revenueordernumber LIKE '%RCD%';";
            $runquery = mysqli_query($conn, $query);
        
        
            
            while( $row = mysqli_fetch_array($runquery)){
                $order_item=array(
                    "id" => $row["id"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "status" => $row["status"],
                    "orderdate" => $row["itemorderdate"]
                );
        
                array_push($exam_arr["revenueorders"], $order_item);

            
            }
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getPatientDoctor"])){
    $searchformItem = $_POST["searchformItem"];
    $doctorid = $_POST["doctorid"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From patientcard,person,patientappointment WHERE patientcard.personid=person.id AND patientcard.personid=patientappointment.personid AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientcard.patientnumber LIKE '%$searchformItem%') And patientcard.comments='PAID AND REGISTERED' AND doctorid=$doctorid Order By patientcard.id DESC";
    // $query = "Select * From patientcard Where person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber Like '%$searchformItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".mysqli_error($conn)."<br>".$query);
    }
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();
        $exam_arr["revenueorders"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["person"],
                "personid" => $row["personid"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["patientnumber"],
                "gender" => $row["gender"],
                "weight" => $row["weight"],
                "phonenumber" => $row["phonenumber"],
                "age" => $row["age"]." ".$row["agevalue"]." (".$row["agegroup"].")",
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);

            $cardnumber = $row["cardnumber"];
            $query = "SELECT * FROM revenueorder WHERE comments LIKE '%$cardnumber%' AND revenueordernumber LIKE '%RCD%';";
            $runquery = mysqli_query($conn, $query);
        
        
            
            while( $row = mysqli_fetch_array($runquery)){
                $order_item=array(
                    "id" => $row["id"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "status" => $row["status"],
                    "orderdate" => $row["itemorderdate"]
                );
        
                array_push($exam_arr["revenueorders"], $order_item);

            
            }
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getPatientVitalSigns"])){
    $patientnumber = $_POST["patientnumber"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From patientvitals WHERE patientnumber = '$patientnumber' ORDER BY id DESC";
    // $query = "Select * From patientcard Where person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber Like '%$searchformItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["person"],
                "patientid" => $row["patientid"],
                "temperature" => $row["temperature"],
                "value" => $row["value"],
                "patientnumber" => $row["patientnumber"],
                "pulse" => $row["pulse"],
                "weight" => $row["weight"],
                "height" => $row["height"],
                "respiration" => $row["respiration"],
                "sp02" => $row["sp02"],
                "systolic" => $row["bpsystolic"],
                "diastolic" => $row["bpdiasolic"],
                "bmivalue" => $row["bmivalue"],
                "bmicategory" => $row["bmicategory"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["getSelectPatient"])){
    if(isset($_SESSION["patient_consultation_details"])){
        $exam_arr = $_SESSION["patient_consultation_details"];
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertTally"])){

    $description = $_POST["description"];
    $patientname = $_POST["patientname"];
    $tallynumber = $_POST["tallynumber"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    //check for tally
    $query = "SELECT * FROM tally WHERE tallynumber = '$tallynumber'";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)==0){
        $query = "INSERT INTO tally(tallynumber,description,patientname,enteredby,entereddate) VALUES(
            '$tallynumber','$description','$patientname','$person','$entrydate')";

        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
        die("Error: ".mysqli_error($conn)."<br".$query);
        }

        echo "Tally ".$tallynumber." Assigned";
    } else {
        echo "Tally ".$tallynumber." Already Assigned";
    }

    
}

if(isset($_POST["insertPatientAppointment"])){

    $personid = $_POST['personid'];
    $patientid = $_POST['patientid'];
    $personname = $_POST['person'];

    $patientnumber = $_POST['patientnumber'];

    $doctor = $_POST['doctor'];
    $doctorid = $_POST['doctorid'];
    $nurse = $_POST['nurse'];
    $status = "PENDING";
    $appointmentdate = $_POST['appointmentdate'];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    //check for tally
    $query = "SELECT * FROM patientappointment WHERE appointmentdate = '$appointmentdate' AND patientid=$patientid AND doctorid=$doctorid";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)==0){
        $query = "INSERT INTO patientappointment(doctor,doctorid,person,patientid,personid,patientnumber,status,appointmentdate,nurse,enteredby,entereddate) VALUES(
            '$doctor',$doctorid,'$personname',$patientid,$personid,'$patientnumber','$status','$appointmentdate','$nurse','$person','$entrydate')";

        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
        die("Error: ".mysqli_error($conn)."<br>".$query);
        }

        echo "Patient ".$personname." Appointment Assigned To ".$doctor;
    } else {
        $row = mysqli_fetch_assoc($runquery);
        $appointmentid = $row["id"];
        $formerdoctor = $row["doctor"];
        $query = "UPDATE patientappointment SET doctor='$doctor',
                                                doctorid=$doctorid,
                                                person='$personname',
                                                patientid=$patientid,
                                                personid=$personid,
                                                patientnumber='$patientnumber',
                                                status='$status',
                                                appointmentdate='$appointmentdate',
                                                nurse='$nurse',
                                                updateddate='$person, $entrydate' WHERE id=$appointmentid";

        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
        die("Error: ".mysqli_error($conn)."<br>".$query);
        }

        echo "Patient ".$personname." Appointment Formerly Assigned to ".$formerdoctor." Has Now Been Re-Assigned To ".$doctor;
        // echo "Patient Appointment Already Assigned and Now reassigned to ".$doctor;
    }

    
}

if(isset($_POST["getSelectPatientReciept"])){
    if(isset($_SESSION["patient_payment_reciept_details"])){
        $exam_arr = $_SESSION["patient_payment_reciept_details"];
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getSelectPatientInvoice"])){
    if(isset($_SESSION["patient_payment_invoice_details"])){
        $exam_arr = $_SESSION["patient_payment_invoice_details"];
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getSelectPatientLabTest"])){
    if(isset($_SESSION["patient_lab_report_details"])){
        $exam_arr = $_SESSION["patient_lab_report_details"];
        // set response code - 200 OK
        http_response_code(200);
    
        // make it json format
        echo json_encode($exam_arr);
    }
}

if(isset($_POST["getPatientConsultationById"])){
    $id = $_POST["id"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    // $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') Order By patientcard.id DESC";
    $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND patientcard.personid = $id";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["person"],
                "personid" => $row["personid"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["patientnumber"],
                "gender" => $row["gender"],
                "weight" => $row["weight"],
                "phonenumber" => $row["phonenumber"],
                "age" => $row["age"]." ".$row["agevalue"]." (".$row["agegroup"].")",
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }

            $_SESSION["patient_consultation_details"] = $exam_arr;
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
        //   header("Location: patient-consultation.html");
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


//Corpses
if(isset($_POST["loadCorpsePards"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT DISTINCT(corpseregistrationcard.cardnumber),revenueorder.status,corpseregistrationcard.id,corpseregistrationcard.corpsename,corpseregistrationcard.cardtype,corpseregistrationcard.corpseregistrationnumber,corpseregistrationcard.tallynumber,corpseregistrationcard.comments,corpseregistrationcard.enteredby,corpseregistrationcard.entereddate,corpseregistrationcard.updateddate FROM revenueorder,corpseregistrationcard WHERE revenueorder.hospitalnumber=corpseregistrationcard.corpseregistrationnumber GROUP BY corpseregistrationcard.cardnumber Order By corpseregistrationcard.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "status" => $row["status"],
                "person" => $row["corpsename"],
                "cardtype" => $row["cardtype"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "tallynumber" => $row["tallynumber"],
                "patientnumber" => $row["corpseregistrationnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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


if(isset($_POST["getALlTallies"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT * FROM tally";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "tallynumber" => $row["tallynumber"],
                "description" => $row["description"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
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

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => 0,
                "tallynumber" => "No Tally,None",
                "description" => "None",
                "enteredby" => "None",
                "entereddate" => "None",
                "updateddate" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getTallies"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT * FROM tallynumbers";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              
                "tallynumber" => $row["tallynumber"]
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

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                
                "tallynumber" => "0"
                
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["loadPatientPards"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT DISTINCT(patientcard.cardnumber),revenueorder.status,patientcard.id,patientcard.person,patientcard.cardtype,patientcard.patientnumber,patientcard.comments,patientcard.enteredby,patientcard.entereddate,patientcard.updateddate FROM revenueorder,patientcard WHERE revenueorder.hospitalnumber=patientcard.patientnumber GROUP BY patientcard.patientnumber Order By patientcard.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "status" => $row["status"],
                "person" => $row["person"],
                "cardtype" => $row["cardtype"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["patientnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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


if(isset($_POST["loadPaidPatientPards"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT revenueorder.status,patientcard.cardnumber,patientcard.id,patientcard.person,patientcard.cardtype,patientcard.patientnumber,patientcard.comments,patientcard.enteredby,patientcard.entereddate,patientcard.updateddate FROM revenueorder,patientcard WHERE revenueorder.hospitalnumber=patientcard.patientnumber AND revenueorder.status='PAID' Order By patientcard.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "status" => $row["status"],
                "person" => $row["person"],
                "cardtype" => $row["cardtype"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["patientnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

//Laboratory Tests
if(isset($_POST["loadLaboratoryTests"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT * FROM laboratoryorder Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "laboratoryordernumber" => $row["laboratoryordernumber"],
                "patientname" => $row["patientname"],
                "patientnumber" => $row["hospitalnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST["loadPatientLaboratoryTests"])){
    $patientnumber = $_POST["patientnumber"];
    $enterlaboratoryorder = $_POST["enterlaboratoryorder"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT * FROM laboratoryorder WHERE hospitalnumber='$patientnumber' AND laboratoryordernumber LIKE '%$enterlaboratoryorder%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "laboratoryordernumber" => $row["laboratoryordernumber"],
                "patientname" => $row["patientname"],
                "patientnumber" => $row["hospitalnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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


if(isset($_POST["loadRegisteredPatientPards"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT DISTINCT(patientcard.cardnumber),revenueorder.status,patientcard.id,patientcard.person,patientcard.cardtype,patientcard.patientnumber,patientcard.comments,patientcard.enteredby,patientcard.entereddate,patientcard.updateddate FROM revenueorder,patientcard WHERE revenueorder.hospitalnumber=patientcard.patientnumber AND patientcard.comments = 'PAID AND REGISTERED' GROUP BY patientcard.patientnumber Order By patientcard.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "status" => $row["status"],
                "person" => $row["person"],
                "cardtype" => $row["cardtype"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["patientnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST['getPatientById'])){
    $id = $_POST['id'];
    $query = "Select * From patientcard Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "firstname" => $row['firstname'],
        "cardtype" => $row['cardtype'],
        "comments" => $row['comments'],
        "person" => $row['person'],
        "entereddate" => $row['entereddate'],
        "enteredby" => $row['enteredby'],
        "updateddate" => $row['updateddate']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

//Get Nationality
if(isset($_POST['getCountries'])){
    // $id = $_POST['id'];
    $query = "Select * From countries";
    $runquery = mysqli_query($conn, $query);

    if(mysqli_num_rows($runquery)>0){
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
        "id" =>  $row['id'],
        "sortname" => $row['sortname'],
        "name" => $row['name']
    );
            
    array_push($exam_arr["records"], $exam_item);

    }
    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($exam_arr);
    } else {

    echo "No Record Found";
    }
}

//Get State
if(isset($_POST['getStateByCountryId'])){
    $id = $_POST['id'];
    $query = "Select * From states WHERE country_id=$id";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "name" => $row['name']
            );
            
            array_push($exam_arr["records"], $exam_item);
        
        }
        // set response code - 200 OK
        http_response_code(200);

        // make it json format
        echo json_encode($exam_arr);
    } else {

        echo "No Record Found";
    }
}

//Get Local Governments
if(isset($_POST['getLGAByStateId'])){
    $id = $_POST['id'];
    $query = "Select * From local_governments WHERE state_id=$id";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "name" => $row['name']
            );
                    
            array_push($exam_arr["records"], $exam_item);

        }
        // set response code - 200 OK
        http_response_code(200);

        // make it json format
        echo json_encode($exam_arr);
        } else {

        echo "No Record Found";
        }
}



//Corpse
if(isset($_POST['getCorpseinfoByCorpseRegistrationNumber'])){
    $id = $_POST['id'];
    $query = "Select corpse.*,revenueorder.status AS paystatus,morguepatient.*,corpseregistrationcard.* From corpse,revenueorder,morguepatient,corpseregistrationcard Where revenueorder.hospitalnumber=morguepatient.corpseregistrationnumber AND revenueorder.hospitalnumber=corpseregistrationcard.corpseregistrationnumber AND revenueorder.personid=corpse.id AND revenueorder.hospitalnumber='$id'";
    $runquery = mysqli_query($conn, $query);
    $count = mysqli_num_rows($runquery);
    if($count>0){
        $row = mysqli_fetch_assoc($runquery);
        $product_arr = array(
            "id" =>  $row['id'],
            "status" => $row['status'],
            "tallynumber" => $row['tallynumber'],
            "paystatus" => $row['paystatus'],
            "patienttype" => "Corpse",
            "corpseregistrationstatus" => $row['corpseregistrationstatus'],
            "corpseregistrationnumber" => $row['corpseregistrationnumber'],
            "personid" => $row['corpseid'],
            "cardtype" => $row['cardtype'],
            "cardnumber" => $row['cardnumber'],
            "comments" => $row['comments'],
            "address" => $row['address'],
            "person" => $row['corpsename'],
            "patientid" => $row['corpseid'],
            "entereddate" => $row['entereddate'],
            "enteredby" => $row['enteredby'],
            "updateddate" => $row['updateddate'],
            "placeofdeath" => $row['placeofdeath'],
            "tribe" => $row['tribe'],
            "corpsetype" => $row['corpsetype'],
            "nextofkin" => $row['nextofkinlastname']." ".$row['nextofkinfirstname']." ".$row['nextofkinmiddlename'],
            "nextofkinrelationship" => $row['nextofkinrelationship'],
            "phonenumber" => $row['phonenumber'],
            "firstname" => $row['corpsefirstname'],
            "nationality" => $row['nationality'],
            "stateoforigin" => $row['stateoforigin'],
            "remark" => $row['remark'],
            "lgaoforigin" => $row['lgaoforigin'],
            "tribe" => $row['tribe'],
            "corpsesource" => $row['corpsesource'],
            "causeofdeath" => $row['causeofdeath'],
            "lastname" => $row['corpsesurname'],
            "gender" => $row['corpsegender'],
            "dateofdeath" => $row['corpsedateofdeath'],
            "age" => $row['corpseage'],
            "religion" => $row['religion'],
            "occupation" => $row['occupation'],
            "tallynumber" => $row['tallynumber'],
            "dateentered" => $row['entereddate']
        );
    
        // set response code - 200 OK
        http_response_code(200);
    
        // make it json format
        echo json_encode($product_arr);
    } else {
        echo "No Record Found";
    }
    
}

if(isset($_POST['getPatientPrescriptionItemOrders'])){
    $id = $_POST['id'];

    // personid
    $query = "SELECT * FROM patient WHERE personid=$id";
    $run_query = mysqli_query($conn, $query);
    $row_patient = mysqli_fetch_assoc($run_query);

    $patientid =  $row_patient["id"];
   
    $query = "SELECT * FROM prescriptionorder p,revenueorder r WHERE p.patientid=$patientid AND r.revenueordernumber=p.revenueordernumber;";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" =>  $row['id'],
                "revenueordernumber" => $row['revenueordernumber'],
                "totalamount" => $row['totalamount']." Naira",
                "itemorderdate" => ",Date ".$row['itemorderdate'],
                "status" => $row['status'],
                "itemorder" => $row['itemorder'],
                "prescription" => $row['prescription']
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
                "id" =>  "0",
                "revenueordernumber" => "No Revenue Order",
                "totalamount" => "",
                "itemorderdate" => "",
                "status" => "",
                "itemorder" => '[{"genericname":"None.","department":"NONE","departmentitemgroup":"None","sellingprice":0,"reorderlevel":"0","quantity":0}]'
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST['getBilledTo'])){


    $id = $_POST['personid'];
    $number = $_POST['accountnumber'];

    $query = "SELECT SUM(amount) AS total FROM accountentry WHERE accountnumber='$number'";
    $run_query = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($run_query);
    $total = $row["total"];

    // personid
    $query = "";
    $run_query = "";
    $person = "";
    if($_POST['getBilledTo']=="getBilledToMorgue"){
        $query = "SELECT * FROM morguepatient,corpse WHERE morguepatient.corpseid=corpse.id AND morguepatient.corpseid=$id";
        $run_query = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($run_query);
        $person = $row["person"]."|".$row["address"]."|Ph: ".$row["phonenumber"]."|(Corpse Name: ".$row["corpsename"].")|".$row["tallynumber"]."|".$total;
    } else if($_POST['getBilledTo']=="getBilledToPatient"){
        $query = "SELECT * FROM patient,person WHERE patient.personid=person.id AND patient.personid=$id";
        $run_query = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($run_query);
        $person = $row["person"]." <br>".$row["contactaddress"]."|Phone No: ".$row["phonenumber"]."| ||".$total;
        $person = $row["person"]." *<b>Phone No</b>: ".$row["phonenumber"];
    }
    
    
    echo $person;
}

if(isset($_POST['getPatientLaboratoryItemOrders'])){
    $id = $_POST['id'];
   
    $query = "SELECT * FROM laboratoryorder p,revenueorder r WHERE p.patientid=$id AND r.revenueordernumber=p.revenueordernumber;";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" =>  $row['id'],
                "revenueordernumber" => $row['revenueordernumber'],
                "totalamount" => $row['totalamount']." Naira",
                "itemorderdate" => ",Date ".$row['itemorderdate'],
                "status" => $row['status'],
                "itemorder" => $row['itemorder'],
                "laboratoryorder" => $row['laboratoryorder']
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
                "id" =>  "0",
                "revenueordernumber" => "No Revenue Order",
                "totalamount" => "",
                "itemorderdate" => "",
                "status" => "",
                "itemorder" => '[{"genericname":"None.","department":"NONE","departmentitemgroup":"None","sellingprice":0,"reorderlevel":"0","quantity":0}]'
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST['getPatientItemOrders'])){
    $id = $_POST['id'];
   
    // personid
    $query = "SELECT * FROM patient WHERE personid=$id";
    $run_query = mysqli_query($conn, $query);
    $row_patient = mysqli_fetch_assoc($run_query);

    $patientid =  $row_patient["id"];
    $query = "SELECT * FROM revenueorder WHERE patientid=$patientid";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" =>  $row['id'],
                "revenueordernumber" => $row['revenueordernumber'],
                "totalamount" => $row['totalamount']." Naira",
                "itemorderdate" => ",Date ".$row['itemorderdate'],
                "status" => $row['status'],
                "itemorder" => $row['itemorder'],
                "patientid" => $patientid
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
                "id" =>  "0",
                "revenueordernumber" => "No Revenue Order",
                "totalamount" => "",
                "itemorderdate" => "",
                "status" => "",
                "itemorder" => '[{"genericname":"None.","department":"NONE","departmentitemgroup":"None","sellingprice":0,"reorderlevel":"0","quantity":0}]'
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST['getMorguePatientItemOrders'])){
    $id = $_POST['id'];
   
    // personid
    $query = "SELECT * FROM morguepatient WHERE corpseid=$id";
    $run_query = mysqli_query($conn, $query);
    $row_patient = mysqli_fetch_assoc($run_query);

    $patientid =  $row_patient["id"];
    $query = "SELECT * FROM revenueorder WHERE patientid=$patientid";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" =>  $row['id'],
                "revenueordernumber" => $row['revenueordernumber'],
                "totalamount" => $row['totalamount']." Naira",
                "itemorderdate" => ",Date ".$row['itemorderdate'],
                "status" => $row['status'],
                "itemorder" => $row['itemorder'],
                "patientid" => $patientid
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
                "id" =>  "0",
                "revenueordernumber" => "No Revenue Order",
                "totalamount" => "",
                "itemorderdate" => "",
                "status" => "",
                "itemorder" => '[{"genericname":"None.","department":"NONE","departmentitemgroup":"None","sellingprice":0,"reorderlevel":"0","quantity":0}]'
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST['getPatientInfoByPatientNumber'])){
    $id = $_POST['id'];
    $query = "Select * From person,revenueorder,patient,patientcard Where revenueorder.hospitalnumber=patient.patientnumber AND revenueorder.hospitalnumber=patientcard.patientnumber AND revenueorder.personid=person.id AND revenueorder.hospitalnumber='$id'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "status" => $row['status'],
        "patienttype" => $row['patienttype'],
        "patientnumber" => $row['patientnumber'],
        "patientstatus" => $row['patientstatus'],
        "personid" => $row['personid'],
        "cardtype" => $row['cardtype'],
        "cardnumber" => $row['cardnumber'],
        "comments" => $row['comments'],
        "person" => $row['person'],
        "nationality" => $row['nationality'],
        "stateoforigin" => $row['stateoforigin'],
        "lgaoforigin" => $row['lgaoforigin'],
        "tribe" => $row['tribe'],
        "nextofkin" => $row['nextofkin'],
        "address" => $row['contactaddress'],
        "nextofkinphonenumber" => $row['nextofkinphonenumber'],
        "nextofkinrelationship" => $row['nextofkinrelationship'],
        "patientid" => $row['patientid'],
        "entereddate" => $row['entereddate'],
        "enteredby" => $row['enteredby'],
        "updateddate" => $row['updateddate'],
        "weight" => $row['weight'],
        "height" => $row['height'],
        "agevalue" => $row['agevalue'],
        "agegroup" => $row['agegroup'],
        "phonenumber" => $row['phonenumber'],
        "firstname" => $row['firstname'],
        "middlename" => $row['middlename'],
        "lastname" => $row['lastname'],
        "gender" => $row['gender'],
        "dateofbirth" => $row['dateofbirth'],
        "maritalstatus" => $row['maritalstatus'],
        "age" => $row['age'],
        "religion" => $row['religion'],
        "occupation" => $row['occupation'],
        "bloodgroup" => $row['bloodgroup']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

//Get Corpse Code
if(isset($_POST["getCorpseCode"])){
    $mortuarynumber = $_POST["mortuarynumber"];
    $query = "SELECT corpsecode FROM morguepatient WHERE corpseregistrationnumber = '$mortuarynumber'";
    $runquerycode = mysqli_query($conn, $query);
    $rowcode = mysqli_fetch_assoc($runquerycode);

    if(mysqli_num_rows($runquerycode)>0){
        echo $rowcode['corpsecode'];
    } else {
        echo "No Corpse Code";
    }
   
}

//Get Morgue Tracking Record
if(isset($_POST["getMortuaryRecord"])){
    $mortuarynumber = $_POST["mortuarynumber"];
    $query = "SELECT id,tallynumber,corpseregistrationnumber,cardnumber,corpsename,cardtype,nextofkin,morguepatientid,id,corpseid,entereddate,enteredby,updateddate,comments,remark FROM corpseregistrationcard WHERE cardnumber LIKE '%$mortuarynumber%'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);

    


    $hospitalnumber = $row['corpseregistrationnumber'];
    $query = "SELECT corpsecode FROM morguepatient WHERE corpseregistrationnumber = '$hospitalnumber'";
    $runquerycode = mysqli_query($conn, $query);
    $rowcode = mysqli_fetch_assoc($runquerycode);


    $query = "SELECT revenueordernumber,totalamount FROM revenueorder WHERE hospitalnumber='$hospitalnumber'";
    $runquery = mysqli_query($conn, $query);
    $bill = 0;
    $paid = 0;
    while($row1=mysqli_fetch_array($runquery)){
        $bill += $row1["totalamount"];
        $revenuenumber = $row1["revenueordernumber"];

        // echo $revenuenumber;
        $query = "SELECT paid FROM payment WHERE paymentordernumber='$revenuenumber'";
        $run_query = mysqli_query($conn, $query);
        while($row2=mysqli_fetch_array($run_query)){
            $paid += $row2["paid"];
        }

    }
    $balance = $bill - $paid;

    $product_arr = array(
        "id" =>  $row['id'],
        "tallynumber" => $row['tallynumber'],
        "cardnumber" => $row['cardnumber'],
        "corpsename" => $row['corpsename'],
        "nextofkin" => $row['nextofkin'],
        "morguepatientid" => $row['morguepatientid'],
        "cardtype" => $row['cardtype'],
        "corpseregistrationnumber" => $row['corpseregistrationnumber'],
        "corpseid" => $row['corpseid'],
        "entereddate" => $row['entereddate'],
        "enteredby" => $row['enteredby'],
        "updateddate" => $row['updateddate'],
        "comments" => $row['comments'],
        "remark" => $row['remark'],
        "corpsecode" => $rowcode['corpsecode'],
        "bill" => $bill,
        "paid" => $paid,
        "balance" => $balance
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

// Get Tally
if(isset($_POST["getTally"])){
    $corpsename = $_POST["corpsename"];
    $corpsename = trim($corpsename);
    $query = "SELECT * FROM tally WHERE patientname LIKE '%$corpsename%'";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        $row = mysqli_fetch_assoc($runquery);
        echo $row["description"];
    } else {
        echo "No Tally Assigned";
    }
    
}


//admit Corpse
if(isset($_POST["admitCorpse"])){
    $status = $_POST["status"];
    $corpsename = $_POST["corpsename"];
    $tallynumber = $_POST["tallynumber"];
    $corpsenumber = $_POST["corpsenumber"];
    $corpsenextofkin = $_POST["corpsenextofkin"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    //check if corpse registerd
    $query = "SELECT * FROM morguepatientstatus WHERE corpsenumber = '$corpsenumber'";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        echo "Corpse already admitted in Morgue";
    } else {
        $query = "INSERT INTO morguepatientstatus(status,corpsename,tallynumber,corpsenumber,nextofkin,enteredby,entereddate) VALUES(
            '$status','$corpsename','$tallynumber','$corpsenumber','$corpsenextofkin','$person','$entrydate')";
            $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        //update corpseregistrationcard
        $query = "UPDATE corpseregistrationcard SET comments='$status' WHERE corpseregistrationnumber='$corpsenumber'";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        echo "Corpse admitted to Morgue successfully";
    }
    
    

}

//discharge Corpse
if(isset($_POST["dischargeCorpse"])){
    $status = $_POST["status"];
    $corpsename = $_POST["corpsename"];
    $tallynumber = $_POST["tallynumber"];
    $tally = preg_replace("/[^0-9]/", '', $_POST["tally"]);
    $corpsenumber = $_POST["corpsenumber"];
    $corpsenextofkin = $_POST["corpsenextofkin"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    //check if corpse registerd
    $query = "DELETE FROM morguepatientstatus WHERE corpsenumber LIKE '%$corpsenumber%'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    //check if corpse registerd
    $query = "DELETE FROM tally WHERE tallynumber LIKE '%$tally%'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    
    
    //update corpseregistrationcard
    $query = "UPDATE corpseregistrationcard SET comments='$status' WHERE corpseregistrationnumber LIKE '%$corpsenumber%'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    
    //update corpseregistrationcard
    $query = "UPDATE morguepatient SET patienttype='$status' WHERE corpseregistrationnumber LIKE '%$corpsenumber%'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Corpse discharged From Morgue successfully";

    
    

}

if(isset($_POST['getPatientPrescriptionItemOrdersSearch'])){
    $id = $_POST['id'];
    $query = "Select * From person,revenueorder,patient,patientcard Where revenueorder.hospitalnumber=patient.patientnumber AND revenueorder.hospitalnumber=patientcard.patientnumber AND revenueorder.personid=person.id AND revenueorder.revenueordernumber LIKE '%$id%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
            "id" =>  $row['id'],
            "status" => $row['status'],
            "patienttype" => $row['patienttype'],
            "patientnumber" => $row['patientnumber'],
            "patientstatus" => $row['patientstatus'],
            "personid" => $row['personid'],
            "cardtype" => $row['cardtype'],
            "cardnumber" => $row['cardnumber'],
            "comments" => $row['comments'],
            "person" => $row['person'],
            "patientid" => $row['patientid'],
            "entereddate" => $row['entereddate'],
            "enteredby" => $row['enteredby'],
            "updateddate" => $row['updateddate'],
            "weight" => $row['weight'],
            "height" => $row['height'],
            "agevalue" => $row['agevalue'],
            "agegroup" => $row['agegroup'],
            "phonenumber" => $row['phonenumber'],
            "firstname" => $row['firstname'],
            "middlename" => $row['middlename'],
            "lastname" => $row['lastname'],
            "gender" => $row['gender'],
            "dateofbirth" => $row['dateofbirth'],
            "maritalstatus" => $row['maritalstatus'],
            "age" => $row['age'],
            "religion" => $row['religion'],
            "occupation" => $row['occupation'],
            "bloodgroup" => $row['bloodgroup'],
            "revenueordernumber" => $row['revenueordernumber'],
            "totalamount" => $row['totalamount']." Naira",
            "itemorderdate" => ",Date ".$row['itemorderdate'],
            "status" => $row['status'],
            "itemorder" => $row['itemorder']
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
            "id" =>  "0",
            "revenueordernumber" => "No Revenue Order",
            "totalamount" => "",
            "itemorderdate" => "",
            "status" => "",
            "itemorder" => '[]'
        );

        array_push($exam_arr["records"], $exam_item);
    

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($exam_arr);
    }
}

if(isset($_POST["GetTallyNumber"])){
    $query = "SELECT * FROM corpseregistrationcard WHERE tallynumber>0";
    $run_query = mysqli_query($conn, $query); 

    //$row = mysqli_fetch_assoc($run_query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
          
                "tallynumber" => $row["tallynumber"]
            );
            
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    } else{
        echo "No Tally";
         // set response code - 404 Not found
            // http_response_code(404);
        
            // // tell the user products does not exist
            // echo json_encode(
            //     array("message" => "No Record found")
            // );
    }
}


if(isset($_POST["insertLabTestReport"])){

    $labtest = $_POST['labtest'];
    $patientname = $_POST['patientname'];
    $patientnumber = $_POST['patientnumber'];
    $labtestreport = $_POST['labtestreport'];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    
    $query = "INSERT INTO laboratoryreport(laboratoryreportnumber,patientnumber,patientname,labreport,enteredby,entereddate) VALUES('$labtest','$patientname','$patientnumber','$labtestreport','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message = "Lab Test Report Registered Successful; ";
    echo $message;
}

if(isset($_POST["insertPatientCard"])){
    $firstname = $_POST['firstname'];
    $cardtype = $_POST['itemgenericname'];
    $status = $_POST['patientstatus'];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    //Register Person
    $personcategory = "Single Individual";
    $persontype = "PATIENT";
    $query = "INSERT INTO person(firstname,personcategory,persontype,enteredby,entereddate) VALUES('$firstname','$personcategory','$persontype','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message = "Person Registered Successful; ";
    //Register Patient
    $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
    $query = "SELECT * FROM patient ORDER BY id DESC LIMIT 1";


    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".mysqli_error($db));
    }
    $numberofrows = mysqli_num_rows($run_query);
    $num_rows = 0;
    $rows = mysqli_fetch_assoc($run_query);
    if($numberofrows == 0){
        $num_rows = 1;
    } else {
        $num_rows = $rows['id'] + 1;
    }

    
    
    $str_num_rows = strval($num_rows);
    $len_str_num_rows = strlen($str_num_rows);
    if($len_str_num_rows==4){
        $str_num_rows = "0".$str_num_rows;
    } else if($len_str_num_rows==3){
        $str_num_rows = "00".$str_num_rows;
    } else if($len_str_num_rows==2){
        $str_num_rows = "000".$str_num_rows;
    } else if($len_str_num_rows==1){
        $str_num_rows = "0000".$str_num_rows;
    }

    $year = date("Y");
    $month = date("m");


    $patientnumber = "PT/" . $month . "/" . $year . "/" . $str_num_rows; //. "/" . $genericname;
    $patienttype = "Not Registered";
    $patientstatus = "In-Active";
    $query = "INSERT INTO patient(personid,patientnumber,person,patienttype,patientstatus,enteredby,entereddate) VALUES($personid,'$patientnumber','$firstname','$patienttype','$patientstatus','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $patientid = mysqli_insert_id($conn);
    
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message .= "Patient Registered Successful; ";
    //echo $generateditemcode;
    //Register Patient Card
    $query = "SELECT * FROM patientcard ORDER BY id DESC LIMIT 1";


    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".mysqli_error($db));
    }
    $numberofrows = mysqli_num_rows($run_query);
    $num_rows = 0;
    $rows = mysqli_fetch_assoc($run_query);
    if($numberofrows == 0){
        $num_rows = 1;
    } else {
        $num_rows = $rows['id'] + 1;
    }

    
    
    $str_num_rows = strval($num_rows);
    $len_str_num_rows = strlen($str_num_rows);
    if($len_str_num_rows==4){
        $str_num_rows = "0".$str_num_rows;
    } else if($len_str_num_rows==3){
        $str_num_rows = "00".$str_num_rows;
    } else if($len_str_num_rows==2){
        $str_num_rows = "000".$str_num_rows;
    } else if($len_str_num_rows==1){
        $str_num_rows = "0000".$str_num_rows;
    }

    $year = date("Y");
    $month = date("m");


    $cardnumber = "PCD/" . $month . "/" . $year . "/" . $str_num_rows; //. "/" . $genericname;
   


    $query = "INSERT INTO patientcard(patientid,person,firstname,personid,cardnumber,cardtype,patientnumber,comments,enteredby,entereddate) 
                                VALUES($patientid,'$firstname','$firstname',$personid,'$cardnumber','$cardtype','$patientnumber','$status','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message .= "Patient Card Registered Successfully";

    
    
   
    

    $product_arr = array(
        "personid" =>  $personid,
        "hospitalnumber" => $patientnumber,
        "patientid" => $patientid,
        "person" => $firstname,
        "cardnumber" => $cardnumber,
        "message" =>  $message
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);


}

if(isset($_POST["insertPatientNote"])){
    $personid = $_POST['personid'];
    $patientid = $_POST['patientid'];
    $patientname = $_POST['patientname'];
    
    $cardnumber = $_POST['cardnumber'];
    $patientnumber = $_POST['patientnumber'];
    $patientnote = $_POST['patientnote'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    
    $query = "INSERT INTO patientnote(patientnumber,cardnumber,doctor,patientname,patientnote,person,personid,history,enteredby,entereddate) 
    VALUES('$patientnumber','$cardnumber','$person','$patientname','$patientnote','$patientname',$personid,'$patientnote','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message = "Patient Note Registered Successful; ";
    
    
    
   
    

    $product_arr = array(
        "personid" =>  $personid,
        "hospitalnumber" => $patientnumber,
        "patientid" => $patientid,
        "person" => $patientname,
        "cardnumber" => $cardnumber,
        "message" =>  $message
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);


}

if(isset($_POST["getMorgueCurrentList"])){
    $searchItem = $_POST["searchItem"];
    $query = "SELECT * FROM morguepatient,corpseregistrationcard WHERE morguepatient.corpseid=corpseregistrationcard.corpseid AND (morguepatient.corpseregistrationnumber LIKE '%$searchItem%' OR morguepatient.corpsename LIKE '%$searchItem%')";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    
                    "id" => $row["id"],
                    "corpseregistrationnumber" => $row["corpseregistrationnumber"],
                    "corpsename" => $row["corpsename"],
                    "corpsecode" => $row["corpsecode"],
                    "nextofkin" => $row["person"],
                    "patienttype" => $row["patienttype"],
                    "dateentered" => $row["dateentered"],
                    "tallynumber" => $row["tallynumber"],
                    "status" => $row["status"]." ".$row["comments"]
                );
      
                array_push($exam_arr["records"], $exam_item);
              
            }
          
               
              // set response code - 200 OK
              http_response_code(200);
            
              // make it json format
              echo json_encode($exam_arr);
       
    } else {


         // set response code - 200 OK
         http_response_code(200);
            
         // make it json format
         echo "No Record Found";
    }
   
}

if(isset($_POST["editPatientVitalSigns"])){
   

    $personid = $_POST['id'];
    $patientid = $_POST['patientid'];
    $personname = $_POST['person'];

    $patientnumber = $_POST['patientnumber'];
    $value = $_POST['patientvitalslist'];
    
   
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    //Register Person
    $personcategory = "Single Individual";
    $persontype = "PATIENT";
    $query = "INSERT INTO patientvitals(value,patientid,person,
                                        patientnumber,enteredby,entereddate) 
                                VALUES('$value','$patientid','$personname',
                                        '$patientnumber','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message = "Person Vital Signs Registered Successful; ";
    
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo $message;


}

if(isset($_POST["editPatient"])){
    $id= $_POST["id"];
    $firstname = $_POST["firstname"];
    $middlename = $_POST["middlename"];
    $lastname = $_POST["lastname"];
    $gender = $_POST["gender"];
    $maritalstatus = $_POST["maritalstatus"];
    $dateofbirth = $_POST["dateofbirth"];
    $age = $_POST["age"];
    $agevalue = $_POST["agevalue"];
    $agegroup = $_POST["agegroup"];
    $occupation = $_POST["occupation"];
    $religion = $_POST["religion"];
    $paid = $_POST["paid"];
    $weight = $_POST["weight"];
    $height = $_POST["height"];
    $phonenumber = $_POST["phonenumber"];
    $bloodgroup = $_POST["bloodgroup"];
    $patientnumber = $_POST["patientnumber"];

    $nextofkinfullname = $_POST["nextofkinfullname"];
    $nextofkinrelationship = $_POST["nextofkinrelationship"];
    $nextofkinphonenumber = $_POST["nextofkinphonenumber"];

    $tribe = $_POST["tribe"];
    $address = $_POST["address"];
    $lgaoforigin = $_POST["lgaoforigin"];
    $stateoforigin = $_POST["stateoforigin"];
    $nationality = $_POST["nationality"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE person SET firstname = '$firstname',
                                middlename = '$middlename',
                                lastname = '$lastname',
                                gender = '$gender',
                                dateofbirth = '$dateofbirth',
                                weight = '$weight',
                                height = '$height',
                                agegroup = '$agegroup',
                                age = $age,
                                agevalue = '$agevalue',
                                tribe = '$tribe',
                                contactaddress = '$address',
                                lgaoforigin = '$lgaoforigin',
                                stateoforigin = '$stateoforigin',
                                nationality = '$nationality',
                                phonenumber = '$phonenumber',
                                maritalstatus = '$maritalstatus',
                                occupation = '$occupation',
                                nextofkin = '$nextofkinfullname',
                                nextofkinrelationship = '$nextofkinrelationship',
                                nextofkinphonenumber = '$nextofkinphonenumber',
                                bloodgroup = '$bloodgroup',
                                religion = '$religion',updateddate = '$person, $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Person Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE patient SET person = '$lastname, $middlename $firstname',
                                patienttype = 'PAID AND REGISTERED',
                                patientstatus = 'Active',updateddate = '$person, $entrydate' WHERE personid=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Patient Record <br>".mysqli_error($conn));
    }

    //Register Next of Kin
    $query = "INSERT INTO nextofkin(personid,person,nextofkinpersonid,nextofkinperson,relationship,phonenumber,status,enteredby,entereddate) 
                    VALUES($id,'$lastname $firstname $middlename',$id,'$nextofkinfullname','$nextofkinrelationship','$nextofkinphonenumber','PATIENT','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: Test".mysqli_error($conn));
    }


    $query = "UPDATE patientcard SET person = '$lastname, $middlename $firstname',
                                comments = 'PAID AND REGISTERED',
                                updateddate = '$person, $entrydate' WHERE personid=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Patient Card Record <br>".mysqli_error($conn));
    }

   echo $lastname." ". $middlename." " .$firstname. " with Hospital Number ".$patientnumber." has been registered successfully";


}
if(isset($_POST["bulkUploadCorpse"])){

    $ADDRESS = $_POST["ADDRESS"];
    $AMOUNT_PAID = $_POST["AMOUNT_PAID"];
    $CAUSE_OF_DEATH = $_POST["CAUSE_OF_DEATH"];
    $CORPSE_ADMISSION_DATE = $_POST["CORPSE_ADMISSION_DATE"];
    $CORPSE_ADMISSION_FEE = $_POST["CORPSE_ADMISSION_FEE"];
    $CORPSE_TYPE = $_POST["CORPSE_TYPE"];
    $DATE_OF_DEATH = $_POST["DATE_OF_DEATH"];
    $EMBALMENT_FEE = $_POST["EMBALMENT_FEE"];
    $FIRST_NAME_CORPSE = $_POST["FIRST_NAME_CORPSE"];
    $FIRST_NAME_KIN = $_POST["FIRST_NAME_KIN"];
    $LAST_NAME_KIN = $_POST["LAST_NAME_KIN"];
    $LGA_OF_ORIGIN = $_POST["LGA_OF_ORIGIN"];
    $MAINTENANE_FEE = $_POST["MAINTENANE_FEE"];
    $MARITAL_STATUS = $_POST["MARITAL_STATUS"];
    $NATIONALITY = $_POST["NATIONALITY"];
    $OCCUPATION = $_POST["OCCUPATION"];
    $OLD_HOSPITAL_NO = $_POST["OLD_HOSPITAL_NO"];
    $PHONE = $_POST["PHONE"];
    $PLACE_OF_DEATH = $_POST["PLACE_OF_DEATH"];
    $RELATIONSHIP = $_POST["RELATIONSHIP"];
    $REMARK = $_POST["REMARK"];
    $TRIBE = $_POST["TRIBE"];
    $SEX = $_POST["SEX"];
    $SOURCE_OF_CORPSE = $_POST["SOURCE_OF_CORPSE"];
    $STATE_OF_ORIGIN = $_POST["STATE_OF_ORIGIN"];
    $STATUS = $_POST["STATUS"];
    $SURNAME_CORPSE = $_POST["SURNAME_CORPSE"];
    $TALLY_NO = $_POST["TALLY_NO"];
    $TOTAL_BILL = $_POST["TOTAL_BILL"];

    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    $patientname = $_POST["patientname"];
    
    $itemdepartment = $_POST["department"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    //insertCorpseRegistration

    //Register Next of Kin
    $nextofkin = $FIRST_NAME_KIN." ".$LAST_NAME_KIN;
    $personcategory = "Single Individual";
    $persontype = "CORPSE NEXT OF KIN";
    $query = "INSERT INTO person(firstname,middlename,lastname,personcategory,persontype,phonenumber,enteredby,entereddate) 
                    VALUES('$FIRST_NAME_KIN','','$LAST_NAME_KIN','$personcategory','$persontype','$PHONE','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    
    $message = "Corpse Next of Kin Registered Successful; ";
    $nexofkinpersonid = mysqli_insert_id($conn);
    //Register Corpse
    // $personcategory = "Single Individual";
    // $persontype = "CORPSE";
    $query = "INSERT INTO corpse(corpsefirstname,corpsesurname,nextofkinpersonid,nextofkinfirstname,nextofkinmiddlename,nextofkinlastname,nextofkinrelationship,phonenumber,tallynumber,enteredby,entereddate) 
                    VALUES('$FIRST_NAME_CORPSE','$SURNAME_CORPSE',$nexofkinpersonid,'$FIRST_NAME_KIN','','$LAST_NAME_KIN','$RELATIONSHIP','$PHONE','Accommodation Fee $TALLY_NO,','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    
    $message .= ", Corpse Registered Successful; ";
    $corpseid = mysqli_insert_id($conn);
    $corpsename = $FIRST_NAME_CORPSE." ".$SURNAME_CORPSE;
    //Register Next of Kin
    $query = "INSERT INTO nextofkin(personid,person,nextofkinpersonid,nextofkinperson,relationship,phonenumber,status,enteredby,entereddate) 
                    VALUES($corpseid,'$corpsename',$nexofkinpersonid,'$nextofkin','$RELATIONSHIP','$PHONE','CORPSE','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: Test".mysqli_error($conn));
    }
    $nextofkinid = mysqli_insert_id($conn);
    $message .= ", Corpse Linked with Next of Kin; ";
    //Register Patient
    $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
    $query = "SELECT * FROM morguepatient ORDER BY id DESC LIMIT 1";


    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".mysqli_error($db));
    }
    $numberofrows = mysqli_num_rows($run_query);
    $num_rows = 0;
    $rows = mysqli_fetch_assoc($run_query);
    if($numberofrows == 0){
        $num_rows = 1;
    } else {
        $num_rows = $rows['id'] + 1;
    }

    
    
    $str_num_rows = strval($num_rows);
    $len_str_num_rows = strlen($str_num_rows);
    if($len_str_num_rows==4){
        $str_num_rows = "0".$str_num_rows;
    } else if($len_str_num_rows==3){
        $str_num_rows = "00".$str_num_rows;
    } else if($len_str_num_rows==2){
        $str_num_rows = "000".$str_num_rows;
    } else if($len_str_num_rows==1){
        $str_num_rows = "0000".$str_num_rows;
    }

    $year = date("Y");
    $month = date("m");

    $status = "New Corpse Registration";
    $patientnumber = "CP/" . $month . "/" . $year . "/" . $str_num_rows; //. "/" . $genericname;
    $patienttype = "Not Registered";
    $patientstatus = "In-Active";
    $query = "INSERT INTO morguepatient(corpseid,corpseregistrationnumber,corpseregistrationstatus,corpsename,nextofkinpersonid,person,guarantor,patienttype,status,enteredby,entereddate) 
                                VALUES($corpseid,'$patientnumber','$patientstatus','$corpsename',$nexofkinpersonid,'$nextofkin','$nextofkin','$patienttype','$status','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $patientid = mysqli_insert_id($conn);
    
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message .= "Corpse Registered Successfully in Morgue; ";
    //echo $generateditemcode;
    //Register Patient Card
    $query = "SELECT * FROM corpseregistrationcard ORDER BY id DESC LIMIT 1";


    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".$query."<br>".mysqli_error($db));
    }
    $numberofrows = mysqli_num_rows($run_query);
    $num_rows = 0;
    $rows = mysqli_fetch_assoc($run_query);
    if($numberofrows == 0){
        $num_rows = 1;
    } else {
        $num_rows = $rows['id'] + 1;
    }

    
    
    $str_num_rows = strval($num_rows);
    $len_str_num_rows = strlen($str_num_rows);
    if($len_str_num_rows==4){
        $str_num_rows = "0".$str_num_rows;
    } else if($len_str_num_rows==3){
        $str_num_rows = "00".$str_num_rows;
    } else if($len_str_num_rows==2){
        $str_num_rows = "000".$str_num_rows;
    } else if($len_str_num_rows==1){
        $str_num_rows = "0000".$str_num_rows;
    }

    $year = date("Y");
    $month = date("m");


    $cardnumber = "CPCD/" . $month . "/" . $year . "/" . $str_num_rows; //. "/" . $genericname;
   


    $query = "INSERT INTO corpseregistrationcard(morguepatientid,corpsename,nextofkin,corpseid,cardnumber,cardtype,corpseregistrationnumber,tallynumber,enteredby,entereddate) 
                                VALUES($patientid,'$corpsename','$nextofkin',$corpseid,'$cardnumber','$cardtype','$patientnumber','Accommodation Fee $TALLY_NO,','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".$query."<br>".mysqli_error($conn));
    }
    $message .= "Corpse Card Registered Successfully";

    
    
   
    

    $product_arr = array(
        "corpseid" =>  $corpseid,
        "corpseregistrationnumber" => $patientnumber,
        "nextofkin" => $nextofkin,
        "patientid" => $patientid,
        "corpsename" => $corpsename,
        "corpseregistrationcard" => $cardnumber,
        "message" =>  $message
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);


    //Insert Tally
    $description = "Tally ".$TALLY_NO.".,PAID, , Accommodation Fee ".$TALLY_NO."., Staff - Administrator";
    $patientname = $nextofkin."[".$corpsename."]";
    $tallynumber = $TALLY_NO.".,PAID";

   

    //check for tally
    $query = "SELECT * FROM tally WHERE tallynumber = '$tallynumber'";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)==0){
        $query = "INSERT INTO tally(tallynumber,description,patientname,enteredby,entereddate) VALUES(
            '$tallynumber','$description','$patientname','$person','$entrydate')";

        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
        die("Error: ".mysqli_error($conn)."<br>".$query);
        }

        // echo "Tally ".$tallynumber." Assigned";
    } else {
        // echo "Tally ".$tallynumber." Already Assigned";
    }

    //editCorpseRegistration

    $query = "UPDATE corpse SET corpsefirstname = '$FIRST_NAME_CORPSE',
                                corpsesurname = '$SURNAME_CORPSE',
                                corpsegender = '$SEX',
                                corpsedateofdeath = '$DATE_OF_DEATH',
                                corpseage = '0',
                                address = '$ADDRESS',
                                nationality = '$NATIONALITY',
                                occupation = '$OCCUPATION',
                                stateoforigin = '$STATE_OF_ORIGIN',
                                placeofdeath = '$PLACE_OF_DEATH',
                                causeofdeath = '$CAUSE_OF_DEATH',
                                remark = '$REMARK',
                                corpsesource = '$SOURCE_OF_CORPSE',
                                corpsetype = '$CORPSE_TYPE',
                                tribe = '$TRIBE',
                                lgaoforigin = '$LGA_OF_ORIGIN',
                                updateddate = '$person, $entrydate' WHERE id=$corpseid";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Corpse Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE morguepatient SET corpsename = '$SURNAME_CORPSE, $FIRST_NAME_CORPSE',
                                patienttype = 'PAID AND REGISTERED',dateentered='$CORPSE_ADMISSION_DATE',
                                status = 'Active',updateddate = '$person, $entrydate' WHERE corpseid=$corpseid";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Patient Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE corpseregistrationcard SET corpsename = '$SURNAME_CORPSE, $FIRST_NAME_CORPSE',
                                comments = 'ADMITTED IN MORGUE', tallynumber = 'Accommodation Fee ".$TALLY_NO.".,', remark = '$REMARK',
                                updateddate = '$person, $entrydate' WHERE corpseid=$corpseid";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Corpse Registration Card Record <br>".mysqli_error($conn));
    }

   

   //insertCorpseCode
   $corpsenumber = $patientnumber;
   $tallynumber = "Accommodation Fee ".$TALLY_NO.".,";
//    $entry = $corpsecode . ", " . $person . ", " . $entrydate;

   $query = "UPDATE morguepatient SET corpsecode= 'Old Code No' WHERE corpseregistrationnumber='$patientnumber'";
   $runquery = mysqli_query($conn, $query);
   if(!$runquery){
       die("Error: ".mysqli_error($conn));
   }
   
 
   //admitCorpse
    //check if corpse registerd
    $query = "SELECT * FROM morguepatientstatus WHERE corpsenumber = '$corpsenumber'";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        echo "Corpse already admitted in Morgue";
    } else {
        $query = "INSERT INTO morguepatientstatus(status,corpsename,tallynumber,corpsenumber,nextofkin,enteredby,entereddate) VALUES(
            'ADMITTED IN MORGUE','$corpsename','$tallynumber','$corpsenumber','$nextofkin','$person','$entrydate')";
            $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        //update corpseregistrationcard
        $query = "UPDATE corpseregistrationcard SET comments='ADMITTED IN MORGUE' WHERE corpseregistrationnumber='$corpsenumber'";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        // echo "Corpse admitted to Morgue successfully";
    }

    // Update Fees

    $query = "INSERT INTO oldcorpsefee(corpseid,corpsenumber,oldcorpsenumber,corpsename,nextofkin,totalbill,embalmentfee,maintenancefee,amountpaid,admissionfee,dateofadmission,tallynumber,updateddate) VALUES(
        '$corpseid','$corpsenumber','$OLD_HOSPITAL_NO','$corpsename','$nextofkin','$TOTAL_BILL','$EMBALMENT_FEE','$MAINTENANE_FEE','$AMOUNT_PAID','$CORPSE_ADMISSION_FEE','$CORPSE_ADMISSION_DATE','$TALLY_NO','$person on $entrydate')";
        $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $patientid =  $corpseid;

   
     //generate item number
    
     $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
     $query = "SELECT * FROM revenueorder ORDER BY id DESC LIMIT 1";
 
 
     $run_query = mysqli_query($conn, $query);
     if(!$run_query){
         die("Error: ".mysqli_error($db));
     }
     $numberofrows = mysqli_num_rows($run_query);
     $num_rows = 0;
     $rows = mysqli_fetch_assoc($run_query);
     if($numberofrows == 0){
         $num_rows = 1;
     } else {
         $num_rows = $rows['id'] + 1;
     }
 
     
     
     $str_num_rows = strval($num_rows);
     $len_str_num_rows = strlen($str_num_rows);
     if($len_str_num_rows==4){
         $str_num_rows = "0".$str_num_rows;
     } else if($len_str_num_rows==3){
         $str_num_rows = "00".$str_num_rows;
     } else if($len_str_num_rows==2){
         $str_num_rows = "000".$str_num_rows;
     } else if($len_str_num_rows==1){
         $str_num_rows = "0000".$str_num_rows;
     }

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
    $year = date('Y');
    $month = date('m');
     //get departmentcodes


    // echo $_SESSION['department'];
    $department = $_SESSION['department'];
    $query = "SELECT * FROM department WHERE department='$department' ORDER BY id DESC LIMIT 1";
    $run_query = mysqli_query($conn, $query);
    
    $rows = mysqli_fetch_assoc($run_query);
    $requestingdeptcode = $rows["code"];

    
    $department = $_SESSION['department'];
    $query = "SELECT * FROM department WHERE department='$itemdepartment' ORDER BY id DESC LIMIT 1";
    $run_query = mysqli_query($conn, $query);
    
    $rows = mysqli_fetch_assoc($run_query);
    $itemdeptcode = $rows["code"];

    $codename = substr($department, 0, 3);
     $generatedcode = "REV/" . $requestingdeptcode . "/" . $itemdeptcode . "/" . $month.$year . "/" . $str_num_rows; //. "/" . $genericname;
     
     $status = "PAID";
     $comments = 'Payment Order for : '.$cardnumber;
    $query = "INSERT INTO revenueorder(patientname,
                                        hospitalnumber,
                                        comments,
                                        personid,
                                        patientid,
                                        status,paid,paiditems,
                                        revenueordernumber,totalamount,department,itemorder,items,enteredby,entereddate,itemorderdate) VALUES(
                                    '$patientname',
                                    '$corpsenumber',
                                    '$comments',
                                    $corpseid,$corpseid,'$status',0,0,'$generatedcode',$price,'RECORD DEPARTMENT','$list',$items,'$person','$entrydate','$entrydate')";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: ".mysqli_error($conn));
    }
    $revenueid = mysqli_insert_id($conn);
    //Make account entry
    $price = $price * -1;
    $query = "INSERT INTO accountentry(item,amount,accountnumber,
                                    personid,patientid,
                                    accountentrytype,recieptnumber,paymentorder,
                                    paymenttype,enteredby,
                                    entereddate) VALUES('$comments',$price,'$corpsenumber',
                                    $corpseid,$corpseid,'DEBIT','','$generatedcode',
                                    '','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
   

    echo $revenueid.",".$generatedcode;
    
}


//Corpse
if(isset($_POST["editCorpseRegistration"])){
    $id= $_POST["id"];
    $firstname = $_POST["firstname"];
    
    $lastname = $_POST["lastname"];
    $gender = $_POST["gender"];
    $nationality = $_POST["nationality"];
    $placeofdeath = $_POST["placeofdeath"];
    $age = $_POST["age"];
    $causeofdeath = $_POST["causeofdeath"];
    $remark = $_POST["remark"];
    
    $occupation = $_POST["occupation"];
    $religion = $_POST["religion"];
    $paid = $_POST["paid"];
    $corpsesource = $_POST["corpsesource"];
    $stateoforigin = $_POST["stateoforigin"];
    $tallynumber = $_POST["tallynumber"];
    $corpsetype = $_POST["corpsetype"];
    $tribe = $_POST["tribe"];
    $address = $_POST["address"];
    $lgaoforigin = $_POST["lgaoforigin"];
    $patientnumber = $_POST["patientnumber"];
    $dateofdeath = $_POST["dateofdeath"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE corpse SET corpsefirstname = '$firstname',
                                corpsesurname = '$lastname',
                                corpsegender = '$gender',
                                corpsedateofdeath = '$dateofdeath',
                                corpseage = '$age',
                                address = '$address',
                                nationality = '$nationality',
                                occupation = '$occupation',
                                stateoforigin = '$stateoforigin',
                                placeofdeath = '$placeofdeath',
                                causeofdeath = '$causeofdeath',
                                remark = '$remark',
                                corpsesource = '$corpsesource',
                                tallynumber = '$tallynumber',
                                corpsetype = '$corpsetype',
                                tribe = '$tribe',
                                lgaoforigin = '$lgaoforigin',
                                religion = '$religion',updateddate = '$person, $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Corpse Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE morguepatient SET corpsename = '$lastname, $firstname',
                                patienttype = 'PAID AND REGISTERED',dateentered='$entrydate',
                                status = 'Active',updateddate = '$person, $entrydate' WHERE corpseid=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Patient Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE corpseregistrationcard SET corpsename = '$lastname, $firstname',
                                comments = 'ADMITTED IN MORGUE', tallynumber = '$tallynumber', remark = '$remark',
                                updateddate = '$person, $entrydate' WHERE corpseid=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Corpse Registration Card Record <br>".mysqli_error($conn));
    }

   echo $lastname." " .$firstname. " with Number ".$patientnumber." has been registered successfully";


}

if(isset($_POST["editPatientCard"])){
    $id = $_POST['id'];
    $firstname = $_POST['firstname'];
    $cardtype = $_POST['itemgenericname'];
    $status = $_POST['patientstatus'];
    
    $departmentitemgroup = $_POST['usagegrouptype'];
    $usagegrouptype = $_POST['usagegrouptype'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    $query = "UPDATE patientcard SET cardtype = '$cardtype',comments = '$status',updateddate = '$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Patient Card Updated Successfully";

   
}

if(isset($_POST["deletePatientCard"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM patientcard WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["getCorpse"])){
    $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From corpseregistrationcard Where corpsename Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or corpseregistrationnumber Like '%$searchformItem%' Or nextofkin Like '%$searchformItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();
        $exam_arr["revenueorders"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "corpsename" => $row["corpsename"],
                "corpseid" => $row["corpseid"],
                "cardnumber" => $row["cardnumber"],
                "nextofkin" => $row["nextofkin"],
                "comments" => $row["comments"],
                "corpseregistrationnumber" => $row["corpseregistrationnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
            
            $cardnumber = $row["cardnumber"];
            $query = "SELECT * FROM revenueorder WHERE comments LIKE '%$cardnumber%' AND revenueordernumber LIKE '%RCD%';";
            $runquery = mysqli_query($conn, $query);
        
            if(!$runquery){
                die(mysqli_error($conn)."<br>".$query);
            }
            
            while( $row = mysqli_fetch_array($runquery)){
                $order_item=array(
                    "id" => $row["id"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "status" => $row["status"],
                    "orderdate" => $row["itemorderdate"]
                );
        
                array_push($exam_arr["revenueorders"], $order_item);

            
            }
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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



if(isset($_POST["loadCorpseRegistrations"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT DISTINCT(corpseregistrationcard.cardnumber),revenueorder.status,corpseregistrationcard.id,corpseregistrationcard.corpsename,corpseregistrationcard.nextofkin,corpseregistrationcard.cardtype,corpseregistrationcard.corpseregistrationnumber,corpseregistrationcard.comments,corpseregistrationcard.enteredby,corpseregistrationcard.entereddate,corpseregistrationcard.updateddate FROM revenueorder,corpseregistrationcard WHERE revenueorder.hospitalnumber=corpseregistrationcard.patientnumber GROUP BY corpseregistrationcard.cardnumber Order By corpseregistrationcard.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "status" => $row["status"],
                "corpsename" => $row["corpsename"],
                "nextofkin" => $row["nextofkin"],
                "cardtype" => $row["cardtype"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "corpseregistrationnumber" => $row["corpseregistrationnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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


if(isset($_POST["loadPaidCorpseRegistrations"])){
    // $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "SELECT revenueorder.status,corpseregistrationcard.cardnumber,corpseregistrationcard.id,corpseregistrationcard.nextofkin,corpseregistrationcard.corpsename,corpseregistrationcard.cardtype,corpseregistrationcard.corpseregistrationnumber,corpseregistrationcard.comments,corpseregistrationcard.enteredby,corpseregistrationcard.entereddate,corpseregistrationcard.updateddate FROM revenueorder,corpseregistrationcard WHERE revenueorder.hospitalnumber=corpseregistrationcard.patientnumber AND revenueorder.status='PAID' Order By corpseregistrationcard.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "status" => $row["status"],
                "corpsename" => $row["corpsename"],
                "nextofkin" => $row["nextofkin"],
                "cardtype" => $row["cardtype"],
                "cardnumber" => $row["cardnumber"],
                "comments" => $row["comments"],
                "corpseregistrationnumber" => $row["corpseregistrationnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
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

if(isset($_POST['getCorpseById'])){
    $id = $_POST['id'];
    $query = "Select corpseregistrationcard.cardtype,corpseregistrationcard.comments,corpseregistrationcard.corpseregistrationnumber,corpse.* From corpseregistrationcard,corpse Where corpseregistrationcard.corpseid=corpse.id AND corpseregistrationcard.id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "corpsefirstname" => $row['corpsefirstname'],
        "corpsesurname" => $row['corpsesurname'],
        "phonenumber" => $row['phonenumber'],
        "nextofkinfirstname" => $row['nextofkinfirstname'],
        "nextofkinmiddlename" => $row['nextofkinmiddlename'],
        "nextofkinlastname" => $row['nextofkinlastname'],
        "nextofkinrelationship" => $row['nextofkinrelationship'],
        "corpseregistrationnumber" => $row['corpseregistrationnumber'],
        "cardtype" => $row['cardtype'],
        "comments" => $row['comments'],
        "entereddate" => $row['entereddate'],
        "enteredby" => $row['enteredby'],
        "updateddate" => $row['updateddate']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST['getCorpseInfoByRegistrationNumber'])){
    $id = $_POST['id'];
    $query = "Select * From corpse,corpseregistrationcard,morguepatient Where corpseregistrationcard.corpseregistrationnumber=morguepatient.corpseregistrationnumber AND corpseregistrationcard.corpseid=corpse.id AND corpseregistrationcard.corpseregistrationnumber='$id'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "patienttype" => $row['patienttype'],
        "patientstatus" => $row['patientstatus'],
        "nextofkinid" => $row['nextofkinid'],
        "cardtype" => $row['cardtype'],
        "cardnumber" => $row['cardnumber'],
        "comments" => $row['comments'],
        "corpsename" => $row['corpsename'],
        "corpseid" => $row['corpseid'],
        "entereddate" => $row['entereddate'],
        "enteredby" => $row['enteredby'],
        "updateddate" => $row['updateddate'],
        "weight" => $row['weight'],
        "height" => $row['height'],
        "agevalue" => $row['agevalue'],
        "agegroup" => $row['agegroup'],
        "phonenumber" => $row['phonenumber'],
        "nextofkinfirstname" => $row['nextofkinfirstname'],
        "nextofkinmiddlename" => $row['nextofkinmiddlename'],
        "nextofkinlastname" => $row['nextofkinlastname'],
        "gender" => $row['gender'],
        "dateofbirth" => $row['dateofbirth'],
        "maritalstatus" => $row['maritalstatus'],
        "age" => $row['age'],
        "religion" => $row['religion'],
        "occupation" => $row['occupation']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertCorpseRegistration"])){
    $nextofkinfirstname = $_POST['nextofkinfirstname'];
    $nextofkinmiddlename = $_POST['nextofkinmiddlename'];
    $nextofkinsurname = $_POST['nextofkinsurname'];
    $nextofkinrelationship = $_POST['nextofkinrelationship'];
    $nextofkinphonenumber = $_POST['nextofkinphonenumber'];
    $corpsefirstname = $_POST['corpsefirstname'];
    $corpsesurname = $_POST['corpsesurname'];
    $tallynumber = $_POST["tallynumber"];
    $corpsename = $corpsefirstname." ".$corpsesurname;
    $cardtype = $_POST['itemgenericname'];
    $status = $_POST['patientstatus'];
    $nextofkinaddress = $_POST['nextofkinaddress'];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    //Register Next of Kin
    $nextofkin = $nextofkinfirstname." ".$nextofkinmiddlename." ".$nextofkinsurname;
    $personcategory = "Single Individual";
    $persontype = "CORPSE NEXT OF KIN";
    $query = "INSERT INTO person(firstname,middlename,lastname,personcategory,persontype,phonenumber,contactaddress,enteredby,entereddate) 
                    VALUES('$nextofkinfirstname','$nextofkinmiddlename','$nextofkinsurname','$personcategory','$persontype','$nextofkinphonenumber','$nextofkinaddress','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    
    $message = "Corpse Next of Kin Registered Successful; ";
    $nexofkinpersonid = mysqli_insert_id($conn);
    //Register Corpse
    // $personcategory = "Single Individual";
    // $persontype = "CORPSE";
    $query = "INSERT INTO corpse(corpsefirstname,corpsesurname,nextofkinpersonid,nextofkinfirstname,nextofkinmiddlename,nextofkinlastname,nextofkinrelationship,phonenumber,tallynumber,enteredby,entereddate) 
                    VALUES('$corpsefirstname','$corpsesurname',$nexofkinpersonid,'$nextofkinfirstname','$nextofkinmiddlename','$nextofkinsurname','$nextofkinrelationship','$nextofkinphonenumber','$tallynumber','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    
    $message .= ", Corpse Registered Successful; ";
    $corpseid = mysqli_insert_id($conn);

    //Register Next of Kin
    $query = "INSERT INTO nextofkin(personid,person,nextofkinpersonid,nextofkinperson,relationship,phonenumber,status,enteredby,entereddate) 
                    VALUES($corpseid,'$corpsename',$nexofkinpersonid,'$nextofkin','$nextofkinrelationship','$nextofkinphonenumber','CORPSE','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    // $personid = mysqli_insert_id($conn);
    if(!$runquery){
        die("Error: Test".mysqli_error($conn));
    }
    
    $message .= ", Corpse Linked with Next of Kin; ";
    //Register Patient
    $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
    $query = "SELECT * FROM morguepatient ORDER BY id DESC LIMIT 1";


    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".mysqli_error($db));
    }
    $numberofrows = mysqli_num_rows($run_query);
    $num_rows = 0;
    $rows = mysqli_fetch_assoc($run_query);
    if($numberofrows == 0){
        $num_rows = 1;
    } else {
        $num_rows = $rows['id'] + 1;
    }

    
    
    $str_num_rows = strval($num_rows);
    $len_str_num_rows = strlen($str_num_rows);
    if($len_str_num_rows==4){
        $str_num_rows = "0".$str_num_rows;
    } else if($len_str_num_rows==3){
        $str_num_rows = "00".$str_num_rows;
    } else if($len_str_num_rows==2){
        $str_num_rows = "000".$str_num_rows;
    } else if($len_str_num_rows==1){
        $str_num_rows = "0000".$str_num_rows;
    }

    $year = date("Y");
    $month = date("m");


    $patientnumber = "CP/" . $month . "/" . $year . "/" . $str_num_rows; //. "/" . $genericname;
    $patienttype = "Not Registered";
    $patientstatus = "In-Active";
    $query = "INSERT INTO morguepatient(corpseid,corpseregistrationnumber,corpseregistrationstatus,corpsename,nextofkinpersonid,person,guarantor,patienttype,status,enteredby,entereddate) 
                                VALUES($corpseid,'$patientnumber','$patientstatus','$corpsename',$nexofkinpersonid,'$nextofkin','$nextofkin','$patienttype','$status','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    $patientid = mysqli_insert_id($conn);
    
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $message .= "Corpse Registered Successfully in Morgue; ";
    //echo $generateditemcode;
    //Register Patient Card
    $query = "SELECT * FROM corpseregistrationcard ORDER BY id DESC LIMIT 1";


    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error: ".$query."<br>".mysqli_error($db));
    }
    $numberofrows = mysqli_num_rows($run_query);
    $num_rows = 0;
    $rows = mysqli_fetch_assoc($run_query);
    if($numberofrows == 0){
        $num_rows = 1;
    } else {
        $num_rows = $rows['id'] + 1;
    }

    
    
    $str_num_rows = strval($num_rows);
    $len_str_num_rows = strlen($str_num_rows);
    if($len_str_num_rows==4){
        $str_num_rows = "0".$str_num_rows;
    } else if($len_str_num_rows==3){
        $str_num_rows = "00".$str_num_rows;
    } else if($len_str_num_rows==2){
        $str_num_rows = "000".$str_num_rows;
    } else if($len_str_num_rows==1){
        $str_num_rows = "0000".$str_num_rows;
    }

    $year = date("Y");
    $month = date("m");


    $cardnumber = "CPCD/" . $month . "/" . $year . "/" . $str_num_rows; //. "/" . $genericname;
   


    $query = "INSERT INTO corpseregistrationcard(morguepatientid,corpsename,nextofkin,corpseid,cardnumber,cardtype,corpseregistrationnumber,tallynumber,enteredby,entereddate) 
                                VALUES($patientid,'$corpsename','$nextofkin',$corpseid,'$cardnumber','$cardtype','$patientnumber','$tallynumber','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".$query."<br>".mysqli_error($conn));
    }
    $message .= "Corpse Card Registered Successfully";

    
    
   
    

    $product_arr = array(
        "corpseid" =>  $corpseid,
        "corpseregistrationnumber" => $patientnumber,
        "nextofkin" => $nextofkin,
        "patientid" => $patientid,
        "corpsename" => $corpsename,
        "corpseregistrationcard" => $cardnumber,
        "message" =>  $message
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);


}

if(isset($_POST["editCorpse"])){
    $id= $_POST["id"];
    $firstname = $_POST["firstname"];
    $middlename = $_POST["middlename"];
    $lastname = $_POST["lastname"];
    $gender = $_POST["gender"];
    $maritalstatus = $_POST["maritalstatus"];
    $dateofbirth = $_POST["dateofbirth"];
    $age = $_POST["age"];
    $agevalue = $_POST["agevalue"];
    $agegroup = $_POST["agegroup"];
    $occupation = $_POST["occupation"];
    $religion = $_POST["religion"];
    $paid = $_POST["paid"];
    $weight = $_POST["weight"];
    $height = $_POST["height"];
    $phonenumber = $_POST["phonenumber"];
    $bloodgroup = $_POST["bloodgroup"];
    $patientnumber = $_POST["patientnumber"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE person SET firstname = '$firstname',
                                middlename = '$middlename',
                                lastname = '$lastname',
                                gender = '$gender',
                                dateofbirth = '$dateofbirth',
                                weight = '$weight',
                                height = '$height',
                                agegroup = '$agegroup',
                                age = $age,
                                agevalue = '$agevalue',
                                phonenumber = '$phonenumber',
                                maritalstatus = '$maritalstatus',
                                occupation = '$occupation',
                                bloodgroup = '$bloodgroup',
                                religion = '$religion',updateddate = '$person, $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Person Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE patient SET person = '$lastname, $middlename $firstname',
                                patienttype = 'PAID AND REGISTERED',
                                patientstatus = 'Active',updateddate = '$person, $entrydate' WHERE personid=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Patient Record <br>".mysqli_error($conn));
    }

    $query = "UPDATE patientcard SET person = '$lastname, $middlename $firstname',
                                comments = 'PAID AND REGISTERED',
                                updateddate = '$person, $entrydate' WHERE personid=$id";
    $run_query = mysqli_query($conn, $query);

    if(!$run_query){
        die("Error: Patient Card Record <br>".mysqli_error($conn));
    }

   echo $lastname." ". $middlename." " .$firstname. " with Hospital Number ".$patientnumber." has been registered successfully";


}

if(isset($_POST["editCorpseRegistration1"])){
    $id = $_POST['id'];
    $nextofkinfirstname = $_POST['nextofkinfirstname'];
    $nextofkinmiddlename = $_POST['nextofkinmiddlename'];
    $nextofkinsurname = $_POST['nextofkinsurname'];
    $nextofkinrelationship = $_POST['nextofkinrelationship'];
    $corpsefirstname = $_POST['corpsefirstname'];
    $corpsesurname = $_POST['corpsesurname'];
    $corpsename = $corpsefirstname." ".$corpsesurname;
    $cardtype = $_POST['itemgenericname'];
    $status = $_POST['patientstatus'];
    
    $nextofkin = $nextofkinfirstname." ".$nextofkinmiddlename." ".$nextofkinsurname;
  
    $query = "SELECT corpseid FROM corpseregistrationcard WHERE id=".$id;
    $run_query = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($run_query);
    $corpseid = $row["corpseid"];

    $query = "SELECT nextofkinpersonid FROM morguepatient WHERE corpseid=".$corpseid;
    $run_query = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($run_query);
    $nextofkinid = $row["nextofkinpersonid"];


    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    $query = "UPDATE person SET firstname='$nextofkinfirstname',middlename='$nextofkinmiddlename',lastname = '$nextofkinsurname',updateddate = '$person, $entrydate' WHERE id=$nextofkinid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $query = "UPDATE corpse SET corpsefirstname= '$corpsefirstname', corpsesurname= '$corpsesurname', nextofkinfirstname='$nextofkinfirstname',nextofkinmiddlename='$nextofkinmiddlename',nextofkinlastname = '$nextofkinsurname',nextofkinrelationship = '$nextofkinrelationship',updateddate = '$person, $entrydate' WHERE id=$corpseid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $query = "UPDATE nextofkin SET person= '$corpsename', nextofkinperson='$nextofkin',relationship = '$nextofkinrelationship',updateddate = '$person, $entrydate' WHERE personid=$corpseid AND nextofkinpersonid=$nextofkinid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $query = "UPDATE morguepatient SET corpsename= '$corpsename', person='$nextofkin',status = '$status',updateddate = '$person, $entrydate' WHERE corpseid=$corpseid AND nextofkinpersonid=$nextofkinid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $query = "UPDATE corpseregistrationcard SET corpsename= '$corpsename', nextofkin='$nextofkin',cardtype = '$cardtype',comments = '$status',updateddate = '$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Corpse Registration Card Updated Successfully";

   
}

if(isset($_POST["insertCorpseCode"])){

    $corpsecode = $_POST["corpsecode"];
    $corpsenumber = $_POST["corpsenumber"];
    $person = $_SESSION['person'];
    $entrydate = date('Y-m-d H:i:s');

    $entry = $corpsecode . ", " . $person . ", " . $entrydate;

    $query = "UPDATE morguepatient SET corpsecode= '$corpsecode' WHERE corpseregistrationnumber='$corpsenumber'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Corpse Code Updated Successfully<br>".$query;
}

if(isset($_POST["printCorpseCode"])){
    $corpsecode = $_POST["corpsecode"];
    $corpsename = $_POST["corpsename"];
    $tallynumber = $_POST["tallynumber"];
    $corpsenumber = $_POST["corpsenumber"];

    $product_arr=array(
        "corpsecode" => $corpsecode,
        "corpsename" => $corpsename,
        "tallynumber" => $tallynumber,
        "corpsenumber" => $corpsenumber
        
    );

  
    $_SESSION["printCorpseCode"] = $product_arr;
    echo $product_arr;
}

if(isset($_POST["getPrintCorpseCode"])){
    // $product_arr = array();
    $product_arr = $_SESSION["printCorpseCode"];

    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["deleteCorpseRegistration"])){
    $id = $_POST['id'];
  
    $query = "SELECT corpseid FROM corpseregistrationcard WHERE id=".$id;
    $run_query = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($run_query);
    $corpseid = $row["corpseid"];
    $query = "DELETE FROM corpseregistrationcard WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $query = "DELETE FROM corpse WHERE id=$corpseid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }

    $query = "DELETE FROM morguepatient WHERE corpseid=$corpseid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

?>