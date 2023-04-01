<?php

include_once("config.php");
defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR);

if(isset($_POST["getItemForm"])){
    $searchformItem = $_POST["searchformItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemform Where itemform Like '%$searchformItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemform" => $row["itemform"],
                "itemcode" => $row["itemcode"],
                "abbreviation" => $row["Abbreviation"]
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

if(isset($_POST["getItemFormByDepartmentItem"])){
    $searchformItem = $_POST["departmentitemgroup"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemform Where departmentitemgroup = '$searchformItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemform" => $row["itemform"],
                "itemcode" => $row["itemcode"],
                "abbreviation" => $row["Abbreviation"]
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
                "id" => "0",
                "itemform" => "None",
                "itemcode" => "Nil",
                "abbreviation" => "NA"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getSpecimenByDepartmentItem"])){
    $searchformItem = $_POST["departmentitemgroup"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From specimen Where departmentitemgroup = '$searchformItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "specimen" => $row["specimen"]
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
                "id" => "0",
                "specimen" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getSampleByDepartmentItem"])){
    $searchformItem = $_POST["departmentitemgroup"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From sample Where departmentitemgroup = '$searchformItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "sample" => $row["sample"]
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
                "id" => "0",
                "sample" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getItemFormByUsageGroupType"])){
    $searchformItem = $_POST["searchUsageGroupType"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemform Where usagegrouptype = '$searchformItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemform" => $row["itemform"],
                "itemcode" => $row["itemcode"],
                "abbreviation" => $row["Abbreviation"]
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
                "id" => "0",
                "itemform" => "No Formulation",
                "itemcode" => "",
                "abbreviation" => ""
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertItemForm"])){
    $itemcode = $_POST['itemcode'];
    $itemform = $_POST['itemform'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['usagegrouptype'];
    $usagegrouptype = $_POST['usagegrouptype'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemform(itemform,itemcode,abbreviation,departmentitemgroup,usagegrouptype,enteredby,entereddate) VALUES('$itemform','$itemcode','$abbreviation','$departmentitemgroup','$usagegrouptype','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["insertItemRegiment"])){
    $itemname = $_POST['itemname'];
    $regimentname = $_POST['regimentname'];
    $combinedpricingvalue = $_POST['combinedpricingvalue'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    // first check that the regiment name exists not

    $querycheck = "SELECT * FROM itemregiment WHERE regimentname='$regimentname'";
    $runquerycheck = mysqli_query($conn, $querycheck);
    $check = mysqli_num_rows($runquerycheck);

    if($check>0){
        echo "Error: Regiment Name already exists";
    }else{
          $query = "INSERT INTO itemregiment(itemname,regimentname,regiment,enteredby,entereddate) VALUES('$itemname','$regimentname','$combinedpricingvalue','$person','$entrydate')";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        echo $regimentname." added Successful";
    }

  
}

if(isset($_POST['getItemFormById'])){
    $id = $_POST['id'];
    $query = "Select * From itemform Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemform" => $row['itemform'],
        "itemcode" => $row['itemcode'],
        "abbreviation" => $row['Abbreviation'],
        "departmentitemgroup" => $row['departmentitemgroup'],
        "usagegrouptype" => $row['usagegrouptype']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST['getItemFormByName'])){
    $selectform = $_POST['selectform'];
    $query = "Select * From itemform Where itemform='".$selectform."'";
    //echo $query;
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
        $row = mysqli_fetch_assoc($runquery);

        $product_arr = array(
            "id" =>  $row['id'],
            "itemform" => $row['itemform'],
            "itemcode" => $row['itemcode'],
            "abbreviation" => $row['Abbreviation'],
            "departmentitemgroup" => $row['departmentitemgroup'],
            "usagegrouptype" => $row['usagegrouptype']
        );
    
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
    } else {
        $product_arr = array(
            "id" =>  "0",
            "itemform" => "Nil",
            "itemcode" => "Nil",
            "abbreviation" => "Nil",
            "departmentitemgroup" => "Nil",
            "usagegrouptype" => "Nil"
        );
    
        // set response code - 200 OK
        http_response_code(200);
    
        // make it json format
        echo json_encode($product_arr);
    }
}

if(isset($_POST["editItemForm"])){
    $id = $_POST['id'];
    $itemcode = $_POST['itemcode'];
    $itemform = $_POST['itemform'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['usagegrouptype'];
    $usagegrouptype = $_POST['usagegrouptype'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemform SET itemform='$itemform',itemcode='$itemcode',abbreviation='$abbreviation',usagegrouptype='$usagegrouptype',departmentitemgroup='$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemForm"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemform WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["deleteItemRegiment"])){
    $itemname = $_POST['itemname'];
    $id = $_POST['id'];
    $query = "DELETE FROM itemregiment WHERE id='$id'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["deleteItemRegimentByName"])){
    $itemname = $_POST['routinename'];
    echo $itemname;
    $query = "DELETE FROM itemregiment WHERE regimentname='$itemname'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["editItemRegiment"])){
    $itemname = $_POST['itemname'];
    $regimentname = $_POST['regimentname'];
    $id = $_POST['itemregimentid'];
    $combinedpricingvalue = $_POST["combinedpricingvalue"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemregiment SET itemname='$itemname',regimentname='$regimentname',regiment='$combinedpricingvalue',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}

if(isset($_POST["editItemRegiment_Regiment"])){
    
    $id = $_POST['regimentid'];
    $regiment = $_POST["regiment"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemregiment SET regiment='$regiment',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}

//Item Group
if(isset($_POST["getItemGroup"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchItem'];
    // $query = "Select * From itemgroup Where itemgroup Like '%$searchItem%' or itemgrouptype Like '%$searchItem%' or itemgroupnote Like '%$searchItem%' Order By id DESC";
    $query = "SELECT departmentitemgroup.department,itemgroup.* FROM departmentitemgroup,itemgroup Where departmentitemgroup.departmentitemgroup=itemgroup.departmentitemgroup AND (itemgroup.itemgroup LIKE '%$searchItem%' or itemgroup.departmentitemgroup Like '%$searchItem%' or itemgroup.itemgroupnote Like '%$searchItem%' or departmentitemgroup.department Like '%$searchItem%') Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemgroup" => $row["itemgroup"],
                "itemgrouptype" => $row["itemgrouptype"],
                "itemgroupnote" => $row["itemgroupnote"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "department" => $row["department"]
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

//Item Regiment
if(isset($_POST["getItemRegiment"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    // $searchItem = $_POST['searchItem'];
    // $query = "Select * From itemgroup Where itemgroup Like '%$searchItem%' or itemgrouptype Like '%$searchItem%' or itemgroupnote Like '%$searchItem%' Order By id DESC";
    $query = "SELECT * FROM itemregiment Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "regimentname" => $row["regimentname"],
                "itemname" => $row["itemname"],
                "regiment" => $row["regiment"]
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

if(isset($_POST["getItemRegimentBySearch"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchregiment'];
    // $query = "Select * From itemgroup Where itemgroup Like '%$searchItem%' or itemgrouptype Like '%$searchItem%' or itemgroupnote Like '%$searchItem%' Order By id DESC";
    $query = "SELECT * FROM itemregiment WHERE regimentname LIKE '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "regimentname" => $row["regimentname"],
                "itemname" => $row["itemname"],
                "regiment" => $row["regiment"]
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

if(isset($_POST["getAllItemGroup"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchItem'];
    $query = "Select * From itemgroup Where itemgroup Like '%$searchItem%' Or itemgroupnote Like '%$searchItem%' Order By id DESC";
    // $query = "SELECT departmentitemgroup.department,itemgroup.* FROM departmentitemgroup,itemgroup Where departmentitemgroup.departmentitemgroup=itemgroup.departmentitemgroup AND (itemgroup.itemgroup LIKE '%$searchItem%' or itemgroup.departmentitemgroup Like '%$searchItem%' or itemgroup.itemgroupnote Like '%$searchItem%' or departmentitemgroup.department Like '%$searchItem%') Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemgroup" => $row["itemgroup"],
                "itemgrouptype" => $row["itemgrouptype"],
                "itemgroupnote" => $row["itemgroupnote"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "department" => $row["department"]
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

if(isset($_POST["insertItemGroup"])){
    $itemgroup = $_POST['itemgroup'];
    $itemgrouptype = $_POST['itemgrouptype'];
    $itemgroupnote = $_POST['itemgroupnote'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemgroup(itemgroup,departmentitemgroup,itemgroupnote,enteredby,entereddate) VALUES('$itemgroup','$itemgrouptype','$itemgroupnote','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemGroupById'])){
    $id = $_POST['id'];
    $query = "Select * From itemgroup Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemgroup" => $row['itemgroup'],
        "departmentitemgroup" => $row["departmentitemgroup"],
        "itemgroupnote" => $row['itemgroupnote']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST['getItemGroupByGenericName'])){
    $id = $_POST['genericname'];
    $query = "Select itemgroup From itemgenericname Where genericname='".$id."'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        
        "itemgroup" => $row['itemgroup']
        
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemGroup"])){
    $id = $_POST['id'];
    $itemgroup = $_POST['itemgroup'];
    $previousitemgroup = $_POST['previousitemgroup'];
    $itemgrouptype = $_POST['itemgrouptype'];
    $itemgroupnote = $_POST['itemgroupnote'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemgroup SET itemgroup='$itemgroup',departmentitemgroup='$itemgrouptype',itemgroupnote='$itemgroupnote',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
    $query = "UPDATE itemclass SET itemgroup='$itemgroup',departmentitemgroup='$itemgrouptype' WHERE itemgroup='$previousitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Class ".mysqli_error($conn));
    }
    echo "Update Successful";
    $query = "UPDATE itemsubclass SET itemgroup='$itemgroup',departmentitemgroup='$itemgrouptype' WHERE itemgroup='$previousitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item SubClass ".mysqli_error($conn));
    }
    $query = "UPDATE itemgenericname SET itemgroup='$itemgroup',departmentitemgroup='$itemgrouptype' WHERE itemgroup='$previousitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Generic Name ".mysqli_error($conn));
    }
    $query = "UPDATE item SET usagegroup='$itemgroup',departmentitemgroup='$itemgrouptype' WHERE usagegroup='$previousitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item ".mysqli_error($conn));
    }
}


if(isset($_POST["deleteItemGroup"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemgroup WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Usage Route
if(isset($_POST["getUsageRoute"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchItem'];
    $query = "Select * From usageroute Where usageroute Like '%$searchItem%' or usageroutetype Like '%$searchItem%' or abbreviation Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "usageroute" => $row["usageroute"],
                "usageroutetype" => $row["usageroutetype"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["getDeptItemGrpUsageRoute"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchItem'];
    $query = "Select * From usageroute Where usageroutetype = '$searchItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "usageroute" => $row["usageroute"],
                "usageroutetype" => $row["usageroutetype"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "usageroute" => "No Usage Route",
                "usageroutetype" => "No Usage Type",
                "abbreviation" => "No Abbreviation"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getDeptItemGrpUsageGroup"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchItem'];
    $query = "Select * From itemgroup Where departmentitemgroup = '$searchItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemgroup" => $row["itemgroup"]
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
                "id" => "0",
                "itemgroup" => "No Usage Group"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getDeptItemGrpRoute"])){
    //Where itemusage Like '%$searchItem%' Order By id DESC";
    $searchItem = $_POST['searchItem'];
    $query = "Select * From usageroute Where departmentitemgroup = '$searchItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "usageroute" => $row["usageroute"]
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
                "id" => "0",
                "usageroute" => "No Usage Route"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertUsageRoute"])){
    $usageroute = $_POST['usageroute'];
    $usageroutetype = $_POST['selectusageroutetype'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO usageroute(usageroute,usageroutetype,departmentitemgroup,abbreviation,enteredby,entereddate) VALUES('$usageroute','$usageroutetype','$departmentitemgroup','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getUsageRouteByType'])){
    $selectusageroutetype = $_POST['selectusageroutetype'];
   
    $query = "Select * From usageroute Where usageroutetype='$selectusageroutetype'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "usageroute" => $row["usageroute"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "usageroute" => "No Usage Route"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}


if(isset($_POST['getUsageRouteById'])){
    $id = $_POST['id'];
    $query = "Select * From usageroute Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "usageroute" => $row['usageroute'],
        "usageroutetype" => $row["usageroutetype"],
        "abbreviation" => $row['abbreviation'],
        "departmentitemgroup" => $row['departmentitemgroup']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editUsageRoute"])){
    $id = $_POST['id'];
    $usageroute = $_POST['usageroute'];
    $usageroutetype = $_POST['selectusageroutetype'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $abbreviation = $_POST['usagerouteabbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE usageroute SET usageroute='$usageroute',departmentitemgroup='$departmentitemgroup',usageroutetype='$usageroutetype',abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteUsageRoute"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM usageroute WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Age
if(isset($_POST['getAgeGroup'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From age Where age Like '%$searchItem%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "age" => $row["age"],
                "agerange" => $row["agerange"],
                "upper" => $row["upper"]." ".$row["upperunit"],
                "lower" => $row["lower"]." ".$row["lowerunit"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}


if(isset($_POST['getAgeById'])){
    $id = $_POST['id'];
    $query = "Select * From age Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "age" => $row['age'],
        "upper" => $row["upper"],
        "lower" => $row['lower'],
        "lowerunit" => $row['lowerunit'],
        "upperunit" => $row['upperunit']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertAge"])){
    $agegroup = $_POST['agegroup'];
    $agerange = $_POST['agerange'];
    //$agerange = $_POST['agerange'];
    $lower = $_POST['loweragelimit'];
    $upper = $_POST['upperagelimit'];
    $lowerunit = $_POST['lowerdatetype'];
    $upperunit = $_POST['upperdatetype'];
    //$abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO age(age,agerange,upper,upperunit,lower,lowerunit,enteredby,entereddate) VALUES('$agegroup','$agerange','$upper','$upperunit','$lower','$lowerunit','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["editAge"])){
    $id = $_POST['id'];
    $agegroup = $_POST['agegroup'];
    $agerange = $_POST['agerange'];
    //$agerange = $_POST['agerange'];
    $lower = $_POST['loweragelimit'];
    $upper = $_POST['upperagelimit'];
    $lowerunit = $_POST['lowerdatetype'];
    $upperunit = $_POST['upperdatetype'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE age SET age='$agegroup',agerange='$agerange',lower='$lower',upper='$upper',lowerunit='$lowerunit',upperunit='$upperunit',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteAge"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM age WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Vital Sign
if(isset($_POST['getVitalSign'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From vitals Where vitals Like '%$searchItem%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "vitals" => $row["vitals"]." (".$row["units"].")| ".$row["vitalsabbr"]." ".$row["unitsabbr"],
                "adult" => $row["adultlow"]." - ".$row["adulthigh"],
                "child" => $row["childlow"]." - ".$row["childhigh"],
                "infant" => $row["infantlow"]." - ".$row["infanthigh"],
                "neonate" => $row["neonatelow"]." - ".$row["neonatehigh"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}

if(isset($_POST['getNurseVitalSign'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From vitals Where vitals Like '%$searchItem%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "vitals" => $row["vitals"]." (".$row["vitalsabbr"].")",
                "units" => $row["units"]."|".$row["unitsabbr"],
                "normalstatus" => $row["normalstatus"],
                "abnormalstatus" => $row["abnormalstatus"],
                "adult" => $row["adultlow"]." - ".$row["adulthigh"],
                "child" => $row["childlow"]." - ".$row["childhigh"],
                "infant" => $row["infantlow"]." - ".$row["infanthigh"],
                "neonate" => $row["neonatelow"]." - ".$row["neonatehigh"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}


if(isset($_POST['getVitalSignById'])){
    $id = $_POST['id'];
    $query = "Select * From vitals Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "vitals" => $row['vitals'],
        "units" => $row["units"],
        "vitalsabbr" => $row['vitalsabbr'],
        "unitsabbr" => $row["unitsabbr"],
        "adulthigh" => $row['adulthigh'],
        "adultlow" => $row['adultlow'],
        "childhigh" => $row['childhigh'],
        "childlow" => $row['childlow'],
        "infanthigh" => $row['infanthigh'],
        "infantlow" => $row['infantlow'],
        "neonatehigh" => $row['neonatehigh'],
        "neonatelow" => $row['neonatelow'],
        "normalstatus" => $row['normalstatus'],
        "abnormalstatus" => $row['abnormalstatus']
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertVitalSign"])){
    $vitals = $_POST['vitals'];
    $units = $_POST['units'];
    $vitalsabbr = $_POST['vitalsabbr'];
    $unitsabbr = $_POST['unitsabbr'];
    $adultlow = $_POST['adultlow'];
    $adulthigh = $_POST['adulthigh'];
    $childlow = $_POST['childlow'];
    $childhigh = $_POST['childhigh'];
    $infantlow = $_POST['infantlow'];
    $infanthigh = $_POST['infanthigh'];
    $neonatelow = $_POST['neonatelow'];
    $neonatehigh = $_POST['neonatehigh'];
    $normalstatus = $_POST['normalstatus'];
    $abnormalstatus = $_POST['abnormalstatus'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO vitals(vitals,vitalsabbr,unitsabbr,units,adultlow,adulthigh,
                                childlow,childhigh,infantlow,infanthigh,
                                neonatelow,neonatehigh,normalstatus,abnormalstatus,enteredby,entereddate) 
                        VALUES('$vitals','$vitalsabbr','$unitsabbr','$units',$adultlow,$adulthigh,
                                $childlow,$childhigh,$infantlow,$infanthigh,
                                $neonatelow,$neonatehigh,'$normalstatus','$abnormalstatus','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["editVitalSign"])){
    $id = $_POST['id'];
    $vitals = $_POST['vitals'];
    $units = $_POST['units'];
    $vitalsabbr = $_POST['vitalsabbr'];
    $unitsabbr = $_POST['unitsabbr'];
    $adultlow = $_POST['adultlow'];
    $adulthigh = $_POST['adulthigh'];
    $childlow = $_POST['childlow'];
    $childhigh = $_POST['childhigh'];
    $infantlow = $_POST['infantlow'];
    $infanthigh = $_POST['infanthigh'];
    $neonatelow = $_POST['neonatelow'];
    $neonatehigh = $_POST['neonatehigh'];
    $normalstatus = $_POST['normalstatus'];
    $abnormalstatus = $_POST['abnormalstatus'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE vitals SET vitals='$vitals',normalstatus='$normalstatus',abnormalstatus='$abnormalstatus',vitalsabbr='$vitalsabbr',unitsabbr='$unitsabbr',units='$units',adulthigh='$adulthigh',adultlow='$adultlow',childhigh='$childhigh',childlow='$childlow',infanthigh='$infanthigh',infantlow='$infantlow',neonatehigh='$neonatehigh',neonatelow='$neonatelow',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteVitalSign"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM vitals WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Weight
if(isset($_POST['getWeight'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From weight Where weight Like '%$searchItem%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "weight" => $row["weight"],
                "age" => $row["age"],
                "sex" => $row["sex"],
                "lower" => $row["lower"],
                "upper" => $row["upper"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}


if(isset($_POST['getWeightById'])){
    $id = $_POST['id'];
    $query = "Select * From weight Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "weight" => $row["weight"],
        "age" => $row["age"],
        "sex" => $row["sex"],
        "lower" => $row["lower"],
        "upper" => $row["upper"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertWeight"])){
    $weight = $_POST['weight'];
    $upper = $_POST['upper'];
    //$agerange = $_POST['agerange'];
    $lower = $_POST['lower'];
    $age = $_POST['age'];
    $sex = $_POST['sex'];
    //$upperunit = $_POST['upperdatetype'];
    //$abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO weight(weight,upper,lower,age,sex,enteredby,entereddate) VALUES('$weight','$upper','$lower','$age','$sex','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["editweight"])){
    $id = $_POST['id'];
    $weight = $_POST['weight'];
    $upper = $_POST['upper'];
    //$agerange = $_POST['agerange'];
    $lower = $_POST['lower'];
    $age = $_POST['age'];
    $sex = $_POST['sex'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE weight SET weight='$weight',upper='$upper',lower='$lower',age='$age',sex='$sex',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


// if(isset($_POST["deleteWeight"])){
//     $id = $_POST['id'];
  
//     $query = "DELETE FROM weight WHERE id=$id";
//     $runquery = mysqli_query($conn, $query);
//     if(!$runquery){
//         die("Error: ".mysqli_error($conn));
//     }
//     echo "Delete Successful";
// }


// $query = "UPDATE weight SET weight='$weight',upper='$upper',lower='$lower',age='$age',sex='$sex',updateddate='$person, $entrydate' WHERE id=$id";
// $runquery = mysqli_query($conn, $query);
// if(!$runquery){
//     die("Error: ".mysqli_error($conn));
// }
// echo "Update Successful";
// }


if(isset($_POST["deleteWeight"])){
$id = $_POST['id'];

$query = "DELETE FROM weight WHERE id=$id";
$runquery = mysqli_query($conn, $query);
if(!$runquery){
    die("Error: ".mysqli_error($conn));
}
echo "Delete Successful";
}

//Frequency
if(isset($_POST['getFrequency'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From frequency Where frequency Like '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "frequency" => $row["frequency"],
                "abbreviation" => $row["abbreviation"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}


if(isset($_POST['getFrequencyById'])){
    $id = $_POST['id'];
    $query = "Select * From frequency Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "frequency" => $row["frequency"],
        "abbreviation" => $row["abbreviation"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertFrequency"])){
    $frequency = $_POST['frequency'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO frequency(departmentitemgroup,frequency,abbreviation,enteredby,entereddate) VALUES('$departmentitemgroup','$frequency','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["editFrequency"])){
    $id = $_POST['id'];
    $frequency = $_POST['frequency'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE frequency SET departmentitemgroup='$departmentitemgroup',frequency='$frequency',abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteFrequency"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM frequency WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Duration
if(isset($_POST['getDuration'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From duration Where duration Like '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "duration" => $row["duration"],
                "abbreviation" => $row["abbreviation"],
                "interpretation" => $row["interpretation"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}


if(isset($_POST['getDurationById'])){
    $id = $_POST['id'];
    $query = "Select * From duration Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "duration" => $row["duration"],
        "abbreviation" => $row["abbreviation"],
        "interpretation" => $row["interpretation"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertDuration"])){
    $duration = $_POST['duration'];
    $abbreviation = $_POST['abbreviation'];
    $interpretation = $_POST['interpretation'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO duration(departmentitemgroup,duration,abbreviation,interpretation,enteredby,entereddate) VALUES('$departmentitemgroup','$duration','$abbreviation','$interpretation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["editDuration"])){
    $id = $_POST['id'];
    $duration = $_POST['duration'];
    $abbreviation = $_POST['abbreviation'];
    $interpretation = $_POST['interpretation'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE duration SET departmentitemgroup='$departmentitemgroup', duration='$duration',abbreviation='$abbreviation',interpretation='$interpretation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteDuration"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM duration WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Dosage
if(isset($_POST['getDosage'])){
    $searchItem = $_POST['searchItem'];
   
    $query = "Select * From dosage Where dosage Like '%$searchItem%' Order By id DESC";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "dosage" => $row["dosage"],
                "abbreviation" => $row["abbreviation"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        echo "No Record Found";
        // set response code - 404 Not found
           // http_response_code(404);
       
           // // tell the user products does not exist
           // echo json_encode(
           //     array("message" => "No Record found")
           // );
    }
   
  
}


if(isset($_POST['getDosageById'])){
    $id = $_POST['id'];
    $query = "Select * From dosage Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "dosage" => $row["dosage"],
        "abbreviation" => $row["abbreviation"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["insertDosage"])){
    $dosage = $_POST['dosage'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO dosage(departmentitemgroup,dosage,abbreviation,enteredby,entereddate) VALUES('$departmentitemgroup','$dosage','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["editDosage"])){
    $id = $_POST['id'];
    $dosage = $_POST['dosage'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE dosage SET departmentitemgroup='$departmentitemgroup',dosage='$dosage',abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteDosage"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM dosage WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Item Class
if(isset($_POST["getItemClass"])){
    $searchItem = $_POST['searchItem'];
    $query = "SELECT departmentitemgroup.department,itemclass.* FROM departmentitemgroup,itemclass Where departmentitemgroup.departmentitemgroup=itemclass.departmentitemgroup AND (itemclass.itemclass LIKE '%$searchItem%' or itemclass.departmentitemgroup Like '%$searchItem%' or itemclass.classnote Like '%$searchItem%') Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemclass" => $row["itemclass"],
                "itemgroup" => $row["itemgroup"],
                "classnote" => $row["classnote"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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

if(isset($_POST["insertClassForm"])){
    $itemclass = $_POST['itemclass'];
    $itemgroup = $_POST['itemgroup'];
    $classnote = $_POST['classnote'];
    $departmentgrouping = $_POST['departmentgrouping'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemclass(itemclass,itemgroup,classnote,departmentitemgroup,enteredby,entereddate) VALUES('$itemclass','$itemgroup','$classnote','$departmentgrouping','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemClassById'])){
    $id = $_POST['id'];

    $query = "Select * From itemclass Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemclass" => $row["itemclass"],
        "itemgroup" => $row["itemgroup"],
        "classnote" => $row["classnote"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST['getItemClassByGenericName'])){
    $id = $_POST['genericname'];

    $query = "Select itemclass From itemgenericname Where genericname='".$id."'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
       
        "itemclass" => $row["itemclass"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemClass"])){
    $id = $_POST['id'];
    $departmentgrouping = $_POST['departmentgrouping'];
    $itemclass = $_POST['itemclass'];
    $previousitemclass = $_POST['previousitemclass'];
    $itemgroup = $_POST['itemgroup'];
    $classnote = $_POST['classnote'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemclass SET itemclass='$itemclass', departmentitemgroup='$departmentgrouping', itemgroup='$itemgroup', classnote='$classnote',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
    $query = "UPDATE itemsubclass SET itemclass='$itemclass', departmentitemgroup='$departmentgrouping', itemgroup='$itemgroup' WHERE itemclass='$previousitemclass'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Sub Class".mysqli_error($conn));
    }
    $query = "UPDATE itemgenericname SET itemclass='$itemclass', departmentitemgroup='$departmentgrouping', itemgroup='$itemgroup' WHERE itemclass='$previousitemclass'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Generic Name".mysqli_error($conn));
    }
    $query = "UPDATE item SET usageclass='$itemclass', departmentitemgroup='$departmentgrouping', usagegroup='$itemgroup' WHERE usageclass='$previousitemclass'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Generic Name".mysqli_error($conn));
    }
}


if(isset($_POST["deleteItemClass"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemclass WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Item Sub-Class
if(isset($_POST["getSubClass"])){
    $searchItem = $_POST['searchItem'];
    //$query = "Select * From itemclass Where itemclass Like '%$searchItem%' Or itemgroup Like '%$searchItem%' Or classnote Like '%$searchItem%'  Order By id DESC";
 
    $query = "SELECT departmentitemgroup.department,itemsubclass.* FROM departmentitemgroup,itemsubclass Where departmentitemgroup.departmentitemgroup=itemsubclass.departmentitemgroup AND (itemsubclass.itemsubclass LIKE '%$searchItem%' or itemsubclass.departmentitemgroup Like '%$searchItem%' or itemsubclass.subclassnote LIKE '%$searchItem%' or itemsubclass.itemclass Like '%$searchItem%')  Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemsubclass" => $row["itemsubclass"],
                "itemclass" => $row["itemclass"],
                "itemgroup" => $row["itemgroup"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "subclassnote" => $row["subclassnote"]
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

if(isset($_POST["getDeptItemGrpSubClass"])){
    $selectsubclass = $_POST['selectsubclass'];
    //$query = "Select * From itemclass Where itemclass Like '%$searchItem%' Or itemgroup Like '%$searchItem%' Or classnote Like '%$searchItem%'  Order By id DESC";
 
    $query = "Select * From itemsubclass Where itemclass = '$selectsubclass'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemsubclass" => $row["itemsubclass"],
                "itemclass" => $row["itemclass"],
                "itemgroup" => $row["itemgroup"],
                "subclassnote" => $row["subclassnote"]
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
                "id" => "0",
                "itemsubclass" => "No Sub-Class",
                "itemclass" => "No Class",
                "itemgroup" => "No Group",
                "subclassnote" => "No Class"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertSubClassForm"])){
    $itemclass = $_POST['itemclass'];
    $itemgroup = $_POST['itemgroup'];
    $subclassnote = $_POST['subclassnote'];
    $itemsubclass = $_POST['itemsubclass'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemsubclass(itemsubclass,itemclass,itemgroup,subclassnote,departmentitemgroup,enteredby,entereddate) VALUES('$itemsubclass','$itemclass','$itemgroup','$subclassnote','$departmentitemgroup','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemSubClassById'])){
    $id = $_POST['id'];

    $query = "Select * From itemsubclass Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemsubclass" => $row["itemsubclass"],
        "itemclass" => $row["itemclass"],
        "itemgroup" => $row["itemgroup"],
        "subclassnote" => $row["subclassnote"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST['getItemSubClassByGenericName'])){
    $id = $_POST['genericname'];

    $query = "Select itemsubclass From itemgenericname Where genericname='".$id."'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
       
        "itemsubclass" => $row["itemsubclass"]
       
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemSubClass"])){
    $id = $_POST['id'];
    $itemsubclass = $_POST['itemsubclass'];
    $previoussubclass = $_POST['previoussubclass'];
    $itemclass = $_POST['itemclass'];
    $itemgroup = $_POST['itemgroup'];
    $subclassnote = $_POST['subclassnote'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemsubclass SET itemsubclass='$itemsubclass', itemclass='$itemclass', itemgroup='$itemgroup', subclassnote='$subclassnote',departmentitemgroup='$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
    $query = "UPDATE itemgenericname SET itemsubclass='$itemsubclass', itemclass='$itemclass', itemgroup='$itemgroup',departmentitemgroup='$departmentitemgroup' WHERE itemsubclass='$previoussubclass'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item GenericName".mysqli_error($conn));
    }
    $query = "UPDATE item SET usagesubclass='$itemsubclass', usageclass='$itemclass', usagegroup='$itemgroup',departmentitemgroup='$departmentitemgroup' WHERE usagesubclass='$previoussubclass'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item".mysqli_error($conn));
    }
}


if(isset($_POST["deleteItemSubClass"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemsubclass WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Item State
if(isset($_POST["getItemState"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From itemstate Where itemstate Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemstate" => $row["itemstate"]
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

if(isset($_POST["insertItemState"])){
    $itemstate = $_POST['itemstate'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemstate(itemstate,enteredby,entereddate) VALUES('$itemstate','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemStateById'])){
    $id = $_POST['id'];
    $query = "Select * From itemstate Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemstate" => $row['itemstate']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemState"])){
    $id = $_POST['id'];
    $itemstate = $_POST['itemstate'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemstate SET itemstate='$itemstate',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemState"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemstate WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Usage Route Type
if(isset($_POST["getUsageRouteType"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From usageroutetype Where usageroutetype Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "usageroutetype" => $row["usageroutetype"]
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

if(isset($_POST["insertUsageRouteType"])){
    $usageroutetype = $_POST['usageroutetype'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO usageroutetype(usageroutetype,departmentitemgroup,enteredby,entereddate) VALUES('$usageroutetype','$departmentitemgroup','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getUsageRouteTypeById'])){
    $id = $_POST['id'];
    $query = "Select * From usageroutetype Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "usageroutetype" => $row['usageroutetype'],
        "departmentitemgroup" => $row['departmentitemgroup']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editUsageRouteType"])){
    $id = $_POST['id'];
    $usageroutetype = $_POST['usageroutetype'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE usageroutetype SET usageroutetype='$usageroutetype',departmentitemgroup='$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteUsageRouteType"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM usageroutetype WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Usage Group Type
if(isset($_POST["getUsageGroupType"])){
    $searchItem = $_POST["searchUsageGroupType"];
    $query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemusage" => $row["itemusage"]
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

if(isset($_POST["insertUsageGroupType"])){
    $usagegrouptype = $_POST['usagegrouptype'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemusage(itemusage,enteredby,entereddate) VALUES('$usagegrouptype','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getUsageGroupTypeById'])){
    $id = $_POST['id'];
    $query = "Select * From itemusage Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemusage" => $row['itemusage']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editUsageGroupType"])){
    $id = $_POST['id'];
    $usagegrouptype = $_POST['usagegrouptype'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemusage SET itemusage='$usagegrouptype',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteUsageGroupType"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemusage WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Item Default Strength

if(isset($_POST["getItemStrength"])){
    $query = "Select * From itemstrength";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "itemstrength" => $row["itemstrength"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertItemStrength"])){
    $itemstrength = $_POST['itemstrength'];
    $unit = $_POST['unit'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemstrength(itemstrength,unit,abbreviation,enteredby,entereddate) VALUES('$itemstrength','$unit','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getItemStrengthById'])){
    $id = $_POST['id'];
    $query = "Select * From itemstrength Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "itemstrength" => $row['itemstrength'],
        "unit" => $row['unit'],
        "abbreviation" => $row['abbreviation']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemStrength"])){
    $id = $_POST['id'];
    $itemstrength = $_POST['itemstrength'];
    $unit = $_POST['unit'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemstrength SET itemstrength='$itemstrength',unit='$unit',abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemStrength"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemstrength WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Main Department Creation

if(isset($_POST["getDepartment"])){

    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,department,code From department Where department Like '%$searchItem%' Or code Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "department" => $row["department"],
                "code" => $row["code"]
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

if(isset($_POST["getDepartmentByGenericName"])){

    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    $combined = $_POST["combined"];

    if($combined=="True"){
        $query = "Select * From itemgenericname Where genericnamecb = '$searchItem' Order By id DESC";
        $runquery = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($runquery);
        $searchItem = $row["genericname"];
    }

    $query = "Select * From itemgenericname Where genericname = '$searchItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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
                "id" => "0",
                "department" => "No Department"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertDepartment"])){
    $departmentcode = $_POST['departmentcode'];
    $department = $_POST['department'];
    //$abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO department(department,code,enteredby,entereddate) VALUES('$department','$departmentcode','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getDepartmentById'])){
    $id = $_POST['id'];
    $query = "Select id,department,code From department Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "department" => $row['department'],
        "code" => $row['code']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editDepartment"])){
    $id = $_POST['id'];
    $departmentcode = $_POST['departmentcode'];
    $department = $_POST['department'];
    $updatedepartment = $_POST['updatedepartment'];
    //$abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE department SET department='$department',code='$departmentcode',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $query = "UPDATE departmentitemgroup SET department='$department' WHERE department='$updatedepartment'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    $query = "UPDATE item SET department='$department' WHERE department='$updatedepartment'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";

}


if(isset($_POST["deleteDepartment"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM department WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Item Weight
if(isset($_POST["getItemWeight"])){
    $searchform = $_POST["searchItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemweight Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["getItemWeightCombo"])){
    $searchform = $_POST["searchItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemweight Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getItemWeightByDepartmentItemGrouping"])){
    $searchform = $_POST["searchItem"];
    $state = $_POST["state"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemweight Where departmentitemgroup = '$searchform' And state='$state' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertWeightForm"])){
    $unit = $_POST['unit'];
    $state = $_POST['weightstate'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemweight(unit,abbreviation,state,departmentitemgroup,enteredby,entereddate) VALUES('$unit','$abbreviation','$state','$departmentitemgroup','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemWeightById'])){
    $id = $_POST['id'];

    $query = "Select * From itemweight Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "unit" => $row["unit"],
        "abbreviation" => $row["abbreviation"],
        "state" => $row["state"],
        "departmentitemgroup" => $row["departmentitemgroup"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemWeight"])){
    $id = $_POST['id'];
    $unit = $_POST['unit'];
    $state = $_POST['weightstate'];
    $departmentitemgroup = $_POST['weightdeptitemgroup'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemweight SET unit='$unit', state='$state', departmentitemgroup='$departmentitemgroup', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemWeight"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemweight WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Item Extra Unit
if(isset($_POST["getExtraUnit"])){
    $searchform = $_POST["searchItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemextraunit Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "state" => $row["state"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["getExtraUnitCombo"])){
    $searchform = $_POST["searchItem"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemextraunit Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getExtraUnitByDepartmentItemGroup"])){
    $searchform = $_POST["searchItem"];
    $state = $_POST['state'];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemextraunit Where state = '$state' And departmentitemgroup = '$searchform' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getLengthByDepartmentItemGroup"])){
    $searchform = $_POST["searchItem"];
    $state = $_POST['state'];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemlength Where state = '$state' And departmentitemgroup = '$searchform' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"]." length",
                "abbreviation" => $row["abbreviation"]." length"
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
                "id" => "0",
                "unit" => "No Length Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["insertExtraUnitForm"])){
    $unit = $_POST['unit'];
    $state = $_POST['extraunitstate'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $abbreviation = $_POST['abbreviation'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemextraunit(unit,state,departmentitemgroup,abbreviation,enteredby,entereddate) VALUES('$unit','$state','$departmentitemgroup','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getExtraUnitById'])){
    $id = $_POST['id'];

    $query = "Select * From itemextraunit Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "unit" => $row["unit"],
        "abbreviation" => $row["abbreviation"],
        "state" => $row["state"],
        "departmentitemgroup" => $row['departmentitemgroup']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editExtraUnit"])){
    $id = $_POST['id'];
    $unit = $_POST['unit'];
    $state = $_POST['extraunitstate'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemextraunit SET unit='$unit', state='$state', departmentitemgroup='$departmentitemgroup', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteExtraUnit"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemextraunit WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Item Volume
if(isset($_POST["getItemVolume"])){
    
    $searchform = $_POST["searchVolume"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";

    $query = "Select * From itemvolume Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
    
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["getItemVolumeCombo"])){
    
    $searchform = $_POST["searchVolume"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";

    $query = "Select * From itemvolume Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
    
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
    
            array_push($exam_arr["records"], $exam_item);
        
        
        // set response code - 200 OK
        http_response_code(200);
        
        // make it json format
        echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertVolumeForm"])){
    $unit = $_POST['unit'];
    $state = $_POST['volumestate'];
    $abbreviation = $_POST['abbreviation'];
    $volumedeptitemgroup = $_POST['volumedeptitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemvolume(unit,state,departmentitemgroup,abbreviation,enteredby,entereddate) VALUES('$unit','$state','$volumedeptitemgroup','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemVolumeById'])){
    $id = $_POST['id'];

    $query = "Select * From itemvolume Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "unit" => $row["unit"],
        "state" => $row["state"],
        "departmentitemgroup" => $row["departmentitemgroup"],
        "abbreviation" => $row["abbreviation"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["getItemVolumeByDepartmentItemGrouping"])){
    $searchform = $_POST["searchItem"];
    $state = $_POST["state"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemvolume Where departmentitemgroup = '$searchform' And state='$state' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getItemLengthByDepartmentItemGrouping"])){
    $searchform = $_POST["searchItem"];
    $state = $_POST["state"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemlength Where departmentitemgroup = '$searchform' And state='$state' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["editItemVolume"])){
    $id = $_POST['id'];
    $unit = $_POST['unit'];
    $state = $_POST['volumestate'];
    $departmentitemgroup = $_POST['volumedeptitemgroup'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemvolume SET unit='$unit', state='$state', departmentitemgroup='$departmentitemgroup', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemVolume"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemvolume WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Item Length
if(isset($_POST["getItemLength"])){
    
    $searchform = $_POST["searchLength"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemlength Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertLengthForm"])){
    $unit = $_POST['unit'];
    $state = $_POST['lengthstate'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['lengthdepartmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemlength(unit,state,departmentitemgroup,abbreviation,enteredby,entereddate) VALUES('$unit','$state','$departmentitemgroup','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemLengthById'])){
    $id = $_POST['id'];

    $query = "Select * From itemlength Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "unit" => $row["unit"],
        "abbreviation" => $row["abbreviation"],
        "state" => $row["state"],
        "departmentitemgroup" => $row["departmentitemgroup"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemLength"])){
    $id = $_POST['id'];
    $unit = $_POST['unit'];
    $state = $_POST['state'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemlength SET unit='$unit', state='$state', departmentitemgroup='$departmentitemgroup', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemLength"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemlength WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Item service
if(isset($_POST["getItemservice"])){
    
    $searchform = $_POST["searchservice"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemservice Where unit Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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


if(isset($_POST["getItemServiceByDepartmentItemGrouping"])){
    $searchform = $_POST["searchItem"];
    $state = $_POST["state"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From itemservice Where departmentitemgroup = '$searchform' And state='$state' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "unit" => "No Unit",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["insertserviceForm"])){
    $unit = $_POST['unit'];
    $state = $_POST['servicestate'];
    $abbreviation = $_POST['abbreviation'];
    $departmentitemgroup = $_POST['servicedepartmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemservice(unit,state,departmentitemgroup,abbreviation,enteredby,entereddate) VALUES('$unit','$state','$departmentitemgroup','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemserviceById'])){
    $id = $_POST['id'];

    $query = "Select * From itemservice Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "unit" => $row["unit"],
        "abbreviation" => $row["abbreviation"],
        "state" => $row["state"],
        "departmentitemgroup" => $row["departmentitemgroup"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemservice"])){
    $id = $_POST['id'];
    $unit = $_POST['unit'];
    $state = $_POST['state'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemservice SET unit='$unit', state='$state', departmentitemgroup='$departmentitemgroup', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemservice"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemservice WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}



//Item Formulation
if(isset($_POST["getItemPerFormulation"])){
    $query = "Select * From itemperformulation";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "state" => $row["state"],
                "unit" => $row["unit"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertPerFormulationForm"])){
    $unit = $_POST['unit'];
    $state = $_POST['state'];
    $abbreviation = $_POST['abbreviation'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemperformulation(state,unit,abbreviation,enteredby,entereddate) VALUES('$state','$unit','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getItemPerFormulationById'])){
    $id = $_POST['id'];

    $query = "Select * From itemperformulation Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "state" => $row["state"],
        "unit" => $row["unit"],
        "abbreviation" => $row["abbreviation"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editItemFormulation"])){
    $id = $_POST['id'];
    $unit = $_POST['unit'];
    $state = $_POST['state'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemperformulation SET state='$state', unit='$unit', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteItemFormulation"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemperformulation WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Container
if(isset($_POST["getContainer"])){

    $searchform = $_POST["searchContainer"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From container Where container Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "container" => $row["container"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["getDeptItemGrpContainer"])){

    $searchform = $_POST["searchContainer"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From container Where container Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "container" => $row["container"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "container" => "No Container",
                "abbreviation" => "Abbreviation"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getItemContainerByDepartmentItemGrouping"])){

    $searchform = $_POST["searchContainer"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From container Where departmentitemgroup = '$searchform' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "container" => $row["container"],
                "abbreviation" => $row["abbreviation"]
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
                "id" => "0",
                "container" => "No Container",
                "abbreviation" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertContainer"])){
    $container = $_POST['container'];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $abbreviation = $_POST['abbreviation'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO container(container,departmentitemgroup,abbreviation,enteredby,entereddate) VALUES('$container','$departmentitemgroup','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getContainerById'])){
    $id = $_POST['id'];

    $query = "Select * From container Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "container" => $row["container"],
        "abbreviation" => $row["abbreviation"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editContainer"])){
    $id = $_POST['id'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $container = $_POST['container'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE container SET container='$container', departmentitemgroup = '$departmentitemgroup', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteContainer"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM container WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Specimen
if(isset($_POST["getSpecimen"])){

    $searchform = $_POST["searchSpecimen"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From specimen Where specimen Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "specimen" => $row["specimen"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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

if(isset($_POST["getDeptItemGrpSpecimen"])){

    $searchform = $_POST["searchSpecimen"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From specimen Where specimen Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "specimen" => $row["specimen"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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
                "id" => "0",
                "specimen" => "No Specimen",
                "departmentitemgroup" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getItemSpecimenByDepartmentItemGrouping"])){

    $searchform = $_POST["searchSpecimen"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From specimen Where departmentitemgroup = '$searchform' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "specimen" => $row["specimen"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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
                "id" => "0",
                "specimen" => "No Specimen",
                "departmentitemgroup" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertSpecimen"])){
    $specimen = $_POST['specimen'];
    $departmentitemgroup = $_POST["departmentitemgroup"];
   
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO specimen(specimen,departmentitemgroup,enteredby,entereddate) VALUES('$specimen','$departmentitemgroup','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getSpecimenById'])){
    $id = $_POST['id'];

    $query = "Select * From specimen Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "specimen" => $row["specimen"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editSpecimen"])){
    $id = $_POST['id'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $specimen = $_POST['specimen'];
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE specimen SET specimen='$specimen', departmentitemgroup = '$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteSpecimen"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM specimen WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Sample
if(isset($_POST["getSample"])){

    $searchform = $_POST["searchSample"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From sample Where sample Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "sample" => $row["sample"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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

//Lab Test
if(isset($_POST["getLabTest"])){

    $searchform = $_POST["searchlabtest"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From laboratorytest Where laboratorytest Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "laboratorytest" => $row["laboratorytest"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"],
                "note" => $row["note"]
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

if(isset($_POST["getLabTestComponents"])){

    $searchform = $_POST["searchlabtestcomponent"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From laboratorytestcomponent Where laboratorytest Like '%$searchform%' Or component Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "laboratorytest" => $row["laboratorytest"],
                "component" => $row["component"],
                "lowerlimit" => $row["lowerlimit"],
                "upperlimit" => $row["upperlimit"],
                "values" => $row["details"],
                "unit" => $row["unit"],
                "note" => $row["note"]
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



if(isset($_POST["getDeptItemGrpSample"])){

    $searchform = $_POST["searchSample"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From sample Where sample Like '%$searchform%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "sample" => $row["sample"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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
                "id" => "0",
                "sample" => "No Sample",
                "departmentitemgroup" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


if(isset($_POST["getItemSampleByDepartmentItemGrouping"])){

    $searchform = $_POST["searchSample"];
    //$query = "Select * From itemstate Where itemform Like '%$searchItem%' Order By id DESC";
  
    $query = "Select * From sample Where departmentitemgroup = '$searchform' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "sample" => $row["sample"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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
                "id" => "0",
                "sample" => "No Sample",
                "departmentitemgroup" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertSample"])){
    $sample = $_POST['sample'];
    $departmentitemgroup = $_POST["departmentitemgroup"];
   
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO sample(sample,departmentitemgroup,enteredby,entereddate) VALUES('$sample','$departmentitemgroup','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["insertLabTest"])){
    $itemclass = $_POST['itemclass'];
    $itemsubclass = $_POST["itemsubclass"];
    $labtest = $_POST['labtest'];
    $labtestnote = $_POST["labtestnote"];
   
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO laboratorytest(laboratorytest,itemclass,itemsubclass,note,enteredby,entereddate) VALUES('$labtest','$itemclass','$itemsubclass','$labtestnote','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["insertLabTestComponent"])){
    $details = $_POST['values'];
    $upper = $_POST["componentupper"];
    $lower = $_POST["componentlower"];
    $unit = $_POST["componentunit"];
    $component = $_POST["component"];
    $labtest = $_POST['labtest'];
    $note = $_POST["labtestcomponentnote"];
   
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO laboratorytestcomponent(laboratorytest,component,unit,upperlimit,lowerlimit,details,note,enteredby,entereddate) VALUES(
                                                '$labtest','$component','$unit','$upper','$lower','$details','$note','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getSampleById'])){
    $id = $_POST['id'];

    $query = "Select * From sample Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "sample" => $row["sample"],
        "departmentitemgroup" => $row["departmentitemgroup"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editSample"])){
    $id = $_POST['id'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $sample = $_POST['sample'];
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE sample SET sample='$sample', departmentitemgroup = '$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}




if(isset($_POST["deleteSample"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM sample WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Lab Tests Operations
if(isset($_POST['getLabTestById'])){
    $id = $_POST['id'];

    $query = "Select * From laboratorytest Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "laboratorytest" => $row["laboratorytest"],
        "itemclass" => $row["itemclass"],
        "itemsubclass" => $row["itemsubclass"],
        "note" => $row["note"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST['getLabTestComponentById'])){
    $id = $_POST['id'];

    $query = "Select * From laboratorytestcomponent Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" => $row["id"],
        "laboratorytest" => $row["laboratorytest"],
        "component" => $row["component"],
        "lowerlimit" => $row["lowerlimit"],
        "upperlimit" => $row["upperlimit"],
        "values" => $row["details"],
        "unit" => $row["unit"],
        "note" => $row["note"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editLabTest"])){
    $id = $_POST['id'];
    $itemclass = $_POST['itemclass'];
    $itemsubclass = $_POST["itemsubclass"];
    $labtest = $_POST['labtest'];
    $labtestnote = $_POST["labtestnote"];
   
   
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE laboratorytest SET laboratorytest='$labtest', itemclass = '$itemclass',itemsubclass = '$itemsubclass',note = '$labtestnote',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}

if(isset($_POST["editLabTestComponent"])){
    $id = $_POST['id'];
    $details = $_POST['values'];
    $upper = $_POST["componentupper"];
    $lower = $_POST["componentlower"];
    $unit = $_POST["componentunit"];
    $component = $_POST["component"];
    $labtest = $_POST['labtest'];
    $note = $_POST["labtestcomponentnote"];
   
    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE laboratorytestcomponent SET laboratorytest='$labtest', component = '$component',unit = '$unit',note = '$note',upperlimit='$upper',lowerlimit='$lower',details='$details',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteLabTest"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM laboratorytest WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["deleteLabTestComponent"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM laboratorytestcomponent WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Gas Usage Route
if(isset($_POST["getGasUsageRoute"])){
    $query = "Select * From usageroute Where usageroutetype='Gas Usage Routes'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "usageroute" => $row["usageroute"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertGasUsageRoute"])){
    $gasusageroute = $_POST['gasusageroute'];
   
    $abbreviation = $_POST['abbreviation'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO gasusageroute(gasusageroute,abbreviation,enteredby,entereddate) VALUES('$gasusageroute','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getGasUsageRouteById'])){
    $id = $_POST['id'];

    $query = "Select * From gasusageroute Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "gasusageroute" => $row["gasusageroute"],
        "abbreviation" => $row["abbreviation"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editGasUsageRoute"])){
    $id = $_POST['id'];
   
    $gasusageroute = $_POST['gasusageroute'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE gasusageroute SET state='$gasusageroute', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteGasUsageRoute"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM gasusageroute WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Drug Usage Route
if(isset($_POST["getDrugUsageRoute"])){
    $query = "Select * From drugusageroute";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "drugusageroute" => $row["drugusageroute"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertDrugUsageRoute"])){
    $drugusageroute = $_POST['drugusageroute'];
   
    $abbreviation = $_POST['abbreviation'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO drugusageroute(drugusageroute,abbreviation,enteredby,entereddate) VALUES('$drugusageroute','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getDrugUsageRouteById'])){
    $id = $_POST['id'];

    $query = "Select * From drugusageroute Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "drugusageroute" => $row["drugusageroute"],
        "abbreviation" => $row["abbreviation"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editDrugUsageRoute"])){
    $id = $_POST['id'];
   
    $drugusageroute = $_POST['drugusageroute'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE drugusageroute SET state='$drugusageroute', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteDrugUsageRoute"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM drugusageroute WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Service Route
if(isset($_POST["getServiceRoute"])){
    $query = "Select * From usageroute Where usageroutetype = 'Service'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "usageroute" => $row["usageroute"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertServiceRoute"])){
    $serviceroute = $_POST['serviceroute'];
   
    $abbreviation = $_POST['abbreviation'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO serviceroute(serviceroute,abbreviation,enteredby,entereddate) VALUES('$serviceroute','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getServiceRouteById'])){
    $id = $_POST['id'];

    $query = "Select * From serviceroute Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "serviceroute" => $row["serviceroute"],
        "abbreviation" => $row["abbreviation"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editServiceRoute"])){
    $id = $_POST['id'];
   
    $serviceroute = $_POST['serviceroute'];
    $abbreviation = $_POST['abbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE serviceroute SET state='$serviceroute', abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteServiceRoute"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM serviceroute WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Sub Department
if(isset($_POST["getSubDepartment"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select * From subdepartment Where subdepartment Like '%$searchItem%' Or department Like '%$searchItem%' Or subdepartmentcode Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "subdepartmentcode" => $row["subdepartmentcode"]
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

// if(isset($_POST["getSubDepartment"])){
//     $searchItem = $_POST["searchItem"];
//     //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

//     $query = "Select * From subdepartment Where subdepartment Like '%$searchItem%' Or department Like '%$searchItem%' Or subdepartmentcode Like '%$searchItem%' Order By id DESC";
//     $run_query = mysqli_query($conn, $query);
//     if(mysqli_num_rows($run_query)>0){
       
//         $exam_arr=array();
//         $exam_arr["records"]=array();

//         while( $row = mysqli_fetch_array($run_query)){
//             $exam_item=array(
//                 "id" => $row["id"],
//                 "subdepartment" => $row["subdepartment"],
//                 "department" => $row["department"],
//                 "subdepartmentcode" => $row["subdepartmentcode"]
//             );
      
//             array_push($exam_arr["records"], $exam_item);
          
//         }
//           // set response code - 200 OK
//           http_response_code(200);
        
//           // make it json format
//           echo json_encode($exam_arr);
//     } else{
//         echo "No Record Found";
//          // set response code - 404 Not found
//             // http_response_code(404);
        
//             // // tell the user products does not exist
//             // echo json_encode(
//             //     array("message" => "No Record found")
//             // );
//     }
// }

if(isset($_POST["getSubDepartmentByDept"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select * From subdepartment Where department = '$searchItem' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "subdepartmentcode" => $row["subdepartmentcode"]
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
                "id" => "0",
                "subdepartment" => "No Sub-Department",
                "department" => "No Department",
                "subdepartmentcode" => ""
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["insertSubDepartment"])){
    $subdepartment = $_POST['subdepartment'];
    $department = $_POST['department'];
    $subdepartmentcode = $_POST['subdepartmentcode'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO subdepartment(department,departmentitemgroup,subdepartment,subdepartmentcode,enteredby,entereddate) VALUES('$department','$departmentitemgroup','$subdepartment','$subdepartmentcode','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getSubDepartmentById'])){
    $id = $_POST['id'];

    $query = "Select * From subdepartment Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "subdepartment" => $row["subdepartment"],
        "department" => $row["department"],
        "departmentitemgroup" => $row["departmentitemgroup"],
        "subdepartmentcode" => $row["subdepartmentcode"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}


if(isset($_POST['getSubDepartmentByDepartment'])){
    $department = $_POST['searchItem'];

    $query = "Select * From subdepartment Where department='$department'";
    //echo $query;
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "subdepartmentcode" => $row["subdepartmentcode"]
                
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "subdepartment" => "No Sub Department",
                "department" => $department,
                "subdepartmentcode" => ""
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
        }
        
       
    }
   
  


if(isset($_POST["editSubDepartment"])){
    $id = $_POST['id'];
    $department = $_POST['department'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $subdepartmentcode = $_POST['subdepartmentcode'];
    $subdepartment = $_POST['subdepartment'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE subdepartment SET subdepartment='$subdepartment', department='$department', departmentitemgroup='$departmentitemgroup', subdepartmentcode='$subdepartmentcode',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteSubDepartment"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM subdepartment WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Department Item Group
if(isset($_POST["getDepartmentItemGroup"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select * From departmentitemgroup Where department Like '%$searchItem%' Or departmentitemgroup Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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

if(isset($_POST["getDepartmentItemGroupDetails"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select * From departmentitemgroup Where departmentitemgroup Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "itemgrouptype" => $row["itemgrouptype"],
                "formulation" => $row["formulation"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"],
                "usageroutetype" => $row["usageroutetype"],
                "usageroute" => $row["usageroute"],
                "container" => $row["container"],
                "itemweight" => $row["itemweight"],
                "itemvolume" => $row["itemvolume"],
                "itemextraunit" => $row["itemextraunit"]
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
                "id" => "0",
                "subdepartment" => "nil",
                "department" => "nil",
                "departmentitemgroup" => "nil",
                "itemgrouptype" => "nil",
                "formulation" => "nil",
                "itemgroup" => "nil",
                "itemclass" => "nil",
                "itemsubclass" => "nil",
                "usageroutetype" => "nil",
                "usageroute" => "nil",
                "container" => "nil",
                "itemweight" => "nil",
                "itemvolume" => "nil",
                "itemextraunit" => "nil"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getDepartmentItemGroupSetup"])){
    $searchItem = $_POST["searchDeptItemGroup"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select * From departmentitemgroup Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "itemgrouptype" => $row["itemgrouptype"],
                "formulation" => $row["formulation"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"],
                "usageroutetype" => $row["usageroutetype"],
                "usageroute" => $row["usageroute"],
                "container" => $row["container"],
                "itemweight" => $row["itemweight"],
                "itemvolume" => $row["itemvolume"],
                "itemextraunit" => $row["itemextraunit"]
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
                "id" => "0",
                "subdepartment" => "nil",
                "department" => "nil",
                "departmentitemgroup" => "nil",
                "itemgrouptype" => "nil",
                "formulation" => "nil",
                "itemgroup" => "nil",
                "itemclass" => "nil",
                "itemsubclass" => "nil",
                "usageroutetype" => "nil",
                "usageroute" => "nil",
                "container" => "nil",
                "itemweight" => "nil",
                "itemvolume" => "nil",
                "itemextraunit" => "nil"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getDepartmentItemGroupBySubDept"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select * From departmentitemgroup Where subdepartment Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"]
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
                "id" => "0",
                "subdepartment" => "No Sub Dept",
                "department" => "No Dept",
                "departmentitemgroup" => "No Department Item Group"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST['getItemClassByItemGroup'])){
    $selectusagegroup = $_POST['searchItem'];
   
    $query = "Select * From itemclass Where itemgroup='$selectusagegroup'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemclass" => $row["itemclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemclass" => "No Item Class"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemClassByDeptItemGroup'])){
    $selectusagegroup = $_POST['searchItem'];
   
    $query = "Select * From itemclass Where departmentitemgroup LIKE '%$selectusagegroup%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemclass" => $row["itemclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemclass" => "No Item Class"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemClassByDeptItemGroupSearchClass'])){
    $selectusagegroup = $_POST['searchItem'];
    $searchclass = $_POST['searchclass'];
    $query = "Select * From itemclass Where departmentitemgroup LIKE '%$selectusagegroup%' AND itemclass LIKE '%$searchclass%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemclass" => $row["itemclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemclass" => "No Item Class",
                "query" => $query
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemSubClassByDeptItemGroupSearchClass'])){
    $selectusagegroup = $_POST['searchItem'];
    $searchclass = $_POST['searchclass'];
    $query = "Select * From itemsubclass Where departmentitemgroup LIKE '%$selectusagegroup%' AND itemsubclass LIKE '%$searchclass%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemsubclass" => $row["itemsubclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemsubclass" => "No Item Sub Class",
                "query" => $query
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemSubClassByClass'])){
    $selectusageclass = $_POST['selectsubclassclass'];
   
    $query = "Select * From itemsubclass Where itemclass='$selectusageclass'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemsubclass" => $row["itemsubclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemsubclass" => "No Item Sub-Class"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getFormByDeptItemGroup'])){
    $selectusageclass = $_POST['selectsubclassclass'];
   
    $query = "Select * From itemform Where departmentitemgroup LIKE '%$selectusageclass%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemform" => $row["itemform"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemform" => "No Item Form"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getFormByDeptItemGroupSearch'])){
    $selectusageclass = $_POST['selectsubclassclass'];
    $searchform = $_POST['searchform'];
    $query = "Select * From itemform Where departmentitemgroup LIKE '%$selectusageclass%' AND itemform LIKE '%$searchform%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemform" => $row["itemform"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemform" => "No Item Form"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemSubClassByDeptItemGroup'])){
    $selectusageclass = $_POST['selectsubclassclass'];
   
    $query = "Select * From itemsubclass Where departmentitemgroup LIKE '%$selectusageclass%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemsubclass" => $row["itemsubclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemsubclass" => "No Item Sub-Class"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemSubClassByDeptItemGroupSearchSubClass'])){
    $selectusageclass = $_POST['selectsubclassclass'];
   
    $searchsubclass = $_POST['searchsubclass'];

    $query = "Select * From itemsubclass Where departmentitemgroup LIKE '%$selectusageclass%' AND itemsubclass LIKE '%$searchsubclass%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemsubclass" => $row["itemsubclass"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemsubclass" => "No Item Sub-Class"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}


if(isset($_POST["insertDepartmentItemGroupForm"])){
    // $subdepartment = $_POST['subdepartment'];
    $department = $_POST['department'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO departmentitemgroup(department,departmentitemgroup,enteredby,entereddate) VALUES('$department','$departmentitemgroup','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getDepartmentItemGroupById'])){
    $id = $_POST['id'];

    $query = "Select * From departmentitemgroup Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "subdepartment" => $row["subdepartment"],
        "department" => $row["department"],
        "departmentitemgroup" => $row["departmentitemgroup"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}


// if(isset($_POST['getSubDepartmentByDepartment'])){
//     $department = $_POST['department'];

//     $query = "Select * From subdepartment Where department='$department'";
//     $runquery = mysqli_query($conn, $query);
//     $countrows = mysqli_num_rows($runquery);
//     if($countrows>0){
//         $row = mysqli_fetch_assoc($runquery);
//             $product_arr = array(
//                 "id" =>  $row['id'],
//                 "subdepartment" => $row["subdepartment"],
//                 "department" => $row["department"],
//                 "departmentitemgroup" => $row["departmentitemgroup"]
                
//             );
            
//             // set response code - 200 OK
//             http_response_code(200);
        
//             // make it json format
//             echo json_encode($product_arr);
//     } else {
//         $row = mysqli_fetch_assoc($runquery);
//         $product_arr = array(
//             "id" =>  "0",
//             "subdepartment" => "No Sub Department",
//             "department" => $department,
//             "departmentitemgroup" => ""
            
//         );
        
//         // set response code - 200 OK
//         http_response_code(200);
    
//         // make it json format
//         echo json_encode($product_arr);
//     }
   
  
// }

if(isset($_POST["editDepartmentItemGroup"])){
    $id = $_POST['id'];
    // $subdepartment = $_POST['subdepartment'];
    $department = $_POST['department'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $previousdepartmentitemgroup = $_POST['previousdepartmentitemgroup'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    
       
    $query = "UPDATE departmentitemgroup SET department='$department',departmentitemgroup='$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
    $query = "UPDATE itemgroup SET departmentitemgroup='$departmentitemgroup' WHERE departmentitemgroup='$previousdepartmentitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Group".mysqli_error($conn));
    }
    $query = "UPDATE itemclass SET departmentitemgroup='$departmentitemgroup' WHERE departmentitemgroup='$previousdepartmentitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item Class".mysqli_error($conn));
    }
    $query = "UPDATE itemsubclass SET departmentitemgroup='$departmentitemgroup' WHERE departmentitemgroup='$previousdepartmentitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item SubClass".mysqli_error($conn));
    }
    $query = "UPDATE itemgenericname SET departmentitemgroup='$departmentitemgroup' WHERE departmentitemgroup='$previousdepartmentitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item GenericName".mysqli_error($conn));
    }
    $query = "UPDATE item SET departmentitemgroup='$departmentitemgroup' WHERE departmentitemgroup='$previousdepartmentitemgroup'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item".mysqli_error($conn));
    }
}


if(isset($_POST["deleteDepartmentItemGroup"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM departmentitemgroup WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


//Generic Name
if(isset($_POST["getGenericName"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    $query = "Select * From itemgenericname Where genericname Like '%$searchItem%' Or subdepartment Like '%$searchItem%' Or department Like '%$searchItem%' Or departmentitemgroup Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "genericnamecb" => $row["genericnamecb"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "combined" => $row["combined"],
                "itemsubclass" => $row["itemsubclass"]
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

if(isset($_POST["GetGenericNameDetailsByDepartment"])){
    $department = $_POST["department"];
    // $departmentitemgroup = $_POST["departmentitemgroup"];
    // $itemgroup = $_POST["itemgroup"];
    // $itemclass = $_POST["itemclass"];
    // $itemsubclass = $_POST["itemsubclass"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    // $query = "Select * From itemgenericname Where department = '$department' Or departmentitemgroup = '$departmentitemgroup' Or itemgroup = '$itemgroup' Or itemclass = '$itemclass' Or itemsubclass = '$itemsubclass' Order By id DESC";
    $query = "Select * From itemgenericname Where department LIKE '%$department%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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

if(isset($_POST["GetGenericNameDetailsByDepartmentItemGroup"])){
    $department = $_POST["department"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    // $itemgroup = $_POST["itemgroup"];
    // $itemclass = $_POST["itemclass"];
    // $itemsubclass = $_POST["itemsubclass"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    // $query = "Select * From itemgenericname Where department = '$department' Or departmentitemgroup = '$departmentitemgroup' Or itemgroup = '$itemgroup' Or itemclass = '$itemclass' Or itemsubclass = '$itemsubclass' Order By id DESC";
    $query = "Select * From itemgenericname Where department LIKE '%$department%' AND departmentitemgroup LIKE '%$departmentitemgroup%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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

    if(isset($_POST["GetGenericNameDetailsByItemGroup"])){
    $department = $_POST["department"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $itemgroup = $_POST["selectgroup"];
    // $itemclass = $_POST["itemclass"];
    // $itemsubclass = $_POST["itemsubclass"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    // $query = "Select * From itemgenericname Where department = '$department' Or departmentitemgroup = '$departmentitemgroup' Or itemgroup = '$itemgroup' Or itemclass = '$itemclass' Or itemsubclass = '$itemsubclass' Order By id DESC";
    $query = "Select * From itemgenericname Where department LIKE '%$department%' AND departmentitemgroup LIKE '%$departmentitemgroup%' AND itemgroup LIKE '%$itemgroup%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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


if(isset($_POST["GetGenericNameDetailsByItemClass"])){
    $department = $_POST["department"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $itemgroup = $_POST["selectgroup"];
    $itemclass = $_POST["selectsubclassclass"];
    // $itemsubclass = $_POST["itemsubclass"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    // $query = "Select * From itemgenericname Where department = '$department' Or departmentitemgroup = '$departmentitemgroup' Or itemgroup = '$itemgroup' Or itemclass = '$itemclass' Or itemsubclass = '$itemsubclass' Order By id DESC";
    $query = "Select * From itemgenericname Where department LIKE '%$department%' AND departmentitemgroup LIKE '%$departmentitemgroup%' AND itemgroup LIKE '%$itemgroup%' AND itemclass LIKE '%$itemclass%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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

if(isset($_POST["GetGenericNameDetailsByItemSubClass"])){
    $department = $_POST["department"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $itemgroup = $_POST["selectgroup"];
    $itemclass = $_POST["itemclass"];
    $itemsubclass = $_POST["itemsubclass"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    // $query = "Select * From itemgenericname Where department = '$department' Or departmentitemgroup = '$departmentitemgroup' Or itemgroup = '$itemgroup' Or itemclass = '$itemclass' Or itemsubclass = '$itemsubclass' Order By id DESC";
    $query = "Select * From itemgenericname Where department LIKE '%$department%' AND departmentitemgroup LIKE '%$departmentitemgroup%' AND itemgroup LIKE '%$itemgroup%' AND itemclass LIKE '%$itemclass%' AND itemsubclass LIKE '%$itemsubclass%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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

if(isset($_POST["GetGenericNameSubDetails"])){
    $department = $_POST["department"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $itemgroup = $_POST["itemgroup"];
    $itemclass = $_POST["itemclass"];
    $itemsubclass = $_POST["itemsubclass"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    $query = "Select * From itemgenericname Where department = '$department' Or departmentitemgroup = '$departmentitemgroup' Or itemgroup = '$itemgroup' Or itemclass = '$itemclass' Or itemsubclass = '$itemsubclass' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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

//Generic Name
if(isset($_POST["getCombinedGenericName"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    
    $query = "Select * From itemgenericname Where (genericname Like '%$searchItem%' Or departmentitemgroup Like '%$searchItem%') And combined = 'True' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentcode" => $row["departmentcode"],
                "subdepartmentcode" => $row["subdepartmentcode"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "genericnamecb" => $row["genericnamecb"],
                "itemgroup" => $row["itemgroup"],
                "itemclass" => $row["itemclass"],
                "itemsubclass" => $row["itemsubclass"]
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

if(isset($_POST["insertGenericNameForm"])){
    $subdepartment = "";
    //$subdepartmentcode = $_POST['subdepartmentcode'];
    $department = $_POST['department'];
    $departmentcode = $_POST['departmentcode'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $genericname = $_POST['genericname'];
    $genericnamecb = $_POST['genericnamecb'];
    $itemgroup = $_POST['itemgroup'];
    $itemclass = $_POST['itemclass'];
    $itemsubclass = $_POST['itemsubclass'];
    $combined = $_POST['combined'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    if($combined == "True"){
        $genericnamecb = $genericnamecb."(CG)";
    } else {
        $genericnamecb = $genericname;
    }
    

    $query = "INSERT INTO itemgenericname(combined,genericname,genericnamecb,department,departmentcode,subdepartment,departmentitemgroup,itemgroup, itemclass, itemsubclass,enteredby,entereddate) VALUES('$combined','$genericnamecb','$genericname','$department','$departmentcode','$subdepartment','$departmentitemgroup','$itemgroup','$itemclass','$itemsubclass','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getGenericNameById'])){
    $id = $_POST['id'];

    $query = "Select * From itemgenericname Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "subdepartment" => $row["subdepartment"],
        "department" => $row["department"],
        "departmentcode" => $row["departmentcode"],
        "subdepartmentcode" => $row["subdepartmentcode"],
        "departmentitemgroup" => $row["departmentitemgroup"],
        "genericname" => $row["genericname"],
        "genericnamecb" => $row["genericnamecb"],
        "itemgroup" => $row["itemgroup"],
        "itemclass" => $row["itemclass"],
        "itemsubclass" => $row["itemsubclass"]
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}


if(isset($_POST['getDepartmentItemGroupBySubDepartment'])){
    $department = $_POST['department'];
    $subdepartment = $_POST['subdepartment'];
    $query = "Select * From departmentitemgroup Where subdepartment='$subdepartment'";
    //echo $query;
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"]
                
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "subdepartment" => $subdepartment,
                "department" => $department,
                "departmentitemgroup" => "No Item Group"
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getDepartmentItemGroupByDepartment'])){
    $department = $_POST['department'];
    //$subdepartment = $_POST['subdepartment'];
    $query = "Select * From departmentitemgroup Where department='$department'";
    //echo $query;
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"]
                
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "department" => $department,
                "departmentitemgroup" => "No Item Group"
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getDepartmentItemGroupBySearchLab'])){
    $department = $_POST['department'];
    //$subdepartment = $_POST['subdepartment'];
    $query = "Select * From departmentitemgroup Where departmentitemgroup LIKE '%$department%'";
    //echo $query;
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"]
                
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "department" => $department,
                "departmentitemgroup" => "No Item Group"
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}


if(isset($_POST['getItemGroupByUsageGroupType'])){
    $selectusagegroup = $_POST['selectusagegroup'];
   
    $query = "Select * From itemgroup Where itemgrouptype='$selectusagegroup'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemgroup" => $row["itemgroup"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemgroup" => "No Item Group"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}
if(isset($_POST['getItemGroupByDeptItemGroup'])){
    $selectusagegroup = $_POST['departmentitemgroup'];
   
    $query = "Select * From itemgroup Where departmentitemgroup='$selectusagegroup'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemgroup" => $row["itemgroup"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemgroup" => "No Item Group"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemGroupByLikeDeptItemGroup'])){
    $selectusagegroup = $_POST['departmentitemgroup'];
   
    $query = "Select * From itemgroup Where departmentitemgroup LIKE '%$selectusagegroup%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemgroup" => $row["itemgroup"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemgroup" => "No Item Group"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST['getItemGroupByLikeDeptItemGroupSearchGroup'])){
    $selectusagegroup = $_POST['departmentitemgroup'];
    $searchItem = $_POST['searchItem'];
    $query = "Select * From itemgroup Where departmentitemgroup LIKE '%$selectusagegroup%' AND itemgroup LIKE '%$searchItem%'";
    $runquery = mysqli_query($conn, $query);
    $countrows = mysqli_num_rows($runquery);
    if($countrows>0){
        //$row = mysqli_fetch_assoc($runquery);
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" =>  $row['id'],
                "itemgroup" => $row["itemgroup"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
           
            
            // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    } else {
        
        $exam_arr=array();
        $exam_arr["records"]=array();

       
            $exam_item=array(
                "id" =>  "0",
                "itemgroup" => "No Item Group"
                
                
            );
      
            array_push($exam_arr["records"], $exam_item);
           // set response code - 200 OK
            http_response_code(200);
        
            // make it json format
            echo json_encode($exam_arr);
    }
   
  
}

if(isset($_POST["editGenericName"])){
    $id = $_POST['id'];
    $department = $_POST['department'];
    $departmentitemgroup = $_POST['departmentitemgroup'];
    $subdepartment = "";
    $genericname = $_POST['genericname'];
    $genericnamecb = $_POST['genericnamecb'];
    $previousgenericname = $_POST['previousgenericname'];
    $itemgroup = $_POST['itemgroup'];
    $itemclass = $_POST['itemclass'];
    $itemsubclass = $_POST['itemsubclass'];
    $combined = $_POST['combined'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];
    // if($combined == "True"){
    //     $genericnamecb = $genericnamecb."(CG)";
    // }

    $query = "UPDATE itemgenericname SET itemgroup='$itemgroup', itemclass='$itemclass', combined='$combined', itemsubclass='$itemsubclass', genericname='$genericnamecb', genericnamecb='$genericname',subdepartment='$subdepartment', department='$department', departmentitemgroup='$departmentitemgroup',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
    $previousgenericname =  $previousgenericname.".";
    $genericname =  $genericname.".";

    $query = "SELECT id FROM item WHERE genericname='$previousgenericname'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $itemid = 0;
    if(mysqli_num_rows($runquery)>0){
        $itemid = $row["id"];
    }
    

    

    $query = "UPDATE item SET usagegroup='$itemgroup', usageclass='$itemclass', usagesubclass='$itemsubclass', genericname='$genericname', departmentitemgroup='$departmentitemgroup' WHERE genericname='$previousgenericname'";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: Item".mysqli_error($conn));
    }


}


if(isset($_POST["deleteGenericName"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemgenericname WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";

    
}

//Stock Type

if(isset($_POST["getStockType"])){
    $searchItem = $_POST['searchItem'];
    $query = "Select id,itemtype,abbreviation From itemtype Where itemtype LIKE '%$searchItem%' Or abbreviation LIKE '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stocktype" => $row["itemtype"],
                "abbreviation" => $row["abbreviation"]
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

if(isset($_POST["insertStockTypeForm"])){
    $itemtype = $_POST['stocktype'];
    //$department = $_POST['department'];
    $abbreviation = $_POST['stocktypeabbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO itemtype(itemtype,abbreviation,enteredby,entereddate) VALUES('$itemtype','$abbreviation','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getStockTypeById'])){
    $id = $_POST['id'];
    $query = "Select id,itemtype,abbreviation From itemtype Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "stocktype" => $row['itemtype'],
        "abbreviation" => $row["abbreviation"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editStockType"])){
    $id = $_POST['id'];
    $itemtype = $_POST['stocktype'];
    //$department = $_POST['department'];
    $abbreviation = $_POST['stocktypeabbreviation'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE itemtype SET itemtype='$itemtype',abbreviation='$abbreviation',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteStockType"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM itemtype WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

// Manufacturer Name

if(isset($_POST["getManufacturer"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,code,manufacturer From manufacturer Where manufacturer Like '%$searchItem%' Or code Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "manufacturer" => $row["manufacturer"],
                "code" => $row["code"]
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

if(isset($_POST["insertManufacturer"])){
    //$departmentcode = $_POST['departmentcode'];
    $manufacturer = $_POST['manufacturer'];
    $code = $_POST['manufacturercode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO manufacturer(manufacturer,code,enteredby,entereddate) VALUES('$manufacturer','$code','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getManufacturerById'])){
    $id = $_POST['id'];
    $query = "Select id,manufacturer,code From manufacturer Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "manufacturer" => $row['manufacturer'],
        "code" => $row['code']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editManufacturer"])){
    $id = $_POST['id'];
    //$departmentcode = $_POST['departmentcode'];
    $manufacturer = $_POST['manufacturer'];
    $code = $_POST['manufacturercode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE manufacturer SET manufacturer='$manufacturer',code='$code',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteManufacturer"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM manufacturer WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Relationship
if(isset($_POST["insertRelationship"])){
    //$departmentcode = $_POST['departmentcode'];
    $relationship = $_POST['relationship'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO relationship(relationship) VALUES('$relationship')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["insertQuarter"])){
    //$departmentcode = $_POST['departmentcode'];
    $quarter = $_POST['quarter'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO quarters(quarters) VALUES('$quarter')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["insertTown"])){
    //$departmentcode = $_POST['departmentcode'];
    $town = $_POST['town'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO town(town) VALUES('$town')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["getRelationship"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,relationship From relationship Where relationship Like '%$searchItem%' ORDER BY id DESC";
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

//Corpse Type
if(isset($_POST["insertCorpseType"])){
    //$departmentcode = $_POST['departmentcode'];
    $corpsetype = $_POST['corpsetype'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO corpsetype(corpsetype) VALUES('$corpsetype')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["getCorpseType"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,corpsetype From corpsetype Where corpsetype Like '%$searchItem%' ORDER BY id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "corpsetype" => $row["corpsetype"]
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

//Place of Death

if(isset($_POST["insertPlaceofDeath"])){
    //$departmentcode = $_POST['departmentcode'];
    $placeofdeath = $_POST['placeofdeath'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO placeofdeath(placeofdeath) VALUES('$placeofdeath')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}
if(isset($_POST["getPlaceofDeath"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,placeofdeath From placeofdeath Where placeofdeath Like '%$searchItem%' ORDER BY id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "placeofdeath" => $row["placeofdeath"]
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

//Tribe

if(isset($_POST["insertTribe"])){
    //$departmentcode = $_POST['departmentcode'];
    $tribe = $_POST['tribe'];
    $stateoforigin = $_POST['stateoforigin'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO tribe(name,states) VALUES('$tribe','$stateoforigin')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}
if(isset($_POST["getTribe"])){
    $searchItem = $_POST["searchItem"];
    $stateoforigin = $_POST['stateoforigin'];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,name AS tribe From tribe Where name Like '%$searchItem%' AND states = '$stateoforigin' ORDER BY id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "tribe" => $row["tribe"]
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

//Occupation

if(isset($_POST["insertOccupation"])){
    //$departmentcode = $_POST['departmentcode'];
    $occupation = $_POST['occupation'];
    // $stateoforigin = $_POST['stateoforigin'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO occupation(occupation) VALUES('$occupation')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}
if(isset($_POST["getOccupation"])){
    $searchItem = $_POST["searchItem"];
    // $stateoforigin = $_POST['stateoforigin'];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,occupation From occupation Where occupation Like '%$searchItem%' ORDER BY id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "occupation" => $row["occupation"]
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

//Cause of Death
if(isset($_POST["insertCauseofDeath"])){
    //$departmentcode = $_POST['departmentcode'];
    $causeofdeath = $_POST['causeofdeath'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO causeofdeath(causeofdeath) VALUES('$causeofdeath')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["getCauseofDeath"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,causeofdeath From causeofdeath Where causeofdeath Like '%$searchItem%' ORDER BY id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "causeofdeath" => $row["causeofdeath"]
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

//Remark

if(isset($_POST["insertRemark"])){
    //$departmentcode = $_POST['departmentcode'];
    $remark = $_POST['remark'];
   
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO remark(remark) VALUES('$remark')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST["getRemark"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,remark From remark Where remark Like '%$searchItem%' ORDER BY id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "remark" => $row["remark"]
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


// Supplier Name

if(isset($_POST["getSupplier"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,code,supplier From supplier Where supplier Like '%$searchItem%' Or code Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "supplier" => $row["supplier"],
                "code" => $row["code"]
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

if(isset($_POST["insertSupplier"])){
    //$departmentcode = $_POST['departmentcode'];
    $supplier = $_POST['supplier'];
    $code = $_POST['suppliercode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO supplier(supplier,code,enteredby,entereddate) VALUES('$supplier','$code','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}



if(isset($_POST['getSupplierById'])){
    $id = $_POST['id'];
    $query = "Select id,supplier,code From supplier Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "supplier" => $row['supplier'],
        "code" => $row['code']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editSupplier"])){
    $id = $_POST['id'];
    //$departmentcode = $_POST['departmentcode'];
    $supplier = $_POST['supplier'];
    $code = $_POST['suppliercode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE supplier SET supplier='$supplier',code='$code',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteSupplier"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM supplier WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}


// Location Name

if(isset($_POST["getLocation"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,code,location From location Where location Like '%$searchItem%' Or code Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "location" => $row["location"],
                "code" => $row["code"]
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

if(isset($_POST["insertLocation"])){
    //$departmentcode = $_POST['departmentcode'];
    $location = $_POST['location'];
    $code = $_POST['locationcode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO location(location,code,enteredby,entereddate) VALUES('$location','$code','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getLocationById'])){
    $id = $_POST['id'];
    $query = "Select id,location,code From location Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "location" => $row['location'],
        "code" => $row['code']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editLocation"])){
    $id = $_POST['id'];
    //$departmentcode = $_POST['departmentcode'];
    $location = $_POST['location'];
    $code = $_POST['locationcode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE location SET location='$location',code='$code',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteLocation"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM location WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

// Packaging Name

if(isset($_POST["getPackaging"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,code,packaging From packaging Where packaging Like '%$searchItem%' Or code Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "packaging" => $row["packaging"],
                "code" => $row["code"]
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

if(isset($_POST["insertPackaging"])){
    //$departmentcode = $_POST['departmentcode'];
    $packaging = $_POST['packaging'];
    $code = $_POST['packagingcode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO packaging(packaging,code,enteredby,entereddate) VALUES('$packaging','$code','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getPackagingById'])){
    $id = $_POST['id'];
    $query = "Select id,packaging,code From packaging Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "packaging" => $row['packaging'],
        "code" => $row['code']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editPackaging"])){
    $id = $_POST['id'];
    //$departmentcode = $_POST['departmentcode'];
    $packaging = $_POST['packaging'];
    $code = $_POST['packagingcode'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE packaging SET packaging='$packaging',code='$code',updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deletePackaging"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM packaging WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

// Organization  Name

if(isset($_POST["getOrganization"])){
    $searchItem = $_POST["searchItem"];
    //$query = "Select * From itemusage Where itemusage Like '%$searchItem%' Order By id DESC";
    

    $query = "Select id,discount,organization From organization Where organization Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "organization" => $row["organization"],
                "discount" => $row["discount"]
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

if(isset($_POST['getOrganizationByName'])){
    $organization = $_POST['organization'];
    $query = "SELECT id,discount,organization From organization Where organization='$organization'";
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" => $row["id"],
        "organization" => $row["organization"],
        "discount" => $row["discount"]
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}


if(isset($_POST["insertOrganization"])){
    //$departmentcode = $_POST['departmentcode'];
    $organization = $_POST['organization'];
    $discount = $_POST['discount'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO organization(organization,discount,enteredby,entereddate) VALUES('$organization','$discount','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Successful";
}

if(isset($_POST['getOrganizationById'])){
    $id = $_POST['id'];
    $query = "Select id,organization,discount From organization Where id=".$id;
    $runquery = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($runquery);
    $product_arr = array(
        "id" =>  $row['id'],
        "organization" => $row['organization'],
        "discount" => $row['discount']
        
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($product_arr);
}

if(isset($_POST["editOrganization"])){
    $id = $_POST['id'];
    //$departmentcode = $_POST['departmentcode'];
    $organization = $_POST['organization'];
    $discount = $_POST['discount'];
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE organization SET organization='$organization',discount='$discount,updateddate='$person, $entrydate' WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Update Successful";
}


if(isset($_POST["deleteOrganization"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM organization WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

if(isset($_POST["deleteOrganizationPrice"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM organizationsellingprice WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//getItem 
if(isset($_POST["getItem"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From item Where genericname Like '%$searchItem%' Or department Like '%$searchItem%' Or usagegrouptype Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "genericname" => $row["genericname"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "usagegrouptype" => $row["usagegrouptype"],
                "strengthvalue" => $row["strengthvalue"]
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


if(isset($_POST["GetGenericNameDetails"])){
    $searchItem = $_POST["id"];
    $query = "Select * From item Where id = $searchItem";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    if($count_rows>0){
        $row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => $row["id"],
            "genericname" => $row["genericname"],
            "genericnamecb" => $row["genericnamecb"],
            "combined" => $row["combined"],
            "subdepartment" => $row["subdepartment"],
            "department" => $row["department"],
            "stocknumber" => $row["stocknumber"],
            "departmentitemgroup" => $row["departmentitemgroup"],
            "usagegrouptype" => $row["usagegrouptype"],
            "strengthvalue" => $row["strengthvalue"],
            "itemstrength" => $row["itemstrength"],
            "itemform" => $row["itemform"],
            "itemroute" => $row["itemroute"],
            "itemservice" => $row["itemservice"],
            "itemformcode" => $row["itemformcode"],
            "itemformabbreviation" => $row["itemformabbreviation"],
            "itemstate" => $row["itemstate"],
            "usagegrouptype" => $row["usagegrouptype"],
            "usagegroup" => $row["usagegroup"],
            "actualpieces" => $row["actualpieces"],
            "actualweight" => $row["actualweight"],
            "actualvolume" => $row["actualvolume"],
            "actuallength" => $row["actuallength"],
            "actualservice" => $row["actualservice"],
            "actualmicrogram" => $row["actualmicrogram"],
            "actualinternationalunit" => $row["actualinternationalunit"],
            "weightunit" => $row["itemweight"],
            "volumeunit" => $row["involume"],
            "serviceunit" => $row["itemservice"],
            "usageclass" => $row["usageclass"],
            "usagesubclass" => $row["usagesubclass"],
            "usageroutetype" => $row["usageroutetype"],
            "usageroute" => $row["usageroute"],
            "codename" => $row["codename"],
            "sample" => $row["sample"],
            "specimen" => $row["specimen"],
            "specialinstruction" => $row["specialinstruction"]
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
    } else {
        $row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => "0",
            "genericname" => "None",
            "subdepartment" => "None",
            "department" => "None",
            "stocknumber" => "None",
            "departmentitemgroup" => "None",
            "usagegrouptype" => "None",
            "strengthvalue" => "None",
            "itemstrength" => "None",
            "itemform" => "None",
            "itemformcode" => "None",
            "itemformabbreviation" => "None",
            "itemstate" => "None",
            "usagegrouptype" => "None",
            "usagegroup" => "None",
            "usageclass" => "None",
            "usagesubclass" => "None",
            "usageroutetype" => "None",
            "usageroute" => "None",
            "codename" => "None"
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByDepartmentItemGrouping"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select item.genericname AS itemgenericname,item.id,item.departmentitemgroup,item.departmentitemgroup,item.itemform,item.usagegroup,stockitem.itemcode,stockitem.tradename,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.reorderlevelunit,stockitemlist.* FROM item,stockitem,stockitemlist WHERE stockitem.id=stockitemlist.stockitemid AND item.id=stockitem.itemid AND item.departmentitemgroup = '$searchItem'";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    if($count_rows>0){
        

          $exam_arr=array();
          $exam_arr["records"]=array();
  
          while( $row = mysqli_fetch_array($run_query)){
              $exam_item=array(
                "id" => $row["id"],
                "itemgenericname" => $row["itemgenericname"],
                "tradename" => $row["tradename"],
                "itemcode" => $row["itemcode"],
                "reorderlevel" => $row["reorderlevel"],
                "reorderlevelunit" => $row["reorderlevelunit"],
                "stockitemnumber" => $row["stockitemnumber"],
                "stockitemid" => $row["stockitemid"],
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
                "tradename" => $row["tradename"],
                "query" => $query
              );
        
              array_push($exam_arr["records"], $exam_item);
            
          }
            // set response code - 200 OK
            http_response_code(200);
          
            // make it json format
            echo json_encode($exam_arr);


    } else {
       
          

          $exam_arr=array();
          $exam_arr["records"]=array();
  
          
              $exam_item=array(
                "id" => "0",
                "itemgenericname" => "No Item",
                "itemcode" => "",
                "reorderlevel" => "",
                "reorderlevelunit" => "",
                "stockitemnumber" => ""
              );
        
              array_push($exam_arr["records"], $exam_item);
            
          
            // set response code - 200 OK
            http_response_code(200);
          
            // make it json format
            echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetItemGenericNameByDepartment"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select item.genericname,item.id,stockitem.itemcode,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.tradename,stockitem.reorderlevelunit FROM item,stockitem WHERE item.id=stockitem.itemid AND item.department = '$searchItem'";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    if($count_rows>0){
        

          $exam_arr=array();
          $exam_arr["records"]=array();
  
          while( $row = mysqli_fetch_array($run_query)){
              $exam_item=array(
                "id" => $row["id"],
                "itemgenericname" => $row["genericname"],
                "tradename" => $row["tradename"],
                "itemcode" => $row["itemcode"],
                "reorderlevel" => $row["reorderlevel"],
                "reorderlevelunit" => $row["reorderlevelunit"],
                "stockitemnumber" => $row["stockitemnumber"]
              );
        
              array_push($exam_arr["records"], $exam_item);
            
          }
            // set response code - 200 OK
            http_response_code(200);
          
            // make it json format
            echo json_encode($exam_arr);


    } else {
       
          

          $exam_arr=array();
          $exam_arr["records"]=array();
  
          
              $exam_item=array(
                "id" => "0",
                "itemgenericname" => "No Item",
                "tradename" => "",
                "itemcode" => "",
                "reorderlevel" => "",
                "reorderlevelunit" => "",
                "stockitemnumber" => ""
              );
        
              array_push($exam_arr["records"], $exam_item);
            
          
            // set response code - 200 OK
            http_response_code(200);
          
            // make it json format
            echo json_encode($exam_arr);
    }

        
   
}


if(isset($_POST["GetGenericNameByDepartment"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * FROM itemgenericname WHERE department = '$searchItem'";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    if($count_rows>0){
        

          $exam_arr=array();
          $exam_arr["records"]=array();
  
          while( $row = mysqli_fetch_array($run_query)){
              $exam_item=array(
                "id" => $row["id"],
                "genericname" => $row["genericname"]
              );
        
              array_push($exam_arr["records"], $exam_item);
            
          }
            // set response code - 200 OK
            http_response_code(200);
          
            // make it json format
            echo json_encode($exam_arr);


    } else {
       
          

          $exam_arr=array();
          $exam_arr["records"]=array();
  
          
              $exam_item=array(
                "id" => "0",
                "genericname" => "No Item"
              );
        
              array_push($exam_arr["records"], $exam_item);
            
          
            // set response code - 200 OK
            http_response_code(200);
          
            // make it json format
            echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageSubClass"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $query = "Select item.genericname,item.id,stockitem.itemcode,stockitem.tradename,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.reorderlevelunit FROM item,stockitem WHERE item.id=stockitem.itemid AND (item.usagesubclass='$subclass' OR item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              "id" => $row["id"],
              "itemgenericname" => $row["genericname"],
              "itemcode" => $row["itemcode"],
              "reorderlevel" => $row["reorderlevel"],
              "reorderlevelunit" => $row["reorderlevelunit"],
              "stockitemnumber" => $row["stockitemnumber"],
              "tradename" => $row["tradename"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
              "id" => "0",
              "itemgenericname" => "No Item",
              "itemcode" => "",
              "reorderlevel" => "",
              "reorderlevelunit" => "",
              "stockitemnumber" => ""
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageDRUGSSubClass"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $query = "Select item.genericname,item.id,stockitem.tradename,stockitem.itemcode,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.reorderlevelunit,stockitem.itemmanufacturer FROM item,stockitem WHERE item.id=stockitem.itemid AND item.departmentitemgroup = 'DRUGS' AND (item.usagesubclass='$subclass' OR item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              "id" => $row["id"],
              "itemgenericname" => $row["genericname"],
              "itemcode" => $row["itemcode"],
              "reorderlevel" => $row["reorderlevel"],
              "reorderlevelunit" => $row["reorderlevelunit"],
              "stockitemnumber" => $row["stockitemnumber"],
              "itemmanufacturer" => $row["itemmanufacturer"],
              "tradename" => $row["tradename"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
              "id" => "0",
              "itemgenericname" => "No Item",
              "itemcode" => "",
              "reorderlevel" => "",
              "reorderlevelunit" => "",
              "stockitemnumber" => "",
              "itemmanufacturer" => "None"
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByFormDeptItemGrpPricing"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "SELECT stockitem.genericname AS itemgenericname,stockitem.tradename,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND (item.itemform LIKE '%$subclass%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
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
                "tradename" => $row["tradename"],
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => "",
                "tradename" => "None",
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByFormDeptItemGrp"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "Select item.genericname,item.id,stockitem.itemcode,stockitem.tradename,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.reorderlevelunit,stockitem.itemmanufacturer FROM item,stockitem WHERE item.id=stockitem.itemid AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND (item.itemform LIKE '%$subclass%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();
        

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              "id" => $row["id"],
              "itemgenericname" => $row["genericname"],
              "itemcode" => $row["itemcode"],
              "reorderlevel" => $row["reorderlevel"],
              "reorderlevelunit" => $row["reorderlevelunit"],
              "stockitemnumber" => $row["stockitemnumber"],
              "itemmanufacturer" => $row["itemmanufacturer"],
              "tradename" => $row["tradename"],
              "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
              "id" => "0",
              "itemgenericname" => "No Item",
              "itemcode" => "",
              "reorderlevel" => "",
              "reorderlevelunit" => "",
              "stockitemnumber" => "",
              "itemmanufacturer" => "None",
              "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageDeptItemGrpGroupPricing"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "SELECT stockitem.genericname AS itemgenericname,stockitem.tradename,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND (item.usagegroup='$subclass' AND item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
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
                "tradename" => $row["tradename"],
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => "",
                "tradename" => "None",
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageDeptItemGrpClassPricing"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "SELECT stockitem.genericname AS itemgenericname,stockitem.tradename,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND (item.usageclass='$subclass' AND item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
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
                "tradename" => $row["tradename"],
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => "",
                "tradename" => "None",
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageDeptItemGrpSubClassPricing"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "SELECT stockitem.genericname AS itemgenericname,stockitem.tradename,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND (item.usagesubclass='$subclass' AND item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
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
                "tradename" => $row["tradename"],
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => "",
                "tradename" => "None",
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageDeptItemGrpSubClass"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "Select item.genericname,item.id,stockitem.itemcode,stockitem.tradename,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.reorderlevelunit,stockitem.itemmanufacturer FROM item,stockitem WHERE item.id=stockitem.itemid AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND (item.usagesubclass='$subclass' AND item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();
        

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              "id" => $row["id"],
              "itemgenericname" => $row["genericname"],
              "itemcode" => $row["itemcode"],
              "reorderlevel" => $row["reorderlevel"],
              "reorderlevelunit" => $row["reorderlevelunit"],
              "stockitemnumber" => $row["stockitemnumber"],
              "itemmanufacturer" => $row["itemmanufacturer"],
              "tradename" => $row["tradename"],
              "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
              "id" => "0",
              "itemgenericname" => "No Item",
              "itemcode" => "",
              "reorderlevel" => "",
              "reorderlevelunit" => "",
              "stockitemnumber" => "",
              "itemmanufacturer" => "None",
              "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}





if(isset($_POST["GetGenericNameByUsageDeptItemGrpSearchPricing"])){
    // $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "SELECT stockitem.genericname AS itemgenericname,stockitem.tradename,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND item.genericname LIKE '%$searchItem%'";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
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
                "tradename" => $row["tradename"],
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => "",
                "tradename" => "None",
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}


if(isset($_POST["GetGenericNameByUsageDeptItemGrpSearch"])){
    // $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $query = "Select item.genericname,item.id,stockitem.itemcode,stockitem.tradename,stockitem.stockitemnumber,stockitem.reorderlevel,stockitem.reorderlevelunit,stockitem.itemmanufacturer FROM item,stockitem WHERE item.id=stockitem.itemid AND item.departmentitemgroup LIKE '%$departmentitemgroup%' AND item.genericname LIKE '%$searchItem%'";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();
        

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              "id" => $row["id"],
              "itemgenericname" => $row["genericname"],
              "itemcode" => $row["itemcode"],
              "reorderlevel" => $row["reorderlevel"],
              "reorderlevelunit" => $row["reorderlevelunit"],
              "stockitemnumber" => $row["stockitemnumber"],
              "itemmanufacturer" => $row["itemmanufacturer"],
              "tradename" => $row["tradename"],
              "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
              "id" => "0",
              "itemgenericname" => "No Item",
              "itemcode" => "",
              "reorderlevel" => "",
              "reorderlevelunit" => "",
              "stockitemnumber" => "",
              "itemmanufacturer" => "None",
              "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["GetGenericNameByUsageLABSubClass"])){
    $subclass = $_POST["itemsubclass"];
    $searchItem = $_POST["searchItem"];
    $query = "Select item.genericname,item.id,stockitem.itemcode,stockitem.stockitemnumber,stockitem.tradename,stockitem.reorderlevel,stockitem.reorderlevelunit FROM item,stockitem WHERE item.id=stockitem.itemid AND item.usagegroup LIKE '%LAB TEST%' AND (item.usagesubclass='$subclass' OR item.genericname LIKE '%$searchItem%')";
    
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    }
    $count_rows = mysqli_num_rows($run_query);
    // echo($count_rows);
    if($count_rows>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
              "id" => $row["id"],
              "itemgenericname" => $row["genericname"],
              "tradename" => $row["tradename"],
              "itemcode" => $row["itemcode"],
              "reorderlevel" => $row["reorderlevel"],
              "reorderlevelunit" => $row["reorderlevelunit"],
              "stockitemnumber" => $row["stockitemnumber"]
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        }
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);


    } else {
       
          

        $exam_arr=array();
        $exam_arr["records"]=array();

        
            $exam_item=array(
              "id" => "0",
              "itemgenericname" => "No Item",
              "itemcode" => "",
              "reorderlevel" => "",
              "reorderlevelunit" => "",
              "stockitemnumber" => ""
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }

        
   
}

if(isset($_POST["addItem"])){
    $genericname = $_POST["genericname"];
    $genericnamecb = $_POST["genericnamecb"];
    $combined = $_POST["combined"];
    $codename = $_POST["codename"];
    $department = $_POST["department"];
    $subdepartment = $_POST["subdepartment"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $itemform = $_POST["itemform"];
    $itemstate = $_POST["itemstate"];
    $itemstrength = $_POST["itemstrength"];
    $weight = $_POST["weight"];
    $strengthform = $_POST["strengthform"];
    $container = $_POST["container"];
    $volumevalue = $_POST["volumevalue"];
    $involume = $_POST["involume"];
    $volume = $_POST["volume"];
    $volumeunit = $_POST["volumeunit"];
    $involumevalue = $_POST["involumevalue"];
    $timevalue = $_POST["timevalue"];
    $time = $_POST["time"];
    $route = $_POST["route"];
    $service = $_POST["service"];
    $usagegroup = $_POST["usagegroup"];
    $usageclass = $_POST["usageclass"];
    $usagegrouptype = $_POST["usagegrouptype"];
    $usageroutetype = $_POST["usageroutetype"];
    $usagesubclass = $_POST["usagesubclass"];
    $actualpieces = $_POST["actualpieces"];
    $actualweight = $_POST["actualweight"];
    $actualvolume = $_POST["actualvolume"];
    $actuallength = $_POST["actuallength"];
    $actualservice = $_POST["actualservice"];
    $actualmicrogram = $_POST["actualmicrogram"];
    $actualinternationalunit = $_POST["actualinternationalunit"];
    $usageroute = $_POST["usageroute"];
    $itemformcode = $_POST["itemformcode"];
    $itemformabbreviation = $_POST["itemformabbreviation"];
    $strengthvalue = $_POST["strengthvalue"];
    $stockitemnumber = $_POST["stockitemnumber"];
    $stocknumber = $_POST["stocknumber"];
    $specimen = $_POST["specimen"];
    $sample = $_POST["sample"];
    $specialinstruction = $_POST["specialinstruction"];

    if($combined=="True"){
        $query = "Select * From itemgenericname Where genericnamecb = '$genericname' Order By id DESC";
        $runquery = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($runquery);
        $genericname = $row["genericname"];
        $genericnamecb = $row["genericnamecb"];
    } else {
        $genericnamecb = "";
    }

    $genericname = $genericname.".";
    

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO item(genericname,genericnamecb,combined,department,stocknumber,
                                subdepartment,departmentitemgroup,
                                itemform,itemstate,
                                itemstrength,itemweight,
                                strengthform,container,
                                volumevalue,volume,
                                involumevalue,involume,
                                timevalue,itemtime,
                                itemroute,itemservice,
                                usagegrouptype,usagegroup,volumeunit,
                                usageclass,usagesubclass,
                                usageroutetype,usageroute,
                                codename,strengthvalue,itemformabbreviation,
                                itemformcode,enteredby,
                                entereddate,actualpieces,actualvolume,actualweight,actuallength,actualservice,actualmicrogram,actualinternationalunit,
                                specimen,sample,specialinstruction) VALUES('$genericname','$genericnamecb','$combined','$department','$stockitemnumber',
                                '$subdepartment','$departmentitemgroup',
                                '$itemform','$itemstate',
                                '$itemstrength','$weight',
                                '$strengthform','$container',
                                '$volumevalue','$volume',
                                '$involumevalue','$involume',
                                '$timevalue','$time',
                                '$route','$service',
                                '$usagegrouptype','$usagegroup','$volumeunit',
                                '$usageclass','$usagesubclass',
                                '$usageroutetype','$usageroute',
                                '$codename','$strengthvalue','$itemformabbreviation','$itemformcode','$person',
                                '$entrydate',$actualpieces,$actualvolume,$actualweight,$actuallength,$actualservice,$actualmicrogram,$actualinternationalunit,
                                '$specimen','$sample','$specialinstruction')";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error! ".mysqli_error($conn));
    } else {
        echo "Entry Successful";
    }


}

if(isset($_POST["editItem"])){
    $genericname = $_POST["genericname"];
    $combined = $_POST["combined"];
    $genericnamecb = $_POST["genericnamecb"];
    $codename = $_POST["codename"];
    $department = $_POST["department"];
    $subdepartment = $_POST["subdepartment"];
    $departmentitemgroup = $_POST["departmentitemgroup"];
    $itemform = $_POST["itemform"];
    $itemstate = $_POST["itemstate"];
    $itemstrength = $_POST["itemstrength"];
    $weight = $_POST["weight"];
    $strengthform = $_POST["strengthform"];
    $container = $_POST["container"];
    $volumevalue = $_POST["volumevalue"];
    $involume = $_POST["involume"];
    $volume = $_POST["volume"];
    $volumeunit = $_POST["volumeunit"];
    $involumevalue = $_POST["involumevalue"];
    $timevalue = $_POST["timevalue"];
    $time = $_POST["time"];
    $route = $_POST["route"];
    $service = $_POST["service"];
    $usagegroup = $_POST["usagegroup"];
    $usageclass = $_POST["usageclass"];
    $usageroutetype = $_POST["usageroutetype"];
    $usagesubclass = $_POST["usagesubclass"];
    $usageroute = $_POST["usageroute"];
    $actualpieces = $_POST["actualpieces"];
    $actualweight = $_POST["actualweight"];
    $actuallength = $_POST["actuallength"];
    $actualvolume = $_POST["actualvolume"];
    $actualservice = $_POST["actualservice"];
    $actualmicrogram = $_POST["actualmicrogram"];
    $actualinternationalunit = $_POST["actualinternationalunit"];
    $itemformcode = $_POST["itemformcode"];
    $itemformabbreviation = $_POST["itemformabbreviation"];
    $strengthvalue = $_POST["strengthvalue"];
    $stockitemnumber = $_POST["stockitemnumber"];
    $stocknumber = $_POST["stocknumber"];
    $usagegrouptype = $_POST["usagegrouptype"];
    $id = $_POST['itemid'];
    $specimen = $_POST["specimen"];
    $sample = $_POST["sample"];
    $specialinstruction = $_POST["specialinstruction"];

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    if($combined=="True"){
        $query = "Select * From itemgenericname Where genericnamecb = '$genericname' Order By id DESC";
        $runquery = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($runquery);
        $genericname = $row["genericname"];
        $genericnamecb = $row["genericnamecb"];
    }

    $genericname = $genericname.".";

    $query = "UPDATE item SET genericname='$genericname',combined='$combined',genericnamecb='$genericnamecb',department='$department',stocknumber='$stockitemnumber',
                                subdepartment='$subdepartment',departmentitemgroup='$departmentitemgroup',
                                itemform='$itemform',itemstate='$itemstate',
                                itemstrength='$itemstrength',itemweight='$weight',
                                strengthform='$strengthform',container='$container',
                                volumevalue='$volumevalue',volume='$volume',volumeunit='$volumeunit',
                                involumevalue='$involumevalue',involume='$involume',
                                timevalue='$timevalue',itemtime='$time',
                                itemroute='$route',itemservice='$service',
                                usagegrouptype='$usagegrouptype',usagegroup='$usagegroup',
                                actualpieces=$actualpieces,actualweight=$actualweight,actuallength=$actuallength,actualvolume=$actualvolume,actualservice=$actualservice,actualmicrogram=$actualmicrogram,actualinternationalunit=$actualinternationalunit,
                                usageclass= '$usageclass',usagesubclass='$usagesubclass',
                                usageroutetype='$usageroutetype',usageroute='$usageroute',
                                codename='$codename',strengthvalue='$strengthvalue',itemformabbreviation='$itemformabbreviation',
                                itemformcode='$itemformcode',updateddate='$person on $entrydate',specimen='$specimen',sample='$sample',
                                specialinstruction='$specialinstruction' Where id=$id";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        die("Error! ".mysqli_error($conn)."<br>".$query);
    } else {
        echo "Entry Successful";
    }


}

if(isset($_POST["deleteItem"])){
    $id = $_POST['itemid'];

    //Check if stockitem exists
    $query = "SELECT id FROM stockitem WHERE itemid=$id";
    $runquery = mysqli_query($conn, $query);
    $countstockitem = mysqli_num_rows( $runquery);
    if($countstockitem>0){
        echo "Delete Unsuccessful. First delete items in stockitems";
    } else {
        $query = "DELETE FROM item WHERE id=$id";
        $runquery = mysqli_query($conn, $query);
        if(!$runquery){
            die("Error: ".mysqli_error($conn));
        }
        echo "Delete Successful";
    }
  
    
}

//Stock Item List

if(isset($_POST["insertStockListItem"])){
    $genericname = $_POST["genericname"];
    $itemid = $_POST["itemid"];
    $stockitemid = $_POST["stockitemid"];
    $stockcode = $_POST["stockcode"];
    $weightunit = $_POST["weightunit"];
    $lengthunit = $_POST["lengthunit"];
    $volumeunit = $_POST["volumeunit"];
    $serviceunit = $_POST["serviceunit"];
    $stocknumber = $_POST["stocknumber"];
    $previousquantity = $_POST["previousquantity"];
    $itemstate = $_POST["itemstate"];
    $suppliername = $_POST["suppliername"];
    $invoicenumber = $_POST["invoicenumber"];
    $invoicedate = $_POST["invoicedate"];
    $invoiceamount = $_POST["invoiceamount"];
    $itemamount = $_POST["itemamount"];
    $stocktype = $_POST["stocktype"];
    $package = $_POST["package"];
    //$package = str_replace('"','_',$package);
    $totalpieces = $_POST["totalpieces"];
    $totalweight = $_POST["totalweight"];
    $totalvolume = $_POST["totalvolume"];
    $totallength = $_POST["totallength"];
    $totaliu = $_POST["totaliu"];
    $totalug = $_POST["totalug"];
    $totalweightmg = $_POST["totalweightmg"];
    $totalweightkg = $_POST["totalweightkg"];
    $totalvolumecl = $_POST["totalvolumecl"];

    $totalvolumedrop = $_POST["totalvolumedrop"];
    $totalvolumemcl = $_POST["totalvolumemcl"];

    $totalvolumeml = $_POST["totalvolumeml"];
    $totallengthcm = $_POST["totallengthcm"];
    $unitpriceperpiece = $_POST["unitpriceperpiece"];
    $unitpriceperug = $_POST["unitpriceperug"];
    $unitpriceperiu = $_POST["unitpriceperiu"];
    $unitpriceperstrength = $_POST["unitpriceperstrength"];
    $unitpriceperstrengthkg = $_POST["unitpriceperstrengthkg"];
    $unitpriceperstrengthmg = $_POST["unitpriceperstrengthmg"];
    
    $percentagemarkup = $_POST["percentagemarkup"];
    $itemsellingprice = $_POST["itemsellingprice"];
    $itemsellingpriceperstrength = $_POST["itemsellingpriceperstrength"];
    $itemsellingpriceperliquidstrength = $_POST["itemsellingpriceperliquidstrength"];
    $itemsellingpriceperlength = $_POST["itemsellingpriceperlength"];
    $itemprofit = $_POST["itemprofit"];
    $itempercentageprofit = $_POST["itempercentageprofit"];
    $combinedpricing = $_POST["combinedpricingvalue"];
    $sellingpriceperliquidstrength = $_POST["itemsellingpriceperliquidstrength"];
    $sellingpriceperlength = $_POST["itemsellingpriceperlength"];
    $sellingpriceperstrength = $_POST["itemsellingpriceperstrength"];
    $unitpriceperliquidstrength = $_POST["unitpriceperliquidstrength"];
    $unitpriceperliquidstrengthlitre = $_POST["unitpriceperliquidstrengthlitre"];
    $unitpriceperliquidstrengthcl = $_POST["unitpriceperliquidstrengthcl"];
    $unitpriceperliquidstrengthml = $_POST["unitpriceperliquidstrengthml"];
    $unitpriceperliquidstrengthdrop = $_POST["unitpriceperliquidstrengthdrop"];
    $unitpriceperliquidstrengthmcl = $_POST["unitpriceperliquidstrengthmcl"];

    $unitpriceperlength = $_POST["unitpriceperlength"];
    $unitpriceperlengthmetre = $_POST["unitpriceperlengthmetre"];
    $unitpriceperlengthcm = $_POST["unitpriceperlengthcm"];

    $totalliquidstrength = $_POST["totalvolume"];
    $totallengthstrength = $_POST["totallength"];
    $itemsellingpriceperservice = $_POST["itemsellingpriceperservice"];

    $itemsellingpricekg = $_POST["itemsellingpricekg"];
    $itemsellingpricegram = $_POST["itemsellingpricegram"];
    $itemsellingpricemg = $_POST["itemsellingpricemg"];
    $itemsellingpriceug = $_POST["itemsellingpriceug"];
    $itemsellingpriceliquidlitre = $_POST["itemsellingpriceliquidlitre"];
    $itemsellingpriceliquidcl = $_POST["itemsellingpriceliquidcl"];
    $itemsellingpriceliquidml = $_POST["itemsellingpriceliquidml"];
    $itemsellingpriceliquiddrop = $_POST["itemsellingpriceliquiddrop"];
    $itemsellingpriceliquidmcl = $_POST["itemsellingpriceliquidmcl"];
    $itemsellingpricelengthmetre = $_POST["itemsellingpricelengthmetre"];
    $itemsellingpricelengthcm = $_POST["itemsellingpricelengthcm"];
    $itemsellingpriceugiu = $_POST["itemsellingpriceugiu"];
   

    $totaldurationdays = $_POST["totaldurationdays"];
    $totalduration = $_POST["totalduration"];
    $unitpriceperservice = $_POST["unitpriceperservice"];
    $serviceunit = $_POST["serviceunit"];

    

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO stockitemlist(itemid,stockitemid,genericname,
                                stockcode,weightunit,lengthunit,volumeunit,serviceunit,
                                itemstate,
                                stocknumber,previousquantity,
                                suppliername,invoicenumber,invoicedate,
                                invoiceamount,itemamount,
                                stocktype,package,combinedpricing,
                                totalpieces,totalstrength,totalliquidstrength,totallengthstrength,totaliu,totalug,
                                totalstrengthmg,totalstrengthkg,totalliquidstrengthml,totalliquidstrengthcl,
                                totalliquidstrengthdrop,totalliquidstrengthmcl,totallengthstrengthcm,
                                piecesleft,weightleft,volumeleft,lengthleft,
                                weightleftmg,volumeleftml,lengthleftcm,volumeleftdrop,volumeleftmcl,
                                unitpriceperstrengthkg,unitpriceperstrengthmg,
                                unitpriceperliquidstrengthlitre,unitpriceperliquidstrengthcl,unitpriceperliquidstrengthml,
                                unitpriceperliquidstrengthdrop,unitpriceperliquidstrengthmcl,
                                unitpriceperlengthmetre,unitpriceperlengthcm,
                                unitpriceperpiece,unitpriceperstrength,unitpriceperliquidstrength,unitpriceperlength,unitpriceperiu,unitpriceperug,
                                percentagemarkup,sellingprice,sellingpriceperstrength,sellingpriceperliquidstrength,sellingpriceperlength,
                                sellingpricekg,sellingpricegram,sellingpricemg,sellingpriceug,
                                sellingpriceliquidlitre,sellingpriceliquidcl,sellingpriceliquidml,
                                sellingpriceliquiddrop,sellingpriceliquidmcl,
                                sellingpricelengthmetre,sellingpricelengthcm,sellingpriceugiu,
                                profit,percentageprofit,totaldurationdays,totalduration,
                                enteredby,unitpriceperservice,sellingpriceperservice,
                                entereddate) VALUES($itemid,$stockitemid,
                                '$genericname','$stockcode','$weightunit','$lengthunit','$volumeunit','$serviceunit',
                                '$itemstate','$stocknumber',
                                $previousquantity,'$suppliername',
                                '$invoicenumber','$invoicedate',$invoiceamount,$itemamount,
                                '$stocktype','$package','$combinedpricing',
                                $totalpieces,$totalweight,$totalliquidstrength,$totallengthstrength,$totaliu,$totalug,
                                $totalweightmg, $totalweightkg, $totalvolumeml,$totalvolumecl,
                                $totalvolumedrop,$totalvolumemcl,$totallengthcm,
                                $totalpieces,$totalweight,$totalliquidstrength,$totallengthstrength,
                                $totalweightmg, $totalvolumeml, $totallengthcm,$totalvolumedrop,$totalvolumemcl,
                                $unitpriceperstrengthkg,$unitpriceperstrengthmg,
                                $unitpriceperliquidstrengthlitre,$unitpriceperliquidstrengthcl,$unitpriceperliquidstrengthml,
                                $unitpriceperliquidstrengthdrop,$unitpriceperliquidstrengthmcl,
                                $unitpriceperlengthmetre,$unitpriceperlengthcm,
                                $unitpriceperpiece,$unitpriceperstrength,$unitpriceperliquidstrength,$unitpriceperlength,$unitpriceperiu,$unitpriceperug,
                                $percentagemarkup,$itemsellingprice,$itemsellingpriceperstrength,$itemsellingpriceperliquidstrength,$sellingpriceperlength,
                                $itemsellingpricekg,$itemsellingpricegram,$itemsellingpricemg,$itemsellingpriceug,
                                $itemsellingpriceliquidlitre,$itemsellingpriceliquidcl,$itemsellingpriceliquidml,
                                $itemsellingpriceliquiddrop,$itemsellingpriceliquidmcl,
                                $itemsellingpricelengthmetre,$itemsellingpricelengthcm,$itemsellingpriceugiu,
                                $itemprofit,$itempercentageprofit,$totaldurationdays,'$totalduration',
                                '$person',$unitpriceperservice,$itemsellingpriceperservice,
                                '$entrydate')";
    $run_query = mysqli_query($conn, $query);
    $insert_id = mysqli_insert_id($conn);
    if(!$run_query){
        die("Error! ".mysqli_error($conn)."<br>There seems to be missing fields. Please check for missing fields and try again.<br>".$query);
    } else {
        echo "Entry Successful: Stock List Number - ".$insert_id;
    }


}

if(isset($_POST["updateStockListItem"])){
    $id = $_POST["stocklistitemid"];
    $genericname = $_POST["genericname"];
    $itemid = $_POST["itemid"];
    $stockitemid = $_POST["stockitemid"];
    $stockcode = $_POST["stockcode"];
    $stocknumber = $_POST["stocknumber"];
    $previousquantity = $_POST["previousquantity"];
    $itemstate = $_POST["itemstate"];
    $suppliername = $_POST["suppliername"];
    $invoicenumber = $_POST["invoicenumber"];
    $invoiceamount = $_POST["invoiceamount"];
    $invoicedate = $_POST["invoicedate"];
    $itemamount = $_POST["itemamount"];
    $stocktype = $_POST["stocktype"];
    $package = $_POST["package"];
    //$package = str_replace('"','_',$package);
    $totalpieces = $_POST["totalpieces"];
    $totalweight = $_POST["totalweight"];
    $unitpriceperpiece = $_POST["unitpriceperpiece"];
    $unitpriceperstrength = $_POST["unitpriceperstrength"];
    $percentagemarkup = $_POST["percentagemarkup"];
    $itemsellingprice = $_POST["itemsellingprice"];
    $itemprofit = $_POST["itemprofit"];
    $itempercentageprofit = $_POST["itempercentageprofit"];
    $combinedpricing = $_POST["combinedpricingvalue"];

    

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE stockitemlist SET itemid=$itemid,stockitemid=$stockitemid,genericname='$genericname',
                                stockcode='$stockcode',
                                itemstate='$itemstate',
                                stocknumber='$stocknumber',previousquantity=$previousquantity,
                                suppliername='$suppliername',invoicenumber='$invoicenumber',invoicedate='$invoicedate',
                                invoiceamount=$invoiceamount,itemamount=$itemamount,
                                stocktype='$stocktype',package='$package',combinedpricing='$combinedpricing',
                                totalpieces=$totalpieces,totalstrength=$totalweight,
                                unitpriceperpiece=$unitpriceperpiece,unitpriceperstrength=$unitpriceperstrength,
                                percentagemarkup=$percentagemarkup,sellingprice=$itemsellingprice,
                                profit= $itemprofit,percentageprofit=$itempercentageprofit,
                                updateddate='$person, $entrydate' WHERE id=$id";
    $run_query = mysqli_query($conn, $query);
    $insert_id = mysqli_insert_id($conn);
    if(!$run_query){
        die("Error! ".mysqli_error($conn)."<br>".$query."<br>There seems to be missing fields. Please check for missing fields and try again.");
    } else {
        echo "Update Successful: Stock List Number - ".$id;
    }


}

if(isset($_POST["deleteStockItemList"])){
    $id = $_POST["stocklistitemid"];
   

    $query = "DELETE FROM stockitemlist WHERE id=$id";
    $run_query = mysqli_query($conn, $query);
    $insert_id = mysqli_insert_id($conn);
    if(!$run_query){
        die("Error! ".mysqli_error($conn)."<br>".$query."<br>There seems to be missing fields. Please check for missing fields and try again.");
    } else {
        echo "Delete Successful";
    }


}


if(isset($_POST["deleteStockListItem"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM stockitemlist WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//Organization

if(isset($_POST["getOrganizationPrice"])){
    $stockitemid = $_POST["stockitemid"];
    //$organizationid = $_POST["organizationid"];
    //$stocklistid = $_POST["stocklistid"];
    $query = "SELECT * FROM organizationsellingprice Where stockitemid=$stockitemid";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "organization" => $row["organization"],
                "item" => $row["item"],
                "stockitem" => $row["stockitem"],
                "discount" => $row["discount"],
                "price" => $row["price"],
                "profit" => $row["profit"]
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

if(isset($_POST["insertOrganizationSellingPrice"])){
    $itemid = $_POST["itemid"];
    $stockitemid = $_POST["stockitemid"];
    $item = $_POST["item"];
    $stockitem = $_POST["stockitem"];
    $stockitemlistid = $_POST["stockitemlistid"];
    $organizationid = $_POST["organizationid"];
    $organization = $_POST["organization"];
    $discount = $_POST["discount"];
    $cost = $_POST["cost"];
    $profit = $_POST["profit"];
    $price = $_POST["price"];
     

    

    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO organizationsellingprice(itemid,stockitemid,item,
                                stockitemlistid,stockitem,
                                organizationid,
                                organization,
                                discount,price,
                                cost,profit,
                                enteredby,
                                entereddate) VALUES($itemid,$stockitemid,
                                '$item',$stockitemlistid,'$stockitem',
                                '$organizationid','$organization',
                                $discount,$price,
                                $cost,$profit,
                                '$person',
                                '$entrydate')";
    $run_query = mysqli_query($conn, $query);
    $insert_id = mysqli_insert_id($conn);
    if(!$run_query){
        die("Error! ".mysqli_error($conn)."<br>".$query);
    } else {
        echo "Entry Successful";
    }


}

//getStockItemList
if(isset($_POST["getStockItemList"])){
    $searchItem = $_POST['searchItem'];
    $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND ( stockitem.genericname LIKE '%$searchItem%' AND item.departmentitemgroup = '$deptItemgroup' )";
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
                "query" => $query
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

if(isset($_POST["getStockItemListSearch"])){
    $searchItem = $_POST['searchItem'];
    // $deptItemgroup = $_POST['deptItemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND ( stockitem.genericname LIKE '%$searchItem%' )";
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
if(isset($_POST["getStockItemListBySubClass"])){
    $searchItem = $_POST['searchItem'];
    $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND ( stockitem.genericname LIKE '%$searchItem%' AND item.usagesubclass LIKE '%$itemsubclass%' )";
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

if(isset($_POST["getStockItemListByStockItemId"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT stockitem.reorderlevel,stockitem.tradename,stockitem.reorderlevelunit,stockitem.genericname AS itemgenericname,item.specimen,item.sample,item.specialinstruction,item.department,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND stockitemlist.id = $searchItem ORDER BY stockitemlist.id DESC LIMIT 1";
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
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "reorderlevel" => $row["reorderlevel"],
                "reorderlevelunit" => $row["reorderlevelunit"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "itemform" => $row["itemform"],
                "package" => $row["package"],
                "previousquantity" => $row["previousquantity"],
                "tradename" => $row["tradename"],
                "sample" => $row["sample"],
                "specimen" => $row["specimen"],
                "specialinstruction" => $row["specialinstruction"]
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

if(isset($_POST["getAccomodationFeeId"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT item.id,stockitemlist.id AS stockitemlistid FROM item,stockitemlist WHERE item.id=stockitemlist.itemid and item.genericname='$searchItem'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
      $row = mysqli_fetch_assoc($run_query);
      $stockitemlistid = $row["stockitemlistid"];
      echo $stockitemlistid;
    }
}

if(isset($_POST["getAccomodationFeeByName"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT item.id,stockitemlist.sellingprice AS price FROM item,stockitemlist WHERE item.id=stockitemlist.itemid and item.genericname='$searchItem'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
      $row = mysqli_fetch_assoc($run_query);
      $price = $row["price"];
      echo $price;
    }
}

if(isset($_POST["getFeeById"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT item.id,stockitemlist.sellingprice AS price FROM item,stockitemlist WHERE item.id=stockitemlist.itemid and stockitemlist.id='$searchItem'";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
      $row = mysqli_fetch_assoc($run_query);
      $price = $row["price"];
      echo $price;
    }
}

if(isset($_POST["getStockItemListByItemId"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT stockitem.reorderlevel,stockitem.tradename,stockitem.reorderlevelunit,stockitem.genericname AS itemgenericname,item.specimen,item.sample,item.specialinstruction,item.department,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND stockitemlist.itemid = $searchItem ORDER BY stockitemlist.id DESC LIMIT 1";
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
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "reorderlevel" => $row["reorderlevel"],
                "reorderlevelunit" => $row["reorderlevelunit"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "itemform" => $row["itemform"],
                "package" => $row["package"],
                "previousquantity" => $row["previousquantity"],
                "tradename" => $row["tradename"],
                "sample" => $row["sample"],
                "specimen" => $row["specimen"],
                "specialinstruction" => $row["specialinstruction"]
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

if(isset($_POST["getStockItemListByItemIdMorgueFinance"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT stockitem.reorderlevel,stockitem.tradename,stockitem.reorderlevelunit,stockitem.genericname AS itemgenericname,item.specimen,item.sample,item.specialinstruction,item.department,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND stockitemlist.id = $searchItem ORDER BY stockitemlist.id DESC LIMIT 1";
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
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "reorderlevel" => $row["reorderlevel"],
                "reorderlevelunit" => $row["reorderlevelunit"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "itemform" => $row["itemform"],
                "package" => $row["package"],
                "previousquantity" => $row["previousquantity"],
                "tradename" => $row["tradename"],
                "sample" => $row["sample"],
                "specimen" => $row["specimen"],
                "specialinstruction" => $row["specialinstruction"]
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


if(isset($_POST["getAllPrices"])){
    $searchItem = $_POST['id'];
    // $itemsubclass = $_POST['itemsubclass'];
    $query = "SELECT * From stockitemlist Where id = $searchItem";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "sellingprice" => $row["sellingprice"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "sellingpriceperservice" => $row["sellingpriceperservice"],
                "sellingpriceperlength" => $row["sellingpriceperlength"]
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
if(isset($_POST["getStockItemListByUsageGroup"])){
    $searchItem = $_POST['searchItem'];
    $deptItemgroup = $_POST['deptItemgroup'];
    $itemgroup = $_POST['itemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND ( stockitem.genericname LIKE '%$searchItem%' AND item.departmentitemgroup = '$deptItemgroup' AND item.usagegroup LIKE '%$itemgroup%' )";
    $run_query = mysqli_query($conn, $query);
    // echo $query;
    if(!$run_query){
        echo "ERROR: ".mysqli_error($conn)."<br>".$query;
    }
   
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
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => ""
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getStockItemListByUsageClass"])){
    $searchItem = $_POST['searchItem'];
    $deptItemgroup = $_POST['deptItemgroup'];
    $itemgroup = $_POST['itemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND ( stockitem.genericname LIKE '%$searchItem%' AND item.departmentitemgroup = '$deptItemgroup' AND item.usageclass LIKE '%$itemgroup%' )";
    $run_query = mysqli_query($conn, $query);
    // echo $query;
    if(!$run_query){
        echo "ERROR: ".mysqli_error($conn)."<br>".$query;
    }
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
        $exam_arr=array();
        $exam_arr["records"]=array();

            $exam_item=array(
                "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => ""
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}

if(isset($_POST["getStockItemListByUsageSubClass"])){
    $searchItem = $_POST['searchItem'];
    $deptItemgroup = $_POST['deptItemgroup'];
    $itemgroup = $_POST['itemgroup'];
    $query = "SELECT stockitem.genericname AS itemgenericname,stockitem.tradename,item.departmentitemgroup,item.itemform,item.usagegroup,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND ( stockitem.genericname LIKE '%".$searchItem."%' OR item.departmentitemgroup = '$deptItemgroup' AND item.usagesubclass LIKE '%$itemgroup%' )";
    // $query = "SELECT item.departmentitemgroup,item.id,item.itemform,item.usagegroup From item WHERE item.genericname LIKE '%$searchItem%' AND item.departmentitemgroup = '$deptItemgroup' AND item.usagesubclass LIKE '%$itemgroup%' ";
    $run_query = mysqli_query($conn, $query);
    // echo $query;
    if(!$run_query){
        echo "ERROR: ".mysqli_error($conn)."<br>".$query;
    }
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
                "tradename" => $row["tradename"],
                "query" => $query
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
                "stockitemid" => 0,
                "itemgenericname" => "No Items",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => 0,
                "stockitemid" => 0,
                "stocknumber" => "",
                "sellingprice" => 0.0,
                "itemform" => "",
                "package" => "",
                "tradename" => "None",
                "query" => $query
            );
      
            array_push($exam_arr["records"], $exam_item);
          
        
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($exam_arr);
    }
}


//getStockItem 
if(isset($_POST["getStockItem"])){
    $searchItem = $_POST['searchItem'];
    $query = "Select * From stockitem Where genericname Like '%$searchItem%' Or itemcode Like '%$searchItem%' Order By id DESC";
    $run_query = mysqli_query($conn, $query);
    if(mysqli_num_rows($run_query)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($run_query)){
            $exam_item=array(
                "id" => $row["id"],
                "stockitem" => $row["stockitem"],
                "subdepartment" => $row["subdepartment"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "itemcode" => $row["itemcode"],
                "stockitemnumber" => $row["stockitemnumber"],
                "itemid" => $row["itemid"],
                "tradename" => $row["tradename"],
                "itemstrength" => $row["itemstrength"],
                "expirydate" => $row["expirydate"],
                "manufactureddate" => $row["manufactureddate"]
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




//getStockItemPrescription
if(isset($_POST["getStockItemPrescription"])){
    $stockitemid = $_POST["stockitemid"];
   
    $query = "SELECT * FROM prescription Where stockitemid=$stockitemid";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "prescription" => $row["prescription"],
                "weight" => $row["weight"],
                "age" => $row["age"],
                "sex" => $row["sex"],
                "dosage" => $row["dosage"],
                "frequency" => $row["frequency"],
                "administrationinstruction" => $row["administrationinstruction"],
                "dosageinstruction" => $row["interaction"],
                "specialinstruction" => $row["specialinstruction"],
                "usageroute" => $row["class"],
                "duration" => $row["duration"],     
                "infusionconstant" => $row["infusionconstant"],
                "infusionrate" => $row["infusionrate"],
                "infusionvolume" => $row["infusionvolume"],
                "infusionhour" => $row["infusionhour"],
                "gasinfusionconstant" => $row["gasinfusionconstant"],
                "gasinfusionrate" => $row["gasinfusionrate"],
                "gasinfusionweight" => $row["gasinfusionweight"],
                "gasinfusionhour" => $row["gasinfusionhour"],
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"]
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

if(isset($_POST["getPrescriptionByItemId"])){
    $itemid = $_POST["itemid"];
   
    $query = "SELECT item.*,prescription.*,stockitemlist.*,stockitem.tradename,stockitem.stocknumber FROM item,prescription,stockitemlist,stockitem WHERE item.id=prescription.itemid And prescription.itemid=stockitemlist.itemid And prescription.itemid=stockitem.itemid And prescription.itemid=$itemid ORDER BY stockitemlist.entereddate DESC";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "itemid" => $row["itemid"],
                "prescription" => $row["prescription"],
                "weight" => $row["weight"],
                "age" => $row["age"],
                "sex" => $row["sex"],
                "dosage" => $row["dosage"],
                "stockcode" => $row["stockcode"],
                "sellingprice" => $row["sellingprice"],
                "genericname" => $row["genericname"],
                "tradename" => $row["tradename"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "sellingpriceperlength" => $row["sellingpriceperlength"],
                "frequency" => $row["frequency"],
                "strength" => $row["strengthvalue"],
                "itemformabbreviation" => $row["itemformabbreviation"],
                "itemform" => $row["itemform"],
                "itemstate" => $row["itemstate"],
                "interaction" => $row["interaction"],
                "administrationinstruction" => $row["administrationinstruction"],
                "dosageinstruction" => $row["interaction"],
                "specialinstruction" => $row["specialinstruction"],
                "usageroute" => $row["class"],
                "infusiongivingset" => $row["infusiongivingset"],
                "infusionconstant" => $row["infusionconstant"],
                "infusionrate" => $row["infusionrate"],
                "gasinfusionrate" => $row["gasinfusionrate"],
                "gasinfusionconstant" => $row["gasinfusionconstant"],
                "gasgivingset" => $row["gasgivingset"],
                "duration" => $row["duration"],     
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"]
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

if(isset($_POST["getLabItemByItemId"])){
    $itemid = $_POST["itemid"];
   
    $query = "SELECT * FROM item,stockitemlist WHERE item.id=stockitemlist.itemid AND itemid=$itemid ORDER BY stockitemlist.entereddate DESC";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "stockcode" => $row["stockcode"],
                "sellingprice" => $row["sellingprice"],
                "genericname" => $row["genericname"],
                "department" => $row["department"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "strength" => $row["strengthvalue"],
                "itemformabbreviation" => $row["itemformabbreviation"],
                "specimen" => $row["specimen"],
                "sample" => $row["sample"],  
                "specialinstruction" => $row["specialinstruction"],   
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"]
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

if(isset($_POST["deleteStockListItemPrescription"])){
    $id = $_POST['id'];
  
    $query = "DELETE FROM prescription WHERE id=$id";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
        die("Error: ".mysqli_error($conn));
    }
    echo "Delete Successful";
}

//getStockItemPrice

if(isset($_POST["getStockItemPrice"])){
    $stockitemid = $_POST["stockitemid"];
   
    $query = "SELECT * FROM stockitemlist Where stockitemid=$stockitemid";
    $runquery = mysqli_query($conn, $query);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
            $exam_item=array(
                "id" => $row["id"],
                "package" => $row["package"],
                "combinedpricing" => $row["combinedpricing"],
                "sellingprice" => $row["sellingprice"],
                "totalpieces" => $row["totalpieces"],
                "totalstrength" => $row["totalstrength"],
                "unitpriceperpiece" => $row["unitpriceperpiece"],
                "unitpriceperstrength" => $row["unitpriceperstrength"],
                "percentagemarkup" => $row["percentagemarkup"], 
                "profit" => $row["profit"],  
                "invoiceamount" => $row["invoiceamount"],
                "invoicenumber" => $row["invoicenumber"], 
                "invoicedate" => $row["invoicedate"], 
                "itemamountinvoice" => $row["itemamount"], 
                "stocktype" => $row["stocktype"],    
                "suppliername" => $row["suppliername"],       
                "enteredby" => $row["enteredby"],
                "entereddate" => $row["entereddate"]
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



if(isset($_POST["getStockItemPriceById"])){
    $id = $_POST["id"];
   
    $query = "SELECT * FROM stockitemlist Where id=$id";
    $runquery = mysqli_query($conn, $query);
   
    $row = mysqli_fetch_assoc($runquery);
       
     
    $product_arr=array(
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "weightunit" => $row["weightunit"],
                "lengthunit" => $row["lengthunit"],
                "volumeunit" => $row["volumeunit"],
                "serviceunit" => $row["serviceunit"],
                "itemstate" => $row["itemstate"],
                "stocknumber" => $row["stocknumber"],
                "previousquantity" => $row["previousquantity"],
                "suppliername" => $row["suppliername"],
                "invoicenumber" => $row["invoicenumber"],
                "invoicedate" => $row["invoicedate"],
                "invoiceamount" => $row["invoiceamount"],
                "itemamount" => $row["itemamount"],
                "stocktype" => $row["stocktype"],
                "package" => $row["package"],
                "combinedpricing" => $row["combinedpricing"],
                "totalpieces" => $row["totalpieces"],
                "totalstrength" => $row["totalstrength"],
                "totalliquidstrength" => $row["totalliquidstrength"],
                "totallengthstrength" => $row["totallengthstrength"],
                "totaliu" => $row["totaliu"],
                "totalug" => $row["totalug"],
                "totalstrengthmg" => $row["totalstrengthmg"],
                "totalstrengthkg" => $row["totalstrengthkg"],
                "totalliquidstrengthcl" => $row["totalliquidstrengthcl"],
                "totalliquidstrengthml" => $row["totalliquidstrengthml"],
                "totallengthstrengthcm" => $row["totallengthstrengthcm"],
                "piecesleft" => $row["piecesleft"],
                "weightleft" => $row["weightleft"],
                "volumeleft" => $row["volumeleft"],
                "lengthleft" => $row["lengthleft"],
                "weightleftmg" => $row["weightleftmg"],
                "volumeleftml" => $row["volumeleftml"],
                "lengthleftcm" => $row["lengthleftcm"],
                "unitpriceperstrengthkg" => $row["unitpriceperstrengthkg"],
                "unitpriceperstrengthmg" => $row["unitpriceperstrengthmg"],
                "unitpriceperliquidstrengthlitre" => $row["unitpriceperliquidstrengthlitre"],
                "unitpriceperliquidstrengthcl" => $row["unitpriceperliquidstrengthcl"],
                "unitpriceperliquidstrengthml" => $row["unitpriceperliquidstrengthml"],
                "unitpriceperlengthmetre" => $row["unitpriceperlengthmetre"],
                "unitpriceperlengthcm" => $row["unitpriceperlengthcm"],
                "unitpriceperpiece" => $row["unitpriceperpiece"],
                "unitpriceperstrength" => $row["unitpriceperstrength"],
                "unitpriceperliquidstrength" => $row["unitpriceperliquidstrength"],
                "unitpriceperlength" => $row["unitpriceperlength"],
                "unitpriceperiu" => $row["unitpriceperiu"],
                "unitpriceperug" => $row["unitpriceperug"],
                "percentagemarkup" => $row["percentagemarkup"],
                "sellingprice" => $row["sellingprice"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "sellingpriceperlength" => $row["sellingpriceperlength"],
                "sellingpricekg" => $row["sellingpricekg"],
                "sellingpricegram" => $row["sellingpricegram"],
                "sellingpricemg" => $row["sellingpricemg"],
                "sellingpriceug" => $row["sellingpriceug"],
                "sellingpriceliquidlitre" => $row["sellingpriceliquidlitre"],
                "sellingpriceliquidcl" => $row["sellingpriceliquidcl"],
                "sellingpriceliquidml" => $row["sellingpriceliquidml"],
                "sellingpriceliquiddrop" => $row["sellingpriceliquiddrop"],
                "sellingpriceliquidmcl" => $row["sellingpriceliquidmcl"],
                "sellingpricelengthmetre" => $row["sellingpricelengthmetre"],
                "sellingpricelengthcm" => $row["sellingpricelengthcm"],
                "sellingpriceugiu" => $row["sellingpriceugiu"],
                "profit" => $row["profit"],
                "percentageprofit" => $row["percentageprofit"],
                "totaldurationdays" => $row["totaldurationdays"],
                "totalduration" => $row["totalduration"],
                "enteredby" => $row["enteredby"],
                "unitpriceperservice" => $row["unitpriceperservice"],
                "sellingpriceperservice" => $row["sellingpriceperservice"],
                "entereddate" => $row["entereddate"],
                "id" => $row["id"]
            );
      
           
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}

if(isset($_POST["getStockListItemInfo"])){
    $stockitemid = $_POST["stockitemid"];
   
    $query = "SELECT * FROM stockitemlist Where stockitemid=$stockitemid";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        $row = mysqli_fetch_assoc($runquery);
       
     
        $product_arr=array(
                    "id" => $row["id"],
                    "package" => $row["package"],
                    "stockitemid" => $row["stockitemid"],
                    "itemstate" => $row["itemstate"],
                    "itemid" => $row["itemid"],
                    "sellingprice" => $row["sellingprice"],
                    "totalpieces" => $row["totalpieces"],
                    "totalstrength" => $row["totalstrength"],
                    "unitpriceperpiece" => $row["unitpriceperpiece"],
                    "unitpriceperstrength" => $row["unitpriceperstrength"],
                    "percentagemarkup" => $row["percentagemarkup"], 
                    "previousquantity" => $row["previousquantity"], 
                    "profit" => $row["profit"],  
                    "invoiceamount" => $row["invoiceamount"],
                    "invoicenumber" => $row["invoicenumber"], 
                    "itemamountinvoice" => $row["itemamount"], 
                    "stocktype" => $row["stocktype"],    
                    "suppliername" => $row["suppliername"],       
                    "enteredby" => $row["enteredby"],
                    "entereddate" => $row["entereddate"]
                );
          
               
              // set response code - 200 OK
              http_response_code(200);
            
              // make it json format
              echo json_encode($product_arr);
       
    } else {


         // set response code - 200 OK
         http_response_code(200);
            
         // make it json format
         echo "No Record Found";
    }
   
}



if(isset($_POST["getStockListByItemId"])){
    $itemid = $_POST["itemid"];
   
    $query = "SELECT * FROM stockitemlist Where itemid=$itemid Order By entereddate DESC";
    $runquery = mysqli_query($conn, $query);
   
    if(mysqli_num_rows($runquery)>0){
        $row = mysqli_fetch_assoc($runquery);
       
     
        $product_arr=array(
                    "id" => $row["id"],
                    "package" => $row["package"],
                    "stockitemid" => $row["stockitemid"],
                    "itemstate" => $row["itemstate"],
                    "itemid" => $row["itemid"],
                    "sellingprice" => $row["sellingprice"],
                    "totalpieces" => $row["totalpieces"],
                    "totalstrength" => $row["totalstrength"],
                    "unitpriceperpiece" => $row["sellingprice"],
                    "unitpriceperstrength" => $row["sellingpriceperstrength"],
                    "unitpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                    "unitpriceperlength" => $row["sellingpriceperlength"],
                    "percentagemarkup" => $row["percentagemarkup"], 
                    "previousquantity" => $row["previousquantity"], 
                    "profit" => $row["profit"],  
                    "invoiceamount" => $row["invoiceamount"],
                    "invoicenumber" => $row["invoicenumber"], 
                    "itemamountinvoice" => $row["itemamount"], 
                    "stocktype" => $row["stocktype"],    
                    "suppliername" => $row["suppliername"],       
                    "enteredby" => $row["enteredby"],
                    "entereddate" => $row["entereddate"]
                );
          
               
              // set response code - 200 OK
              http_response_code(200);
            
              // make it json format
              echo json_encode($product_arr);
       
    } else {


         // set response code - 200 OK
         http_response_code(200);
            
         // make it json format
         echo "No Record Found";
    }
   
}



if(isset($_POST["getStockItemDetailsByItemId"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From stockitem Where itemid = $searchItem";
    $run_query = mysqli_query($conn, $query);
    

        $row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => $row["id"],
            "stockitem" => $row["stockitem"],
            "subdepartment" => $row["subdepartment"],
            "department" => $row["department"],
            "departmentitemgroup" => $row["departmentitemgroup"],
            "genericname" => $row["genericname"],
            "itemcode" => $row["itemcode"],
            "tradename" => $row["tradename"],
            "itemstrength" => $row["itemstrength"],
            "expirydate" => $row["expirydate"],
            "manufactureddate" => $row["manufactureddate"]
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}



if(isset($_POST["getStockItemDetailsById"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From stockitem Where id = $searchItem";


    
    $run_query = mysqli_query($conn, $query);
    

        $row = mysqli_fetch_assoc($run_query);

        $itemid = $row["itemid"];
        $queryitem = "Select * From item Where id=$itemid";
        $run_queryitem = mysqli_query($conn, $queryitem);
        $rowitem = mysqli_fetch_assoc($run_queryitem);
        

        $product_arr = array(
            "id" => $row["id"],
            "itemid" => $row["itemid"],
            "stockitem" => $row["stockitem"],
            "stockitemnumber" => $row["stockitemnumber"],
            "subdepartment" => $row["subdepartment"],
            "department" => $row["department"],
            "departmentitemgroup" => $row["departmentitemgroup"],
            "genericname" => $row["genericname"],
            "itemcode" => $row["itemcode"],
            "tradename" => $row["tradename"],
            "itemcode" => $row["itemcode"],
            "itemform" => $row["itemform"],
            "itemstrength" => $row["itemstrength"],
            "essential" => $row["essential"],
            "expensive" => $row["expensive"],
            "emergency" => $row["itememergency"],
            "itemtype" => $row["itemtype"],
            "expirydate" => $row["expirydate"],
            "manufactureddate" => $row["manufactureddate"],
            "manufacturername" => $row["itemmanufacturer"],
            "suppliername" => $row["supplier"],
            "location" => $row["itemlocation"],
            "reorderlevel" => $row["reorderlevel"],
            "reorderlevelunit" => $row["reorderlevelunit"],
            "actualservice" => $rowitem["actualservice"]
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}

if(isset($_POST["getStockItemListDetailsById"])){
    $searchItem = $_POST["searchItem"];
    $query = "SELECT stockitem.stockitemnumber,stockitem.itemstrength,stockitem.genericname AS itemgenericname,item.departmentitemgroup,item.itemform,stockitemlist.* From stockitem,stockitemlist,item WHERE stockitem.id=stockitemlist.stockitemid  AND stockitemlist.itemid = item.id AND stockitemlist.id = $searchItem ORDER BY stockitemlist.id DESC";
    $run_query = mysqli_query($conn, $query);
    if(!$run_query){
        echo "ERROR: ".$query."<br>".mysqli_error($conn);
    }
    $numberofrows = mysqli_num_rows($run_query);
    if($numberofrows>0){
        $row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => $row["id"],
                "stockitemid" => $row["stockitemid"],
                "itemgenericname" => $row["itemgenericname"],
                "itemstate" => $row["itemstate"],
                "departmentitemgroup" => $row["departmentitemgroup"],
                "genericname" => $row["genericname"],
                "stockcode" => $row["stockcode"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stockitemnumber" => $row["stockitemnumber"],
                "stocknumber" => $row["stocknumber"],
                "sellingprice" => $row["sellingprice"],
                "itemform" => $row["itemform"],
                "itemstrength" => $row["itemstrength"],
                "package" => $row["package"],
                "totalpieces" => $row["totalpieces"],
                "totalstrength" => $row["totalstrength"],
                "totalliquidstrength" => $row["totalliquidstrength"],
                "totallengthsthrength" => $row["totallengthstrength"],
                "totalstrengthkg" => $row["totalstrengthkg"],
                "totalstrengthmg" => $row["totalstrengthmg"],
                "totalug" => $row["totalug"],
                "totalliquidstrengthml" => $row["totalliquidstrengthml"],
                "totalliquidstrengthcl" => $row["totalliquidstrengthcl"],
                "totalliquidstrengthdrop" => $row["totalliquidstrengthdrop"],
                "totalliquidstrengthmcl" => $row["totalliquidstrengthmcl"],
                "totallengthstrengthcm" => $row["totallengthstrengthcm"],
                "totaliu" => $row["totaliu"],
                "sellingpriceperstrength" => $row["sellingpriceperstrength"],
                "sellingpriceperliquidstrength" => $row["sellingpriceperliquidstrength"],
                "sellingpriceperlength" => $row["sellingpriceperlength"],
                "sellingpricekg" => $row["sellingpricekg"],
                "sellingpricegram" => $row["sellingpricegram"],
                "sellingpricemg" => $row["sellingpricemg"],
                "sellingpriceliquidlitre" => $row["sellingpriceliquidlitre"],
                "sellingpriceliquidcl" => $row["sellingpriceliquidcl"],
                "sellingpriceliquiddrop" => $row["sellingpriceliquiddrop"],
                "sellingpriceliquidmcl" => $row["sellingpriceliquidmcl"],
                "sellingpriceliquidml" => $row["sellingpriceliquidml"],
                "sellingpricelengthmetre" => $row["sellingpricelengthmetre"],
                "sellingpricelengthcm" => $row["sellingpricelengthcm"],
                "sellingpriceugiu" => $row["sellingpriceugiu"]
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
    } else{
        //$row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => 0,
                "stockitemid" => 0,
                "itemgenericname" => "",
                "itemstate" => "",
                "departmentitemgroup" => "",
                "genericname" => "",
                "stockcode" => "",
                "itemid" => "",
                "stockitemid" => "",
                "stockitemnumber" => "",
                "stocknumber" => "",
                "sellingprice" => 0,
                "itemform" => "",
                "itemstrength" => "",
                "package" => "",
                "totalpieces" =>"",
                "totalstrength" => ""
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
    }
        
   
}

if(isset($_POST["getStockItemDetailsByGenericName"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From stockitem Where genericname = '$searchItem'";
    $run_query = mysqli_query($conn, $query);
    

        $row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => $row["id"],
            "itemid" => $row["itemid"],
            "stockitem" => $row["stockitem"],
            "stockitemnumber" => $row["stockitemnumber"],
            "subdepartment" => $row["subdepartment"],
            "department" => $row["department"],
            "departmentitemgroup" => $row["departmentitemgroup"],
            "genericname" => $row["genericname"],
            "itemcode" => $row["itemcode"],
            "tradename" => $row["tradename"],
            "itemstrength" => $row["itemstrength"],
            "expirydate" => $row["expirydate"],
            "manufactureddate" => $row["manufactureddate"]
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}

if(isset($_POST["getStockItemDetailsByItemCode"])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From stockitem Where itemcode = '$searchItem'";
    $run_query = mysqli_query($conn, $query);
    

        $row = mysqli_fetch_assoc($run_query);
        $product_arr = array(
            "id" => $row["id"],
            "itemid" => $row["itemid"],
            "stockitem" => $row["stockitem"],
            "stockitemnumber" => $row["stockitemnumber"],
            "subdepartment" => $row["subdepartment"],
            "department" => $row["department"],
            "departmentitemgroup" => $row["departmentitemgroup"],
            "genericname" => $row["genericname"],
            "itemcode" => $row["itemcode"],
            "tradename" => $row["tradename"],
            "itemstrength" => $row["itemstrength"],
            "expirydate" => $row["expirydate"],
            "manufactureddate" => $row["manufactureddate"]
        );
       
       
          // set response code - 200 OK
          http_response_code(200);
        
          // make it json format
          echo json_encode($product_arr);
   
}

if(isset($_POST["insertStockItemForm"])){
    //$departmentcode = $_POST['departmentcode'];
    $manufacturer = $_POST['manufacturername'];
    $codename = $_POST['codename'];
    $essential = $_POST['essential'];
    $expensive = $_POST['expensive'];
    $emergency = $_POST['emergency'];
    $itemtype = $_POST['itemtype'];
    $itemid = $_POST['itemid'];
    $suppliername = $_POST['suppliername'];
    $manufacturercode = $_POST['manufacturercode'];
    $genericname = $_POST['genericname'];
    $location = $_POST['location'];
    $itemform = $_POST['itemform'];
    $categoryofimportance = $_POST['categoryofimportance'];
    $tradename = $_POST['tradename'];
    $expirydate = $_POST['expirydate'];
    $reorderlevel = $_POST['reorderlevel'];
    $reorderlevelunit = $_POST['reorderlevelunit'];
    $manufactureddate = $_POST['manufactureddate'];
    $itemstrength = $_POST['itemstrength'];
    $stocknumber = $_POST['stocknumber'];
   
    $formcode = explode(',',$itemform);
    
    
    //generate item number
    
    $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
    $query = "SELECT * FROM stockitem ORDER BY id DESC LIMIT 1";


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


    $generateditemcode = $formcode[0] . "/" . $codename . "/" . $manufacturercode . "/" . $str_num_rows; //. "/" . $genericname;
    //echo $generateditemcode;
    //Coding Time


    //Get Stock Number
    $query_stocknumber = "Select id From stockitem Where stocknumber = '$stocknumber'";
    $run_query_stocknumber = mysqli_query($conn, $query_stocknumber);
    $count_stocknumber = mysqli_num_rows($run_query_stocknumber);
    if($count_stocknumber == 0){
        $count_stocknumber = 1;
    } else {
        $count_stocknumber = $count_stocknumber + 1;
    }
    $str_num_rows = $count_stocknumber;
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

    $stockitemnumber =$stocknumber."/".$str_num_rows;

    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO stockitem(genericname,stocknumber,
                                    stockitemnumber,
                                    itemmanufacturer,
                                    supplier,
                                    itemstrength,
                                    itemlocation,
                                    itemform,
                                    categoryofimportance,
                                    essential,
                                    expensive,
                                    itememergency,
                                    itemtype,
                                    tradename,
                                    itemid,
                                    expirydate,
                                    reorderlevel,reorderlevelunit,
                                    manufactureddate,
                                    itemcode,enteredby,entereddate) VALUES('$genericname','$stocknumber','$stockitemnumber',
                                    '$manufacturer',
                                    '$suppliername',
                                    '$itemstrength',
                                    '$location',
                                    '$itemform',
                                    '$categoryofimportance',
                                    '$essential',
                                    '$expensive',
                                    '$emergency',
                                    '$itemtype',
                                    '$tradename',
                                    '$itemid',
                                    '$expirydate',
                                    '$reorderlevel','$reorderlevelunit',
                                    '$manufactureddate',
                                    '$generateditemcode','$person','$entrydate')";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
         die("Error: ".mysqli_error($conn));
    }
    echo $generateditemcode ." Created Successful";
}

if(isset($_POST["editStockItemForm"])){
    //$departmentcode = $_POST['departmentcode'];
    $manufacturer = $_POST['manufacturername'];
    $codename = $_POST['codename'];
    $essential = $_POST['essential'];
    $expensive = $_POST['expensive'];
    $emergency = $_POST['emergency'];
    $itemtype = $_POST['itemtype'];
    $itemid = $_POST['itemid'];
    $suppliername = $_POST['suppliername'];
    $manufacturercode = $_POST['manufacturercode'];
    $genericname = $_POST['genericname'];
    $location = $_POST['location'];
    $itemform = $_POST['itemform'];
    $categoryofimportance = $_POST['categoryofimportance'];
    $tradename = $_POST['tradename'];
    $expirydate = $_POST['expirydate'];
    $reorderlevel = $_POST['reorderlevel'];
    $reorderlevelunit = $_POST['reorderlevelunit'];
    $manufactureddate = $_POST['manufactureddate'];
    $itemstrength = $_POST['itemstrength'];
    $stocknumber = $_POST['stocknumber'];
    $stockitemid = $_POST['stockitemid'];
    $formcode = explode(',',$itemform);
    
    
    //generate item number
    
    $conn = mysqli_connect('localhost', 'root', 'Pa55w0rd@1','eclinic');
  
    $query = "SELECT * FROM stockitem ORDER BY id DESC LIMIT 1";


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


    $generateditemcode = $formcode[0] . "/" . $codename . "/" . $manufacturercode . "/" . $str_num_rows; //. "/" . $genericname;
    //echo $generateditemcode;
    //Coding Time


    //Get Stock Number
    $query_stocknumber = "Select id From stockitem Where stocknumber = '$stocknumber'";
    $run_query_stocknumber = mysqli_query($conn, $query_stocknumber);
    $count_stocknumber = mysqli_num_rows($run_query_stocknumber);
    if($count_stocknumber == 0){
        $count_stocknumber = 1;
    } else {
        $count_stocknumber = $count_stocknumber + 1;
    }
    $str_num_rows = $count_stocknumber;
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

    $stockitemnumber =$stocknumber."/".$str_num_rows;

    
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE stockitem SET genericname='$genericname',stocknumber='$stocknumber',
                                    stockitemnumber='$stockitemnumber',
                                    itemmanufacturer= '$manufacturer',
                                    supplier='$suppliername',
                                    itemstrength='$itemstrength',
                                    itemlocation='$location',
                                    itemform='$itemform',
                                    categoryofimportance= '$categoryofimportance',
                                    essential='$essential',
                                    expensive='$expensive',
                                    itememergency='$emergency',
                                    itemtype='$itemtype',
                                    tradename='$tradename',
                                    itemid='$itemid',
                                    expirydate='$expirydate',
                                    reorderlevel='$reorderlevel',reorderlevelunit='$reorderlevelunit',
                                    manufactureddate='$manufactureddate',
                                    itemcode='$generateditemcode',updateddate= '$person $entrydate' WHERE id=$stockitemid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
         die("Error: ".mysqli_error($conn));
    }
    echo $generateditemcode ." Updated Successful";
}

if(isset($_POST["deleteStockItemForm"])){
    //$departmentcode = $_POST['departmentcode'];
  
    $stockitemid = $_POST['stockitemid'];
   

    $query = "DELETE FROM stockitem WHERE id=$stockitemid";
    $runquery = mysqli_query($conn, $query);
    if(!$runquery){
         die("Error: ".mysqli_error($conn));
    }
    echo " Delete Successful";
}


//StockList

if(isset($_POST["getStockList"])){
    $searchItem = $_POST["searchItem"];
   
    $query = "SELECT a.id,a.itemid,a.stockitemid,a.stockcode,a.itemstate,a.invoicenumber,a.invoiceamount,a.itemamount,a.stocktype,a.package,a.unitpriceperpiece,a.unitpriceperstrength,a.sellingprice,a.stocknumber AS stockno,a.previousquantity,a.suppliername,a.totalpieces,a.totalstrength,a.entereddate,b.reorderlevel,b.genericname,b.categoryofimportance,b.itemform,b.itemmanufacturer,b.tradename,b.itemlocation,b.expirydate,b.manufactureddate,b.supplier,b.itemstrength,b.stockitemnumber,c.subdepartment,c.departmentitemgroup,c.department,c.subdepartment FROM stockitemlist a,stockitem b,item c WHERE a.itemid=c.id AND a.stockitemid=b.id AND (a.genericname LIKE '%$searchItem%' OR a.stockcode LIKE '%$searchItem%')";
    $runquery = mysqli_query($conn, $query);
   
    // $row = mysqli_fetch_assoc($runquery);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
     
        $exam_item=array(
                "id" => $row["id"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "itemstate" => $row["itemstate"],
                "stockno" => $row["stockno"],
                "stockcode" => $row["stockcode"],
                "itemform" => $row["itemform"],
                "previousquantity" => $row["previousquantity"],
                "suppliername" => $row["suppliername"],
                "totalpieces" => $row["totalpieces"],
                "totalstrength" => $row["totalstrength"],
                "entereddate" => $row["entereddate"],
                "reorderlevel" => $row["reorderlevel"], 
                "department" => $row["department"],
                "subdepartment" => $row["subdepartment"],
                "departmentitemgroup" => $row["departmentitemgroup"],   
                "genericname" => $row["genericname"], 
                "categoryofimportance" => $row["categoryofimportance"],  
                "itemmanufacturer" => $row["itemmanufacturer"],
                "tradename" => $row["tradename"], 
                "itemlocation" => $row["itemlocation"], 
                "expirydate" => $row["expirydate"],    
                "manufactureddate" => $row["manufactureddate"],       
                "supplier" => $row["supplier"],
                "itemstrength" => $row["itemstrength"],
                "invoicenumber" => $row["invoicenumber"],
                "itemamount" => $row["itemamount"],
                "stocktype" => $row["stocktype"],
                "package" => $row["package"],
                "unitpriceperpiece" => $row["unitpriceperpiece"],
                "unitpriceperstrength" => $row["unitpriceperstrength"],
                "sellingprice" => $row["sellingprice"]
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

if(isset($_POST["getStockListByStockItemId"])){
    $stockitemid = $_POST["stockitemid"];
   
    $query = "SELECT a.id,a.itemid,a.stockitemid,a.stockcode,a.itemstate,a.invoicenumber,a.invoiceamount,a.itemamount,a.stocktype,a.package,a.unitpriceperpiece,a.unitpriceperstrength,a.sellingprice,a.stocknumber AS stockno,a.previousquantity,a.suppliername,a.totalpieces,a.totalstrength,a.entereddate,b.reorderlevel,b.genericname,b.categoryofimportance,b.itemform,b.itemmanufacturer,b.tradename,b.itemlocation,b.expirydate,b.manufactureddate,b.supplier,b.itemstrength,b.stockitemnumber,c.subdepartment,c.departmentitemgroup,c.department,c.subdepartment FROM stockitemlist a,stockitem b,item c WHERE a.itemid=c.id AND a.stockitemid=b.id AND (b.id = $stockitemid)";
    $runquery = mysqli_query($conn, $query);
   
    // $row = mysqli_fetch_assoc($runquery);
    if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
     
        $exam_item=array(
                "id" => $row["id"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "itemstate" => $row["itemstate"],
                "stockno" => $row["stockno"],
                "stockcode" => $row["stockcode"],
                "itemform" => $row["itemform"],
                "previousquantity" => $row["previousquantity"],
                "suppliername" => $row["suppliername"],
                "totalpieces" => $row["totalpieces"],
                "totalstrength" => $row["totalstrength"],
                "entereddate" => $row["entereddate"],
                "reorderlevel" => $row["reorderlevel"], 
                "department" => $row["department"],
                "subdepartment" => $row["subdepartment"],
                "departmentitemgroup" => $row["departmentitemgroup"],   
                "genericname" => $row["genericname"], 
                "categoryofimportance" => $row["categoryofimportance"],  
                "itemmanufacturer" => $row["itemmanufacturer"],
                "tradename" => $row["tradename"], 
                "itemlocation" => $row["itemlocation"], 
                "expirydate" => $row["expirydate"],    
                "manufactureddate" => $row["manufactureddate"],       
                "supplier" => $row["supplier"],
                "itemstrength" => $row["itemstrength"],
                "invoicenumber" => $row["invoicenumber"],
                "itemamount" => $row["itemamount"],
                "stocktype" => $row["stocktype"],
                "package" => $row["package"],
                "unitpriceperpiece" => $row["unitpriceperpiece"],
                "unitpriceperstrength" => $row["unitpriceperstrength"],
                "sellingprice" => $row["sellingprice"]
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
//Prescription

if(isset($_POST['insertPrescription'])){
    $itemid = $_POST["itemid"];
    $stockitemid = $_POST["stockitemid"];
    $stocknumber = $_POST["stocknumber"];
    $stockcode = $_POST["stockcode"];
    $usageroute = $_POST["usageroute"];
    $dosageinstruction = $_POST["dosageinstruction"];
    $administrationinstruction = $_POST["administrationinstruction"];
    $specialinstruction = $_POST["specialinstruction"];

    $infusionvolume = $_POST["infusionvolume"];
    $infusionhour = $_POST["infusionhour"];
    $infusiongivingset = $_POST["infusiongivingset"];
    $infusiongivingconstant = $_POST["infusiongivingconstant"];
    $infusionrate = $_POST["infusionrate"];

    $gasinfusionweight = $_POST["gasinfusionweight"];
    $gasinfusionhour = $_POST["gasinfusionhour"];
    $gasgivingset = $_POST["gasgivingset"];
    $gasinfusionconstant = $_POST["gasinfusionconstant"];
    $gasinfusionrate = $_POST["gasinfusionrate"];

    $genericname = $_POST["genericname"];
    $prescription = $_POST["prescription"];
    $usagegrouptype = $_POST["usagegrouptype"];
    $itemstrength = $_POST["itemstrength"];

      
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO prescription(itemid,stockitemid,infusionvolume,
                                                        infusionhour,
                                                        infusiongivingset,
                                                        infusionconstant,
                                                        infusionrate,
                                                        gasinfusionweight,
                                                        gasinfusionhour,
                                                        gasgivingset,
                                                        gasinfusionconstant,
                                                        gasinfusionrate,
                                                        genericname,stockcode,stocknumber,prescription,class,interaction,administrationinstruction,specialinstruction,itemgroup,strength,enteredby,entereddate) 
                    Values($itemid,$stockitemid,$infusionvolume,
                                                        $infusionhour,
                                                        '$infusiongivingset',
                                                        '$infusiongivingconstant',
                                                        '$infusionrate',
                                                        $gasinfusionweight,
                                                        $gasinfusionhour,
                                                        '$gasgivingset',
                                                        '$gasinfusionconstant',
                                                        '$gasinfusionrate',
                                                        '$genericname','$stockcode','$stocknumber','$prescription','$usageroute','$dosageinstruction','$administrationinstruction','$specialinstruction','$usagegrouptype','$itemstrength','$person','$entrydate')";
    $rowquery = mysqli_query($conn, $query);
    if(!$rowquery){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    } else {
        echo "Prescription Entry Successful";
    }
}

if(isset($_POST['editPrescription'])){
    $itemid = $_POST["itemid"];
    $prescriptionid = $_POST["prescriptionid"];
    $stockitemid = $_POST["stockitemid"];
    $stocknumber = $_POST["stocknumber"];
    $stockcode = $_POST["stockcode"];

    $usageroute = $_POST["usageroute"];
    $dosageinstruction = $_POST["dosageinstruction"];
    $administrationinstruction = $_POST["administrationinstruction"];

    $genericname = $_POST["genericname"];
    $prescription = $_POST["prescription"];
    $usagegrouptype = $_POST["usagegrouptype"];
    $itemstrength = $_POST["itemstrength"];

      
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE prescription SET itemid=$itemid,stockitemid=$stockitemid,genericname='$genericname',stockcode='$stockcode',
                            stocknumber='$stocknumber',prescription='$prescription',class='$usageroute',interaction='$dosageinstruction',administrationinstruction='$administrationinstruction',itemgroup='$usagegrouptype',strength='$itemstrength',enteredby='$person on $entrydate' WHERE id=$prescriptionid";
    $rowquery = mysqli_query($conn, $query);
    if(!$rowquery){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    } else {
        echo "Prescription Update Successful";
    }
}

if(isset($_POST['deletePrescription'])){
   
    $prescriptionid = $_POST["prescriptionid"];
   

    $query = "DELETE FROM prescription WHERE id=$prescriptionid";
    $rowquery = mysqli_query($conn, $query);
    if(!$rowquery){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    } else {
        echo "Prescription Delete Successful";
    }
}

if(isset($_POST['getItemPrescription'])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From prescription Where genericname = '$searchItem'";
    $run_query = mysqli_query($conn, $query);

     // $row = mysqli_fetch_assoc($runquery);
     if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
     
        $exam_item=array(
                "id" => $row["id"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "stockcode" => $row["stockcode"],
                "genericname" => $row["genericname"], 
                "strength" => $row["strength"],  
                "itemgroup" => $row["itemgroup"],
                "infusiongivingset" => $row["infusiongivingset"], 
                "infusionconstant" => $row["infusionconstant"],  
                "infusionrate" => $row["infusionrate"],
                "gasinfusionconstant" => $row["gasinfusionconstant"], 
                "gasgivingset" => $row["gasgivingset"],  
                "gasinfusionrate" => $row["gasinfusionrate"],
                "prescription" => $row["prescription"]
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

//Laboratory Order

if(isset($_POST['insertLaboratoryOrder'])){
    $itemid = $_POST["itemid"];
    $stockitemid = $_POST["stockitemid"];
    $stocknumber = $_POST["stocknumber"];
    $stockcode = $_POST["stockcode"];
    $usageroute = $_POST["usageroute"];
    $dosageinstruction = $_POST["dosageinstruction"];
    $administrationinstruction = $_POST["administrationinstruction"];

    $infusionvolume = $_POST["infusionvolume"];
    $infusionhour = $_POST["infusionhour"];
    $infusiongivingset = $_POST["infusiongivingset"];
    $infusiongivingconstant = $_POST["infusiongivingconstant"];
    $infusionrate = $_POST["infusionrate"];

    $gasinfusionweight = $_POST["gasinfusionweight"];
    $gasinfusionhour = $_POST["gasinfusionhour"];
    $gasgivingset = $_POST["gasgivingset"];
    $gasinfusionconstant = $_POST["gasinfusionconstant"];
    $gasinfusionrate = $_POST["gasinfusionrate"];

    $genericname = $_POST["genericname"];
    $prescription = $_POST["prescription"];
    $usagegrouptype = $_POST["usagegrouptype"];
    $itemstrength = $_POST["itemstrength"];

      
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "INSERT INTO prescription(itemid,stockitemid,infusionvolume,
                                                        infusionhour,
                                                        infusiongivingset,
                                                        infusionconstant,
                                                        infusionrate,
                                                        gasinfusionweight,
                                                        gasinfusionhour,
                                                        gasgivingset,
                                                        gasinfusionconstant,
                                                        gasinfusionrate,
                                                        genericname,stockcode,stocknumber,prescription,class,interaction,administrationinstruction,itemgroup,strength,enteredby,entereddate) 
                    Values($itemid,$stockitemid,$infusionvolume,
                                                        $infusionhour,
                                                        '$infusiongivingset',
                                                        '$infusiongivingconstant',
                                                        '$infusionrate',
                                                        $gasinfusionweight,
                                                        $gasinfusionhour,
                                                        '$gasgivingset',
                                                        '$gasinfusionconstant',
                                                        '$gasinfusionrate',
                                                        '$genericname','$stockcode','$stocknumber','$prescription','$usageroute','$dosageinstruction','$administrationinstruction','$usagegrouptype','$itemstrength','$person','$entrydate')";
    $rowquery = mysqli_query($conn, $query);
    if(!$rowquery){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    } else {
        echo "Prescription Entry Successful";
    }
}

if(isset($_POST['editLaboratoryOrder'])){
    $itemid = $_POST["itemid"];
    $prescriptionid = $_POST["prescriptionid"];
    $stockitemid = $_POST["stockitemid"];
    $stocknumber = $_POST["stocknumber"];
    $stockcode = $_POST["stockcode"];

    $usageroute = $_POST["usageroute"];
    $dosageinstruction = $_POST["dosageinstruction"];
    $administrationinstruction = $_POST["administrationinstruction"];

    $genericname = $_POST["genericname"];
    $prescription = $_POST["prescription"];
    $usagegrouptype = $_POST["usagegrouptype"];
    $itemstrength = $_POST["itemstrength"];

      
    $entrydate = date('Y-m-d H:i:s');
    $person = $_SESSION['person'];

    $query = "UPDATE prescription SET itemid=$itemid,stockitemid=$stockitemid,genericname='$genericname',stockcode='$stockcode',
                            stocknumber='$stocknumber',prescription='$prescription',class='$usageroute',interaction='$dosageinstruction',administrationinstruction='$administrationinstruction',itemgroup='$usagegrouptype',strength='$itemstrength',enteredby='$person on $entrydate' WHERE id=$prescriptionid";
    $rowquery = mysqli_query($conn, $query);
    if(!$rowquery){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    } else {
        echo "Prescription Update Successful";
    }
}

if(isset($_POST['deletePrescription'])){
   
    $prescriptionid = $_POST["prescriptionid"];
   

    $query = "DELETE FROM prescription WHERE id=$prescriptionid";
    $rowquery = mysqli_query($conn, $query);
    if(!$rowquery){
        echo "Error: ".mysqli_error($conn)."<br>".$query;
    } else {
        echo "Prescription Delete Successful";
    }
}

if(isset($_POST['getItemLaboratoryOrder'])){
    $searchItem = $_POST["searchItem"];
    $query = "Select * From prescription Where genericname = '$searchItem'";
    $run_query = mysqli_query($conn, $query);

     // $row = mysqli_fetch_assoc($runquery);
     if(mysqli_num_rows($runquery)>0){
       
        $exam_arr=array();
        $exam_arr["records"]=array();

        while( $row = mysqli_fetch_array($runquery)){
     
        $exam_item=array(
                "id" => $row["id"],
                "itemid" => $row["itemid"],
                "stockitemid" => $row["stockitemid"],
                "stocknumber" => $row["stocknumber"],
                "stockcode" => $row["stockcode"],
                "genericname" => $row["genericname"], 
                "strength" => $row["strength"],  
                "itemgroup" => $row["itemgroup"],
                "infusiongivingset" => $row["infusiongivingset"], 
                "infusionconstant" => $row["infusionconstant"],  
                "infusionrate" => $row["infusionrate"],
                "gasinfusionconstant" => $row["gasinfusionconstant"], 
                "gasgivingset" => $row["gasgivingset"],  
                "gasinfusionrate" => $row["gasinfusionrate"],
                "prescription" => $row["prescription"]
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

?>