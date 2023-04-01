$(document).ready(function(){

    $("#add-staff").on("click", function(evt){
        evt.preventDefault()
        
        let form_data = $(this).serializeArray()
        academic_qualifications = JSON.stringify(academic_qualifications)
        employment_records = JSON.stringify(employment_records)
        let firstname = $("#firstname").val()
        let lastname = $("#lastname").val()
        let address = $("#address").val()
        let nk1firstname = $("#nk1firstname").val()
        let nk1lastname = $("#nk1lastname").val()
        let nk1sex = $("#nk1sex").val()
        let nk1address = $("#nk1address").val()
        let nextofkinrelationship = $("#nextofkinrelationship").val()
        let nk1nationality = $("#nk1nationality").val()
        let nk1stateoforigin = $("#nk1stateoforigin").val()
        let nk1lgaoforigin = $("#nk1lgaoforigin").val()
        let nk1town = $("#nk1town").val()
        let nk1age = zeroifnull($("#nk1age").val())

        let nk1phonenumber = $("#nk1phonenumber").val()
        let nk1phonenumberwhatsap = $("#nk1phonenumberwhatsap").val()
        let nk1email = $("#nk1email").val()
        let nk2firstname = $("#nk2firstname").val()
        let nk2lastname = $("#nk2lastname").val()
        let nk2sex = $("#nk2sex").val()
        let nk2address = $("#nk2address").val()
        let nextofkinrelationship2 = $("#nextofkinrelationship2").val()
        let nk2nationality = $("#nk2nationality").val()
        let nk2stateoforigin = $("#nk2stateoforigin").val()
        let nk2lgaoforigin = $("#nk2lgaoforigin").val()
        let nk2town = $("#nk2town").val()
        let nk2age = $("#nk2age").val()
        let nk2phonenumber = $("#nk2phonenumber").val()
        let nk2phonenumberwhatsap = $("#nk2phonenumberwhatsap").val()
        let nk2email = $("#nk2email").val()
        let nationality = $("#nationality").val()
        let stateoforigin = $("#stateoforigin").val()
        let lgaoforigin = $("#lgaoforigin").val()
        let dateofbirth = $("#dateofbirth").val()
        let age = $("#age").val()
        let sex = $("#sex").val()
        let splitage = age.split(" ")
        let agevalue = splitage[1]
        age = parseFloat(splitage[0])
        let phonenumber = $("#phonenumber").val()
        let phonenumberwhatsap = $("#phonenumberwhatsap").val()
        let email = $("#email").val()
        let profession = $("#profession").val()
        // let persontype = $("#persontype").val()
        // let accountype = $("#accountype").val()
        // let department = $("#department").val()
        let addstaff = "addstaff"
        let maritalstatus = $("#maritalstatus").val()
        console.log("test")
        $.post("controllers/add-staff.php", 
                {
                    firstname:firstname,
                    lastname:lastname,
                    address:address,
                    nationality:nationality,
                    stateoforigin:stateoforigin,
                    lgaoforigin:lgaoforigin,
                    dateofbirth:dateofbirth,
                    age:age,
                    sex:sex,
                    agevalue:agevalue,
                    phonenumber:phonenumber,
                    phonenumberwhatsap:phonenumberwhatsap,
                    email:email,
                    profession:profession,
                    addstaff:addstaff,
                    academic_qualifications:academic_qualifications,
                    employment_records:employment_records,
                    maritalstatus:maritalstatus,
                    nk2email:nk2email,
                    nk2phonenumberwhatsap:nk2phonenumberwhatsap,
                    nk2phonenumber:nk2phonenumber,
                    nk2age:nk2age,
                    nk2town:nk2town,
                    nk2lgaoforigin:nk2lgaoforigin,
                    nk2stateoforigin:nk2stateoforigin,
                    nk2nationality:nk2nationality,
                    nextofkinrelationship2:nextofkinrelationship2,
                    nk2address:nk2address,
                    nk2sex:nk2sex,
                    nk2lastname:nk2lastname,
                    nk2firstname:nk2firstname,
                    nk1email:nk1email,
                    nk1phonenumberwhatsap:nk1phonenumberwhatsap,
                    nk1phonenumber:nk1phonenumber,
                    nk1age:nk1age,
                    nk1town:nk1town,
                    nk1lgaoforigin:nk1lgaoforigin,
                    nk1stateoforigin:nk1stateoforigin,
                    nk1nationality:nk1nationality,
                    nextofkinrelationship:nextofkinrelationship,
                    nk1address:nk1address,
                    nk1sex:nk1sex,
                    nk1lastname:nk1lastname,
                    nk1firstname:nk1firstname
                }, function(data){
                    console.log("test")
                    console.log(data)
                    $("#errorlogin").html(data)
                    $(".frmaddperson")[0].reset()
            
            
                   
        })
    })

    
     let getaccounttype = "getaccounttype"
    let getpersontype = "getpersontype"
    let getdepartment = "getdepartment"
    $.post("controllers/add-staff.php", {getpersontype:getpersontype}, function(data){
        console.log(data)
        data = JSON.parse(data)
        let persontypes = ``
        data.records.forEach(element => {
            persontypes += `<option value="` + element.persontype + `">`+ element.persontype + `</option>`
        });
        $("#persontype").html(persontypes)
    })

    $.post("controllers/add-staff.php", {getaccounttype:getaccounttype}, function(data){
        data = JSON.parse(data)
        let countries = ``
        data.records.forEach(element => {

            countries += `<option value="` + element.systemaccounttype + `">`+ element.systemaccounttype + `</option>`

        });
        
        $("#accountype").html(countries)
       
    })

    $.post("controllers/add-staff.php", {getdepartment:getdepartment}, function(data){
        data = JSON.parse(data)
        let countries = ``
        data.records.forEach(element => {

            countries += `<option value="` + element.department + `">`+ element.department + `</option>`

        });
        
        $("#department").html(countries)
       
    })

    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item">
                                        <a class="nav-link" href="add-staff.html">Recruitment</a>
                                    </li>
                                    <!--<li class="nav-item">
                                        <a class="nav-link" href="assign-role.html">Password Management & Staff Accounts</a>
                                    </li>-->
                                    <li class="nav-item">
                                        <a class="nav-link" href="duty-roster.html">Duty Roster</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="termination.html">Termination</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="dashboard.html">
                                            <span class="navbar-toggler-icon"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </nav>
                    </div>
                </div>
    `

    $(".sub_menu").html(submenu)


    
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
            $("#nk1town").html(itemgenericnameoptions)
            $("#nk2town").html(itemgenericnameoptions)
        } else {
            $("#addresstown").html("<option value=''>No Record</option>")
            $("#nk1town").html("<option value=''>No Record</option>")
            $("#nk2town").html("<option value=''>No Record</option>")
        }
    })
}

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
            $("#nextofkinrelationship2").html(itemgenericnameoptions)
        } else {
            $("#nextofkinrelationship").html("<option value='No Record'>No Record</option>")
            $("#nextofkinrelationship2").html("<option value='No Record'>No Record</option>")
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
                $("#nextofkinrelationship2").html(relationshipoptions)
            }
            // $("#addsupplier").val("")
        })
    })
    }
})

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
                $("#nk1nationality").html(nigeria + itemgenericnameoptions)
                $("#nk2nationality").html(nigeria + itemgenericnameoptions)
                
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

                        $("#nk1stateoforigin").html(itemgenericnameoptions)
                        $("#nk2stateoforigin").html(itemgenericnameoptions)

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
                                $("#nk1lgaoforigin").html(itemgenericnameoptions)
                                $("#nk2lgaoforigin").html(itemgenericnameoptions)
                            } else {
                                $("#lgaoforigin").html("<option value='No Record'>No Record</option>")
                                $("#nk1lgaoforigin").html("<option value='No Record'>No Record</option>")
                                $("#nk2lgaoforigin").html("<option value='No Record'>No Record</option>")
                            }
                        })
                    } else {
                                $("#stateoforigin").html("<option value='No Record'>No Record</option>")
                                $("#nk1stateoforigin").html("<option value='No Record'>No Record</option>")
                                $("#nk2stateoforigin").html("<option value='No Record'>No Record</option>")
                            }
                })


            } else {
                $("#nationality").html("<option value='No Record'>No Record</option>")
                $("#nk1nationality").html("<option value='No Record'>No Record</option>")
                $("#nk2nationality").html("<option value='No Record'>No Record</option>")
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

    $("#nk1nationality").on("change", function(){
        let splitcountry = $("#nk1nationality").val().split(",")
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
                        $("#nk1stateoforigin").html(itemgenericnameoptions)

                        let splitstate = $("#nk1stateoforigin").val().split(",")
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
                                $("#nk1lgaoforigin").html(itemgenericnameoptions)
                            } else {
                                $("#nk1lgaoforigin").html("<option value='No Record'>No Record</option>")
                            }
                        })
                    } else {
                                $("#nk1stateoforigin").html("<option value='No Record'>No Record</option>")
                            }
                })

    })

    $("#nk2nationality").on("change", function(){
        let splitcountry = $("#nk2nationality").val().split(",")
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
                        $("#nk2stateoforigin").html(itemgenericnameoptions)

                        let splitstate = $("#nk2stateoforigin").val().split(",")
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
                                $("#nk2lgaoforigin").html(itemgenericnameoptions)
                            } else {
                                $("#nk2lgaoforigin").html("<option value='No Record'>No Record</option>")
                            }
                        })
                    } else {
                                $("#nk2stateoforigin").html("<option value='No Record'>No Record</option>")
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

    $("#nk1stateoforigin").on("change", function(){
        let splitstate = $("#nk1stateoforigin").val().split(",")
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
                                $("#nk1lgaoforigin").html(itemgenericnameoptions)
                            } else {
                                $("#nk1lgaoforigin").html("<option value='No Record'>No Record</option>")
                            }
                        })
    })

    $("#nk2stateoforigin").on("change", function(){
        let splitstate = $("#nk2stateoforigin").val().split(",")
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
                                $("#nk2lgaoforigin").html(itemgenericnameoptions)
                            } else {
                                $("#nk2lgaoforigin").html("<option value='No Record'>No Record</option>")
                            }
                        })
    })

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


    let academic_qualifications = []

			$("#add_academic_qualification").on("click", function(evt){
				evt.preventDefault()
				$("#academic_qualification_list").html("")
				let qualification = $("#select_qualification").val()
				// let institution = $("#institution").val()
				let date_qualification = $("#date_qualification").val()
				let academic_qualification = {
					"qualification":qualification,
					"date":date_qualification
				} 
				academic_qualifications.push(academic_qualification)
				let academic_qualification_list = `<ul>`
					academic_qualifications.forEach(element => {
						academic_qualification_list += `<li>Qualification: ` + element.qualification + `<br>Date: ` + element.date + `<br></li>`
				});
				academic_qualification_list += `</ul>`
				$("#academic_qualification_list").html(academic_qualification_list)
				// $("#select_qualification").val("")
				// $("#institution").val("")
				$("#date_qualification").val("")
			})

			let employment_records = []

			$("#add_employment_record").on("click", function(evt){
				evt.preventDefault()
				$("#employment_record_list").html("")
				let establishment = $("#establishment").val()
				let datefrom = $("#datefrom").val()
				let dateto = $("#dateto").val()
				let jobrole = $("#jobrole").val()
				let employment_record = {
					"establishment":establishment,
					"datefrom":datefrom,
					"dateto":dateto
				}
				employment_records.push(employment_record)
				let employment_record_list = `<ul>`
					employment_records.forEach(element => {
						employment_record_list += `<li>Establishment: ` + element.establishment + `<br>From: ` + element.datefrom + ` To ` + element.dateto + `<br></li>`
				});
				employment_record_list += `</ul>`
				$("#employment_record_list").html(employment_record_list)
				// $("#select_qualification").val("")
				$("#establishment").val("")
				$("#datefrom").val("")
				$("#dateto").val("")
				// $("#jobrole").val("")
			})


            function zeroifnull(value){
                if(value==null){
                    return 0
                } else if(value==""){
                    return 0
                } else {
                    return parseFloat(value)
                }
            }
          
            
            function oneifnull(value){
                if(value==null){
                    return 1
                } else if(value==""){
                    return 1
                } else {
                    return value
                }
            }


})