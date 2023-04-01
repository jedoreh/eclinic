$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item" id="tpr_menu">
                                        <a class="nav-link" href="TPR.html">TPR (Temperature Pulse Respiration)</a>
                                    </li>
                                    <li class="nav-item" id="drug_chart_menu">
                                        <a class="nav-link" href="drug-chart.html">Drug Chart</a>
                                    </li>
                                    <li class="nav-item" id="input_output_chart_menu">
                                        <a class="nav-link" href="main-input-output-chart.html">Input/Output Chart</a>
                                    </li>
                                    <li class="nav-item" id="glasgo_com_scale_menu">
                                        <a class="nav-link" href="glasgo-com-scale.html">Glasgo Com Scale</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="patient-tracking.html">
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