$(document).ready(function(){
    let presenting_complain_html = ""
    //get editable content presenting complaint
    $("#presenting_complaint").html("<h2>Presenting Complaint</h2>")
    
    $("#history_presenting_complaint").html("<h2>History of Presenting Complaint</h2>")
    let getuserdetails = "getuserdetails"
    let username = ""
    $.post("controllers/masterpage.php", {getuserdetails:getuserdetails}, function(data){
        if(data=="Not Logged In"){
            $("#username").html(data)
        } else {
              data = JSON.parse(data)
           username = data.person
        }
        console.log(username)
        $("#patient_note_date").html("<h3>Updated By " + username + "    " + $("#sysdate").html() + "   " + $("#systime").html() + "</h3>")

    })

    
    $("#add-presenting-complaint-button").on("click", function(evt){
        evt.preventDefault()
        console.log($("#presenting_complaint").html())
    })

    let searchitem = ""
    getPresentingComplaint(searchitem)

     $("#enterpresentingcomplain").on('change keyup paste', function () {
         ApplyFilterPresentingComplaint();
         
     })

     function ApplyFilterPresentingComplaint() {
          let searchitem = $("#enterpresentingcomplain").val()
         getPresentingComplaint(searchitem)
        
        }

    
    let selectpresentingcomplainoptions = ``

     function getPresentingComplaint(searchitem){
         let getPresentingComplaint = "getPresentingComplaint"
         $.post("controllers/patient-note.php",{searchitem:searchitem, getPresentingComplaint:getPresentingComplaint},function(data){
             console.log(data)
            data = JSON.parse(data)
            let presentingcomplainlist = ``
            data.records.forEach(val => {
                // console.log(val.presentingcomplaint)
                presentingcomplainlist += `<option value="` + val.presentingcomplaint + `">` + val.presentingcomplaint + `</option>`
            });
            selectpresentingcomplainoptions = presentingcomplainlist
            $("#selectpresentingcomplain").html(presentingcomplainlist)

         })
     }

     let presentingcomplainthistorylist = []
     let complainhistorylist = []

     $("#add-presentingcomplaint-list-button").on("click", function(evt){
         evt.preventDefault()
         let period = ""
                let presentingcomplain = $("#enterpresentingcomplain").val()
                
                let periodvalue = ""
            if($("#selectpresentingcomplain").val()=="No Record Found"){
                //Add presenting complain
                let addPresentingComplain = "addPresentingComplain"
                
                $.post("controllers/patient-note.php",{presentingcomplain:presentingcomplain,addPresentingComplain:addPresentingComplain}, function(data){
                    console.log(data)
                    let searchitem = $("#enterpresentingcomplain").val()
                    let complainoption = `<option value="` + searchitem + `">` + searchitem + "</option>"
                    // selectpresentingcomplainoptions = presentingcomplainlist
                    $("#selectpresentingcomplain").html(complainoption + selectpresentingcomplainoptions)
                    let presentingcomplain1 = $("#enterpresentingcomplain").val()
                    let complainthistory = {
                        complain:presentingcomplain1,
                        period:period,
                        periodvalue:periodvalue,
                        history:[]
                    }
                    presentingcomplainthistorylist.push(complainthistory)
                    

                    let historypresentingcomplaintlist = ``
                    let listofpresentingcomplain=``
                    presentingcomplainthistorylist.forEach(val => {
                        console.log(val)
                        historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                        listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                    });
                    $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                    $(".listofpresentingcomplain").html(listofpresentingcomplain)
                    $("#enterpresentingcomplain").val("")
                    $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                        $("#selectpresentingcomplainlist").val(complain)
                        let history = complain
                    
                         $("#selectpresentingcomplainlist").val(complain)
                         $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"
                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                           
                            
                        })

                    })


                    
                     displayPresentingComplain()
                    displayHistoryPresentingComplain()
                    getPresentingComplainHistory()
                    
                })

                getPresentingComplaint("")
                
            } else {
                let presentingcomplain1 = $("#selectpresentingcomplain").val()
                let complainthistory = {
                    complain:presentingcomplain1,
                    period:period,
                    periodvalue:periodvalue,
                    history:[]
                }
                presentingcomplainthistorylist.push(complainthistory)

               let historypresentingcomplaintlist = ``
                let listofpresentingcomplain=``
                presentingcomplainthistorylist.forEach(val => {
                    console.log(val)
                    historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                    listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                });
                $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                $(".listofpresentingcomplain").html(listofpresentingcomplain)
                $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                        let history = complain
                        $("#selectpresentingcomplainlist").val(complain)
                        $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"
                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                            
                        })

                    })


                    

                displayPresentingComplain()
                displayHistoryPresentingComplain()
                getPresentingComplainHistory()
            }


            
         
     })

     $("#testhighlight").on("click", function(evt){
         evt.preventDefault()
         
            let newcomplains = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
            console.log($("#presenting_complaint").html())

           
         let routine = $("#selectpresentingcomplainroutine").val()
         let splitroutine = routine.split(",")
         let routineid = splitroutine[0]
          presentingcomplaintlist.records.forEach(val => {
                if(val.id==routineid){
                    // console.log("Found")
                    let complaints = val.description
                    if(complaints==null||complaints==""){
                        complaints = newcomplains
                    } else {
                        complaints += "," + newcomplains
                    }

                    let presentingcomplaintroutinelist = ``
                    let routineitems = complaints.split(",")
                     routineitems.forEach(element => {
                        presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                        
                    });
                    $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                

                    //Update routine
                    let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                    $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                        console.log(data)
                        getPresentingComplainRoutine()
                    })
                }
            });
     })

     $("#add-presentingcomplaint-list-button2").on("click", function(evt){
         evt.preventDefault()
         let period = ""
                let presentingcomplain = $("#enterpresentingcomplain").val()
                
                let periodvalue = ""
            if($("#selectpresentingcomplain").val()=="No Record Found"){
                //Add presenting complain
                let addPresentingComplain = "addPresentingComplain"
                
                $.post("controllers/patient-note.php",{presentingcomplain:presentingcomplain,addPresentingComplain:addPresentingComplain}, function(data){
                    console.log(data)
                    let searchitem = $("#enterpresentingcomplain").val()
                    let complainoption = `<option value="` + searchitem + `">` + searchitem + "</option>"
                    // selectpresentingcomplainoptions = presentingcomplainlist
                    $("#selectpresentingcomplain").html(complainoption + selectpresentingcomplainoptions)
                    let presentingcomplain1 = $("#enterpresentingcomplain").val()
                    let complainthistory = {
                        complain:presentingcomplain1,
                        period:period,
                        periodvalue:periodvalue,
                        history:[]
                    }
                    presentingcomplainthistorylist.push(complainthistory)
                    

                    let historypresentingcomplaintlist = ``
                    let listofpresentingcomplain=``
                    presentingcomplainthistorylist.forEach(val => {
                        console.log(val)
                        historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                        listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                    });
                    $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                    $(".listofpresentingcomplain").html(listofpresentingcomplain)
                    $("#enterpresentingcomplain").val("")
                    $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                        $("#selectpresentingcomplainlist").val(complain)
                        let history = complain
                    
                         $("#selectpresentingcomplainlist").val(complain)
                         $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"
                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                           
                            
                        })

                    })


                    
                     displayPresentingComplain()
                    displayHistoryPresentingComplain()
                    getPresentingComplainHistory()
                    
                })

                getPresentingComplaint("")
                
            } else {
                let presentingcomplain1 = $("#selectpresentingcomplain").val()
                let complainthistory = {
                    complain:presentingcomplain1,
                    period:period,
                    periodvalue:periodvalue,
                    history:[]
                }
                presentingcomplainthistorylist.push(complainthistory)

               let historypresentingcomplaintlist = ``
                let listofpresentingcomplain=``
                presentingcomplainthistorylist.forEach(val => {
                    console.log(val)
                    historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                    listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                });
                $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                $(".listofpresentingcomplain").html(listofpresentingcomplain)
                $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                        let history = complain
                        $("#selectpresentingcomplainlist").val(complain)
                        $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"
                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                            
                        })

                    })


                    

                displayPresentingComplain()
                displayHistoryPresentingComplain()
                getPresentingComplainHistory()
            }


            
         
     })

     $("#delete-presentingcomplaint-button").on("click", function(evt){
         evt.preventDefault()
         let complain = $("#selectpresentingcomplain").val()
         console.log(complain)
         let deletePresentingComplain = "deletePresentingComplain"
         $.post("controllers/patient-note.php",{complain:complain,deletePresentingComplain:deletePresentingComplain}, function(data){

             let searchitem = ""
             getPresentingComplaint(searchitem)

         })
     })

     $("#removepresentingcomplainroutine").on("click", function(evt){
         evt.preventDefault()
         console.log(presentingcomplaintlist)
        //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
         let selectroutine = $("#selectpresentingcomplainroutine").val()
        let splitselectroutine = selectroutine.split(",")
        selectroutine = splitselectroutine[1]
        let routineid = splitselectroutine[0]
        let count = 0
        let itemid = $("#selectpresentingcomplainroutinelist").prop("selectedIndex")
         presentingcomplaintlist.records.forEach(val => {
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
                $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                 presentingcomplaintlist.records[count].description = listitems

                let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                
                $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                    console.log(data)

                }) 
             }
             count++
         });
     })

     $("#addfromnotepresentingcomplainroutine").on("click",function(evt){
         evt.preventDefault()
         let newcomplains = ""
         presentingcomplainthistorylist.forEach(val => {
             if(presentingcomplainthistorylist.length==1){
                 newcomplains += val.complain
             } else {
                 newcomplains += "," + val.complain
             }
            
         });
         let routine = $("#selectpresentingcomplainroutine").val()
         let splitroutine = routine.split(",")
         let routineid = splitroutine[0]
          presentingcomplaintlist.records.forEach(val => {
                if(val.id==routineid){
                    // console.log("Found")
                    let complaints = val.description
                    if(complaints==null||complaints==""){
                        complaints = newcomplains
                    } else {
                        complaints += newcomplains
                    }

                    let presentingcomplaintroutinelist = ``
                    let routineitems = complaints.split(",")
                     routineitems.forEach(element => {
                        presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                        
                    });
                    $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                

                    //Update routine
                    let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                    $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                        console.log(data)
                        getPresentingComplainRoutine()
                    })
                }
            });
     })

     $("#addpresentingcomplainroutinelist").on("click", function(evt){
         evt.preventDefault()
         let routine = $("#selectpresentingcomplainroutine").val()
         let splitroutine = routine.split(",")
         let routineid = splitroutine[0]
         presentingcomplaintlist.records.forEach(val => {
              if(val.id==routineid){
                    console.log("Found")
                    let complaints = val.description
                    console.log(complaints)
                    console.log(presentingcomplainthistorylist)

                    let splitcomplaints = complaints.split(",")
                    splitcomplaints.forEach(element => {
                        let complainthistory = {
                            complain:element,
                            period:"",
                            periodvalue:"",
                            history:[]
                        }
                        presentingcomplainthistorylist.push(complainthistory)
                    });

                    let historypresentingcomplaintlist = ``
                    let listofpresentingcomplain=``
                    presentingcomplainthistorylist.forEach(val => {
                        console.log(val)
                        historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                        listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                    });
                    $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                    $(".listofpresentingcomplain").html(listofpresentingcomplain)
                    $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                        let history = complain
                    
                        $("#selectpresentingcomplainlist").val(complain)
                        $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"
                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                            
                        })

                    })

                    displayPresentingComplain()
                    getPresentingComplainHistory()
              }
         });
     })

     $("#clearpresentingcomplainroutinelist").on("click", function(evt){
         evt.preventDefault()
         presentingcomplainthistorylist = []
           let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
            presentingcomplaintlist.records.forEach(val => {
                presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

            });

            $("#selectpresentingcomplainroutine").html(presentingcomplaintroutineoptions)
        
         $("#selecthistorypresentingcomplainlist").html("")
         $("#selectpresentingcomplainlist").html("")
        $(".listofpresentingcomplain").html("")

        complainhistorylist = []
        displayPresentingComplain()
        getPresentingComplainHistory()
                   
     })

     $("#clearlistpresentingcomplainroutinelist").on("click", function(evt){
         evt.preventDefault()
        let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
        presentingcomplaintlist.records.forEach(val => {
            presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

        });

        $("#selectpresentingcomplainroutine").html(presentingcomplaintroutineoptions)
        $("#selectpresentingcomplainroutinelist").html("")
        getPresentingComplainHistory()
                   
     })

     $("#delete-presentingcomplaint-routine-button").on("click", function(evt){
         evt.preventDefault()
         let item = $("#selectpresentingcomplainroutinelist").val()
         let routineitem = $("#selectpresentingcomplainroutine").val()
         console.log(presentingcomplaintlist)
         let index = $("#selectpresentingcomplainroutine").prop('selectedIndex')
         let splitroutine = routineitem.split(",")
         let routineid = splitroutine[0]

         presentingcomplaintlist.records.splice(index, 1)
         let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
         $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
            console.log(data)

            getPresentingComplainRoutine()
        })
         
     })
     let period_text = "full_text"

     $(".period_abbr_text").change(function(){
         if($(this).is(":checked")){
             period_text = $(this).val()
         }
     })

      $(".checkpresentingcomplainperiod").change(function(){
            if($(this).is(":checked")){
                let period = $(this).val()
                console.log(period_text)
                if(period_text=="abbr_text"){

                   
                    if(period=="Days"){
                        period="/7"
                    }
                    if(period=="Weeks"){
                        period="/52"
                    }
                    if(period=="Months"){
                        period="/12"
                    }
                    if(period=="Years"){
                        period="/356"
                    }
                }


                 let presentingcomplain = $("#enterpresentingcomplain").val()
                 
                 let periodvalue = $("#entervaluepresentingcomplain").val()
                 if(periodvalue==""){
                     periodvalue = "1"
                 }

                
                if(window.getSelection()!=""){
                    let newcomplains = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                    console.log(presentingcomplainthistorylist)
                    presentingcomplainthistorylist.forEach(val => {
                        if(newcomplains==val.complain){
                            val.period = period
                            val.periodvalue = periodvalue
                            displayPresentingComplain()
                        }
                    });

                } else {
                    if($("#selectpresentingcomplain").val()=="No Record Found"){
                        //Add presenting complain
                        let addPresentingComplain = "addPresentingComplain"
                    
                        $.post("controllers/patient-note.php",{presentingcomplain:presentingcomplain,addPresentingComplain:addPresentingComplain}, function(data){
                            // console.log(data)
                            let searchitem = $("#enterpresentingcomplain").val()
                            getPresentingComplaint(searchitem)
                            let presentingcomplain1 = $("#enterpresentingcomplain").val()
                            let complainthistory = {
                                complain:presentingcomplain1,
                                period:period,
                                periodvalue:periodvalue,
                                history:[]
                            }
                            presentingcomplainthistorylist.push(complainthistory)

                        let historypresentingcomplaintlist = ``
                        let listofpresentingcomplain=``
                        presentingcomplainthistorylist.forEach(val => {
                            // console.log(val)
                            historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                            listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                        });
                        $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                        $(".listofpresentingcomplain").html(listofpresentingcomplain)
                        $(".presentingcomplainbuttonlist").on("click", function(evt){
                            evt.preventDefault()
                            let complain = $(this).attr("data-id")
                            let history = complain
                        
                            $("#selectpresentingcomplainlist").val(complain)
                            $("#selectedcomplain").html(complain)
                            presentingcomplainthistorylist.forEach(val => {
                                if(val.complain.includes(complain)){
                                    //val.history.push(history)
                                }
                            
                            });
                            let getHistoryComplaint = "getHistoryComplaint"
                            $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                                data = JSON.parse(data)
                                let history = data.records[0].history
                                // console.log(history)
                                if(history!="No Record Found"){
                                    complainhistorylist = JSON.parse(history)
                                    let options = ``
                                    complainhistorylist.forEach(val => {
                                        options += `<option value="` + val.history + `">` + val.history + `</option>`
                                    });
                                    $("#selecthistorypresentingcomplainlist").html(options)
                                } else {
                                    let options = `<option value="` + history + `">` + history + `</option>`
                                    $("#selecthistorypresentingcomplainlist").html(options)
                                    complainhistorylist = []
                                }
                                
                            })

                        })


                        

                            displayPresentingComplain()
                            getPresentingComplainHistory()
                        })
                    
                    } else {
                        let presentingcomplain1 = $("#selectpresentingcomplain").val()
                        let complainthistory = {
                            complain:presentingcomplain1,
                            period:period,
                            periodvalue:periodvalue,
                            history:[]
                        }
                        presentingcomplainthistorylist.push(complainthistory)

                    let historypresentingcomplaintlist = ``
                        let listofpresentingcomplain=``
                        presentingcomplainthistorylist.forEach(val => {
                            // console.log(val)
                            historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                            listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                        });
                        $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                        $(".listofpresentingcomplain").html(listofpresentingcomplain)
                        $(".presentingcomplainbuttonlist").on("click", function(evt){
                            evt.preventDefault()
                            let complain = $(this).attr("data-id")
                            let history = complain
                            $("#selectpresentingcomplainlist").val(complain)
                            $("#selectedcomplain").html(complain)
                            presentingcomplainthistorylist.forEach(val => {
                                if(val.complain.includes(complain)){
                                    //val.history.push(history)
                                }
                            
                            });
                            let getHistoryComplaint = "getHistoryComplaint"
                            $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                                data = JSON.parse(data)
                                let history = data.records[0].history
                                // console.log(history)
                                if(history!="No Record Found"){
                                    complainhistorylist = JSON.parse(history)
                                    let options = ``
                                    complainhistorylist.forEach(val => {
                                        options += `<option value="` + val.history + `">` + val.history + `</option>`
                                    });
                                    $("#selecthistorypresentingcomplainlist").html(options)
                                } else {
                                    let options = `<option value="` + history + `">` + history + `</option>`
                                    $("#selecthistorypresentingcomplainlist").html(options)
                                    complainhistorylist = []
                                }
                                
                            })

                        })


                        

                        displayPresentingComplain()
                        getPresentingComplainHistory()
                    }
                }
                 
                                
            }
      })

      $(".checkpresentingcomplainroutineperiod").change(function(){
            if($(this).is(":checked")){
                let period = $(this).val()
                if(period_text=="abbr_text"){
                    console.log("abbr")
                    if(period=="Days"){
                        period="/7"
                    }
                    if(period=="Weeks"){
                        period="/52"
                    }
                    if(period=="Months"){
                        period="/12"
                    }
                    if(period=="Years"){
                        period="/356"
                    }
                }
                 let periodvalue = $("#entervaluepresentingcomplainroutine").val()
               
                    let presentingcomplain1 = $("#selectpresentingcomplainroutinelist").val()
                    let complainthistory = {
                        complain:presentingcomplain1,
                        period:period,
                        periodvalue:periodvalue,
                        history:[]
                    }
                    presentingcomplainthistorylist.push(complainthistory)

                    let historypresentingcomplaintlist = ``
                    let listofpresentingcomplain=``
                    presentingcomplainthistorylist.forEach(val => {
                        console.log(val)
                        historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                        listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                    });
                    $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                    $(".listofpresentingcomplain").html(listofpresentingcomplain)
                    $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                         let history = complain
                        $("#selectpresentingcomplainlist").val(complain)
                        $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"

                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                            
                        })

                    })


                    

                    displayPresentingComplain()
                    getPresentingComplainHistory()
                


                
            }
      })



      function displayPresentingComplain(){
          let presentingcomplaint = ``
          $("#enterpresentingcomplain").val("")
          presentingcomplainthistorylist.forEach(val => {
                console.log(val)
                if(val.period==''){
                    presentingcomplaint += `<h2 style="padding-left:50px;">` + val.complain + `</h2><!--<span style="padding-left:100px;">*</span>-->`
                } else {
                    presentingcomplaint += `<h2 style="padding-left:50px;">` + val.complain + ` x ` + val.periodvalue + ` ` + val.period + `</h2><!--<span style="padding-left:100px;">*</span>-->`
                }
                
                // val.history.forEach(element => {
                //     presentingcomplaint += `<span style="padding-left:10px;">` + element + `</span>, `
                // });
          });
          $("#presenting_complaint").html("<h2>Presenting Complaint</h2>" + presentingcomplaint)
      }

        let original_presentingcomplainthistorylist = []
      function displayHistoryPresentingComplain(){
          let presentingcomplaint = ``
          console.log(presentingcomplainthistorylist)
          
          presentingcomplainthistorylist.forEach(val => {
                console.log(val)
                if(val.period==''){
                    presentingcomplaint += `<h2 style="padding-left:50px;">=>` + val.complain + `</h2><span style="padding-left:100px;">*</span>`
                } else {
                    presentingcomplaint += `<h2 style="padding-left:50px;">=>` + val.complain + ` x ` + val.periodvalue + ` ` + val.period + `</h2><span style="padding-left:100px;">*</span>`
                }

                    // presentingcomplaint += `<h2 style="padding-left:50px;">=>` + val.complain + ` x ` + val.periodvalue + ` ` + val.period + `</h2><span style="padding-left:100px;">*</span>`
                val.history.forEach(element => {
                    presentingcomplaint += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + element + `</span>, `
                });
          });
          $("#history_presenting_complaint").html("<h2>History of Presenting Complaint</h2>" + presentingcomplaint)
          $("#enterhistoryofpresentingcomplain").val("")
      }

      function getPresentingComplainHistory(){
          let getHistoryComplaint = "getHistoryComplaint"
            let complain = $("#selectpresentingcomplainlist").val()
            $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                data = JSON.parse(data)
                let history = data.records[0].history
                console.log(history)
                if(history!="No Record Found"){
                    complainhistorylist = JSON.parse(history)
                    let options = ``
                    complainhistorylist.forEach(val => {
                        options += `<option value="` + val.history + `">` + val.history + `</option>`
                    });
                    $("#selecthistorypresentingcomplainlist").html(options)
                } else {
                    let options = `<option value="` + history + `">` + history + `</option>`
                     $("#selecthistorypresentingcomplainlist").html(options)
                     complainhistorylist = []
                }
                console.log(complainhistorylist)
            })
      }

      $("#add-presentingcomplaint-history").on("click", function(evt){
          evt.preventDefault()
            let complain = $("#selectpresentingcomplainlist").val()
            let history = "Complain"
            if($("#enterhistoryofpresentingcomplain").val()==""){
                if($("#selecthistorypresentingcomplainlist").val()!=""){
                    history = $("#selecthistorypresentingcomplainlist").val()
                }
            } else {
                history = $("#enterhistoryofpresentingcomplain").val()
            }
            
            let historylist = {history:history}
            let boolUpdate = true
            console.log(complainhistorylist)
            complainhistorylist.forEach(val => {
                console.log(history,val.history)
                if(history==val.history){
                    boolUpdate = false
                }
            });
            if(boolUpdate==true){
                complainhistorylist.push(historylist)
            }
            
            let complainhistory = JSON.stringify(complainhistorylist)
            
            let postComplainHistory = "postComplainHistory"
            console.log(complain, history, historylist, complainhistory)
            $.post("controllers/patient-note.php",{complain:complain,history:complainhistory,postComplainHistory:postComplainHistory},function(data){
                console.log(data)
                complainhistorylist = []
                getPresentingComplainHistory()

                presentingcomplainthistorylist.forEach(val => {
                    if(val.complain.includes(complain)){
                        val.history.push(history)
                    }
                   
                });
                displayHistoryPresentingComplain()
            })
      })

      $("#enterhistoryofpresentingcomplain").on("keyup change paste", function(){
          let inputhistory = $("#enterhistoryofpresentingcomplain").val()
          let options = `<option value="` + history + `">` + history + `</option>`
            $("#selecthistorypresentingcomplainlist").html(options)
            
            let historyoptions = ``
            complainhistorylist.forEach(val => {
                    
                    if(val.history.includes(inputhistory)){
                        historyoptions += `<option value="` + val.history + `">` + val.history + `</option>`
                    }
                    
            })
            console.log(historyoptions)
            if(historyoptions!=""){
                $("#selecthistorypresentingcomplainlist").html(historyoptions)
            } else {
                // complainhistorylist = []
            }
      })

      $("#selecthistorypresentingcomplainlist").on("change", function(evt){
          evt.preventDefault()
           let complain = $("#selectpresentingcomplainlist").val()
            let history = $("#selecthistorypresentingcomplainlist").val()
            
            
                presentingcomplainthistorylist.forEach(val => {
                    if(val.complain.includes(complain)){
                        val.history.push(history)
                    }
                   
                });
                console.log(presentingcomplainthistorylist)
                displayHistoryPresentingComplain()
            
      })

      $("#selectpresentingcomplainlist").on("change", function(evt){
          evt.preventDefault()
          complainhistorylist = []
          getPresentingComplainHistory()
      })

      $("#add-presentingcomplaint-routine-button").on("click", function(evt){
          evt.preventDefault()
          let routine = $("#enterroutine").val()
          let routinetype ="Presenting Complain"
          let addRoutine = "addRoutine"
          $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
              getPresentingComplainRoutine()
          })
      })

        let presentingcomplaintlist = []
      function getPresentingComplainRoutine(){
          let routinetype = "Presenting Complain"
          let getPresentingComplainRoutine = "getPresentingComplainRoutine"
          $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
              data = JSON.parse(data)
            //   console.log(data)
                presentingcomplaintlist = data
              let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
              data.records.forEach(val => {
                  presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

              });

              $("#selectpresentingcomplainroutine").html(presentingcomplaintroutineoptions)
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
            $("#selectpresentingcomplainroutinelist").html("")
          })

    
      }
    getPresentingComplainRoutine()


    $("#selectpresentingcomplainroutinelist").on("change", function(evt){
        evt.preventDefault()
        let selectedcomplain = $(this).val()
        console.log(selectedcomplain)
        let addcomplain = `<option value="` + selectedcomplain + `">` + selectedcomplain + `</option>`
        selectpresentingcomplainoptions = addcomplain + selectpresentingcomplainoptions
        $("#selectpresentingcomplain").html(selectpresentingcomplainoptions)
        
    })

    $("#add-presentingcomplaint-button").on("click", function(evt){
        evt.preventDefault()
        let complain = $("#enterpresentingcomplain").val()
        console.log(complain)
        if(complain==""||complain==null){
            complain=$("#selectpresentingcomplain").val()
        }
        let routine = $("#selectpresentingcomplainroutine").val()
        let splitroutine = routine.split(",")
        let routineid = parseFloat(splitroutine[0])
        console.log(presentingcomplaintlist)
        presentingcomplaintlist.records.forEach(val => {
            if(val.id==routineid){
                console.log("Found")
                let complaints = val.description
                if(complaints==null||complaints==""){
                    complaints = complain
                } else {
                    complaints += "," + complain
                }

                //Update routine
                let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                    console.log(data)
                    displayPresentingComplain()
                    getPresentingComplainRoutine()
                })
            }
        });

    })



    $("#selectpresentingcomplainroutine").on("change", function(evt){
        evt.preventDefault()
        let routine = $("#selectpresentingcomplainroutine").val()
        let splitroutine = routine.split(",")
        let routineid = parseFloat(splitroutine[0])
        presentingcomplaintlist.records.forEach(val => {
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
                        $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    } else {
                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                        $("#selectpresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    }
                } else {
                     $("#selectpresentingcomplainroutinelist").html("")
                }

            }
        });
    })
    



    //Notes

    $("#discard-presenting-complaint-button").on("click", function(evt){
        evt.preventDefault()
        $("#presenting_complaint").html("<h2>Presenting Complaint</h2>")
    })
    $("#add-presenting-complaint-button").on("click", function(evt){
        evt.preventDefault()
        presenting_complain_html = $("#presenting_complaint").html()
        console.log(presenting_complain_html)
        $("#patient_note_presentingcomplaint").html(presenting_complain_html)
        $("#presenting_complaint").html("<h2>Presenting Complaint</h2>")
    })

    $("#discard-history-presenting-complaint-button").on("click", function(evt){
        evt.preventDefault()
        $("#history_presenting_complaint").html("<h2>Presenting Complaint</h2>")
    })

    $("#add-history-presenting-complaint-button").on("click", function(evt){
        evt.preventDefault()
        history_presenting_complain_html = $("#history_presenting_complaint").html()
        // console.log(presenting_complain_html)
        $("#patient_note_historypresentingcomplaint").html(history_presenting_complain_html)
        $("#history_presenting_complaint").html("<h2>History of Presenting Complaint</h2>")
    })




    //Routine for History of Presenting Complain Routine
    let historypresentingcomplaintlist = []
      function getHistoryPresentingComplainRoutine(){
          let routinetype = "History Presenting Complain"
          let getPresentingComplainRoutine = "getPresentingComplainRoutine"
          $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
              data = JSON.parse(data)
            //   console.log(data)
                historypresentingcomplaintlist = data
              let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
              data.records.forEach(val => {
                  presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

              });

              $("#selecthistorypresentingcomplainroutine").html(presentingcomplaintroutineoptions)
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
            $("#selecthistorypresentingcomplainroutinelist").html("")
          })

    
      }
    getHistoryPresentingComplainRoutine()


    $("#selecthistorypresentingcomplainroutinelist").on("change", function(evt){
        evt.preventDefault()
        let complain = $("#selecthistorypresentingcomplainlist").val()
        let history = $("#selecthistorypresentingcomplainlist").val()
        
        
        presentingcomplainthistorylist.forEach(val => {
            if(val.complain.includes(complain)){
                val.history.push(history)
            }
            
        });
        console.log(presentingcomplainthistorylist)
        displayHistoryPresentingComplain()
    })


    $("#clearhistorypresentingcomplainroutinelist").on("click", function(evt){
         evt.preventDefault()
         console.log(presentingcomplainthistorylist)
         presentingcomplainthistorylist.forEach(val => {
             val.history = []
         });
         console.log(presentingcomplainthistorylist)
           let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
            historypresentingcomplaintlist.records.forEach(val => {
                presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

            });

            $("#selecthistorypresentingcomplainroutine").html(presentingcomplaintroutineoptions)
        
         $("#selecthistorypresentingcomplainlist").html("")
        //  $("#selecthistorypresentingcomplainlist").html("")
        // $(".listofpresentingcomplain").html("")

        complainhistorylist = []
        displayHistoryPresentingComplain()
        
                   
     })

     $("#clearlisthistorypresentingcomplainroutinelist").on("click", function(evt){
         evt.preventDefault()
        let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
        historypresentingcomplaintlist.records.forEach(val => {
            presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

        });

        $("#selecthistorypresentingcomplainroutine").html(presentingcomplaintroutineoptions)
        $("#selecthistorypresentingcomplainroutinelist").html("")
        displayHistoryPresentingComplain()
                   
     })

     $("#delete-historypresentingcomplaint-routine-button").on("click", function(evt){
         evt.preventDefault()
         let item = $("#selecthistorypresentingcomplainroutinelist").val()
         let routineitem = $("#selecthistorypresentingcomplainroutine").val()
         console.log(historypresentingcomplaintlist)
         let index = $("#selecthistorypresentingcomplainroutine").prop('selectedIndex')
         let splitroutine = routineitem.split(",")
         let routineid = splitroutine[0]

         historypresentingcomplaintlist.records.splice(index, 1)
         let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
         $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
            console.log(data)

            displayHistoryPresentingComplain()
        })
         
     })


     $("#removehistorypresentingcomplainroutine").on("click", function(evt){
         evt.preventDefault()
         console.log(presentingcomplaintlist)
        //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
         let selectroutine = $("#selecthistorypresentingcomplainroutine").val()
        let splitselectroutine = selectroutine.split(",")
        selectroutine = splitselectroutine[1]
        let routineid = splitselectroutine[0]
        let count = 0
        let itemid = $("#selecthistorypresentingcomplainroutinelist").prop("selectedIndex")
         historypresentingcomplaintlist.records.forEach(val => {
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
                $("#selecthistorypresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                 historypresentingcomplaintlist.records[count].description = listitems

                let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                
                $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                    console.log(data)

                }) 
             }
             count++
         });
     })

     $("#addfromnotehistorypresentingcomplainroutine").on("click",function(evt){
         evt.preventDefault()
         let newcomplains = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
        console.log(newcomplains)
         let routine = $("#selecthistorypresentingcomplainroutine").val()
         let splitroutine = routine.split(",")
         let routineid = splitroutine[0]
         console.log(historypresentingcomplaintlist.records)
          historypresentingcomplaintlist.records.forEach(val => {
                if(val.id==routineid){
                    // console.log("Found")
                    let complaints = val.description
                    if(complaints==null||complaints==""){
                        complaints = newcomplains
                    } else {
                        complaints += "," + newcomplains
                    }
                    console.log(complaints)

                    let presentingcomplaintroutinelist = ``
                    let routineitems = complaints.split(",")
                     routineitems.forEach(element => {
                        presentingcomplaintroutinelist += `<option value="` + element + `">` + element + `</option>`
                        
                    });
                    $("#selecthistorypresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                

                    //Update routine
                    let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                    $.post("controllers/patient-note.php",{id:routineid,complaints:complaints,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                        console.log(data)
                        getHistoryPresentingComplainRoutine()
                    })
                }
            });
     })

     $("#addpresentingcomplainroutinelist").on("click", function(evt){
         evt.preventDefault()
         let routine = $("#selectpresentingcomplainroutine").val()
         let splitroutine = routine.split(",")
         let routineid = splitroutine[0]
         historypresentingcomplaintlist.records.forEach(val => {
              if(val.id==routineid){
                    console.log("Found")
                    let complaints = val.description
                    console.log(complaints)
                    console.log(presentingcomplainthistorylist)

                    let splitcomplaints = complaints.split(",")
                    splitcomplaints.forEach(element => {
                        let complainthistory = {
                            complain:element,
                            period:"",
                            periodvalue:"",
                            history:[]
                        }
                        presentingcomplainthistorylist.push(complainthistory)
                    });

                    let historypresentingcomplaintlist = ``
                    let listofpresentingcomplain=``
                    historypresentingcomplaintlist.forEach(val => {
                        console.log(val)
                        historypresentingcomplaintlist += `<option value="` + val.complain + `">` + val.complain + `</option>`
                        listofpresentingcomplain+= `<a href="#" class="presentingcomplainbuttonlist btn btn-primary" data-id="` + val.complain + `">` + val.complain + `</a>`
                    });
                    $("#selectpresentingcomplainlist").html(historypresentingcomplaintlist)
                    $(".listofpresentingcomplain").html(listofpresentingcomplain)
                    $(".presentingcomplainbuttonlist").on("click", function(evt){
                        evt.preventDefault()
                        let complain = $(this).attr("data-id")
                        let history = complain
                    
                        $("#selectpresentingcomplainlist").val(complain)
                        $("#selectedcomplain").html(complain)
                        presentingcomplainthistorylist.forEach(val => {
                            if(val.complain.includes(complain)){
                                //val.history.push(history)
                            }
                        
                        });
                        let getHistoryComplaint = "getHistoryComplaint"
                        $.post("controllers/patient-note.php",{complain:complain,getHistoryComplaint:getHistoryComplaint}, function(data){
                            data = JSON.parse(data)
                            let history = data.records[0].history
                            console.log(history)
                            if(history!="No Record Found"){
                                complainhistorylist = JSON.parse(history)
                                let options = ``
                                complainhistorylist.forEach(val => {
                                    options += `<option value="` + val.history + `">` + val.history + `</option>`
                                });
                                $("#selecthistorypresentingcomplainlist").html(options)
                            } else {
                                let options = `<option value="` + history + `">` + history + `</option>`
                                $("#selecthistorypresentingcomplainlist").html(options)
                                complainhistorylist = []
                            }
                            
                        })

                    })

                    
              }
         });
     })


     $("#add-historypresentingcomplaint-routine-button").on("click", function(evt){
          evt.preventDefault()
          let routine = $("#enterhistoryroutine").val()
          let routinetype ="History Presenting Complain"
          let addRoutine = "addRoutine"
          $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
              getHistoryPresentingComplainRoutine()
          })
      })

      $("#add-presentingcomplaint-history-routine").on("click", function(evt){
        evt.preventDefault()
        let complain = $("#enterhistoryofpresentingcomplain").val()
        console.log(complain)
        if(complain==""||complain==null){
            // complain=$("#selectpresentingcomplain").val()
        }else{
            let routine = $("#selecthistorypresentingcomplainroutine").val()
            let splitroutine = routine.split(",")
            let routineid = parseFloat(splitroutine[0])
            console.log(historypresentingcomplaintlist)
            historypresentingcomplaintlist.records.forEach(val => {
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
                        
                        getUpdateHistoryPresentingComplainRoutine()
                    })
                }
            });
        }

    })

    function getUpdateHistoryPresentingComplainRoutine(){
         let routinetype = "History Presenting Complain"
         console.log("test")
          let getPresentingComplainRoutine = "getPresentingComplainRoutine"
          $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
              data = JSON.parse(data)
                let routinename = $("#selecthistorypresentingcomplainroutine").val()
                historypresentingcomplaintlist = data
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
                                $("#selecthistorypresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selecthistorypresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                            }
                        
                    }
                });
          })
    }



    $("#selecthistorypresentingcomplainroutine").on("change", function(evt){
        evt.preventDefault()
        let routine = $("#selecthistorypresentingcomplainroutine").val()
        let splitroutine = routine.split(",")
        let routineid = parseFloat(splitroutine[0])
        historypresentingcomplaintlist.records.forEach(val => {
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
                        $("#selecthistorypresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    } else {
                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                        $("#selecthistorypresentingcomplainroutinelist").html(presentingcomplaintroutinelist)
                    }
                } else {
                     $("#selecthistorypresentingcomplainroutinelist").html("")
                }

            }
        });
    })

     $("#selecthistorypresentingcomplainroutinelist").on("change", function(evt){
          evt.preventDefault()
           let complain = $("#selectpresentingcomplainlist").val()
            let history = $("#selecthistorypresentingcomplainroutinelist").val()
            
            
                presentingcomplainthistorylist.forEach(val => {
                    if(val.complain.includes(complain)){
                        val.history.push(history)
                    }
                   
                });
                console.log(presentingcomplainthistorylist)
                displayHistoryPresentingComplain()
            
      })

      $("#addhistorypresentingcomplainroutinelist").on("click", function(evt){
        evt.preventDefault()
        let routine = $("#selecthistorypresentingcomplainroutine").val()
        let splitroutine = routine.split(",")
        let routineid = parseFloat(splitroutine[0])
        historypresentingcomplaintlist.records.forEach(val => {
            if(val.id==routineid){
                console.log("Found")
                let complaints = val.description
                if(complaints!=null){

                    if(complaints.includes(",")){
                        let splitcomplaints = complaints.split(",")
                        let presentingcomplaintroutinelist = ``
                        splitcomplaints.forEach(element => {
                            let complain = $("#selectpresentingcomplainlist").val()
                            let history = element
                            
                            
                                presentingcomplainthistorylist.forEach(val => {
                                    if(val.complain.includes(complain)){
                                        val.history.push(history)
                                    }
                                
                                });
                                // console.log(presentingcomplainthistorylist)
                                
                        });
                       displayHistoryPresentingComplain()
                    } else {
                        let complain = $("#selectpresentingcomplainlist").val()
                            let history = complaints
                            
                            
                                presentingcomplainthistorylist.forEach(val => {
                                    if(val.complain.includes(complain)){
                                        val.history.push(history)
                                    }
                                
                                });
                                displayHistoryPresentingComplain()
                                
                    }
                } 

            }
        });
    })
    


})