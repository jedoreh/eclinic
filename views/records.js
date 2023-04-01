$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item dropdown" id="records_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Records
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!--<a class="dropdown-item" href="patient-card-registration.html">Patient Card Registration</a>
                                            <a class="dropdown-item" href="patient-card-update.html">Patient Card Update</a>-->
                                            <a class="dropdown-item" href="patient-record-list.html">Hospital Patients Registration List
                                            </a>
                                            <a class="dropdown-item" href="patient-vital-signs-entry.html">Patient Nurse Records Entry</a>
                                            <a class="dropdown-item" href="out-patient-list.html">Out-Patients List</a>
                                            <a class="dropdown-item" href="in-patient-list.html">In-Patients List</a>
                                            <a class="dropdown-item" href="in-patient-list.html">Departmental List</a>
                                           <!-- <a class="dropdown-item" href="morgue-registration.html">Morgue Registration</a>
                                            <a class="dropdown-item" href="morgue-registration-update.html">Morgue Registration Update</a>-->
                                            <a class="dropdown-item" href="morgue-record-list.html">In-Corpse Record List</a>
                                            <a class="dropdown-item" href="corpse-discharge-list.html">Discharge Corpse Record List</a>
                                            <a class="dropdown-item" href="morgue-finance-update.html">Morgue Finance Update</a>
                                            <!--<a class="dropdown-item" href="morgue-finance-update-list.html">Morgue Finance Update List</a>-->
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="finance_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Finance
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="cash-revenue-collection.html">Cash Revenue Collection</a>
                                            <a class="dropdown-item" href="hospital-patient-individual-account-list.html">Hospital Patient Individual Account List</a>
                                            <a class="dropdown-item" href="departmental-revenue-collection.html">Departmental Revenue Collection</a>
                                            <a class="dropdown-item" href="banking.html">Banking</a>
                                            <a class="dropdown-item" href="expenses-purchases-requisition.html">Expenses/Purchases/Requisition</a>
                                            <a class="dropdown-item" href="statements-transactions.html">Transactions</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="out_patient_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Out-Patient
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="nurse-entry-list.html">Patient Nurse Record Entry</a>
                                            <a class="dropdown-item" href="patient-consultation.html">Patient Consultation List</a>
                                            <a class="dropdown-item" href="doctor-consultation-note-taking.html">Doctor Consultation Note Taking</a>
                                            <a class="dropdown-item" href="outpatient-outcome-list.html">OutPatient Outcome</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="in_patient_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            In-Patient
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="in-patient-list.html">InPatient Admission List</a>
                                            <a class="dropdown-item" href="ipd-patient-vital-signs-entry.html">Patient Nurse Record Entry</a>
                                            <a class="dropdown-item" href="ipd-notetaking.html">Doctor Consultation Note Taking</a>
                                            <a class="dropdown-item" href="ipd-patient-outcome.html">InPatient Outcome</a>
                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="laboratory_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Laboratory
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!--<a class="dropdown-item" href="laboratory-request.html">Laboratory Request</a>-->
                                           <a class="dropdown-item" href="laboratory-request-list.html">Laboratory Request List</a>
                                           <a class="dropdown-item" href="lab-sample-collection.html">Laboratory Test</a>
                                           <a class="dropdown-item" href="lab-test-report.html">Lab Scientist Test Report</a>
                                           <a class="dropdown-item" href="lab-report-list.html">All Patient Lab Report List</a>
                                           <a class="dropdown-item" href="individual-full-lab-report.html">Individual Full Lab Report List</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="pharmacy_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pharmacy
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="drug-list.html">All Drug List</a>
                                            <a class="dropdown-item" href="stock-list.html">All Stock List</a>
                                            <a class="dropdown-item" href="dispensing.html">Dispensing</a>
                                           <!--<a class="dropdown-item" href="prescription.html">Prescription</a>
                                           <a class="dropdown-item" href="stocking.html">Stocking</a>-->
                                           <a class="dropdown-item" href="stock-auditing.html">Stock Auditing</a>
                                           <a class="dropdown-item" href="emdex.html">EMDEX</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="radiology_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Radiology
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!--<a class="dropdown-item" href="radiology-request.html">Radiology Request</a>-->
                                           <a class="dropdown-item" href="radiology-request-list.html">Radiology Request List</a>
                                           <a class="dropdown-item" href="scan.html">Scan Report</a>
                                           <a class="dropdown-item" href="x-ray.html">X-Ray Report</a>
                                           <!--<a class="dropdown-item" href="radiology-report.html">Radiology Report</a>-->
                                           <a class="dropdown-item" href="radiology-report-list.html">All Radiology Report List</a>
                                           <a class="dropdown-item" href="individual-radiology-report-list.html">Individual Full Radiology Report List</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="hospital_specialties_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Hospital Specialties
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="obstetrics-gynaecology.html">Obstetrics & Gynaecology</a>
                                           <a class="dropdown-item" href="accident-emergency.html">Accident & Emergency</a>
                                           <a class="dropdown-item" href="pediatrics.html">Pediatrics</a>
                                           <a class="dropdown-item" href="ent.html">ENT</a>
                                           <a class="dropdown-item" href="orthopaedics.html">Orthopaedics</a>
                                           <a class="dropdown-item" href="neurology.html">Nuerology</a>
                                           <a class="dropdown-item" href="nephrology.html">Nephrology</a>
                                           <a class="dropdown-item" href="hematology.html">Hematology</a>
                                           <a class="dropdown-item" href="dermatology.html">Dermatology</a>
                                           <a class="dropdown-item" href="dermatology.html">Dermatology</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="morgue_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Morgue
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!--<a class="dropdown-item" href="morgue-dept-registration.html">Morgue Registration</a>
                                           <a class="dropdown-item" href="morgue-dept-registration-update.html">Morgue Registration Update</a>
                                           <a class="dropdown-item" href="morgue-dept-finance-update.html">Morgue Finance Update</a>
                                           <a class="dropdown-item" href="morgue-outcome.html">Morgue Outcome</a>-->
                                           <a class="dropdown-item" href="admin-morgue-tracking.html">Morgue Records</a>
                                           <a class="dropdown-item" href="corpse-list.html">Corpse List</a>
                                        </div>
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

    

    let getuserdetails = "getuserdetails"
    $.post("controllers/masterpage.php", {getuserdetails:getuserdetails}, function(data){
        if(data=="Not Logged In"){
            // $("#username").html(data)
        } else {
              data = JSON.parse(data)
                // $("#username").html(data.person)
                console.log(data)
                let systemaccounttype = data.systemaccounttype
                if(systemaccounttype.includes("Administrator")){
                  $(".sub_menu").html(submenu)
                } 
//                 else if(systemaccounttype == "Record"){
//                      $("#logout").show()
//                      $("#staff_record_menu").show()
// 
//                 }
        }
      
    })

})