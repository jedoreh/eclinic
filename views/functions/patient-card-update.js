 $(document).ready(function(){
            function loadPatientCards(){
                let loadPatientPards = "loadPatientPards"
                $.post("controllers/patient-record.php",{loadPatientPards: loadPatientPards},function(formdata){
                        console.log("prescription: ",formdata)
                        if(formdata=="No Record Found"){
                            $("#view-item-order-count").html(formdata)
                        }else{
                            data = JSON.parse(formdata)
                            allpatientcards = data.records
                            totalnumbercards = allpatientcards.length
                            totalfoundcards = totalnumbercards
                            let patientcardlist = `<option value='0'>Select Patient</option>`
                            let count = 0
                            console.log()
                            for(i=0;i<allpatientcards.length;i++){
                               
                                    count++
                                    patientcardlist += `
                                        <option value="` + allpatientcards[i].patientnumber + `">` + allpatientcards[i].person + ` [` + allpatientcards[i].status + `: ` + allpatientcards[i].cardnumber + `]</option>
                                    `

                                    // $("#paid").val(allpatientcards[i].status)
                            }
                                
                            totalfoundcards = count
                            $("#selectpatient").html(patientcardlist)
                            $("#patientcardtotal").html("Found " + totalfoundcards + " Cards Out of " + totalnumbercards + " Cards")
                            
                        }

                    })
            }

                let allpatientcards = []
                let totalnumbercards = 0
                let totalfoundcards = 0
                loadPatientCards()
                
                $("#searchpatient").on('change keyup paste', function () {
                    ApplyFilterGetItem();
                });

                function ApplyFilterGetItem() {
                    var searchitemservice = $("#searchpatient").val();
                    console.log("getPatientCards")
                    getPatientCards()
                }

                function getPatientCards(){
                    
                    // $("#viewrevenueordernumber").html("New Prescription Order")
                    let searchItem = $("#searchpatient").val()
                    
                    let count = 0
                    $("#selectpatient").html("")
                    $("#form-edit-patient").html("")
                    $("#form-view-patientstatus").html("")
                    $("#form-view-patient").html("")

                    let patientcardlist = `<option value='0'>Select Patient</option>`
                    for(i=0;i<allpatientcards.length;i++){
                        console.log(allpatientcards[i].person, allpatientcards[i].status)
                        
                        if(allpatientcards[i].person.includes(searchItem) || allpatientcards[i].cardnumber.includes(searchItem) || allpatientcards[i].patientnumber.includes(searchItem)){
                            count++
                            patientcardlist += `
                                <option value="` + allpatientcards[i].patientnumber + `" selected>` + allpatientcards[i].person + ` [` + allpatientcards[i].status + `: ` + allpatientcards[i].cardnumber + `]</option>
                            `
                            $("#paid").val(allpatientcards[i].status)

                        }
                    }
                    
                    totalfoundcards = count
                    $("#selectpatient").html(patientcardlist)
                    $("#patientcardtotal").html("Found " + totalfoundcards + " Cards Out of " + totalnumbercards + " Cards")
                    let id = $("#selectpatient").val()
                    getPatientCardId(id)
                }

                $("#dateofbirth").on('change paste', function () {
                    let dob = $(this).val()
                    let current = new Date()
                    dob = new Date(dob)
                    let diff = current.getTime() - dob.getTime()
                    let diffindays = diff / (1000 * 3600 * 24)
                    let numberofdays = diffindays.toFixed(0)
                    console.log(diffindays)
                    let agegroup = ""
                    if(numberofdays<7){
                        $("#age").val(numberofdays + " days")
                        agegroup = "NEONATES"
                    } else if(numberofdays>360){
                        diffindays = diffindays / 360
                        numberofdays = diffindays.toFixed(0)
                        $("#age").val(numberofdays + " year(s)")
                        if(numberofdays>75){
                            agegroup = "GERIATIC"
                        } else if(numberofdays>65){
                            agegroup = "ELDERLY"
                        } else if(numberofdays>20){
                            agegroup = "ADULTS"
                        } else if(numberofdays>13){
                            agegroup = "ADOLESCENT(TEEN)"
                        } else if(numberofdays>6){
                            agegroup = "SCHOOL AGE"
                        } else if(numberofdays>2){
                            agegroup = "PRE-SCHOOL"
                        } else if(numberofdays>1){
                            agegroup = "TODDLER"
                        }
                    } else if(numberofdays>30){
                        diffindays = diffindays / 30
                        numberofdays = diffindays.toFixed(0)
                        $("#age").val(numberofdays + " month(s)")
                        agegroup = "INFANTS"
                    } else if(numberofdays>7){
                        diffindays = diffindays / 7
                        numberofdays = diffindays.toFixed(0)
                        $("#age").val(numberofdays + " week(s)")
                        agegroup = "NEONATES"
                    } 
                    $("#agegroup").val(agegroup)
                });
         


                $("#selectpatient").on("change", function(evt){
                    evt.preventDefault()
                    let id = $(this).val()
                    console.log(id)
                    
                    
                    getPatientCardId(id)
                })
                let genderlist = `
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                `
                $("#gender").html(genderlist)
                let maritalstatuslist = `
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>

                `
                $("#maritalstatus").html(maritalstatuslist)

                let bloodgrouplist = `
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>

                `
                $("#bloodgroup").html(bloodgrouplist)
                let religionlist = `
                    <option value="Christianity">Christianity</option>
                    <option value="Islam">Islam</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Oriental Religion">Oriental Religion</option>
                    <option value="Prefer Not to Say">Prefer Not to Say</option>
                    <option value="Atheist">Atheist</option>
                    

                `
                $("#religion").html(religionlist)

                function getPatientCardId(id){
                    
                    let getPatientInfoByPatientNumber = "getPatientInfoByPatientNumber"
                    $.post("controllers/patient-record.php",{id:id,getPatientInfoByPatientNumber: getPatientInfoByPatientNumber},function(formdata){
                        console.log(formdata)
                       
                       
                        let data = JSON.parse(formdata)
                        let status = data.status
                        if(status=="PAID"){
                            $("#paid").val("PAID")
                        } else {
                            $("#paid").val("NOT PAID")
                        }
                        $("#form-edit-patient").html("Patient Number: " + id + "<br>Card Number: " + data.cardnumber + "<br>Card Type: " + data.cardtype)
                        $("#form-view-patientstatus").html("Patient Type: " + data.patienttype + "<br>Patient Status: " + data.patientstatus)
                        $("#form-view-patient").html("Registered: " + data.entereddate + "<br>By: " + data.enteredby + "<br>Updated: " + data.updateddate)
                        let personid = data.personid
                        $("#selectpatientnumber").val(id)
                        $("#personid").val(personid)
                        $("#firstname").val(data.firstname)
                        $("#middlename").val(data.middlename)
                        $("#lastname").val(data.lastname)
                        $("#weight").val(data.weight)
                        $("#height").val(data.height)
                        $("#phonenumber").val(data.phonenumber)
                        $("#age").val(data.age + " " + data.agevalue)
                        $("#agegroup").val(data.agegroup)
                        $("#occupation").val(occupation)
                        $("#gender").html(`<option value="` + data.gender + `">` + data.gender + `</option>` + genderlist)
                        $("#maritalstatus").html(`<option value="` + data.maritalstatus + `">` + data.maritalstatus + `</option>` + maritalstatuslist)
                        $("#dateofbirth").val(data.dateofbirth)
                        $("#age").val(data.age)
                        $("#tribe").val(data.tribe)
                        $("#address").val(data.address)
                        $("#nextofkin").val(data.nextofkin)
                        $("#nextofkinphonenumber").val(data.nextofkinphonenumber)
                        $("#occupation").val(data.occupation)
                        $("#religion").html(`<option value="` + data.religion + `">` + data.religion + `</option>` + religionlist)
                        $("#bloodgroup").html(`<option value="` + data.bloodgroup + `">` + data.bloodgroup + `</option>` + bloodgrouplist)

                        $("#nationality").html(`<option value="` + data.nationality + `">` + data.nationality + `</option>` + countrylist)
                        $("#stateoforigin").html(`<option value="` + data.stateoforigin + `">` + data.stateoforigin + `</option>` + statelist)
                        $("#lgaoforigin").html(`<option value="` + data.lgaoforigin + `">` + data.lgaoforigin + `</option>` + lgalist)

                        $("#lgaoforigin").html(`<option value="` + data.lgaoforigin + `">` + data.lgaoforigin + `</option>` + lgalist)
                        $("#nextofkinrelationship").html(`<option value="` + data.nextofkinrelationship + `">` + data.nextofkinrelationship + `</option>` + nextofkinrelationshiplist)
                    })
                }

                $("#update-patient-button").on("click", function(evt){
                    evt.preventDefault()

                    let personid=$("#personid").val()
                    let firstname=$("#firstname").val()
                    let middlename=$("#middlename").val()
                    let lastname=$("#lastname").val()
                    let gender=$("#gender").val()
                    let maritalstatus=$("#maritalstatus").val()
                    let dateofbirth=$("#dateofbirth").val()
                    let age=$("#age").val()
                    let splitage = age.split(" ")
                    age = parseFloat(splitage[0])
                    let agevalue = splitage[1]
                    let occupation=$("#occupation").val()
                    let religion=$("#religion").val()
                    let bloodgroup=$("#bloodgroup").val()
                    let agegroup = $("#agegroup").val()
                    let weight = $("#weight").val()
                    let height = $("#height").val()
                    let patientnumber = $("#selectpatientnumber").val()
                    let phonenumber = $("#phonenumber").val()

                    let nationality = $("#nationality").val()
                    let lgaoforigin=$("#lgaoforigin").val()
                    let tribe = $("#tribe").val()
                    let address = $("#address").val()
                    let stateoforigin = $("#stateoforigin").val()

                    let nextofkinfullname = $("#nextofkinsurname").val()
                    let nextofkinrelationship = $("#nextofkinrelationship").val()
                    let nextofkinphonenumber = $("#nextofkinphonenumber").val()
                    
                    let editPatient = "editPatient"
                    let paid = $("#paid").val()
                    console.log($("#paid").val())
                    if(paid=="PAID"){
                         $.post("controllers/patient-record.php",{id:personid,patientnumber:patientnumber,firstname:firstname,
                            nextofkinfullname:nextofkinfullname,nextofkinrelationship:nextofkinrelationship,nextofkinphonenumber:nextofkinphonenumber,
                                middlename:middlename,lastname:lastname,
                                stateoforigin:stateoforigin,lgaoforigin:lgaoforigin,
                                nationality:nationality,tribe:tribe,address:address,
                            gender:gender,maritalstatus:maritalstatus,
                            weight:weight,height:height,phonenumber:phonenumber,
                        dateofbirth:dateofbirth,agevalue:agevalue,age:age,agegroup:agegroup,
                        occupation:occupation,religion:religion,paid:paid,
                        bloodgroup:bloodgroup,editPatient:editPatient}, function(formdata){

                            $("#patient-status").html(formdata)
                            let id = $("#selectpatient").val()
                            console.log(id)
                            
                            
                            getPatientCardId(id)

                        })
                    } else {
                        $("#patient-status").html("Patient has not yet paid")
                    }
                   
                })

                getCountries()
            let countrylist = ``
            let statelist = ``
            let lgalist = ``
            function getCountries(){
               
                let getCountries = "getCountries"
                $.post("controllers/patient-record.php",{getCountries:getCountries},function(formdata){
                    console.log(formdata)
                    if(formdata!="No Record Found"){
                        
                        let data=JSON.parse(formdata)
                        let itemgenericnameoptions = ``
                        let nigeria = `<option value="None,0">Select Country</option>`
                        $.each(data.records, function(key, val) {
                           
                            itemgenericnameoptions += `
                            <option value="` + val.name + `,` + val.id + `">` + val.name + `</option>
                          `
                          if(val.name=="Nigeria"){
                            nigeria = `<option value="` + val.name + `,` + val.id + `">` + val.name + `</option>`
                          }
                        })
                        countrylist = itemgenericnameoptions
                        $("#nationality").html(nigeria + itemgenericnameoptions)
                        
                        let splitcountry = $("#nationality").val().split(",")
                        let countryid = splitcountry[1]
                        let getStateByCountryId = "getStateByCountryId"
                        $.post("controllers/patient-record.php",{id:countryid,getStateByCountryId:getStateByCountryId},function(formdata){
                            console.log(formdata)
                            if(formdata!="No Record Found"){
                                
                                let data=JSON.parse(formdata)
                                let itemgenericnameoptions = ``
                                
                                $.each(data.records, function(key, val) {
                                
                                    itemgenericnameoptions += `
                                    <option value="` + val.name + `,` + val.id + `">` + val.name + `</option>
                                `
                                
                                })
                                statelist = itemgenericnameoptions
                                $("#stateoforigin").html(itemgenericnameoptions)

                                let splitstate = $("#stateoforigin").val().split(",")
                                let stateid = splitstate[1]
                                let getLGAByStateId = "getLGAByStateId"
                                $.post("controllers/patient-record.php",{id:stateid,getLGAByStateId:getLGAByStateId},function(formdata){
                                    console.log(formdata)
                                    if(formdata!="No Record Found"){
                                        
                                        let data=JSON.parse(formdata)
                                        let itemgenericnameoptions = ``
                                        
                                        $.each(data.records, function(key, val) {
                                        
                                            itemgenericnameoptions += `
                                            <option value="` + val.name + `,` + val.id + `">` + val.name + `</option>
                                        `
                                        
                                        })
                                        lgalist = itemgenericnameoptions
                                        $("#lgaoforigin").html(itemgenericnameoptions)
                                    } else {
                                        $("#lgaoforigin").html("<option value='No Record'>No Record</option>")
                                    }
                                })
                            } else {
                                        $("#stateoforigin").html("<option value='No Record'>No Record</option>")
                                    }
                        })


                    } else {
                        $("#nationality").html("<option value='No Record'>No Record</option>")
                    }
                })
            }

            $("#nationality").on("change", function(){
                let splitcountry = $("#nationality").val().split(",")
                        let countryid = splitcountry[1]
                        let getStateByCountryId = "getStateByCountryId"
                        $.post("controllers/patient-record.php",{id:countryid,getStateByCountryId:getStateByCountryId},function(formdata){
                            console.log(formdata)
                            if(formdata!="No Record Found"){
                                
                                let data=JSON.parse(formdata)
                                let itemgenericnameoptions = ``
                                
                                $.each(data.records, function(key, val) {
                                
                                    itemgenericnameoptions += `
                                    <option value="` + val.name + `,` + val.id + `">` + val.name + `</option>
                                `
                                
                                })
                                statelist = itemgenericnameoptions
                                $("#stateoforigin").html(itemgenericnameoptions)

                                let splitstate = $("#stateoforigin").val().split(",")
                                let stateid = splitstate[1]
                                let getLGAByStateId = "getLGAByStateId"
                                $.post("controllers/patient-record.php",{id:stateid,getLGAByStateId:getLGAByStateId},function(formdata){
                                    console.log(formdata)
                                    if(formdata!="No Record Found"){
                                        
                                        let data=JSON.parse(formdata)
                                        let itemgenericnameoptions = ``
                                        
                                        $.each(data.records, function(key, val) {
                                        
                                            itemgenericnameoptions += `
                                            <option value="` + val.name + `,` + val.id + `">` + val.name + `</option>
                                        `
                                        
                                        })
                                        lgalist = itemgenericnameoptions
                                        $("#lgaoforigin").html(itemgenericnameoptions)
                                    } else {
                                        $("#lgaoforigin").html("<option value='No Record'>No Record</option>")
                                    }
                                })
                            } else {
                                        $("#stateoforigin").html("<option value='No Record'>No Record</option>")
                                    }
                        })

            })

            $("#stateoforigin").on("change", function(){
                let splitstate = $("#stateoforigin").val().split(",")
                                let stateid = splitstate[1]
                                let getLGAByStateId = "getLGAByStateId"
                                $.post("controllers/patient-record.php",{id:stateid,getLGAByStateId:getLGAByStateId},function(formdata){
                                    console.log(formdata)
                                    if(formdata!="No Record Found"){
                                        
                                        let data=JSON.parse(formdata)
                                        let itemgenericnameoptions = ``
                                        
                                        $.each(data.records, function(key, val) {
                                        
                                            itemgenericnameoptions += `
                                            <option value="` + val.name + `,` + val.id + `">` + val.name + `</option>
                                        `
                                        
                                        })
                                        lgalist = itemgenericnameoptions
                                        $("#lgaoforigin").html(itemgenericnameoptions)
                                    } else {
                                        $("#lgaoforigin").html("<option value='No Record'>No Record</option>")
                                    }
                                })
            })

            let nextofkinrelationshiplist = ``
          
            getNextofKinRelationship()
            function getNextofKinRelationship(){
                // let searchItem = "MORGUE"
                let getNextofKinRelationship = "getNextofKinRelationship"
                $.post("controllers/patient-record.php",{getNextofKinRelationship:getNextofKinRelationship},function(formdata){
                    console.log(formdata)
                    if(formdata!="No Record Found"){
                        
                        let data=JSON.parse(formdata)
                        let itemgenericnameoptions = ``
                        $.each(data.records, function(key, val) {
                           
                            itemgenericnameoptions += `
                            <option value="` + val.relationship + `">` + val.relationship + `</option>
                          `
                        })
                        nextofkinrelationshiplist = itemgenericnameoptions
                        $("#nextofkinrelationship").html(itemgenericnameoptions)
                    } else {
                        $("#nextofkinrelationship").html("<option value='No Record'>No Record</option>")
                    }
                })
            }

            $("#add-relationship-button").on("click", function(evt){
                evt.preventDefault()
                let relationship = $("#addrelationship").val()
                if(relationship!=""){
                    let insertRelationship = "insertRelationship"
                    
                    $.post("controllers/combo-setup.php", {relationship:relationship,insertRelationship:insertRelationship},function(data){
                        
                        let getRelationship = "getRelationship"
                        let searchItem = ""
                        $.post("controllers/combo-setup.php",{searchItem:searchItem,getRelationship: getRelationship},function(formdata){

                        if(formdata!="No Record Found"){
                            console.log(formdata)
                            let data=JSON.parse(formdata)
                            let relationshipoptions = ``
                            $.each(data.records, function(key, val) {
                            
                                relationshipoptions += `
                                <option value="` + val.relationship + `">` + val.relationship + `</option>
                            `
                            })
                            //manufacturerlist = manufactureroptions
                            $("#nextofkinrelationship").html(relationshipoptions)
                        }
                        $("#addsupplier").val("")
                    })
                })
                }
            })

            let addressno = ""
            $("#addressno").on('change keyup paste', function () {
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                addressno = $("#address").val()
            });
            let addressstreet = ""
            $("#addressstreet").on('change keyup paste', function () {
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                addressstreet = $("#address").val()
            });
            let addressoff = ""
            $("#addressoff").on('change keyup paste', function () {
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                addressoff = $("#address").val()
            });

            let addressquarter = ""
            $("#addressquarter").on('change', function () {
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                addressquarter = $("#address").val()
            });
            let addresstown = ""
            $("#addresstown").on('change', function () {
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                addresstown = $("#address").val()
            });

            $("#addressstreetselect").on("change", function(){
                addressstreet = addressno + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val()
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                // $("#address").val(addressno + addressstreet + addressoff + addressquarter + addresstown)
            })
            $("#addressoffselect").on("change", function(){
                addressoff = addressstreet + ", " + $("#addressoff").val() + " " + $("#addressoffselect").val()
                $("#address").val("No. " + $("#addressno").val() + ", " + $("#addressstreet").val() + " " + $("#addressstreetselect").val() + ", off " + $("#addressoff").val() + " " + $("#addressoffselect").val() + ", " + $("#addressquarter").val() + "" + ", " + $("#addresstown").val() + "")
                // $("#address").val(addressno + addressstreet + addressoff + addressquarter + addresstown)
            })

            

            getQuarters()
            getTown()


        
        
            function getQuarters(){
            // let searchItem = "MORGUE"
            let getQuarters = "getQuarters"
            $.post("controllers/patient-record.php",{getQuarters:getQuarters},function(formdata){
                console.log(formdata)
                if(formdata!="No Record Found"){
                    
                    let data=JSON.parse(formdata)
                    let itemgenericnameoptions = `<option value="">Select Quarter</option>`
                    $.each(data.records, function(key, val) {
                       
                        itemgenericnameoptions += `
                        <option value="` + val.quarters + `">` + val.quarters + `</option>
                      `
                    })
                    // nextofkinrelationshiplist = itemgenericnameoptions
                    $("#addressquarter").html(itemgenericnameoptions)
                } else {
                    $("#addressquarter").html("<option value=''>No Record</option>")
                }
            })
        }
        function getTown(){
            // let searchItem = "MORGUE"
            let getTown = "getTown"
            $.post("controllers/patient-record.php",{getTown:getTown},function(formdata){
                console.log(formdata)
                if(formdata!="No Record Found"){
                    
                    let data=JSON.parse(formdata)
                    let itemgenericnameoptions = `<option value="">Select Town</option>`
                    $.each(data.records, function(key, val) {
                       
                        itemgenericnameoptions += `
                        <option value="` + val.town + `">` + val.town + `</option>
                      `
                    })
                    // nextofkinrelationshiplist = itemgenericnameoptions
                    $("#addresstown").html(itemgenericnameoptions)
                } else {
                    $("#addresstown").html("<option value=''>No Record</option>")
                }
            })
        }

        $("#add-quarter-button").on("click", function(evt){
                evt.preventDefault()
                let quarter = $("#addquarter").val()
                if(quarter!=""){
                    let insertQuarter = "insertQuarter"
                    
                    $.post("controllers/combo-setup.php", {quarter:quarter,insertQuarter:insertQuarter},function(data){
                        
                        getQuarters()
                    })
                
                }
            })

            $("#add-town-button").on("click", function(evt){
                evt.preventDefault()
                let town = $("#addtown").val()
                if(town!=""){
                    let insertTown = "insertTown"
                    
                    $.post("controllers/combo-setup.php", {town:town,insertTown:insertTown},function(data){
                        
                        getTown()
                    })
                
                }
            })

        })