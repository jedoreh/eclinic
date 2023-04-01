$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item" id="discharge_home_menu">
                                        <a class="nav-link" href="discharge-home.html">Discharge Home</a>
                                    </li>
                                    <li class="nav-item" id="refer_other_department_menu">
                                        <a class="nav-link" href="ipd-refer-other-department.html">Referred to Other Department</a>
                                    </li>
                                    <li class="nav-item" id="refer_other_hospital_menu">
                                        <a class="nav-link" href="ipd-refer-other-hospital.html">Referred to Other Hospital</a>
                                    </li>
                                    <li class="nav-item" id="referred_morgue_menu">
                                        <a class="nav-link" href="refer-morgue.html">Referred to Morgue</a>
                                    </li>
                                    
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="in-patient-list.html">
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