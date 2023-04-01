$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item" id="tpr_chart_menu">
                                        <a class="nav-link" href="tpr-chart.html">TPR Chart</a>
                                    </li>
                                    <li class="nav-item" id="input_output_chart_menu">
                                        <a class="nav-link" href="input-output-chart.html">Input/Output Chart</a>
                                    </li>
                                    <li class="nav-item" id="drug_dispensing_chart_menu">
                                        <a class="nav-link" href="drug-dispensing-chart.html">Drug Dispensing Chart</a>
                                    </li>
                                    <li class="nav-item" id="labour_chart_menu">
                                        <a class="nav-link" href="labour-chart.html">Labour Chart</a>
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