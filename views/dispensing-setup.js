$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item" id="list_currently_morgue_menu">
                                        <a class="nav-link" href="prescription-dispensing.html">Prescription</a>
                                    </li>
                                    <li class="nav-item" id="list_discharged_menu">
                                        <a class="nav-link" href="order-item-service.html">Order of Item/Service</a>
                                    </li>
                                    
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="stock-item-dispensing.html">
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