 $(document).ready(function(){
 
             // get departments
             let departmentitemgrouplist = ``
             let departmentlist = ``
             
             let getDepartment = "getDepartment"
             let searchItem = ""
 
             let deptitemgrpitems = ``
             let displayselectedlistitems = ``
             let itemlist_lab = []

             function oneifnull(value){
                    if(value==null){
                        return 1
                    } else if(value==""){
                        return 1
                    } else {
                        return value
                    }
                }
                function zeroifnull(value){
                    if(value==null){
                        return 0
                    } else if(value==""){
                        return 0
                    } else {
                        return parseFloat(value)
                    }
                }
 
             $("#selectdepartment").on("change", function(evt){
                      evt.preventDefault()
                     //  let department = $("#selectdepartment").val()
                      let department = $("#selectdepartment").val()
                     let splitsearch = department.split(",")
                     searchItem = "LAB"
                         let getDepartmentItemGroup = "getDepartmentItemGroup"
                         $.post("controllers/combo-setup.php",{searchItem:searchItem,getDepartmentItemGroup:getDepartmentItemGroup}, function(formdata){
                             if(formdata!="No Record Found"){
                                 let data = JSON.parse(formdata)
                                 let departmentitemgroupoptions = ``
                                 $.each(data.records, function(key, val){
                                     departmentitemgroupoptions += `
                                     <option value="` + val.departmentitemgroup + `">` + val.departmentitemgroup + `</option>
                                     `
                                 })
                                 departmentitemgrouplist = departmentitemgroupoptions
                                 $("#selectdepartmentitemgrouping-lab").html(departmentitemgroupoptions)
                                 let departmentitemgroup = $("#selectdepartmentitemgrouping-lab").val()
                                 let GetGenericNameByDepartmentItemGrouping = "GetGenericNameByDepartmentItemGrouping"
                                 $.post("controllers/combo-setup.php",{searchItem:departmentitemgroup,GetGenericNameByDepartmentItemGrouping:GetGenericNameByDepartmentItemGrouping}, function(formdata){
                                     if(formdata!="No Record Found"){
                                         
                                         let data = JSON.parse(formdata)
                                         let itemoptions = ``
                                         deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                         $.each(data.records, function(key, val){
                                             itemoptions += `
                                             <option value=" ` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                             `
                                             deptitemgrpitems += `
                                             <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                             `
                                         })
                                         deptitemgrpitems += `</select>`
                                         // departmentitemgrouplist = departmentitemgroupoptions
                                         $("#selectitem").html(itemoptions)
                                         let pricinglist = displayselectedlistitems + `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                 </tr>`
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#selectdptitemgrpitem").on("change", function(evt){
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
 
                                         })
                                         $(".additemtolist").on("click", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                         })
 
                                     }
 
                                 })
 
                                 // let deptItemgroup = $("#selectdepartmentitemgrouping-lab").val()
                                 let getDeptItemGrpUsageGroup = "getDeptItemGrpUsageGroup"
                                 $.post("controllers/combo-setup.php",{searchItem:departmentitemgroup,getDeptItemGrpUsageGroup:getDeptItemGrpUsageGroup}, function(formdata){
                                     if(formdata!="No Record Found"){
                                         let data = JSON.parse(formdata)
                                         let itemgroupoptions = ``
                                         $.each(data.records, function(key, val){
                                             itemgroupoptions += `
                                             <option value="` + val.itemgroup + `">` + val.itemgroup + `</option>
                                             `
                                         })
                                         genericnameusagegrouplist = itemgroupoptions
                                         $("#selectusagegroup-lab").html(itemgroupoptions)
                                         
                                         //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                                         let selectgroup = $("#selectusagegroup-lab").val()
                                         let getItemClassByItemGroup = "getItemClassByItemGroup"
                                         $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                                             //console.log(formdata)
                                             let data = JSON.parse(formdata)
                                             let genericnameclassoptions = ``
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameclassoptions += `
                                                 <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                                                 `
                                             })
                                             genericnameusageclasslist = genericnameclassoptions
                                             $("#selectusageclass-lab").html(genericnameclassoptions)
                                             let selectsubclassclass = $("#selectusageclass-lab").val()
                                             let getItemSubClassByClass = "getItemSubClassByClass"
                                             $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                                                 //console.log(formdata)
                                                 let data = JSON.parse(formdata)
                                                 let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                                                 $.each(data.records, function(key, val) {
                                                 
                                                     genericnamesubclassoptions += `
                                                     <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                                     `
                                                 })
                                                 genericnameusagesubclasslist = genericnamesubclassoptions
                                                 $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
                                                 let searchItem = $("#searchitems-lab").val()
                                                 let selectsubclass = $("#selectusagesubclass-lab").val()
                                                 let GetGenericNameByUsageLABSubClass = "GetGenericNameByUsageLABSubClass"
                                                 $.post("controllers/combo-setup.php",{searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageLABSubClass:GetGenericNameByUsageLABSubClass},function(formdata){
                                                     //console.log(formdata)
                                                     if(formdata!="No Record Found"){
                                                         let data = JSON.parse(formdata)
                                                         let genericnameoptions = ``
                                                         deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                                         $.each(data.records, function(key, val) {
                                                         
                                                             genericnameoptions += `
                                                             <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                             `
                                                             deptitemgrpitems += `
                                                             <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                             `
                                                         })
                                                         deptitemgrpitems += `</select>`
                                                         genericnamelist = genericnameoptions
                                                         itemlist_lab = data
                                                         $("#selectallitem-lab").html(genericnameoptions)
                                                         // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                                         let pricinglist = displayselectedlistitems + `<tr>
                                                                     <td></td>
                                                                     <td></td>
                                                                     <td></td>
                                                                     <td>
                                                                             </td>
                                                                     <td></td>
                                                                     <td></td>
                                                                     <td></td>
                                                                     <td></td>
                                                                 </tr>`
                                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                                         $("#selectdptitemgrpitem").on("change", function(evt){
                                                             evt.preventDefault()
                                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                                             selectitemanddisplay(selecteditem)
                                                         })
                                                         $(".additemtolist").on("click", function(evt){
                                                                 evt.preventDefault()
                                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                                 selectitemanddisplay(selecteditem)
                                                         })
                                                     }
                                                 
                                                 })
                                             })
                                         })
                                     }
 
                                 })
                             }
 
                         })
                  })

                  $("#quicksearch-lab").on("change keyup paste", function(){
                        // //console.log(itemlist_lab)
                        let search = $("#quicksearch-lab").val().toUpperCase()
                        let genericnameoptions = ``
                        deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                        if(itemlist_lab.records!=undefined){
                             itemlist_lab.records.forEach(val => {
                                //console.log(val)
                                if(val.itemgenericname.toUpperCase().includes(search)){
                                    genericnameoptions += `
                                    <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                    `
                                    deptitemgrpitems += `
                                    <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                    `
                                }
                            
                           
                            
                            });
                        } else {
                            itemlist_lab.forEach(val => {
                                //console.log(val)
                                if(val.itemname.toUpperCase().includes(search)){
                                    genericnameoptions += `
                                    <option value="` + val.itemid + `,` + val.itemname + `">` + val.itemname + `</option>
                                    `
                                    deptitemgrpitems += `
                                    <option value="` + val.itemid + `,` + val.itemname + `">` + val.itemname + `</option>
                                    `
                                }
                            
                           
                            
                            });
                        }
                       
                        deptitemgrpitems += `</select>`
                        genericnamelist = genericnameoptions
                        
                        $("#selectallitem-lab").html(genericnameoptions)

                  })
 
                  $("#selectdepartmentitemgrouping-lab").on("change", function(evt){
                     let departmentitemgroup = $("#selectdepartmentitemgrouping-lab").val()
                     let GetGenericNameByDepartmentItemGrouping = "GetGenericNameByDepartmentItemGrouping"
                     $.post("controllers/combo-setup.php",{searchItem:departmentitemgroup,GetGenericNameByDepartmentItemGrouping:GetGenericNameByDepartmentItemGrouping}, function(formdata){
                         if(formdata!="No Record Found"){
                             //console.log(formdata)
                             let data = JSON.parse(formdata)
                             let itemoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val){
                                 itemoptions += `
                                 <option value=" ` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             // departmentitemgrouplist = departmentitemgroupoptions
                             $("#selectitem").html(itemoptions)
 
                             let pricinglist = displayselectedlistitems + `<tr>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td>
                                                 </td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                     </tr>`
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#selectdptitemgrpitem").on("change", function(evt){
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
 
                             })
                             $(".additemtolist").on("click", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                             })
                             
                         }
 
 
 
                     })
 
                     // let deptItemgroup = $("#selectdepartmentitemgrouping-lab").val()
                     let getDeptItemGrpUsageGroup = "getDeptItemGrpUsageGroup"
                     $.post("controllers/combo-setup.php",{searchItem:departmentitemgroup,getDeptItemGrpUsageGroup:getDeptItemGrpUsageGroup}, function(formdata){
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let itemoptions = ``
                             $.each(data.records, function(key, val){
                                 itemoptions += `
                                 <option value="` + val.itemgroup + `">` + val.itemgroup + `</option>
                                 `
                             })
                             genericnameusagegrouplist = itemoptions
                             $("#selectusagegroup-lab").html(itemoptions)
                             
                             //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                             let selectgroup = $("#selectusagegroup-lab").val()
                             let getItemClassByItemGroup = "getItemClassByItemGroup"
                             $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                                 //console.log(formdata)
                                 let data = JSON.parse(formdata)
                                 let genericnameclassoptions = ``
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameclassoptions += `
                                     <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                                     `
                                 })
                                 genericnameusageclasslist = genericnameclassoptions
                                 $("#selectusageclass-lab").html(genericnameclassoptions)
                                 let selectsubclassclass = $("#selectusageclass-lab").val()
                                 let getItemSubClassByClass = "getItemSubClassByClass"
                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                                     //console.log(formdata)
                                     let data = JSON.parse(formdata)
                                     let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnamesubclassoptions += `
                                         <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                         `
                                     })
                                     genericnameusagesubclasslist = genericnamesubclassoptions
                                     $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
                                     let searchItem = $("#searchitems-lab").val()
                                     let selectsubclass = $("#selectusagesubclass-lab").val()
                                     let GetGenericNameByUsageLABSubClass = "GetGenericNameByUsageLABSubClass"
                                     $.post("controllers/combo-setup.php",{searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageLABSubClass:GetGenericNameByUsageLABSubClass},function(formdata){
                                         //console.log(formdata)
                                         if(formdata!="No Record Found"){
                                             let data = JSON.parse(formdata)
                                             let genericnameoptions = ``
                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameoptions += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                 `
                                                 deptitemgrpitems += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                 `
                                             })
                                             deptitemgrpitems += `</select>`
                                             genericnamelist = genericnameoptions
                                             itemlist_lab = data
                                             $("#selectallitem-lab").html(genericnameoptions)
                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                             let pricinglist = displayselectedlistitems + `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                 </tr>`
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#selectdptitemgrpitem").on("change", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                             $(".additemtolist").on("click", function(evt){
 
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
 
                                         }
                                     
                                     })
                                 })
                             })
                         }
 
                     })
                  })
 
                  //get the next prescription order number
                  function getnextprescriptionnumber(){
                      
                      let getNextPrescription = "getNextPrescription"
                      $.post("controllers/finance-record.php",{getNextPrescription:getNextPrescription},function(data){
                          //console.log(data)
                          $("#nextprescriptionnumber").html(data)
                      })
                  }
 
                  getnextprescriptionnumber()
                  //Advanced Search
                  function loadPatientCards(){
                 let loadPatientPards = "loadPatientPards"
                 $.post("controllers/patient-record.php",{loadPatientPards: loadPatientPards},function(formdata){
                         //console.log("prescription: ",formdata)
                         if(formdata=="No Record Found"){
                             $("#view-lab-order-count").html(formdata)
                         }else{
                             data = JSON.parse(formdata)
                             allpatientcards = data.records
                             totalnumbercards = allpatientcards.length
                             totalfoundcards = totalnumbercards
                             let patientcardlist = `<option value='0'>Select Patient</option>`
                             let count = 0
                             //console.log()
                             for(i=0;i<allpatientcards.length;i++){
                                     let status = allpatientcards[i].status
                                     
                                         count++
                                         patientcardlist += `
                                             <option value="` + allpatientcards[i].patientnumber + `">` + allpatientcards[i].person + ` [` + allpatientcards[i].status + `: ` + allpatientcards[i].cardnumber + `]</option>
                                         `
 
                                     
                
                                     // $("#paid").val(allpatientcards[i].status)
                             }
                                 
                             totalfoundcards = count
                             $("#selectpatient").html(patientcardlist)
                             $("#card-status").html("Found " + totalfoundcards + " Cards Out of " + totalnumbercards + " Cards")
                             
                         }
 
                     })
                 }
 
                 let allpatientcards = []
                 let totalnumbercards = 0
                 let totalfoundcards = 0
                 loadPatientCards()
                 let itemregimentarray = []
 
                 $("#default-weight").hide()
                 $("#form-lab, #deptitemgroup-lab, #group-lab,#class-lab,#subclass-lab,#prescriptionnumber-lab,#routinename-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
                 $("#advancesearch-lab").on("change", function(evt){
                     evt.preventDefault()
                     $("#searchitems-lab").val("")
                     if($("#advancesearch-lab").val()=="itemgrouping"){
                         searchAllItem_lab = "LAB "
                         $("#itemgrouping-lab").show()
                         $("#add-allitem-button-lab").show()
                         $("#form-lab, #deptitemgroup-lab, #group-lab,#class-lab,#subclass-lab,#prescriptionnumber-lab,#routinename-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
                     } else if($("#advancesearch-lab").val()=="group"){
                         $("#group-lab").show()
                         $("#add-allitem-button-lab").show()
                         $("#form-lab, #deptitemgroup-lab, #itemgrouping-lab,#class-lab,#subclass-lab,#prescriptionnumber-lab,#routinename-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
                     } else if($("#advancesearch-lab").val()=="class"){
                         $("#class-lab").show()
                         $("#add-allitem-button-lab").show()
                         $("#form-lab, #deptitemgroup-lab, #itemgrouping-lab,#group-lab,#subclass-lab,#prescriptionnumber-lab,#routinename-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
 
                         // get all classes
                         let selectgroup = "LAB"
                             let getItemClassByDeptItemGroup = "getItemClassByDeptItemGroup"
                             $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByDeptItemGroup:getItemClassByDeptItemGroup},function(formdata){
                                 //console.log(formdata)
                                 let data = JSON.parse(formdata)
                                 let genericnameclassoptions = ``
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameclassoptions += `
                                     <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                                     `
                                 })
                                 genericnameusageclasslist = genericnameclassoptions
                                 $("#selectusageclassclass-lab").html(genericnameclassoptions)
                                 let selectsubclassclass = $("#selectusageclassclass-lab").val()
                                 let getItemSubClassByClass = "getItemSubClassByClass"
                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                                     //console.log(formdata)
                                     let data = JSON.parse(formdata)
                                     let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnamesubclassoptions += `
                                         <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                         `
                                     })
                                     genericnameusagesubclasslist = genericnamesubclassoptions
                                     $("#selectusagesubclassclass-lab").html(genericnamesubclassoptions)
                                     let searchItem = $("#searchitems-lab").val()
                                     let selectsubclass = $("#selectusagesubclassclass-lab").val()
                                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                         //console.log(formdata)
                                         if(formdata!="No Record Found"){
                                             let data = JSON.parse(formdata)
                                             let genericnameoptions = ``
                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameoptions += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                 `
                                                 deptitemgrpitems += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                 `
                                             })
                                             deptitemgrpitems += `</select>`
                                             //console.log(deptitemgrpitems)
                                             genericnamelist = genericnameoptions
                                             itemlist_lab = data
                                             $("#selectallitem-lab").html(genericnameoptions)
                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                             let pricinglist = displayselectedlistitems + `<tr>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td>
                                                                 </td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                     </tr>`
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#selectdptitemgrpitem").on("change", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                             $(".additemtolist").on("click", function(evt){
 
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                         }
                                     
                                     })
                                 })
                             })
                     } else if($("#advancesearch-lab").val()=="subclass"){
                         $("#subclass-lab").show()
                         $("#add-allitem-button-lab").show()
                         $("#form-lab, #deptitemgroup-lab, #itemgrouping-lab,#group-lab,#class-lab,#prescriptionnumber-lab,#routinename-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
 
                         // get all sub-classes
                         let selectgroup = "LAB"
                            
                                 let getItemSubClassByDeptItemGroup = "getItemSubClassByDeptItemGroup"
                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectgroup,getItemSubClassByDeptItemGroup:getItemSubClassByDeptItemGroup},function(formdata){
                                     //console.log(formdata)
                                     let data = JSON.parse(formdata)
                                     let genericnamesubclassoptions = ``
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnamesubclassoptions += `
                                         <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                         `
                                     })
                                     genericnameusagesubclasslist = genericnamesubclassoptions
                                     $("#selectusagesubclasssubclass-lab").html(genericnamesubclassoptions)
                                     let searchItem = $("#searchitems-lab").val()
                                     let selectsubclass = $("#selectusagesubclasssubclass-lab").val()
                                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                         //console.log(formdata)
                                         if(formdata!="No Record Found"){
                                             let data = JSON.parse(formdata)
                                             let genericnameoptions = ``
                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameoptions += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                 `
                                                 deptitemgrpitems += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                 `
                                             })
                                             deptitemgrpitems += `</select>`
                                             //console.log(deptitemgrpitems)
                                             genericnamelist = genericnameoptions
                                             itemlist_lab = data
                                             $("#selectallitem-lab").html(genericnameoptions)
                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                             let pricinglist = displayselectedlistitems + `<tr>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td>
                                                                 </td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                     </tr>`
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#selectdptitemgrpitem").on("change", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                             $(".additemtolist").on("click", function(evt){
 
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                         }
                                     
                                     })
                                 })
                         
                     } else if($("#advancesearch-lab").val()=="form"){
                         $("#form-lab").show()
                         $("#add-allitem-button-lab").show()
                         $("#subclass-lab, #deptitemgroup-lab, #itemgrouping-lab,#group-lab,#class-lab,#prescriptionnumber-lab,#routinename-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
 
                         // get all sub-classes
                         let selectgroup = "LAB"
                            
                                 let getFormByDeptItemGroup = "getFormByDeptItemGroup"
                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectgroup,getFormByDeptItemGroup:getFormByDeptItemGroup},function(formdata){
                                     //console.log(formdata)
                                     let data = JSON.parse(formdata)
                                     let genericnamesubclassoptions = ``
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnamesubclassoptions += `
                                         <option value="` + val.itemform + `">` + val.itemform + `</option>
                                         `
                                     })
                                     // genericnameusagesubclasslist = genericnamesubclassoptions
                                     $("#selectform-lab").html(genericnamesubclassoptions)
                                     let searchItem = $("#searchitems-lab").val()
                                     let selectsubclass = $("#selectform-lab").val()
                                     let GetGenericNameByFormDeptItemGrp = "GetGenericNameByFormDeptItemGrp"
                                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByFormDeptItemGrp:GetGenericNameByFormDeptItemGrp},function(formdata){
                                         //console.log(formdata)
                                         if(formdata!="No Record Found"){
                                             let data = JSON.parse(formdata)
                                             let genericnameoptions = ``
                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameoptions += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                 `
                                                 deptitemgrpitems += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                 `
                                             })
                                             deptitemgrpitems += `</select>`
                                             //console.log(deptitemgrpitems)
                                             genericnamelist = genericnameoptions
                                             itemlist_lab = data
                                             $("#selectallitem-lab").html(genericnameoptions)
                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                             let pricinglist = displayselectedlistitems + `<tr>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td>
                                                                 </td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                     </tr>`
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#selectdptitemgrpitem").on("change", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                             $(".additemtolist").on("click", function(evt){
 
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                         }
                                     
                                     })
                                 })
                         
                     } else if($("#advancesearch-lab").val()=="prescriptionnumber"){
                         $("#prescriptionnumber-lab").show()
                         $("#recall-laborder-button-lab").show()
                         $("#form-lab, #deptitemgroup-lab, #itemgrouping-lab,#group-lab,#subclass-lab,#class-lab,#routinename-lab,#add-regiment-button-lab,#add-allitem-button-lab").hide()
 
                         let revenueorderid = $("#selectitemlist_lab-lab").val()
                     
                         patientrevenueorderlist_lab.forEach(val => {
                         
                             if(revenueorderid==val.id){
                                 let itemorder = val.itemorder
                                 //console.log(itemorder)
                                 recallitems = JSON.parse(itemorder)
                                 orderitemlist_lab = recallitems
                                 let itemlist_lab = ``
                                 let genericnameoptions = ``
                                 deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
 
                                 recallitems.forEach(val => {
                                     itemlist_lab += `<option value="` + val.itemid + `">` + val.genericname + ` (` + val.sellingprice + `)</option>`
 
                                     genericnameoptions += `
                                     <option value="` + val.itemid + `,` + val.genericname + `">` + value.genericname + `</option>
                                     `
                                     deptitemgrpitems += `
                                     <option value="` + val.itemid + `,` + val.genericname+ `">` + value.genericname + `</option>
                                     `
                                 })
                                 // $("#selectitemlist_lab-lab").html(itemlist_lab)
                                 deptitemgrpitems += `</select>`
                                 genericnamelist = genericnameoptions
                                 itemlist_lab = recallitems
                                 $("#selectallitem-lab").html(genericnameoptions)
 
                                 let pricinglist = displayselectedlistitems + `<tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td>
                                                     </td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                         </tr>`
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                                 $(".additemtolist").on("click", function(evt){
 
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                             }
                         
                         });
                     } else if($("#advancesearch-lab").val()=="routinename"){
                         $("#routinename-lab").show()
                         $("#add-regiment-button-lab").show()
                         $("#form-lab, #deptitemgroup-lab, #itemgrouping-lab,#group-lab,#subclass-lab,#prescriptionnumber-lab,#class-lab,#add-allitem-button-lab,#recall-laborder-button-lab").hide()
 
                         let getItemRegiment = "getItemRegiment"
                         $.post("controllers/combo-setup.php",{getItemRegiment:getItemRegiment},function(data){
                             if(data!="No Record Found"){
                                 // //console.log(data)
                                 let formdata = JSON.parse(data)
                                 itemregimentarray = formdata.records
                                 let itemregimentlist = ``
                                 formdata.records.forEach(val => {
                                     itemregimentlist += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`
                                 });
                                 $("#selectregiment-lab").html(itemregimentlist)
 
                                 let regimentname = $("#selectregiment-lab").val()
                                 let splitregimentname = regimentname.split(",")
                                 regimentname = splitregimentname[1]
                                 itemregimentarray.forEach(val => {
                                     if(regimentname == val.regimentname){
                                         //console.log(val.regiment)
                                         let regimentlist = JSON.parse(val.regiment)
                                         combinedpricingvaluearray = regimentlist
 
                                         let genericnameoptions = ``
                                         deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
 
                                         let regimentlistitems = ``
                                         let count = 0
                                         regimentlist.forEach(value => {
                                             regimentlistitems += `<option value="` + count + `,` + value.itemid + `">` + value.itemname + `</option>`
 
                                             genericnameoptions += `
                                             <option value="` + value.itemid + `,` + value.itemname + `">` + value.itemname + `</option>
                                             `
                                             deptitemgrpitems += `
                                             <option value="` + value.itemid + `,` + value.itemname+ `">` + value.itemname + `</option>
                                             `
                                              count++
                                         });
                                         // $("#itemregimentslist").html(regimentlistitems)
                                         deptitemgrpitems += `</select>`
 
                                         genericnamelist = genericnameoptions
                                         itemlist_lab = regimentlist
                                         $("#selectallitem-lab").html(genericnameoptions)
 
                                         let pricinglist = displayselectedlistitems + `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                 </tr>`
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#selectdptitemgrpitem").on("change", function(evt){
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                         $(".additemtolist").on("click", function(evt){
 
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
 
                                         combinedpricingvaluearray = []
                                     }
                                 });
 
                             }
                         })
                     } else if($("#advancesearch-lab").val()=="deptitemgroup"){
                         $("#deptitemgroup-lab").show()
                         $("#add-allitem-button-lab").show()
                         $("#form-lab, #routinename-lab, #itemgrouping-lab,#group-lab,#subclass-lab,#prescriptionnumber-lab,#class-lab,#add-regiment-button-lab,#recall-laborder-button-lab").hide()
                     }
                 })
 
                 $("#selectform-lab").on("change", function(evt){
                     let searchItem = $("#searchitems-lab").val()
                     let selectsubclass = $("#selectform-lab").val()
                     let GetGenericNameByFormDeptItemGrp = "GetGenericNameByFormDeptItemGrp"
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByFormDeptItemGrp:GetGenericNameByFormDeptItemGrp},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val) {
                             
                                 genericnameoptions += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             //console.log(deptitemgrpitems)
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                             let pricinglist = displayselectedlistitems + `<tr>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td>
                                                 </td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                     </tr>`
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#selectdptitemgrpitem").on("change", function(evt){
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                             $(".additemtolist").on("click", function(evt){
 
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                         }
                     
                     })
                 })
 
                 $("#selectregiment-lab").on("change", function(evt){
                     evt.preventDefault()
                     let regimentname = $("#selectregiment-lab").val()
                     let splitregimentname = regimentname.split(",")
                     regimentname = splitregimentname[1]
                     itemregimentarray.forEach(val => {
                         if(regimentname == val.regimentname){
                             //console.log(val.regiment)
                             let regimentlist = JSON.parse(val.regiment)
                             combinedpricingvaluearray = regimentlist
 
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
 
                             let regimentlistitems = ``
                             let count = 0
                             regimentlist.forEach(value => {
                                 regimentlistitems += `<option value="` + count + `,` + value.itemid + `">` + value.itemname + `</option>`
 
                                 genericnameoptions += `
                                 <option value="` + value.itemid + `,` + value.itemname + `">` + value.itemname + `</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + value.itemid + `,` + value.itemname+ `">` + value.itemname + `</option>
                                 `
                                     count++
                             });
                             // $("#itemregimentslist").html(regimentlistitems)
                             deptitemgrpitems += `</select>`
 
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
 
                             let pricinglist = displayselectedlistitems + `<tr>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td>
                                                 </td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                     </tr>`
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#selectdptitemgrpitem").on("change", function(evt){
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                             $(".additemtolist").on("click", function(evt){
 
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
 
                             combinedpricingvaluearray = []
                         }
                     });
                 })
 
                 $("#searchregiment-lab").on('change keyup paste', function () {
                     let getItemRegimentBySearch = "getItemRegimentBySearch"
                     let searchregiment = $("#searchregiment-lab").val()
                     $.post("controllers/combo-setup.php",{searchregiment:searchregiment,getItemRegimentBySearch:getItemRegimentBySearch},function(data){
                         if(data!="No Record Found"){
                             // //console.log(data)
                             let formdata = JSON.parse(data)
                             itemregimentarray = formdata.records
                             let itemregimentlist = ``
                             formdata.records.forEach(val => {
                                 itemregimentlist += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`
                             });
                             $("#selectregiment-lab").html(itemregimentlist)
 
                             let regimentname = $("#selectregiment-lab").val()
                             let splitregimentname = regimentname.split(",")
                             regimentname = splitregimentname[1]
                             itemregimentarray.forEach(val => {
                                 if(regimentname == val.regimentname){
                                     //console.log(val.regiment)
                                     let regimentlist = JSON.parse(val.regiment)
                                     combinedpricingvaluearray = regimentlist
 
                                     let genericnameoptions = ``
                                     deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
 
                                     let regimentlistitems = ``
                                     let count = 0
                                     regimentlist.forEach(value => {
                                         regimentlistitems += `<option value="` + count + `,` + value.itemid + `">` + value.itemname + `</option>`
 
                                         genericnameoptions += `
                                         <option value="` + value.itemid + `,` + value.itemname + `">` + value.itemname + `</option>
                                         `
                                         deptitemgrpitems += `
                                         <option value="` + value.itemid + `,` + value.itemname+ `">` + value.itemname + `</option>
                                         `
                                             count++
                                     });
                                     // $("#itemregimentslist").html(regimentlistitems)
                                     deptitemgrpitems += `</select>`
 
                                     genericnamelist = genericnameoptions
                                     itemlist_lab = data
                                     $("#selectallitem-lab").html(genericnameoptions)
 
                                     let pricinglist = displayselectedlistitems + `<tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td>
                                                         </td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                             </tr>`
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#selectdptitemgrpitem").on("change", function(evt){
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                                     $(".additemtolist").on("click", function(evt){
 
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
 
                                     combinedpricingvaluearray = []
                                 }
                             });
 
                         }
                     })
                     
                 });
 
                 
                 $("#searchpatient").on('change keyup paste', function () {
                     ApplyFilterGetPatient();
                 });
 
                 function ApplyFilterGetPatient() {
                     var searchitemservice = $("#searchpatient").val();
                     //console.log("getPatientCards")
                     getPatientCards()
                 }
 
                 function getPatientCards(){
                     
                     // $("#viewrevenueordernumber-lab").html("New Prescription Order")
                     let searchItem = $("#searchpatient").val()
                     
                     let count = 0
                     $("#selectpatient").html("")
                     $("#form-edit-patient").html("")
                     $("#form-view-patientstatus").html("")
                     $("#form-view-patient").html("")
                     recallprescriptionlist = []
                     $("#selectprescription").hide()
                     let patientcardlist = `<option value='0'>Select Patient</option>`
                     for(i=0;i<allpatientcards.length;i++){
                         //console.log(allpatientcards[i].person)
                         
                         if(allpatientcards[i].person.includes(searchItem) || allpatientcards[i].cardnumber.includes(searchItem) || allpatientcards[i].patientnumber.includes(searchItem)){
                             count++
                             //console.log(searchItem)
                             patientcardlist += `
                                 <option value="` + allpatientcards[i].patientnumber + `" selected>` + allpatientcards[i].person + ` [` + allpatientcards[i].status + `: ` + allpatientcards[i].cardnumber + `]</option>
                             `
                             
                         }
                     }
                     
                     if(count>0){
                         totalfoundcards = count
                         $("#selectpatient").html(patientcardlist)
                         $("#card-status").html("Found " + totalfoundcards + " Cards Out of " + totalnumbercards + " Cards")
                         let id = $("#selectpatient").val()
                         getPatientCardId(id)
                     } else {
                         $("#card-status").html("Found " + count + " Cards Out of " + totalnumbercards + " Cards")
                     }
                 }
 
                 $("#searchprescription-lab").on("change keyup paste", function(){
                     // evt.preventDefault()
                     let id = $(this).val()
                    
                     let searchprescription = $("#searchprescription-lab").val()
                     let getPatientPrescriptionItemOrdersSearch = "getPatientPrescriptionItemOrdersSearch"
                         let patientid = data.patientid
                         $.post("controllers/patient-record.php",{id:searchprescription,getPatientPrescriptionItemOrdersSearch: getPatientPrescriptionItemOrdersSearch},function(orderformdata){
                             //console.log(orderformdata)
                             let patientitemorderlist = `<option value="">Select Order</option>`
                             let orderdata = JSON.parse(orderformdata)
                             patientrevenueorderlist_lab = []
                             orderdata.records.forEach(val => {
                                 patientitemorderlist += `<option value="` + val.id + `">` + val.revenueordernumber + ` (` + val.status + `: ` + val.totalamount + val.itemorderdate + `)</option>`
                                 patientrevenueorderlist_lab.push(val)
                             });
                             $("#selectitemlist_lab-lab").html(patientitemorderlist)
 
                             let itemorder = patientrevenueorderlist_lab[0].itemorder
                             //console.log(itemorder)
                             let recallitems = JSON.parse(itemorder)
                             orderitemlist_lab = recallitems
                             let itemlist_lab = ``
                             recallitems.forEach(val => {
                                 itemlist_lab += `<option value="` + val.itemid + `,` + val.genericname + `">` + val.genericname + ` (` + val.sellingprice + `)</option>`
 
                             })
                             // $("#selectitemlist_lab-lab").html(itemlist_lab)
                         })
                 })
 
                 $("#prescriptionview").on("change", function(evt){
                     evt.preventDefault()
                     let prescriptionview = $("#prescriptionview").val()
                     if(prescriptionview=="Age"){
                         $("#default-age-group").show()
                         $("#default-weight").hide()
                     } else if(prescriptionview=="Weight"){
                         $("#default-weight").show()
                         $("#default-age-group").hide()
                     } else {
                         $("#default-weight").hide()
                         $("#default-age-group").hide()
                     }
                 })
 
 
                 $("#selectpatient").on("change", function(evt){
                     evt.preventDefault()
                     let id = $(this).val()
                     //console.log(id)
                     
                     
                     getPatientCardId(id)
                 })
 
                 let patientrevenueorderlist_lab = []
                 let orderitemlist_lab = []
 
                 function getPatientCardId(id){
                     recallprescriptionlist = []
                     $("#selectprescription").hide()
                     let getPatientInfoByPatientNumber = "getPatientInfoByPatientNumber"
                     $.post("controllers/patient-record.php",{id:id,getPatientInfoByPatientNumber: getPatientInfoByPatientNumber},function(formdata){
                         // //console.log(formdata)
                        
                        
                         let data = JSON.parse(formdata)
                         let patienttype = data.patienttype
                         if(patienttype=="PAID AND REGISTERED"){
                             $("#paid").val("PAID")
                         } else {
                             $("#paid").val("NOT PAID")
                         }
                         $("#form-edit-patient").html("Patient Number: " + id + "<br>Card Number: " + data.cardnumber + "<br>Card Type: " + data.cardtype)
                         $("#form-view-patientstatus").html("Patient Type: " + data.patienttype + "<br>Patient Status: " + data.patientstatus)
                         $("#form-view-patient").html("Registered: " + data.entereddate + "<br>By: " + data.enteredby + "<br>Updated: " + data.updateddate)
                         let personid = data.personid
                         $("#selectpatientnumber").val(id)
                         $("#patientid").val(data.patientid)
                         $("#patientname").val(data.person)
                         //console.log($("#patientname").val())
                         $("#personid").val(data.personid)
                         $("#patientweight").val(data.weight)
                         $("#patientgender").val(data.gender)
                         $("#agegroup").val(data.agegroup)
 
 
                         $("#form-patientinfo-age").html(data.age)
                         $("#form-patientinfo-hospitalno").html(data.patientnumber)
                         $("#form-patientinfo-sex").html(data.gender)
                         $("#form-patientinfo-weight").html(data.weight)
                         // //console.log(data.age,data.gender,data.weight)
 
                         //get item orders
                         let getPatientPrescriptionItemOrders = "getPatientPrescriptionItemOrders"
                         let patientid = data.patientid
                         $.post("controllers/patient-record.php",{id:patientid,getPatientPrescriptionItemOrders: getPatientPrescriptionItemOrders},function(orderformdata){
                             //console.log(orderformdata)
                             let patientitemorderlist = `<option value="">Select Order</option>`
                             let orderdata = JSON.parse(orderformdata)
                             patientrevenueorderlist_lab = []
                             orderdata.records.forEach(val => {
                                 patientitemorderlist += `<option value="` + val.id + `">` + val.revenueordernumber + ` (` + val.status + `: ` + val.totalamount + val.itemorderdate + `)</option>`
                                 patientrevenueorderlist_lab.push(val)
                             });
                             $("#selectitemlist_lab-lab").html(patientitemorderlist)
 
                             let itemorder = patientrevenueorderlist_lab[0].itemorder
                             //console.log(itemorder)
                             let recallitems = JSON.parse(itemorder)
                             orderitemlist_lab = recallitems
                             let itemlist_lab = ``
                             recallitems.forEach(val => {
                                 itemlist_lab += `<option value="` + val.itemid + `,` + val.genericname + `">` + val.genericname + ` (` + val.sellingprice + `)</option>`
 
                             })
                             // $("#selectitemlist_lab-lab").html(itemlist_lab)
                         })
                        
                     })
                 }
 
 
                 $("#selectitemorder").on("change", function(evt){
                     evt.preventDefault()
                     let revenueorderid = $("#selectitemorder").val()
                     
                     patientrevenueorderlist_lab.forEach(val => {
                        
                         if(revenueorderid==val.id){
                             let itemorder = val.itemorder
                             recallitems = JSON.parse(itemorder)
                             orderitemlist_lab = recallitems
                             let itemlist_lab = ``
                             recallitems.forEach(val => {
                                 itemlist_lab += `<option value="` + val.itemid + `">` + val.genericname + ` (` + val.sellingprice + `)</option>`
 
                             })
                             $("#selectitemlist_lab-lab").html(itemlist_lab)
                         }
                     
                     });
 
                 })
 
                 $("#selectitemlist_lab-lab").on("change", function(evt){
                     evt.preventDefault()
                     let revenueorderid = $("#selectitemlist_lab-lab").val()
                     
                     patientrevenueorderlist_lab.forEach(val => {
                        
                         if(revenueorderid==val.id){
                             let itemorder = val.itemorder
                             //console.log(itemorder)
                             recallitems = JSON.parse(itemorder)
                             orderitemlist_lab = recallitems
                             let itemlist_lab = ``
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
 
                             recallitems.forEach(val => {
                                 itemlist_lab += `<option value="` + val.itemid + `">` + val.genericname + ` (` + val.sellingprice + `)</option>`
 
                                 genericnameoptions += `
                                 <option value="` + val.itemid + `,` + val.genericname + `">` + val.genericname + `</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.itemid + `,` + val.genericname+ `">` + val.genericname + `</option>
                                 `
                             })
                             // $("#selectitemlist_lab-lab").html(itemlist_lab)
                             deptitemgrpitems += `</select>`
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
 
                             let pricinglist = displayselectedlistitems + `<tr>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td>
                                                 </td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                     </tr>`
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#selectdptitemgrpitem").on("change", function(evt){
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                             $(".additemtolist").on("click", function(evt){
 
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                         }
                     });
 
                 })
 
 
                 let getItemGroupByLikeDeptItemGroup = "getItemGroupByLikeDeptItemGroup"
                 let genericnameusagegrouplist = ``
                 let genericnameusageclasslist = ``
                 let genericnameusagesubclasslist = ``
                 let genericnamedepartmentitemgrouplist = ``
                 let genericnamelist = ``
 
                 //get departmentitemgroups
                 let getDepartmentItemGroup = "getDepartmentItemGroup"
                 searchItem = "LAB"
                 $.post("controllers/combo-setup.php",{searchItem:searchItem,getDepartmentItemGroup: getDepartmentItemGroup},function(formdata){
                      //console.log(formdata)
                     if(formdata!="No Record Found"){
                         
                         let data=JSON.parse(formdata)
                         let usagegroupoptions = `<option value="">Select Item Group</option>`
                         $.each(data.records, function(key, val) {
                         
                             usagegroupoptions += `
                             <option value="` + val.departmentitemgroup + `">` + val.departmentitemgroup + `</option>
                         `
                         })
                         genericnamedepartmentitemgrouplist = usagegroupoptions
                         $("#selectdepartmentitemgrouping-lab").html(usagegroupoptions)
                         //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                        
                     }
                 })
 
 //                 $("#selectdepartmentitemgrouping-lab").on("change", function(evt){
 //                     evt.preventDefault()
 //                     searchAllItem_lab = $("#selectdepartmentitemgrouping-lab").val()
 //                     // splitsearch = searchItem.split(",")
 //                     // searchItem = splitsearch[0]
 //                     // //console.log(searchItem)
 //                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,getItemGroupByLikeDeptItemGroup: getItemGroupByLikeDeptItemGroup},function(formdata){
 //                         //console.log(formdata)
 //                         if(formdata!="No Record Found"){
 //                             
 //                             let data=JSON.parse(formdata)
 //                             let usagegroupoptions = ``
 //                             $.each(data.records, function(key, val) {
 //                             
 //                                 usagegroupoptions += `
 //                                 <option value="` + val.itemgroup + `">` + val.itemgroup + `</option>
 //                             `
 //                             })
 //                             genericnameusagegrouplist = usagegroupoptions
 //                             $("#selectusagegroup-lab").html(usagegroupoptions)
 //                             //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
 //                             let selectgroup = $("#selectusagegroup-lab").val()
 //                             let getItemClassByItemGroup = "getItemClassByItemGroup"
 //                             $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
 //                                 //console.log(formdata)
 //                                 let data = JSON.parse(formdata)
 //                                 let genericnameclassoptions = ``
 //                                 $.each(data.records, function(key, val) {
 //                                 
 //                                     genericnameclassoptions += `
 //                                     <option value="` + val.itemclass + `">` + val.itemclass + `</option>
 //                                     `
 //                                 })
 //                                 genericnameusageclasslist = genericnameclassoptions
 //                                 $("#selectusageclass-lab").html(genericnameclassoptions)
 //                                 let selectsubclassclass = $("#selectusageclass-lab").val()
 //                                 let getItemSubClassByClass = "getItemSubClassByClass"
 //                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
 //                                     //console.log(formdata)
 //                                     let data = JSON.parse(formdata)
 //                                     let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
 //                                     $.each(data.records, function(key, val) {
 //                                     
 //                                         genericnamesubclassoptions += `
 //                                         <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
 //                                         `
 //                                     })
 //                                     genericnameusagesubclasslist = genericnamesubclassoptions
 //                                     $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
 //                                     let searchItem = $("#searchitems-lab").val()
 //                                     let selectsubclass = $("#selectusagesubclass-lab").val()
 //                                     let GetGenericNameByUsageDRUGSSubClass = "GetGenericNameByUsageDRUGSSubClass"
 //                                     $.post("controllers/combo-setup.php",{searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDRUGSSubClass:GetGenericNameByUsageDRUGSSubClass},function(formdata){
 //                                         //console.log(formdata)
 //                                         if(formdata!="No Record Found"){
 //                                             let data = JSON.parse(formdata)
 //                                             let genericnameoptions = ``
 //                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
 //                                             $.each(data.records, function(key, val) {
 //                                             
 //                                                 genericnameoptions += `
 //                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
 //                                                 `
 //                                                 deptitemgrpitems += `
 //                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
 //                                                 `
 //                                             })
 //                                             deptitemgrpitems += `</select>`
 //                                             //console.log(deptitemgrpitems)
 //                                             genericnamelist = genericnameoptions
 //                                             $("#selectallitem-lab").html(genericnameoptions)
 //                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
 //                                             let pricinglist = displayselectedlistitems + `<tr>
 //                                                         <td></td>
 //                                                         <td></td>
 //                                                         <td></td>
 //                                                         <td></td>
 //                                                         <td></td>
 //                                                         <td></td>
 //                                                         <td></td>
 //                                                         <td>
 //                                                                 </td>
 //                                                     </tr>`
 //                                             $("#view-revenue-order-list-lab").html(pricinglist)
 // 
 //                                             $("#selectdptitemgrpitem").on("change", function(evt){
 //                                                 evt.preventDefault()
 //                                                 let selecteditem = $("#selectdptitemgrpitem").val()
 //                                                 selectitemanddisplay(selecteditem)
 //                                             })
 //                                             $(".additemtolist").on("click", function(evt){
 // 
 //                                                 evt.preventDefault()
 //                                                 let selecteditem = $("#selectdptitemgrpitem").val()
 //                                                 selectitemanddisplay(selecteditem)
 //                                             })
 //                                         }
 //                                     
 //                                     })
 //                                 })
 //                             })
 //                         }
 //                     })
 //                 })
 
                 searchAllItem_lab = "LAB "
                 // splitsearch = searchItem.split(",")
                 // searchItem = splitsearch[0]
                 // //console.log(searchItem)
                 $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,getItemGroupByLikeDeptItemGroup: getItemGroupByLikeDeptItemGroup},function(formdata){
                      //console.log(formdata)
                     if(formdata!="No Record Found"){
                         
                         let data=JSON.parse(formdata)
                         let usagegroupoptions = ``
                         $.each(data.records, function(key, val) {
                         
                             usagegroupoptions += `
                             <option value="` + val.itemgroup + `">` + val.itemgroup + `</option>
                         `
                         })
                         genericnameusagegrouplist = usagegroupoptions
                         $("#selectusagegroup-lab").html(usagegroupoptions)
                         $("#selectusagegroupgroup-lab").html(usagegroupoptions)
                         //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                         let selectgroup = $("#selectusagegroup-lab").val()
                         let getItemClassByItemGroup = "getItemClassByItemGroup"
                         $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                             //console.log(formdata)
                             let data = JSON.parse(formdata)
                             let genericnameclassoptions = ``
                             $.each(data.records, function(key, val) {
                             
                                 genericnameclassoptions += `
                                 <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                                 `
                             })
                             genericnameusageclasslist = genericnameclassoptions
                             $("#selectusageclass-lab").html(genericnameclassoptions)
                             $("#selectusageclassgroup-lab").html(genericnameclassoptions)
                             let selectsubclassclass = $("#selectusageclass-lab").val()
                             let getItemSubClassByClass = "getItemSubClassByClass"
                             $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                                 //console.log(formdata)
                                 let data = JSON.parse(formdata)
                                 let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnamesubclassoptions += `
                                     <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                     `
                                 })
                                 genericnameusagesubclasslist = genericnamesubclassoptions
                                 $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
                                 $("#selectusagesubclassgroup-lab").html(genericnamesubclassoptions)
                                 let searchItem = $("#searchitems-lab").val()
                                 let selectsubclass = $("#selectusagesubclass-lab").val()
                                 let GetGenericNameByUsageLABSubClass = "GetGenericNameByUsageLABSubClass"
                                 $.post("controllers/combo-setup.php",{searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageLABSubClass:GetGenericNameByUsageLABSubClass},function(formdata){
                                     //console.log(formdata)
                                     if(formdata!="No Record Found"){
                                          let data = JSON.parse(formdata)
                                         let genericnameoptions = ``
                                         deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                         $.each(data.records, function(key, val) {
                                         
                                             genericnameoptions += `
                                             <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                             `
                                             deptitemgrpitems += `
                                             <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                             `
                                         })
                                         deptitemgrpitems += `</select>`
                                         //console.log(deptitemgrpitems)
                                         genericnamelist = genericnameoptions
                                         itemlist_lab = data
                                         $("#selectallitem-lab").html(genericnameoptions)
                                         // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                         let pricinglist = displayselectedlistitems + `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                 </tr>`
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#selectdptitemgrpitem").on("change", function(evt){
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                         $(".additemtolist").on("click", function(evt){
 
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                     }
                                    
                                 })
                             })
                         })
                     }
                 })
 
                 $("#selectorder").on("change", function(evt){
                     let getItemGroupByLikeDeptItemGroup = "getItemGroupByLikeDeptItemGroup"
                     let genericnameusagegrouplist = ``
                     let genericnameusageclasslist = ``
                     let genericnameusagesubclasslist = ``
                     let genericnamelist = ``
 
                     searchAllItem_lab = "LAB "
                     if(searchAllItem_lab==="DRUGS"){
                         $("#prescription-by-group, #prescription-table").show()
                         $("#item-order-table-lab").hide()
                         let prescriptionview = $("#prescriptionview").val()
                         if(prescriptionview=="Age"){
                             $("#default-age-group").show()
                             $("#default-weight").hide()
                         } else if(prescriptionview=="Weight"){
                             $("#default-weight").show()
                             $("#default-age-group").hide()
                         } else {
                             $("#default-weight").hide()
                             $("#default-age-group").hide()
                         }
                     } else if(searchAllItem_lab=="LAB "){
                         $("#laboratory-table").show()
                         $("#item-order-table-lab, #prescription-table, #prescription-by-group").hide()
                         $("#default-age-group").hide()
                         $("#default-weight").hide()
                     } else if(searchAllItem_lab==""){
                         
                         $("#prescription-table, #prescription-by-group").hide()
                         $("#default-age-group").hide()
                         $("#default-weight").hide()
                     } else {
                         $("#prescription-by-group").hide()
                         $("#default-age-group").hide()
                         $("#default-weight").hide()
                     }
                     // splitsearch = searchItem.split(",")
                     // searchItem = splitsearch[0]
                     // //console.log(searchAllItem_lab)
                     //get departmentitemgroups
                     let getDepartmentItemGroup = "getDepartmentItemGroup"
                     searchItem = "LAB"
                     $.post("controllers/combo-setup.php",{searchItem:searchItem,getDepartmentItemGroup: getDepartmentItemGroup},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             
                             let data=JSON.parse(formdata)
                             let usagegroupoptions = `<option value="">Select Item Group</option>`
                             $.each(data.records, function(key, val) {
                             
                                 usagegroupoptions += `
                                 <option value="` + val.departmentitemgroup + `">` + val.departmentitemgroup + `</option>
                             `
                             })
                             genericnamedepartmentitemgrouplist = usagegroupoptions
                             $("#selectdepartmentitemgrouping-lab").html(usagegroupoptions)
                             //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                         
                         }
                     })
 
                     let selectgroup = ""
                     let getItemClassByDeptItemGroup = "getItemClassByDeptItemGroup"
                     $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByDeptItemGroup:getItemClassByDeptItemGroup},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnameclassoptions = ``
                         $.each(data.records, function(key, val) {
                         
                             genericnameclassoptions += `
                             <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                             `
                         })
                         genericnameusageclasslist = genericnameclassoptions
                         $("#selectusageclassclass-lab").html(genericnameclassoptions)
                         let selectsubclassclass = $("#selectusageclassclass-lab").val()
                         let getItemSubClassByClass = "getItemSubClassByClass"
                         $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                             //console.log(formdata)
                             let data = JSON.parse(formdata)
                             let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                             $.each(data.records, function(key, val) {
                             
                                 genericnamesubclassoptions += `
                                 <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                 `
                             })
                             genericnameusagesubclasslist = genericnamesubclassoptions
                             $("#selectusagesubclassclass-lab").html(genericnamesubclassoptions)
                             
                         })
                     })
 
                     // get all sub-classes
                     // let selectgroup = ""
                     
                     let getItemSubClassByDeptItemGroup = "getItemSubClassByDeptItemGroup"
                     $.post("controllers/combo-setup.php",{selectsubclassclass:selectgroup,getItemSubClassByDeptItemGroup:getItemSubClassByDeptItemGroup},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                         $.each(data.records, function(key, val) {
                         
                             genericnamesubclassoptions += `
                             <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                             `
                         })
                         genericnameusagesubclasslist = genericnamesubclassoptions
                         $("#selectusagesubclasssubclass-lab").html(genericnamesubclassoptions)
                         
                     })
 
                     // get all sub-classes
                     // let selectgroup = ""
                            
                            let getFormByDeptItemGroup = "getFormByDeptItemGroup"
                            $.post("controllers/combo-setup.php",{selectsubclassclass:selectgroup,getFormByDeptItemGroup:getFormByDeptItemGroup},function(formdata){
                                //console.log(formdata)
                                let data = JSON.parse(formdata)
                                let genericnamesubclassoptions = `<option value="">Select Form</option>`
                                $.each(data.records, function(key, val) {
                                
                                    genericnamesubclassoptions += `
                                    <option value="` + val.itemform + `">` + val.itemform + `</option>
                                    `
                                })
                             //    genericnameusagesubclasslist = genericnamesubclassoptions
                                $("#selectform-lab").html(genericnamesubclassoptions)
                                
                            })
 
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,getItemGroupByLikeDeptItemGroup: getItemGroupByLikeDeptItemGroup},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             
                             let data=JSON.parse(formdata)
                             let usagegroupoptions = ``
                             $.each(data.records, function(key, val) {
                             
                                 usagegroupoptions += `
                                 <option value="` + val.itemgroup + `">` + val.itemgroup + `</option>
                             `
                             })
                             genericnameusagegrouplist = usagegroupoptions
                             $("#selectusagegroup-lab").html(usagegroupoptions)
                             $("#selectusagegroupgroup-lab").html(usagegroupoptions)
                             //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                             let selectgroup = $("#selectusagegroup-lab").val()
                             let getItemClassByItemGroup = "getItemClassByItemGroup"
                             $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                                 //console.log(formdata)
                                 let data = JSON.parse(formdata)
                                 let genericnameclassoptions = ``
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameclassoptions += `
                                     <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                                     `
                                 })
                                 genericnameusageclasslist = genericnameclassoptions
                                 $("#selectusageclass-lab").html(genericnameclassoptions)
                                 let selectsubclassclass = $("#selectusageclass-lab").val()
                                 let getItemSubClassByClass = "getItemSubClassByClass"
                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                                     //console.log(formdata)
                                     let data = JSON.parse(formdata)
                                     let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnamesubclassoptions += `
                                         <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                         `
                                     })
                                     genericnameusagesubclasslist = genericnamesubclassoptions
                                     $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
                                     let searchItem = $("#searchitems-lab").val()
                                     let selectsubclass = $("#selectusagesubclass-lab").val()
                                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                         //console.log(formdata)
                                         if(formdata!="No Record Found"){
                                             let data = JSON.parse(formdata)
                                             let genericnameoptions = ``
                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameoptions += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                 `
                                                 deptitemgrpitems += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                 `
                                             })
                                             deptitemgrpitems += `</select>`
                                             //console.log(deptitemgrpitems)
                                             genericnamelist = genericnameoptions
                                             itemlist_lab = data
                                             $("#selectallitem-lab").html(genericnameoptions)
                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                             let pricinglist = displayselectedlistitems + `<tr>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td>
                                                                 </td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                     </tr>`
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#selectdptitemgrpitem").on("change", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                             $(".additemtolist").on("click", function(evt){
 
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                         }
                                     
                                     })
                                 })
                             })
                         }
                     })
 
                 })
 
 
                 $("#searchform-lab").on("change keyup paste", function(){
                     let selectgroup = ""
                     let searchform = $("#searchform-lab").val()
                     let getFormByDeptItemGroupSearch = "getFormByDeptItemGroupSearch"
                     $.post("controllers/combo-setup.php",{searchform:searchform,selectsubclassclass:selectgroup,getFormByDeptItemGroupSearch:getFormByDeptItemGroupSearch},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnamesubclassoptions = ``
                         $.each(data.records, function(key, val) {
                         
                             genericnamesubclassoptions += `
                             <option value="` + val.itemform + `">` + val.itemform + `</option>
                             `
                         })
                         // genericnameusagesubclasslist = genericnamesubclassoptions
                         $("#selectform-lab").html(genericnamesubclassoptions)
                         let searchItem = $("#searchitems-lab").val()
                         let selectsubclass = $("#selectform-lab").val()
                         let GetGenericNameByFormDeptItemGrp = "GetGenericNameByFormDeptItemGrp"
                         $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByFormDeptItemGrp:GetGenericNameByFormDeptItemGrp},function(formdata){
                             //console.log(formdata)
                             if(formdata!="No Record Found"){
                                 let data = JSON.parse(formdata)
                                 let genericnameoptions = ``
                                 deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameoptions += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                     `
                                     deptitemgrpitems += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                     `
                                 })
                                 deptitemgrpitems += `</select>`
                                 //console.log(deptitemgrpitems)
                                 genericnamelist = genericnameoptions
                                 itemlist_lab = data
                                 $("#selectallitem-lab").html(genericnameoptions)
                                 // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                 let pricinglist = displayselectedlistitems + `<tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td>
                                                     </td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                         </tr>`
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
 
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                                 $(".additemtolist").on("click", function(evt){
 
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                             }
                         
                         })
                     })
 
                 })
 
 
                 $("#searchsubclass-lab").on("change keyup paste", function(){
                     // get all sub-classes
                     let selectgroup = ""
                     let searchsubclass = $("#searchsubclass-lab").val()
                            
                            let getItemSubClassByDeptItemGroupSearchSubClass = "getItemSubClassByDeptItemGroupSearchSubClass"
                            $.post("controllers/combo-setup.php",{searchsubclass:searchsubclass,selectsubclassclass:selectgroup,getItemSubClassByDeptItemGroupSearchSubClass:getItemSubClassByDeptItemGroupSearchSubClass},function(formdata){
                                //console.log(formdata)
                                let data = JSON.parse(formdata)
                                let genericnamesubclassoptions = ``
                                $.each(data.records, function(key, val) {
                                
                                    genericnamesubclassoptions += `
                                    <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                    `
                                })
                                genericnameusagesubclasslist = genericnamesubclassoptions
                                $("#selectusagesubclasssubclass-lab").html(genericnamesubclassoptions)
                                let searchItem = $("#searchitems-lab").val()
                                let selectsubclass = $("#selectusagesubclasssubclass-lab").val()
                                let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                                $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                    //console.log(formdata)
                                    if(formdata!="No Record Found"){
                                        let data = JSON.parse(formdata)
                                        let genericnameoptions = ``
                                        deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                        $.each(data.records, function(key, val) {
                                        
                                            genericnameoptions += `
                                            <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                            `
                                            deptitemgrpitems += `
                                            <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                            `
                                        })
                                        deptitemgrpitems += `</select>`
                                        //console.log(deptitemgrpitems)
                                        genericnamelist = genericnameoptions
                                        itemlist_lab = data
                                        $("#selectallitem-lab").html(genericnameoptions)
                                        // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                        let pricinglist = displayselectedlistitems + `<tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                            </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>`
                                        $("#view-revenue-order-list-lab").html(pricinglist)
                                        $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
 
                                        $("#selectdptitemgrpitem").on("change", function(evt){
                                            evt.preventDefault()
                                            let selecteditem = $("#selectdptitemgrpitem").val()
                                            selectitemanddisplay(selecteditem)
                                        })
                                        $(".additemtolist").on("click", function(evt){
 
                                            evt.preventDefault()
                                            let selecteditem = $("#selectdptitemgrpitem").val()
                                            selectitemanddisplay(selecteditem)
                                        })
                                    }
                                
                                })
                            })
 
                 })
 
                 $("#searchgroups-lab").on("change keyup paste", function(){
                     getItemGroupByLikeDeptItemGroupSearchGroup = "getItemGroupByLikeDeptItemGroupSearchGroup"
                     
 
                     searchAllItem_lab = "LAB "
                     // splitsearch = searchItem.split(",")
                     searchItem = $("#searchgroups-lab").val()
                     // //console.log(searchItem)
                     //get departmentitemgroups
                     // let getDepartmentItemGroup = "getDepartmentItemGroup"
                     // searchItem = ""
                     
                     $.post("controllers/combo-setup.php",{searchItem:searchItem,departmentitemgroup:searchAllItem_lab,getItemGroupByLikeDeptItemGroupSearchGroup: getItemGroupByLikeDeptItemGroupSearchGroup},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             
                             let data=JSON.parse(formdata)
                             let usagegroupoptions = ``
                             $.each(data.records, function(key, val) {
                             
                                 usagegroupoptions += `
                                 <option value="` + val.itemgroup + `">` + val.itemgroup + `</option>
                             `
                             })
                             genericnameusagegrouplist = usagegroupoptions
                             // $("#selectusagegroup-lab").html(usagegroupoptions)
                             $("#selectusagegroupgroup-lab").html(usagegroupoptions)
                             //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                             let selectgroup = $("#selectusagegroupgroup-lab").val()
                             let getItemClassByItemGroup = "getItemClassByItemGroup"
                             $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                                 //console.log(formdata)
                                 let data = JSON.parse(formdata)
                                 let genericnameclassoptions = ``
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameclassoptions += `
                                     <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                                     `
                                 })
                                 genericnameusageclasslist = genericnameclassoptions
                                 $("#selectusageclassgroup-lab").html(genericnameclassoptions)
                                 let selectsubclassclass = $("#selectusageclassgroup-lab").val()
                                 let getItemSubClassByClass = "getItemSubClassByClass"
                                 $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                                     //console.log(formdata)
                                     let data = JSON.parse(formdata)
                                     let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnamesubclassoptions += `
                                         <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                         `
                                     })
                                     genericnameusagesubclasslist = genericnamesubclassoptions
                                     $("#selectusagesubclassgroup-lab").html(genericnamesubclassoptions)
                                     let searchItem = $("#searchitems-lab").val()
                                     let selectsubclass = $("#selectusagesubclassgroup-lab").val()
                                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                         //console.log(formdata)
                                         if(formdata!="No Record Found"){
                                             let data = JSON.parse(formdata)
                                             let genericnameoptions = ``
                                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                             $.each(data.records, function(key, val) {
                                             
                                                 genericnameoptions += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                                 `
                                                 deptitemgrpitems += `
                                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                                 `
                                             })
                                             deptitemgrpitems += `</select>`
                                             //console.log(deptitemgrpitems)
                                             genericnamelist = genericnameoptions
                                             itemlist_lab = data
                                             $("#selectallitem-lab").html(genericnameoptions)
                                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                             let pricinglist = displayselectedlistitems + `<tr>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td>
                                                                 </td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                         <td></td>
                                                     </tr>`
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
                                             $("#view-revenue-order-list-lab").html(pricinglist)
 
                                             $("#selectdptitemgrpitem").on("change", function(evt){
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                             $(".additemtolist").on("click", function(evt){
 
                                                 evt.preventDefault()
                                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                                 selectitemanddisplay(selecteditem)
                                             })
                                         }
                                     
                                     })
                                 })
                             })
                         }
                     })
 
                 })
 
 
                 $("#searchclass-lab").on('change keyup paste', function () {
                     let searchclass = $("#searchclass-lab").val()
                     let selectgroup = ""
                     let getItemClassByDeptItemGroupSearchClass = "getItemClassByDeptItemGroupSearchClass"
                     $.post("controllers/combo-setup.php",{searchclass:searchclass,searchItem:selectgroup,getItemClassByDeptItemGroupSearchClass:getItemClassByDeptItemGroupSearchClass},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnameclassoptions = ``
                         $.each(data.records, function(key, val) {
                         
                             genericnameclassoptions += `
                             <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                             `
                         })
                         genericnameusageclasslist = genericnameclassoptions
                         $("#selectusageclassclass-lab").html(genericnameclassoptions)
                         let selectsubclassclass = $("#selectusageclassclass-lab").val()
                         let getItemSubClassByClass = "getItemSubClassByClass"
                         $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                             //console.log(formdata)
                             let data = JSON.parse(formdata)
                             let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                             $.each(data.records, function(key, val) {
                             
                                 genericnamesubclassoptions += `
                                 <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                 `
                             })
                             genericnameusagesubclasslist = genericnamesubclassoptions
                             $("#selectusagesubclassclass-lab").html(genericnamesubclassoptions)
                             let searchItem = $("#searchitems-lab").val()
                             let selectsubclass = $("#selectusagesubclassclass-lab").val()
                             let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                             $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                 //console.log(formdata)
                                 if(formdata!="No Record Found"){
                                     let data = JSON.parse(formdata)
                                     let genericnameoptions = ``
                                     deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnameoptions += `
                                         <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                         `
                                         deptitemgrpitems += `
                                         <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                         `
                                     })
                                     deptitemgrpitems += `</select>`
                                     //console.log(deptitemgrpitems)
                                     genericnamelist = genericnameoptions
                                     itemlist_lab = data
                                     $("#selectallitem-lab").html(genericnameoptions)
                                     // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                     let pricinglist = displayselectedlistitems + `<tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td>
                                                         </td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                             </tr>`
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
 
                                     $("#selectdptitemgrpitem").on("change", function(evt){
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                                     $(".additemtolist").on("click", function(evt){
 
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                                 }
                             
                             })
                         })
                     })
                 });
 
                 $("#searchitems-lab").on('change keyup paste', function () {
                     ApplyFilterGenericName();
                 });
 
                 function ApplyFilterGenericName() {
                     var searchString = $("#searchitems-lab").val();
                     //console.log("GetSubDepartmentsFunction")
                     GetGenericNameFunction()
                 }
 
                
 
                 function GetGenericNameFunction(){
                     let searchItem = $("#searchitems-lab").val()
                     let selectsubclass = $("#selectusagesubclass-lab").val()
                     let GetGenericNameByUsageDeptItemGrpSearch = "GetGenericNameByUsageDeptItemGrpSearch"
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSearch:GetGenericNameByUsageDeptItemGrpSearch},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val) {
                             
                                 genericnameoptions += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                             let pricinglist = displayselectedlistitems + `<tr>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td>
                                                 </td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                     </tr>`
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#view-revenue-order-list-lab").html(pricinglist)
                             $("#selectdptitemgrpitem").on("change", function(evt){
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                             $(".additemtolist").on("click", function(evt){
 
                                 evt.preventDefault()
                                 let selecteditem = $("#selectdptitemgrpitem").val()
                                 selectitemanddisplay(selecteditem)
                             })
                         }
                         
                     })
                 }
                 $("#selectusagesubclass-lab").on("change", function(evt){
                     evt.preventDefault()
                     let searchItem = $("#searchitems-lab").val()
                     let selectsubclass = $("#selectusagesubclass-lab").val()
                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val) {
                             
                                 genericnameoptions += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                             let pricinglist = displayselectedlistitems + `<tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td>
                                                     </td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                         </tr>`
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
 
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                                 $(".additemtolist").on("click", function(evt){
 
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                         }
                         
                     })
                 })
 
                 $("#selectusagesubclassgroup-lab").on("change", function(evt){
                     evt.preventDefault()
                     let searchItem = $("#searchitems-lab").val()
                     let selectsubclass = $("#selectusagesubclassgroup-lab").val()
                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val) {
                             
                                 genericnameoptions += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                             let pricinglist = displayselectedlistitems + `<tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td>
                                                     </td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                         </tr>`
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
 
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                                 $(".additemtolist").on("click", function(evt){
 
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                         }
                         
                     })
                 })
 
                 $("#selectusagesubclassclass-lab").on("change", function(evt){
                     evt.preventDefault()
                     let searchItem = $("#searchitems-lab").val()
                     let selectsubclass = $("#selectusagesubclassclass-lab").val()
                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val) {
                             
                                 genericnameoptions += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                             let pricinglist = displayselectedlistitems + `<tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td>
                                                     </td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                         </tr>`
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
 
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                                 $(".additemtolist").on("click", function(evt){
 
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                         }
                         
                     })
                 })
 
 
                 $("#selectusagesubclasssubclass-lab").on("change", function(evt){
                     evt.preventDefault()
                     let searchItem = $("#searchitems-lab").val()
                     let selectsubclass = $("#selectusagesubclasssubclass-lab").val()
                     let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                     $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let data = JSON.parse(formdata)
                             let genericnameoptions = ``
                             deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                             $.each(data.records, function(key, val) {
                             
                                 genericnameoptions += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                 `
                                 deptitemgrpitems += `
                                 <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                 `
                             })
                             deptitemgrpitems += `</select>`
                             genericnamelist = genericnameoptions
                             itemlist_lab = data
                             $("#selectallitem-lab").html(genericnameoptions)
                             // let selectclass = $("#selectgenericnameitemgroupclass").val()
                             let pricinglist = displayselectedlistitems + `<tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td>
                                                     </td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                         </tr>`
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
                                 $("#view-revenue-order-list-lab").html(pricinglist)
 
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                                 $(".additemtolist").on("click", function(evt){
 
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
                                 })
                         }
                         
                     })
                 })
 
 
                 $("#selectusagegroup-lab").on("change", function(evt){
                     evt.preventDefault()
                     //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                     let selectgroup = $("#selectusagegroup-lab").val()
                     let getItemClassByItemGroup = "getItemClassByItemGroup"
                     //console.log(selectgroup)
                     $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnameclassoptions = ``
                         $.each(data.records, function(key, val) {
                         
                             genericnameclassoptions += `
                             <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                             `
                         })
                         genericnameusageclasslist = genericnameclassoptions
                         $("#selectusageclass-lab").html(genericnameclassoptions)
                         let selectsubclassclass = $("#selectusageclass-lab").val()
                         let getItemSubClassByClass = "getItemSubClassByClass"
                         $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                             //console.log(formdata)
                             let data = JSON.parse(formdata)
                             let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                             $.each(data.records, function(key, val) {
                             
                                 genericnamesubclassoptions += `
                                 <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                 `
                             })
                             genericnameusagesubclasslist = genericnamesubclassoptions
                             $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
                             let searchItem = $("#searchitems-lab").val()
                             let selectsubclass = $("#selectusagesubclass-lab").val()
                             let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                             $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                 //console.log(formdata)
                                 if(formdata!="No Record Found"){
                                     let data = JSON.parse(formdata)
                                     let genericnameoptions = ``
                                     deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnameoptions += `
                                         <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                         `
                                         deptitemgrpitems += `
                                         <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                         `
                                     })
                                     deptitemgrpitems += `</select>`
                                     genericnamelist = genericnameoptions
                                     itemlist_lab = data
                                     $("#selectallitem-lab").html(genericnameoptions)
                                     // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                     let pricinglist = displayselectedlistitems + `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                 </tr>`
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#selectdptitemgrpitem").on("change", function(evt){
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                         $(".additemtolist").on("click", function(evt){
 
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                 }
                                 
                             })
                         })
                     })
                 })
 
                 $("#selectusagegroupgroup-lab").on("change", function(evt){
                     evt.preventDefault()
                     //$("#selectformdepartmentitemgroup").html(departmentitemgroupoptions)
                     let selectgroup = $("#selectusagegroupgroup-lab").val()
                     let getItemClassByItemGroup = "getItemClassByItemGroup"
                     //console.log(selectgroup)
                     $.post("controllers/combo-setup.php",{searchItem:selectgroup,getItemClassByItemGroup:getItemClassByItemGroup},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnameclassoptions = ``
                         $.each(data.records, function(key, val) {
                         
                             genericnameclassoptions += `
                             <option value="` + val.itemclass + `">` + val.itemclass + `</option>
                             `
                         })
                         genericnameusageclasslist = genericnameclassoptions
                         $("#selectusageclassgroup-lab").html(genericnameclassoptions)
                         let selectsubclassclass = $("#selectusageclassgroup-lab").val()
                         let getItemSubClassByClass = "getItemSubClassByClass"
                         $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                             //console.log(formdata)
                             let data = JSON.parse(formdata)
                             let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                             $.each(data.records, function(key, val) {
                             
                                 genericnamesubclassoptions += `
                                 <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                                 `
                             })
                             genericnameusagesubclasslist = genericnamesubclassoptions
                             $("#selectusagesubclassgroup-lab").html(genericnamesubclassoptions)
                             let searchItem = $("#searchgroups-lab").val()
                             let selectsubclass = $("#selectusagesubclassgroup-lab").val()
                             let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                             $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                                 //console.log(formdata)
                                 if(formdata!="No Record Found"){
                                     let data = JSON.parse(formdata)
                                     let genericnameoptions = ``
                                     deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                     $.each(data.records, function(key, val) {
                                     
                                         genericnameoptions += `
                                         <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                         `
                                         deptitemgrpitems += `
                                         <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                         `
                                     })
                                     deptitemgrpitems += `</select>`
                                     genericnamelist = genericnameoptions
                                     itemlist_lab = data
                                     $("#selectallitem-lab").html(genericnameoptions)
                                     // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                     let pricinglist = displayselectedlistitems + `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                 </tr>`
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#view-revenue-order-list-lab").html(pricinglist)
                                         $("#selectdptitemgrpitem").on("change", function(evt){
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                         $(".additemtolist").on("click", function(evt){
 
                                             evt.preventDefault()
                                             let selecteditem = $("#selectdptitemgrpitem").val()
                                             selectitemanddisplay(selecteditem)
                                         })
                                 }
                                 
                             })
                         })
                     })
                 })
 
 
                 $("#selectusageclass-lab").on("change", function(evt){
                     evt.preventDefault()
                     let selectsubclassclass = $("#selectusageclass-lab").val()
                     let getItemSubClassByClass = "getItemSubClassByClass"
                     $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                         $.each(data.records, function(key, val) {
                         
                             genericnamesubclassoptions += `
                             <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                             `
                         })
                         genericnameusagesubclasslist = genericnamesubclassoptions
                         $("#selectusagesubclass-lab").html(genericnamesubclassoptions)
                         let searchItem = $("#searchitems-lab").val()
                         let selectsubclass = $("#selectusagesubclass-lab").val()
                         let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                         $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                             //console.log(formdata)
                             if(formdata!="No Record Found"){
                                 let data = JSON.parse(formdata)
                                 let genericnameoptions = ``
                                 deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameoptions += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                     `
                                     deptitemgrpitems += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                     `
                                 })
                                 deptitemgrpitems += `</select>`
                                 genericnamelist = genericnameoptions
                                 itemlist_lab = data
                                 $("#selectallitem-lab").html(genericnameoptions)
                                 // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                 let pricinglist = displayselectedlistitems + `<tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td>
                                                         </td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                             </tr>`
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#selectdptitemgrpitem").on("change", function(evt){
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                                     $(".additemtolist").on("click", function(evt){
 
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                             }
                             
                         })
                     })
                 })
 
                 $("#selectusageclassgroup-lab").on("change", function(evt){
                     evt.preventDefault()
                     let selectsubclassclass = $("#selectusageclassgroup-lab").val()
                     let getItemSubClassByClass = "getItemSubClassByClass"
                     $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                         $.each(data.records, function(key, val) {
                         
                             genericnamesubclassoptions += `
                             <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                             `
                         })
                         genericnameusagesubclasslist = genericnamesubclassoptions
                         $("#selectusagesubclassgroup-lab").html(genericnamesubclassoptions)
                         let searchItem = $("#searchitems-lab").val()
                         let selectsubclass = $("#selectusagesubclassgroup-lab").val()
                         let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                         $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                             //console.log(formdata)
                             if(formdata!="No Record Found"){
                                 let data = JSON.parse(formdata)
                                 let genericnameoptions = ``
                                 deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameoptions += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                     `
                                     deptitemgrpitems += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                     `
                                 })
                                 deptitemgrpitems += `</select>`
                                 genericnamelist = genericnameoptions
                                 itemlist_lab = data
                                 $("#selectallitem-lab").html(genericnameoptions)
                                 // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                 let pricinglist = displayselectedlistitems + `<tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td>
                                                         </td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                             </tr>`
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#selectdptitemgrpitem").on("change", function(evt){
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                                     $(".additemtolist").on("click", function(evt){
 
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                             }
                             
                         })
                     })
                 })
 
                 $("#selectusageclassclass-lab").on("change", function(evt){
                     evt.preventDefault()
                     let selectsubclassclass = $("#selectusageclassclass-lab").val()
                     let getItemSubClassByClass = "getItemSubClassByClass"
                     $.post("controllers/combo-setup.php",{selectsubclassclass:selectsubclassclass,getItemSubClassByClass:getItemSubClassByClass},function(formdata){
                         //console.log(formdata)
                         let data = JSON.parse(formdata)
                         let genericnamesubclassoptions = `<option value="">Select Sub Class</option>`
                         $.each(data.records, function(key, val) {
                         
                             genericnamesubclassoptions += `
                             <option value="` + val.itemsubclass + `">` + val.itemsubclass + `</option>
                             `
                         })
                         genericnameusagesubclasslist = genericnamesubclassoptions
                         $("#selectusagesubclassclass-lab").html(genericnamesubclassoptions)
                         let searchItem = $("#searchitems-lab").val()
                         let selectsubclass = $("#selectusagesubclassclass-lab").val()
                         let GetGenericNameByUsageDeptItemGrpSubClass = "GetGenericNameByUsageDeptItemGrpSubClass"
                         $.post("controllers/combo-setup.php",{departmentitemgroup:searchAllItem_lab,searchItem:searchItem,itemsubclass:selectsubclass,GetGenericNameByUsageDeptItemGrpSubClass:GetGenericNameByUsageDeptItemGrpSubClass},function(formdata){
                             //console.log(formdata)
                             if(formdata!="No Record Found"){
                                 let data = JSON.parse(formdata)
                                 let genericnameoptions = ``
                                 deptitemgrpitems = `<select id="selectdptitemgrpitem" name="selectdptitemgrpitem" class="form-control">`
                                 $.each(data.records, function(key, val) {
                                 
                                     genericnameoptions += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `(` + val.tradename + `)</option>
                                     `
                                     deptitemgrpitems += `
                                     <option value="` + val.id + `,` + val.itemgenericname + `">` + val.itemgenericname + `</option>
                                     `
                                 })
                                 deptitemgrpitems += `</select>`
                                 genericnamelist = genericnameoptions
                                 itemlist_lab = data
                                 $("#selectallitem-lab").html(genericnameoptions)
                                 // let selectclass = $("#selectgenericnameitemgroupclass").val()
                                 let pricinglist = displayselectedlistitems + `<tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td>
                                                         </td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                             </tr>`
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#view-revenue-order-list-lab").html(pricinglist)
                                     $("#selectdptitemgrpitem").on("change", function(evt){
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                                     $(".additemtolist").on("click", function(evt){
 
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                     })
                             }
                             
                         })
                     })
                 })
 
 
 
                 //Add Prescription Setup
 
                 let itemstrength = ""
           
 
             let weightlist = ""
             let getWeight = "getWeight"
             //let searchItem = ""
             $.post("controllers/combo-setup.php",{searchItem:searchItem,getWeight:getWeight}, function(data){
                 if(data!="No Record Found"){
                     let organizationoptions = ``
                     data = JSON.parse(data)
                     // //console.log(data)
                     $.each(data.records, function(key, val) {
                         organizationoptions += `<option value="` + val.weight + `,` + val.age + `,` + val.sex + `">` + val.sex + `: ` + val.age + `</option>`
                     });
                     weightlist = organizationoptions
                     // $("#weight").html(organizationoptions)
 
                     
                 }
             })
 
             let agelist = ""
             let searchage = ""
             let getAgeGroup = "getAgeGroup"
             //let searchItem = ""
             $.post("controllers/combo-setup.php",{searchItem:searchage,getAgeGroup:getAgeGroup}, function(data){
                 if(data!="No Record Found"){
                     let organizationoptions = ``
                     data = JSON.parse(data)
                     // //console.log(data)
                     $.each(data.records, function(key, val) {
                         organizationoptions += `<option value="` + val.age + ` (` + val.agerange + `)">` + val.age + ` (` + val.agerange + `)</option>`
                     });
                     agelist = organizationoptions
                     $("#selectage").html(organizationoptions)
 
                     
                 }
             })
 
             $("#add-prescription-order-button-lab").show()
             $("#discard-prescription-order-button-lab").hide()
             $("#update-prescription-order-button-lab").hide()
             // $("#cancel-prescription-order-button-lab").hide()
 
             let prescriptionorderlist = []
             let revenueorderlist_lab = []
             let prescriptionlist = []
                 // Add item to revenue order List
                 $("#add-allitem-button-lab").on("click", function(evt){
                     evt.preventDefault()
                     let item = $("#selectallitem-lab").val()
                     let splititem = item.split(",")
                     let itemid = splititem[0]
                     let itemname = splititem[1]
                     
                     let getPrescriptionByItemId = "getPrescriptionByItemId"
                     $.post("controllers/combo-setup.php",{itemid:itemid,getPrescriptionByItemId:getPrescriptionByItemId}, function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let weight = 0
                             let gender = ""
                             let age = ""
                             // //console.log($("#selectpatient").val(), typeof($("#selectpatient").val()))
                             if($("#selectpatient").val()==""||$("#selectpatient").val()==null||$("#selectpatient").val()=="0"){
                                 
                                 gender = $("#selectgender").val()
                                 weight = $("#enterweight").val()
                                 age = $("#selectage").val()
                                 let splitage = age.split(" (")
                                 age = splitage[0]
                             } else {
                                 gender = $("#patientgender").val()
                                age = $("#agegroup").val()
                                 weight = $("#patientweight").val()
                                 //console.log(age, weight)
                             }
                             let data = JSON.parse(formdata)
                             let prescription = data.records[0].prescription
                            
                             prescriptionlist = JSON.parse(prescription)
                             
 
 
                             let prescription_weight = ""
                             let stat_value = false
                             let totalquantity = 0
 
                             prescriptionlist.forEach(val => {
                                 
                                 
                                 let prescriptionweight = ""
                                 let frequency_value = val.frequency
                                 let splitfreq = frequency_value.split(",")
                                 if(splitfreq[0]=="stat"){
                                     stat_value = true
                                     prescription_weight = val.weight
                                     prescriptionweight= prescription_weight
                                     totalquantity = 0
                                 } else {
                                     if( stat_value == true ){
                                         prescriptionweight= prescription_weight
                                     } else {
                                         prescriptionweight = val.weight
                                         totalquantity = 0
                                     }
                                     stat_value = false
                                 }
 
                                 
                                 
                                  
 
 
 
                                 splitweight = prescriptionweight.split(",")
 
                                 let prescriptiongender = splitweight[2]
                                 prescriptionweightlist = splitweight[0].split("-")
                                 let lowerweightlist = prescriptionweightlist[0].split("Kg")
                                 let lowerweight = parseFloat(lowerweightlist[0])
                                 let upperweightlist = prescriptionweightlist[1].split("Kg")
                                 let upperweight = parseFloat(upperweightlist[0])
                                 let selectweight = 0
                                 if(weight!=null){
                                     selectweight = parseFloat(weight)
                                 }
                                 
                                 let prescriptionage = splitweight[1]
                                 let splitprescriptionagelist = prescriptionage.split(" (")
                                 prescriptionage = splitprescriptionagelist[0]
 
                                
                                 
 
                                 if(gender==prescriptiongender){
                                     //console.log(age,prescriptionage)
                                     let view = $('input[name="prescriptionview"]:checked').val()
                                     //console.log(view)
                                     if(view=="Age"){
                                         if(age==prescriptionage){
                                             let prescriptiontext = val.enterdosage + " " + val.dosage + "x" + val.frequency + "x" + val.enterduration + " " + val.duration
                                             
                                             let duration_value = 1
 
                                             if(frequency_value.includes("stat")){
                                                 duration_value = 1
                                             }
                                             if(val.duration.includes("day")){
                                                 duration_value = parseFloat(val.enterduration)
                                                 totalquantity = 0
                                             }
 
                                             let quantity = parseFloat(val.enterdosage) * duration_value
                                             totalquantity = totalquantity + quantity
                                             quantity = totalquantity
                                             if(val.frequency.includes("tds")){
                                                 quantity = quantity * 3
                                             } else if(val.frequency.includes("bd")){
                                                 quantity = quantity * 2
                                             } else if(val.frequency.includes("qds")){
                                                 quantity = quantity * 4
                                             }
                                             let price = parseFloat(data.records[0].sellingprice)
                                             let totalprice = price * quantity
                                             let stockcode = data.records[0].stockcode
                                             let dosageinstruction = data.records[0].dosageinstruction
                                             let administrationinstruction = data.records[0].administrationinstruction
                                             let strength = data.records[0].strength
                                             let interaction = data.records[0].interaction
                                             let itemform = data.records[0].itemformabbreviation
                                             let infusiongivingset = data.records[0].infusiongivingset + " " + data.records[0].infusionconstant
                                             let infusionrate = data.records[0].infusionrate
                                             let department = data.records[0].department
                                             let departmentitemgroup = data.records[0].departmentitemgroup
                                             let gasinfusionconstant = data.records[0].gasinfusionconstant + " " + data.records[0].gasinfusionrate
                                             let unittype = $("#selectunittype-lab").val()
                                             let prescriptionitem = {
                                                 "item":itemname,
                                                 "itemid":itemid,
                                                 "prescription":prescriptiontext,
                                                 "route":data.records[0].usageroute,
                                                 "unitpricepiece":data.records[0].sellingprice,
                                                 "unitpriceweight":data.records[0].sellingpriceperstrength,
                                                 "unitpricevolume":data.records[0].sellingpriceperliquidstrength,
                                                 "quantity":quantity,
                                                 "totalamount":totalprice,
                                                 "stockcode":stockcode,
                                                 "dosageinstruction":dosageinstruction,
                                                 "administrationinstruction":administrationinstruction,
                                                 "strength":strength,
                                                 "iteminfo":interaction,
                                                 "itemform":itemform,
                                                 "infusiongivingset":infusiongivingset,
                                                 "infusionrate":infusionrate,
                                                 "gasinfusionconstant":gasinfusionconstant,
                                                 "unittype":unittype
                                             }
                                             prescriptionorderlist.push(prescriptionitem)
                                            
                                             let sellingprice = 0
                                             if(unittype=="pieces"){
                                                 sellingprice = parseFloat(data.records[0].sellingprice)
                                             } else if(unittype=="weight"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperstrength)
                                             } else if(unittype=="volume"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperliquidstrength)
                                             }
                                             let revenueorderitem = {"genericname":itemname,
                                                                     "department":department,
                                                                     "departmentitemgroup":departmentitemgroup,
                                                                     "sellingprice":sellingprice,
                                                                     "reorderlevel":"reorderlevel",
                                                                     "unittype":unittype,
                                                                     "itemid":itemid,
                                                                     "quantity":quantity}
                                             revenueorderlist_lab.push(revenueorderitem)
                                             displayprescriptionorder(prescriptionorderlist)
                                         }
                                     } else if(view=="Weight"){
                                         //console.log(selectweight,lowerweight,upperweight)
                                         //console.log(selectweight>lowerweight)
                                         //console.log(selectweight<upperweight)
                                         if(selectweight>lowerweight && selectweight<upperweight){
                                             let prescriptiontext = val.enterdosage + " " + val.dosage + "x" + val.frequency + "x" + val.enterduration + " " + val.duration
                                             let duration_value = 1
                                             if(frequency_value.includes("stat")){
                                                 duration_value = 1
                                             }else{
                                                 duration_value = parseFloat(val.enterduration)
                                                 totalquantity = 0
                                             }
 
                                             let quantity = parseFloat(val.enterdosage) * duration_value
                                             totalquantity = totalquantity + quantity
                                             quantity = totalquantity
 
                                             if(val.frequency.includes("tds")){
                                                 quantity = quantity * 3
                                             } else if(val.frequency.includes("bd")){
                                                 quantity = quantity * 2
                                             } else if(val.frequency.includes("qds")){
                                                 quantity = quantity * 4
                                             }
                                             let price = parseFloat(data.records[0].sellingprice)
                                             let totalprice = price * quantity
                                             let stockcode = data.records[0].stockcode
                                             let dosageinstruction = data.records[0].dosageinstruction
                                             let administrationinstruction = data.records[0].administrationinstruction
                                             let strength = data.records[0].strength
                                             let interaction = data.records[0].interaction
                                             let itemform = data.records[0].itemformabbreviation
                                             let infusiongivingset = data.records[0].infusiongivingset + " " + data.records[0].infusionconstant
                                             let infusionrate = data.records[0].infusionrate
                                             let department = data.records[0].department
                                             let departmentitemgroup = data.records[0].departmentitemgroup
                                             let gasinfusionconstant = data.records[0].gasinfusionconstant + " " + data.records[0].gasinfusionrate
                                             let unittype = $("#selectunittype-lab").val()
                                             //console.log(unittype)
                                             let prescriptionitem = {
                                                 "item":itemname,
                                                 "itemid":itemid,
                                                 "prescription":prescriptiontext,
                                                 "route":data.records[0].usageroute,
                                                 "unitpricepiece":data.records[0].sellingprice,
                                                 "unitpriceweight":data.records[0].sellingpriceperstrength,
                                                 "unitpricevolume":data.records[0].sellingpriceperliquidstrength,
                                                 "quantity":quantity,
                                                 "totalamount":totalprice,
                                                 "stockcode":stockcode,
                                                 "dosageinstruction":dosageinstruction,
                                                 "administrationinstruction":administrationinstruction,
                                                 "strength":strength,
                                                 "iteminfo":interaction,
                                                 "itemform":itemform,
                                                 "infusiongivingset":infusiongivingset,
                                                 "infusionrate":infusionrate,
                                                 "gasinfusionconstant":gasinfusionconstant,
                                                 "unittype":unittype
                                             }
                                             prescriptionorderlist.push(prescriptionitem)
                                             let sellingprice = 0
                                             if(unittype=="pieces"){
                                                 sellingprice = parseFloat(data.records[0].sellingprice)
                                             } else if(unittype=="weight"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperstrength)
                                             } else if(unittype=="volume"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperliquidstrength)
                                             }
                                             let revenueorderitem = {"genericname":itemname,
                                                                     "department":department,
                                                                     "departmentitemgroup":departmentitemgroup,
                                                                     "sellingprice":sellingprice,
                                                                     "reorderlevel":"reorderlevel",
                                                                     "unittype":unittype,
                                                                     "itemid":itemid,
                                                                     "quantity":quantity}
                                             revenueorderlist_lab.push(revenueorderitem)
                                             displayprescriptionorder(prescriptionorderlist)
                                         }
                                     }
                                     
                                     
                                 }
                             });
                         }
                     })
                 })
 
 
                 $("#selectallitem-lab").on("change", function(evt){
                     evt.preventDefault()
                     let item = $("#selectallitem-lab").val()
                     let splititem = item.split(",")
                     let itemid = splititem[0]
                     let itemname = splititem[1]
                     //console.log(itemid)
                     //Get all the pieces
                    let totalpreviousquantity = 0
                    let getStockItemListByItemId = "getStockItemListByItemId"
                    let sellingprice = 0
                    let sellingpriceperpiece = 0
                    let sellingpriceperweight = 0
                    let sellingpricepervolume = 0
                    let reorderlevel = 0
                    let reorderlevelunit = ""
                    
                    let unittype = ""
                    let getLabItemByItemId = "getLabItemByItemId"
                    $.post("controllers/combo-setup.php",{itemid:itemid,getLabItemByItemId:getLabItemByItemId}, function(formdata){
                        console.log(formdata)
                        if(formdata!="No Record Found"){
                            
                            let data = JSON.parse(formdata)
                                let specimen = ""
                                let sample = ""
                                let specialinstruction = ""
                                    specimen = data.records[0].specimen
                               
                                    specialinstruction = data.records[0].specialinstruction
                              
                                    sample = data.records[0].sample
                             

                                let price = parseFloat(data.records[0].sellingprice)
                                let totalprice = price 
                                let stockcode = data.records[0].stockcode
                                
                                let strength = data.records[0].strength
                                
                                let itemform = data.records[0].itemformabbreviation
                                let quantity = 1
                                let department = data.records[0].department
                                let departmentitemgroup = data.records[0].departmentitemgroup
                                let iteminfo = ""
                                let prescriptionitem = {
                                    "item":itemname,
                                    "itemid":itemid,
                                    "unitpricepiece":data.records[0].sellingprice,
                                    "unitpriceweight":data.records[0].sellingpriceperstrength,
                                    "unitpricevolume":data.records[0].sellingpriceperliquidstrength,
                                    "quantity":quantity,
                                    "totalamount":totalprice,
                                    "stockcode":stockcode,
                                    "strength":strength,
                                    "itemform":itemform,
                                    "specimen":specimen,
                                    "sample":sample,
                                    "specialinstruction":specialinstruction,
                                    "iteminfo":iteminfo
                                }
                                prescriptionorderlist.push(prescriptionitem)
                                    $.post("controllers/combo-setup.php",{id:itemid,getStockItemListByItemId:getStockItemListByItemId},function(formdata){
                                            //console.log(formdata)
                                            $("#patient-consultation-status").html("")
                                            if(formdata!="No Record Found"){
                                                let data = JSON.parse(formdata)
                                                $.each(data.records, function(key, val) {

                                                    itemid = val.itemid
                                                    let id = val.id
                                                    totalpreviousquantity += parseFloat(val.previousquantity)
                                                    sellingpriceperpiece = parseFloat(val.sellingprice)
                                                    sellingpriceperweight = parseFloat(val.sellingpriceperstrength)
                                                    sellingpricepervolume = parseFloat(val.sellingpriceperliquidstrength)
                                                    reorderlevel = val.reorderlevel
                                                    unittype = $("#selectunittype").val()
                                                    if(unittype=="pieces"){
                                                        sellingprice = sellingpriceperpiece
                                                    }else if(unittype=="weight"){
                                                        sellingprice = sellingpriceperweight
                                                    }else if(unittype=="volume"){
                                                        sellingprice = sellingpricepervolume
                                                    }
                                                    //console.log(sellingprice)


                                                    let itemgenericname = splititem[1]
                                                    let department = val.department
                                                    let itemform = val.itemform
                                                    let splititemform = itemform.split(",")
                                                    itemform = splititemform[1]
                                                    let departmentitemgroup = val.departmentitemgroup
                                                    let itemstate = val.itemstate
                                                    let tradename = val.tradename
                                                    let specimen = val.specimen
                                                    let sample = val.sample
                                                    let specialinstruction = val.specialinstruction
                                                    let unitoptions = `<option value="">Select Unit</option>`

                                                    //default value for units is weight
                                                    //get weight units
                                                    let getItemWeightByDepartmentItemGrouping = "getItemWeightByDepartmentItemGrouping"
                                                    // let departmentitemgroup = $("#combineddepartmentitemgroup").val()
                                                    $.post("controllers/combo-setup.php",{state:itemstate, searchItem:departmentitemgroup,getItemWeightByDepartmentItemGrouping:getItemWeightByDepartmentItemGrouping},function(formdata){
                                                        let data = JSON.parse(formdata)
                                                        
                                                        unitoptions += `
                                                            <option value='Unit'>Unit</option>
                                                            <option value='` + itemform + `'>`+ itemform + `</option>
                                                        `
                                                        $.each(data.records, function(key, val) {
                                                            if(val.abbreviation!="None"){
                                                                unitoptions += `
                                                                <option value='` + val.abbreviation + `'>`+ val.unit + `</option>
                                                                `
                                                            }
                                                        });
                                                        // $("#combineditemsunit").html(unitoptions + serviceunit)
                                                    })
                                                            
                                            
                                                                                                                        
                                                    //default value for units is weight
                                                    //get weight units
                                                    let getItemVolumeByDepartmentItemGrouping = "getItemVolumeByDepartmentItemGrouping"
                                                    // departmentitemgroup = $("#combineddepartmentitemgroup").val()
                                                    $.post("controllers/combo-setup.php",{state:itemstate, searchItem:departmentitemgroup,getItemVolumeByDepartmentItemGrouping:getItemVolumeByDepartmentItemGrouping},function(formdata){
                                                        let data = JSON.parse(formdata)
                                                        let itemform = $("#combineditemform").val()
                                                        
                                                        $.each(data.records, function(key, val) {
                                                            if(val.abbreviation!="None"){
                                                                unitoptions += `
                                                                <option value='` + val.abbreviation + `'>`+ val.unit + `</option>
                                                                `
                                                            }
                                                        });
                                                        // $("#combineditemsunit").html(unitoptions + serviceunit)
                                                    })

                                                    //default value for units is weight
                                                    //get weight units
                                                    let getItemLengthByDepartmentItemGrouping = "getItemLengthByDepartmentItemGrouping"
                                                    // departmentitemgroup = $("#combineddepartmentitemgroup").val()
                                                    $.post("controllers/combo-setup.php",{state:itemstate, searchItem:departmentitemgroup,getItemLengthByDepartmentItemGrouping:getItemLengthByDepartmentItemGrouping},function(formdata){
                                                        let data = JSON.parse(formdata)
                                                        //console.log(data)
                                                        let itemform = $("#combineditemform").val()
                                                        
                                                        $.each(data.records, function(key, val) {
                                                            if(val.abbreviation!="None"){
                                                                unitoptions += `
                                                                <option value='` + val.abbreviation + `'>`+ val.unit + `</option>
                                                                `
                                                            }
                                                        });
                                                        // $("#combineditemsunit").html(unitoptions + serviceunit)
                                                    })
                                            
                                                    //default value for units is weight
                                                    //get weight units
                                                    let getItemServiceByDepartmentItemGrouping = "getItemServiceByDepartmentItemGrouping"
                                                    // departmentitemgroup = $("#combineddepartmentitemgroup").val()
                                                    $.post("controllers/combo-setup.php",{state:itemstate, searchItem:departmentitemgroup,getItemServiceByDepartmentItemGrouping:getItemServiceByDepartmentItemGrouping},function(formdata){
                                                        let data = JSON.parse(formdata)
                                                        let itemform = $("#combineditemform").val()
                                                        
                                                        $.each(data.records, function(key, val) {
                                                            if(val.abbreviation!="None"){
                                                                unitoptions += `
                                                                <option value='` + val.abbreviation + `'>`+ val.unit + `</option>
                                                                `
                                                            }
                                                            
                                                        });
                                                        $("#selectunit-item").html(unitoptions)
                                                        //console.log(unitoptions)
                                                        let unit = $("#selectunit-item").val()
                                                        let revenueorderitem = {"genericname":itemgenericname,
                                                                                "specialinstruction":specialinstruction,
                                                                                "specimen":specimen,
                                                                                "sample":sample,
                                                                                "sellingprice":sellingprice,
                                                                                "reorderlevel":reorderlevel,
                                                                                "unittype":unittype,
                                                                                "unit":unit,
                                                                                "itemid":itemid,
                                                                                "id":id,
                                                                                "quantity":1}
                                                        revenueorderlist_lab.push(revenueorderitem)
                                                        //console.log(revenueorderlist_lab)
                                                        displayrevenueorder_lab(revenueorderlist_lab)
                                                    })

                                                })

                                            } else {
                                                $("#patient-consultation-status").html("No Record Found for Item")
                                            }


                                    })
                                }
                        })
                 })

                 function displayrevenueorder_lab(revenueorderlist_lab){
                    if(revenueorderlist_lab.length>0){
                     let count = 0
                    let totalprice = 0
                    let totalitems = 0
                    let pricinglist = ``
                     revenueorderlist_lab.forEach(element => {
                            let item = element.genericname
                            let department = element.department
                            let departmentitemgroup = element.departmentitemgroup
                            let price = element.sellingprice
                            let quantity = element.quantity
                            let unit = element.unit
                            let sample = element.sample
                            let specimen = element.specimen
                            let specialinstruction = element.specialinstruction
                            
                            let total = parseFloat(price) * parseFloat(quantity)
                            totalitems++
                            totalprice += total
                            totalrevenueorderprice = totalprice
                            totalrevenueorderitems = totalitems
                            
                                pricinglist += `<tr>
                                                   <!-- <td>
                                                        
                                                        <input type="checkbox" style="height: 25px;width:25px;" class="itemselect_lab" data-id="` + count + `">
                                                    </td> -->
                                                    <td>` + item + `</td>
                                                    <td>` + specimen + `</td>
                                                    <td>`+ sample + `</td>
                                                    <td>&#8358;`+ price.toFixed(2) + `</td>
                                                    <td>`+ quantity + ` ` + unit + `</td>
                                                    <td>&#8358;` + total.toFixed(2) + `</td>
                                                    <td>` + specialinstruction + `</td>
                                                    <td><input type="number" min="1" max="1000" class="multiplyitem" data-id="` + count + `"></td>
                                                    <td><span class="additem" data-id="` + count + `" style="font-size: 16px;"><i class="fa fa-plus-square"></i>
                                                        <span class="subtractitem" data-id="` + count + `" style="font-size: 16px;"><i class="fa fa-minus-square"></i>
                                                            <span class="deleteitem" data-id="` + count + `" style="font-size: 16px;"><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                    `
                                    count++
                                });
                                displayselectedlistitems = pricinglist
                               
                                $("#view-revenue-order-list-lab").html(pricinglist)

                               

                                $("#view-revenue-order-count-lab").html(totalitems + " Item(s)")
                                $("#view-revenue-order-price-lab").html("Total: &#8358;" + totalprice.toFixed(2))
                                $(".deleteitem").on("click", function(evt){
                                        evt.preventDefault()
                                        let id = $(this).attr("data-id")
                                    
                                        revenueorderlist_lab.splice(id, 1)
                                        //console.log(id)
                                        
                                        displayrevenueorder_lab(revenueorderlist_lab)

                                    })

                               
                                
                                $(".multiplyitem").on('change paste', function () {
                                   let qty = parseFloat($(this).val())

                                    let id = $(this).attr("data-id")
                                
                                    revenueorderlist_lab[id].quantity = qty
                                //console.log(revenueorderlist_lab)
                                    // $("#view-revenue-order-price").html("&#8358;" + totalprice.toFixed(2))

                                    displayrevenueorder_lab(revenueorderlist_lab)

                                })

                                $(".additem").on("click", function(evt){
                                    evt.preventDefault()
                                    let id = $(this).attr("data-id")
                                
                                    revenueorderlist_lab[id].quantity = revenueorderlist_lab[id].quantity + 1
                                   //console.log(revenueorderlist_lab)
                                    // $("#view-revenue-order-price").html("&#8358;" + totalprice.toFixed(2))

                                    displayrevenueorder_lab(revenueorderlist_lab)

                                })

                                $(".subtractitem").on("click", function(evt){
                                        evt.preventDefault()
                                        let id = $(this).attr("data-id")
                                    
                                        revenueorderlist_lab[id].quantity = revenueorderlist_lab[id].quantity -1
                                        if(revenueorderlist_lab[id].quantity==0){
                                            revenueorderlist_lab.splice(id, 1)
                                        }
                                        
                                        
                                        displayrevenueorder_lab(revenueorderlist_lab)

                                    })
                               
                    } else {
                        displayselectedlistitems = ``
                        $("#view-revenue-order-list-item").html("")
                        $("#view-revenue-order-count-item").html("")
                        $("#view-revenue-order-price-item").html("")
                    }
                }
 
                 $("#recall-laborder-button-lab").on("click", function(evt){
                     evt.preventDefault()
                     let revenueorderid = $("#selectitemorder").val()
                     //console.log(patientrevenueorderlist_lab)
                     
                     patientrevenueorderlist_lab.forEach(val => {
                         
                         if(revenueorderid==val.id){
                             let itemorder = val.itemorder
                             let prescriptionorder = val.prescription
                             prescriptionorderlist = JSON.parse(prescriptionorder)
                                                         
                            
                             $("#revenue-order-id").val(val.id)
                             $("#revenue-order-number-lab").val(val.revenueordernumber)
                             displayprescriptionorder(prescriptionorderlist)
                             $("#viewrevenueordernumber-lab").html(val.revenueordernumber)
                             
                             $("#discard-revenue-order-button").show()
                             $("#update-revenue-order-button").show()
                             $("#add-revenue-order-button").hide()
                         }
                     
                     });
                     
 
                     
 
                 })
 
 
 
                 function selectitemanddisplay(selecteditem){
                     
                     let item = selecteditem
                     let splititem = item.split(",")
                     let itemid = splititem[0]
                     let itemname = splititem[1]
                     
                     let getPrescriptionByItemId = "getPrescriptionByItemId"
                     $.post("controllers/combo-setup.php",{itemid:itemid,getPrescriptionByItemId:getPrescriptionByItemId}, function(formdata){
                         //console.log(formdata)
                         if(formdata!="No Record Found"){
                             let weight = 0
                             let gender = ""
                             let age = ""
                             // //console.log($("#selectpatient").val(), typeof($("#selectpatient").val()))
                             if($("#selectpatient").val()==""||$("#selectpatient").val()==null){
                                 
                                 gender = $("#selectgender").val()
                                 weight = $("#enterweight").val()
                                 age = $("#selectage").val()
                                 let splitage = age.split(" (")
                                 age = splitage[0]
                             } else {
                                 gender = $("#patientgender").val()
                                age = $("#agegroup").val()
                                 weight = $("#patientweight").val()
                                 //console.log(age, weight)
                             }
                             let data = JSON.parse(formdata)
                             let prescription = data.records[0].prescription
                            
                             prescriptionlist = JSON.parse(prescription)
                             
 
 
                             let prescription_weight = ""
                             let stat_value = false
                             let totalquantity = 0
 
                             prescriptionlist.forEach(val => {
                                 
                                 
                                 let prescriptionweight = ""
                                 let frequency_value = val.frequency
                                 let splitfreq = frequency_value.split(",")
                                 if(splitfreq[0]=="stat"){
                                     stat_value = true
                                     prescription_weight = val.weight
                                     prescriptionweight= prescription_weight
                                     totalquantity = 0
                                 } else {
                                     if( stat_value == true ){
                                         prescriptionweight= prescription_weight
                                     } else {
                                         prescriptionweight = val.weight
                                         totalquantity = 0
                                     }
                                     stat_value = false
                                 }
 
                                 
                                 
                                  
 
 
 
                                 splitweight = prescriptionweight.split(",")
 
                                 let prescriptiongender = splitweight[2]
                                 prescriptionweightlist = splitweight[0].split("-")
                                 let lowerweightlist = prescriptionweightlist[0].split("Kg")
                                 let lowerweight = parseFloat(lowerweightlist[0])
                                 let upperweightlist = prescriptionweightlist[1].split("Kg")
                                 let upperweight = parseFloat(upperweightlist[0])
                                 let selectweight = 0
                                 if(weight!=null){
                                     selectweight = parseFloat(weight)
                                 }
                                 
                                 let prescriptionage = splitweight[1]
                                 let splitprescriptionagelist = prescriptionage.split(" (")
                                 prescriptionage = splitprescriptionagelist[0]
 
                                
                                 
 
                                 if(gender==prescriptiongender){
                                     //console.log(age,prescriptionage)
                                     let view = $('input[name="prescriptionview"]:checked').val()
                                     //console.log(view)
                                     if(view=="Age"){
                                         if(age==prescriptionage){
                                             let prescriptiontext = val.enterdosage + " " + val.dosage + "x" + val.frequency + "x" + val.enterduration + " " + val.duration
                                             
                                             let duration_value = 1
 
                                             if(frequency_value.includes("stat")){
                                                 duration_value = 1
                                             }
                                             if(val.duration.includes("day")){
                                                 duration_value = parseFloat(val.enterduration)
                                                 totalquantity = 0
                                             }
 
                                             let quantity = parseFloat(val.enterdosage) * duration_value
                                             totalquantity = totalquantity + quantity
                                             quantity = totalquantity
                                             if(val.frequency.includes("tds")){
                                                 quantity = quantity * 3
                                             } else if(val.frequency.includes("bd")){
                                                 quantity = quantity * 2
                                             } else if(val.frequency.includes("qds")){
                                                 quantity = quantity * 4
                                             }
                                             let price = parseFloat(data.records[0].sellingprice)
                                             let totalprice = price * quantity
                                             let stockcode = data.records[0].stockcode
                                             let dosageinstruction = data.records[0].dosageinstruction
                                             let administrationinstruction = data.records[0].administrationinstruction
                                             let strength = data.records[0].strength
                                             let interaction = data.records[0].interaction
                                             let itemform = data.records[0].itemformabbreviation
                                             let infusiongivingset = data.records[0].infusiongivingset + " " + data.records[0].infusionconstant
                                             let infusionrate = data.records[0].infusionrate
                                             let department = data.records[0].department
                                             let departmentitemgroup = data.records[0].departmentitemgroup
                                             let gasinfusionconstant = data.records[0].gasinfusionconstant + " " + data.records[0].gasinfusionrate
                                             let unittype = $("#selectunittype-lab").val()
                                             let prescriptionitem = {
                                                 "item":itemname,
                                                 "itemid":itemid,
                                                 "prescription":prescriptiontext,
                                                 "route":data.records[0].usageroute,
                                                 "unitpricepiece":data.records[0].sellingprice,
                                                 "unitpriceweight":data.records[0].sellingpriceperstrength,
                                                 "unitpricevolume":data.records[0].sellingpriceperliquidstrength,
                                                 "quantity":quantity,
                                                 "totalamount":totalprice,
                                                 "stockcode":stockcode,
                                                 "dosageinstruction":dosageinstruction,
                                                 "administrationinstruction":administrationinstruction,
                                                 "strength":strength,
                                                 "iteminfo":interaction,
                                                 "itemform":itemform,
                                                 "infusiongivingset":infusiongivingset,
                                                 "infusionrate":infusionrate,
                                                 "gasinfusionconstant":gasinfusionconstant,
                                                 "unittype":unittype
                                             }
                                             prescriptionorderlist.push(prescriptionitem)
                                            
                                             let sellingprice = 0
                                             if(unittype=="pieces"){
                                                 sellingprice = parseFloat(data.records[0].sellingprice)
                                             } else if(unittype=="weight"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperstrength)
                                             } else if(unittype=="volume"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperliquidstrength)
                                             }
                                             let revenueorderitem = {"genericname":itemname,
                                                                     "department":department,
                                                                     "departmentitemgroup":departmentitemgroup,
                                                                     "sellingprice":sellingprice,
                                                                     "reorderlevel":"reorderlevel",
                                                                     "unittype":unittype,
                                                                     "itemid":itemid,
                                                                     "quantity":quantity}
                                             revenueorderlist_lab.push(revenueorderitem)
                                             displayprescriptionorder(prescriptionorderlist)
                                         }
                                     } else if(view=="Weight"){
                                         //console.log(selectweight,lowerweight,upperweight)
                                         //console.log(selectweight>lowerweight)
                                         //console.log(selectweight<upperweight)
                                         if(selectweight>lowerweight && selectweight<upperweight){
                                             let prescriptiontext = val.enterdosage + " " + val.dosage + "x" + val.frequency + "x" + val.enterduration + " " + val.duration
                                             let duration_value = 1
                                             if(frequency_value.includes("stat")){
                                                 duration_value = 1
                                             }else{
                                                 duration_value = parseFloat(val.enterduration)
                                                 totalquantity = 0
                                             }
 
                                             let quantity = parseFloat(val.enterdosage) * duration_value
                                             totalquantity = totalquantity + quantity
                                             quantity = totalquantity
 
                                             if(val.frequency.includes("tds")){
                                                 quantity = quantity * 3
                                             } else if(val.frequency.includes("bd")){
                                                 quantity = quantity * 2
                                             } else if(val.frequency.includes("qds")){
                                                 quantity = quantity * 4
                                             }
                                             let price = parseFloat(data.records[0].sellingprice)
                                             let totalprice = price * quantity
                                             let stockcode = data.records[0].stockcode
                                             let dosageinstruction = data.records[0].dosageinstruction
                                             let administrationinstruction = data.records[0].administrationinstruction
                                             let strength = data.records[0].strength
                                             let interaction = data.records[0].interaction
                                             let itemform = data.records[0].itemformabbreviation
                                             let infusiongivingset = data.records[0].infusiongivingset + " " + data.records[0].infusionconstant
                                             let infusionrate = data.records[0].infusionrate
                                             let department = data.records[0].department
                                             let departmentitemgroup = data.records[0].departmentitemgroup
                                             let gasinfusionconstant = data.records[0].gasinfusionconstant + " " + data.records[0].gasinfusionrate
                                             let unittype = $("#selectunittype-lab").val()
                                             //console.log(unittype)
                                             let prescriptionitem = {
                                                 "item":itemname,
                                                 "itemid":itemid,
                                                 "prescription":prescriptiontext,
                                                 "route":data.records[0].usageroute,
                                                 "unitpricepiece":data.records[0].sellingprice,
                                                 "unitpriceweight":data.records[0].sellingpriceperstrength,
                                                 "unitpricevolume":data.records[0].sellingpriceperliquidstrength,
                                                 "quantity":quantity,
                                                 "totalamount":totalprice,
                                                 "stockcode":stockcode,
                                                 "dosageinstruction":dosageinstruction,
                                                 "administrationinstruction":administrationinstruction,
                                                 "strength":strength,
                                                 "iteminfo":interaction,
                                                 "itemform":itemform,
                                                 "infusiongivingset":infusiongivingset,
                                                 "infusionrate":infusionrate,
                                                 "gasinfusionconstant":gasinfusionconstant,
                                                 "unittype":unittype
                                             }
                                             prescriptionorderlist.push(prescriptionitem)
                                             let sellingprice = 0
                                             if(unittype=="pieces"){
                                                 sellingprice = parseFloat(data.records[0].sellingprice)
                                             } else if(unittype=="weight"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperstrength)
                                             } else if(unittype=="volume"){
                                                 sellingprice = parseFloat(data.records[0].sellingpriceperliquidstrength)
                                             }
                                             let revenueorderitem = {"genericname":itemname,
                                                                     "department":department,
                                                                     "departmentitemgroup":departmentitemgroup,
                                                                     "sellingprice":sellingprice,
                                                                     "reorderlevel":"reorderlevel",
                                                                     "unittype":unittype,
                                                                     "itemid":itemid,
                                                                     "quantity":quantity}
                                             revenueorderlist_lab.push(revenueorderitem)
                                             displayprescriptionorder(prescriptionorderlist)
                                         }
                                     }
                                     
                                     
                                 }
                             });
                         }
                     })
                 }
 
                 let totalrevenueorderprice = 0
                 let totalrevenueorderitems = 0
                 function displayprescriptionorder(prescriptionorderlist){
                     //console.log(prescriptionorderlist)
                     if(prescriptionorderlist.length>0){
                         let count = 0
                         let totalprice = 0
                         let totalitems = 0
                         let viewprescriptionlist = ``
                         prescriptionorderlist.forEach(element => {
                             let item = element.item
                             let itemid = element.itemid
                             let route = element.route
                             let unitpricepiece = element.unitpricepiece
                             let unitpriceweight = element.unitpriceweight
                             let prescription = element.prescription
                             let unitpricevolume = element.unitpricevolume
                             let totalamount = element.totalamount
                             let stockcode = element.stockcode
                             let dosageinstruction = element.dosageinstruction
                             let administrationinstruction = element.administrationinstruction
                             let strength = element.strength
                             let iteminfo = element.iteminfo
                             let quantity = element.quantity
                             let itemform = element.itemform
                             let infusiongivingset = element.infusiongivingset
                             let infusionrate = element.infusionrate
                             let gasinfusionconstant = element.gasinfusionconstant
                             let unittype = element.unittype
 
                             let price = 0
                             if(unittype=="pieces"){
                                 price = unitpricepiece
                             } else if(unittype=="weight"){
                                 price = unitpriceweight
                             } else if(unittype=="volume"){
                                 price = unitpricevolume
                             }
                             //console.log(unittype,unitpricepiece, unitpriceweight, unitpricevolume, price)
                             
                             let total = parseFloat(price) * parseFloat(quantity)
                             totalitems++
                             totalprice += total
                             totalrevenueorderprice = totalprice
                             totalrevenueorderitems = totalitems
                             
                                 viewprescriptionlist += `<tr>
                                                     <td>
                                                         
                                                         <input type="checkbox" style="height: 25px;width:25px;" class="itemselect" data-id="` + count + `">
                                                     </td> 
                                                     <td>` + itemform + " " + item + `</td>
                                                     <td>` + prescription + `</td>
                                                     <td>`+ route + `</td>
                                                     <td>&#8358;`+ Number(price).toFixed(2) + `</td>
                                                     <td>`+ quantity + `</td>
                                                     <td>&#8358;` + Number(total).toFixed(2) + `</td>
                                                     <td>` + stockcode + `</td>
                                                     <td>` + dosageinstruction + `</td>
                                                     <td>`+ administrationinstruction + `</td>
                                                     <td>` + strength + `</td>
                                                     <td>` + iteminfo + `</td>
                                                     <td>`+ infusiongivingset + `</td>
                                                     <td>` + infusionrate + `</td>
                                                     <td>`+ gasinfusionconstant + `</td>
                                                     <td><input type="number" min="1" max="1000" class="multiplyitem" data-id="` + count + `"></td>
                                                     <td><span class="additem" data-id="` + count + `" style="font-size: 16px;"><i class="fa fa-plus-square"></i>
                                                         <span class="subtractitem" data-id="` + count + `" style="font-size: 16px;"><i class="fa fa-minus-square"></i>
                                                             <span class="deleteitem" data-id="` + count + `" style="font-size: 16px;"><i class="fa fa-trash-o"></i></span></td>
                                                 </tr>
                                     `
                                     count++
                                 });
                                 displayselectedlistitems = viewprescriptionlist
                                 viewprescriptionlist += `<tr>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td></td>
                                                     <td>
                                                             </td>
                                                 </tr>`
                                 $("#view-revenue-order-list-lab").html(viewprescriptionlist)
                                 $("#selectdptitemgrpitem").on("change", function(evt){
                                     evt.preventDefault()
                                     let selecteditem = $("#selectdptitemgrpitem").val()
                                     selectitemanddisplay(selecteditem)
 
                                 })
                                 $(".additemtolist").on("click", function(evt){
                                         evt.preventDefault()
                                         let selecteditem = $("#selectdptitemgrpitem").val()
                                         selectitemanddisplay(selecteditem)
                                 })
                                 $("#view-revenue-order-count-lab").html(totalitems + " Item(s)")
                                 $("#view-revenue-order-price").html("Total: &#8358;" + totalprice.toFixed(2))
                                 $(".deleteitem").on("click", function(evt){
                                         evt.preventDefault()
                                         let id = $(this).attr("data-id")
                                     
                                         prescriptionorderlist.splice(id, 1)
                                         //console.log(id)
                                         
                                         displayprescriptionorder(prescriptionorderlist)
 
                                     })
                                     $(".itemselect").change(function(){
                                         if($(this).is(":checked")){
                                             
                                             let id = $(this).attr("data-id")
                                             let prescription = prescriptionorderlist[id].prescription
                                             splitprescription = prescription.split("x")
                                             let dosage = splitprescription[0]
                                             let frequency  = splitprescription[1]
                                             let duration = splitprescription[2]
                                             let splitdosage = dosage.split(" ")
                                             $("#enterdosage").val(splitdosage[0])
                                             let splitdosageunit = splitdosage[1].split(",")
                                             let dosageoption = `<option value="` + splitdosageunit[1] + `">` + splitdosageunit[0] + `</option>`
                                             $("#dosage").html(dosageoption + dosagelist)
 
                                             let splitfrequencyunit = frequency.split(",")
                                             let frequencyoption = `<option value="` + splitfrequencyunit[0] + `">` + splitfrequencyunit[1] + `</option>`
                                             $("#frequency").html(frequencyoption + frequencylist)
                                             
                                             let splitduration = duration.split(" ")
                                             $("#enterduration").val(splitduration[0])
                                             let splitdurationunit = splitduration[1].split(",")
                                             let durationoption = `<option value="` + splitdurationunit[1] + `">` + splitdurationunit[0] + `</option>`
                                             $("#duration").html(durationoption + durationlist)
 
 
                                         } 
                                     })
                                 
                                 $(".multiplyitem").on('change paste', function () {
                                    let qty = $(this).val()
 
                                     let id = $(this).attr("data-id")
                                 
                                     prescriptionorderlist[id].quantity = qty
                                 //console.log(prescriptionorderlist)
                                     // $("#view-revenue-order-price").html("&#8358;" + totalprice.toFixed(2))
 
                                     displayprescriptionorder(prescriptionorderlist)
 
                                 })
 
                                 $(".additem").on("click", function(evt){
                                     evt.preventDefault()
                                     let id = $(this).attr("data-id")
                                 
                                     prescriptionorderlist[id].quantity = prescriptionorderlist[id].quantity + 1
                                    //console.log(prescriptionorderlist)
                                     // $("#view-revenue-order-price").html("&#8358;" + totalprice.toFixed(2))
 
                                     displayprescriptionorder(prescriptionorderlist)
 
                                 })
 
                                 $(".subtractitem").on("click", function(evt){
                                         evt.preventDefault()
                                         let id = $(this).attr("data-id")
                                     
                                         prescriptionorderlist[id].quantity = prescriptionorderlist[id].quantity -1
                                         if(prescriptionorderlist[id].quantity==0){
                                             prescriptionorderlist.splice(id, 1)
                                         }
                                         
                                         
                                         displayprescriptionorder(prescriptionorderlist)
 
                                     })
                                
                     } else {
                         displayselectedlistitems = ``
                         $("#view-revenue-order-list-lab").html("")
                         $("#view-revenue-order-count-lab").html("")
                         $("#view-revenue-order-price").html("")
                     }
                 }
 
                
             
                    
                 $("#cancel-prescription-order-button-lab").on("click",function(evt){
                     evt.preventDefault()
 
                     $("#add-prescription-order-button-lab").show()
                     $("#update-prescription-order-button-lab").hide()
                     // $("#cancel-prescription-order-button-lab").hide()
                     prescriptionorderlist = []
                     displayprescriptionorder(prescriptionorderlist)
 
 
                 })
                 $("#addnote-prescription-order-button-lab").on("click",function(evt){
                    


                    $("#investigationrequest_laboratory").html($("#lab-order-table-item").html())
                 })
                 $("#addnote-investigation-result-button-lab").on("click",function(evt){
                    


                    $("#investigationresult_laboratory").html($("#investigationresultdetails").html())
                 })
                 $("#add-prescription-order-button-lab").on("click",function(evt){
                     evt.preventDefault()
 
                     let patientname = ""
                     let patientid = 0
                     let cardnumber = ""
                     let personid = 0
                     let hospitalnumber = ""
                     //console.log($("#selectpatient").val())
                     let selectpatient = $("#selectpatient").val()
                     //console.log(selectpatient, typeof(selectpatient))
                     hospitalnumber = $("#form-patientinfo-hospitalno").text()
                        
                      patientname = $("#patientname").val()
                      patientid = parseFloat($("#patientid").val())
                     personid =  $("#personid").val()
 
                     let insertRevenueOrder = "insertRevenueOrder"
                     let list = JSON.stringify(revenueorderlist_lab)
                     let price = parseFloat(totalrevenueorderprice).toFixed(2)
                     let items = totalrevenueorderitems
                     let department = "LABORATORY DEPARTMENT"
                     let patienttype = "PATIENT"
                     console.log(patientid,personid,hospitalnumber,patientname)
                     $.post("controllers/finance-record.php", {patienttype:patienttype,department:department,patientname:patientname,patientid:patientid,personid:personid,cardnumber:cardnumber,hospitalnumber:hospitalnumber,price:price,items:totalrevenueorderitems,list:list,insertRevenueOrder:insertRevenueOrder}, function(data){
                         //console.log(data)
                         let splitrevenue = data.split(",")
                         $("#revenue-order-status-lab").html(`<a href="#" data-id="` + splitrevenue[0] + `" class="btn btn-outline-primary take-btn revenue-order-corpse">` + splitrevenue[1] + `</a>`)
                         let revenueordernumber = splitrevenue[1]
                         
                         
                         let insertLaboratoryOrder = "insertLaboratoryOrder"
                         let prescriptionlist = JSON.stringify(prescriptionorderlist)
                         // let prescriptionprice = parseFloat(totalrevenueorderprice).toFixed(2)
                         
                         // let department = $("#selectdepartment").val()
                         // let splitdepartment = department.split(",")
                         // let itemdepartment = splitdepartment[1]
                         $.post("controllers/finance-record.php", {revenueordernumber:revenueordernumber,patientname:patientname,patientid:patientid,personid:personid,cardnumber:cardnumber,hospitalnumber:hospitalnumber,price:price,items:totalrevenueorderitems,list:prescriptionlist,insertLaboratoryOrder:insertLaboratoryOrder}, function(data){
                            console.log(data)
                            $("#revenue-order-status").html(data)
                            revenueorderlist = []
                            // displayrevenueorder(revenueorderlist)
                            getRevenueOrders()
                        }) 
                         $(".revenue-order-corpse").on("click", function(evt){
                            evt.preventDefault()
                            let id = $(this).attr("data-id")
                            
                                    // let cardnumber = val.cardnumber
                                    let getPatientCardPaymentById = "getPatientCardPaymentById"
                                    $.post("controllers/finance-record.php", {id:id, getPatientCardPaymentById: getPatientCardPaymentById}, function(data){
                                        console.log(data)
                                        window.open("patient-invoice.html")
                                        
                                    })
                                
                            

                            
                                

                        })
                        //  $.post("controllers/finance-record.php", {revenueordernumber:revenueordernumber,patientname:patientname,patientid:patientid,personid:personid,cardnumber:cardnumber,hospitalnumber:hospitalnumber,price:price,items:totalrevenueorderitems,list:prescriptionlist,insertLaboratoryOrder:insertLaboratoryOrder}, function(data){
                        //      console.log(data)
                        //      //$("#revenue-order-status-lab").html(data)
                        //      revenueorderlist_lab = []
                        //      // displayrevenueorder_lab(revenueorderlist_lab)
                        //      let searchItem = $("#searchrevenueorder").val()
                        //      getRevenueOrders(searchItem)
                        //  }) 
                     }) 
 
                 })
 
                 $("#update-prescription-order-button-lab").on("click",function(evt){
                     evt.preventDefault()
 
                     let patientname = ""
                     let patientid = 0
                     let cardnumber = ""
                     let personid = 0
                     let hospitalnumber = ""
                     //console.log($("#selectpatient").val())
                     let selectpatient = $("#selectpatient").val()
                     //console.log(selectpatient, typeof(selectpatient))
                     hospitalnumber = $("#selectpatientnumber").val()
                        
                        patientname = $("#patientname").val()
                        patientid = parseFloat($("#patientid").val())
                       personid =  $("#personid").val()
                     let id = $("#prescriptionorderid-lab").val()
                     let price = parseFloat(totalrevenueorderprice).toFixed(2)
                     let items = totalrevenueorderitems
                     let department = "PHARMACY DEPARTMENT"
                     
                     let updatePrescription = "updatePrescription"
                     let prescriptionlist = JSON.stringify(prescriptionorderlist)
                     let revenuelist = JSON.stringify(revenueorderlist_lab)
                     // let prescriptionprice = parseFloat(totalrevenueorderprice).toFixed(2)
                     let prescriptionnumber = $("#viewrevenueordernumber-lab").val()
                     let revenueordernumber = $("#revenue-order-number-lab").val()
                     // let department = $("#selectdepartment").val()
                     // let splitdepartment = department.split(",")
                     // let itemdepartment = splitdepartment[1]
                     // //console.log(patientname,revenueordernumber)
                     $.post("controllers/finance-record.php", {id:id,revenuelist:revenuelist,revenueordernumber:revenueordernumber,prescriptionnumber:prescriptionnumber,patientname:patientname,patientid:patientid,personid:personid,hospitalnumber:hospitalnumber,price:price,items:totalrevenueorderitems,list:prescriptionlist,updatePrescription:updatePrescription}, function(data){
                         //console.log(data)
                         $("#revenue-order-status-lab").html(data)
                         $("#add-prescription-order-button-lab").show()
                         $("#update-prescription-order-button-lab").hide()
                         // $("#cancel-prescription-order-button-lab").hide()
                         prescriptionorderlist = []
                         displayprescriptionorder(prescriptionorderlist)
                         let searchItem = $("#searchrevenueorder").val()
                         getRevenueOrders(searchItem)
                     }) 
                 
 
                 })
 
 
                 $("#clear-patient-prescription").on("click", function(evt){
                     evt.preventDefault()
 
 
                     $("#selectpatient").html("")
                     $("#form-edit-patient").html("")
                     $("#form-view-patientstatus").html("")
                     $("#form-view-patient").html("")
                     
                     $("#selectpatientnumber").val("")
                     $("#patientid").val("0")
                     $("#patientname").val("")
                  
                     $("#personid").val("0")
                     $("#patientweight").val("")
                     $("#patientgender").val("")
                     $("#agegroup").val("")
                     recallprescriptionlist = []
                     $("#selectprescription").hide()
                 })
 
                 let recallprescriptionlist = []
                 $("#selectprescription").hide()
 
                 function recallPrescription(){
                     let patientnumber = $("#selectpatientnumber").val()
                     //console.log(patientnumber)
                     let getPrescriptionOrderByPatientNumber = "getPrescriptionOrderByPatientNumber"
                     $.post("controllers/finance-record.php", {patientnumber:patientnumber, getPrescriptionOrderByPatientNumber: getPrescriptionOrderByPatientNumber}, function(data){
                         //console.log(data)
                         formdata=JSON.parse(data)
                         recallprescriptionlist = formdata.records
                         let prescription = recallprescriptionlist[0].prescription
                         revenueorderlist_lab = JSON.parse(prescription)
                         $("#patientid").val(recallprescriptionlist[0].patientid)
                         $("#patientname").val(recallprescriptionlist[0].patientname)
                         $("#prescriptionorderid-lab").val(recallprescriptionlist[0].id)
                         $("#revenue-order-number-lab").val(recallprescriptionlist[0].revenueordernumber)
                         let prescriptionlist = recallprescriptionlist[0].prescription
                         displayprescriptionorder(revenueorderlist_lab)
                         prescriptionorderlist = revenueorderlist_lab
 
                         let revenueorder = recallprescriptionlist[0].revenueorder
                         revenueorderlist_lab = JSON.parse(revenueorder)
 
 
                         $("#viewrevenueordernumber-lab").html(recallprescriptionlist[0].prescriptionnumber)
                         
                         $("#add-prescription-order-button-lab").hide()
                         $("#update-prescription-order-button-lab").show()
                         // $("#cancel-prescription-order-button-lab").show()
 
                         let selectprescriptionlist = ``
                         let count = 0
                         recallprescriptionlist.forEach(val => {
                             selectprescriptionlist += `<option value="` + count + `">` + val.prescriptionnumber + ` (` + val.entereddate + `)</option>`
                             count++
                         });
                         $("#selectprescription").html(selectprescriptionlist)
                         $("#selectprescription").show()
         
                     })
                 }
 
                 $("#recall-prescription-button").on("click", function(evt){
                     evt.preventDefault()
 
                     let patientnumber = $("#selectpatientnumber").val()
                     //console.log(patientnumber)
                     let getPrescriptionOrderByPatientNumber = "getPrescriptionOrderByPatientNumber"
                     $.post("controllers/finance-record.php", {patientnumber:patientnumber, getPrescriptionOrderByPatientNumber: getPrescriptionOrderByPatientNumber}, function(data){
                         //console.log(data)
                         formdata=JSON.parse(data)
                         recallprescriptionlist = formdata.records
                         let prescription = recallprescriptionlist[0].prescription
                         revenueorderlist_lab = JSON.parse(prescription)
                         $("#patientid").val(recallprescriptionlist[0].patientid)
                         $("#patientname").val(recallprescriptionlist[0].patientname)
                         $("#prescriptionorderid-lab").val(recallprescriptionlist[0].id)
                         $("#revenue-order-number-lab").val(recallprescriptionlist[0].revenueordernumber)
                         let prescriptionlist = recallprescriptionlist[0].prescription
                         displayprescriptionorder(revenueorderlist_lab)
                         prescriptionorderlist = revenueorderlist_lab
 
                         let revenueorder = recallprescriptionlist[0].revenueorder
                         revenueorderlist_lab = JSON.parse(revenueorder)
 
 
                         $("#viewrevenueordernumber-lab").html(recallprescriptionlist[0].prescriptionnumber)
                         
                         $("#add-prescription-order-button-lab").hide()
                         $("#update-prescription-order-button-lab").show()
                         // $("#cancel-prescription-order-button-lab").show()
 
                         let selectprescriptionlist = ``
                         let count = 0
                         recallprescriptionlist.forEach(val => {
                             selectprescriptionlist += `<option value="` + count + `">` + val.prescriptionnumber + ` (` + val.entereddate + `)</option>`
                             count++
                         });
                         $("#selectprescription").html(selectprescriptionlist)
                         $("#selectprescription").show()
         
                     })
 
                 })
 
                 $("#selectprescription").on("change", function(evt){
                     evt.preventDefault()
                     let id = $(this).val()
                     let prescription = recallprescriptionlist[id].prescription
                         revenueorderlist_lab = JSON.parse(prescription)
                         $("#patientid").val(recallprescriptionlist[id].patientid)
                         $("#patientname").val(recallprescriptionlist[id].patientname)
                         $("#prescriptionorderid-lab").val(recallprescriptionlist[id].id)
                         $("#revenue-order-number-lab").val(recallprescriptionlist[id].revenueordernumber)
                         let prescriptionlist = recallprescriptionlist[id].prescription
                         displayprescriptionorder(revenueorderlist_lab)
                         prescriptionorderlist = revenueorderlist_lab
 
                         let revenueorder = recallprescriptionlist[id].revenueorder
                         revenueorderlist_lab = JSON.parse(revenueorder)
 
                         $("#viewrevenueordernumber-lab").html(recallprescriptionlist[id].prescriptionnumber)
                         
                         $("#add-prescription-order-button-lab").hide()
                         $("#update-prescription-order-button-lab").show()
                         // $("#cancel-prescription-order-button-lab").show()
 
                 })
 
                 $("#clear-package-button").on("click", function(evt){
                     evt.preventDefault()
 
                     prescriptionlist = []
                     displayprescriptionorder(prescriptionlist)
                 })
 
                 $("#save-package-button").on("click", function(evt){
                     evt.preventDefault()
                     $(".itemselect").each(function(index, obj){
                         if($(this).prop('checked')==true){
                             
                             let id = $(this).attr("data-id")
                             let prescription = prescriptionorderlist[id].prescription
                             let unittype = prescriptionorderlist[id].unittype
                             let sellingprice = 0
                             if(unittype=="pieces"){
                                 sellingprice = parseFloat(prescriptionorderlist[id].unitpricepiece)
                             } else if(unittype=="volume"){
                                 sellingprice = parseFloat(prescriptionorderlist[id].unitpricevolume)
                             } else if(unittype=="weight"){
                                 sellingprice = parseFloat(prescriptionorderlist[id].unitpriceweight)
                             }
                             let frequency = $("#frequency").val()
                             let enterdosage = $("#enterdosage").val()
                             let enterduration = $("#enterduration").val()
                             let prescriptiontext = $("#enterdosage").val() + " " + $("#dosage").val() + "x" + frequency + "x" + $("#enterduration").val() + " " + $("#duration").val()
                             let quantity = parseFloat(enterdosage) * parseFloat(enterduration)
                             if(frequency.includes("tds")){
                                 quantity = quantity * 3
                             } else if(frequency.includes("bd")){
                                 quantity = quantity * 2
                             } else if(frequency.includes("qds")){
                                 quantity = quantity * 4
                             }
                             let price = parseFloat(sellingprice)
                             let totalprice = price * quantity
                             prescriptionorderlist[id].prescription = prescriptiontext
                             prescriptionorderlist[id].quantity = quantity
                             prescriptionorderlist[id].totalamount = totalprice
                             displayprescriptionorder(prescriptionorderlist)
 
                             revenueorderlist_lab[id].quantity = quantity
 
                            
                         }
                        
                     })
                 })
                //  let searchItems = $("#searchrevenueorder").val()
                //  getRevenueOrders(searchItems)
                 $("#searchrevenueorder").on('change keyup paste', function () {
                     ApplyFilterGetItem();
                 });
 
                 function ApplyFilterGetItem() {
                     var searchitemservice = $("#searchrevenueorder").val();
                     //console.log("getRevenueOrders")
                     getRevenueOrders(searchitemservice)
                 }
                 function getRevenueOrders(search){
                     $("#add-prescription-order-button-lab").show()
                     $("#discard-prescription-order-button-lab").hide()
                     $("#update-prescription-order-button-lab").hide()
                     $("#viewrevenueordernumber-lab").html("New Prescription Order")
                     let searchItem = search
                     getPrescriptionOrder = "getPrescriptionOrder"
                     $.post("controllers/finance-record.php",{searchItem:searchItem,getPrescriptionOrder: getPrescriptionOrder},function(formdata){
                         //console.log("prescription: ",searchItem,formdata)
                         if(formdata=="No Record Found"){
                             $("#view-lab-order-count").html(formdata)
                         }else{
                             console.log(formdata)
                             //console.log(typeof(formdata))
                             let data=JSON.parse(formdata)
                             //console.log(data)
                             let count = 0
                                 
                             let totalrecord = ``
                             $.each(data.records, function(key, val) {
                                 count++
                                 
                             totalrecord += `
                                 <tr>
                                    
                                     <td>
                                         
                                         <a href="#" data-id="` + val.id + `" class="btn btn-outline-default take-btn itemordername"><h3 style="color:blue;">` + val.prescriptionnumber + `</h3></a>
                                     </td>                 
                                     <td>
                                             <p style="font-size:18px;font-weight:bold;">` + val.patientname + ` [` + val.hospitalnumber + `]</p>
                                     </td> 
                                     
                                     <td>
                                             <p style="font-size:18px;font-weight:bold;">` + val.entereddate + `</p>
                                     </td> 
                                     <td>
                                             <p style="font-size:18px;font-weight:bold;">&#8358;` + (parseFloat(val.totalamount)).toFixed(2) + `</p>
                                     </td> 
                                     
                                     <td>
                                             <p style="font-size:18px;font-weight:bold;">` + val.enteredby + ` (Updated ` + val.updateddate + `)</p>
                                     </td> 
                                     
                                     <td>
                                         <a href="#" data-id="` + val.id + `" class="btn btn-outline-danger take-btn delete-revenue-order">Delete</a>
                                     </td> 
                                 </tr>
                             `
                             })
                             $("#view-lab-order-count").html(count + " Record(s) Found")
                             $("#view-all-revenue-order-list").html(totalrecord)
                             totalpaiditems = 0
                             totalpaid = 0
                         }
                         
 
                             $(".itemordername").on("click", function(evt){
                                 evt.preventDefault()
                                 let id = $(this).attr("data-id")
                                 let getPrescriptionOrderById = "getPrescriptionOrderById"
                                 $.post("controllers/finance-record.php", {id:id, getPrescriptionOrderById: getPrescriptionOrderById}, function(data){
                                     //console.log(data)
                                     formdata=JSON.parse(data)
                                     let prescription = formdata.prescription
                                     revenueorderlist_lab = JSON.parse(prescription)
                                     $("#patientid").val(formdata.patientid)
                                     $("#patientname").val(formdata.patientname)
                                     $("#prescriptionorderid-lab").val(formdata.id)
                                     $("#revenue-order-number-lab").val(formdata.revenueordernumber)
                                     let prescriptionlist = formdata.prescription
                                     displayprescriptionorder(revenueorderlist_lab)
                                     prescriptionorderlist = revenueorderlist_lab
 
                                     let revenueorder = formdata.revenueorder
                                     revenueorderlist_lab = JSON.parse(revenueorder)
 
                                     $("#viewrevenueordernumber-lab").html(formdata.prescriptionnumber)
                                     
                                     $("#add-prescription-order-button-lab").hide()
                                     $("#update-prescription-order-button-lab").show()
                                     // $("#cancel-prescription-order-button-lab").show()
                    
                                 })
                                 
                             })
 
                         $(".delete-revenue-order").on("click", function(evt){
                             evt.preventDefault()
                                 let id = $(this).attr("data-id")
                                 let DeletePrescriptionOrderById = "DeletePrescriptionOrderById"
                                 $.post("controllers/finance-record.php", {id:id, DeletePrescriptionOrderById: DeletePrescriptionOrderById}, function(data){
                                     //console.log(data)
                                     $("#revenue-order-status-lab").html(data)
                                     let searchItem = $("#searchrevenueorder").val()
                                     getRevenueOrders(searchItem)
                                 })
                                 
                         })
                     })
                     
                 }
 
        })