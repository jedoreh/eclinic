$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item" id="corpse_discharge_record_menu">
                                        <a class="nav-link" href="corpse-discharge-record.html">Corpse Discharge to Record</a>
                                    </li>
                                    <li class="nav-item" id="corpse_discharge_cashier_menu">
                                        <a class="nav-link" href="corpse-discharge-cashier.html">Corpse Discharge to Cashier</a>
                                    </li>
                                    <li class="nav-item" id="corpse_discharge_dienner_menu">
                                        <a class="nav-link" href="corpse-discharge-dienner.html">Corpse Discharge to Dienner</a>
                                    </li>
                                    <li class="nav-item" id="corpse_transfer_morgue_menu">
                                        <a class="nav-link" href="corpse-transfer-other-morgue.html">Corpse Transfer to Other Morgue</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="morgue-dept-registration.html">
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