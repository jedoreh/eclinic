$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item">
                                        <a class="nav-link" href="item-services-registration.html">Items/Services Registration</a>
                                    </li>
                                    <!--<li class="nav-item">
                                        <a class="nav-link" href="stock-bound-items-services.html">Stock Bound Items/Service Registration</a>
                                    </li>-->
                                    <li class="nav-item">
                                        <a class="nav-link" href="stocking-items-services.html">Stocking</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="pricing-setup.html">Pricing</a>
                                    </li>
                                     <li class="nav-item">
                                        <a class="nav-link" href="routine-setup.html">Routines</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="default-prescription.html">Prescription</a>
                                    </li>
                                    <!--<li class="nav-item">
                                        <a class="nav-link" href="update-setup.html">Update</a>
                                    </li>
                                       
                                    <li class="nav-item dropdown" id="dispensing_setup_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dispensing
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="prescription-dispensing.html">Prescription</a>
                                           <a class="dropdown-item" href="order-item-service.html">Order of Items/Services</a>
                                          </div>
                                    </li>-->
                                       <li class="nav-item">
                                        <a class="nav-link" href="requisition-setup.html">Requisition</a>
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

})