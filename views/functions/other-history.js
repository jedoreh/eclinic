$(document).ready(function(){
    $("#past_history").html("<h2>Past History</h2>")
    $("#drug_history").html("<h2>Drug History</h2>")
    

    let searchitem = ""
    let historytype = ""
    getPastHistory(searchitem)
    getDrugHistory(searchitem)

    function getPastHistory(searchitem){
         let getHistory = "getHistory"
         historytype = "Past History"
         $.post("controllers/patient-note.php",{searchitem:searchitem, historytype:historytype, getHistory:getHistory},function(data){
             console.log(data)
            data = JSON.parse(data)
            let presentingcomplainlist = ``
            data.records.forEach(val => {
                // console.log(val.presentingcomplaint)
                presentingcomplainlist += `<option value="` + val.history + `">` + val.history + `</option>`
            });
            $("#selectpasthistory").html(presentingcomplainlist)

         })
     }
     function getDrugHistory(searchitem){
         let getHistory = "getHistory"
         historytype = "Drug History"
         $.post("controllers/patient-note.php",{searchitem:searchitem, historytype:historytype, getHistory:getHistory},function(data){
             console.log(data)
            data = JSON.parse(data)
            let presentingcomplainlist = ``
            data.records.forEach(val => {
                // console.log(val.presentingcomplaint)
                presentingcomplainlist += `<option value="` + val.history + `">` + val.history + `</option>`
            });
            $("#selectdrughistory").html(presentingcomplainlist)

         })
     }

     $("#enterpasthistory").on('change keyup paste', function () {
         ApplyFilterPastHistory();
         
     })

     function ApplyFilterPastHistory() {
        let searchitem = $("#enterpasthistory").val()
         getPastHistory(searchitem)
        
        }

    $("#enterdrughistory").on('change keyup paste', function () {
         ApplyFilterDrugHistory();
         
     })

     function ApplyFilterDrugHistory() {
        let searchitem = $("#enterdrughistory").val()
         getDrugHistory(searchitem)
        
        }
    
    let pasthistorylist = []
    $("#add-pasthistory").on("click", function(evt){
         evt.preventDefault()
         
                let history = $("#enterpasthistory").val()
                
                // let periodvalue = ""
            if($("#selectpasthistory").val()=="No History Found"){
                //Add presenting complain
                let addHistory = "addHistory"
                historytype = "Past History"
                $.post("controllers/patient-note.php",{historytype:historytype,history:history,addHistory:addHistory}, function(data){
                    console.log(data)
                    let searchitem = $("#enterpasthistory").val()
                    getPastHistory(searchitem)
                   
                    pasthistorylist.push(history)
                     console.log(pasthistorylist)
                    
                    displayPastHistory()
                    
                })
                
            } else {
                let history = $("#selectpasthistory").val()
               
                pasthistorylist.push(history)

                let historypresentingcomplaintlist = ``
                
                displayPastHistory()
                
            }


            console.log(pasthistorylist)
         
     })

     let drughistorylist = []
    $("#add-drughistory").on("click", function(evt){
         evt.preventDefault()
         
                let history = $("#enterdrughistory").val()
                
                // let periodvalue = ""
            if($("#selectdrughistory").val()=="No History Found"){
                //Add presenting complain
                let addHistory = "addHistory"
                historytype = "Drug History"
                $.post("controllers/patient-note.php",{historytype:historytype,history:history,addHistory:addHistory}, function(data){
                    console.log(data)
                    let searchitem = $("#enterdrughistory").val()
                    getDrugHistory(searchitem)
                   
                    drughistorylist.push(history)
                     console.log(drughistorylist)
                    
                    displayDrugHistory()
                    
                })
                
            } else {
                let history = $("#selectdrughistory").val()
               
                drughistorylist.push(history)

                let historypresentingcomplaintlist = ``
                
                displayDrugHistory()
                
            }


            console.log(drughistorylist)
         
     })

     $("#selectpasthistory").on("change", function(evt){
         evt.preventDefault()
          let history = $("#selectpasthistory").val()
               
            pasthistorylist.push(history)

            let historypresentingcomplaintlist = ``
            
            displayPastHistory()
     })

     $("#selectdrughistory").on("change", function(evt){
         evt.preventDefault()
          let history = $("#selectdrughistory").val()
               
            drughistorylist.push(history)

            let historypresentingcomplaintlist = ``
            
            displayDrugHistory()
     })

     function displayPastHistory(){
          let pasthistory = ``
          pasthistorylist.forEach(val => {
                console.log(val)
               
                pasthistory += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                
          });
          $("#past_history").html("<h2>Past History</h2>" + pasthistory)
      }

      function displayDrugHistory(){
          let drughistory = ``
          drughistorylist.forEach(val => {
                console.log(val)
               
                drughistory += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                
          });
          $("#drug_history").html("<h2>Drug History</h2>" + drughistory)
      }

       $("#discard-past-history-button").on("click", function(evt){
            evt.preventDefault()
            $("#past_history").html("<h2>Past History</h2>")
            pasthistorylist = []
        })
        $("#add-past-history-button").on("click", function(evt){
            evt.preventDefault()
            console.log("test")
            presenting_complain_html = $("#past_history").html()
            console.log(presenting_complain_html)
            $("#otherhistory_past").html("<h2>Other History</h2><div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
            $("#past_history").html("<h2>Past History</h2>")
            pasthistorylist = []
        })

         $("#discard-drug-history-button").on("click", function(evt){
            evt.preventDefault()
            $("#drug_history").html("<h2>Drug History</h2>")
            drughistorylist = []
        })
        $("#add-drug-history-button").on("click", function(evt){
            evt.preventDefault()
            console.log("test")
            presenting_complain_html = $("#drug_history").html()
            console.log(presenting_complain_html)
            // let other_history = $("#patient_note_otherhistory").html()
            $("#otherhistory_drug").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
            $("#drug_history").html("<h2>Drug History</h2>")
            drughistorylist = []
        })


        //Family History
        $("#family_history").html("<h2>Family History</h2>")

getFamilyHistory(searchitem)

function getFamilyHistory(searchitem){
         let getHistory = "getHistory"
         historytype = "Family History"
         $.post("controllers/patient-note.php",{searchitem:searchitem, historytype:historytype, getHistory:getHistory},function(data){
             console.log(data)
            data = JSON.parse(data)
            let presentingcomplainlist = ``
            data.records.forEach(val => {
                // console.log(val.presentingcomplaint)
                presentingcomplainlist += `<option value="` + val.history + `">` + val.history + `</option>`
            });
            $("#selectfamilyhistory").html(presentingcomplainlist)

         })
     }

 $("#enterfamilyhistory").on('change keyup paste', function () {
         ApplyFilterFamilyHistory();
         
     })

     function ApplyFilterFamilyHistory() {
        let searchitem = $("#enterfamilyhistory").val()
         getFamilyHistory(searchitem)
        
        }

 let familyhistorylist = []

    $("#add-familyhistory").on("click", function(evt){
         evt.preventDefault()
         
                let history = $("#enterfamilyhistory").val()
                
                // let periodvalue = ""
            if($("#selectfamilyhistory").val()=="No History Found"){
                //Add presenting complain
                let addHistory = "addHistory"
                historytype = "Family History"
                $.post("controllers/patient-note.php",{historytype:historytype,history:history,addHistory:addHistory}, function(data){
                    console.log(data)
                    let searchitem = $("#enterfamilyhistory").val()
                    getFamilyHistory(searchitem)
                   
                    familyhistorylist.push(history)
                     console.log(familyhistorylist)
                    
                    displayFamilyHistory()
                    
                })
                
            } else {
                let history = $("#selectfamilyhistory").val()
               
                familyhistorylist.push(history)

                let historypresentingcomplaintlist = ``
                
                displayFamilyHistory()
                
            }


            console.log(familyhistorylist)
         
     })

 $("#selectfamilyhistory").on("change", function(evt){
         evt.preventDefault()
          let history = $("#selectfamilyhistory").val()
               
            familyhistorylist.push(history)

            let historypresentingcomplaintlist = ``
            
            displayFamilyHistory()
     })

   function displayFamilyHistory(){
          let familyhistory = ``
          familyhistorylist.forEach(val => {
                console.log(val)
               
                familyhistory += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                
          });
          $("#family_history").html("<h2>Family History</h2>" + familyhistory)
      }

  $("#discard-family-history-button").on("click", function(evt){
            evt.preventDefault()
            $("#family_history").html("<h2>Family History</h2>")
            familyhistorylist = []
        })
        $("#add-family-history-button").on("click", function(evt){
            evt.preventDefault()
            console.log("test")
            presenting_complain_html = $("#family_history").html()
            console.log(presenting_complain_html)
            // let other_history = $("#patient_note_otherhistory").html()
            $("#otherhistory_family").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
            $("#family_history").html("<h2>Family History</h2>")
            familyhistorylist = []
        })

        //Social History
        $("#social_history").html("<h2>Social History</h2>")

        getSocialHistory(searchitem)

        function getSocialHistory(searchitem){
                let getHistory = "getHistory"
                historytype = "Social History"
                $.post("controllers/patient-note.php",{searchitem:searchitem, historytype:historytype, getHistory:getHistory},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.history + `">` + val.history + `</option>`
                    });
                    $("#selectsocialhistory").html(presentingcomplainlist)

                })
            }

        $("#entersocialhistory").on('change keyup paste', function () {
                ApplyFilterSocialHistory();
                
            })

            function ApplyFilterSocialHistory() {
                let searchitem = $("#entersocialhistory").val()
                getSocialHistory(searchitem)
                
                }

        let socialhistorylist = []
            $("#add-socialhistory").on("click", function(evt){
                evt.preventDefault()
                
                        let history = $("#entersocialhistory").val()
                        console.log($("#selectsocialhistory").val())
                        // let periodvalue = ""
                    if($("#selectsocialhistory").val()=="No History Found"){
                        //Add presenting complain
                        let addHistory = "addHistory"
                        historytype = "Social History"
                        $.post("controllers/patient-note.php",{historytype:historytype,history:history,addHistory:addHistory}, function(data){
                            console.log(data)
                            let searchitem = $("#entersocialhistory").val()
                            getSocialHistory(searchitem)
                        
                            socialhistorylist.push(history)
                            console.log(socialhistorylist)
                            
                            displaySocialHistory()
                            
                        })
                        
                    } else {
                        let history = $("#selectsocialhistory").val()
                    
                        socialhistorylist.push(history)

                        let historypresentingcomplaintlist = ``
                        
                        displaySocialHistory()
                        
                    }


                    console.log(socialhistorylist)
                
            })

        $("#selectsocialhistory").on("change", function(evt){
                evt.preventDefault()
                let history = $("#selectsocialhistory").val()
                    
                    socialhistorylist.push(history)

                    let historypresentingcomplaintlist = ``
                    
                    displaySocialHistory()
            })

        function displaySocialHistory(){
                let socialhistory = ``
                socialhistorylist.forEach(val => {
                        console.log(val)
                    
                        socialhistory += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#social_history").html("<h2>Social History</h2>" + socialhistory)
            }

        $("#discard-social-history-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#social_history").html("<h2>Social History</h2>")
                    socialhistorylist = []
                })
                $("#add-social-history-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#social_history").html()
                    console.log(presenting_complain_html)
                    // let other_history = $("#patient_note_otherhistory").html()
                    $("#otherhistory_social").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#social_history").html("<h2>Social History</h2>")
                    socialhistorylist = []
                })


        //Gynaecology History
        $("#gynaecology_history").html("<h2>Gynaecology History</h2>")

        getGynaecologyHistory(searchitem)

        function getGynaecologyHistory(searchitem){
                let getHistory = "getHistory"
                historytype = "Gynaecology History"
                $.post("controllers/patient-note.php",{searchitem:searchitem, historytype:historytype, getHistory:getHistory},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.history + `">` + val.history + `</option>`
                    });
                    $("#selectgynaecologyhistory").html(presentingcomplainlist)

                })
            }

        $("#entergynaecologyhistory").on('change keyup paste', function () {
                ApplyFilterGynaecologyHistory();
                
            })

            function ApplyFilterGynaecologyHistory() {
                let searchitem = $("#entergynaecologyhistory").val()
                getGynaecologyHistory(searchitem)
                
                }

        let gynaecologyhistorylist = []
            $("#add-gynaecologyhistory").on("click", function(evt){
                evt.preventDefault()
                
                        let history = $("#entergynaecologyhistory").val()
                        console.log($("#selectgynaecologyhistory").val())
                        // let periodvalue = ""
                    if($("#selectgynaecologyhistory").val()=="No History Found"){
                        //Add presenting complain
                        let addHistory = "addHistory"
                        historytype = "Gynaecology History"
                        $.post("controllers/patient-note.php",{historytype:historytype,history:history,addHistory:addHistory}, function(data){
                            console.log(data)
                            let searchitem = $("#entergynaecologyhistory").val()
                            getGynaecologyHistory(searchitem)
                        
                            gynaecologyhistorylist.push(history)
                            console.log(gynaecologyhistorylist)
                            
                            displayGynaecologyHistory()
                            
                        })
                        
                    } else {
                        let history = $("#selectgynaecologyhistory").val()
                    
                        gynaecologyhistorylist.push(history)

                        let historypresentingcomplaintlist = ``
                        
                        displayGynaecologyHistory()
                        
                    }


                    console.log(gynaecologyhistorylist)
                
            })

        $("#selectgynaecologyhistory").on("change", function(evt){
                evt.preventDefault()
                let history = $("#selectgynaecologyhistory").val()
                    
                    gynaecologyhistorylist.push(history)

                    let historypresentingcomplaintlist = ``
                    
                    displayGynaecologyHistory()
            })

        function displayGynaecologyHistory(){
                let gynaecologyhistory = ``
                gynaecologyhistorylist.forEach(val => {
                        console.log(val)
                    
                        gynaecologyhistory += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#gynaecology_history").html("<h2>Gynaecology History</h2>" + gynaecologyhistory)
            }

        $("#discard-gynaecology-history-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#gynaecology_history").html("<h2>Gynaecology History</h2>")
                    gynaecologyhistorylist = []
                })
                $("#add-gynaecology-history-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#gynaecology_history").html()
                    console.log(presenting_complain_html)
                    // let other_history = $("#patient_note_otherhistory").html()
                    $("#otherhistory_gynaecology").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#gynaecology_history").html("<h2>Gynaecology History</h2>")
                    gynaecologyhistorylist = []
                })




            //Past History Routine
            let pasthistoryroutinelist = []
            function getPastHistoryRoutine(){
                let routinetype = "Past History"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        pasthistoryroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectpasthistoryroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectpasthistoryroutinelist").html("")
                })

            
            }
            getPastHistoryRoutine()

            $("#add-pasthistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterpasthistoryroutine").val()
                let routinetype ="Past History"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getPastHistoryRoutine()
                })
            })

            $("#delete-pasthistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectpasthistoryroutinelist").val()
                let routineitem = $("#selectpasthistoryroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectpasthistoryroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                pasthistoryroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getPastHistoryRoutine()
                })
                
            })


        
             $("#add-pasthistory-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterpasthistory").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectpasthistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    pasthistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdatePastHistoryRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotepasthistoryroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterpasthistory").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectpasthistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    pasthistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdatePastHistoryRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdatePastHistoryRoutine(){
                let routinetype = "Past History"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectpasthistoryroutine").val()
                        pasthistoryroutinelist = data
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
                                        $("#selectpasthistoryroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectpasthistoryroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addpasthistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectpasthistoryroutine").val()
                pasthistoryroutinelist.records.forEach(val => {
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
                                    pasthistorylist.push(element)
                                    console.log(pasthistorylist)
                                    
                                   
                                });
                                 displayPastHistory()
                            } else {
                               pasthistorylist.push(complaints)
                                    console.log(pasthistorylist)
                                    displayPastHistory()
                            }
                        
                    }
                });
            })


            $("#selectpasthistoryroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectpasthistoryroutinelist").val()
                let history = $("#selectpasthistoryroutinelist").val()
                
                
                pasthistorylist.push(complain)
                console.log(pasthistorylist)
                displayPastHistory()
            })

            $("#selectpasthistoryroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectpasthistoryroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                pasthistoryroutinelist.records.forEach(val => {
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
                                $("#selectpasthistoryroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectpasthistoryroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectpasthistoryroutinelist").html("")
                        }

                    }
                });
            })


            $("#removepasthistoryroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectpasthistoryroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectpasthistoryroutinelist").prop("selectedIndex")
                pasthistoryroutinelist.records.forEach(val => {
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
                        $("#selectpasthistoryroutinelist").html(presentingcomplaintroutinelist)
                        pasthistoryroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistpasthistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                pasthistoryroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectpasthistoryroutine").html(presentingcomplaintroutineoptions)
                $("#selectpasthistoryroutinelist").html("")
                
                        
            })

            $("#clearpasthistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                pasthistorylist = []
                                    console.log(pasthistorylist)
                                    displayPastHistory()
                        
            })


            //Drug History Routine
            let drughistoryroutinelist = []
            function getDrugHistoryRoutine(){
                let routinetype = "Drug History"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        drughistoryroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectdrughistoryroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectdrughistoryroutinelist").html("")
                })

            
            }
            getDrugHistoryRoutine()

            $("#add-drughistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterdrughistoryroutine").val()
                let routinetype ="Drug History"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getDrugHistoryRoutine()
                })
            })

            $("#delete-drughistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectdrughistoryroutinelist").val()
                let routineitem = $("#selectdrughistoryroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectdrughistoryroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                drughistoryroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getDrugHistoryRoutine()
                })
                
            })


        
             $("#add-drughistory-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterdrughistory").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectdrughistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    drughistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateDrugHistoryRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotedrughistoryroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterdrughistory").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectdrughistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    drughistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateDrugHistoryRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateDrugHistoryRoutine(){
                let routinetype = "Drug History"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectdrughistoryroutine").val()
                        drughistoryroutinelist = data
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
                                        $("#selectdrughistoryroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectdrughistoryroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#adddrughistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectdrughistoryroutine").val()
                drughistoryroutinelist.records.forEach(val => {
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
                                    drughistorylist.push(element)
                                    console.log(drughistorylist)
                                    
                                   
                                });
                                 displayDrugHistory()
                            } else {
                               drughistorylist.push(complaints)
                                    console.log(drughistorylist)
                                    displayDrugHistory()
                            }
                        
                    }
                });
            })


            $("#selectdrughistoryroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectdrughistoryroutinelist").val()
                let history = $("#selectdrughistoryroutinelist").val()
                
                
                drughistorylist.push(complain)
                console.log(drughistorylist)
                displayDrugHistory()
            })

            $("#selectdrughistoryroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectdrughistoryroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                drughistoryroutinelist.records.forEach(val => {
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
                                $("#selectdrughistoryroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectdrughistoryroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectdrughistoryroutinelist").html("")
                        }

                    }
                });
            })


            $("#removedrughistoryroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectdrughistoryroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectdrughistoryroutinelist").prop("selectedIndex")
                drughistoryroutinelist.records.forEach(val => {
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
                        $("#selectdrughistoryroutinelist").html(presentingcomplaintroutinelist)
                        drughistoryroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistdrughistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                drughistoryroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectdrughistoryroutine").html(presentingcomplaintroutineoptions)
                $("#selectdrughistoryroutinelist").html("")
                
                        
            })

            $("#cleardrughistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                drughistorylist = []
                                    console.log(drughistorylist)
                                    displayDrugHistory()
                        
            })

            //Family History Routine
            let familyhistoryroutinelist = []
            function getFamilyHistoryRoutine(){
                let routinetype = "Family History"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        familyhistoryroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectfamilyhistoryroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectfamilyhistoryroutinelist").html("")
                })

            
            }
            getFamilyHistoryRoutine()

            $("#add-familyhistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterfamilyhistoryroutine").val()
                let routinetype ="Family History"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getFamilyHistoryRoutine()
                })
            })

            $("#delete-familyhistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectfamilyhistoryroutinelist").val()
                let routineitem = $("#selectfamilyhistoryroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectfamilyhistoryroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                familyhistoryroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getFamilyHistoryRoutine()
                })
                
            })


        
             $("#add-familyhistory-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterfamilyhistory").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectfamilyhistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    familyhistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateFamilyHistoryRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotefamilyhistoryroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterfamilyhistory").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectfamilyhistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    familyhistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateFamilyHistoryRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateFamilyHistoryRoutine(){
                let routinetype = "Family History"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectfamilyhistoryroutine").val()
                        familyhistoryroutinelist = data
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
                                        $("#selectfamilyhistoryroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectfamilyhistoryroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addfamilyhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectfamilyhistoryroutine").val()
                familyhistoryroutinelist.records.forEach(val => {
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
                                    familyhistorylist.push(element)
                                    console.log(familyhistorylist)
                                    
                                   
                                });
                                 displayFamilyHistory()
                            } else {
                               familyhistorylist.push(complaints)
                                    console.log(familyhistorylist)
                                    displayFamilyHistory()
                            }
                        
                    }
                });
            })


            $("#selectfamilyhistoryroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectfamilyhistoryroutinelist").val()
                let history = $("#selectfamilyhistoryroutinelist").val()
                
                
                familyhistorylist.push(complain)
                console.log(familyhistorylist)
                displayFamilyHistory()
            })

            $("#selectfamilyhistoryroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectfamilyhistoryroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                familyhistoryroutinelist.records.forEach(val => {
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
                                $("#selectfamilyhistoryroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectfamilyhistoryroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectfamilyhistoryroutinelist").html("")
                        }

                    }
                });
            })


            $("#removefamilyhistoryroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectfamilyhistoryroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectfamilyhistoryroutinelist").prop("selectedIndex")
                familyhistoryroutinelist.records.forEach(val => {
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
                        $("#selectfamilyhistoryroutinelist").html(presentingcomplaintroutinelist)
                        familyhistoryroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistfamilyhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                familyhistoryroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectfamilyhistoryroutine").html(presentingcomplaintroutineoptions)
                $("#selectfamilyhistoryroutinelist").html("")
                
                        
            })

            $("#clearfamilyhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                familyhistorylist = []
                                    console.log(familyhistorylist)
                                    displayFamilyHistory()
                        
            })


            //Social History Routine
            let socialhistoryroutinelist = []
            function getSocialHistoryRoutine(){
                let routinetype = "Social History"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        socialhistoryroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectsocialhistoryroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectsocialhistoryroutinelist").html("")
                })

            
            }
            getSocialHistoryRoutine()

            $("#add-socialhistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entersocialhistoryroutine").val()
                let routinetype ="Social History"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getSocialHistoryRoutine()
                })
            })

            $("#delete-socialhistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectsocialhistoryroutinelist").val()
                let routineitem = $("#selectsocialhistoryroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectsocialhistoryroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                socialhistoryroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getSocialHistoryRoutine()
                })
                
            })


        
             $("#add-socialhistory-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entersocialhistory").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectsocialhistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    socialhistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateSocialHistoryRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotesocialhistoryroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entersocialhistory").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectsocialhistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    socialhistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateSocialHistoryRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateSocialHistoryRoutine(){
                let routinetype = "Social History"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectsocialhistoryroutine").val()
                        socialhistoryroutinelist = data
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
                                        $("#selectsocialhistoryroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectsocialhistoryroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addsocialhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectsocialhistoryroutine").val()
                socialhistoryroutinelist.records.forEach(val => {
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
                                    socialhistorylist.push(element)
                                    console.log(socialhistorylist)
                                    
                                   
                                });
                                 displaySocialHistory()
                            } else {
                               socialhistorylist.push(complaints)
                                    console.log(socialhistorylist)
                                    displaySocialHistory()
                            }
                        
                    }
                });
            })


            $("#selectsocialhistoryroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectsocialhistoryroutinelist").val()
                let history = $("#selectsocialhistoryroutinelist").val()
                
                
                socialhistorylist.push(complain)
                console.log(socialhistorylist)
                displaySocialHistory()
            })

            $("#selectsocialhistoryroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectsocialhistoryroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                socialhistoryroutinelist.records.forEach(val => {
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
                                $("#selectsocialhistoryroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectsocialhistoryroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectsocialhistoryroutinelist").html("")
                        }

                    }
                });
            })


            $("#removesocialhistoryroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectsocialhistoryroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectsocialhistoryroutinelist").prop("selectedIndex")
                socialhistoryroutinelist.records.forEach(val => {
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
                        $("#selectsocialhistoryroutinelist").html(presentingcomplaintroutinelist)
                        socialhistoryroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistsocialhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                socialhistoryroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectsocialhistoryroutine").html(presentingcomplaintroutineoptions)
                $("#selectsocialhistoryroutinelist").html("")
                
                        
            })

            $("#clearsocialhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                socialhistorylist = []
                                    console.log(socialhistorylist)
                                    displaySocialHistory()
                        
            })


            //Gynaecology History Routine
            let gynaecologyhistoryroutinelist = []
            function getGynaecologyHistoryRoutine(){
                let routinetype = "Gynaecology History"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        gynaecologyhistoryroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectgynaecologyhistoryroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectgynaecologyhistoryroutinelist").html("")
                })

            
            }
            getGynaecologyHistoryRoutine()

            $("#add-gynaecologyhistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entergynaecologyhistoryroutine").val()
                let routinetype ="Gynaecology History"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getGynaecologyHistoryRoutine()
                })
            })

            $("#delete-gynaecologyhistoryt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectgynaecologyhistoryroutinelist").val()
                let routineitem = $("#selectgynaecologyhistoryroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectgynaecologyhistoryroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                gynaecologyhistoryroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getGynaecologyHistoryRoutine()
                })
                
            })


        
             $("#add-gynaecologyhistory-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entergynaecologyhistory").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectgynaecologyhistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    gynaecologyhistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateGynaecologyHistoryRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotegynaecologyhistoryroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entergynaecologyhistory").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectgynaecologyhistoryroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    gynaecologyhistoryroutinelist.records.forEach(val => {
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
                                
                                getUpdateGynaecologyHistoryRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateGynaecologyHistoryRoutine(){
                let routinetype = "Gynaecology History"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectgynaecologyhistoryroutine").val()
                        gynaecologyhistoryroutinelist = data
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
                                        $("#selectgynaecologyhistoryroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectgynaecologyhistoryroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addgynaecologyhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectgynaecologyhistoryroutine").val()
                gynaecologyhistoryroutinelist.records.forEach(val => {
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
                                    gynaecologyhistorylist.push(element)
                                    console.log(gynaecologyhistorylist)
                                    
                                   
                                });
                                 displayGynaecologyHistory()
                            } else {
                               gynaecologyhistorylist.push(complaints)
                                    console.log(gynaecologyhistorylist)
                                    displayGynaecologyHistory()
                            }
                        
                    }
                });
            })


            $("#selectgynaecologyhistoryroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectgynaecologyhistoryroutinelist").val()
                let history = $("#selectgynaecologyhistoryroutinelist").val()
                
                
                gynaecologyhistorylist.push(complain)
                console.log(gynaecologyhistorylist)
                displayGynaecologyHistory()
            })

            $("#selectgynaecologyhistoryroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectgynaecologyhistoryroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                gynaecologyhistoryroutinelist.records.forEach(val => {
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
                                $("#selectgynaecologyhistoryroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectgynaecologyhistoryroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectgynaecologyhistoryroutinelist").html("")
                        }

                    }
                });
            })


            $("#removegynaecologyhistoryroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectgynaecologyhistoryroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectgynaecologyhistoryroutinelist").prop("selectedIndex")
                gynaecologyhistoryroutinelist.records.forEach(val => {
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
                        $("#selectgynaecologyhistoryroutinelist").html(presentingcomplaintroutinelist)
                        gynaecologyhistoryroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistgynaecologyhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                gynaecologyhistoryroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectgynaecologyhistoryroutine").html(presentingcomplaintroutineoptions)
                $("#selectgynaecologyhistoryroutinelist").html("")
                
                        
            })

            $("#cleargynaecologyhistoryroutinelist").on("click", function(evt){
                evt.preventDefault()
                gynaecologyhistorylist = []
                                    console.log(gynaecologyhistorylist)
                                    displayGynaecologyHistory()
                        
            })
})