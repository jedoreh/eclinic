 $(document).ready(function(){

            getRecordsItems()
            // GetPatientFormFunction()
            let recorditemlist = ``
            function getRecordsItems(){
                let searchItem = "RCD"
                let getStockItemList = "getStockItemList"
                console.log(searchItem,)
                $.post("controllers/patient-record.php",{searchItem:searchItem, getStockItemList:getStockItemList},function(formdata){
                    console.log(formdata)
                    if(formdata!="No Record Found"){
                        
                        let data=JSON.parse(formdata)
                        let itemgenericnameoptions = ``
                        $.each(data.records, function(key, val) {
                           
                            itemgenericnameoptions += `
                            <option value="` + val.itemgenericname + `,` + val.id + `">` + val.tradename + " | " + val.itemgenericname + ` (=N=` + val.sellingprice + `)</option>
                          `
                        })
                        recorditemlist = itemgenericnameoptions
                        $("#selectitem").html(itemgenericnameoptions)
                    } else {
                        $("#selectitem").html("<option value='No Record'>No Record</option>")
                    }
                })
            }

            function GetPatientFormFunction(){
                $("#edit-patient-button").hide()
                $("#delete-patient-button").hide()
                $("#cancel-patient-button").hide()
                $("#add-patient-button").show()
                $(".form-edit-patient").html("")
                $("#patientname").val("")
                
                let getPatient = "getPatient"
                let patientlist = []
                
                let searchpatient = $("#searchpatient").val()
                // console.log(searchformItem)
                $.post("controllers/patient-record.php",{"searchformItem":searchpatient,getPatient: getPatient},function(formdata){
                    //console.log(data)
                    if(formdata=="No Record Found"){
                        $("#view-patient-count").html(formdata)
                    }else{
                        
                        let data=JSON.parse(formdata)
                        console.log(data)
                        patientlist = data.records
                        
                        let count = 0
                            
                        let totalrecord = ``
                        let revenueorderlisttext = `No Revenue Orders`
                        $.each(data.records, function(key, val) {

                            revenueorderlisttext = `No Revenue Order`
                            data.revenueorders.forEach(element => {
                           
                                if(element.hospitalnumber===val.patientnumber){
                                    console.log("found")
                                    revenueorderlisttext = `<a href="#" data-id="` + element.id + `" class="btn btn-outline-primary take-btn revenue-order-patient">` + element.revenueordernumber + `</a>`
                                    console.log(element.hospitalnumber, val.patientnumber,revenueorderlisttext)
                                } 
                                console.log(revenueorderlisttext)
                            });



                            count++
                          totalrecord += `
                            <tr>
                                <td>
                                    
                                    <a href="#" data-id="` + val.id + `" style="" class="btn btn-outline-default take-btn patientname"><h3 style="color:blue;">` + val.cardnumber + `</h3></a>
                                </td>   
                                <td>
                                    
                                    <p style="font-size:18px;font-weight:bold;">` + val.person + `/` + val.patientnumber + `</p>
                                </td>              
                                <td>
                                    
                                    <p style="font-size:18px;font-weight:bold;">` + val.comments + `</p>
                                </td>
                                <td>
                                    <p style="font-size:18px;font-weight:bold;">` + val.entereddate + `</p>
                                </td>
                                <td>
                                    <p> ` + revenueorderlisttext + `</p>
                                </td>
                                <td>
                                    <a href="#" data-id="` + val.id + `" class="btn btn-outline-success take-btn edit-patient">Edit</a>
                                    
                                    <a href="#" data-id="` + val.id + `" class="btn btn-outline-danger take-btn delete-patient">Delete</a>
                                </td>
                            </tr>
                          `
                        })
                        $("#view-patient-count").html(count + " Record(s) Found")
                        $("#view-patient-list").html(totalrecord)
                    }
                    $(".edit-patient").on("click", function(evt){
                            evt.preventDefault()
                            let id = $(this).attr("data-id")
                            let getPatientById = "getPatientById"
                            $.post("controllers/patient-record.php", {id:id, getPatientById: getPatientById}, function(data){
                                console.log(data)
                                formdata=JSON.parse(data)
                                $("#patientname").val(formdata.firstname)
                                $("#selectitem").html(`<option value='` + val.cardtype + `'>` + val.cardtype + `</option>` + recorditemlist)
                                
                                //itemgrouplist = selectitemgroup + itemgrouplist
                                $("#form-view-patientstatus").html(formdata.comments)
                                $("#form-view-patient").html(formdata.patientnumber)
                                $(".form-edit-patient").html(`<input type="hidden" name="patientid" id="patientid" value="` + id + `">`)
                            
                                $("#edit-patient-button").show()
                                $("#cancel-patient-button").show()
                                $("#add-patient-button").hide()
                            })
                            
                           
                        })

                        $(".patientname").on("click", function(evt){
                            evt.preventDefault()
                            let id = $(this).attr("data-id")
                            let getPatientById = "getPatientById"
                            $.post("controllers/patient-record.php", {id:id, getPatientById: getPatientById}, function(data){
                                console.log(data)
                                formdata=JSON.parse(data)
                                $("#patientname").val(formdata.firstname)
                                $("#selectitem").html(`<option value='` + val.cardtype + `'>` + val.cardtype + `</option>` + recorditemlist)
                                
                                //itemgrouplist = selectitemgroup + itemgrouplist
                                $("#form-view-patientstatus").html(formdata.comments)
                                $("#form-view-patient").html(formdata.patientnumber)
                                $(".form-edit-patient").html(`<input type="hidden" name="patientid" id="patientid" value="` + id + `">`)
                            
                                $("#edit-patient-button").show()
                                $("#cancel-patient-button").show()
                                $("#delete-patient-button").show()
                                $("#add-patient-button").hide()
                            })
                            
                    })

                    $(".delete-patient").on("click", function(evt){
                        evt.preventDefault()
                            let id = $(this).attr("data-id")
                            let getPatientById = "getPatientById"
                            $.post("controllers/patient-record.php", {id:id, getPatientById: getPatientById}, function(data){
                                console.log(data)
                                formdata=JSON.parse(data)
                                $("#patientname").val(formdata.firstname)
                                $("#selectitem").html(`<option value='` + formdata.cardtype + `'>` + formdata.cardtype + `</option>` + recorditemlist)
                                
                                //itemgrouplist = selectitemgroup + itemgrouplist
                                $("#form-view-patientstatus").html(formdata.comments)
                                $("#form-view-patient").html(formdata.patientnumber)
                                $(".form-edit-patient").html(`<input type="hidden" name="patientid" id="patientid" value="` + id + `">`)
                            
                                $("#delete-patient-button").show()
                                $("#cancel-patient-button").show()
                                $("#add-patient-button").hide()
                            })
                            
                           
                            
                    })

                    $(".revenue-order-patient").on("click", function(evt){
                        evt.preventDefault()
                        let id = $(this).attr("data-id")
                        
                                // let cardnumber = val.cardnumber
                                let getPatientCardPaymentById = "getPatientCardPaymentById"
                                $.post("controllers/finance-record.php", {id:id, getPatientCardPaymentById: getPatientCardPaymentById}, function(data){
                                    console.log(data)
                                    window.open("patient-invoice.html")
                                    
                                })
                            
                        

                        
                            

                    })
                })

               
            }

            GetPatientFormFunction()
            
            $("#searchpatient").on('change keyup paste', function () {
                ApplyFilterForm();
            });

            function ApplyFilterForm() {
                var searchString = $("#searchpatient").val();
                console.log("GetPatientFormFunction")
                GetPatientFormFunction()
            }

            $("#add-patient-button").on("click", function(evt){
                evt.preventDefault();
                console.log("click")
                let firstname = $("#patientname").val()
                let itemgenericname = $("#selectitem").val()
                // let formabbreviation = $("#formabbreviation").val()
                let patientstatus = "New Registration"
                
                let insertPatientCard = "insertPatientCard"
                $.post("controllers/patient-record.php", {firstname:firstname,itemgenericname:itemgenericname,patientstatus:patientstatus,insertPatientCard:insertPatientCard},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    $("#patient-status").html(data.message)
                    let patientname = data.person
                    let patientid = data.patientid
                    let personid = data.personid
                    let hospitalnumber = data.hospitalnumber
                    let cardnumber = data.cardnumber
                    let patienttype = "PATIENT"

                    GetPatientFormFunction()
                    //Create Item Order
                    let selectitem = $("#selectitem").val()
                    let splititem = selectitem.split(",")
                    let itemgenericname = splititem[0]
                    let itemid = splititem[1]
                    let department = ""
                    let departmentitemgroup = ""
                    let revenueorderlist = []
                    //Get all the pieces
                    let totalpreviousquantity = 0
                        let getStockItemListByItemIdMorgueFinance = "getStockItemListByItemIdMorgueFinance"
                        let sellingprice = 0
                        let sellingpriceperpiece = 0
                        let sellingpriceperweight = 0
                        let sellingpricepervolume = 0
                        let reorderlevel = 0
                        let reorderlevelunit = ""
                        
                        let unittype = ""
                        $.post("controllers/combo-setup.php",{id:itemid,getStockItemListByItemIdMorgueFinance:getStockItemListByItemIdMorgueFinance},function(formdata){
                            console.log(formdata)
                            if(formdata!="No Record Found"){
                                let data = JSON.parse(formdata)
                                
                                $.each(data.records, function(key, val) {
                                    itemid = val.id
                                    totalpreviousquantity += parseFloat(val.previousquantity)
                                    sellingpriceperpiece = parseFloat(val.sellingprice)
                                    sellingpriceperweight = parseFloat(val.sellingpriceperstrength)
                                    sellingpricepervolume = parseFloat(val.sellingpriceperliquidstrength)
                                    reorderlevel = val.reorderlevel
                                   
                                        sellingprice = sellingpriceperpiece
                                  
                                        department = val.department
                                        departmentitemgroup = val.departmentitemgroup
                                })
                                
                                
                               
                               
                                let revenueorderitem = {"genericname":itemgenericname,
                                                        "department":department,
                                                        "departmentitemgroup":departmentitemgroup,
                                                        "sellingprice":sellingprice,
                                                        "reorderlevel":reorderlevel,
                                                        "unittype":"pieces",
                                                        "itemid":itemid,
                                                        "quantity":1}
                                revenueorderlist.push(revenueorderitem)
                                console.log(revenueorderlist)
                                let insertRevenueOrder = "insertRevenueOrder"
                                let list = JSON.stringify(revenueorderlist)
                                let price = parseFloat(sellingprice).toFixed(2)
                                let totalrevenueorderitems = 1
                                console.log(insertRevenueOrder)
                                $.post("controllers/finance-record.php", {department:department,patientname:patientname,patientid:patientid,personid:personid,cardnumber:cardnumber,hospitalnumber:hospitalnumber,patienttype:patienttype,price:price,items:totalrevenueorderitems,list:list,insertRevenueOrder:insertRevenueOrder}, function(data){
                                    console.log(data)
                                    
                                }) 
                            }
                            
                        })
                })
               
            })

            $("#edit-patient-button").on("click", function(evt){
                evt.preventDefault();
                let id = $("#patientid").val()
                let firstname = $("#patientname").val()
                let itemgenericname = $("#selectitem").val()
                // let formabbreviation = $("#formabbreviation").val()
                let patientstatus = "Patient Card Updated"
                
                let editPatientCard = "editPatientCard"
                $.post("controllers/patient-record.php", {id:id, itemgenericname:itemgenericname,patientstatus:patientstatus,editPatientCard:editPatientCard},function(data){
                    $("#patient-status").html(data)
                    GetPatientFormFunction()
                })
            })

            $("#delete-patient-button").on("click",function(evt){
                evt.preventDefault();
                let id = $("#patientid").val()
                
                let deletePatientCard = "deletePatientCard"
                $.post("controllers/patient-record.php", {id:id, deletePatientCard:deletePatientCard},function(data){
                    $("#patient-status").html(data)
                    GetPatientFormFunction()
                })
            })

            $("#cancel-patient-button").on("click", function(evt){
                evt.preventDefault()
                GetPatientFormFunction()
            })



        })