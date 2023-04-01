$(document).ready(function(){


    //Provisional Diagnosis
        $("#provisional_diagnosis").html("<h2>Provisional Diagnosis</h2>")

        let searchitem = ""
        // let reviewtype = ""
        
        
        getProvisionalDiagnosis(searchitem)

        function getProvisionalDiagnosis(searchitem){
                let getReview = "getReview"
                reviewtype = "Provisional Diagnosis"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectprovisionaldiagnosis").html(presentingcomplainlist)

                })
            }

        $("#enterprovisionaldiagnosis").on('change keyup paste', function () {
                ApplyFilterProvisionalDiagnosis();
                
            })

            function ApplyFilterProvisionalDiagnosis() {
                let searchitem = $("#enterprovisionaldiagnosis").val()
                getProvisionalDiagnosis(searchitem)
                
                }

        let provisionaldiagnosislist = []
            $("#add-provisionaldiagnosis").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enterprovisionaldiagnosis").val()
                        console.log($("#selectprovisionaldiagnosis").val())
                        // let periodvalue = ""
                    if($("#selectprovisionaldiagnosis").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Provisional Diagnosis"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enterprovisionaldiagnosis").val()
                            getProvisionalDiagnosis(searchitem)
                        
                            provisionaldiagnosislist.push(review)
                            console.log(provisionaldiagnosislist)
                            
                            displayProvisionalDiagnosis()
                            
                        })
                        
                    } else {
                        let review = $("#selectprovisionaldiagnosis").val()
                    
                        provisionaldiagnosislist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayProvisionalDiagnosis()
                        
                    }


                    console.log(provisionaldiagnosislist)
                
            })

        $("#selectprovisionaldiagnosis").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectprovisionaldiagnosis").val()
                    
                    provisionaldiagnosislist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayProvisionalDiagnosis()
            })

        function displayProvisionalDiagnosis(){
                let provisionaldiagnosis = ``
                provisionaldiagnosislist.forEach(val => {
                        console.log(val)
                    
                        provisionaldiagnosis += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#provisional_diagnosis").html("<h2>Provisional Diagnosis</h2>" + provisionaldiagnosis)
            }

        $("#discard-provisional-diagnosis-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#provisional_diagnosis").html("<h2>Provisional Diagnosis</h2>")
                    provisionaldiagnosislist = []
                })
                $("#add-provisional-diagnosis-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#provisional_diagnosis").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#patient_note_provisionaldiagnosis").html("<div>" + presenting_complain_html + "</div>")
                    $("#provisional_diagnosis").html("<h2>Provisional Diagnosis</h2>")
                    provisionaldiagnosislist = []
                })


        //Management Plan
        $("#management_plan").html("<h2>Management Plan</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getManagementPlan(searchitem)

        function getManagementPlan(searchitem){
                let getReview = "getReview"
                reviewtype = "Management Plan"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectmanagementplan").html(presentingcomplainlist)

                })
            }

        $("#entermanagementplan").on('change keyup paste', function () {
                ApplyFilterManagementPlan();
                
            })

            function ApplyFilterManagementPlan() {
                let searchitem = $("#entermanagementplan").val()
                getManagementPlan(searchitem)
                
                }

        let managementplanlist = []
            $("#add-managementplan").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#entermanagementplan").val()
                        console.log($("#selectmanagementplan").val())
                        // let periodvalue = ""
                    if($("#selectmanagementplan").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Management Plan"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#entermanagementplan").val()
                            getManagementPlan(searchitem)
                        
                            managementplanlist.push(review)
                            console.log(managementplanlist)
                            
                            displayManagementPlan()
                            
                        })
                        
                    } else {
                        let review = $("#selectmanagementplan").val()
                    
                        managementplanlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayManagementPlan()
                        
                    }


                    console.log(managementplanlist)
                
            })

        $("#selectmanagementplan").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectmanagementplan").val()
                    
                    managementplanlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayManagementPlan()
            })

        function displayManagementPlan(){
                let managementplan = ``
                managementplanlist.forEach(val => {
                        console.log(val)
                    
                        managementplan += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#management_plan").html("<h2>Management Plan</h2>" + managementplan)
            }

        $("#discard-management-plan-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#management_plan").html("<h2>Management Plan</h2>")
                    managementplanlist = []
                })
                $("#add-management-plan-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#management_plan").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#patient_note_managementplan").html("<div>" + presenting_complain_html + "</div>")
                    $("#management_plan").html("<h2>Management Plan</h2>")
                    managementplanlist = []
                })


        //Final Diagnosis
        $("#final_diagnosis").html("<h2>Final Diagnosis</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getFinalDiagnosis(searchitem)

        function getFinalDiagnosis(searchitem){
                let getReview = "getReview"
                reviewtype = "Final Diagnosis"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectfinaldiagnosis").html(presentingcomplainlist)

                })
            }

        $("#enterfinaldiagnosis").on('change keyup paste', function () {
                ApplyFilterFinalDiagnosis();
                
            })

            function ApplyFilterFinalDiagnosis() {
                let searchitem = $("#enterfinaldiagnosis").val()
                getFinalDiagnosis(searchitem)
                
                }

        let finaldiagnosislist = []
            $("#add-finaldiagnosis").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enterfinaldiagnosis").val()
                        console.log($("#selectfinaldiagnosis").val())
                        // let periodvalue = ""
                    if($("#selectfinaldiagnosis").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Final Diagnosis"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enterfinaldiagnosis").val()
                            getFinalDiagnosis(searchitem)
                        
                            finaldiagnosislist.push(review)
                            console.log(finaldiagnosislist)
                            
                            displayFinalDiagnosis()
                            
                        })
                        
                    } else {
                        let review = $("#selectfinaldiagnosis").val()
                    
                        finaldiagnosislist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayFinalDiagnosis()
                        
                    }


                    console.log(finaldiagnosislist)
                
            })

        $("#selectfinaldiagnosis").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectfinaldiagnosis").val()
                    
                    finaldiagnosislist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayFinalDiagnosis()
            })

        function displayFinalDiagnosis(){
                let finaldiagnosis = ``
                finaldiagnosislist.forEach(val => {
                        console.log(val)
                    
                        finaldiagnosis += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#final_diagnosis").html("<h2>Final Diagnosis</h2>" + finaldiagnosis)
            }

        $("#discard-final-diagnosis-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#final_diagnosis").html("<h2>Final Diagnosis</h2>")
                    finaldiagnosislist = []
                })
                $("#add-final-diagnosis-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#final_diagnosis").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#patient_note_finaldiagnosis").html("<div>" + presenting_complain_html + "</div>")
                    $("#final_diagnosis").html("<h2>Final Diagnosis</h2>")
                    finaldiagnosislist = []
                })


        //Provisional Diagnosis Routine
            let provisionaldiagnosisroutinelist = []
            function getProvisionalDiagnosisRoutine(){
                let routinetype = "Provisional Diagnosis"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        provisionaldiagnosisroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectprovisionaldiagnosisroutine").html(presentingcomplaintroutineoptions)
                    //   let complaints = presentingcomplaintlist.records[0].description
                    //   console.log(complaints)
                    //   if(complaints!=null){
                    //       if(complaints.includes(",")){
                    //           let splitcomplaints = complaints.split(",")
                    //           let presentingcomplaintroutinelist = ``
                    //           splitcomplaints.forEach(element => {
                    //               presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                    //           });
                    //           $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    //       } else {
                    //           let presentingcomplaintroutinelist = `<option value="0,No Record">No Record</option>`
                    //           $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    //       }
                    //   } else {
                    //          $("#selectpresentingcomplainroutinelist").html("")
                    //     }
                    $("#selectprovisionaldiagnosisroutinelist").html("")
                })

            
            }
            getProvisionalDiagnosisRoutine()

            $("#add-provisionaldiagnosist-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterprovisionaldiagnosisroutine").val()
                let routinetype ="Provisional Diagnosis"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getProvisionalDiagnosisRoutine()
                })
            })

            $("#delete-provisionaldiagnosist-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectprovisionaldiagnosisroutinelist").val()
                let routineitem = $("#selectprovisionaldiagnosisroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectprovisionaldiagnosisroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                provisionaldiagnosisroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getProvisionalDiagnosisRoutine()
                })
                
            })


        
             $("#add-provisionaldiagnosis-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterprovisionaldiagnosis").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectprovisionaldiagnosisroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    provisionaldiagnosisroutinelist.records.forEach(val => {
                        if(val.id==routineid){
                            
                            let complaints = val.description
                            console.log(complaints)
                            if(complaints==null||complaints==""){
                                complaints = complain
                            } else {
                                complaints += "," + complain
                            }

                            //Update routine
                            let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                            $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                                console.log(data)
                                
                                getUpdateProvisionalDiagnosisRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoteprovisionaldiagnosisroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterprovisionaldiagnosis").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectprovisionaldiagnosisroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    provisionaldiagnosisroutinelist.records.forEach(val => {
                        if(val.id==routineid){
                            
                            let complaints = val.description
                            console.log(complaints)
                            if(complaints==null||complaints==""){
                                complaints = complain
                            } else {
                                complaints += "," + complain
                            }

                            //Update routine
                            let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                            $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                                console.log(data)
                                
                                getUpdateProvisionalDiagnosisRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateProvisionalDiagnosisRoutine(){
                let routinetype = "Provisional Diagnosis"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectprovisionaldiagnosisroutine").val()
                        provisionaldiagnosisroutinelist = data
                        data.records.forEach(val => {
                            console.log(val)
                            console.log(routinename, val.id)
                            let splitroutinename = routinename.split(",")
                            let routineid = splitroutinename[0]
                            if(routineid==val.id){
                                let presentingcomplaintroutinelist = ``
                                let complaints = val.description
                                console.log(complaints)
                                if(complaints.includes(",")){
                                        let splitcomplaints = complaints.split(",")
                                        let presentingcomplaintroutinelist = ``
                                        splitcomplaints.forEach(element => {
                                            presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                                        });
                                        $("#selectprovisionaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectprovisionaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addprovisionaldiagnosisroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectprovisionaldiagnosisroutine").val()
                provisionaldiagnosisroutinelist.records.forEach(val => {
                    console.log(val)
                    console.log(routinename, val.id)
                    let splitroutinename = routinename.split(",")
                    let routineid = splitroutinename[0]
                    if(routineid==val.id){
                        
                        let complaints = val.description
                        console.log(complaints)
                        if(complaints.includes(",")){
                                let splitcomplaints = complaints.split(",")
                                let presentingcomplaintroutinelist = ``
                                splitcomplaints.forEach(element => {
                                    provisionaldiagnosislist.push(element)
                                    console.log(provisionaldiagnosislist)
                                    
                                   
                                });
                                 displayProvisionalDiagnosis()
                            } else {
                               provisionaldiagnosislist.push(complaints)
                                    console.log(provisionaldiagnosislist)
                                    displayProvisionalDiagnosis()
                            }
                        
                    }
                });
            })


            $("#selectprovisionaldiagnosisroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectprovisionaldiagnosisroutinelist").val()
                let history = $("#selectprovisionaldiagnosisroutinelist").val()
                
                
                provisionaldiagnosislist.push(complain)
                console.log(provisionaldiagnosislist)
                displayProvisionalDiagnosis()
            })

            $("#selectprovisionaldiagnosisroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectprovisionaldiagnosisroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                provisionaldiagnosisroutinelist.records.forEach(val => {
                    if(val.id==routineid){
                        console.log("Found")
                        let complaints = val.description
                        if(complaints!=null){

                            if(complaints.includes(",")){
                                let splitcomplaints = complaints.split(",")
                                let presentingcomplaintroutinelist = ``
                                splitcomplaints.forEach(element => {
                                    presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                                });
                                $("#selectprovisionaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectprovisionaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectprovisionaldiagnosisroutinelist").html("")
                        }

                    }
                });
            })


            $("#removeprovisionaldiagnosisroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectprovisionaldiagnosisroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectprovisionaldiagnosisroutinelist").prop("selectedIndex")
                provisionaldiagnosisroutinelist.records.forEach(val => {
                    //  console.log(val.regimentname, selectroutine)
                    
                    if(selectroutine==val.regimentname){
                        let routineitems = val.description.split(",")
                        routineitems.splice(itemid,1)

                        let listitems = routineitems[0]
                        for(let i=1;i<routineitems.length;i++){
                            listitems += "," + routineitems[i]
                        }
                        console.log(listitems)
                        let presentingcomplaintroutinelist = ``
                        routineitems.forEach(element => {
                            presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                            
                        });
                        $("#selectprovisionaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                        provisionaldiagnosisroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistprovisionaldiagnosisroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                provisionaldiagnosisroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectprovisionaldiagnosisroutine").html(presentingcomplaintroutineoptions)
                $("#selectprovisionaldiagnosisroutinelist").html("")
                
                        
            })

            $("#clearprovisionaldiagnosisroutinelist").on("click", function(evt){
                evt.preventDefault()
                provisionaldiagnosislist = []
                                    console.log(provisionaldiagnosislist)
                                    displayProvisionalDiagnosis()
                        
            })

        

        //Management Plan Routine
            let managementplanroutinelist = []
            function getManagementPlanRoutine(){
                let routinetype = "Management Plan"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        managementplanroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectmanagementplanroutine").html(presentingcomplaintroutineoptions)
                    //   let complaints = presentingcomplaintlist.records[0].description
                    //   console.log(complaints)
                    //   if(complaints!=null){
                    //       if(complaints.includes(",")){
                    //           let splitcomplaints = complaints.split(",")
                    //           let presentingcomplaintroutinelist = ``
                    //           splitcomplaints.forEach(element => {
                    //               presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                    //           });
                    //           $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    //       } else {
                    //           let presentingcomplaintroutinelist = `<option value="0,No Record">No Record</option>`
                    //           $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    //       }
                    //   } else {
                    //          $("#selectpresentingcomplainroutinelist").html("")
                    //     }
                    $("#selectmanagementplanroutinelist").html("")
                })

            
            }
            getManagementPlanRoutine()

            $("#add-managementplant-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entermanagementplanroutine").val()
                let routinetype ="Management Plan"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getManagementPlanRoutine()
                })
            })

            $("#delete-managementplant-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectmanagementplanroutinelist").val()
                let routineitem = $("#selectmanagementplanroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectmanagementplanroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                managementplanroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getManagementPlanRoutine()
                })
                
            })


        
             $("#add-managementplan-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entermanagementplan").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectmanagementplanroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    managementplanroutinelist.records.forEach(val => {
                        if(val.id==routineid){
                            
                            let complaints = val.description
                            console.log(complaints)
                            if(complaints==null||complaints==""){
                                complaints = complain
                            } else {
                                complaints += "," + complain
                            }

                            //Update routine
                            let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                            $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                                console.log(data)
                                
                                getUpdateManagementPlanRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotemanagementplanroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entermanagementplan").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectmanagementplanroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    managementplanroutinelist.records.forEach(val => {
                        if(val.id==routineid){
                            
                            let complaints = val.description
                            console.log(complaints)
                            if(complaints==null||complaints==""){
                                complaints = complain
                            } else {
                                complaints += "," + complain
                            }

                            //Update routine
                            let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                            $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                                console.log(data)
                                
                                getUpdateManagementPlanRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateManagementPlanRoutine(){
                let routinetype = "Management Plan"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectmanagementplanroutine").val()
                        managementplanroutinelist = data
                        data.records.forEach(val => {
                            console.log(val)
                            console.log(routinename, val.id)
                            let splitroutinename = routinename.split(",")
                            let routineid = splitroutinename[0]
                            if(routineid==val.id){
                                let presentingcomplaintroutinelist = ``
                                let complaints = val.description
                                console.log(complaints)
                                if(complaints.includes(",")){
                                        let splitcomplaints = complaints.split(",")
                                        let presentingcomplaintroutinelist = ``
                                        splitcomplaints.forEach(element => {
                                            presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                                        });
                                        $("#selectmanagementplanroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectmanagementplanroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addmanagementplanroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectmanagementplanroutine").val()
                managementplanroutinelist.records.forEach(val => {
                    console.log(val)
                    console.log(routinename, val.id)
                    let splitroutinename = routinename.split(",")
                    let routineid = splitroutinename[0]
                    if(routineid==val.id){
                        
                        let complaints = val.description
                        console.log(complaints)
                        if(complaints.includes(",")){
                                let splitcomplaints = complaints.split(",")
                                let presentingcomplaintroutinelist = ``
                                splitcomplaints.forEach(element => {
                                    managementplanlist.push(element)
                                    console.log(managementplanlist)
                                    
                                   
                                });
                                 displayManagementPlan()
                            } else {
                               managementplanlist.push(complaints)
                                    console.log(managementplanlist)
                                    displayManagementPlan()
                            }
                        
                    }
                });
            })


            $("#selectmanagementplanroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectmanagementplanroutinelist").val()
                let history = $("#selectmanagementplanroutinelist").val()
                
                
                managementplanlist.push(complain)
                console.log(managementplanlist)
                displayManagementPlan()
            })

            $("#selectmanagementplanroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectmanagementplanroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                managementplanroutinelist.records.forEach(val => {
                    if(val.id==routineid){
                        console.log("Found")
                        let complaints = val.description
                        if(complaints!=null){

                            if(complaints.includes(",")){
                                let splitcomplaints = complaints.split(",")
                                let presentingcomplaintroutinelist = ``
                                splitcomplaints.forEach(element => {
                                    presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                                });
                                $("#selectmanagementplanroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectmanagementplanroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectmanagementplanroutinelist").html("")
                        }

                    }
                });
            })


            $("#removemanagementplanroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectmanagementplanroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectmanagementplanroutinelist").prop("selectedIndex")
                managementplanroutinelist.records.forEach(val => {
                    //  console.log(val.regimentname, selectroutine)
                    
                    if(selectroutine==val.regimentname){
                        let routineitems = val.description.split(",")
                        routineitems.splice(itemid,1)

                        let listitems = routineitems[0]
                        for(let i=1;i<routineitems.length;i++){
                            listitems += "," + routineitems[i]
                        }
                        console.log(listitems)
                        let presentingcomplaintroutinelist = ``
                        routineitems.forEach(element => {
                            presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                            
                        });
                        $("#selectmanagementplanroutinelist").html(presentingcomplaintroutinelist)
                        managementplanroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistmanagementplanroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                managementplanroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectmanagementplanroutine").html(presentingcomplaintroutineoptions)
                $("#selectmanagementplanroutinelist").html("")
                
                        
            })

            $("#clearmanagementplanroutinelist").on("click", function(evt){
                evt.preventDefault()
                managementplanlist = []
                                    console.log(managementplanlist)
                                    displayManagementPlan()
                        
            })

            //Ffinal Diagnosis Routine
            let finaldiagnosisroutinelist = []
            function getFfinalDiagnosisRoutine(){
                let routinetype = "Ffinal Diagnosis"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        finaldiagnosisroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectfinaldiagnosisroutine").html(presentingcomplaintroutineoptions)
                    //   let complaints = presentingcomplaintlist.records[0].description
                    //   console.log(complaints)
                    //   if(complaints!=null){
                    //       if(complaints.includes(",")){
                    //           let splitcomplaints = complaints.split(",")
                    //           let presentingcomplaintroutinelist = ``
                    //           splitcomplaints.forEach(element => {
                    //               presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                    //           });
                    //           $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    //       } else {
                    //           let presentingcomplaintroutinelist = `<option value="0,No Record">No Record</option>`
                    //           $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    //       }
                    //   } else {
                    //          $("#selectpresentingcomplainroutinelist").html("")
                    //     }
                    $("#selectfinaldiagnosisroutinelist").html("")
                })

            
            }
            getFfinalDiagnosisRoutine()

            $("#add-finaldiagnosist-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterfinaldiagnosisroutine").val()
                let routinetype ="Ffinal Diagnosis"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getFfinalDiagnosisRoutine()
                })
            })

            $("#delete-finaldiagnosist-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectfinaldiagnosisroutinelist").val()
                let routineitem = $("#selectfinaldiagnosisroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectfinaldiagnosisroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                finaldiagnosisroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getFfinalDiagnosisRoutine()
                })
                
            })


        
             $("#add-finaldiagnosis-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterfinaldiagnosis").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectfinaldiagnosisroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    finaldiagnosisroutinelist.records.forEach(val => {
                        if(val.id==routineid){
                            
                            let complaints = val.description
                            console.log(complaints)
                            if(complaints==null||complaints==""){
                                complaints = complain
                            } else {
                                complaints += "," + complain
                            }

                            //Update routine
                            let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                            $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                                console.log(data)
                                
                                getUpdateFfinalDiagnosisRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotefinaldiagnosisroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterfinaldiagnosis").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectfinaldiagnosisroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    finaldiagnosisroutinelist.records.forEach(val => {
                        if(val.id==routineid){
                            
                            let complaints = val.description
                            console.log(complaints)
                            if(complaints==null||complaints==""){
                                complaints = complain
                            } else {
                                complaints += "," + complain
                            }

                            //Update routine
                            let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                            $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                                console.log(data)
                                
                                getUpdateFfinalDiagnosisRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateFfinalDiagnosisRoutine(){
                let routinetype = "Ffinal Diagnosis"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectfinaldiagnosisroutine").val()
                        finaldiagnosisroutinelist = data
                        data.records.forEach(val => {
                            console.log(val)
                            console.log(routinename, val.id)
                            let splitroutinename = routinename.split(",")
                            let routineid = splitroutinename[0]
                            if(routineid==val.id){
                                let presentingcomplaintroutinelist = ``
                                let complaints = val.description
                                console.log(complaints)
                                if(complaints.includes(",")){
                                        let splitcomplaints = complaints.split(",")
                                        let presentingcomplaintroutinelist = ``
                                        splitcomplaints.forEach(element => {
                                            presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                                        });
                                        $("#selectfinaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectfinaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addfinaldiagnosisroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectfinaldiagnosisroutine").val()
                finaldiagnosisroutinelist.records.forEach(val => {
                    console.log(val)
                    console.log(routinename, val.id)
                    let splitroutinename = routinename.split(",")
                    let routineid = splitroutinename[0]
                    if(routineid==val.id){
                        
                        let complaints = val.description
                        console.log(complaints)
                        if(complaints.includes(",")){
                                let splitcomplaints = complaints.split(",")
                                let presentingcomplaintroutinelist = ``
                                splitcomplaints.forEach(element => {
                                    finaldiagnosislist.push(element)
                                    console.log(finaldiagnosislist)
                                    
                                   
                                });
                                 displayFfinalDiagnosis()
                            } else {
                               finaldiagnosislist.push(complaints)
                                    console.log(finaldiagnosislist)
                                    displayFinalDiagnosis()
                            }
                        
                    }
                });
            })


            $("#selectfinaldiagnosisroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectfinaldiagnosisroutinelist").val()
                let history = $("#selectfinaldiagnosisroutinelist").val()
                
                
                finaldiagnosislist.push(complain)
                console.log(finaldiagnosislist)
                displayFfinalDiagnosis()
            })

            $("#selectfinaldiagnosisroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectfinaldiagnosisroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                finaldiagnosisroutinelist.records.forEach(val => {
                    if(val.id==routineid){
                        console.log("Found")
                        let complaints = val.description
                        if(complaints!=null){

                            if(complaints.includes(",")){
                                let splitcomplaints = complaints.split(",")
                                let presentingcomplaintroutinelist = ``
                                splitcomplaints.forEach(element => {
                                    presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                                });
                                $("#selectfinaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectfinaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectfinaldiagnosisroutinelist").html("")
                        }

                    }
                });
            })


            $("#removefinaldiagnosisroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectfinaldiagnosisroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectfinaldiagnosisroutinelist").prop("selectedIndex")
                finaldiagnosisroutinelist.records.forEach(val => {
                    //  console.log(val.regimentname, selectroutine)
                    
                    if(selectroutine==val.regimentname){
                        let routineitems = val.description.split(",")
                        routineitems.splice(itemid,1)

                        let listitems = routineitems[0]
                        for(let i=1;i<routineitems.length;i++){
                            listitems += "," + routineitems[i]
                        }
                        console.log(listitems)
                        let presentingcomplaintroutinelist = ``
                        routineitems.forEach(element => {
                            presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                            
                        });
                        $("#selectfinaldiagnosisroutinelist").html(presentingcomplaintroutinelist)
                        finaldiagnosisroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistfinaldiagnosisroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                finaldiagnosisroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectfinaldiagnosisroutine").html(presentingcomplaintroutineoptions)
                $("#selectfinaldiagnosisroutinelist").html("")
                
                        
            })

            $("#clearfinaldiagnosisroutinelist").on("click", function(evt){
                evt.preventDefault()
                finaldiagnosislist = []
                                    console.log(finaldiagnosislist)
                                    displayFfinalDiagnosis()
                        
            })

})