<?php



include_once("config.php");
defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);



//getStockItemList
if(isset($_POST["getStockItemList"])){
    $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$searchItem%'";
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

//Revenue Order
if(isset($_POST["insertRevenueOrder"])){
    
    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    $patientname = $_POST["patientname"];
    $patientid = $_POST["patientid"];
    $personid = $_POST["personid"];
    $comments = $_POST["cardnumber"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $itemdepartment = $_POST["department"];

    $patienttype = $_POST["patienttype"];
    $query = "";
    if($patienttype=="PATIENT"){
        $query = "SELECT * FROM patient WHERE personid=$personid";
    } else if($patienttype=="CORPSE") {
        $query = "SELECT * FROM morguepatient WHERE corpseid=$personid";
    }
     // personid
     
     $run_query = mysqli_query($conn, $query);
     $row_patient = mysqli_fetch_assoc($run_query);
 
     $patientid =  $row_patient["id"];

   
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
     
     $status = "NOT PAID";
     $comments = 'Payment Order for : '.$comments;
    $query = "INSERT INTO revenueorder(patientname,
                                        hospitalnumber,
                                        comments,
                                        personid,
                                        patientid,
                                        status,paid,paiditems,
                                        revenueordernumber,totalamount,department,itemorder,items,enteredby,entereddate,itemorderdate) VALUES(
                                    '$patientname',
                                    '$hospitalnumber',
                                    '$comments',
                                    $personid,$patientid,'$status',0,0,'$generatedcode',$price,'$department','$list',$items,'$person','$entrydate','$entrydate')";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: ".mysqli_error($conn));
    }
    //Make account entry
    $revenueid = mysqli_insert_id($conn);
    $price = $price * -1;
    $query = "INSERT INTO accountentry(item,amount,accountnumber,
                                    personid,patientid,
                                    accountentrytype,recieptnumber,paymentorder,
                                    paymenttype,enteredby,
                                    entereddate) VALUES('$comments',$price,'$hospitalnumber',
                                    $personid,$patientid,'DEBIT','','$generatedcode',
                                    '','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
   

    echo $revenueid.",".$generatedcode;
}


if(isset($_POST["insertRevenueOrderCorpse"])){
    
    $price = $_POST["price"];
    $items = $_POST["items"];
    // $totalamount = $price * $items;
    $totalamount = $price;
    $list = $_POST["list"];
    $patientname = $_POST["patientname"];
    $patientid = $_POST["patientid"];
    $personid = $_POST["personid"];
    $comments = $_POST["cardnumber"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $itemdepartment = $_POST["department"];


     // personid
    //  $query = "SELECT * FROM corpse WHERE corpseid=$personid";
    //  $run_query = mysqli_query($conn, $query);
    //  $row_patient = mysqli_fetch_assoc($run_query);
 
     $patientid =  $personid;

   
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
     
     $status = "NOT PAID";
     $comments = 'Payment Order for : '.$comments;
    $query = "INSERT INTO revenueorder(patientname,
                                        hospitalnumber,
                                        comments,
                                        personid,
                                        patientid,
                                        status,paid,paiditems,
                                        revenueordernumber,totalamount,department,itemorder,items,enteredby,entereddate,itemorderdate) VALUES(
                                    '$patientname',
                                    '$hospitalnumber',
                                    '$comments',
                                    $personid,$patientid,'$status',0,0,'$generatedcode',$totalamount,'$department','$list',$items,'$person','$entrydate','$entrydate')";
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
                                    entereddate) VALUES('$comments',$price,'$hospitalnumber',
                                    $personid,$patientid,'DEBIT','','$generatedcode',
                                    '','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
   

    echo $revenueid.",".$generatedcode;
}

if(isset($_POST["deleteDefaultPrescription"])){
    $itemid = $_POST["itemid"];
    $stockitemid = $_POST["stockitemid"];
    $id = $_POST["id"];
    $query = "DELETE FROM prescription WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    } else {
        echo "Default Prescription Deleted Successfully";
    }
    
}

//Get Payment by Revenue Order Number
if(isset($_POST["getPaymentByRevenueOrderNumber"])){
    $revenueordernumber = $_POST["revenuenumber"];
    $query = "SELECT * FROM payment WHERE paymentordernumber = '$revenueordernumber' ORDER BY id DESC";
    $runquery = mysqli_query($conn, $query);
    $paid = 0;
    if(mysqli_num_rows($runquery)>0){
       while($row = mysqli_fetch_array($runquery)){
        $paid = $paid + $row["paid"];
       }
        echo  $paid;
    } else {
        echo $paid;
    }
}

//Get Revenue Orders for A Patient By Card Number Generated by RCD
if(isset($_POST["getPatientRevenueOrders"])){
    $cardnumber = $_POST["cardnumber"];
    $query = "SELECT * FROM revenueorder WHERE comments LIKE '%$cardnumber%' AND revenueordernumber LIKE '%RCD%';";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "revenueordernumber" => $row["revenueordernumber"],
                "status" => $row["status"],
                "orderdate" => $row["itemorderdate"]
            );
      
            array_push($exam_arr["records"], $exam_item);

          
        }

            
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

//Get Invoice to print
if(isset($_POST["getPatientCardPaymentById"])){
    $id = $_POST["id"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
    //$cardnumber = $_POST["cardnumber"];
    // $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') Order By patientcard.id DESC";
    $query = "Select * From revenueorder,person WHERE revenueorder.personid=person.id AND revenueorder.id = '$id'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["patientname"],
                "personid" => $row["personid"],
                "hospitalnumber" => $row["hospitalnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["hospitalnumber"],
                "amount" => $row["totalamount"],
                "revenueordernumber" => $row["revenueordernumber"],
                "status" => $row["status"],
                "orderdate" => $row["itemorderdate"],
                "orderitems" => $row["itemorder"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }

            $_SESSION["patient_payment_invoice_details"] = $exam_arr;
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

//Get Lab Report to print
if(isset($_POST["getLabTestResultByLabTestNumber"])){
    $labtestnumber = $_POST["labtestnumber"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
    //$cardnumber = $_POST["cardnumber"];
    // $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') Order By patientcard.id DESC";
    $query = "Select * From laboratoryreport WHERE laboratoryreportnumber LIKE '%$labtestnumber%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "laboratoryreportnumber" => $row["laboratoryreportnumber"],
                "patientnumber" => $row["patientname"],
                "patientname" => $row["patientnumber"],
                "labreport" => $row["labreport"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }

            $_SESSION["patient_lab_report_details"] = $exam_arr;
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

if(isset($_POST["getLabTestResultByLabTestNumberPatient"])){
    $labtestnumber = $_POST["labtestnumber"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
    //$cardnumber = $_POST["cardnumber"];
    // $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') Order By patientcard.id DESC";
    $query = "Select * From laboratoryreport WHERE laboratoryreportnumber LIKE '%$labtestnumber%'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "laboratoryreportnumber" => $row["laboratoryreportnumber"],
                "patientnumber" => $row["patientname"],
                "patientname" => $row["patientnumber"],
                "labreport" => $row["labreport"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }

            // $_SESSION["patient_lab_report_details"] = $exam_arr;
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



if(isset($_POST["getPatientInvoices"])){
    $id = $_POST["id"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
    //$cardnumber = $_POST["cardnumber"];
    // $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') Order By patientcard.id DESC";
    $query = "Select * From revenueorder,person WHERE revenueorder.personid=person.id AND revenueorder.hospitalnumber = '$id'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["patientname"],
                "personid" => $row["personid"],
                "hospitalnumber" => $row["hospitalnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["hospitalnumber"],
                "amount" => $row["totalamount"],
                "revenueordernumber" => $row["revenueordernumber"],
                "status" => $row["status"],
                "paid" => $row["paid"],
                "orderdate" => $row["itemorderdate"],
                "orderitems" => $row["itemorder"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }

            $_SESSION["patient_payment_invoice_details"] = $exam_arr;
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



if(isset($_POST["getPatientAccountPaymentById"])){
    $id = $_POST["id"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
    //$cardnumber = $_POST["cardnumber"];
    // $query = "Select * From patientcard,person WHERE patientcard.personid=person.id AND (patientcard.person Like '%$searchformItem%' Or cardnumber Like '%$searchformItem%' Or patientnumber LIKE '%$searchformItem%') Order By patientcard.id DESC";
    $query = "Select * From revenueorder,accountentry WHERE revenueorder.revenueordernumber=accountentry.paymentorder AND revenueorder.id = '$id' AND accountentry.recieptnumber!=''";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "person" => $row["patientname"],
                "personid" => $row["personid"],
                "hospitalnumber" => $row["hospitalnumber"],
                "comments" => $row["comments"],
                "patientnumber" => $row["hospitalnumber"],
                "department" => $row["department"],
                "amount" => $row["totalamount"],
                "revenueordernumber" => $row["revenueordernumber"],
                "accountentrytype" => $row["accountentrytype"],
                "accountnumber" => $row["accountnumber"],
                "status" => $row["status"],
                "orderdate" => $row["itemorderdate"],
                "orderitems" => $row["itemorder"],
                "recieptnumber" => $row["recieptnumber"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"],
                "updateddate" => $row["updateddate"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }

            $_SESSION["patient_payment_reciept_details"] = $exam_arr;
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

//Prescription Order
if(isset($_POST["insertPrescription"])){
    
    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    $patientname = $_POST["patientname"];
    $patientid = $_POST["patientid"];
    $personid = $_POST["personid"];

    // personid
    $query = "SELECT * FROM patient WHERE personid=$personid";
    $run_query = mysqli_query($conn, $query);
    $row_patient = mysqli_fetch_assoc($run_query);

    $patientid =  $row_patient["id"];
    
    $comments = $_POST["cardnumber"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $cardnumber = $_POST["cardnumber"];
    // $itemdepartment = $_POST["department"];
    $revenueordernumber = $_POST["revenueordernumber"];
   
     //generate item number
    
     $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
     $query = "SELECT * FROM prescriptionorder ORDER BY id DESC LIMIT 1";
    
 
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

    
    
    $department = $_SESSION['department'];
    $query = "SELECT * FROM department WHERE department='$department' ORDER BY id DESC LIMIT 1";
    $run_query = mysqli_query($conn, $query);
    
    $rows = mysqli_fetch_assoc($run_query);
    $requestingdeptcode = $rows["code"];

    
     $generatedcode = "PRC/" . $requestingdeptcode . "/" . $month.$year . "/" . $str_num_rows; //. "/" . $genericname;
     
    //  $comments = 'Payment Order for : '.$comments;
    $query = "INSERT INTO prescriptionorder(prescriptionnumber,patientname,
                                        hospitalnumber,
                                        cardnumber,
                                        personid,
                                        patientid,price,
                                        revenueordernumber,department,prescription,enteredby,entereddate) VALUES(
                                    '$generatedcode',
                                    '$patientname',
                                    '$hospitalnumber',
                                    '$cardnumber',
                                    $personid,$patientid,$price,'$revenueordernumber','$department','$list','$person','$entrydate')";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: ".mysqli_error($conn));
    }
    
    echo $generatedcode ."- Created Successfully With Revenue Order Number - " . $revenueordernumber;
}

if(isset($_POST["getNextPrescription"])){
     //generate item number
    
     $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
     $query = "SELECT * FROM prescriptionorder ORDER BY id DESC LIMIT 1";
    
 
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
     echo $str_num_rows;
}

if(isset($_POST["getRevenueOrder"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM revenueorder Where revenueordernumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    "id" => $row["id"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "patientname" => $row["patientname"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "comments" => $row["comments"],
                    "itemorderdate" => $row["itemorderdate"],
                    "totalamount" => $row["totalamount"],
                    "items" => $row["items"],
                    "paid" => $row["paid"],
                    "paiditems" => $row["paiditems"],
                    "updateddate" => $row["updateddate"],
                    "enteredby" => $row["enteredby"]
                    
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

if(isset($_POST["getAccountEntries"])){
    $searchItem = $_POST["searchItem"];
    $start_date = $_POST["start_date"];
    $end_date = $_POST["end_date"];
    $ordernumber = $_POST["ordernumber"];
   
    $query = "SELECT * FROM accountentry WHERE (paymentorder LIKE '%$ordernumber%' AND (item LIKE '%$searchItem%' OR enteredby LIKE '%$searchItem%')) AND (entereddate>='$start_date' AND entereddate<='$end_date') Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    "id" => $row["id"],
                    "item" => $row["item"],
                    "department" => $row["department"],
                    "accountnumber" => $row["accountnumber"],
                    "amount" => $row["amount"],
                    "entrytype" => $row["accountentrytype"],
                    "recieptnumber" => $row["recieptnumber"],
                    "paymentorder" => $row["paymentorder"],
                    "paymenttype" => $row["paymenttype"],
                    "enteredby" => $row["enteredby"],
                    "entereddate" => $row["entereddate"]
                    
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

if(isset($_POST["getAccountSummary"])){
    $searchItem = $_POST["searchItem"];
    
   
    $query = "SELECT DISTINCT(accountnumber),item,department,SUM(amount) AS amount FROM accountentry WHERE item LIKE '%$searchItem%' GROUP BY item";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    
                    "item" => $row["item"],
                    "department" => $row["department"],
                    "accountnumber" => $row["accountnumber"],
                    "amount" => $row["amount"]
                    
                    
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

if(isset($_POST["getPayments"])){
    $searchItem = $_POST["searchItem"];
    
   
    $query = "SELECT * FROM payment WHERE paymentordernumber LIKE '%$searchItem%' OR person LIKE '%$searchItem%'";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    "id" => $row["id"],
                    "paymentordernumber" => $row["paymentordernumber"],
                    "amount" => $row["amount"],
                    "paid" => $row["paid"],
                    "balance" => $row["balance"],
                    "paymentdate" => $row["paymentdate"],
                    "person" => $row["person"],
                    "paymenttype" => $row["paymenttype"],
                    "enteredby" => $row["enteredby"]
                    
                    
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


if(isset($_POST["getRevenueOrderByHospitalNumber"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM revenueorder Where hospitalnumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    "id" => $row["id"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "patientname" => $row["patientname"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "comments" => $row["comments"],
                    "itemorderdate" => $row["itemorderdate"],
                    "totalamount" => $row["totalamount"],
                    "items" => $row["items"],
                    "itemorder" => $row["itemorder"],
                    "paid" => $row["paid"],
                    "status" => $row["status"],
                    "paiditems" => $row["paiditems"],
                    "updateddate" => $row["updateddate"],
                    "enteredby" => $row["enteredby"]
                    
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

if(isset($_POST["getOldFinanceRecordByHospitalNumber"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM oldcorpsefee Where corpsenumber LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            
            $exam_item=array(
                    "id" => $row["id"],
                    "dateofadmission" => $row["dateofadmission"],
                    "tallynumber" => $row["tallynumber"],
                    "oldcorpsenumber" => $row["oldcorpsenumber"],
                    "totalbill" => $row["totalbill"],
                    "embalmentfee" => $row["embalmentfee"],
                    "admissionfee" => $row["admissionfee"],
                    "maintenancefee" => $row["maintenancefee"],
                    "amountpaid" => $row["amountpaid"],
                    
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

if(isset($_POST["getRevenueOrderDept"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM revenueorder Where revenueordernumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){


            $revenuenumber = $row["revenueordernumber"];
            $query = "SELECT * FROM prescriptionorder Where revenueordernumber = '$revenuenumber'";
            $runquery1 = mysqli_query($conn, $query);
            if(mysqli_num_rows($runquery1)==0){

                $query = "SELECT * FROM laboratoryorder Where revenueordernumber = '$revenuenumber'";
                $runquery2 = mysqli_query($conn, $query);
                if(mysqli_num_rows($runquery2)==0){


                    $exam_item=array(
                        "id" => $row["id"],
                        "revenueordernumber" => $row["revenueordernumber"],
                        "patientname" => $row["patientname"],
                        "hospitalnumber" => $row["hospitalnumber"],
                        "comments" => $row["comments"],
                        "itemorderdate" => $row["itemorderdate"],
                        "totalamount" => $row["totalamount"],
                        "items" => $row["items"],
                        "paid" => $row["paid"],
                        "paiditems" => $row["paiditems"],
                        "updateddate" => $row["updateddate"],
                        "enteredby" => $row["enteredby"]
                        
                    );
          
                    array_push($exam_arr["records"], $exam_item);
                  

                }

              

            }


            
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

if(isset($_POST["getPrescriptionRevenueOrderDept"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM revenueorder Where revenueordernumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){


            $revenuenumber = $row["revenueordernumber"];
            $query = "SELECT * FROM prescriptionorder Where revenueordernumber = '$revenuenumber'";
            $runquery1 = mysqli_query($conn, $query);
            if(mysqli_num_rows($runquery1)>0){



                    $exam_item=array(
                        "id" => $row["id"],
                        "revenueordernumber" => $row["revenueordernumber"],
                        "patientname" => $row["patientname"],
                        "hospitalnumber" => $row["hospitalnumber"],
                        "comments" => $row["comments"],
                        "itemorderdate" => $row["itemorderdate"],
                        "totalamount" => $row["totalamount"],
                        "items" => $row["items"],
                        "paid" => $row["paid"],
                        "paiditems" => $row["paiditems"],
                        "updateddate" => $row["updateddate"],
                        "enteredby" => $row["enteredby"]
                        
                    );
          
                    array_push($exam_arr["records"], $exam_item);
                  

                

              

            }


            
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


if(isset($_POST["getLaboratoryRevenueOrderDept"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM revenueorder Where revenueordernumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){


            $revenuenumber = $row["revenueordernumber"];
            $query = "SELECT * FROM laboratoryorder Where revenueordernumber LIKE '%$revenuenumber%'";
            $runquery1 = mysqli_query($conn, $query);
            if(mysqli_num_rows($runquery1)>0){



                    $exam_item=array(
                        "id" => $row["id"],
                        "revenueordernumber" => $row["revenueordernumber"],
                        "patientname" => $row["patientname"],
                        "hospitalnumber" => $row["hospitalnumber"],
                        "comments" => $row["comments"],
                        "itemorderdate" => $row["itemorderdate"],
                        "totalamount" => $row["totalamount"],
                        "items" => $row["items"],
                        "paid" => $row["paid"],
                        "paiditems" => $row["paiditems"],
                        "updateddate" => $row["updateddate"],
                        "enteredby" => $row["enteredby"]
                        
                    );
          
                    array_push($exam_arr["records"], $exam_item);
                  

                

              

            }


            
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

if(isset($_POST["getLaboratoryOrderDept"])){
    $searchItem = $_POST["searchItem"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $query = "SELECT * FROM laboratoryorder,revenueorder WHERE laboratoryorder.revenueordernumber=revenueorder.revenueordernumber AND laboratoryorder.hospitalnumber='$hospitalnumber' AND (laboratoryorder.revenueordernumber LIKE '%$searchItem%' Or laboratoryorder.enteredby LIKE '%$searchItem%') Order By laboratoryorder.id DESC";
   
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){




                    $exam_item=array(
                        "id" => $row["id"],
                        "revenueordernumber" => $row["revenueordernumber"],
                        "patientname" => $row["patientname"],
                        "hospitalnumber" => $row["hospitalnumber"],
                        "comments" => $row["comments"],
                        "itemorderdate" => $row["itemorderdate"],
                        "totalamount" => $row["totalamount"],
                        "items" => $row["items"],
                        "paid" => $row["paid"],
                        "paiditems" => $row["paiditems"],
                        "updateddate" => $row["updateddate"],
                        "enteredby" => $row["enteredby"]
                        
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

if(isset($_POST["getLaboratoryOrderTest"])){
    $searchItem = $_POST["searchItem"];
    $laboratoryordernumber = $_POST["laboratoryordernumber"];
    $query = "SELECT * FROM laboratoryorderitem WHERE laboratoryordernumber='$laboratoryordernumber' AND (laboratorytestitem LIKE '%$searchItem%' Or sample LIKE '%$searchItem%') Order By id DESC";
   
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();
        $exam_arr["reports"]=array();

        while( $row = mysqli_fetch_array($runquery)){




                    $exam_item=array(
                        "id" => $row["id"],
                        "laboratoryordernumber" => $row["laboratoryordernumber"],
                        "laboratorytestitem" => $row["laboratorytestitem"],
                        "sample" => $row["sample"],
                        "specimen" => $row["specimen"],
                        "specialinstruction" => $row["specialinstruction"],
                        "enteredby" => $row["enteredby"],
                        "entereddate" => $row["entereddate"],
                        "patientnumber" => $row["patientnumber"]
                        
                        
                    );
          
                    array_push($exam_arr["records"], $exam_item);
                  
            
            
        }

        $query = "SELECT * FROM laboratoryreport WHERE laboratoryreportnumber LIKE '%$laboratoryordernumber%'";
   
        $runquery = mysqli_query($conn, $query);
    
        if(mysqli_num_rows($runquery)>0){

            while( $row = mysqli_fetch_array($runquery)){




                $exam_item=array(
                    "id" => $row["id"],
                    "laboratoryreportnumber" => $row["laboratoryreportnumber"],
                    "labreport" => $row["labreport"],
                    "entereddate" => $row["entereddate"],
                    "patientnumber" => $row["patientnumber"]
                    
                    
                );
      
                array_push($exam_arr["reports"], $exam_item);
              

            }


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


if(isset($_POST["getPrescriptionOrder"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM prescriptionorder Where prescriptionnumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                    "id" => $row["id"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "patientname" => $row["patientname"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "prescription" => $row["prescription"],
                    "prescriptionnumber" => $row["prescriptionnumber"],
                    "totalamount" => $row["price"],
                    "patientid" => $row["patientid"],
                    "personid" => $row["personid"],
                    "updateddate" => $row["updateddate"],
                    "enteredby" => $row["enteredby"],
                    "entereddate" => $row["entereddate"]
                    
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

if(isset($_POST["getLaboratoryOrder"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT * FROM laboratoryorder Where laboratoryordernumber LIKE '%$searchItem%' Or enteredby LIKE '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                    "id" => $row["id"],
                    "revenueordernumber" => $row["revenueordernumber"],
                    "patientname" => $row["patientname"],
                    "hospitalnumber" => $row["hospitalnumber"],
                    "prescription" => $row["laboratoryorder"],
                    "prescriptionnumber" => $row["laboratoryordernumber"],
                    "totalamount" => $row["price"],
                    "patientid" => $row["patientid"],
                    "personid" => $row["personid"],
                    "updateddate" => $row["updateddate"],
                    "enteredby" => $row["enteredby"],
                    "entereddate" => $row["entereddate"]
                    
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

if(isset($_POST["InsertLaboratorySampleCollection"])){
    $revenueordernumber = $_POST["revenueordernumber"];
    // $revenueorderlist = $_POST["revenueorderlist"];
    $person = $_POST["person"];
    $personid = $_POST["personid"];
    $patientid = $_POST["patientid"];

    $hospitalnumber = $_POST["hospitalnumber"];
    $itemname = $_POST["itemname"];
    $specimen = $_POST["specimen"];
    $sample = $_POST["sample"];

    $laboratoryordernumber = $_POST["laboratoryordernumber"];
    $laboratoryorderid = $_POST["laboratoryorderid"];

    $specialinstruction = $_POST["specialinstruction"];
    $entrydate = date('Y-m-d H:i:s');
    $enteredby = $_SESSION['person'];
    
    $query = "INSERT INTO laboratoryorderitem(laboratoryordernumber,
                                                laboratoryorderid,
                                                laboratorytestitem,
                                                patientid,
                                                personid,
                                                patientnumber,
                                                person,
                                                sample,
                                                specimen,
                                                enteredby,
                                                entereddate,
                                                specialinstruction) 
                                            VALUES('$laboratoryordernumber',
                                                    $laboratoryorderid,
                                                    '$itemname',
                                                    $patientid,
                                                    $personid,
                                                    '$hospitalnumber',
                                                    '$person',
                                                    '$sample',
                                                    '$specimen',
                                                    '$enteredby',
                                                    '$entrydate',
                                                    '$specialinstruction')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Sample Collection Entry Recorded";

}

if(isset($_POST["UpdateLaboratorySampleOrder"])){
    $revenueid = $_POST["revenueid"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $revenueorderlist = $_POST["revenueorderlist"];
    $person = $_POST["person"];
    $personid = $_POST["personid"];
    $patientid = $_POST["patientid"];

    $status = "Updated";
    $query = "SELECT id,laboratoryordernumber,patientname FROM laboratoryorder WHERE revenueordernumber='$revenueordernumber'";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        $status = "Error: ".mysqli_error($conn);
    }
    $row = mysqli_fetch_assoc($run_query);
    $laboratoryordernumber = $row["laboratoryordernumber"];
    $laboratoryorderid = $row["id"];
    $patientname = $row["patientname"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
    //Make updates
    $query = "UPDATE laboratoryorder SET laboratoryorder='$revenueorderlist',updateddate='$person, $entrydate' WHERE revenueordernumber='$revenueordernumber'";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        $status = "Error: ".mysqli_error($conn);
    }


    $query = "UPDATE revenueorder SET itemorder='$revenueorderlist' WHERE revenueordernumber='$revenueordernumber'";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        $status = "Error: ".mysqli_error($conn);
    }

    $product_arr=array(
        "laboratoryorderid" => $laboratoryorderid,
        "laboratoryordernumber" => $row["laboratoryordernumber"],
        "patientname" => $patientname,
        "status" => $status
    );

   
  // set response code - 200 OK
  http_response_code(200);

  // make it json format
  echo json_encode($product_arr);


}

if(isset($_POST["getLaboratoryTestById"])){
    $id = $_POST["id"];
    $query = "SELECT * FROM laboratoryorderitem Where id=$id";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $labtestname = $row["laboratorytestitem"];
    $item = explode(".", $labtestname);
    $labtestname = $item[0];

    $query = "SELECT * FROM laboratorytestcomponent WHERE laboratorytest='$labtestname'";
    $runquery = mysqli_query($conn, $query);

    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                    "id" => $row["id"],
                    "component" => $row["component"],
                    "unit" => $row["unit"],
                    "lowerlimit" => $row["lowerlimit"],
                    "upperlimit" => $row["upperlimit"],
                    "details" => $row["details"],
                    "note" => $row["note"],
                    "laboratorytest" => $row["laboratorytest"]
                    
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


if(isset($_POST["getRevenueOrderById"])){
    $id = $_POST["id"];
   
    $query = "SELECT * FROM revenueorder Where id=$id";
    $runquery = mysqli_query($conn, $query);
   
    $row = mysqli_fetch_assoc($runquery);
       
     
    $product_arr=array(
                "id" => $row["id"],
                "itemorder" => $row["itemorder"],
                "revenueordernumber" => $row["revenueordernumber"],
                "paid" => $row["paid"],
                "status" => $row["status"]
            );
      
           
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}

if(isset($_POST["getPrescriptionOrderById"])){
    $id = $_POST["id"];
   
    $query = "SELECT * FROM prescriptionorder Where id=$id";
    $runquery = mysqli_query($conn, $query);
   
    $row = mysqli_fetch_assoc($runquery);
       
     
    $product_arr=array(
                "id" => $row["id"],
                "prescription" => $row["prescription"],
                "prescriptionnumber" => $row["prescriptionnumber"],
                "patientid" => $row["patientid"],
                "patientname" => $row["patientname"],
                "revenueordernumber" => $row["revenueordernumber"]
            );
      
           
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}

if(isset($_POST["getLaboratoryOrderById"])){
    $id = $_POST["id"];
   
    $query = "SELECT * FROM laboratoryorder Where id=$id";
    $runquery = mysqli_query($conn, $query);
   
    $row = mysqli_fetch_assoc($runquery);
       
     
    $product_arr=array(
                "id" => $row["id"],
                "prescription" => $row["laboratoryorder"],
                "prescriptionnumber" => $row["laboratoryordernumber"],
                "patientid" => $row["patientid"],
                "patientname" => $row["patientname"],
                "revenueordernumber" => $row["revenueordernumber"]
            );
      
           
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}


if(isset($_POST["getPrescriptionOrderByPatientNumber"])){
    $id = $_POST["patientnumber"];
   
    $query = "SELECT revenueorder.itemorder,prescriptionorder.* FROM revenueorder,prescriptionorder Where revenueorder.revenueordernumber=prescriptionorder.revenueordernumber AND prescriptionorder.hospitalnumber='$id'";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "prescription" => $row["prescription"],
                "revenueorder" => $row["itemorder"],
                "prescriptionnumber" => $row["prescriptionnumber"],
                "patientid" => $row["patientid"],
                "patientname" => $row["patientname"],
                "revenueordernumber" => $row["revenueordernumber"],
                "entereddate" => $row["entereddate"]
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

if(isset($_POST["getLaboratoryOrderByPatientNumber"])){
    $id = $_POST["patientnumber"];
   
    $query = "SELECT revenueorder.itemorder,laboratoryorder.* FROM revenueorder,laboratoryorder Where revenueorder.revenueordernumber=laboratoryorder.revenueordernumber AND laboratoryorder.hospitalnumber='$id'";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "prescription" => $row["laboratoryorder"],
                "revenueorder" => $row["itemorder"],
                "prescriptionnumber" => $row["laboratoryordernumber"],
                "patientid" => $row["patientid"],
                "patientname" => $row["patientname"],
                "revenueordernumber" => $row["revenueordernumber"],
                "entereddate" => $row["entereddate"]
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


if(isset($_POST["DeleteRevenueOrderById"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM revenueorder WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["DeletePrescriptionOrderById"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM prescriptionorder WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["DeleteLaboratoryOrderById"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM laboratoryorder WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Laboratory Order
if(isset($_POST["insertLaboratoryOrder"])){
    
    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    $patientname = $_POST["patientname"];
    $patientid = $_POST["patientid"];
    $personid = $_POST["personid"];
    $comments = $_POST["cardnumber"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $cardnumber = $_POST["cardnumber"];
    // $itemdepartment = $_POST["department"];
    $revenueordernumber = $_POST["revenueordernumber"];
   
     //generate item number
    
     $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
     $query = "SELECT * FROM laboratoryorder ORDER BY id DESC LIMIT 1";
    
 
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

    
    
    $department = $_SESSION['department'];
    $query = "SELECT * FROM department WHERE department='$department' ORDER BY id DESC LIMIT 1";
    $run_query = mysqli_query($conn, $query);
    
    $rows = mysqli_fetch_assoc($run_query);
    $requestingdeptcode = $rows["code"];

    
     $generatedcode = "LBD/" . $requestingdeptcode . "/" . $month.$year . "/" . $str_num_rows; //. "/" . $genericname;
     
    //  $comments = 'Payment Order for : '.$comments;
    $query = "INSERT INTO laboratoryorder(laboratoryordernumber,patientname,
                                        hospitalnumber,
                                        cardnumber,
                                        personid,
                                        patientid,price,
                                        revenueordernumber,department,laboratoryorder,enteredby,entereddate) VALUES(
                                    '$generatedcode',
                                    '$patientname',
                                    '$hospitalnumber',
                                    '$cardnumber',
                                    $personid,$patientid,$price,'$revenueordernumber','$department','$list','$person','$entrydate')";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: ".mysqli_error($conn));
    }
    
    echo $generatedcode ." Created Successfully With Laboratory Order Number - " . $revenueordernumber;
}


if(isset($_POST["updateLaboratoryOrder"])){
    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    $revenuelist = $_POST["revenuelist"];
    $patientname = $_POST["patientname"];
    $patientid = $_POST["patientid"];
    $personid = $_POST["personid"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $id = $_POST["id"];
    $prescriptionnumber = $_POST["prescriptionnumber"];
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
   
    $query = "UPDATE laboratoryorder SET price=$price,
                                            patientname='$patientname',
                                            patientid=$patientid,
                                            personid=$personid,
                                            hospitalnumber='$hospitalnumber',
                                            laboratoryorder='$list',updateddate='$person $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: <br>Laboratory Request<br>".mysqli_error($conn));
    }
    $query = "UPDATE revenueorder SET totalamount=$price,
                                            itemorder='$revenuelist',
                                            patientname='$patientname',
                                            patientid=$patientid,
                                            personid=$personid,
                                            hospitalnumber='$hospitalnumber',
                                            updateddate='$person $entrydate' WHERE revenueordernumber='$revenueordernumber'";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: <br>Revenue<br>".mysqli_error($conn));
    }
    echo $prescriptionnumber ." Updated Successfully";
}


if(isset($_POST["getLaboratoryOrderByPatientNumber"])){
    $id = $_POST["patientnumber"];
   
    $query = "SELECT revenueorder.itemorder,laboratoryorder.* FROM revenueorder,laboratoryorder Where revenueorder.revenueordernumber=laboratoryorder.revenueordernumber AND laboratoryorder.hospitalnumber='$id'";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "prescription" => $row["laboratoryorder"],
                "revenueorder" => $row["itemorder"],
                "prescriptionnumber" => $row["laboratoryordernumber"],
                "patientid" => $row["patientid"],
                "patientname" => $row["patientname"],
                "revenueordernumber" => $row["revenueordernumber"],
                "entereddate" => $row["entereddate"]
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


if(isset($_POST["updateRevenueOrder"])){
    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    
    $id = $_POST["id"];
    $revenueordernumber = $_POST["revenueordernumber"];
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
   
    $query = "UPDATE revenueorder SET totalamount=$price,itemorder='$list',items=$items,updateddate='$person $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: ".mysqli_error($conn));
    }
    echo $revenueordernumber ." Updated Successful";
}

if(isset($_POST["updatePrescription"])){
    $price = $_POST["price"];
    $items = $_POST["items"];
    $list = $_POST["list"];
    $revenuelist = $_POST["revenuelist"];
    $patientname = $_POST["patientname"];
    $patientid = $_POST["patientid"];
    $personid = $_POST["personid"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $hospitalnumber = $_POST["hospitalnumber"];
    $id = $_POST["id"];
    $prescriptionnumber = $_POST["prescriptionnumber"];
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
   
    $query = "UPDATE prescriptionorder SET price=$price,
                                            patientname='$patientname',
                                            patientid=$patientid,
                                            personid=$personid,
                                            hospitalnumber='$hospitalnumber',
                                            prescription='$list',updateddate='$person $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: <br>Prescription<br>".mysqli_error($conn));
    }
    $query = "UPDATE revenueorder SET totalamount=$price,
                                            itemorder='$revenuelist',
                                            patientname='$patientname',
                                            patientid=$patientid,
                                            personid=$personid,
                                            hospitalnumber='$hospitalnumber',
                                            updateddate='$person $entrydate' WHERE revenueordernumber='$revenueordernumber'";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
            die("Error: <br>Revenue<br>".mysqli_error($conn));
    }
    echo $prescriptionnumber ." Updated Successfully";
}

if(isset($_POST["updatePayment"])){
    $list = $_POST["list"];
    $balance = $_POST["balance"];
    $paiditems = $_POST["paiditems"];
    $paid = $_POST["paid"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $id = $_POST["id"];
    $price = $_POST["price"];
    $items = $_POST["items"];
    $paymenttype = $_POST['paymenttype'];
    
    $query = "UPDATE revenueorder SET itemorder='$list',paiditems=$paiditems,paid=$paid,status='PAID' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    $query = "SELECT * FROM revenueorder Where id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    $row = mysqli_fetch_assoc($runquery);
    $patientname = $row['patientname'];

    $comments = "PAID: " . $row['comments'];
    $hospitalnumber = $row['hospitalnumber'];
    $patientid = $row['patientid'];
    $personid = $row['personid'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "SELECT * FROM payment ORDER BY id DESC LIMIT 1";
 
 
     $run_query = mysqli_query($conn, $query);
     if(!$run_query){
         die("Error: ".mysqli_error($conn));
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

   
    $year = date('Y');
    $month = date('m');
    $recieptnumber = "RPT/".$month.$year."/".$str_num_rows;

    $query = "SELECT * FROM payment WHERE paymentorderid=$id AND amount=$price AND paid=$paid AND balance=$balance AND paymentordernumber='$revenueordernumber' AND enteredby='$person'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn).$query);
    }
    $count = mysqli_num_rows($runquery);
    if($count==0){

        $query = "INSERT INTO payment(paymentorderid,paymentordernumber,
                                        personid,patientid,amount,
                                        paid,balance,paymentdate,
                                        paymenttype,person,enteredby,
                                        entereddate) VALUES($id,'$revenueordernumber',
                                        $personid,$patientid,$price,$paid,$balance,'$entrydate',
                                        '$paymenttype','$patientname','$person','$entrydate')";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
                die("Error: ".mysqli_error($conn).$query);
        }
        echo "Payment Updated ";
    }   
    // check if first payment has been made
    $query = "SELECT * FROM accountentry WHERE paymentorder='$revenueordernumber' AND accountentrytype='DEBIT' AND amount>0";
    $runquery = mysqli_query($conn, $query);
    $count = mysqli_num_rows($runquery);
    if($count==0){
        $query = "INSERT INTO accountentry(item,amount,accountnumber,
            personid,patientid,
            accountentrytype,recieptnumber,paymentorder,
            paymenttype,enteredby,
            entereddate) VALUES('$comments',$paid,'$hospitalnumber',
            $personid,$patientid,'DEBIT','$recieptnumber','$revenueordernumber',
            '$paymenttype','$person','$entrydate')";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
                die("Error: ".mysqli_error($conn));
        }
        echo "Account Updated";
    } else {
        $query = "UPDATE accountentry SET amount = $paid WHERE paymentorder='$revenueordernumber' AND accountentrytype='DEBIT' AND amount>0";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
                die("Error: ".mysqli_error($conn));
        }
        echo "Account Updated";
    }
    

    
    
}


if(isset($_POST["updatePaymentFromDept"])){
    $list = $_POST["list"];
    $balance = $_POST["balance"];
    $paiditems = $_POST["paiditems"];
    $paid = $_POST["paid"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $id = $_POST["id"];
    $price = $_POST["price"];
    $items = $_POST["items"];
    $paymenttype = $_POST['paymenttype'];
    
    $query = "UPDATE revenueorder SET itemorder='$list',status='PAID,DISPENSED' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    $query = "SELECT * FROM revenueorder Where id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    $row = mysqli_fetch_assoc($runquery);
    $patientname = $row['patientname'];
    $comments = "DISPENSED: " . $row['comments'];
    $hospitalnumber = $row['hospitalnumber'];
    $patientid = $row['patientid'];
    $personid = $row['personid'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "SELECT * FROM payment ORDER BY id DESC LIMIT 1";
 
 
     $run_query = mysqli_query($conn, $query);
     if(!$run_query){
         die("Error: ".mysqli_error($conn));
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

   
    $year = date('Y');
    $month = date('m');
    $recieptnumber = "RPT/".$month.$year."/".$str_num_rows;



    $query = "INSERT INTO payment(paymentorderid,paymentordernumber,
                                    personid,patientid,amount,
                                    paid,balance,paymentdate,
                                    paymenttype,person,enteredby,
                                    entereddate) VALUES($id,'$revenueordernumber',
                                    $personid,$patientid,$price,$paid,$balance,'$entrydate',
                                    '$paymenttype','$patientname','$person','$entrydate')";
    // $runquery = mysqli_query($conn, $query);
    // if(!$runquery){
    //         die("Error: ".mysqli_error($conn));
    // }
    echo "Payment Updated ";

    // check if first payment has been made
    $query = "SELECT * FROM accountentry WHERE paymentorder='$revenueordernumber' AND accountentrytype='DEBIT' AND amount>0";
    $runquery = mysqli_query($conn, $query);
    $count = mysqli_num_rows($runquery);
    if($count==0){
        $query = "INSERT INTO accountentry(item,amount,accountnumber,
            personid,patientid,
            accountentrytype,recieptnumber,paymentorder,
            paymenttype,enteredby,
            entereddate) VALUES('$comments',$paid,'$hospitalnumber',
            $personid,$patientid,'DEBIT','$recieptnumber','$revenueordernumber',
            '$paymenttype','$person','$entrydate')";
        // $runquery = mysqli_query($conn, $query);
        // if(!$runquery){
        //         die("Error: ".mysqli_error($conn));
        // }
        echo "Account Updated";
    } else {
        $query = "UPDATE accountentry SET amount = $paid WHERE paymentorder='$revenueordernumber' AND accountentrytype='DEBIT' AND amount>0";
        // $runquery = mysqli_query($conn, $query);
        // if(!$runquery){
        //         die("Error: ".mysqli_error($conn));
        // }
        echo "Account Updated";
    }
    

    
    
}

if(isset($_POST["updatePayment_Deposit"])){
    $list = $_POST["list"];
    $balance = $_POST["balance"];
    $paiditems = $_POST["paiditems"];
    $paid = $_POST["paid"];
    $totalpaid = $_POST["totalpaid"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $id = $_POST["id"];
    $price = $_POST["price"];
    $items = $_POST["items"];
    $paymenttype = $_POST['paymenttype'];
    $status = $_POST["status"];
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE revenueorder SET paid=$totalpaid,status='$status',updateddate='$person on $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    $query = "SELECT * FROM revenueorder Where id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    $row = mysqli_fetch_assoc($runquery);
    $patientname = $row['patientname'];

    $comments = $status.": " . $row['comments'];
    $hospitalnumber = $row['hospitalnumber'];
    $patientid = $row['patientid'];
    $personid = $row['personid'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "SELECT * FROM payment ORDER BY id DESC LIMIT 1";
 
 
     $run_query = mysqli_query($conn, $query);
     if(!$run_query){
         die("Error: ".mysqli_error($conn));
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

   
    $year = date('Y');
    $month = date('m');
    $recieptnumber = "RPT/".$month.$year."/".$str_num_rows;



    $query = "INSERT INTO payment(paymentorderid,paymentordernumber,
                                    personid,patientid,amount,
                                    paid,totalpaid,balance,paymentdate,list,
                                    paymenttype,person,enteredby,
                                    entereddate,recieptnumber) VALUES($id,'$revenueordernumber',
                                    $personid,$patientid,$price,$paid,$totalpaid,$balance,'$entrydate','$list',
                                    '$paymenttype','$patientname','$person','$entrydate','$recieptnumber')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
            die("Error: ".mysqli_error($conn));
    }
    echo "Payment Updated ";

    // check if first payment has been made
    $query = "SELECT * FROM accountentry WHERE paymentorder='$revenueordernumber' AND accountentrytype='DEBIT' AND amount>0";
    $runquery = mysqli_query($conn, $query);
    $count = mysqli_num_rows($runquery);
    if($count==0){
        $query = "INSERT INTO accountentry(item,amount,accountnumber,
            personid,patientid,
            accountentrytype,recieptnumber,paymentorder,
            paymenttype,enteredby,
            entereddate) VALUES('$comments',$paid,'$hospitalnumber',
            $personid,$patientid,'DEBIT','$recieptnumber','$revenueordernumber',
            '$paymenttype','$person','$entrydate')";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
                die("Error: ".mysqli_error($conn));
        }
        echo "Account Updated";
    } else {
        $query = "UPDATE accountentry SET amount = $totalpaid,recieptnumber='$recieptnumber',updateddate='$person on $entrydate' WHERE paymentorder='$revenueordernumber' AND accountentrytype='DEBIT' AND amount>0";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
                die("Error: ".mysqli_error($conn));
        }
        echo "Account Updated";
    }
    

    
    
}


if(isset($_POST["updateSecondaryItem"])){
    $itemid = $_POST["itemid"];
    $itemname = $_POST["itemname"];
    $itemquantityprice = $_POST["itemquantityprice"];
    $itemquantity = $_POST["itemquantity"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $unittype = $_POST["unittype"];
    $unit = $_POST["unit"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
    $stocklistitemid = $_POST["stocklistitemid"];
    $paymenttype = $_POST["paymenttype"];


    //Get Revenue Order Info
    $query = "SELECT * FROM revenueorder WHERE revenueordernumber='$revenueordernumber'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $personid = $row["personid"];
    $patientid = $row["patientid"];



    //Get stockitemlist Info
    $query = "SELECT * FROM stockitemlist WHERE id=$stocklistitemid";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $stockitemid = $row["id"];
    $realitemid = $row["itemid"];
    $piecesused = $row["piecesused"];
    $volumeused = $row["volumeused"];
    $weightused = $row["weightused"];
    $lengthused = $row["lengthused"];

    if(empty($piecesused)){
        $piecesused = 0;
    }
    if(empty($volumeused)){
        $volumeused = 0;
    }
    if(empty($weightused)){
        $weightused = 0;
    }
    if(empty($lengthused)){
        $lengthused = 0;
    }



    $realitemid = $row["itemid"];
    $queryitem = "SELECT * FROM item WHERE id=$realitemid";
    $runqueryitem = mysqli_query($conn, $queryitem);
    $rowitem = mysqli_fetch_assoc($runqueryitem);
    $strengthvalue = $rowitem["strengthvalue"];
    $involume = $rowitem["involume"];
    $itemweight = $rowitem["itemweight"];

    $department = $rowitem["department"];
    $departmentitemgroup = $rowitem["departmentitemgroup"];
    $itemgroup = $rowitem["usagegroup"];
    $itemclass = $rowitem["usageclass"];
    $itemsubclass = $rowitem["usagesubclass"];
    


    $totalpieces = $row["totalpieces"];
    $totalstrength = $row["totalstrength"];
    $totalliquidstrength = $row["totalliquidstrength"];
    $totallengthstrength = $row["totallengthstrength"];
    $totalstrengthmg = $row["totalstrengthmg"];
    $totalliquidstrengthml = $row["totalliquidstrengthml"];
    $totallengthstrengthcm = $row["totallengthstrengthcm"];

    $piecesleft = $row["piecesleft"];
    $volumeleft = $row["volumeleft"];
    $weightleft = $row["weightleft"];
    $lengthleft = $row["lengthleft"];
    $volumeleftml = $row["volumeleftml"];
    $weightleftmg = $row["weightleftmg"];
    $lengthleftcm = $row["lengthleftcm"];



    
    if(empty($piecesleft)){
        $piecesleft = $totalpieces;
    }
    if($piecesused==0){
        $piecesleft = $totalpieces;
    }
    if(empty($volumeleft)){
        $volumeleft = $totalliquidstrength;
    }
    
    if(empty($weightleft)){
        $weightleft = $totalstrength;
    }
    if(empty($lengthleft)){
        $lengthleft = $totallengthstrength;
    }

    if(empty($volumeleftml)){
        $volumeleftml = $totalliquidstrengthml;
    }
    if( $volumeused == 0 ){
        $volumeleft = $totalliquidstrength;
        $volumeleftml = $totalliquidstrengthml;
    }
    if(empty($weightleftmg)){
        $weightleftmg = $totalstrengthmg;
    }
    if($weightused==0){
        $weightleftmg = $totalstrengthmg;
        $weightleft = $totalstrength;
    }
    if(empty($lengthleftcm)){
        $lengthleftcm = $totallengthstrengthcm;
    }
    if($lengthused==0){
        $lengthleftcm = $totallengthstrengthcm;
        $lengthleft = $totallengthstrength;
    }
    
    $unitweight = $totalstrength / $totalpieces;
    $unitvolume = $totalliquidstrength / $totalpieces;
    $unitlength = $totallengthstrength / $totalpieces;

    $unitweightmg = $totalstrengthmg / $totalpieces;
    $unitvolumeml = $totalliquidstrengthml / $totalpieces;
    $unitlengthcm = $totallengthstrengthcm / $totalpieces;

    $pieces = 0;
    $volume = 0;
    $weight = 0;
    $length = 0;
    $quantity = $itemquantity;
    if($unittype=="pieces"){

        

        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


        
        

        $pieces = $piecesused + $quantity;
        $volume = $pieces * $unitvolume;
        $weight = $pieces * $unitweight;
        $length = $pieces * $unitlength;
    } else if($unittype=="weight"){

        $itemweight = strtoupper($itemweight);
        if($itemweight=="G"){
            $quantity = $quantity / $unitweight;
        } else {
            $quantity = $quantity / $unitweightmg;
        }

        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


        $weight = $weightused + $quantity;
        $pieces =  $totalstrength / $weight;
        $volume = $pieces * $unitvolume;
        $length = $pieces * $unitlength;
    } else if($unittype=="volume"){

        $involume = strtoupper($involume);
        if($involume=="L"){
            $quantity = $quantity / $unitvolume;
        } else {
            $quantity = $quantity / $unitvolumeml;
        }


        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;



        $volume = $volumeused + $quantity;
        $pieces =  $totalliquidstrength / $volume;
        $weight = $pieces * $unitweight;
        $length = $pieces * $unitlength;
    } else if($unittype=="length"){

        $strengthvalue = strtoupper($strengthvalue);
        if(strpos($strengthvalue, "M LENGTH") !== false){
            $quantity = $quantity / $unitlength;
        } else {
            $quantity = $quantity / $unitlengthcm;
        }


        
        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;




        $length = $lengthused + $quantity;
        $pieces =  $totallengthstrength / $length;
        $weight = $pieces * $unitweight;
        $volume = $pieces * $unitvolume;
    }

    //Update stocklist
    $query = "UPDATE stockitemlist SET piecesleft=$piecesleft,
                                        weightleft=$weightleft,
                                        volumeleft=$volumeleft,
                                        lengthleft=$lengthleft,
                                        weightleftmg=$weightleftmg,
                                        volumeleftml=$volumeleftml,
                                        lengthleftcm=$lengthleftcm,
                                        piecesused=$pieces, volumeused=$volume, weightused=$weight,updateddate='$person, $entrydate' WHERE id=$stockitemid";
    // $runquery = mysqli_query($conn, $query);
    $non_combination = "Secondary Item Entry Successful";

    //Insert Into Account
    $query = "INSERT INTO accountentry(item,department,departmentitemgroup,itemgroup,itemclass,itemsubclass,amount,quantity,paymentorder,paymenttype,accountentrytype,accountnumber,personid,patientid,enteredby,entereddate) VALUES(
            '$itemname','$department','$departmentitemgroup','$itemgroup','$itemclass','$itemsubclass',$itemquantityprice,$itemquantity,'$revenueordernumber','SECONDARY ITEM','CREDIT',$stocklistitemid,$personid,$patientid,'$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);


    $exam_arr=array();
    $exam_arr["records"]=array();

    $exam_item=array(
    "success" => "Successful",
    "secondary" => $non_combination,

    );

    array_push($exam_arr["records"], $exam_item);




    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($exam_arr);
}



if(isset($_POST["updateSecondaryItemFromDept"])){
    $itemid = $_POST["itemid"];
    $itemname = $_POST["itemname"];
    $itemquantityprice = $_POST["itemquantityprice"];
    $itemquantity = $_POST["itemquantity"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $unittype = $_POST["unittype"];
    $unit = $_POST["unit"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
    $stocklistitemid = $_POST["stocklistitemid"];
    $paymenttype = $_POST["paymenttype"];


    //Get Revenue Order Info
    $query = "SELECT * FROM revenueorder WHERE revenueordernumber='$revenueordernumber'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $personid = $row["personid"];
    $patientid = $row["patientid"];



    //Get stockitemlist Info
    $query = "SELECT * FROM stockitemlist WHERE id=$stocklistitemid";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $stockitemid = $row["id"];
    $realitemid = $row["itemid"];
    $piecesused = $row["piecesused"];
    $volumeused = $row["volumeused"];
    $weightused = $row["weightused"];
    $lengthused = $row["lengthused"];

    if(empty($piecesused)){
        $piecesused = 0;
    }
    if(empty($volumeused)){
        $volumeused = 0;
    }
    if(empty($weightused)){
        $weightused = 0;
    }
    if(empty($lengthused)){
        $lengthused = 0;
    }



    $realitemid = $row["itemid"];
    $queryitem = "SELECT * FROM item WHERE id=$realitemid";
    $runqueryitem = mysqli_query($conn, $queryitem);
    $rowitem = mysqli_fetch_assoc($runqueryitem);
    $strengthvalue = $rowitem["strengthvalue"];
    $involume = $rowitem["involume"];
    $itemweight = $rowitem["itemweight"];

    $department = $rowitem["department"];
    $departmentitemgroup = $rowitem["departmentitemgroup"];
    $itemgroup = $rowitem["usagegroup"];
    $itemclass = $rowitem["usageclass"];
    $itemsubclass = $rowitem["usagesubclass"];
    


    $totalpieces = $row["totalpieces"];
    $totalstrength = $row["totalstrength"];
    $totalliquidstrength = $row["totalliquidstrength"];
    $totallengthstrength = $row["totallengthstrength"];
    $totalstrengthmg = $row["totalstrengthmg"];
    $totalliquidstrengthml = $row["totalliquidstrengthml"];
    $totallengthstrengthcm = $row["totallengthstrengthcm"];

    $piecesleft = $row["piecesleft"];
    $volumeleft = $row["volumeleft"];
    $weightleft = $row["weightleft"];
    $lengthleft = $row["lengthleft"];
    $volumeleftml = $row["volumeleftml"];
    $weightleftmg = $row["weightleftmg"];
    $lengthleftcm = $row["lengthleftcm"];



    
    if(empty($piecesleft)){
        $piecesleft = $totalpieces;
    }
    if($piecesused==0){
        $piecesleft = $totalpieces;
    }
    if(empty($volumeleft)){
        $volumeleft = $totalliquidstrength;
    }
    
    if(empty($weightleft)){
        $weightleft = $totalstrength;
    }
    if(empty($lengthleft)){
        $lengthleft = $totallengthstrength;
    }

    if(empty($volumeleftml)){
        $volumeleftml = $totalliquidstrengthml;
    }
    if( $volumeused == 0 ){
        $volumeleft = $totalliquidstrength;
        $volumeleftml = $totalliquidstrengthml;
    }
    if(empty($weightleftmg)){
        $weightleftmg = $totalstrengthmg;
    }
    if($weightused==0){
        $weightleftmg = $totalstrengthmg;
        $weightleft = $totalstrength;
    }
    if(empty($lengthleftcm)){
        $lengthleftcm = $totallengthstrengthcm;
    }
    if($lengthused==0){
        $lengthleftcm = $totallengthstrengthcm;
        $lengthleft = $totallengthstrength;
    }
    
    $unitweight = $totalstrength / $totalpieces;
    $unitvolume = $totalliquidstrength / $totalpieces;
    $unitlength = $totallengthstrength / $totalpieces;

    $unitweightmg = $totalstrengthmg / $totalpieces;
    $unitvolumeml = $totalliquidstrengthml / $totalpieces;
    $unitlengthcm = $totallengthstrengthcm / $totalpieces;

    $pieces = 0;
    $volume = 0;
    $weight = 0;
    $length = 0;
    $quantity = $itemquantity;
    if($unittype=="pieces"){

        

        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


        
        

        $pieces = $piecesused + $quantity;
        $volume = $pieces * $unitvolume;
        $weight = $pieces * $unitweight;
        $length = $pieces * $unitlength;
    } else if($unittype=="weight"){

        $itemweight = strtoupper($itemweight);
        if($itemweight=="G"){
            $quantity = $quantity / $unitweight;
        } else {
            $quantity = $quantity / $unitweightmg;
        }

        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


        $weight = $weightused + $quantity;
        $pieces =  $totalstrength / $weight;
        $volume = $pieces * $unitvolume;
        $length = $pieces * $unitlength;
    } else if($unittype=="volume"){

        $involume = strtoupper($involume);
        if($involume=="L"){
            $quantity = $quantity / $unitvolume;
        } else {
            $quantity = $quantity / $unitvolumeml;
        }


        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;



        $volume = $volumeused + $quantity;
        $pieces =  $totalliquidstrength / $volume;
        $weight = $pieces * $unitweight;
        $length = $pieces * $unitlength;
    } else if($unittype=="length"){

        $strengthvalue = strtoupper($strengthvalue);
        if(strpos($strengthvalue, "M LENGTH") !== false){
            $quantity = $quantity / $unitlength;
        } else {
            $quantity = $quantity / $unitlengthcm;
        }


        
        $unitweightquantity = $unitweight * $quantity;
        $unitvolumequantity = $unitvolume * $quantity;
        $unitlengthquantity = $unitlength * $quantity;

        $unitweightquantitymg = $unitweightmg * $quantity;
        $unitvolumequantityml = $unitvolumeml * $quantity;
        $unitlengthquantitycm = $unitlengthcm * $quantity;

        $piecesleft = $piecesleft - $quantity;
        $weightleft = $weightleft - $unitweightquantity;
        $volumeleft = $volumeleft - $unitvolumequantity;
        $lengthleft = $lengthleft - $unitlengthquantity;

        $weightleftmg = $weightleftmg - $unitweightquantitymg;
        $volumeleftml = $volumeleftml - $unitvolumequantityml;
        $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;




        $length = $lengthused + $quantity;
        $pieces =  $totallengthstrength / $length;
        $weight = $pieces * $unitweight;
        $volume = $pieces * $unitvolume;
    }

    //Update stocklist
    $query = "UPDATE stockitemlist SET piecesleft=$piecesleft,
                                        weightleft=$weightleft,
                                        volumeleft=$volumeleft,
                                        lengthleft=$lengthleft,
                                        weightleftmg=$weightleftmg,
                                        volumeleftml=$volumeleftml,
                                        lengthleftcm=$lengthleftcm,
                                        piecesused=$pieces, volumeused=$volume, weightused=$weight,updateddate='$person, $entrydate' WHERE id=$stockitemid";
    $runquery = mysqli_query($conn, $query);
    $non_combination = "Secondary Item Entry Successful";

    //Insert Into Account
    $query = "INSERT INTO accountentry(item,department,departmentitemgroup,itemgroup,itemclass,itemsubclass,amount,quantity,paymentorder,paymenttype,accountentrytype,accountnumber,personid,patientid,enteredby,entereddate) VALUES(
            '$itemname','$department','$departmentitemgroup','$itemgroup','$itemclass','$itemsubclass',$itemquantityprice,$itemquantity,'$revenueordernumber','SECONDARY ITEM','CREDIT',$stocklistitemid,$personid,$patientid,'$person','$entrydate')";
    // $runquery = mysqli_query($conn, $query);


    $exam_arr=array();
    $exam_arr["records"]=array();

    $exam_item=array(
    "success" => "Successful",
    "secondary" => $non_combination,

    );

    array_push($exam_arr["records"], $exam_item);




    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($exam_arr);
}

if(isset($_POST["insertAccountEntry"])){
    $itemid = $_POST["itemid"];
    $department = $_POST["department"];
    $total = $_POST["total"];
    $quantity = $_POST["quantity"];
    $unittype = $_POST["unittype"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $paymenttype = $_POST["paymenttype"];
    $item = $_POST["item"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    $checkquery = "SELECT * FROM accountentry WHERE accountnumber='$itemid' AND paymentorder='$revenueordernumber'";
    $run_checkquery = mysqli_query($conn, $checkquery);
    $check = mysqli_num_rows($run_checkquery);
   
    if($check==0){
        //calclulate quantity used
        $query = "SELECT * FROM stockitemlist Where id=$itemid";
        $runquery = mysqli_query($conn, $query);
    
        $row = mysqli_fetch_assoc($runquery);
        $stockitemid = $row["id"];
        $realitemid = $row["itemid"];
        $piecesused = $row["piecesused"];
        $volumeused = $row["volumeused"];
        $weightused = $row["weightused"];
        $lengthused = $row["lengthused"];




        if(empty($piecesused)){
            $piecesused = 0;
        }
        if(empty($volumeused)){
            $volumeused = 0;
        }
        if(empty($weightused)){
            $weightused = 0;
        }
        if(empty($lengthused)){
            $lengthused = 0;
        }
        $combined = $row["combinedpricing"];
        $non_combination = "";

        $realitemid = $row["itemid"];
        $queryitem = "SELECT * FROM item WHERE id=$realitemid";
        $runqueryitem = mysqli_query($conn, $queryitem);
        $rowitem = mysqli_fetch_assoc($runqueryitem);
        $strengthvalue = $rowitem["strengthvalue"];
        $involume = $rowitem["involume"];
        $itemweight = $rowitem["itemweight"];

        $department = $rowitem["department"];
        $departmentitemgroup = $rowitem["departmentitemgroup"];
        $itemgroup = $rowitem["usagegroup"];
        $itemclass = $rowitem["usageclass"];
        $itemsubclass = $rowitem["usagesubclass"];
        
        
        if(empty($combined)){
            $totalpieces = $row["totalpieces"];
            $totalstrength = $row["totalstrength"];
            $totalliquidstrength = $row["totalliquidstrength"];
            $totallengthstrength = $row["totallengthstrength"];
            $totalstrengthmg = $row["totalstrengthmg"];
            $totalliquidstrengthml = $row["totalliquidstrengthml"];
            $totallengthstrengthcm = $row["totallengthstrengthcm"];

            $piecesleft = $row["piecesleft"];
            $volumeleft = $row["volumeleft"];
            $weightleft = $row["weightleft"];
            $lengthleft = $row["lengthleft"];
            $volumeleftml = $row["volumeleftml"];
            $weightleftmg = $row["weightleftmg"];
            $lengthleftcm = $row["lengthleftcm"];



            
            if(empty($piecesleft)){
                $piecesleft = $totalpieces;
            }
            if($piecesused==0){
                $piecesleft = $totalpieces;
            }
            if(empty($volumeleft)){
                $volumeleft = $totalliquidstrength;
            }
            
            if(empty($weightleft)){
                $weightleft = $totalstrength;
            }
            if(empty($lengthleft)){
                $lengthleft = $totallengthstrength;
            }

            if(empty($volumeleftml)){
                $volumeleftml = $totalliquidstrengthml;
            }
            if( $volumeused == 0 ){
                $volumeleft = $totalliquidstrength;
                $volumeleftml = $totalliquidstrengthml;
            }
            if(empty($weightleftmg)){
                $weightleftmg = $totalstrengthmg;
            }
            if($weightused==0){
                $weightleftmg = $totalstrengthmg;
                $weightleft = $totalstrength;
            }
            if(empty($lengthleftcm)){
                $lengthleftcm = $totallengthstrengthcm;
            }
            if($lengthused==0){
                $lengthleftcm = $totallengthstrengthcm;
                $lengthleft = $totallengthstrength;
            }
            
            $unitweight = $totalstrength / $totalpieces;
            $unitvolume = $totalliquidstrength / $totalpieces;
            $unitlength = $totallengthstrength / $totalpieces;

            $unitweightmg = $totalstrengthmg / $totalpieces;
            $unitvolumeml = $totalliquidstrengthml / $totalpieces;
            $unitlengthcm = $totallengthstrengthcm / $totalpieces;

            $pieces = 0;
            $volume = 0;
            $weight = 0;
            $length = 0;
            if($unittype=="pieces"){

                

                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


                
                

                $pieces = $piecesused + $quantity;
                $volume = $pieces * $unitvolume;
                $weight = $pieces * $unitweight;
                $length = $pieces * $unitlength;
            } else if($unittype=="weight"){

                $itemweight = strtoupper($itemweight);
                if($itemweight=="G"){
                    $quantity = $quantity / $unitweight;
                } else {
                    $quantity = $quantity / $unitweightmg;
                }

                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


                $weight = $weightused + $quantity;
                $pieces =  $totalstrength / $weight;
                $volume = $pieces * $unitvolume;
                $length = $pieces * $unitlength;
            } else if($unittype=="volume"){

                $involume = strtoupper($involume);
                if($involume=="L"){
                    $quantity = $quantity / $unitvolume;
                } else {
                    $quantity = $quantity / $unitvolumeml;
                }


                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;



                $volume = $volumeused + $quantity;
                $pieces =  $totalliquidstrength / $volume;
                $weight = $pieces * $unitweight;
                $length = $pieces * $unitlength;
            } else if($unittype=="length"){

                $strengthvalue = strtoupper($strengthvalue);
                if(strpos($strengthvalue, "M LENGTH") !== false){
                    $quantity = $quantity / $unitlength;
                } else {
                    $quantity = $quantity / $unitlengthcm;
                }


                
                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;




                $length = $lengthused + $quantity;
                $pieces =  $totallengthstrength / $length;
                $weight = $pieces * $unitweight;
                $volume = $pieces * $unitvolume;
            }

            //Update stocklist
            $query = "UPDATE stockitemlist SET piecesleft=$piecesleft,
                                                weightleft=$weightleft,
                                                volumeleft=$volumeleft,
                                                lengthleft=$lengthleft,
                                                weightleftmg=$weightleftmg,
                                                volumeleftml=$volumeleftml,
                                                lengthleftcm=$lengthleftcm,
                                                piecesused=$pieces, volumeused=$volume, weightused=$weight,updateddate='$person, $entrydate' WHERE id=$stockitemid";
            $runquery = mysqli_query($conn, $query);
            $non_combination = "Non Combination Entry Successful";

        } else {
                                // $items = json_decode($combined, true);
                                $totalpieces = $piecesused + $quantity;
                        //         
                        //         foreach($items as $key => $value){
                        //             $itemname = $value["itemname"];
                        //             $itemquantity = $value["$itemquantity"];
                        //             $totalprice = $value["totalprice"];
                        //             $unitstrength = $value["unitstrength"];
                        //             $unitliquidstrength = $value["unitliquidstrength"];
                        //              //calclulate quantity used
                        //             $query = "SELECT item.genericname,stockitemlist.id,stockitemlist.piecesused,stockitemlist.volumeused,stockitemlist.weightused,stockitemlist.lengthused FROM stockitemlist,item Where item.id=stockitemlist.itemid AND item.genericname='$itemname'";
                        //             $runquery = mysqli_query($conn, $query);
                        //         
                        //             $itempieces = explode(" ", $itemquantity);
                        //             $itemquantity = $itempieces[0];
                        //             $row_item = mysqli_fetch_assoc($runquery);
                        //             $id = $row["id"];
                        //             $piecesused_item = $row_item["piecesused"];
                        //             $volumeused_item = $row_item["volumeused"];
                        //             $weightused_item = $row_item["weightused"];
                        //             $lengthused_item = $row_item["lengthused"];
                        //             $pieces_item = $piecesused_item + $itemquantity;
                        //             $volume_item = $volumeused_item + $itemquantity;
                        //             $weight_item = $weightused_item + $itemquantity;
                        //             $length_item = $lengthused_item + $itemquantity;
                        // 
                        //             $query = "UPDATE stockitemlist SET piecesused=$pieces_item, volumeused=$volume_item, weightused=$weight_item,updateddate='$person, $entrydate' WHERE id=$id";
                        //             $runquery = mysqli_query($conn, $query);
                        //             echo "updated ".$itemname;
                        //         }

            $query = "UPDATE stockitemlist SET piecesused=$totalpieces,updateddate='$person, $entrydate' WHERE id=$stockitemid";
            $runquery = mysqli_query($conn, $query);

        }
    

        // $entrydate = date('Y-m-d H:i:s');
        // $person = $_SESSION['person'];

        //Insert Into Account
        $query = "INSERT INTO accountentry(item,department,departmentitemgroup,itemgroup,itemclass,itemsubclass,amount,quantity,paymentorder,paymenttype,accountentrytype,accountnumber,enteredby,entereddate) VALUES(
                                        '$item','$department','$departmentitemgroup','$itemgroup','$itemclass','$itemsubclass',$total,$quantity,'$revenueordernumber','$paymenttype','CREDIT',$itemid,'$person','$entrydate')";
        $runquery = mysqli_query($conn, $query);


        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "success" => "Successful",
                "combined" => $combined,
                "noncombined" => $non_combination,
                "check" => $check

            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
    
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
   
    } else {
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "success" => "UnSuccessful: ". $item. " Already Paid For",
                "combined" => "",
                "noncombined" => "",
                "check" => $check
            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
    
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
   
    }

    

       
}


if(isset($_POST["getRevenueDetailsEmbalment"])){
    $corpsenumber = $_POST["corpsenumber"];
    $query = "SELECT * FROM revenueorder WHERE itemorder LIKE '%genericname".'":"'."Embalm%' AND itemorder LIKE '%,PAID%' AND hospitalnumber = '$corpsenumber'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    if(mysqli_num_rows($runquery)){
        $row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => $row["id"],
                "revenueordernumber" => $row["revenueordernumber"],
                "totalamount" => $row["itemorder"],
                "paid" => $row["paid"],
                "balance" => $row["balance"],
                "itemorder" => $row["itemorder"],
                "paiditems" => $row["paiditems"]
            );

            array_push($exam_arr["records"], $exam_item);
        
        

        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
    } else {
       
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "revenueordernumber" => "No Revenue Number",
                "totalamount" => 0,
                "paid" => 0,
                "balance" => 0,
                "itemorder" => "None",
                "paiditems" =>0
            );

            array_push($exam_arr["records"], $exam_item);
        
        

        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
    }
    
}

if(isset($_POST["insertAccountEntryStockList"])){
    $itemid = $_POST["itemid"];
    $id = $_POST["itemid"];
    $department = $_POST["department"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $total = $_POST["total"];
    $quantity = $_POST["quantity"];
    $unittype = $_POST["unittype"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $paymenttype = $_POST["paymenttype"];
    $item = $_POST["item"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
    


    $checkquery = "SELECT * FROM accountentry WHERE accountnumber='$itemid' AND paymentorder='$revenueordernumber'";
    $run_checkquery = mysqli_query($conn, $checkquery);
    $check = mysqli_num_rows($run_checkquery);
   
    
    if($check==0){
        //calclulate quantity used
        $query = "SELECT * FROM stockitemlist Where id=$id";
        $runquery = mysqli_query($conn, $query);
        if(mysqli_num_rows($runquery)>0){
            $row = mysqli_fetch_assoc($runquery);
            $stockitemid = $row["id"];
            $realitemid = $row["itemid"];
            $piecesused = $row["piecesused"];
            $volumeused = $row["volumeused"];
            $weightused = $row["weightused"];
            $lengthused = $row["lengthused"];




            if(empty($piecesused)){
                $piecesused = 0;
            }
            if(empty($volumeused)){
                $volumeused = 0;
            }
            if(empty($weightused)){
                $weightused = 0;
            }
            if(empty($lengthused)){
                $lengthused = 0;
            }
            $combined = $row["combinedpricing"];
            $non_combination = "";

            $realitemid = $row["itemid"];
            $queryitem = "SELECT * FROM item WHERE id=$realitemid";
            $runqueryitem = mysqli_query($conn, $queryitem);
            $rowitem = mysqli_fetch_assoc($runqueryitem);
            $strengthvalue = $rowitem["strengthvalue"];
            $involume = $rowitem["involume"];
            $itemweight = $rowitem["itemweight"];

            $department = $rowitem["department"];
            $departmentitemgroup = $rowitem["departmentitemgroup"];
            $itemgroup = $rowitem["usagegroup"];
            $itemclass = $rowitem["usageclass"];
            $itemsubclass = $rowitem["usagesubclass"];
            
            
            if(empty($combined)){
                $totalpieces = $row["totalpieces"];
                $totalstrength = $row["totalstrength"];
                $totalliquidstrength = $row["totalliquidstrength"];
                $totallengthstrength = $row["totallengthstrength"];
                $totalstrengthmg = $row["totalstrengthmg"];
                $totalliquidstrengthml = $row["totalliquidstrengthml"];
                $totallengthstrengthcm = $row["totallengthstrengthcm"];

                $piecesleft = $row["piecesleft"];
                $volumeleft = $row["volumeleft"];
                $weightleft = $row["weightleft"];
                $lengthleft = $row["lengthleft"];
                $volumeleftml = $row["volumeleftml"];
                $weightleftmg = $row["weightleftmg"];
                $lengthleftcm = $row["lengthleftcm"];



                
                if(empty($piecesleft)){
                    $piecesleft = $totalpieces;
                }
                if($piecesused==0){
                    $piecesleft = $totalpieces;
                }
                if(empty($volumeleft)){
                    $volumeleft = $totalliquidstrength;
                }
                
                if(empty($weightleft)){
                    $weightleft = $totalstrength;
                }
                if(empty($lengthleft)){
                    $lengthleft = $totallengthstrength;
                }

                if(empty($volumeleftml)){
                    $volumeleftml = $totalliquidstrengthml;
                }
                if( $volumeused == 0 ){
                    $volumeleft = $totalliquidstrength;
                    $volumeleftml = $totalliquidstrengthml;
                }
                if(empty($weightleftmg)){
                    $weightleftmg = $totalstrengthmg;
                }
                if($weightused==0){
                    $weightleftmg = $totalstrengthmg;
                    $weightleft = $totalstrength;
                }
                if(empty($lengthleftcm)){
                    $lengthleftcm = $totallengthstrengthcm;
                }
                if($lengthused==0){
                    $lengthleftcm = $totallengthstrengthcm;
                    $lengthleft = $totallengthstrength;
                }
                
                $unitweight = $totalstrength / $totalpieces;
                $unitvolume = $totalliquidstrength / $totalpieces;
                $unitlength = $totallengthstrength / $totalpieces;

                $unitweightmg = $totalstrengthmg / $totalpieces;
                $unitvolumeml = $totalliquidstrengthml / $totalpieces;
                $unitlengthcm = $totallengthstrengthcm / $totalpieces;

                $pieces = 0;
                $volume = 0;
                $weight = 0;
                $length = 0;
                if($unittype=="pieces"){

                    

                    $unitweightquantity = $unitweight * $quantity;
                    $unitvolumequantity = $unitvolume * $quantity;
                    $unitlengthquantity = $unitlength * $quantity;

                    $unitweightquantitymg = $unitweightmg * $quantity;
                    $unitvolumequantityml = $unitvolumeml * $quantity;
                    $unitlengthquantitycm = $unitlengthcm * $quantity;

                    $piecesleft = $piecesleft - $quantity;
                    $weightleft = $weightleft - $unitweightquantity;
                    $volumeleft = $volumeleft - $unitvolumequantity;
                    $lengthleft = $lengthleft - $unitlengthquantity;

                    $weightleftmg = $weightleftmg - $unitweightquantitymg;
                    $volumeleftml = $volumeleftml - $unitvolumequantityml;
                    $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


                    
                    

                    $pieces = $piecesused + $quantity;
                    $volume = $pieces * $unitvolume;
                    $weight = $pieces * $unitweight;
                    $length = $pieces * $unitlength;
                } else if($unittype=="weight"){

                    $itemweight = strtoupper($itemweight);
                    if($itemweight=="G"){
                        $quantity = $quantity / $unitweight;
                    } else {
                        $quantity = $quantity / $unitweightmg;
                    }

                    $unitweightquantity = $unitweight * $quantity;
                    $unitvolumequantity = $unitvolume * $quantity;
                    $unitlengthquantity = $unitlength * $quantity;

                    $unitweightquantitymg = $unitweightmg * $quantity;
                    $unitvolumequantityml = $unitvolumeml * $quantity;
                    $unitlengthquantitycm = $unitlengthcm * $quantity;

                    $piecesleft = $piecesleft - $quantity;
                    $weightleft = $weightleft - $unitweightquantity;
                    $volumeleft = $volumeleft - $unitvolumequantity;
                    $lengthleft = $lengthleft - $unitlengthquantity;

                    $weightleftmg = $weightleftmg - $unitweightquantitymg;
                    $volumeleftml = $volumeleftml - $unitvolumequantityml;
                    $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


                    $weight = $weightused + $quantity;
                    $pieces =  $totalstrength / $weight;
                    $volume = $pieces * $unitvolume;
                    $length = $pieces * $unitlength;
                } else if($unittype=="volume"){

                    $involume = strtoupper($involume);
                    if($involume=="L"){
                        $quantity = $quantity / $unitvolume;
                    } else {
                        $quantity = $quantity / $unitvolumeml;
                    }


                    $unitweightquantity = $unitweight * $quantity;
                    $unitvolumequantity = $unitvolume * $quantity;
                    $unitlengthquantity = $unitlength * $quantity;

                    $unitweightquantitymg = $unitweightmg * $quantity;
                    $unitvolumequantityml = $unitvolumeml * $quantity;
                    $unitlengthquantitycm = $unitlengthcm * $quantity;

                    $piecesleft = $piecesleft - $quantity;
                    $weightleft = $weightleft - $unitweightquantity;
                    $volumeleft = $volumeleft - $unitvolumequantity;
                    $lengthleft = $lengthleft - $unitlengthquantity;

                    $weightleftmg = $weightleftmg - $unitweightquantitymg;
                    $volumeleftml = $volumeleftml - $unitvolumequantityml;
                    $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;



                    $volume = $volumeused + $quantity;
                    $pieces =  $totalliquidstrength / $volume;
                    $weight = $pieces * $unitweight;
                    $length = $pieces * $unitlength;
                } else if($unittype=="length"){

                    $strengthvalue = strtoupper($strengthvalue);
                    if(strpos($strengthvalue, "M LENGTH") !== false){
                        $quantity = $quantity / $unitlength;
                    } else {
                        $quantity = $quantity / $unitlengthcm;
                    }


                    
                    $unitweightquantity = $unitweight * $quantity;
                    $unitvolumequantity = $unitvolume * $quantity;
                    $unitlengthquantity = $unitlength * $quantity;

                    $unitweightquantitymg = $unitweightmg * $quantity;
                    $unitvolumequantityml = $unitvolumeml * $quantity;
                    $unitlengthquantitycm = $unitlengthcm * $quantity;

                    $piecesleft = $piecesleft - $quantity;
                    $weightleft = $weightleft - $unitweightquantity;
                    $volumeleft = $volumeleft - $unitvolumequantity;
                    $lengthleft = $lengthleft - $unitlengthquantity;

                    $weightleftmg = $weightleftmg - $unitweightquantitymg;
                    $volumeleftml = $volumeleftml - $unitvolumequantityml;
                    $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;




                    $length = $lengthused + $quantity;
                    $pieces =  $totallengthstrength / $length;
                    $weight = $pieces * $unitweight;
                    $volume = $pieces * $unitvolume;
                }

                //Update stocklist
                $query = "UPDATE stockitemlist SET piecesleft=$piecesleft,
                                                    weightleft=$weightleft,
                                                    volumeleft=$volumeleft,
                                                    lengthleft=$lengthleft,
                                                    weightleftmg=$weightleftmg,
                                                    volumeleftml=$volumeleftml,
                                                    lengthleftcm=$lengthleftcm,
                                                    piecesused=$pieces, volumeused=$volume, weightused=$weight,updateddate='$person, $entrydate' WHERE id=$stockitemid";
                // $runquery = mysqli_query($conn, $query);
                // $non_combination = "Non Combination Entry Successful";

            } else {
                                    // $items = json_decode($combined, true);
                                    $totalpieces = $piecesused + $quantity;
                            //         
                            //         foreach($items as $key => $value){
                            //             $itemname = $value["itemname"];
                            //             $itemquantity = $value["$itemquantity"];
                            //             $totalprice = $value["totalprice"];
                            //             $unitstrength = $value["unitstrength"];
                            //             $unitliquidstrength = $value["unitliquidstrength"];
                            //              //calclulate quantity used
                            //             $query = "SELECT item.genericname,stockitemlist.id,stockitemlist.piecesused,stockitemlist.volumeused,stockitemlist.weightused,stockitemlist.lengthused FROM stockitemlist,item Where item.id=stockitemlist.itemid AND item.genericname='$itemname'";
                            //             $runquery = mysqli_query($conn, $query);
                            //         
                            //             $itempieces = explode(" ", $itemquantity);
                            //             $itemquantity = $itempieces[0];
                            //             $row_item = mysqli_fetch_assoc($runquery);
                            //             $id = $row["id"];
                            //             $piecesused_item = $row_item["piecesused"];
                            //             $volumeused_item = $row_item["volumeused"];
                            //             $weightused_item = $row_item["weightused"];
                            //             $lengthused_item = $row_item["lengthused"];
                            //             $pieces_item = $piecesused_item + $itemquantity;
                            //             $volume_item = $volumeused_item + $itemquantity;
                            //             $weight_item = $weightused_item + $itemquantity;
                            //             $length_item = $lengthused_item + $itemquantity;
                            // 
                            //             $query = "UPDATE stockitemlist SET piecesused=$pieces_item, volumeused=$volume_item, weightused=$weight_item,updateddate='$person, $entrydate' WHERE id=$id";
                            //             $runquery = mysqli_query($conn, $query);
                            //             echo "updated ".$itemname;
                            //         }

                $query = "UPDATE stockitemlist SET piecesused=$totalpieces,updateddate='$person, $entrydate' WHERE id=$stockitemid";
                // $runquery = mysqli_query($conn, $query);

            }
        }
    

        // $entrydate = date('Y-m-d H:i:s');
        // $person = $_SESSION['person'];

        //Insert Into Account
        $query = "INSERT INTO accountentry(item,department,departmentitemgroup,itemgroup,itemclass,itemsubclass,amount,quantity,paymentorder,paymenttype,accountentrytype,accountnumber,enteredby,entereddate) VALUES(
                                        '$item','$department','$departmentitemgroup','$itemgroup','$itemclass','$itemsubclass',$total,$quantity,'$revenueordernumber','$paymenttype','CREDIT',$itemid,'$person','$entrydate')";
        $runquery = mysqli_query($conn, $query);


        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "success" => "Successful",
                "combined" => $combined,
                "noncombined" => $non_combination,
                "check" => $check

            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
    
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
   
    } else {
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "success" => "UnSuccessful: ". $item. " Already Paid For",
                "combined" => "",
                "noncombined" => "",
                "check" => $check
            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
    
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
   
    }

    

       
}

if(isset($_POST["insertAccountEntryStockListFromDept"])){
    $itemid = $_POST["itemid"];
    $id = $_POST["id"];
    $department = $_POST["department"];
    $total = $_POST["total"];
    $quantity = $_POST["quantity"];
    $unittype = $_POST["unittype"];
    $revenueordernumber = $_POST["revenueordernumber"];
    $paymenttype = $_POST["paymenttype"];
    $item = $_POST["item"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];


    $checkquery = "SELECT * FROM accountentry WHERE accountnumber='$itemid' AND paymentorder='$revenueordernumber'";
    $run_checkquery = mysqli_query($conn, $checkquery);
    $check = mysqli_num_rows($run_checkquery);
   
    if($check==0){
        //calclulate quantity used
        $query = "SELECT * FROM stockitemlist Where id=$id";
        $runquery = mysqli_query($conn, $query);
    
        $row = mysqli_fetch_assoc($runquery);
        $stockitemid = $row["id"];
        $realitemid = $row["itemid"];
        $piecesused = $row["piecesused"];
        $volumeused = $row["volumeused"];
        $weightused = $row["weightused"];
        $lengthused = $row["lengthused"];




        if(empty($piecesused)){
            $piecesused = 0;
        }
        if(empty($volumeused)){
            $volumeused = 0;
        }
        if(empty($weightused)){
            $weightused = 0;
        }
        if(empty($lengthused)){
            $lengthused = 0;
        }
        $combined = $row["combinedpricing"];
        $non_combination = "";

        $realitemid = $row["itemid"];
        $queryitem = "SELECT * FROM item WHERE id=$realitemid";
        $runqueryitem = mysqli_query($conn, $queryitem);
        $rowitem = mysqli_fetch_assoc($runqueryitem);
        $strengthvalue = $rowitem["strengthvalue"];
        $involume = $rowitem["involume"];
        $itemweight = $rowitem["itemweight"];

        $department = $rowitem["department"];
        $departmentitemgroup = $rowitem["departmentitemgroup"];
        $itemgroup = $rowitem["usagegroup"];
        $itemclass = $rowitem["usageclass"];
        $itemsubclass = $rowitem["usagesubclass"];
        
        
        if(empty($combined)){
            $totalpieces = $row["totalpieces"];
            $totalstrength = $row["totalstrength"];
            $totalliquidstrength = $row["totalliquidstrength"];
            $totallengthstrength = $row["totallengthstrength"];
            $totalstrengthmg = $row["totalstrengthmg"];
            $totalliquidstrengthml = $row["totalliquidstrengthml"];
            $totallengthstrengthcm = $row["totallengthstrengthcm"];

            $piecesleft = $row["piecesleft"];
            $volumeleft = $row["volumeleft"];
            $weightleft = $row["weightleft"];
            $lengthleft = $row["lengthleft"];
            $volumeleftml = $row["volumeleftml"];
            $weightleftmg = $row["weightleftmg"];
            $lengthleftcm = $row["lengthleftcm"];



            
            if(empty($piecesleft)){
                $piecesleft = $totalpieces;
            }
            if($piecesused==0){
                $piecesleft = $totalpieces;
            }
            if(empty($volumeleft)){
                $volumeleft = $totalliquidstrength;
            }
            
            if(empty($weightleft)){
                $weightleft = $totalstrength;
            }
            if(empty($lengthleft)){
                $lengthleft = $totallengthstrength;
            }

            if(empty($volumeleftml)){
                $volumeleftml = $totalliquidstrengthml;
            }
            if( $volumeused == 0 ){
                $volumeleft = $totalliquidstrength;
                $volumeleftml = $totalliquidstrengthml;
            }
            if(empty($weightleftmg)){
                $weightleftmg = $totalstrengthmg;
            }
            if($weightused==0){
                $weightleftmg = $totalstrengthmg;
                $weightleft = $totalstrength;
            }
            if(empty($lengthleftcm)){
                $lengthleftcm = $totallengthstrengthcm;
            }
            if($lengthused==0){
                $lengthleftcm = $totallengthstrengthcm;
                $lengthleft = $totallengthstrength;
            }
            
            $unitweight = $totalstrength / $totalpieces;
            $unitvolume = $totalliquidstrength / $totalpieces;
            $unitlength = $totallengthstrength / $totalpieces;

            $unitweightmg = $totalstrengthmg / $totalpieces;
            $unitvolumeml = $totalliquidstrengthml / $totalpieces;
            $unitlengthcm = $totallengthstrengthcm / $totalpieces;

            $pieces = 0;
            $volume = 0;
            $weight = 0;
            $length = 0;
            if($unittype=="pieces"){

                

                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


                
                

                $pieces = $piecesused + $quantity;
                $volume = $pieces * $unitvolume;
                $weight = $pieces * $unitweight;
                $length = $pieces * $unitlength;
            } else if($unittype=="weight"){

                $itemweight = strtoupper($itemweight);
                if($itemweight=="G"){
                    $quantity = $quantity / $unitweight;
                } else {
                    $quantity = $quantity / $unitweightmg;
                }

                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;


                $weight = $weightused + $quantity;
                $pieces =  $totalstrength / $weight;
                $volume = $pieces * $unitvolume;
                $length = $pieces * $unitlength;
            } else if($unittype=="volume"){

                $involume = strtoupper($involume);
                if($involume=="L"){
                    $quantity = $quantity / $unitvolume;
                } else {
                    $quantity = $quantity / $unitvolumeml;
                }


                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;



                $volume = $volumeused + $quantity;
                $pieces =  $totalliquidstrength / $volume;
                $weight = $pieces * $unitweight;
                $length = $pieces * $unitlength;
            } else if($unittype=="length"){

                $strengthvalue = strtoupper($strengthvalue);
                if(strpos($strengthvalue, "M LENGTH") !== false){
                    $quantity = $quantity / $unitlength;
                } else {
                    $quantity = $quantity / $unitlengthcm;
                }


                
                $unitweightquantity = $unitweight * $quantity;
                $unitvolumequantity = $unitvolume * $quantity;
                $unitlengthquantity = $unitlength * $quantity;

                $unitweightquantitymg = $unitweightmg * $quantity;
                $unitvolumequantityml = $unitvolumeml * $quantity;
                $unitlengthquantitycm = $unitlengthcm * $quantity;

                $piecesleft = $piecesleft - $quantity;
                $weightleft = $weightleft - $unitweightquantity;
                $volumeleft = $volumeleft - $unitvolumequantity;
                $lengthleft = $lengthleft - $unitlengthquantity;

                $weightleftmg = $weightleftmg - $unitweightquantitymg;
                $volumeleftml = $volumeleftml - $unitvolumequantityml;
                $lengthleftcm = $lengthleftcm - $unitlengthquantitycm;




                $length = $lengthused + $quantity;
                $pieces =  $totallengthstrength / $length;
                $weight = $pieces * $unitweight;
                $volume = $pieces * $unitvolume;
            }

            //Update stocklist
            $query = "UPDATE stockitemlist SET piecesleft=$piecesleft,
                                                weightleft=$weightleft,
                                                volumeleft=$volumeleft,
                                                lengthleft=$lengthleft,
                                                weightleftmg=$weightleftmg,
                                                volumeleftml=$volumeleftml,
                                                lengthleftcm=$lengthleftcm,
                                                piecesused=$pieces, volumeused=$volume, weightused=$weight,updateddate='$person, $entrydate' WHERE id=$stockitemid";
            $runquery = mysqli_query($conn, $query);
            $non_combination = "Non Combination Entry Successful";

        } else {
                                // $items = json_decode($combined, true);
                                $totalpieces = $piecesused + $quantity;
                        //         
                        //         foreach($items as $key => $value){
                        //             $itemname = $value["itemname"];
                        //             $itemquantity = $value["$itemquantity"];
                        //             $totalprice = $value["totalprice"];
                        //             $unitstrength = $value["unitstrength"];
                        //             $unitliquidstrength = $value["unitliquidstrength"];
                        //              //calclulate quantity used
                        //             $query = "SELECT item.genericname,stockitemlist.id,stockitemlist.piecesused,stockitemlist.volumeused,stockitemlist.weightused,stockitemlist.lengthused FROM stockitemlist,item Where item.id=stockitemlist.itemid AND item.genericname='$itemname'";
                        //             $runquery = mysqli_query($conn, $query);
                        //         
                        //             $itempieces = explode(" ", $itemquantity);
                        //             $itemquantity = $itempieces[0];
                        //             $row_item = mysqli_fetch_assoc($runquery);
                        //             $id = $row["id"];
                        //             $piecesused_item = $row_item["piecesused"];
                        //             $volumeused_item = $row_item["volumeused"];
                        //             $weightused_item = $row_item["weightused"];
                        //             $lengthused_item = $row_item["lengthused"];
                        //             $pieces_item = $piecesused_item + $itemquantity;
                        //             $volume_item = $volumeused_item + $itemquantity;
                        //             $weight_item = $weightused_item + $itemquantity;
                        //             $length_item = $lengthused_item + $itemquantity;
                        // 
                        //             $query = "UPDATE stockitemlist SET piecesused=$pieces_item, volumeused=$volume_item, weightused=$weight_item,updateddate='$person, $entrydate' WHERE id=$id";
                        //             $runquery = mysqli_query($conn, $query);
                        //             echo "updated ".$itemname;
                        //         }

            $query = "UPDATE stockitemlist SET piecesused=$totalpieces,updateddate='$person, $entrydate' WHERE id=$stockitemid";
            $runquery = mysqli_query($conn, $query);

        }
    

        // $entrydate = date('Y-m-d H:i:s');
        // $person = $_SESSION['person'];

        //Insert Into Account
        $query = "INSERT INTO accountentry(item,department,departmentitemgroup,itemgroup,itemclass,itemsubclass,amount,quantity,paymentorder,paymenttype,accountentrytype,accountnumber,enteredby,entereddate) VALUES(
                                        '$item','$department','$departmentitemgroup','$itemgroup','$itemclass','$itemsubclass',$total,$quantity,'$revenueordernumber','$paymenttype','CREDIT',$itemid,'$person','$entrydate')";
        // $runquery = mysqli_query($conn, $query);


        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "success" => "Successful",
                "combined" => $combined,
                "noncombined" => $non_combination,
                "check" => $check

            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
    
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
   
    } else {
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "success" => "UnSuccessful: ". $item. " Already Paid For",
                "combined" => "",
                "noncombined" => "",
                "check" => $check
            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
    
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
   
    }

    

       
}
?>