$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item" id="notetaking_menu">
                                        <a class="nav-link" href="opd-note-taking.html">Note Taking</a>
                                    </li>
                                    <li class="nav-item" id="management_plan_diagnosis_menu">
                                        <a class="nav-link" href="opd-management-plan-diagnosis.html">Management Plan/Diagnosis</a>
                                    </li>
                                    <li class="nav-item" id="prescription_ordering_menu">
                                        <a class="nav-link" href="opd-prescription-ordering.html">Perscription/Ordering</a>
                                    </li>
                                    <li class="nav-item dropdown" id="consultation_outcome_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Consultation Outcome
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="opd-clinic.html">Continued Out-Patient Clinic</a>
                                            <a class="dropdown-item" href="admit-ward.html">Admit to Ward</a>
                                            <a class="dropdown-item" href="refer-other-department.html">Refer to Other Department</a>
                                            <a class="dropdown-item" href="refer-other-hospital.html">Refer to Other Hospital</a>
                                            
                                        </div>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="out-patient-list.html">
                                            <span class="navbar-toggler-icon"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </nav>
                    </div>
                </div>
    `

    $(".sub_menu_items").html(submenu)

})