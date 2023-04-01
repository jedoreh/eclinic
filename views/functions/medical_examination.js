$(document).ready(function(){

    //General Exam
        $("#general_exam").html("<h2>General Exam</h2>")

        let searchitem = ""
        let examtype = ""
        
        
        getGeneralExam(searchitem)

        function getGeneralExam(searchitem){
                let getExam = "getExam"
                examtype = "General Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectgeneralexam").html(presentingcomplainlist)

                })
            }

        $("#entergeneralexam").on('change keyup paste', function () {
                ApplyFilterGeneralExam();
                
            })

            function ApplyFilterGeneralExam() {
                let searchitem = $("#entergeneralexam").val()
                getGeneralExam(searchitem)
                
                }

        let generalexamlist = []
            $("#add-generalexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#entergeneralexam").val()
                        console.log($("#selectgeneralexam").val())
                        // let periodvalue = ""
                    if($("#selectgeneralexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "General Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#entergeneralexam").val()
                            getGeneralExam(searchitem)
                        
                            generalexamlist.push(exam)
                            console.log(generalexamlist)
                            
                            displayGeneralExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectgeneralexam").val()
                    
                        generalexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayGeneralExam()
                        
                    }


                    console.log(generalexamlist)
                
            })

        $("#selectgeneralexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectgeneralexam").val()
                    
                    generalexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayGeneralExam()
            })

        function displayGeneralExam(){
                let generalexam = ``
                generalexamlist.forEach(val => {
                        console.log(val)
                    
                        generalexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#general_exam").html("<h2>General Exam</h2>" + generalexam)
            }

        $("#discard-general-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#general_exam").html("<h2>General Exam</h2>")
                    generalexamlist = []
                })
                $("#add-general-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#general_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_general").html("<h2>Medical Exam</h2><div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#general_exam").html("<h2>General Exam</h2>")
                    generalexamlist = []
                })



    //Alimentary Exam
        $("#alimentary_exam").html("<h2>Alimentary Exam</h2>")

        searchitem = ""
        examtype = ""
        
        
        getAlimentaryExam(searchitem)

        function getAlimentaryExam(searchitem){
                let getExam = "getExam"
                examtype = "Alimentary Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectalimentaryexam").html(presentingcomplainlist)

                })
            }

        $("#enteralimentaryexam").on('change keyup paste', function () {
                ApplyFilterAlimentaryExam();
                
            })

            function ApplyFilterAlimentaryExam() {
                let searchitem = $("#enteralimentaryexam").val()
                getAlimentaryExam(searchitem)
                
                }

        let alimentaryexamlist = []
            $("#add-alimentaryexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#enteralimentaryexam").val()
                        console.log($("#selectalimentaryexam").val())
                        // let periodvalue = ""
                    if($("#selectalimentaryexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Alimentary Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#enteralimentaryexam").val()
                            getAlimentaryExam(searchitem)
                        
                            alimentaryexamlist.push(exam)
                            console.log(alimentaryexamlist)
                            
                            displayAlimentaryExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectalimentaryexam").val()
                    
                        alimentaryexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayAlimentaryExam()
                        
                    }


                    console.log(alimentaryexamlist)
                
            })

        $("#selectalimentaryexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectalimentaryexam").val()
                    
                    alimentaryexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayAlimentaryExam()
            })

        function displayAlimentaryExam(){
                let alimentaryexam = ``
                alimentaryexamlist.forEach(val => {
                        console.log(val)
                    
                        alimentaryexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#alimentary_exam").html("<h2>Alimentary Exam</h2>" + alimentaryexam)
            }

        $("#discard-alimentary-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#alimentary_exam").html("<h2>Alimentary Exam</h2>")
                    alimentaryexamlist = []
                })
                $("#add-alimentary-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#alimentary_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_alimentary").html("<h2>Medical Exam</h2><div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#alimentary_exam").html("<h2>Alimentary Exam</h2>")
                    alimentaryexamlist = []
                })



        //Respiratory Exam
        $("#respiratory_exam").html("<h2>Respiratory Exam</h2>")

        // let searchitem = ""
        // let examtype = ""
        
        
        getRespiratoryExam(searchitem)

        function getRespiratoryExam(searchitem){
                let getExam = "getExam"
                examtype = "Respiratory Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectrespiratoryexam").html(presentingcomplainlist)

                })
            }

        $("#enterrespiratoryexam").on('change keyup paste', function () {
                ApplyFilterRespiratoryExam();
                
            })

            function ApplyFilterRespiratoryExam() {
                let searchitem = $("#enterrespiratoryexam").val()
                getRespiratoryExam(searchitem)
                
                }

        let respiratoryexamlist = []
            $("#add-respiratoryexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#enterrespiratoryexam").val()
                        console.log($("#selectrespiratoryexam").val())
                        // let periodvalue = ""
                    if($("#selectrespiratoryexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Respiratory Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#enterrespiratoryexam").val()
                            getRespiratoryExam(searchitem)
                        
                            respiratoryexamlist.push(exam)
                            console.log(respiratoryexamlist)
                            
                            displayRespiratoryExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectrespiratoryexam").val()
                    
                        respiratoryexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayRespiratoryExam()
                        
                    }


                    console.log(respiratoryexamlist)
                
            })

        $("#selectrespiratoryexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectrespiratoryexam").val()
                    
                    respiratoryexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayRespiratoryExam()
            })

        function displayRespiratoryExam(){
                let respiratoryexam = ``
                respiratoryexamlist.forEach(val => {
                        console.log(val)
                    
                        respiratoryexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#respiratory_exam").html("<h2>Respiratory Exam</h2>" + respiratoryexam)
            }

        $("#discard-respiratory-exam-button").on("click", function(evt){
                evt.preventDefault()
                $("#respiratory_exam").html("<h2>Respiratory Exam</h2>")
                respiratoryexamlist = []
            })
            $("#add-respiratory-exam-button").on("click", function(evt){
                evt.preventDefault()
                console.log("test")
                presenting_complain_html = $("#respiratory_exam").html()
                console.log(presenting_complain_html)
                // let other_exam = $("#patient_note_otherexam").html()
                $("#medicalexam_respiratory").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                $("#respiratory_exam").html("<h2>Respiratory Exam</h2>")
                respiratoryexamlist = []
            })


         //Cardiovascular Exam
        $("#cardiovascular_exam").html("<h2>Cardiovascular Exam</h2>")

        // let searchitem = ""
        // let examtype = ""
        
        
        getCardiovascularExam(searchitem)

        function getCardiovascularExam(searchitem){
                let getExam = "getExam"
                examtype = "Cardiovascular Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectcardiovascularexam").html(presentingcomplainlist)

                })
            }

        $("#entercardiovascularexam").on('change keyup paste', function () {
                ApplyFilterCardiovascularExam();
                
            })

            function ApplyFilterCardiovascularExam() {
                let searchitem = $("#entercardiovascularexam").val()
                getCardiovascularExam(searchitem)
                
                }

        let cardiovascularexamlist = []
            $("#add-cardiovascularexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#entercardiovascularexam").val()
                        console.log($("#selectcardiovascularexam").val())
                        // let periodvalue = ""
                    if($("#selectcardiovascularexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Cardiovascular Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#entercardiovascularexam").val()
                            getCardiovascularExam(searchitem)
                        
                            cardiovascularexamlist.push(exam)
                            console.log(cardiovascularexamlist)
                            
                            displayCardiovascularExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectcardiovascularexam").val()
                    
                        cardiovascularexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayCardiovascularExam()
                        
                    }


                    console.log(cardiovascularexamlist)
                
            })

        $("#selectcardiovascularexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectcardiovascularexam").val()
                    
                    cardiovascularexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayCardiovascularExam()
            })

        function displayCardiovascularExam(){
                let cardiovascularexam = ``
                cardiovascularexamlist.forEach(val => {
                        console.log(val)
                    
                        cardiovascularexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#cardiovascular_exam").html("<h2>Cardiovascular Exam</h2>" + cardiovascularexam)
            }

        $("#discard-cardiovascular-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#cardiovascular_exam").html("<h2>Cardiovascular Exam</h2>")
                    cardiovascularexamlist = []
                })
                $("#add-cardiovascular-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#cardiovascular_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_cardiovascular").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#cardiovascular_exam").html("<h2>Cardiovascular Exam</h2>")
                    cardiovascularexamlist = []
                })

         //Urogenital Exam
        $("#urogenital_exam").html("<h2>Urogenital Exam</h2>")

        // let searchitem = ""
        // let examtype = ""
        
        
        getUrogenitalExam(searchitem)

        function getUrogenitalExam(searchitem){
                let getExam = "getExam"
                examtype = "Urogenital Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selecturogenitalexam").html(presentingcomplainlist)

                })
            }

        $("#enterurogenitalexam").on('change keyup paste', function () {
                ApplyFilterUrogenitalExam();
                
            })

            function ApplyFilterUrogenitalExam() {
                let searchitem = $("#enterurogenitalexam").val()
                getUrogenitalExam(searchitem)
                
                }

        let urogenitalexamlist = []
            $("#add-urogenitalexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#enterurogenitalexam").val()
                        console.log($("#selecturogenitalexam").val())
                        // let periodvalue = ""
                    if($("#selecturogenitalexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Urogenital Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#enterurogenitalexam").val()
                            getUrogenitalExam(searchitem)
                        
                            urogenitalexamlist.push(exam)
                            console.log(urogenitalexamlist)
                            
                            displayUrogenitalExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selecturogenitalexam").val()
                    
                        urogenitalexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayUrogenitalExam()
                        
                    }


                    console.log(urogenitalexamlist)
                
            })

        $("#selecturogenitalexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selecturogenitalexam").val()
                    
                    urogenitalexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayUrogenitalExam()
            })

        function displayUrogenitalExam(){
                let urogenitalexam = ``
                urogenitalexamlist.forEach(val => {
                        console.log(val)
                    
                        urogenitalexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#urogenital_exam").html("<h2>Urogenital Exam</h2>" + urogenitalexam)
            }

        $("#discard-urogenital-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#urogenital_exam").html("<h2>Urogenital Exam</h2>")
                    urogenitalexamlist = []
                })
                $("#add-urogenital-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#urogenital_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_urogenital").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#urogenital_exam").html("<h2>Urogenital Exam</h2>")
                    urogenitalexamlist = []
                })


        //Nervous Exam
        $("#nervous_exam").html("<h2>Nervous Exam</h2>")

        // let searchitem = ""
        // let examtype = ""
        
        
        getNervousExam(searchitem)

        function getNervousExam(searchitem){
                let getExam = "getExam"
                examtype = "Nervous Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectnervousexam").html(presentingcomplainlist)

                })
            }

        $("#enternervousexam").on('change keyup paste', function () {
                ApplyFilterNervousExam();
                
            })

            function ApplyFilterNervousExam() {
                let searchitem = $("#enternervousexam").val()
                getNervousExam(searchitem)
                
                }

        let nervousexamlist = []
            $("#add-nervousexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#enternervousexam").val()
                        console.log($("#selectnervousexam").val())
                        // let periodvalue = ""
                    if($("#selectnervousexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Nervous Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#enternervousexam").val()
                            getNervousExam(searchitem)
                        
                            nervousexamlist.push(exam)
                            console.log(nervousexamlist)
                            
                            displayNervousExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectnervousexam").val()
                    
                        nervousexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayNervousExam()
                        
                    }


                    console.log(nervousexamlist)
                
            })

        $("#selectnervousexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectnervousexam").val()
                    
                    nervousexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayNervousExam()
            })

        function displayNervousExam(){
                let nervousexam = ``
                nervousexamlist.forEach(val => {
                        console.log(val)
                    
                        nervousexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#nervous_exam").html("<h2>Nervous Exam</h2>" + nervousexam)
            }

        $("#discard-nervous-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#nervous_exam").html("<h2>Nervous Exam</h2>")
                    nervousexamlist = []
                })
                $("#add-nervous-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#nervous_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_nervous").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#nervous_exam").html("<h2>Nervous Exam</h2>")
                    nervousexamlist = []
                })


        //Muscoloskeletal Exam
        $("#muscoloskeletal_exam").html("<h2>Muscoloskeletal Exam</h2>")

        // let searchitem = ""
        // let examtype = ""
        
        
        getMuscoloskeletalExam(searchitem)

        function getMuscoloskeletalExam(searchitem){
                let getExam = "getExam"
                examtype = "Muscoloskeletal Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectmuscoloskeletalexam").html(presentingcomplainlist)

                })
            }

        $("#entermuscoloskeletalexam").on('change keyup paste', function () {
                ApplyFilterMuscoloskeletalExam();
                
            })

            function ApplyFilterMuscoloskeletalExam() {
                let searchitem = $("#entermuscoloskeletalexam").val()
                getMuscoloskeletalExam(searchitem)
                
                }

        let muscoloskeletalexamlist = []
            $("#add-muscoloskeletalexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#entermuscoloskeletalexam").val()
                        console.log($("#selectmuscoloskeletalexam").val())
                        // let periodvalue = ""
                    if($("#selectmuscoloskeletalexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Muscoloskeletal Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#entermuscoloskeletalexam").val()
                            getMuscoloskeletalExam(searchitem)
                        
                            muscoloskeletalexamlist.push(exam)
                            console.log(muscoloskeletalexamlist)
                            
                            displayMuscoloskeletalExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectmuscoloskeletalexam").val()
                    
                        muscoloskeletalexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayMuscoloskeletalExam()
                        
                    }


                    console.log(muscoloskeletalexamlist)
                
            })

        $("#selectmuscoloskeletalexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectmuscoloskeletalexam").val()
                    
                    muscoloskeletalexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayMuscoloskeletalExam()
            })

        function displayMuscoloskeletalExam(){
                let muscoloskeletalexam = ``
                muscoloskeletalexamlist.forEach(val => {
                        console.log(val)
                    
                        muscoloskeletalexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#muscoloskeletal_exam").html("<h2>Muscoloskeletal Exam</h2>" + muscoloskeletalexam)
            }

        $("#discard-muscoloskeletal-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#muscoloskeletal_exam").html("<h2>Muscoloskeletal Exam</h2>")
                    muscoloskeletalexamlist = []
                })
                $("#add-muscoloskeletal-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#muscoloskeletal_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_muscoloskeletal").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#muscoloskeletal_exam").html("<h2>Muscoloskeletal Exam</h2>")
                    muscoloskeletalexamlist = []
                })

         //Endocrine Exam
        $("#endocrine_exam").html("<h2>Endocrine Exam</h2>")

        // let searchitem = ""
        // let examtype = ""
        
        
        getEndocrineExam(searchitem)

        function getEndocrineExam(searchitem){
                let getExam = "getExam"
                examtype = "Endocrine Exam"
                $.post("controllers/patient-note.php",{searchitem:searchitem, examtype:examtype, getExam:getExam},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.exam + `">` + val.exam + `</option>`
                    });
                    $("#selectendocrineexam").html(presentingcomplainlist)

                })
            }

        $("#enterendocrineexam").on('change keyup paste', function () {
                ApplyFilterEndocrineExam();
                
            })

            function ApplyFilterEndocrineExam() {
                let searchitem = $("#enterendocrineexam").val()
                getEndocrineExam(searchitem)
                
                }

        let endocrineexamlist = []
            $("#add-endocrineexam").on("click", function(evt){
                evt.preventDefault()
                
                        let exam = $("#enterendocrineexam").val()
                        console.log($("#selectendocrineexam").val())
                        // let periodvalue = ""
                    if($("#selectendocrineexam").val()=="No Exam Found"){
                        //Add presenting complain
                        let addExam = "addExam"
                        examtype = "Endocrine Exam"
                        $.post("controllers/patient-note.php",{examtype:examtype,exam:exam,addExam:addExam}, function(data){
                            console.log(data)
                            let searchitem = $("#enterendocrineexam").val()
                            getEndocrineExam(searchitem)
                        
                            endocrineexamlist.push(exam)
                            console.log(endocrineexamlist)
                            
                            displayEndocrineExam()
                            
                        })
                        
                    } else {
                        let exam = $("#selectendocrineexam").val()
                    
                        endocrineexamlist.push(exam)

                        let exampresentingcomplaintlist = ``
                        
                        displayEndocrineExam()
                        
                    }


                    console.log(endocrineexamlist)
                
            })

        $("#selectendocrineexam").on("change", function(evt){
                evt.preventDefault()
                let exam = $("#selectendocrineexam").val()
                    
                    endocrineexamlist.push(exam)

                    let exampresentingcomplaintlist = ``
                    
                    displayEndocrineExam()
            })

        function displayEndocrineExam(){
                let endocrineexam = ``
                endocrineexamlist.forEach(val => {
                        console.log(val)
                    
                        endocrineexam += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#endocrine_exam").html("<h2>Endocrine Exam</h2>" + endocrineexam)
            }

        $("#discard-endocrine-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#endocrine_exam").html("<h2>Endocrine Exam</h2>")
                    endocrineexamlist = []
                })
                $("#add-endocrine-exam-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#endocrine_exam").html()
                    console.log(presenting_complain_html)
                    // let other_exam = $("#patient_note_otherexam").html()
                    $("#medicalexam_endocrine").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#endocrine_exam").html("<h2>Endocrine Exam</h2>")
                    endocrineexamlist = []
                })

        
        //General Exam Routine
            let generalexamroutinelist = []
            function getGeneralExamRoutine(){
                let routinetype = "General Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        generalexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectgeneralexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectgeneralexamroutinelist").html("")
                })

            
            }
            getGeneralExamRoutine()

            $("#add-generalexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entergeneralexamroutine").val()
                let routinetype ="General Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getGeneralExamRoutine()
                })
            })

            $("#delete-generalexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectgeneralexamroutinelist").val()
                let routineitem = $("#selectgeneralexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectgeneralexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                generalexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getGeneralExamRoutine()
                })
                
            })


        
             $("#add-generalexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entergeneralexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectgeneralexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    generalexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateGeneralExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotegeneralexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entergeneralexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectgeneralexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    generalexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateGeneralExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateGeneralExamRoutine(){
                let routinetype = "General Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectgeneralexamroutine").val()
                        generalexamroutinelist = data
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
                                        $("#selectgeneralexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectgeneralexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addgeneralexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectgeneralexamroutine").val()
                generalexamroutinelist.records.forEach(val => {
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
                                    generalexamlist.push(element)
                                    console.log(generalexamlist)
                                    
                                   
                                });
                                 displayGeneralExam()
                            } else {
                               generalexamlist.push(complaints)
                                    console.log(generalexamlist)
                                    displayGeneralExam()
                            }
                        
                    }
                });
            })


            $("#selectgeneralexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectgeneralexamroutinelist").val()
                let history = $("#selectgeneralexamroutinelist").val()
                
                
                generalexamlist.push(complain)
                console.log(generalexamlist)
                displayGeneralExam()
            })

            $("#selectgeneralexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectgeneralexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                generalexamroutinelist.records.forEach(val => {
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
                                $("#selectgeneralexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectgeneralexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectgeneralexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removegeneralexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectgeneralexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectgeneralexamroutinelist").prop("selectedIndex")
                generalexamroutinelist.records.forEach(val => {
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
                        $("#selectgeneralexamroutinelist").html(presentingcomplaintroutinelist)
                        generalexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistgeneralexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                generalexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectgeneralexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectgeneralexamroutinelist").html("")
                
                        
            })

            $("#cleargeneralexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                generalexamlist = []
                                    console.log(generalexamlist)
                                    displayGeneralExam()
                        
            })


            //Alimentary Exam Routine
            let alimentaryexamroutinelist = []
            function getAlimentaryExamRoutine(){
                let routinetype = "Alimentary Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        alimentaryexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectalimentaryexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectalimentaryexamroutinelist").html("")
                })

            
            }
            getAlimentaryExamRoutine()

            $("#add-alimentaryexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enteralimentaryexamroutine").val()
                let routinetype ="Alimentary Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getAlimentaryExamRoutine()
                })
            })

            $("#delete-alimentaryexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectalimentaryexamroutinelist").val()
                let routineitem = $("#selectalimentaryexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectalimentaryexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                alimentaryexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getAlimentaryExamRoutine()
                })
                
            })


        
             $("#add-alimentaryexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enteralimentaryexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectalimentaryexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    alimentaryexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateAlimentaryExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotealimentaryexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enteralimentaryexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectalimentaryexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    alimentaryexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateAlimentaryExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateAlimentaryExamRoutine(){
                let routinetype = "Alimentary Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectalimentaryexamroutine").val()
                        alimentaryexamroutinelist = data
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
                                        $("#selectalimentaryexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectalimentaryexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addalimentaryexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectalimentaryexamroutine").val()
                alimentaryexamroutinelist.records.forEach(val => {
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
                                    alimentaryexamlist.push(element)
                                    console.log(alimentaryexamlist)
                                    
                                   
                                });
                                 displayAlimentaryExam()
                            } else {
                               alimentaryexamlist.push(complaints)
                                    console.log(alimentaryexamlist)
                                    displayAlimentaryExam()
                            }
                        
                    }
                });
            })


            $("#selectalimentaryexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectalimentaryexamroutinelist").val()
                let history = $("#selectalimentaryexamroutinelist").val()
                
                
                alimentaryexamlist.push(complain)
                console.log(alimentaryexamlist)
                displayAlimentaryExam()
            })

            $("#selectalimentaryexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectalimentaryexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                alimentaryexamroutinelist.records.forEach(val => {
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
                                $("#selectalimentaryexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectalimentaryexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectalimentaryexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removealimentaryexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectalimentaryexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectalimentaryexamroutinelist").prop("selectedIndex")
                alimentaryexamroutinelist.records.forEach(val => {
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
                        $("#selectalimentaryexamroutinelist").html(presentingcomplaintroutinelist)
                        alimentaryexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistalimentaryexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                alimentaryexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectalimentaryexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectalimentaryexamroutinelist").html("")
                
                        
            })

            $("#clearalimentaryexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                alimentaryexamlist = []
                                    console.log(alimentaryexamlist)
                                    displayAlimentaryExam()
                        
            })


            //Respiratory Exam Routine
            let respiratoryexamroutinelist = []
            function getRespiratoryExamRoutine(){
                let routinetype = "Respiratory Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        respiratoryexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectrespiratoryexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectrespiratoryexamroutinelist").html("")
                })

            
            }
            getRespiratoryExamRoutine()

            $("#add-respiratoryexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterrespiratoryexamroutine").val()
                let routinetype ="Respiratory Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getRespiratoryExamRoutine()
                })
            })

            $("#delete-respiratoryexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectrespiratoryexamroutinelist").val()
                let routineitem = $("#selectrespiratoryexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectrespiratoryexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                respiratoryexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getRespiratoryExamRoutine()
                })
                
            })


        
             $("#add-respiratoryexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterrespiratoryexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectrespiratoryexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    respiratoryexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateRespiratoryExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoterespiratoryexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterrespiratoryexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectrespiratoryexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    respiratoryexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateRespiratoryExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateRespiratoryExamRoutine(){
                let routinetype = "Respiratory Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectrespiratoryexamroutine").val()
                        respiratoryexamroutinelist = data
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
                                        $("#selectrespiratoryexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectrespiratoryexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addrespiratoryexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectrespiratoryexamroutine").val()
                respiratoryexamroutinelist.records.forEach(val => {
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
                                    respiratoryexamlist.push(element)
                                    console.log(respiratoryexamlist)
                                    
                                   
                                });
                                 displayRespiratoryExam()
                            } else {
                               respiratoryexamlist.push(complaints)
                                    console.log(respiratoryexamlist)
                                    displayRespiratoryExam()
                            }
                        
                    }
                });
            })


            $("#selectrespiratoryexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectrespiratoryexamroutinelist").val()
                let history = $("#selectrespiratoryexamroutinelist").val()
                
                
                respiratoryexamlist.push(complain)
                console.log(respiratoryexamlist)
                displayRespiratoryExam()
            })

            $("#selectrespiratoryexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectrespiratoryexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                respiratoryexamroutinelist.records.forEach(val => {
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
                                $("#selectrespiratoryexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectrespiratoryexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectrespiratoryexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removerespiratoryexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectrespiratoryexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectrespiratoryexamroutinelist").prop("selectedIndex")
                respiratoryexamroutinelist.records.forEach(val => {
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
                        $("#selectrespiratoryexamroutinelist").html(presentingcomplaintroutinelist)
                        respiratoryexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistrespiratoryexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                respiratoryexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectrespiratoryexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectrespiratoryexamroutinelist").html("")
                
                        
            })

            $("#clearrespiratoryexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                respiratoryexamlist = []
                                    console.log(respiratoryexamlist)
                                    displayRespiratoryExam()
                        
            })

            //Cardiovascular Exam Routine
            let cardiovascularexamroutinelist = []
            function getCardiovascularExamRoutine(){
                let routinetype = "Cardiovascular Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        cardiovascularexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectcardiovascularexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectcardiovascularexamroutinelist").html("")
                })

            
            }
            getCardiovascularExamRoutine()

            $("#add-cardiovascularexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entercardiovascularexamroutine").val()
                let routinetype ="Cardiovascular Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getCardiovascularExamRoutine()
                })
            })

            $("#delete-cardiovascularexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectcardiovascularexamroutinelist").val()
                let routineitem = $("#selectcardiovascularexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectcardiovascularexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                cardiovascularexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getCardiovascularExamRoutine()
                })
                
            })


        
             $("#add-cardiovascularexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entercardiovascularexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectcardiovascularexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    cardiovascularexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateCardiovascularExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotecardiovascularexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entercardiovascularexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectcardiovascularexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    cardiovascularexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateCardiovascularExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateCardiovascularExamRoutine(){
                let routinetype = "Cardiovascular Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectcardiovascularexamroutine").val()
                        cardiovascularexamroutinelist = data
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
                                        $("#selectcardiovascularexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectcardiovascularexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addcardiovascularexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectcardiovascularexamroutine").val()
                cardiovascularexamroutinelist.records.forEach(val => {
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
                                    cardiovascularexamlist.push(element)
                                    console.log(cardiovascularexamlist)
                                    
                                   
                                });
                                 displayCardiovascularExam()
                            } else {
                               cardiovascularexamlist.push(complaints)
                                    console.log(cardiovascularexamlist)
                                    displayCardiovascularExam()
                            }
                        
                    }
                });
            })


            $("#selectcardiovascularexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectcardiovascularexamroutinelist").val()
                let history = $("#selectcardiovascularexamroutinelist").val()
                
                
                cardiovascularexamlist.push(complain)
                console.log(cardiovascularexamlist)
                displayCardiovascularExam()
            })

            $("#selectcardiovascularexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectcardiovascularexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                cardiovascularexamroutinelist.records.forEach(val => {
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
                                $("#selectcardiovascularexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectcardiovascularexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectcardiovascularexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removecardiovascularexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectcardiovascularexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectcardiovascularexamroutinelist").prop("selectedIndex")
                cardiovascularexamroutinelist.records.forEach(val => {
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
                        $("#selectcardiovascularexamroutinelist").html(presentingcomplaintroutinelist)
                        cardiovascularexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistcardiovascularexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                cardiovascularexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectcardiovascularexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectcardiovascularexamroutinelist").html("")
                
                        
            })

            $("#clearcardiovascularexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                cardiovascularexamlist = []
                                    console.log(cardiovascularexamlist)
                                    displayCardiovascularExam()
                        
            })

            //Urogenital Exam Routine
            let urogenitalexamroutinelist = []
            function getUrogenitalExamRoutine(){
                let routinetype = "Urogenital Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        urogenitalexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selecturogenitalexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selecturogenitalexamroutinelist").html("")
                })

            
            }
            getUrogenitalExamRoutine()

            $("#add-urogenitalexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterurogenitalexamroutine").val()
                let routinetype ="Urogenital Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getUrogenitalExamRoutine()
                })
            })

            $("#delete-urogenitalexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selecturogenitalexamroutinelist").val()
                let routineitem = $("#selecturogenitalexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selecturogenitalexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                urogenitalexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getUrogenitalExamRoutine()
                })
                
            })


        
             $("#add-urogenitalexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterurogenitalexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selecturogenitalexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    urogenitalexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateUrogenitalExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoteurogenitalexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterurogenitalexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selecturogenitalexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    urogenitalexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateUrogenitalExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateUrogenitalExamRoutine(){
                let routinetype = "Urogenital Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selecturogenitalexamroutine").val()
                        urogenitalexamroutinelist = data
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
                                        $("#selecturogenitalexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selecturogenitalexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addurogenitalexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selecturogenitalexamroutine").val()
                urogenitalexamroutinelist.records.forEach(val => {
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
                                    urogenitalexamlist.push(element)
                                    console.log(urogenitalexamlist)
                                    
                                   
                                });
                                 displayUrogenitalExam()
                            } else {
                               urogenitalexamlist.push(complaints)
                                    console.log(urogenitalexamlist)
                                    displayUrogenitalExam()
                            }
                        
                    }
                });
            })


            $("#selecturogenitalexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selecturogenitalexamroutinelist").val()
                let history = $("#selecturogenitalexamroutinelist").val()
                
                
                urogenitalexamlist.push(complain)
                console.log(urogenitalexamlist)
                displayUrogenitalExam()
            })

            $("#selecturogenitalexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selecturogenitalexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                urogenitalexamroutinelist.records.forEach(val => {
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
                                $("#selecturogenitalexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selecturogenitalexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selecturogenitalexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removeurogenitalexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selecturogenitalexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selecturogenitalexamroutinelist").prop("selectedIndex")
                urogenitalexamroutinelist.records.forEach(val => {
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
                        $("#selecturogenitalexamroutinelist").html(presentingcomplaintroutinelist)
                        urogenitalexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlisturogenitalexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                urogenitalexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selecturogenitalexamroutine").html(presentingcomplaintroutineoptions)
                $("#selecturogenitalexamroutinelist").html("")
                
                        
            })

            $("#clearurogenitalexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                urogenitalexamlist = []
                                    console.log(urogenitalexamlist)
                                    displayUrogenitalExam()
                        
            })

            //Nervous Exam Routine
            let nervousexamroutinelist = []
            function getNervousExamRoutine(){
                let routinetype = "Nervous Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        nervousexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectnervousexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectnervousexamroutinelist").html("")
                })

            
            }
            getNervousExamRoutine()

            $("#add-nervousexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enternervousexamroutine").val()
                let routinetype ="Nervous Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getNervousExamRoutine()
                })
            })

            $("#delete-nervousexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectnervousexamroutinelist").val()
                let routineitem = $("#selectnervousexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectnervousexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                nervousexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getNervousExamRoutine()
                })
                
            })


        
             $("#add-nervousexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enternervousexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectnervousexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    nervousexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateNervousExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotenervousexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enternervousexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectnervousexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    nervousexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateNervousExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateNervousExamRoutine(){
                let routinetype = "Nervous Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectnervousexamroutine").val()
                        nervousexamroutinelist = data
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
                                        $("#selectnervousexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectnervousexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addnervousexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectnervousexamroutine").val()
                nervousexamroutinelist.records.forEach(val => {
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
                                    nervousexamlist.push(element)
                                    console.log(nervousexamlist)
                                    
                                   
                                });
                                 displayNervousExam()
                            } else {
                               nervousexamlist.push(complaints)
                                    console.log(nervousexamlist)
                                    displayNervousExam()
                            }
                        
                    }
                });
            })


            $("#selectnervousexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectnervousexamroutinelist").val()
                let history = $("#selectnervousexamroutinelist").val()
                
                
                nervousexamlist.push(complain)
                console.log(nervousexamlist)
                displayNervousExam()
            })

            $("#selectnervousexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectnervousexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                nervousexamroutinelist.records.forEach(val => {
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
                                $("#selectnervousexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectnervousexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectnervousexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removenervousexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectnervousexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectnervousexamroutinelist").prop("selectedIndex")
                nervousexamroutinelist.records.forEach(val => {
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
                        $("#selectnervousexamroutinelist").html(presentingcomplaintroutinelist)
                        nervousexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistnervousexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                nervousexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectnervousexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectnervousexamroutinelist").html("")
                
                        
            })

            $("#clearnervousexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                nervousexamlist = []
                                    console.log(nervousexamlist)
                                    displayNervousExam()
                        
            })

            //Muscoloskeletal Exam Routine
            let muscoloskeletalexamroutinelist = []
            function getMuscoloskeletalExamRoutine(){
                let routinetype = "Muscoloskeletal Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        muscoloskeletalexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectmuscoloskeletalexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectmuscoloskeletalexamroutinelist").html("")
                })

            
            }
            getMuscoloskeletalExamRoutine()

            $("#add-muscoloskeletalexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entermuscoloskeletalexamroutine").val()
                let routinetype ="Muscoloskeletal Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getMuscoloskeletalExamRoutine()
                })
            })

            $("#delete-muscoloskeletalexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectmuscoloskeletalexamroutinelist").val()
                let routineitem = $("#selectmuscoloskeletalexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectmuscoloskeletalexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                muscoloskeletalexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getMuscoloskeletalExamRoutine()
                })
                
            })


        
             $("#add-muscoloskeletalexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entermuscoloskeletalexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectmuscoloskeletalexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    muscoloskeletalexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateMuscoloskeletalExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotemuscoloskeletalexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entermuscoloskeletalexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectmuscoloskeletalexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    muscoloskeletalexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateMuscoloskeletalExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateMuscoloskeletalExamRoutine(){
                let routinetype = "Muscoloskeletal Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectmuscoloskeletalexamroutine").val()
                        muscoloskeletalexamroutinelist = data
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
                                        $("#selectmuscoloskeletalexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectmuscoloskeletalexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addmuscoloskeletalexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectmuscoloskeletalexamroutine").val()
                muscoloskeletalexamroutinelist.records.forEach(val => {
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
                                    muscoloskeletalexamlist.push(element)
                                    console.log(muscoloskeletalexamlist)
                                    
                                   
                                });
                                 displayMuscoloskeletalExam()
                            } else {
                               muscoloskeletalexamlist.push(complaints)
                                    console.log(muscoloskeletalexamlist)
                                    displayMuscoloskeletalExam()
                            }
                        
                    }
                });
            })


            $("#selectmuscoloskeletalexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectmuscoloskeletalexamroutinelist").val()
                let history = $("#selectmuscoloskeletalexamroutinelist").val()
                
                
                muscoloskeletalexamlist.push(complain)
                console.log(muscoloskeletalexamlist)
                displayMuscoloskeletalExam()
            })

            $("#selectmuscoloskeletalexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectmuscoloskeletalexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                muscoloskeletalexamroutinelist.records.forEach(val => {
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
                                $("#selectmuscoloskeletalexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectmuscoloskeletalexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectmuscoloskeletalexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removemuscoloskeletalexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectmuscoloskeletalexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectmuscoloskeletalexamroutinelist").prop("selectedIndex")
                muscoloskeletalexamroutinelist.records.forEach(val => {
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
                        $("#selectmuscoloskeletalexamroutinelist").html(presentingcomplaintroutinelist)
                        muscoloskeletalexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistmuscoloskeletalexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                muscoloskeletalexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectmuscoloskeletalexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectmuscoloskeletalexamroutinelist").html("")
                
                        
            })

            $("#clearmuscoloskeletalexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                muscoloskeletalexamlist = []
                                    console.log(muscoloskeletalexamlist)
                                    displayMuscoloskeletalExam()
                        
            })

            //Endocrine Exam Routine
            let endocrineexamroutinelist = []
            function getEndocrineExamRoutine(){
                let routinetype = "Endocrine Exam"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        endocrineexamroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectendocrineexamroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectendocrineexamroutinelist").html("")
                })

            
            }
            getEndocrineExamRoutine()

            $("#add-endocrineexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterendocrineexamroutine").val()
                let routinetype ="Endocrine Exam"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getEndocrineExamRoutine()
                })
            })

            $("#delete-endocrineexamt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectendocrineexamroutinelist").val()
                let routineitem = $("#selectendocrineexamroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectendocrineexamroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                endocrineexamroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getEndocrineExamRoutine()
                })
                
            })


        
             $("#add-endocrineexam-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterendocrineexam").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectendocrineexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    endocrineexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateEndocrineExamRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoteendocrineexamroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterendocrineexam").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectendocrineexamroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    endocrineexamroutinelist.records.forEach(val => {
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
                                
                                getUpdateEndocrineExamRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateEndocrineExamRoutine(){
                let routinetype = "Endocrine Exam"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectendocrineexamroutine").val()
                        endocrineexamroutinelist = data
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
                                        $("#selectendocrineexamroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectendocrineexamroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addendocrineexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectendocrineexamroutine").val()
                endocrineexamroutinelist.records.forEach(val => {
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
                                    endocrineexamlist.push(element)
                                    console.log(endocrineexamlist)
                                    
                                   
                                });
                                 displayEndocrineExam()
                            } else {
                               endocrineexamlist.push(complaints)
                                    console.log(endocrineexamlist)
                                    displayEndocrineExam()
                            }
                        
                    }
                });
            })


            $("#selectendocrineexamroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectendocrineexamroutinelist").val()
                let history = $("#selectendocrineexamroutinelist").val()
                
                
                endocrineexamlist.push(complain)
                console.log(endocrineexamlist)
                displayEndocrineExam()
            })

            $("#selectendocrineexamroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectendocrineexamroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                endocrineexamroutinelist.records.forEach(val => {
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
                                $("#selectendocrineexamroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectendocrineexamroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectendocrineexamroutinelist").html("")
                        }

                    }
                });
            })


            $("#removeendocrineexamroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectendocrineexamroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectendocrineexamroutinelist").prop("selectedIndex")
                endocrineexamroutinelist.records.forEach(val => {
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
                        $("#selectendocrineexamroutinelist").html(presentingcomplaintroutinelist)
                        endocrineexamroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistendocrineexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                endocrineexamroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectendocrineexamroutine").html(presentingcomplaintroutineoptions)
                $("#selectendocrineexamroutinelist").html("")
                
                        
            })

            $("#clearendocrineexamroutinelist").on("click", function(evt){
                evt.preventDefault()
                endocrineexamlist = []
                                    console.log(endocrineexamlist)
                                    displayEndocrineExam()
                        
            })
})