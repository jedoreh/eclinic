$(document).ready(function(){
    //Alimentary Review
        $("#alimentary_review").html("<h2>Alimentary Review</h2>")

        let searchitem = ""
        let reviewtype = ""
        
        
        getAlimentaryReview(searchitem)

        function getAlimentaryReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Alimentary Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectalimentaryreview").html(presentingcomplainlist)

                })
            }

        $("#enteralimentaryreview").on('change keyup paste', function () {
                ApplyFilterAlimentaryReview();
                
            })

            function ApplyFilterAlimentaryReview() {
                let searchitem = $("#enteralimentaryreview").val()
                getAlimentaryReview(searchitem)
                
                }

        let alimentaryreviewlist = []
            $("#add-alimentaryreview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enteralimentaryreview").val()
                        console.log($("#selectalimentaryreview").val())
                        // let periodvalue = ""
                    if($("#selectalimentaryreview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Alimentary Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enteralimentaryreview").val()
                            getAlimentaryReview(searchitem)
                        
                            alimentaryreviewlist.push(review)
                            console.log(alimentaryreviewlist)
                            
                            displayAlimentaryReview()
                            
                        })
                        
                    } else {
                        let review = $("#selectalimentaryreview").val()
                    
                        alimentaryreviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayAlimentaryReview()
                        
                    }


                    console.log(alimentaryreviewlist)
                
            })

        $("#selectalimentaryreview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectalimentaryreview").val()
                    
                    alimentaryreviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayAlimentaryReview()
            })

        function displayAlimentaryReview(){
                let alimentaryreview = ``
                alimentaryreviewlist.forEach(val => {
                        console.log(val)
                    
                        alimentaryreview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#alimentary_review").html("<h2>Alimentary Review</h2>" + alimentaryreview)
            }

        $("#discard-alimentary-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#alimentary_review").html("<h2>Alimentary Review</h2>")
                    alimentaryreviewlist = []
                })
                $("#add-alimentary-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#alimentary_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_alimentary").html("<h2>System Review</h2><div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#alimentary_review").html("<h2>Alimentary Review</h2>")
                    alimentaryreviewlist = []
                })



        //Respiratory Review
        $("#respiratory_review").html("<h2>Respiratory Review</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getRespiratoryReview(searchitem)

        function getRespiratoryReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Respiratory Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectrespiratoryreview").html(presentingcomplainlist)

                })
            }

        $("#enterrespiratoryreview").on('change keyup paste', function () {
                ApplyFilterRespiratoryReview();
                
            })

            function ApplyFilterRespiratoryReview() {
                let searchitem = $("#enterrespiratoryreview").val()
                getRespiratoryReview(searchitem)
                
                }

        let respiratoryreviewlist = []
            $("#add-respiratoryreview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enterrespiratoryreview").val()
                        console.log($("#selectrespiratoryreview").val())
                        // let periodvalue = ""
                    if($("#selectrespiratoryreview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Respiratory Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enterrespiratoryreview").val()
                            getRespiratoryReview(searchitem)
                        
                            respiratoryreviewlist.push(review)
                            console.log(respiratoryreviewlist)
                            
                            displayRespiratoryReview()
                            
                        })
                        
                    } else {
                        let review = $("#selectrespiratoryreview").val()
                    
                        respiratoryreviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayRespiratoryReview()
                        
                    }


                    console.log(respiratoryreviewlist)
                
            })

        $("#selectrespiratoryreview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectrespiratoryreview").val()
                    
                    respiratoryreviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayRespiratoryReview()
            })

        function displayRespiratoryReview(){
                let respiratoryreview = ``
                respiratoryreviewlist.forEach(val => {
                        console.log(val)
                    
                        respiratoryreview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#respiratory_review").html("<h2>Respiratory Review</h2>" + respiratoryreview)
            }

        $("#discard-respiratory-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#respiratory_review").html("<h2>Respiratory Review</h2>")
                    respiratoryreviewlist = []
                })
                $("#add-respiratory-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#respiratory_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_respiratory").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#respiratory_review").html("<h2>Respiratory Review</h2>")
                    respiratoryreviewlist = []
                })


         //Cardiovascular Review
        $("#cardiovascular_review").html("<h2>Cardiovascular Review</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getCardiovascularReview(searchitem)

        function getCardiovascularReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Cardiovascular Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectcardiovascularreview").html(presentingcomplainlist)

                })
            }

        $("#entercardiovascularreview").on('change keyup paste', function () {
                ApplyFilterCardiovascularReview();
                
            })

            function ApplyFilterCardiovascularReview() {
                let searchitem = $("#entercardiovascularreview").val()
                getCardiovascularReview(searchitem)
                
                }

        let cardiovascularreviewlist = []
            $("#add-cardiovascularreview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#entercardiovascularreview").val()
                        console.log($("#selectcardiovascularreview").val())
                        // let periodvalue = ""
                    if($("#selectcardiovascularreview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Cardiovascular Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#entercardiovascularreview").val()
                            getCardiovascularReview(searchitem)
                        
                            cardiovascularreviewlist.push(review)
                            console.log(cardiovascularreviewlist)
                            
                            displayCardiovascularReview()
                            
                        })
                        
                    } else {
                        let review = $("#selectcardiovascularreview").val()
                    
                        cardiovascularreviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayCardiovascularReview()
                        
                    }


                    console.log(cardiovascularreviewlist)
                
            })

        $("#selectcardiovascularreview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectcardiovascularreview").val()
                    
                    cardiovascularreviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayCardiovascularReview()
            })

        function displayCardiovascularReview(){
                let cardiovascularreview = ``
                cardiovascularreviewlist.forEach(val => {
                        console.log(val)
                    
                        cardiovascularreview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#cardiovascular_review").html("<h2>Cardiovascular Review</h2>" + cardiovascularreview)
            }

        $("#discard-cardiovascular-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#cardiovascular_review").html("<h2>Cardiovascular Review</h2>")
                    cardiovascularreviewlist = []
                })
                $("#add-cardiovascular-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#cardiovascular_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_cardiovascular").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#cardiovascular_review").html("<h2>Cardiovascular Review</h2>")
                    cardiovascularreviewlist = []
                })

         //Urogenital Review
        $("#urogenital_review").html("<h2>Urogenital Review</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getUrogenitalReview(searchitem)

        function getUrogenitalReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Urogenital Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selecturogenitalreview").html(presentingcomplainlist)

                })
            }

        $("#enterurogenitalreview").on('change keyup paste', function () {
                ApplyFilterUrogenitalReview();
                
            })

            function ApplyFilterUrogenitalReview() {
                let searchitem = $("#enterurogenitalreview").val()
                getUrogenitalReview(searchitem)
                
                }

        let urogenitalreviewlist = []
            $("#add-urogenitalreview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enterurogenitalreview").val()
                        console.log($("#selecturogenitalreview").val())
                        // let periodvalue = ""
                    if($("#selecturogenitalreview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Urogenital Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enterurogenitalreview").val()
                            getUrogenitalReview(searchitem)
                        
                            urogenitalreviewlist.push(review)
                            console.log(urogenitalreviewlist)
                            
                            displayUrogenitalReview()
                            
                        })
                        
                    } else {
                        let review = $("#selecturogenitalreview").val()
                    
                        urogenitalreviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayUrogenitalReview()
                        
                    }


                    console.log(urogenitalreviewlist)
                
            })

        $("#selecturogenitalreview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selecturogenitalreview").val()
                    
                    urogenitalreviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayUrogenitalReview()
            })

        function displayUrogenitalReview(){
                let urogenitalreview = ``
                urogenitalreviewlist.forEach(val => {
                        console.log(val)
                    
                        urogenitalreview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#urogenital_review").html("<h2>Urogenital Review</h2>" + urogenitalreview)
            }

        $("#discard-urogenital-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#urogenital_review").html("<h2>Urogenital Review</h2>")
                    urogenitalreviewlist = []
                })
                $("#add-urogenital-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#urogenital_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_urogenital").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#urogenital_review").html("<h2>Urogenital Review</h2>")
                    urogenitalreviewlist = []
                })


        //Nervous Review
        $("#nervous_review").html("<h2>Nervous Review</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getNervousReview(searchitem)

        function getNervousReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Nervous Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectnervousreview").html(presentingcomplainlist)

                })
            }

        $("#enternervousreview").on('change keyup paste', function () {
                ApplyFilterNervousReview();
                
            })

            function ApplyFilterNervousReview() {
                let searchitem = $("#enternervousreview").val()
                getNervousReview(searchitem)
                
                }

        let nervousreviewlist = []
            $("#add-nervousreview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enternervousreview").val()
                        console.log($("#selectnervousreview").val())
                        // let periodvalue = ""
                    if($("#selectnervousreview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Nervous Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enternervousreview").val()
                            getNervousReview(searchitem)
                        
                            nervousreviewlist.push(review)
                            console.log(nervousreviewlist)
                            
                            displayNervousReview()
                            
                        })
                        
                    } else {
                        let review = $("#selectnervousreview").val()
                    
                        nervousreviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayNervousReview()
                        
                    }


                    console.log(nervousreviewlist)
                
            })

        $("#selectnervousreview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectnervousreview").val()
                    
                    nervousreviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayNervousReview()
            })

        function displayNervousReview(){
                let nervousreview = ``
                nervousreviewlist.forEach(val => {
                        console.log(val)
                    
                        nervousreview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#nervous_review").html("<h2>Nervous Review</h2>" + nervousreview)
            }

        $("#discard-nervous-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#nervous_review").html("<h2>Nervous Review</h2>")
                    nervousreviewlist = []
                })
                $("#add-nervous-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#nervous_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_nervous").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#nervous_review").html("<h2>Nervous Review</h2>")
                    nervousreviewlist = []
                })


        //Muscoloskeletal Review
        $("#muscoloskeletal_review").html("<h2>Muscoloskeletal Review</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getMuscoloskeletalReview(searchitem)

        function getMuscoloskeletalReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Muscoloskeletal Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectmuscoloskeletalreview").html(presentingcomplainlist)

                })
            }

        $("#entermuscoloskeletalreview").on('change keyup paste', function () {
                ApplyFilterMuscoloskeletalReview();
                
            })

            function ApplyFilterMuscoloskeletalReview() {
                let searchitem = $("#entermuscoloskeletalreview").val()
                getMuscoloskeletalReview(searchitem)
                
                }

        let muscoloskeletalreviewlist = []
            $("#add-muscoloskeletalreview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#entermuscoloskeletalreview").val()
                        console.log($("#selectmuscoloskeletalreview").val())
                        // let periodvalue = ""
                    if($("#selectmuscoloskeletalreview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Muscoloskeletal Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#entermuscoloskeletalreview").val()
                            getMuscoloskeletalReview(searchitem)
                        
                            muscoloskeletalreviewlist.push(review)
                            console.log(muscoloskeletalreviewlist)
                            
                            displayMuscoloskeletalReview()
                            
                        })
                        
                    } else {
                        let review = $("#selectmuscoloskeletalreview").val()
                    
                        muscoloskeletalreviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayMuscoloskeletalReview()
                        
                    }


                    console.log(muscoloskeletalreviewlist)
                
            })

        $("#selectmuscoloskeletalreview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectmuscoloskeletalreview").val()
                    
                    muscoloskeletalreviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayMuscoloskeletalReview()
            })

        function displayMuscoloskeletalReview(){
                let muscoloskeletalreview = ``
                muscoloskeletalreviewlist.forEach(val => {
                        console.log(val)
                    
                        muscoloskeletalreview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#muscoloskeletal_review").html("<h2>Muscoloskeletal Review</h2>" + muscoloskeletalreview)
            }

        $("#discard-muscoloskeletal-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#muscoloskeletal_review").html("<h2>Muscoloskeletal Review</h2>")
                    muscoloskeletalreviewlist = []
                })
                $("#add-muscoloskeletal-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#muscoloskeletal_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_muscoloskeletal").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#muscoloskeletal_review").html("<h2>Muscoloskeletal Review</h2>")
                    muscoloskeletalreviewlist = []
                })

         //Endocrine Review
        $("#endocrine_review").html("<h2>Endocrine Review</h2>")

        // let searchitem = ""
        // let reviewtype = ""
        
        
        getEndocrineReview(searchitem)

        function getEndocrineReview(searchitem){
                let getReview = "getReview"
                reviewtype = "Endocrine Review"
                $.post("controllers/patient-note.php",{searchitem:searchitem, reviewtype:reviewtype, getReview:getReview},function(data){
                    console.log(data)
                    data = JSON.parse(data)
                    let presentingcomplainlist = ``
                    data.records.forEach(val => {
                        // console.log(val.presentingcomplaint)
                        presentingcomplainlist += `<option value="` + val.review + `">` + val.review + `</option>`
                    });
                    $("#selectendocrinereview").html(presentingcomplainlist)

                })
            }

        $("#enterendocrinereview").on('change keyup paste', function () {
                ApplyFilterEndocrineReview();
                
            })

            function ApplyFilterEndocrineReview() {
                let searchitem = $("#enterendocrinereview").val()
                getEndocrineReview(searchitem)
                
                }

        let endocrinereviewlist = []
            $("#add-endocrinereview").on("click", function(evt){
                evt.preventDefault()
                
                        let review = $("#enterendocrinereview").val()
                        console.log($("#selectendocrinereview").val())
                        // let periodvalue = ""
                    if($("#selectendocrinereview").val()=="No Review Found"){
                        //Add presenting complain
                        let addReview = "addReview"
                        reviewtype = "Endocrine Review"
                        $.post("controllers/patient-note.php",{reviewtype:reviewtype,review:review,addReview:addReview}, function(data){
                            console.log(data)
                            let searchitem = $("#enterendocrinereview").val()
                            getEndocrineReview(searchitem)
                        
                            endocrinereviewlist.push(review)
                            console.log(endocrinereviewlist)
                            
                            displayEndocrineReview()
                            
                        })
                        
                    } else {
                        let review = $("#selectendocrinereview").val()
                    
                        endocrinereviewlist.push(review)

                        let reviewpresentingcomplaintlist = ``
                        
                        displayEndocrineReview()
                        
                    }


                    console.log(endocrinereviewlist)
                
            })

        $("#selectendocrinereview").on("change", function(evt){
                evt.preventDefault()
                let review = $("#selectendocrinereview").val()
                    
                    endocrinereviewlist.push(review)

                    let reviewpresentingcomplaintlist = ``
                    
                    displayEndocrineReview()
            })

        function displayEndocrineReview(){
                let endocrinereview = ``
                endocrinereviewlist.forEach(val => {
                        console.log(val)
                    
                        endocrinereview += `<span style="padding-left:10px;font-size: xx-large; color: #25127a;">` + val + `</span>, `
                        
                });
                $("#endocrine_review").html("<h2>Endocrine Review</h2>" + endocrinereview)
            }

        $("#discard-endocrine-review-button").on("click", function(evt){
                    evt.preventDefault()
                    $("#endocrine_review").html("<h2>Endocrine Review</h2>")
                    endocrinereviewlist = []
                })
                $("#add-endocrine-review-button").on("click", function(evt){
                    evt.preventDefault()
                    console.log("test")
                    presenting_complain_html = $("#endocrine_review").html()
                    console.log(presenting_complain_html)
                    // let other_review = $("#patient_note_otherreview").html()
                    $("#systemicreview_endocrine").html("<div style='padding-left:50px;'>" + presenting_complain_html + "</div>")
                    $("#endocrine_review").html("<h2>Endocrine Review</h2>")
                    endocrinereviewlist = []
                })

        //Alimentary Review Routine
            let alimentaryreviewroutinelist = []
            function getAlimentaryReviewRoutine(){
                let routinetype = "Alimentary Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        alimentaryreviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectalimentaryreviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectalimentaryreviewroutinelist").html("")
                })

            
            }
            getAlimentaryReviewRoutine()

            $("#add-alimentaryreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enteralimentaryreviewroutine").val()
                let routinetype ="Alimentary Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getAlimentaryReviewRoutine()
                })
            })

            $("#delete-alimentaryreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectalimentaryreviewroutinelist").val()
                let routineitem = $("#selectalimentaryreviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectalimentaryreviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                alimentaryreviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getAlimentaryReviewRoutine()
                })
                
            })


        
             $("#add-alimentaryreview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enteralimentaryreview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectalimentaryreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    alimentaryreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateAlimentaryReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotealimentaryreviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enteralimentaryreview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectalimentaryreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    alimentaryreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateAlimentaryReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateAlimentaryReviewRoutine(){
                let routinetype = "Alimentary Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectalimentaryreviewroutine").val()
                        alimentaryreviewroutinelist = data
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
                                        $("#selectalimentaryreviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectalimentaryreviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addalimentaryreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectalimentaryreviewroutine").val()
                alimentaryreviewroutinelist.records.forEach(val => {
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
                                    alimentaryreviewlist.push(element)
                                    console.log(alimentaryreviewlist)
                                    
                                   
                                });
                                 displayAlimentaryReview()
                            } else {
                               alimentaryreviewlist.push(complaints)
                                    console.log(alimentaryreviewlist)
                                    displayAlimentaryReview()
                            }
                        
                    }
                });
            })


            $("#selectalimentaryreviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectalimentaryreviewroutinelist").val()
                let history = $("#selectalimentaryreviewroutinelist").val()
                
                
                alimentaryreviewlist.push(complain)
                console.log(alimentaryreviewlist)
                displayAlimentaryReview()
            })

            $("#selectalimentaryreviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectalimentaryreviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                alimentaryreviewroutinelist.records.forEach(val => {
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
                                $("#selectalimentaryreviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectalimentaryreviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectalimentaryreviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removealimentaryreviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectalimentaryreviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectalimentaryreviewroutinelist").prop("selectedIndex")
                alimentaryreviewroutinelist.records.forEach(val => {
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
                        $("#selectalimentaryreviewroutinelist").html(presentingcomplaintroutinelist)
                        alimentaryreviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistalimentaryreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                alimentaryreviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectalimentaryreviewroutine").html(presentingcomplaintroutineoptions)
                $("#selectalimentaryreviewroutinelist").html("")
                
                        
            })

            $("#clearalimentaryreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                alimentaryreviewlist = []
                                    console.log(alimentaryreviewlist)
                                    displayAlimentaryReview()
                        
            })


            //Respiratory Review Routine
            let respiratoryreviewroutinelist = []
            function getRespiratoryReviewRoutine(){
                let routinetype = "Respiratory Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        respiratoryreviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectrespiratoryreviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectrespiratoryreviewroutinelist").html("")
                })

            
            }
            getRespiratoryReviewRoutine()

            $("#add-respiratoryreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterrespiratoryreviewroutine").val()
                let routinetype ="Respiratory Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getRespiratoryReviewRoutine()
                })
            })

            $("#delete-respiratoryreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectrespiratoryreviewroutinelist").val()
                let routineitem = $("#selectrespiratoryreviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectrespiratoryreviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                respiratoryreviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getRespiratoryReviewRoutine()
                })
                
            })


        
             $("#add-respiratoryreview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterrespiratoryreview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectrespiratoryreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    respiratoryreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateRespiratoryReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoterespiratoryreviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterrespiratoryreview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectrespiratoryreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    respiratoryreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateRespiratoryReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateRespiratoryReviewRoutine(){
                let routinetype = "Respiratory Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectrespiratoryreviewroutine").val()
                        respiratoryreviewroutinelist = data
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
                                        $("#selectrespiratoryreviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectrespiratoryreviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addrespiratoryreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectrespiratoryreviewroutine").val()
                respiratoryreviewroutinelist.records.forEach(val => {
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
                                    respiratoryreviewlist.push(element)
                                    console.log(respiratoryreviewlist)
                                    
                                   
                                });
                                 displayRespiratoryReview()
                            } else {
                               respiratoryreviewlist.push(complaints)
                                    console.log(respiratoryreviewlist)
                                    displayRespiratoryReview()
                            }
                        
                    }
                });
            })


            $("#selectrespiratoryreviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectrespiratoryreviewroutinelist").val()
                let history = $("#selectrespiratoryreviewroutinelist").val()
                
                
                respiratoryreviewlist.push(complain)
                console.log(respiratoryreviewlist)
                displayRespiratoryReview()
            })

            $("#selectrespiratoryreviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectrespiratoryreviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                respiratoryreviewroutinelist.records.forEach(val => {
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
                                $("#selectrespiratoryreviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectrespiratoryreviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectrespiratoryreviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removerespiratoryreviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectrespiratoryreviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectrespiratoryreviewroutinelist").prop("selectedIndex")
                respiratoryreviewroutinelist.records.forEach(val => {
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
                        $("#selectrespiratoryreviewroutinelist").html(presentingcomplaintroutinelist)
                        respiratoryreviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistrespiratoryreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                respiratoryreviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectrespiratoryreviewroutine").html(presentingcomplaintroutineoptions)
                $("#selectrespiratoryreviewroutinelist").html("")
                
                        
            })

            $("#clearrespiratoryreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                respiratoryreviewlist = []
                                    console.log(respiratoryreviewlist)
                                    displayRespiratoryReview()
                        
            })

            //Cardiovascular Review Routine
            let cardiovascularreviewroutinelist = []
            function getCardiovascularReviewRoutine(){
                let routinetype = "Cardiovascular Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        cardiovascularreviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectcardiovascularreviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectcardiovascularreviewroutinelist").html("")
                })

            
            }
            getCardiovascularReviewRoutine()

            $("#add-cardiovascularreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entercardiovascularreviewroutine").val()
                let routinetype ="Cardiovascular Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getCardiovascularReviewRoutine()
                })
            })

            $("#delete-cardiovascularreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectcardiovascularreviewroutinelist").val()
                let routineitem = $("#selectcardiovascularreviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectcardiovascularreviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                cardiovascularreviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getCardiovascularReviewRoutine()
                })
                
            })


        
             $("#add-cardiovascularreview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entercardiovascularreview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectcardiovascularreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    cardiovascularreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateCardiovascularReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotecardiovascularreviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entercardiovascularreview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectcardiovascularreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    cardiovascularreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateCardiovascularReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateCardiovascularReviewRoutine(){
                let routinetype = "Cardiovascular Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectcardiovascularreviewroutine").val()
                        cardiovascularreviewroutinelist = data
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
                                        $("#selectcardiovascularreviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectcardiovascularreviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addcardiovascularreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectcardiovascularreviewroutine").val()
                cardiovascularreviewroutinelist.records.forEach(val => {
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
                                    cardiovascularreviewlist.push(element)
                                    console.log(cardiovascularreviewlist)
                                    
                                   
                                });
                                 displayCardiovascularReview()
                            } else {
                               cardiovascularreviewlist.push(complaints)
                                    console.log(cardiovascularreviewlist)
                                    displayCardiovascularReview()
                            }
                        
                    }
                });
            })


            $("#selectcardiovascularreviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectcardiovascularreviewroutinelist").val()
                let history = $("#selectcardiovascularreviewroutinelist").val()
                
                
                cardiovascularreviewlist.push(complain)
                console.log(cardiovascularreviewlist)
                displayCardiovascularReview()
            })

            $("#selectcardiovascularreviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectcardiovascularreviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                cardiovascularreviewroutinelist.records.forEach(val => {
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
                                $("#selectcardiovascularreviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectcardiovascularreviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectcardiovascularreviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removecardiovascularreviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectcardiovascularreviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectcardiovascularreviewroutinelist").prop("selectedIndex")
                cardiovascularreviewroutinelist.records.forEach(val => {
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
                        $("#selectcardiovascularreviewroutinelist").html(presentingcomplaintroutinelist)
                        cardiovascularreviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistcardiovascularreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                cardiovascularreviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectcardiovascularreviewroutine").html(presentingcomplaintroutineoptions)
                $("#selectcardiovascularreviewroutinelist").html("")
                
                        
            })

            $("#clearcardiovascularreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                cardiovascularreviewlist = []
                                    console.log(cardiovascularreviewlist)
                                    displayCardiovascularReview()
                        
            })

            //Urogenital Review Routine
            let urogenitalreviewroutinelist = []
            function getUrogenitalReviewRoutine(){
                let routinetype = "Urogenital Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        urogenitalreviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selecturogenitalreviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selecturogenitalreviewroutinelist").html("")
                })

            
            }
            getUrogenitalReviewRoutine()

            $("#add-urogenitalreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterurogenitalreviewroutine").val()
                let routinetype ="Urogenital Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getUrogenitalReviewRoutine()
                })
            })

            $("#delete-urogenitalreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selecturogenitalreviewroutinelist").val()
                let routineitem = $("#selecturogenitalreviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selecturogenitalreviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                urogenitalreviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getUrogenitalReviewRoutine()
                })
                
            })


        
             $("#add-urogenitalreview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterurogenitalreview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selecturogenitalreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    urogenitalreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateUrogenitalReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoteurogenitalreviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterurogenitalreview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selecturogenitalreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    urogenitalreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateUrogenitalReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateUrogenitalReviewRoutine(){
                let routinetype = "Urogenital Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selecturogenitalreviewroutine").val()
                        urogenitalreviewroutinelist = data
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
                                        $("#selecturogenitalreviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selecturogenitalreviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addurogenitalreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selecturogenitalreviewroutine").val()
                urogenitalreviewroutinelist.records.forEach(val => {
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
                                    urogenitalreviewlist.push(element)
                                    console.log(urogenitalreviewlist)
                                    
                                   
                                });
                                 displayUrogenitalReview()
                            } else {
                               urogenitalreviewlist.push(complaints)
                                    console.log(urogenitalreviewlist)
                                    displayUrogenitalReview()
                            }
                        
                    }
                });
            })


            $("#selecturogenitalreviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selecturogenitalreviewroutinelist").val()
                let history = $("#selecturogenitalreviewroutinelist").val()
                
                
                urogenitalreviewlist.push(complain)
                console.log(urogenitalreviewlist)
                displayUrogenitalReview()
            })

            $("#selecturogenitalreviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selecturogenitalreviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                urogenitalreviewroutinelist.records.forEach(val => {
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
                                $("#selecturogenitalreviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selecturogenitalreviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selecturogenitalreviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removeurogenitalreviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selecturogenitalreviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selecturogenitalreviewroutinelist").prop("selectedIndex")
                urogenitalreviewroutinelist.records.forEach(val => {
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
                        $("#selecturogenitalreviewroutinelist").html(presentingcomplaintroutinelist)
                        urogenitalreviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlisturogenitalreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                urogenitalreviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selecturogenitalreviewroutine").html(presentingcomplaintroutineoptions)
                $("#selecturogenitalreviewroutinelist").html("")
                
                        
            })

            $("#clearurogenitalreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                urogenitalreviewlist = []
                                    console.log(urogenitalreviewlist)
                                    displayUrogenitalReview()
                        
            })

            //Nervous Review Routine
            let nervousreviewroutinelist = []
            function getNervousReviewRoutine(){
                let routinetype = "Nervous Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        nervousreviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectnervousreviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectnervousreviewroutinelist").html("")
                })

            
            }
            getNervousReviewRoutine()

            $("#add-nervousreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enternervousreviewroutine").val()
                let routinetype ="Nervous Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getNervousReviewRoutine()
                })
            })

            $("#delete-nervousreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectnervousreviewroutinelist").val()
                let routineitem = $("#selectnervousreviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectnervousreviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                nervousreviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getNervousReviewRoutine()
                })
                
            })


        
             $("#add-nervousreview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enternervousreview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectnervousreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    nervousreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateNervousReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotenervousreviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enternervousreview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectnervousreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    nervousreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateNervousReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateNervousReviewRoutine(){
                let routinetype = "Nervous Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectnervousreviewroutine").val()
                        nervousreviewroutinelist = data
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
                                        $("#selectnervousreviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectnervousreviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addnervousreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectnervousreviewroutine").val()
                nervousreviewroutinelist.records.forEach(val => {
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
                                    nervousreviewlist.push(element)
                                    console.log(nervousreviewlist)
                                    
                                   
                                });
                                 displayNervousReview()
                            } else {
                               nervousreviewlist.push(complaints)
                                    console.log(nervousreviewlist)
                                    displayNervousReview()
                            }
                        
                    }
                });
            })


            $("#selectnervousreviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectnervousreviewroutinelist").val()
                let history = $("#selectnervousreviewroutinelist").val()
                
                
                nervousreviewlist.push(complain)
                console.log(nervousreviewlist)
                displayNervousReview()
            })

            $("#selectnervousreviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectnervousreviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                nervousreviewroutinelist.records.forEach(val => {
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
                                $("#selectnervousreviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectnervousreviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectnervousreviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removenervousreviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectnervousreviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectnervousreviewroutinelist").prop("selectedIndex")
                nervousreviewroutinelist.records.forEach(val => {
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
                        $("#selectnervousreviewroutinelist").html(presentingcomplaintroutinelist)
                        nervousreviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistnervousreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                nervousreviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectnervousreviewroutine").html(presentingcomplaintroutineoptions)
                $("#selectnervousreviewroutinelist").html("")
                
                        
            })

            $("#clearnervousreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                nervousreviewlist = []
                                    console.log(nervousreviewlist)
                                    displayNervousReview()
                        
            })

            //Muscoloskeletal Review Routine
            let muscoloskeletalreviewroutinelist = []
            function getMuscoloskeletalReviewRoutine(){
                let routinetype = "Muscoloskeletal Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        muscoloskeletalreviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectmuscoloskeletalreviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectmuscoloskeletalreviewroutinelist").html("")
                })

            
            }
            getMuscoloskeletalReviewRoutine()

            $("#add-muscoloskeletalreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#entermuscoloskeletalreviewroutine").val()
                let routinetype ="Muscoloskeletal Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getMuscoloskeletalReviewRoutine()
                })
            })

            $("#delete-muscoloskeletalreviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectmuscoloskeletalreviewroutinelist").val()
                let routineitem = $("#selectmuscoloskeletalreviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectmuscoloskeletalreviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                muscoloskeletalreviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getMuscoloskeletalReviewRoutine()
                })
                
            })


        
             $("#add-muscoloskeletalreview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#entermuscoloskeletalreview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectmuscoloskeletalreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    muscoloskeletalreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateMuscoloskeletalReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnotemuscoloskeletalreviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#entermuscoloskeletalreview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectmuscoloskeletalreviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    muscoloskeletalreviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateMuscoloskeletalReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateMuscoloskeletalReviewRoutine(){
                let routinetype = "Muscoloskeletal Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectmuscoloskeletalreviewroutine").val()
                        muscoloskeletalreviewroutinelist = data
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
                                        $("#selectmuscoloskeletalreviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectmuscoloskeletalreviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addmuscoloskeletalreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectmuscoloskeletalreviewroutine").val()
                muscoloskeletalreviewroutinelist.records.forEach(val => {
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
                                    muscoloskeletalreviewlist.push(element)
                                    console.log(muscoloskeletalreviewlist)
                                    
                                   
                                });
                                 displayMuscoloskeletalReview()
                            } else {
                               muscoloskeletalreviewlist.push(complaints)
                                    console.log(muscoloskeletalreviewlist)
                                    displayMuscoloskeletalReview()
                            }
                        
                    }
                });
            })


            $("#selectmuscoloskeletalreviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectmuscoloskeletalreviewroutinelist").val()
                let history = $("#selectmuscoloskeletalreviewroutinelist").val()
                
                
                muscoloskeletalreviewlist.push(complain)
                console.log(muscoloskeletalreviewlist)
                displayMuscoloskeletalReview()
            })

            $("#selectmuscoloskeletalreviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectmuscoloskeletalreviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                muscoloskeletalreviewroutinelist.records.forEach(val => {
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
                                $("#selectmuscoloskeletalreviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectmuscoloskeletalreviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectmuscoloskeletalreviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removemuscoloskeletalreviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectmuscoloskeletalreviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectmuscoloskeletalreviewroutinelist").prop("selectedIndex")
                muscoloskeletalreviewroutinelist.records.forEach(val => {
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
                        $("#selectmuscoloskeletalreviewroutinelist").html(presentingcomplaintroutinelist)
                        muscoloskeletalreviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistmuscoloskeletalreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                muscoloskeletalreviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectmuscoloskeletalreviewroutine").html(presentingcomplaintroutineoptions)
                $("#selectmuscoloskeletalreviewroutinelist").html("")
                
                        
            })

            $("#clearmuscoloskeletalreviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                muscoloskeletalreviewlist = []
                                    console.log(muscoloskeletalreviewlist)
                                    displayMuscoloskeletalReview()
                        
            })

            //Endocrine Review Routine
            let endocrinereviewroutinelist = []
            function getEndocrineReviewRoutine(){
                let routinetype = "Endocrine Review"
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                      console.log(data)
                        endocrinereviewroutinelist = data
                    let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                    data.records.forEach(val => {
                        presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                    });

                    $("#selectendocrinereviewroutine").html(presentingcomplaintroutineoptions)
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
                    $("#selectendocrinereviewroutinelist").html("")
                })

            
            }
            getEndocrineReviewRoutine()

            $("#add-endocrinereviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let routine = $("#enterendocrinereviewroutine").val()
                let routinetype ="Endocrine Review"
                let addRoutine = "addRoutine"
                $.post("controllers/patient-note.php", {routine:routine, routinetype:routinetype, addRoutine:addRoutine}, function(data){
                    getEndocrineReviewRoutine()
                })
            })

            $("#delete-endocrinereviewt-routine-button").on("click", function(evt){
                evt.preventDefault()
                let item = $("#selectendocrinereviewroutinelist").val()
                let routineitem = $("#selectendocrinereviewroutine").val()
                // console.log(historypresentingcomplaintlist)
                let index = $("#selectendocrinereviewroutine").prop('selectedIndex')
                let splitroutine = routineitem.split(",")
                let routineid = splitroutine[0]

                endocrinereviewroutinelist.records.splice(index, 1)
                let deletePresentingComplainRoutine = "deletePresentingComplainRoutine"
                $.post("controllers/patient-note.php",{id:routineid,deletePresentingComplainRoutine:deletePresentingComplainRoutine},function(data){
                    console.log(data)

                    getEndocrineReviewRoutine()
                })
                
            })


        
             $("#add-endocrinereview-routine").on("click", function(evt){
                evt.preventDefault()
                let complain = $("#enterendocrinereview").val()
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectendocrinereviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    endocrinereviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateEndocrineReviewRoutine()
                            })
                        }
                    });
                }

            })

            $("#addfromnoteendocrinereviewroutine").on("click",function(evt){
                evt.preventDefault()
                // let complain = $("#enterendocrinereview").val()
                let complain = window.getSelection().anchorNode.data.substring( window.getSelection().anchorOffset, window.getSelection().extentOffset )
                console.log(complain)
                if(complain==""||complain==null){
                    // complain=$("#selectpresentingcomplain").val()
                }else{
                    let routine = $("#selectendocrinereviewroutine").val()
                    let splitroutine = routine.split(",")
                    let routineid = parseFloat(splitroutine[0])
                    // console.log(historypresentingcomplaintlist)
                    endocrinereviewroutinelist.records.forEach(val => {
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
                                
                                getUpdateEndocrineReviewRoutine()
                            })
                        }
                    });
                }
            })

            function getUpdateEndocrineReviewRoutine(){
                let routinetype = "Endocrine Review"
                console.log("test")
                let getPresentingComplainRoutine = "getPresentingComplainRoutine"
                $.post("controllers/patient-note.php", {routinetype:routinetype,getPresentingComplainRoutine:getPresentingComplainRoutine}, function(data){
                    data = JSON.parse(data)
                        let routinename = $("#selectendocrinereviewroutine").val()
                        endocrinereviewroutinelist = data
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
                                        $("#selectendocrinereviewroutinelist").html(presentingcomplaintroutinelist)
                                    } else {
                                        let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                        $("#selectendocrinereviewroutinelist").html(presentingcomplaintroutinelist)
                                    }
                                
                            }
                        });
                })
            }


            $("#addendocrinereviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let routinename = $("#selectendocrinereviewroutine").val()
                endocrinereviewroutinelist.records.forEach(val => {
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
                                    endocrinereviewlist.push(element)
                                    console.log(endocrinereviewlist)
                                    
                                   
                                });
                                 displayEndocrineReview()
                            } else {
                               endocrinereviewlist.push(complaints)
                                    console.log(endocrinereviewlist)
                                    displayEndocrineReview()
                            }
                        
                    }
                });
            })


            $("#selectendocrinereviewroutinelist").on("change", function(evt){
                evt.preventDefault()
                let complain = $("#selectendocrinereviewroutinelist").val()
                let history = $("#selectendocrinereviewroutinelist").val()
                
                
                endocrinereviewlist.push(complain)
                console.log(endocrinereviewlist)
                displayEndocrineReview()
            })

            $("#selectendocrinereviewroutine").on("change", function(evt){
                evt.preventDefault()
                let routine = $("#selectendocrinereviewroutine").val()
                let splitroutine = routine.split(",")
                let routineid = parseFloat(splitroutine[0])
                endocrinereviewroutinelist.records.forEach(val => {
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
                                $("#selectendocrinereviewroutinelist").html(presentingcomplaintroutinelist)
                            } else {
                                let presentingcomplaintroutinelist = `<option value="` + complaints + `">` + complaints + `</option>`
                                $("#selectendocrinereviewroutinelist").html(presentingcomplaintroutinelist)
                            }
                        } else {
                            $("#selectendocrinereviewroutinelist").html("")
                        }

                    }
                });
            })


            $("#removeendocrinereviewroutine").on("click", function(evt){
                evt.preventDefault()
                // console.log(presentingcomplaintlist)
                //  let selectroutineitem = $("#selectpresentingcomplainroutinelist").val()
                let selectroutine = $("#selectendocrinereviewroutine").val()
                let splitselectroutine = selectroutine.split(",")
                selectroutine = splitselectroutine[1]
                let routineid = splitselectroutine[0]
                let count = 0
                let itemid = $("#selectendocrinereviewroutinelist").prop("selectedIndex")
                endocrinereviewroutinelist.records.forEach(val => {
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
                        $("#selectendocrinereviewroutinelist").html(presentingcomplaintroutinelist)
                        endocrinereviewroutinelist.records[count].description = listitems

                        let updatePresentingComplainRoutine = "updatePresentingComplainRoutine"
                        
                        $.post("controllers/patient-note.php",{id:routineid,complaints:listitems,updatePresentingComplainRoutine:updatePresentingComplainRoutine},function(data){
                            console.log(data)

                        }) 
                    }
                    count++
                });
            })


             $("#clearlistendocrinereviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                let presentingcomplaintroutineoptions = `<option value="">Select Routine</option>`
                endocrinereviewroutinelist.records.forEach(val => {
                    presentingcomplaintroutineoptions += `<option value="` + val.id + `,` + val.regimentname + `">` + val.regimentname + `</option>`

                });

                $("#selectendocrinereviewroutine").html(presentingcomplaintroutineoptions)
                $("#selectendocrinereviewroutinelist").html("")
                
                        
            })

            $("#clearendocrinereviewroutinelist").on("click", function(evt){
                evt.preventDefault()
                endocrinereviewlist = []
                                    console.log(endocrinereviewlist)
                                    displayEndocrineReview()
                        
            })
})